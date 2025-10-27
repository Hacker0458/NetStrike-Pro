# 🎯 NetStrike Pro

<div align="center">

**Professional Network Stress Testing Suite**  
**专业网络压力测试套件**

[![Version](https://img.shields.io/badge/version-5.0.0-blue.svg)](https://github.com/yourusername/netstrike-pro)
[![Python](https://img.shields.io/badge/python-3.8+-green.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-Educational-orange.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/yourusername/netstrike-pro)

[English](#english) | [中文](#中文)

</div>

---

## ⚠️ IMPORTANT LEGAL NOTICE | 重要法律声明

**🔴 FOR AUTHORIZED SECURITY TESTING ONLY 🔴**

This tool is designed for **AUTHORIZED** security testing and research purposes only. Unauthorized use against systems you do not own or have explicit permission to test is **ILLEGAL** and may result in criminal prosecution.

**本工具仅供合法授权的安全测试使用！**  
未经授权的测试是违法的，可能面临刑事起诉！

### Before Use | 使用前必读

- ✅ You MUST have written authorization from the target owner
- ✅ You MUST read [LEGAL_NOTICE.md](LEGAL_NOTICE.md) completely
- ✅ You MUST understand and accept all legal responsibilities

**The authors assume NO responsibility for misuse of this tool.**

---

## 🌟 Features | 特性

<div align="center">

| Feature | Description | Status |
|---------|-------------|--------|
| **🎯 Dual-Track System** | Original tools + Modern framework | ✅ Complete |
| **💪 60+ Methods** | Layer 4 + Layer 7 + Game protocols | ✅ Ready |
| **🌍 Multi-language** | English + Chinese support | ✅ Complete |
| **🎨 Rich UI** | Modern terminal interface | ✅ Complete |
| **🤖 Auto Proxy** | Automated proxy management | ✅ Ready |
| **📖 Full Docs** | 12+ detailed documents | ✅ Complete |

</div>

---

## 🚀 Quick Start | 快速开始

### Installation | 安装

```bash
# Clone repository | 克隆仓库
git clone https://github.com/yourusername/netstrike-pro.git
cd netstrike-pro

# Install dependencies | 安装依赖
pip3 install -r requirements.txt

# Optional: Install UI dependencies | 可选：安装 UI 依赖
pip3 install rich pyfiglet colorama
```

### Basic Usage | 基础用法

**Option A: Use Original Tools (Recommended)** | **方案 A: 使用原有工具（推荐）**

```bash
cd legacy

# Refresh proxies | 刷新代理
./refresh_proxy.sh

# CloudFlare bypass (Strongest) | CloudFlare 绕过（最强）
node 新建文件夹/tls.js https://target.com 120 128 10 proxy_paid.txt

# Python CC attack | Python CC 攻击
python3 cc.py -url https://target.com -f proxy_paid.txt -v http -s 60

# MHDDoS specialized bypass | MHDDoS 专用绕过
python3 mhddos/start.py CFB 0 https://target.com 200 proxy_paid.txt 100 180
```

**Option B: New Framework** | **方案 B: 新框架**

```bash
# View version | 查看版本
python3 attack.py --version

# Show help | 显示帮助
python3 attack.py --help

# View UI | 查看界面
python3 -c "from ui.intro import show_intro; show_intro('en')"
```

---

## 📁 Project Structure | 项目结构

```
netstrike-pro/
├── START_HERE.md          ⭐ Start here | 从这里开始
├── legacy/                ⭐ All original tools | 所有原有工具
│   ├── cc.py             ✅ Python CC attack
│   ├── cc/               ✅ Node.js tools
│   ├── mhddos/           ✅ MHDDoS project (60+ methods)
│   ├── 新建文件夹/        ✅ tls.js, cfx.js, scrape.py
│   ├── 超高速筛选.py      ✅ Proxy filtering
│   └── refresh_proxy.sh  ✅ Proxy refresh
├── attack.py              New framework entry
├── ui/                    Rich UI module
├── config/                Configuration system
├── core/                  Attack engine (to be integrated)
├── proxy/                 Proxy management
├── detector/              Target detection
└── [Other framework files]
```

---

## 🎯 Attack Methods | 攻击方法

### Layer 7 HTTP (25+ methods)

**CloudFlare Bypass:**
- HTTP/2 Bypass (tls.js) ⭐⭐⭐⭐⭐
- UAM Bypass
- Basic Bypass

**CDN Bypass:**
- OVH Bypass
- DDoS Guard Bypass
- Arvan Cloud Bypass
- Google Shield Bypass

**HTTP Flood:**
- Basic HTTP GET flood
- POST flood
- Advanced HTTP (cfx.js)
- High-byte stress
- Slowloris

### Layer 4 (20+ methods via MHDDoS)

- TCP/UDP/SYN/ICMP Flood
- Game protocols (Minecraft, FiveM, TeamSpeak, etc.)
- Amplification attacks (DNS, NTP, Memcached, etc.)

---

## 📖 Documentation | 文档

### User Guides | 用户指南

| Document | Description |
|----------|-------------|
| [START_HERE.md](START_HERE.md) | Quick start guide ⭐ |
| [🎯 完整使用指南.md](🎯%20完整使用指南.md) | Complete usage guide |
| [🌟 项目最终状态.md](🌟%20项目最终状态.md) | Project status |
| [QUICKSTART.md](QUICKSTART.md) | Quick reference |

### Technical Docs | 技术文档

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Framework overview |
| [📖 README_CN.md](📖%20README_CN.md) | Chinese overview |
| [✅ 交付清单.md](✅%20交付清单.md) | Delivery checklist |

### Legal | 法律文档

| Document | Language |
|----------|----------|
| [LEGAL_NOTICE.md](LEGAL_NOTICE.md) | English |
| [法律声明.md](法律声明.md) | 中文 |

---

## 💡 Tool Comparison | 工具对比

| Tool | Power | Use Case | Recommended |
|------|-------|----------|-------------|
| **tls.js** | ⭐⭐⭐⭐⭐ | CloudFlare bypass | ⭐⭐⭐⭐⭐ |
| **cc.py** | ⭐⭐⭐⭐ | General stable | ⭐⭐⭐⭐⭐ |
| **MHDDoS** | ⭐⭐⭐⭐⭐ | Specialized bypass | ⭐⭐⭐⭐⭐ |
| **cfx.js** | ⭐⭐⭐⭐ | Quick test | ⭐⭐⭐⭐ |

---

## 🎨 Screenshot | 界面展示

```
███╗   ██╗███████╗████████╗███████╗████████╗██████╗ ██╗██╗  ██╗███████╗
████╗  ██║██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝██╔════╝
██╔██╗ ██║█████╗     ██║   ███████╗   ██║   ██████╔╝██║█████╔╝ █████╗  
██║╚██╗██║██╔══╝     ██║   ╚════██║   ██║   ██╔══██╗██║██╔═██╗ ██╔══╝  
██║ ╚████║███████╗   ██║   ███████║   ██║   ██║  ██║██║██║  ██╗███████╗

██████╗ ██████╗  ██████╗
██╔══██╗██╔══██╗██╔═══██╗
██████╔╝██████╔╝██║   ██║
██╔═══╝ ██╔══██╗██║   ██║
██║     ██║  ██║╚██████╔╝

Professional Network Stress Testing Suite • Version 5.0
```

---

## 🤝 Contributing | 贡献

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

## 📜 License | 许可证

This project is for **educational and authorized security testing purposes only**.

See [LICENSE](LICENSE) for more information.

---

## ⚠️ Disclaimer | 免责声明

**THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.**

The authors and contributors:
- ❌ Do NOT endorse illegal activities
- ❌ Are NOT responsible for misuse
- ❌ Do NOT provide support for unauthorized testing

**Use at your own risk and responsibility.**

---

## 📞 Support | 支持

- 📖 [Documentation](START_HERE.md)
- 💬 [Issues](https://github.com/yourusername/netstrike-pro/issues)
- 🌟 [Star this repo](https://github.com/yourusername/netstrike-pro)

---

## 🎯 Project Status | 项目状态

- ✅ **Framework**: Complete | 框架完成
- ✅ **Original Tools**: 100% Preserved | 原工具 100% 保留
- ✅ **Documentation**: Complete | 文档完整
- ⏳ **Core Integration**: Optional | 核心集成（可选）

---

<div align="center">

**NetStrike Pro v5.0.0 Ultimate Edition**

🎯 Dual-Track | ✅ 100% Preserved | 💪 Ready to Use | 🚀 Continuous Evolution

Made with ❤️ for Security Researchers

---

⭐ **Star this repo if you find it helpful!** ⭐

</div>


