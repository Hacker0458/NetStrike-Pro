#!/bin/bash
###############################################################################
#                    代理池管理工具                                            #
#              Proxy Pool Management Tool                                    #
#                                                                             #
#  功能:                                                                       #
#  - 批量管理多个VPS代理服务器                                                 #
#  - 生成代理列表文件                                                          #
#  - 检测代理可用性                                                            #
#  - 性能测试                                                                  #
###############################################################################

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

PROXY_DIR="$HOME/.netstrike_proxies"
PROXY_LIST="$PROXY_DIR/vps_list.txt"
OUTPUT_FILE="proxy_pool.txt"

# 初始化
init() {
    mkdir -p "$PROXY_DIR"
    
    if [ ! -f "$PROXY_LIST" ]; then
        cat > "$PROXY_LIST" << EOF
# VPS 代理列表配置文件
# 格式: IP:端口:用户名:密码:类型(socks5/http)
# 示例: 1.2.3.4:1080:user:pass:socks5

EOF
    fi
}

# Banner
print_banner() {
    echo -e "${GREEN}"
    cat << "EOF"
╔═══════════════════════════════════════════════════════════════╗
║                   代理池管理工具                               ║
║              Proxy Pool Management Tool                       ║
╚═══════════════════════════════════════════════════════════════╝
EOF
    echo -e "${NC}"
}

# 添加VPS
add_vps() {
    echo -e "${BLUE}=== 添加 VPS 代理 ===${NC}"
    echo ""
    
    read -p "VPS IP地址: " vps_ip
    read -p "SOCKS5端口 [1080]: " socks_port
    socks_port=${socks_port:-1080}
    read -p "HTTP端口 [3128]: " http_port
    http_port=${http_port:-3128}
    read -p "用户名: " username
    read -s -p "密码: " password
    echo ""
    
    # 添加到列表
    echo "${vps_ip}:${socks_port}:${username}:${password}:socks5" >> "$PROXY_LIST"
    echo "${vps_ip}:${http_port}:${username}:${password}:http" >> "$PROXY_LIST"
    
    echo -e "${GREEN}✓ VPS 添加成功！${NC}"
}

