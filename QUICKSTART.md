# 🚀 NetStrike Pro - Quick Start Guide
## 快速开始指南

**Version 5.0.0 Framework** | 框架版本  
**Status**: ✅ Framework Ready | 框架就绪

---

## ⚡ 3-Step Quick Start

### Step 1: Install Dependencies
### 步骤 1: 安装依赖

```bash
cd NetStrike-Pro
pip3 install rich pyfiglet colorama PyYAML
```

### Step 2: Test Framework
### 步骤 2: 测试框架

```bash
# Show version / 显示版本
python3 attack.py --version

# Show help / 显示帮助
python3 attack.py --help

# View intro (English) / 查看介绍（英文）
python3 -c "from ui.intro import show_intro; show_intro('en')"

# View intro (Chinese) / 查看介绍（中文）
python3 -c "from ui.intro import show_intro; show_intro('zh')"
```

### Step 3: Understand Current Status
### 步骤 3: 了解当前状态

**✅ What Works Now** | **现在可用的功能**:
- ✅ Professional UI framework | 专业 UI 框架
- ✅ Multi-language support (EN/ZH) | 多语言支持（中英文）
- ✅ Command-line interface | 命令行界面
- ✅ Help system | 帮助系统
- ✅ Configuration system | 配置系统

**⏳ In Development** | **开发中的功能**:
- ⏳ 60+ attack methods | 60+ 种攻击方法
- ⏳ Proxy management | 代理管理
- ⏳ Target detection | 目标检测
- ⏳ Interactive menu | 交互式菜单

---

## 🎯 Current Capabilities
## 当前功能

### 1. Framework Testing | 框架测试

```bash
# Basic commands / 基础命令
python3 attack.py --version        # ✅ Works / 可用
python3 attack.py --help           # ✅ Works / 可用
python3 attack.py --lang zh        # ✅ Works / 可用

# Placeholder commands / 占位命令
python3 attack.py --interactive    # ⏳ Shows info / 显示信息
python3 attack.py --list-methods   # ⏳ Shows info / 显示信息
python3 attack.py https://test.com # ⏳ Shows info / 显示信息
```

### 2. UI Preview | UI 预览

```bash
# English intro / 英文介绍
python3 -c "from ui.intro import show_intro; show_intro('en')"

# Chinese intro / 中文介绍
python3 -c "from ui.intro import show_intro; show_intro('zh')"
```

Expected output / 预期输出:
```
███╗   ██╗███████╗████████╗███████╗████████╗██████╗ ██╗██╗  ██╗███████╗
████╗  ██║██╔════╝╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗██║██║ ██╔╝██╔════╝
...
Professional Network Stress Testing Suite • Version 5.0
```

### 3. Configuration | 配置

```bash
# View main config / 查看主配置
cat config/settings.yaml

# View English language config / 查看英文语言配置
cat config/language/en.yaml

# View Chinese language config / 查看中文语言配置
cat config/language/zh.yaml
```

---

## 📊 Project Structure Overview
## 项目结构概览

```
NetStrike-Pro/
├── attack.py              ✅ Main entry (framework ready)
├── ui/                    ✅ UI module (working)
│   ├── language.py       ✅ Multi-language support
│   └── intro.py          ✅ Introduction page
├── config/                ✅ Configuration system
│   ├── settings.yaml     ✅ Main settings
│   └── language/         ✅ Language files
├── core/                  ⏳ Attack methods (to be integrated)
├── proxy/                 ⏳ Proxy management (to be implemented)
├── detector/              ⏳ Target detection (to be implemented)
├── requirements.txt       ✅ Dependencies list
├── install.sh            ✅ Installation script
└── README.md             ✅ Documentation
```

---

## 🔥 What's Next?
## 接下来做什么？

### For Users | 对于用户

**Current State** | **当前状态**:
- This is a **FRAMEWORK** version | 这是**框架**版本
- Core attack methods need integration | 核心攻击方法需要集成
- Proxy system needs implementation | 代理系统需要实现

**What You Can Do** | **你可以做什么**:
1. ✅ Explore the UI and interface | 探索 UI 和界面
2. ✅ Test the framework | 测试框架
3. ✅ Review the documentation | 查看文档
4. ⏳ Wait for method integration | 等待方法集成

### For Developers | 对于开发者

