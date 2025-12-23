# 个人博客网站

这是一个基于Jekyll和GitHub Pages构建的个人博客网站，具有现代化设计、响应式布局和丰富的功能。

## 功能特点

- 📝 **文章发布与管理**：支持Markdown格式的文章发布
- 🏷️ **分类与标签系统**：方便的内容组织方式
- 🔍 **全文搜索功能**：快速查找感兴趣的文章
- 📱 **响应式设计**：在各种设备上都有良好的阅读体验
- 🎨 **现代化UI设计**：简洁、美观的界面设计
- ⚡ **性能优化**：快速加载，SEO友好
- 📊 **访问统计**：支持Google Analytics
- 💬 **评论系统**：集成Disqus评论功能
- 🔗 **社交分享**：支持多平台分享

## 技术栈

- **Jekyll**：静态网站生成器
- **GitHub Pages**：免费静态网站托管
- **HTML5/CSS3/JavaScript**：前端技术
- **Bootstrap**：响应式UI框架
- **Font Awesome**：图标库
- **Google Fonts**：字体库

## 项目结构

```
.
├── _config.yml          # Jekyll配置文件
├── Gemfile              # Ruby依赖管理
├── index.html           # 首页
├── about.md             # 关于页面
├── categories.html      # 分类页面
├── tags.html            # 标签页面
├── search.md            # 搜索页面
├── _layouts/            # 布局模板
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章布局
│   └── tag.html         # 标签页布局
├── _includes/           # 可重用的代码片段
├── _sass/               # Sass样式文件
├── assets/              # 静态资源
│   ├── css/             # CSS样式
│   ├── js/              # JavaScript文件
│   └── images/          # 图片资源
├── _posts/              # 博客文章
└── _data/               # 数据文件
```

## 快速开始

- [🚀 快速开始指南](QUICKSTART.md) - 15分钟内部署你的博客
- [📋 详细部署文档](DEPLOYMENT.md) - 完整的部署与维护指南

### 本地开发

1. **安装Jekyll**

   ```bash
   # 安装Ruby和Jekyll
   gem install jekyll bundler
   ```

2. **克隆项目**

   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

3. **安装依赖**

   ```bash
   bundle install
   ```

4. **启动本地服务器**

   ```bash
   bundle exec jekyll serve
   ```

   访问 `http://localhost:4000` 查看网站。

### 部署到GitHub Pages

1. **创建GitHub仓库**

   创建一个名为 `username.github.io` 的仓库，其中 `username` 是你的GitHub用户名。

2. **推送代码**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. **启用GitHub Pages**

   在仓库设置中，找到"Pages"选项，选择"Deploy from a branch"，然后选择`main`分支和`/(root)`目录。

## 配置指南

### 基本设置

编辑 `_config.yml` 文件，修改以下配置：

```yaml
# 网站基本信息
title: 你的博客标题
description: 你的博客描述
url: "https://username.github.io"

# 作者信息
author: 你的名字
email: your.email@example.com
avatar: "/assets/images/avatar.jpg"

# 社交媒体链接
github_username: your-github
twitter_username: your-twitter
linkedin_username: your-linkedin

# Google Analytics
google_analytics: G-XXXXXXXXXX

# Disqus评论
disqus:
  shortname: your-disqus-shortname
```

### 自定义域名

如果你有自己的域名，可以在仓库根目录创建 `CNAME` 文件：

```
yourdomain.com
```

然后在域名提供商处添加DNS记录：

```
类型: CNAME
名称: @
值: username.github.io
```

## 写作指南

### 创建新文章

在 `_posts` 目录下创建新文件，文件名格式为 `YYYY-MM-DD-title.md`。

### Front Matter

每篇文章必须包含Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: 2023-12-01 12:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
---
```

### Markdown语法

使用Markdown语法编写内容：

```markdown
# 一级标题

## 二级标题

这是一个段落，包含**粗体**和*斜体*文本。

- 列表项1
- 列表项2
- 列表项3

```javascript
// 代码块
function hello() {
  console.log("Hello, World!");
}
```

![图片描述](/assets/images/image.jpg)
```

## 自定义主题

### 修改样式

编辑 `assets/css/style.scss` 文件来自定义样式：

```scss
// 自定义颜色
$primary-color: #0366d6;
$text-color: #333;
$bg-color: #fff;

// 自定义样式
.custom-element {
  color: $primary-color;
  background-color: $bg-color;
}
```

### 添加新页面

1. 创建新的HTML或Markdown文件
2. 在文件顶部添加Front Matter，指定布局
3. 在导航菜单中添加链接

### 修改布局

编辑 `_layouts` 目录下的模板文件来自定义页面布局。

## 性能优化

### 图片优化

1. 使用适当的图片格式（WebP、AVIF）
2. 压缩图片大小
3. 使用响应式图片
4. 懒加载非关键图片

### 代码优化

1. 压缩CSS和JavaScript
2. 使用代码分割
3. 异步加载非关键资源
4. 优化字体加载

### 缓存策略

1. 设置适当的缓存头
2. 使用Service Worker缓存资源
3. 利用CDN加速内容分发

## 故障排除

### 常见问题

1. **Jekyll构建失败**
   - 检查 `_config.yml` 语法
   - 确保所有依赖已安装
   - 查看构建日志中的错误信息

2. **页面样式不正确**
   - 检查CSS文件路径
   - 确保Sass文件正确编译
   - 检查浏览器控制台错误

3. **搜索功能不工作**
   - 确保JavaScript文件正确加载
   - 检查搜索API配置
   - 查看浏览器控制台错误

### 获取帮助

- [Jekyll官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages文档](https://docs.github.com/en/pages)
- [Markdown语法指南](https://www.markdownguide.org/basic-syntax/)

## 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

1. Fork这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

感谢以下开源项目：

- [Jekyll](https://jekyllrb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Highlight.js](https://highlightjs.org/)