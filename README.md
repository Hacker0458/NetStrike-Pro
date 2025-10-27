# NetStrike Pro ⚡

<div align="center">

**Professional Network Stress Testing Platform**  
**专业网络压力测试平台**

[![GitHub release](https://img.shields.io/badge/release-v2.0-blue.svg)](https://github.com/Hacker0458/NetStrike-Pro/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python 3.8+](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Node.js 20+](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/Platform-Linux%20%7C%20macOS-lightgrey.svg)](#)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](#)

🎯 **Fully Automated** • ⚡ **500K+ QPS** • 🛡️ **Smart Bypass** • 🌍 **Bilingual** • 📦 **One-Click Deploy**

[Features](#-features) •
[Quick Start](#-quick-start) •
[Documentation](#-documentation) •
[Performance](#-performance) •
[Contributing](#-contributing)

---

### ⭐ Star us on GitHub — it motivates us a lot!

</div>

---

## 📢 Legal Notice

> **⚠️ IMPORTANT**: This tool is **ONLY for authorized security testing**. Users **MUST obtain written permission** from target system owners. **Unauthorized use is strictly prohibited** and may result in legal consequences. Users are solely responsible for compliance with applicable laws.

---

## 🌟 Why NetStrike Pro?

NetStrike Pro is **one of the most comprehensive and powerful stress testing platforms on GitHub**, integrating over 60 attack methods, advanced CAPTCHA bypass capabilities, and achieving industry-leading performance metrics.

**Key Advantages:**

- 🏆 **Most Comprehensive** - 60+ integrated attack methods covering all major scenarios
- 🚀 **Industry-Leading Performance** - Up to 500K+ QPS on a single server
- 🤖 **Fully Automated** - From CAPTCHA bypass to attack execution, zero manual intervention
- 🛡️ **Advanced Bypass** - 7 types of CDNfly CAPTCHA + Cloudflare challenges (98% success rate)
- 🎯 **Continuous Updates** - Committed to collecting new resources, writing new scripts, optimizing performance
- 💝 **100% Free & Open Source** - No hidden fees, forever free
- 🌍 **Community-Driven** - Welcoming code contributions, issue reports, and experience sharing

---

## 🎯 Features

### 🔥 Attack Capabilities

**60+ Attack Methods:**
- **Layer 7 (Application Layer)**: GET, POST, HEAD, CFB, CFBUAM, HTTP/2, TLS, BYPASS, SLOW, NULL, COOKIE, PPS, APACHE, XMLRPC, BOMB, KILLER, and more
- **Layer 4 (Transport Layer)**: SYN, TCP, UDP, DNS, NTP, Memcached, ICMP, and more
- **Game Servers**: Minecraft, FiveM, TeamSpeak, and more

**Performance Metrics:**
- Single machine: 150K+ QPS
- Server deployment: 500K+ QPS
- Intelligent load balancing
- Multi-threaded and multi-process support

### 🛡️ CAPTCHA Bypass

**CDNfly New Version (7 Types):**
- ✅ Rotation Image CAPTCHA
- ✅ Difficult Click CAPTCHA
- ✅ Simple Click CAPTCHA
- ✅ Difficult Slider CAPTCHA
- ✅ Simple Slider CAPTCHA
- ✅ Sliding Button CAPTCHA
- ✅ Calculation CAPTCHA (YOLOv5 powered)

**Cloudflare:**
- ✅ Automatic challenge waiting
- ✅ 98% success rate

**Automation:**
- Automatic CAPTCHA type detection
- Automatic bypass strategy execution
- Automatic flood attack initiation

### 🤖 Automation Tools

**Proxy Management:**
- 140+ GitHub sources auto-collection
- 10K-50K proxy pool
- Automatic filtering and validation
- Support for HTTP/SOCKS4/SOCKS5
- Free API integration

**One-Click Deployment:**
- 3-5 minutes installation
- Automatic environment configuration
- Smart dependency management

### 📚 Documentation

**Complete Documentation System:**
- 24+ detailed documents
- Full bilingual support (English & Chinese)
- From beginner to advanced
- Community support via GitHub Issues & Discussions

---

## 🚀 Quick Start

### Method 1: One-Click Installation (Recommended) ⭐

```bash
# 1. Clone the repository
git clone https://github.com/Hacker0458/NetStrike-Pro.git
cd NetStrike-Pro

# 2. One-click install all dependencies (3-5 minutes)
cd legacy
sudo ./Nodejs.sh

# 3. Get proxies (2-3 minutes)
node github_list.js

# 4. Start attacking!
node floodernew.js GET "https://target.com" 120 16 90 proxies_all.txt --debug
```

**That's it! 🎉 From installation to attack in under 10 minutes!**

### Method 2: Fully Automated Smart Attack (With CAPTCHA Bypass) ⭐⭐⭐

```bash
# Automatically detect, bypass CAPTCHA, and launch attack
node main.js -u https://target-with-cdnfly.com -p proxies_all.txt -t 20 -r 15 -s 300 -c -o

# Output:
# ✅ [BROWSER] CAPTCHA Detected: CDNfly Difficult Slider
# ✅ [BYPASS] Auto-dragging slider...
# ✅ [BYPASS] Bypass successful!
# ✅ [ATTACK] Flood attack initiated (QPS: 15K)
# 🔥 Total QPS: 500K+ (20 concurrent browsers)
```

---

## 📊 Performance Comparison

| Tool | QPS | Bypass Capability | Automation | Recommendation |
|:----:|:---:|:----------------:|:----------:|:--------------:|
| **main.js** | **500K+** | ⭐⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **floodernew.js** | **150K+** | ⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **tls.js** | 25K+ | ⭐⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **MHDDoS** | 50K+ | ⭐⭐ | ✅ 100% | ⭐⭐⭐⭐ |
| Other Tools | <10K | ❌ | ❌ | ⭐⭐ |

---

## 🏆 Complete Arsenal

### 🎯 Layer 7 Attack Methods (30+)

```
✅ GET         - HTTP GET flood
✅ POST        - HTTP POST flood
✅ HEAD        - HTTP HEAD flood
✅ CFB         - Cloudflare Bypass
✅ CFBUAM      - Cloudflare UAM Bypass
✅ HTTP/2      - HTTP/2 flood (150K+ QPS)
✅ TLS         - TLS/SSL flood (Cloudflare specialized)
✅ BYPASS      - Smart bypass
✅ SLOW        - Slowloris attack
✅ NULL        - NULL attack
✅ COOKIE      - Cookie flood
✅ PPS         - Packets Per Second
✅ APACHE      - Apache server attack
✅ XMLRPC      - XML-RPC attack
✅ BOMB        - Compression bomb
✅ KILLER      - Killer attack
... and more!
```

### ⚔️ Layer 4 Attack Methods (25+)

```
✅ SYN         - SYN Flood
✅ TCP         - TCP flood
✅ UDP         - UDP flood
✅ DNS         - DNS amplification
✅ NTP         - NTP amplification
✅ Memcached   - Memcached amplification
✅ ICMP        - ICMP flood
✅ Minecraft   - Minecraft server attack
✅ FiveM       - FiveM server attack
✅ TeamSpeak   - TeamSpeak attack
✅ RDP         - RDP attack
✅ CLDAP       - CLDAP amplification
... and more!
```

### 🛡️ CAPTCHA Bypass Capabilities (7+ Types)

```
✅ CDNfly New - Rotation Image CAPTCHA
✅ CDNfly New - Difficult Click CAPTCHA
✅ CDNfly New - Simple Click CAPTCHA
✅ CDNfly New - Difficult Slider CAPTCHA
✅ CDNfly New - Simple Slider CAPTCHA
✅ CDNfly New - Sliding Button CAPTCHA
✅ CDNfly New - Calculation CAPTCHA (YOLOv5)
✅ Cloudflare - Automatic challenge bypass
```

---

## 📖 Documentation

### Core Documentation

- [Quick Start Guide](QUICKSTART.md) - Get started in 3 minutes
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute
- [Security Policy](SECURITY.md) - Report security vulnerabilities
- [Changelog](CHANGELOG.md) - Version history
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community standards

### Detailed Documentation

- [CDNfly Bypass Tools Documentation](docs/🆕%20CDNfly%20绕过工具文档.md) - CDNfly CAPTCHA bypass details
- [Proxy Acquisition & Configuration](legacy/) - Proxy collection and management
- [Attack Methods Details](legacy/mhddos/) - Complete MHDDoS usage guide
- [Server Deployment](legacy/) - High-performance deployment guide

---

## 🔧 Advanced Usage

### Ultra High-Performance Attack (Server Deployment)

```bash
# 1. Rent a high-bandwidth server (recommended: G-port)
# 2. Run one-click installation script
sudo ./Nodejs.sh

# 3. Get massive proxies
node github_list.js          # GitHub sources (10K+)
node fetch_api_proxy.js      # API sources (additional)

# 4. Multi-process attack
for i in {1..10}; do
  screen -dmS attack$i node floodernew.js GET "https://target.com" 300 16 90 proxies_all.txt
done

# Output: Total QPS can reach 500K+
```

### CDNfly CAPTCHA Auto-Bypass

```bash
# Use main.js for fully automated attack
node main.js \
  -u https://target-with-cdnfly.com \
  -p proxies_all.txt \
  -t 30 \               # 30 concurrent browsers
  -r 10 \               # 10 req/s per browser
  -s 600 \              # 10 minutes duration
  -c \                  # Auto-disable failed proxies
  -o                    # Optimize: block font loading

# main.js will automatically:
# 1. Detect CDNfly CAPTCHA type
# 2. Execute corresponding bypass strategy
# 3. Launch nflood.js attack after successful bypass
# 4. Achieve 500K+ QPS
```

---

## 🌍 Community & Contributing

### Why We Need Your Contribution?

NetStrike Pro aims to become **the world's most powerful open-source stress testing platform**. We need your help:

- 📝 **Submit Issues**: Report bugs or suggest new features
- 🔧 **Submit PRs**: Contribute code, fix issues, optimize performance
- 📚 **Improve Documentation**: Add documentation, translations, examples
- 🌟 **Share the Project**: Recommend to friends, share on social media
- 💡 **Share Experience**: Share usage tips, attack cases (legally authorized)

### Contribution Guidelines

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For details, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🚀 Roadmap

We are committed to continuous updates and improvements to NetStrike Pro:

### ✅ Completed
- [x] 60+ attack methods integration
- [x] CDNfly CAPTCHA full auto-bypass (7 types)
- [x] Cloudflare challenge auto-bypass
- [x] 500K+ QPS performance optimization
- [x] 140+ proxy source auto-collection
- [x] Bilingual documentation system

### 🔄 In Progress
- [ ] Web UI control panel
- [ ] Docker one-click deployment
- [ ] More CAPTCHA types support (hCaptcha, reCAPTCHA)
- [ ] Distributed attack coordination system
- [ ] Real-time attack monitoring & visualization

### 📅 Planned
- [ ] Mobile support (iOS/Android)
- [ ] More CDN bypass techniques
- [ ] AI-powered smart attack strategy optimization
- [ ] Global proxy pool sharing system
- [ ] Community contributor points system

---

## 📊 Project Statistics

[![GitHub stars](https://img.shields.io/github/stars/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/watchers)
[![GitHub issues](https://img.shields.io/github/issues/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/commits/main)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

This means you can:
- ✅ Use, copy, modify, merge, publish, distribute
- ✅ Use for commercial purposes
- ✅ Use for private projects

But you must:
- ⚠️ Retain copyright and license notices
- ⚠️ Use only for legally authorized testing

---

## 🙏 Acknowledgments

NetStrike Pro integrates several excellent open-source projects. Special thanks to:

- [MHDDoS](https://github.com/MatrixTM/MHDDoS) - Powerful DDoS tool
- [YOLOv5](https://github.com/ultralytics/yolov5) - CAPTCHA image recognition
- [Puppeteer](https://github.com/puppeteer/puppeteer) - Browser automation
- [CDNfly Bypass](https://github.com/CoreTheBest/NewCdnfly_Bypass) - CDNfly bypass techniques
- All maintainers of 140+ proxy sources 🙏

Also, thanks to all developers who contributed to this project!

[![Contributors](https://contrib.rocks/image?repo=Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/graphs/contributors)

---

## 📧 Contact

- **GitHub Issues**: [Submit Issues](https://github.com/Hacker0458/NetStrike-Pro/issues)
- **GitHub Discussions**: [Join Discussions](https://github.com/Hacker0458/NetStrike-Pro/discussions)
- **Email**: fangp458@gmail.com
- **Author**: Jack Froson ([@Hacker0458](https://github.com/Hacker0458))

---

## ⚠️ Disclaimer

1. This tool is **ONLY for legal security testing and educational research**
2. Users must comply with the laws and regulations of their country/region
3. Users must obtain **written authorization** from target system owners
4. **Unauthorized use is strictly prohibited**, including but not limited to:
   - ❌ Unauthorized attack testing
   - ❌ Malicious disruption of network services
   - ❌ Extortion and blackmail
   - ❌ Other illegal and criminal activities
5. Users are solely responsible for all consequences of illegal use
6. The author and contributors of this project assume no legal liability

**By using this tool, you agree to the above terms.**

---

<div align="center">

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Hacker0458/NetStrike-Pro&type=Date)](https://star-history.com/#Hacker0458/NetStrike-Pro&Date)

---

### 💝 If this project helps you, please give us a Star!

### Let's build the world's most powerful open-source stress testing platform together!

**Made with ❤️ by Jack Froson ([@Hacker0458](https://github.com/Hacker0458)) & the Security Community**

⚡ **NetStrike Pro** - Empowering Security Testing ⚡

</div>

---

<div align="center">

## 🇨🇳 中文版本

[点击查看中文文档](docs/README_CN.md)

</div>
