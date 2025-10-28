#!/bin/bash
###############################################################################
#                    VPS 代理服务器一键部署脚本                                 #
#                   Auto Proxy Server Deployment                             #
#                                                                             #
#  支持: SOCKS5 + HTTP 双协议                                                  #
#  软件: 3proxy                                                               #
#  系统: Ubuntu/Debian/CentOS                                                 #
#                                                                             #
#  使用: bash setup_proxy_server.sh                                          #
###############################################################################

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印函数
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Banner
print_banner() {
    echo -e "${GREEN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║              VPS 代理服务器一键部署工具                        ║
║           Auto Proxy Server Deployment Tool                  ║
║                                                               ║
║  功能: SOCKS5 + HTTP 双协议代理服务器                          ║
║  软件: 3proxy (轻量、高效、稳定)                               ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
}

# 检测系统
detect_os() {
    print_info "检测操作系统..."
    
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        OS=$ID
        VER=$VERSION_ID
    else
        print_error "无法检测操作系统"
        exit 1
    fi
    
    print_success "系统: $OS $VER"
}

# 安装依赖
install_dependencies() {
    print_info "安装依赖包..."
    
    if [[ "$OS" == "ubuntu" ]] || [[ "$OS" == "debian" ]]; then
        apt-get update -qq
        apt-get install -y wget gcc make curl net-tools
    elif [[ "$OS" == "centos" ]] || [[ "$OS" == "rhel" ]]; then
        yum install -y wget gcc make curl net-tools
    else
        print_error "不支持的操作系统: $OS"
        exit 1
    fi
    
    print_success "依赖安装完成"
}

# 安装 3proxy
install_3proxy() {
    print_info "下载并编译 3proxy..."
    
    cd /tmp
    
    # 下载最新版本
    PROXY_VERSION="0.9.4"
    wget -q https://github.com/3proxy/3proxy/archive/refs/tags/${PROXY_VERSION}.tar.gz -O 3proxy.tar.gz
    
    if [ $? -ne 0 ]; then
        print_warning "GitHub下载失败，尝试备用源..."
        wget -q https://3proxy.org/0.9.4/3proxy-${PROXY_VERSION}.tar.gz -O 3proxy.tar.gz
    fi
    
    tar -xzf 3proxy.tar.gz
    cd 3proxy-${PROXY_VERSION}
    
    # 编译
    print_info "编译中..."
    make -f Makefile.Linux > /dev/null 2>&1
    
    # 安装
    mkdir -p /etc/3proxy
    mkdir -p /var/log/3proxy
    cp bin/3proxy /usr/bin/
    chmod +x /usr/bin/3proxy
    
    print_success "3proxy 安装完成"
}