**Next Steps** | **下一步**:

1. **Integrate Attack Methods** | **集成攻击方法**:
   ```bash
   # Copy methods from original project
   # 从原项目复制方法
   cp ../cc.py core/layer7/http_basic.py
   cp ../mhddos/methods/*.py core/layer7/
   ```

2. **Implement Proxy System** | **实现代理系统**:
   ```bash
   # Integrate proxy management
   # 集成代理管理
   cp ../scrape.py proxy/scraper.py
   cp ../超高速筛选.py proxy/validator.py
   ```

3. **Add Interactive Menu** | **添加交互式菜单**:
   ```bash
   # Create full interactive interface
   # 创建完整交互式界面
   nano ui/interactive.py
   ```

---

## 💡 Tips & Tricks
## 技巧与提示

### Testing Framework | 测试框架

```bash
# Quick test all commands
# 快速测试所有命令
python3 attack.py --version
python3 attack.py --help
python3 attack.py --interactive
python3 attack.py --list-methods
python3 attack.py --method-info test
python3 attack.py --proxy-update
```

### Customization | 自定义

```bash
# Edit main settings
# 编辑主设置
nano config/settings.yaml

# Edit language files
# 编辑语言文件
nano config/language/en.yaml
nano config/language/zh.yaml
```

### Development | 开发

```bash
# Run in debug mode
# 调试模式运行
PYTHONDONTWRITEBYTECODE=1 python3 attack.py --help

# Check imports
# 检查导入
python3 -c "import ui.language; import ui.intro; print('OK')"
```

---

## 🎨 UI Features Showcase
## UI 特性展示

### 1. ASCII Logo | ASCII 标志

The framework includes a professional ASCII logo with gradient colors:
框架包含专业的渐变色 ASCII 标志：

- Cyan to Blue gradient for main logo | 主标志使用青色到蓝色渐变
- Bold and professional appearance | 粗体专业外观
- Multi-line centered display | 多行居中显示

### 2. Legal Notice | 法律声明

Prominent legal warning in:
醒目的法律警告：

- Red border panel | 红色边框面板
- Bold yellow title | 粗体黄色标题
- Multi-language support | 多语言支持

### 3. Feature List | 功能列表

Clear feature presentation:
清晰的功能展示：

- Green checkmarks | 绿色对勾
- Organized layout | 有组织的布局
- Bilingual descriptions | 双语描述

---

## 🐛 Troubleshooting
## 故障排除

### Issue: Module not found
### 问题：模块未找到

```bash
# Solution: Install dependencies
# 解决方案：安装依赖
pip3 install rich pyfiglet colorama PyYAML
```

### Issue: Permission denied
### 问题：权限被拒绝

```bash
# Solution: Set permissions
# 解决方案：设置权限
chmod +x attack.py install.sh
```

### Issue: UI not displaying correctly
### 问题：UI 显示不正确

```bash
# Solution: Check terminal support
# 解决方案：检查终端支持
echo $TERM  # Should show color support
export TERM=xterm-256color
```

---

## 📞 Support & Resources
## 支持与资源

**Documentation** | **文档**:
- 📖 [README.md](README.md) - Main documentation
- 📖 [QUICKSTART.md](QUICKSTART.md) - This file
- 📖 [🎉 项目框架完成报告.md](🎉%20项目框架完成报告.md) - Status report

**Configuration** | **配置**:
- ⚙️ [config/settings.yaml](config/settings.yaml) - Main settings
- 🌍 [config/language/en.yaml](config/language/en.yaml) - English
- 🌍 [config/language/zh.yaml](config/language/zh.yaml) - Chinese

---

## ✅ Checklist
## 检查清单

**Setup** | **设置**:
- [ ] Python 3.8+ installed | 已安装 Python 3.8+
- [ ] Dependencies installed | 已安装依赖
- [ ] Permissions set | 已设置权限
- [ ] Framework tested | 已测试框架

**Ready to Use** | **准备使用**:
- [ ] Can run `--version` | 可运行 `--version`
- [ ] Can run `--help` | 可运行 `--help`
- [ ] UI displays correctly | UI 显示正确
- [ ] Understand current limitations | 了解当前限制

---

**NetStrike Pro** - Framework Ready! 🚀  
**网击专业版** - 框架就绪！🚀

Version 5.0.0 | © 2025


