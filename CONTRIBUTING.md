# 🤝 贡献指南 | Contributing Guide

[中文](#中文) | [English](#english)

---

<a name="中文"></a>

## 🇨🇳 中文

### 欢迎贡献！

感谢您对 NetStrike Pro 的关注！我们非常欢迎各种形式的贡献。

### 📝 如何贡献

#### 1. 提交新的攻击脚本

我们持续收集和开发新的攻击方法。如果您：

- 🔥 **发现了新的攻击技术**
- ⚡ **优化了现有脚本性能**
- 🛡️ **开发了新的绕过方法**

请按以下步骤提交：

```bash
# 1. Fork 项目
# 2. 创建特性分支
git checkout -b feature/new-attack-method

# 3. 添加您的脚本到 legacy/ 目录
# 4. 编写说明文档
# 5. 提交更改
git commit -m "✨ Add new attack method: XXX"

# 6. 推送到您的 Fork
git push origin feature/new-attack-method

# 7. 创建 Pull Request
```

**脚本要求**:
- ✅ 代码清晰，有适当的注释
- ✅ 包含使用说明
- ✅ 性能指标（QPS、成功率等）
- ✅ 添加法律声明

#### 2. 分享代理源

如果您发现了好的免费代理源，请：

1. 在 `legacy/github_list.js` 中添加
2. 测试确保可用
3. 提交 PR

**代理源要求**:
- ✅ 稳定可用
- ✅ 更新频率高
- ✅ 代理数量多

#### 3. 报告 Bug

发现问题？请提交 Issue：

1. 使用 Bug 报告模板
2. 提供详细的复现步骤
3. 包含系统信息和错误日志
4. 如果可能，提供修复建议

#### 4. 改进文档

文档永远可以更好！如果您：

- 📚 发现文档不清楚或有错误
- 🌍 想翻译成其他语言
- 💡 有更好的使用示例

请提交 PR 或 Issue

#### 5. 提出新功能

有好的想法？我们洗耳恭听！

1. 在 Discussions 中讨论
2. 如果得到认可，创建 Issue
3. 我们会将其加入 Roadmap

### 🎯 贡献重点

我们特别欢迎以下方面的贡献：

1. **新的攻击方法** ⭐⭐⭐⭐⭐
   - Layer 7 新方法
   - Layer 4 新方法
   - 游戏服务器攻击

2. **验证码绕过** ⭐⭐⭐⭐⭐
   - 新的 CDN 绕过方法
   - 新的验证码识别算法
   - 提高成功率的技术

3. **代理源** ⭐⭐⭐⭐
   - 新的免费代理源
   - 代理质量优化
   - 代理筛选算法

4. **性能优化** ⭐⭐⭐⭐
   - QPS 提升
   - 内存优化
   - CPU 优化

5. **文档改进** ⭐⭐⭐
   - 使用教程
   - 最佳实践
   - 故障排除

### 📜 代码规范

#### Python 代码
```python
# 使用 PEP 8 规范
# 函数和变量使用 snake_case
# 类使用 PascalCase

def attack_target(url, threads=100):
    """
    攻击目标
    
    Args:
        url: 目标 URL
        threads: 线程数
    """
    pass
```

#### JavaScript 代码
```javascript
// 使用 ES6+ 语法
// 变量使用 camelCase
// 常量使用 UPPER_CASE

const attackTarget = (url, threads = 100) => {
  // 实现代码
};
```

### 🔍 Pull Request 流程

1. **Fork 项目**
2. **创建分支**: `git checkout -b feature/your-feature`
3. **编写代码**: 遵循代码规范
4. **编写测试**: 如果适用
5. **提交更改**: `git commit -m "✨ Your message"`
6. **推送分支**: `git push origin feature/your-feature`
7. **创建 PR**: 使用 PR 模板

### ✅ PR 检查清单

在提交 PR 前，请确保：

- [ ] 代码遵循项目规范
- [ ] 添加了必要的注释
- [ ] 更新了相关文档
- [ ] 测试通过
- [ ] 没有破坏现有功能
- [ ] PR 描述清晰

### 🏆 贡献者荣誉榜

所有贡献者都会被列入：

- README.md 的致谢部分
- CONTRIBUTORS.md 文件
- 项目的 Contributors 页面

### 💬 社区行为准则

我们承诺为所有人提供友好、安全和欢迎的环境。请：

- ✅ 尊重他人
- ✅ 接受建设性批评
- ✅ 专注于对社区最有利的事情
- ❌ 不要使用性别化语言
- ❌ 不要发布他人的私人信息
- ❌ 不要进行人身攻击

详见 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

### 📧 联系方式

如有任何问题，请通过以下方式联系：

- 🐛 GitHub Issues
- 💬 GitHub Discussions
- 📧 Email: your-email@example.com

### 🙏 感谢

感谢所有为 NetStrike Pro 做出贡献的开发者！

---

<a name="english"></a>

## 🇬🇧 English

### Welcome to Contribute!

Thank you for your interest in NetStrike Pro! We welcome all forms of contributions.

### 📝 How to Contribute

#### 1. Submit New Attack Scripts

We continuously collect and develop new attack methods. If you have:

- 🔥 **Discovered new attack techniques**
- ⚡ **Optimized existing script performance**
- 🛡️ **Developed new bypass methods**

Please follow these steps:

```bash
# 1. Fork the project
# 2. Create feature branch
git checkout -b feature/new-attack-method

# 3. Add your script to legacy/ directory
# 4. Write documentation
# 5. Commit changes
git commit -m "✨ Add new attack method: XXX"

# 6. Push to your fork
git push origin feature/new-attack-method

# 7. Create Pull Request
```

**Script Requirements**:
- ✅ Clean code with appropriate comments
- ✅ Include usage instructions
- ✅ Performance metrics (QPS, success rate, etc.)
- ✅ Add legal disclaimer

#### 2. Share Proxy Sources

If you found good free proxy sources:

1. Add to `legacy/github_list.js`
2. Test to ensure availability
3. Submit PR

**Proxy Source Requirements**:
- ✅ Stable and available
- ✅ High update frequency
- ✅ Large number of proxies

#### 3. Report Bugs

Found an issue? Submit an Issue:

1. Use Bug Report template
2. Provide detailed reproduction steps
3. Include system info and error logs
4. If possible, provide fix suggestions

#### 4. Improve Documentation

Documentation can always be better! If you:

- 📚 Found unclear or incorrect documentation
- 🌍 Want to translate to other languages
- 💡 Have better usage examples

Please submit PR or Issue

#### 5. Propose New Features

Have a great idea? We're all ears!

1. Discuss in Discussions
2. If approved, create Issue
3. We'll add it to the Roadmap

### 🎯 Contribution Focus

We especially welcome contributions in:

1. **New Attack Methods** ⭐⭐⭐⭐⭐
2. **CAPTCHA Bypass** ⭐⭐⭐⭐⭐
3. **Proxy Sources** ⭐⭐⭐⭐
4. **Performance Optimization** ⭐⭐⭐⭐
5. **Documentation Improvement** ⭐⭐⭐

### 📜 Code Standards

Follow language-specific best practices and maintain code quality.

### 🔍 Pull Request Process

1. Fork the project
2. Create branch
3. Write code
4. Write tests (if applicable)
5. Commit changes
6. Push branch
7. Create PR

### ✅ PR Checklist

Before submitting PR, ensure:

- [ ] Code follows project standards
- [ ] Added necessary comments
- [ ] Updated relevant documentation
- [ ] Tests pass
- [ ] No breaking changes
- [ ] Clear PR description

### 🏆 Contributors Hall of Fame

All contributors will be listed in:

- README.md acknowledgments section
- CONTRIBUTORS.md file
- Project Contributors page

### 💬 Code of Conduct

We are committed to providing a friendly, safe and welcoming environment for all.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

### 📧 Contact

For questions:

- 🐛 GitHub Issues
- 💬 GitHub Discussions
- 📧 Email: your-email@example.com

### 🙏 Thank You

Thank you to all developers who contribute to NetStrike Pro!

---

<div align="center">

**NetStrike Pro** - Community Driven, Forever Free

Made with ❤️ by the Security Community

</div>
