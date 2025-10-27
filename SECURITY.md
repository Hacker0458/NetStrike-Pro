# 安全政策 | Security Policy

## 🔒 支持的版本 | Supported Versions

当前正在接受安全更新的版本：

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.0.x   | :x:                |

## 🐛 报告漏洞 | Reporting a Vulnerability

### 中文

如果您发现了安全漏洞，请**不要**在公开 Issue 中报告。

#### 报告流程：

1. **发送邮件** 到 fangp458@gmail.com
2. **包含以下信息**：
   - 漏洞描述
   - 复现步骤
   - 潜在影响
   - 建议的修复方案（如果有）

3. **我们的响应**：
   - 24 小时内确认收到
   - 7 天内初步评估
   - 30 天内发布修复

#### 安全漏洞类型：

- 🔴 **严重** - 立即修复（24-48 小时）
  - 远程代码执行
  - SQL 注入
  - 未授权访问

- 🟡 **高** - 快速修复（3-7 天）
  - 权限提升
  - 敏感信息泄露
  - 跨站脚本攻击

- 🟢 **中** - 计划修复（7-30 天）
  - 配置错误
  - 信息泄露
  - 拒绝服务

---

### English

If you discover a security vulnerability, please **DO NOT** report it in a public issue.

#### Reporting Process:

1. **Email** fangp458@gmail.com
2. **Include**:
   - Vulnerability description
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

3. **Our Response**:
   - Acknowledge within 24 hours
   - Initial assessment within 7 days
   - Fix within 30 days

#### Vulnerability Severity:

- 🔴 **Critical** - Immediate fix (24-48 hours)
  - Remote code execution
  - SQL injection
  - Unauthorized access

- 🟡 **High** - Quick fix (3-7 days)
  - Privilege escalation
  - Sensitive data exposure
  - Cross-site scripting

- 🟢 **Medium** - Scheduled fix (7-30 days)
  - Configuration issues
  - Information disclosure
  - Denial of service

## 🛡️ 安全最佳实践 | Security Best Practices

### 使用本工具时 | When Using This Tool

- ✅ **获得授权** - 始终获得书面授权
- ✅ **隔离环境** - 在隔离环境中测试
- ✅ **保护凭证** - 不要在代码中硬编码凭证
- ✅ **定期更新** - 保持工具和依赖项最新
- ✅ **监控活动** - 记录所有测试活动

### 代理安全 | Proxy Security

- ⚠️ **免费代理风险** - 可能记录您的活动
- ⚠️ **加密通信** - 使用 HTTPS 代理
- ⚠️ **验证来源** - 仅使用可信代理源
- ⚠️ **定期轮换** - 定期更换代理

### 凭证管理 | Credential Management

- 🔐 **环境变量** - 使用环境变量存储敏感信息
- 🔐 **加密存储** - 加密存储 Cookie 和 Token
- 🔐 **访问控制** - 限制文件访问权限
- 🔐 **不要提交** - 不要将凭证提交到 Git

## 🔍 已知限制 | Known Limitations

1. **代理安全性**
   - 免费代理可能不安全
   - 建议使用受信任的付费代理

2. **验证码绕过**
   - 可能被目标网站检测
   - 成功率不是 100%

3. **攻击检测**
   - 可能触发 WAF/IPS
   - 建议谨慎使用

## 📋 安全检查清单 | Security Checklist

在使用本工具前，请确保：

- [ ] 已获得目标系统的书面授权
- [ ] 在隔离的测试环境中运行
- [ ] 使用安全的代理连接
- [ ] 不存储未加密的敏感信息
- [ ] 已配置适当的日志记录
- [ ] 了解当地法律法规
- [ ] 有应急响应计划

## ⚖️ 负责任披露 | Responsible Disclosure

我们采用负责任的披露政策：

1. **私下报告** - 首先私下报告漏洞
2. **协调披露** - 与我们协调公开时间
3. **致谢** - 我们会公开致谢报告者
4. **奖励** - 严重漏洞可能获得奖励

## 📧 联系方式 | Contact

- 🔒 **安全问题** | Security Issues: fangp458@gmail.com
- 💬 **一般问题** | General Questions: fangp458@gmail.com
- 🐛 **Bug 报告** | Bug Reports: GitHub Issues

## 🙏 致谢 | Acknowledgments

感谢所有负责任地报告安全问题的研究人员。

---

<div align="center">

**NetStrike Pro** - 安全第一，负责任使用

**Security First, Responsible Use**

</div>