# 配置 3proxy
configure_3proxy() {
    print_info "配置 3proxy..."
    
    # 获取VPS公网IP
    VPS_IP=$(curl -s https://api.ipify.org)
    if [ -z "$VPS_IP" ]; then
        VPS_IP=$(curl -s https://ifconfig.me)
    fi
    
    print_info "检测到公网IP: $VPS_IP"
    
    # 生成随机用户名和密码
    PROXY_USER="proxy_$(openssl rand -hex 4)"
    PROXY_PASS="$(openssl rand -base64 16 | tr -d '=+/' | cut -c1-16)"
    
    # SOCKS5端口
    SOCKS5_PORT=1080
    
    # HTTP端口
    HTTP_PORT=3128
    
    # 创建配置文件
    cat > /etc/3proxy/3proxy.cfg << EOF
# 3proxy 配置文件
# 自动生成于 $(date)

# 日志设置
log /var/log/3proxy/3proxy.log D
logformat "- +_L%t.%. %N.%p %E %U %C:%c %R:%r %O %I %h %T"
rotate 30

# 认证设置
auth strong
users ${PROXY_USER}:CL:${PROXY_PASS}

# 允许所有IP连接（生产环境建议限制）
allow ${PROXY_USER}

# SOCKS5 代理 (端口 ${SOCKS5_PORT})
socks -p${SOCKS5_PORT}

# HTTP 代理 (端口 ${HTTP_PORT})
proxy -p${HTTP_PORT}

# 限制并发连接数（可调整）
maxconn 500

# 超时设置（秒）
timeouts 1 5 30 60 180 1800 15 60
EOF

    print_success "配置文件创建完成: /etc/3proxy/3proxy.cfg"
    
    # 保存认证信息
    cat > /etc/3proxy/auth.txt << EOF
# 3proxy 认证信息
# 请妥善保管此文件！

VPS IP:          ${VPS_IP}
SOCKS5 端口:     ${SOCKS5_PORT}
HTTP 端口:       ${HTTP_PORT}
用户名:          ${PROXY_USER}
密码:            ${PROXY_PASS}

# 代理格式（用于脚本）
SOCKS5: ${VPS_IP}:${SOCKS5_PORT}:${PROXY_USER}:${PROXY_PASS}
HTTP:   ${VPS_IP}:${HTTP_PORT}:${PROXY_USER}:${PROXY_PASS}

# 测试命令
curl -x socks5://${PROXY_USER}:${PROXY_PASS}@${VPS_IP}:${SOCKS5_PORT} https://api.ipify.org
curl -x http://${PROXY_USER}:${PROXY_PASS}@${VPS_IP}:${HTTP_PORT} https://api.ipify.org
EOF

    chmod 600 /etc/3proxy/auth.txt
}

# 创建systemd服务
create_service() {
    print_info "创建 systemd 服务..."
    
    cat > /etc/systemd/system/3proxy.service << EOF
[Unit]
Description=3proxy Proxy Server
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/3proxy /etc/3proxy/3proxy.cfg
ExecStop=/bin/kill -TERM \$MAINPID
Restart=on-failure
RestartSec=5s

# 安全设置
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF

    systemctl daemon-reload
    systemctl enable 3proxy
    
    print_success "systemd 服务创建完成"
}

# 配置防火墙
configure_firewall() {
    print_info "配置防火墙..."
    
    # UFW (Ubuntu/Debian)
    if command -v ufw &> /dev/null; then
        ufw allow 1080/tcp comment '3proxy SOCKS5'
        ufw allow 3128/tcp comment '3proxy HTTP'
        print_success "UFW 防火墙规则已添加"
    fi
    
    # firewalld (CentOS/RHEL)
    if command -v firewall-cmd &> /dev/null; then
        firewall-cmd --permanent --add-port=1080/tcp
        firewall-cmd --permanent --add-port=3128/tcp
        firewall-cmd --reload
        print_success "firewalld 防火墙规则已添加"
    fi
    
    # iptables 直接配置
    if ! command -v ufw &> /dev/null && ! command -v firewall-cmd &> /dev/null; then
        iptables -I INPUT -p tcp --dport 1080 -j ACCEPT
        iptables -I INPUT -p tcp --dport 3128 -j ACCEPT
        
        # 保存规则
        if command -v netfilter-persistent &> /dev/null; then
            netfilter-persistent save
        elif [ -f /etc/init.d/iptables ]; then
            /etc/init.d/iptables save
        fi
        
        print_success "iptables 防火墙规则已添加"
    fi
}

# 系统优化
optimize_system() {
    print_info "优化系统参数..."
    
    cat >> /etc/sysctl.conf << EOF

# 3proxy 性能优化
net.ipv4.ip_forward = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.ip_local_port_range = 10000 65000
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_max_tw_buckets = 5000
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 65535
fs.file-max = 655350
EOF

    sysctl -p > /dev/null 2>&1
    
    # 提高文件描述符限制
    cat >> /etc/security/limits.conf << EOF

# 3proxy 限制优化
* soft nofile 655350
* hard nofile 655350
* soft nproc 655350
* hard nproc 655350
EOF

    print_success "系统优化完成"
}

# 启动服务
start_service() {
    print_info "启动 3proxy 服务..."
    
    systemctl start 3proxy
    
    if systemctl is-active --quiet 3proxy; then
        print_success "3proxy 服务启动成功"
    else
        print_error "3proxy 服务启动失败"
        print_info "查看日志: journalctl -u 3proxy -n 50"
        exit 1
    fi
}

# 测试代理
test_proxy() {
    print_info "测试代理连接..."
    
    # 读取认证信息
    source <(grep "PROXY_USER\|PROXY_PASS\|VPS_IP" /etc/3proxy/3proxy.cfg | sed 's/users //g' | awk -F: '{print "PROXY_USER="$1"\nPROXY_PASS="$2}')
    VPS_IP=$(curl -s https://api.ipify.org)
    
    # 测试 SOCKS5
    print_info "测试 SOCKS5 (1080)..."
    RESULT=$(curl -s --max-time 10 -x socks5://${PROXY_USER}:${PROXY_PASS}@${VPS_IP}:1080 https://api.ipify.org 2>&1)
    
    if [ $? -eq 0 ]; then
        print_success "SOCKS5 代理工作正常 (出口IP: $RESULT)"
    else
        print_warning "SOCKS5 测试失败"
    fi
    
    # 测试 HTTP
    print_info "测试 HTTP (3128)..."
    RESULT=$(curl -s --max-time 10 -x http://${PROXY_USER}:${PROXY_PASS}@${VPS_IP}:3128 https://api.ipify.org 2>&1)
    
    if [ $? -eq 0 ]; then
        print_success "HTTP 代理工作正常 (出口IP: $RESULT)"
    else
        print_warning "HTTP 测试失败"
    fi
}

# 显示结果
show_result() {
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                  🎉 安装完成！                                 ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    
    print_success "代理服务器信息已保存到: /etc/3proxy/auth.txt"
    echo ""
    
    cat /etc/3proxy/auth.txt
    
    echo ""
    echo -e "${YELLOW}重要提示:${NC}"
    echo "1. 请妥善保管认证信息"
    echo "2. 建议修改默认端口提高安全性"
    echo "3. 配置文件位置: /etc/3proxy/3proxy.cfg"
    echo "4. 日志文件位置: /var/log/3proxy/3proxy.log"
    echo ""
    echo -e "${BLUE}常用命令:${NC}"
    echo "  启动服务: systemctl start 3proxy"
    echo "  停止服务: systemctl stop 3proxy"
    echo "  重启服务: systemctl restart 3proxy"
    echo "  查看状态: systemctl status 3proxy"
    echo "  查看日志: tail -f /var/log/3proxy/3proxy.log"
    echo ""
}

# 主函数
main() {
    print_banner
    
    # 检查root权限
    if [ "$EUID" -ne 0 ]; then 
        print_error "请使用 root 权限运行此脚本"
        exit 1
    fi
    
    # 执行安装步骤
    detect_os
    install_dependencies
    install_3proxy
    configure_3proxy
    create_service
    configure_firewall
    optimize_system
    start_service
    
    # 等待服务启动
    sleep 3
    
    test_proxy
    show_result
    
    print_success "全部完成！"
}

# 运行主函数
main