# 列出所有VPS
list_vps() {
    echo -e "${BLUE}=== VPS 列表 ===${NC}"
    echo ""
    
    if [ ! -s "$PROXY_LIST" ] || [ $(grep -v '^#' "$PROXY_LIST" | grep -v '^$' | wc -l) -eq 0 ]; then
        echo -e "${YELLOW}暂无VPS代理${NC}"
        return
    fi
    
    echo "序号 | IP地址 | 端口 | 类型 | 状态"
    echo "----------------------------------------"
    
    local index=1
    while IFS=: read -r ip port user pass type; do
        if [[ ! "$ip" =~ ^# ]] && [ -n "$ip" ]; then
            # 测试连接
            if curl -s --max-time 5 -x "${type}://${user}:${pass}@${ip}:${port}" https://api.ipify.org > /dev/null 2>&1; then
                status="${GREEN}✓ 在线${NC}"
            else
                status="${RED}✗ 离线${NC}"
            fi
            
            echo -e "$index | $ip | $port | $type | $status"
            ((index++))
        fi
    done < "$PROXY_LIST"
}

# 测试所有代理
test_all() {
    echo -e "${BLUE}=== 测试所有代理 ===${NC}"
    echo ""
    
    local total=0
    local online=0
    local offline=0
    
    while IFS=: read -r ip port user pass type; do
        if [[ ! "$ip" =~ ^# ]] && [ -n "$ip" ]; then
            ((total++))
            echo -n "测试 ${ip}:${port} (${type})... "
            
            result=$(curl -s --max-time 5 -x "${type}://${user}:${pass}@${ip}:${port}" https://api.ipify.org 2>&1)
            
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}✓ 在线${NC} (出口IP: $result)"
                ((online++))
            else
                echo -e "${RED}✗ 离线${NC}"
                ((offline++))
            fi
        fi
    done < "$PROXY_LIST"
    
    echo ""
    echo -e "${BLUE}统计:${NC} 总计 $total | ${GREEN}在线 $online${NC} | ${RED}离线 $offline${NC}"
}

# 生成代理列表
generate_list() {
    echo -e "${BLUE}=== 生成代理列表 ===${NC}"
    echo ""
    
    read -p "选择类型 [1.SOCKS5 2.HTTP 3.全部]: " choice
    read -p "输出文件 [proxy_pool.txt]: " output
    output=${output:-proxy_pool.txt}
    
    > "$output"
    
    local count=0
    while IFS=: read -r ip port user pass type; do
        if [[ ! "$ip" =~ ^# ]] && [ -n "$ip" ]; then
            case $choice in
                1)
                    if [ "$type" == "socks5" ]; then
                        echo "${ip}:${port}:${user}:${pass}" >> "$output"
                        ((count++))
                    fi
                    ;;
                2)
                    if [ "$type" == "http" ]; then
                        echo "${ip}:${port}:${user}:${pass}" >> "$output"
                        ((count++))
                    fi
                    ;;
                3|*)
                    echo "${ip}:${port}:${user}:${pass}" >> "$output"
                    ((count++))
                    ;;
            esac
        fi
    done < "$PROXY_LIST"
    
    echo -e "${GREEN}✓ 已生成 $count 个代理到 $output${NC}"
}

# 性能测试
benchmark() {
    echo -e "${BLUE}=== 代理性能测试 ===${NC}"
    echo ""
    
    local test_url="https://www.google.com"
    read -p "测试URL [$test_url]: " custom_url
    test_url=${custom_url:-$test_url}
    
    echo ""
    echo "代理 | 延迟(ms) | 速度"
    echo "----------------------------------------"
    
    while IFS=: read -r ip port user pass type; do
        if [[ ! "$ip" =~ ^# ]] && [ -n "$ip" ]; then
            echo -n "${ip}:${port} | "
            
            start=$(date +%s%3N)
            curl -s --max-time 10 -x "${type}://${user}:${pass}@${ip}:${port}" "$test_url" > /dev/null 2>&1
            
            if [ $? -eq 0 ]; then
                end=$(date +%s%3N)
                latency=$((end - start))
                
                if [ $latency -lt 500 ]; then
                    speed="${GREEN}快${NC}"
                elif [ $latency -lt 1000 ]; then
                    speed="${YELLOW}中${NC}"
                else
                    speed="${RED}慢${NC}"
                fi
                
                echo -e "${latency}ms | $speed"
            else
                echo -e "${RED}超时${NC}"
            fi
        fi
    done < "$PROXY_LIST"
}

# 清理离线代理
cleanup() {
    echo -e "${BLUE}=== 清理离线代理 ===${NC}"
    echo ""
    
    local temp_file=$(mktemp)
    local removed=0
    
    while IFS=: read -r ip port user pass type; do
        if [[ "$ip" =~ ^# ]] || [ -z "$ip" ]; then
            echo "$ip:$port:$user:$pass:$type" >> "$temp_file"
            continue
        fi
        
        echo -n "检测 ${ip}:${port}... "
        
        if curl -s --max-time 5 -x "${type}://${user}:${pass}@${ip}:${port}" https://api.ipify.org > /dev/null 2>&1; then
            echo -e "${GREEN}保留${NC}"
            echo "$ip:$port:$user:$pass:$type" >> "$temp_file"
        else
            echo -e "${RED}移除${NC}"
            ((removed++))
        fi
    done < "$PROXY_LIST"
    
    mv "$temp_file" "$PROXY_LIST"
    
    echo ""
    echo -e "${GREEN}✓ 已移除 $removed 个离线代理${NC}"
}

# 导入配置
import_config() {
    echo -e "${BLUE}=== 导入配置 ===${NC}"
    echo ""
    
    read -p "配置文件路径: " config_file
    
    if [ ! -f "$config_file" ]; then
        echo -e "${RED}✗ 文件不存在${NC}"
        return
    fi
    
    local count=0
    while IFS= read -r line; do
        if [[ ! "$line" =~ ^# ]] && [ -n "$line" ]; then
            echo "$line" >> "$PROXY_LIST"
            ((count++))
        fi
    done < "$config_file"
    
    echo -e "${GREEN}✓ 已导入 $count 个代理${NC}"
}

# 批量部署
batch_deploy() {
    echo -e "${BLUE}=== 批量部署到VPS ===${NC}"
    echo ""
    
    read -p "VPS列表文件 (格式: root@ip): " vps_file
    
    if [ ! -f "$vps_file" ]; then
        echo -e "${RED}✗ 文件不存在${NC}"
        return
    fi
    
    read -p "SSH端口 [22]: " ssh_port
    ssh_port=${ssh_port:-22}
    
    while IFS= read -r vps; do
        echo -e "\n${YELLOW}>>> 部署到 $vps${NC}"
        
        # 上传脚本
        scp -P "$ssh_port" "$(dirname "$0")/setup_proxy_server.sh" "$vps:/tmp/" 2>/dev/null
        
        # 执行安装
        ssh -p "$ssh_port" "$vps" "bash /tmp/setup_proxy_server.sh" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ 部署成功${NC}"
            
            # 获取认证信息
            ssh -p "$ssh_port" "$vps" "cat /etc/3proxy/auth.txt" 2>/dev/null | grep -E "VPS IP|用户名|密码|SOCKS5 端口"
        else
            echo -e "${RED}✗ 部署失败${NC}"
        fi
    done < "$vps_file"
}

# 主菜单
main_menu() {
    while true; do
        print_banner
        echo "1. 添加 VPS 代理"
        echo "2. 列出所有代理"
        echo "3. 测试所有代理"
        echo "4. 生成代理列表"
        echo "5. 性能测试"
        echo "6. 清理离线代理"
        echo "7. 导入配置"
        echo "8. 批量部署"
        echo "9. 退出"
        echo ""
        read -p "请选择 [1-9]: " choice
        
        case $choice in
            1) add_vps ;;
            2) list_vps ;;
            3) test_all ;;
            4) generate_list ;;
            5) benchmark ;;
            6) cleanup ;;
            7) import_config ;;
            8) batch_deploy ;;
            9) exit 0 ;;
            *) echo -e "${RED}无效选择${NC}" ;;
        esac
        
        echo ""
        read -p "按回车继续..."
        clear
    done
}

# 主程序
init
clear
main_menu

