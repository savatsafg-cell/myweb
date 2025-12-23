# Jekyll博客部署与维护指南

本指南详细介绍了如何将Jekyll博客部署到GitHub Pages，以及如何进行日常维护和更新。

## 目录

1. [GitHub Pages部署](#github-pages部署)
2. [自定义域名配置](#自定义域名配置)
3. [SEO优化设置](#seo优化设置)
4. [访问统计配置](#访问统计配置)
5. [评论系统设置](#评论系统设置)
6. [日常维护指南](#日常维护指南)
7. [性能优化技巧](#性能优化技巧)
8. [故障排除](#故障排除)

## GitHub Pages部署

### 方法一：直接部署（推荐）

这是最简单的部署方式，GitHub会自动构建和部署你的Jekyll网站。

1. **创建GitHub仓库**
   - 访问 [GitHub](https://github.com) 并登录
   - 创建一个新仓库，命名为 `username.github.io`（将`username`替换为你的GitHub用户名）
   - 设置仓库为公开（Public）

2. **上传项目文件**
   - 将所有项目文件上传到仓库
   - 确保包含 `_config.yml` 和其他必要文件

3. **启用GitHub Pages**
   - 进入仓库设置页面
   - 找到"Pages"选项
   - 在"Source"下选择"Deploy from a branch"
   - 选择"main"分支和"/(root)"目录
   - 点击"Save"

4. **等待部署完成**
   - GitHub会自动构建和部署网站
   - 几分钟后，访问 `https://username.github.io` 查看网站

### 方法二：使用GitHub Actions

如果你需要更复杂的构建过程，可以使用GitHub Actions。

1. **创建工作流文件**
   在 `.github/workflows/jekyll.yml` 中创建以下内容：

   ```yaml
   name: Build and deploy Jekyll site

   on:
     push:
       branches: [ main ]
   workflow_dispatch:

   jobs:
     jekyll:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - name: Build the site in the jekyll/builder container
         run: |
           docker run \
           -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
           jekyll/builder:latest /bin/bash -c "chmod 777 /srv/jekyll && jekyll build && bundle exec jekyll doctor"
       - name: Push to gh-pages branch
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./_site
   ```

2. **配置GitHub Pages**
   - 在仓库设置中，选择"GitHub Actions"作为Source
   - 保存设置

## 自定义域名配置

### 步骤一：创建CNAME文件

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名（不带www）：
   ```
   yourdomain.com
   ```

### 步骤二：配置DNS

根据你的域名提供商，添加以下DNS记录：

#### 使用顶级域名（如 yourdomain.com）

```
类型: CNAME
名称: @
值: username.github.io
TTL: 3600（或默认值）
```

#### 使用www子域名（如 www.yourdomain.com）

```
类型: CNAME
名称: www
值: username.github.io
TTL: 3600（或默认值）
```

#### 使用A记录（可选）

```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
```

### 步骤三：启用HTTPS

1. 在GitHub仓库设置中找到"Pages"选项
2. 勾选"Enforce HTTPS"
3. 等待证书颁发（可能需要几分钟到几小时）

## SEO优化设置

### 基本SEO配置

编辑 `_config.yml` 文件，添加以下配置：

```yaml
# SEO设置
title: 你的博客标题
description: 你的博客描述
url: "https://yourdomain.com"  # 使用你的实际域名
baseurl: ""  # 如果网站在子目录，则填写子目录路径

# 作者信息
author: 你的名字
email: your.email@example.com
twitter:
  username: your-twitter  # 你的Twitter用户名
  card: summary  # 或 summary_large_image
social:
  name: Your Name
  links:
    - https://twitter.com/your-twitter
    - https://github.com/your-github
    - https://your-website.com
```

### 网站验证

#### Google Search Console

1. 在 `_config.yml` 中添加：
   ```yaml
   google_site_verification: your-verification-code
   ```

2. 或者在 `_includes/head-custom.html` 中添加：
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```

#### Bing Webmaster Tools

1. 在 `_config.yml` 中添加：
   ```yaml
   bing_site_verification: your-verification-code
   ```

### 提交Sitemap

Jekyll的 `jekyll-sitemap` 插件会自动生成sitemap.xml文件，你只需要：

1. 确保在 `_config.yml` 中包含插件：
   ```yaml
   plugins:
     - jekyll-sitemap
   ```

2. 在Google Search Console和Bing Webmaster Tools中提交sitemap：
   ```
   https://yourdomain.com/sitemap.xml
   ```

## 访问统计配置

### Google Analytics设置

1. **创建Google Analytics账户**
   - 访问 [Google Analytics](https://analytics.google.com/)
   - 创建新账户和媒体资源
   - 获取跟踪ID（格式：G-XXXXXXXXXX）

2. **配置Jekyll网站**
   - 在 `_config.yml` 中添加：
     ```yaml
     google_analytics: G-XXXXXXXXXX  # 替换为你的实际跟踪ID
     ```

3. **验证安装**
   - 部署网站后，访问你的网站
   - 在Google Analytics中查看实时报告
   - 确认能看到自己的访问记录

### 其他分析工具

#### 百度统计

1. 在 `_includes/head-custom.html` 中添加：
   ```html
   <script>
   var _hmt = _hmt || [];
   (function() {
     var hm = document.createElement("script");
     hm.src = "https://hm.baidu.com/hm.js?your-site-id";
     var s = document.getElementsByTagName("script")[0]; 
     s.parentNode.insertBefore(hm, s);
   })();
   </script>
   ```

#### 腾讯分析

1. 在 `_includes/head-custom.html` 中添加：
   ```html
   <script type="text/javascript" src="https://tajs.qq.com/stats?sId=your-site-id" charset="UTF-8"></script>
   ```

## 评论系统设置

### Disqus评论系统

1. **创建Disqus账户**
   - 访问 [Disqus](https://disqus.com/)
   - 注册并创建新站点
   - 获取shortname

2. **配置Jekyll网站**
   - 在 `_config.yml` 中添加：
     ```yaml
     disqus:
       shortname: your-disqus-shortname
     ```

3. **添加评论到文章页面**
   - 在 `_layouts/post.html` 中添加：
     ```html
     <div id="disqus_thread"></div>
     <script>
     (function() {
     var d = document, s = d.createElement('script');
     s.src = 'https://your-disqus-shortname.disqus.com/embed.js';
     s.setAttribute('data-timestamp', +new Date());
     (d.head || d.body).appendChild(s);
     })();
     </script>
     <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
     ```

### 其他评论系统

#### Gitalk

1. 创建GitHub OAuth应用
2. 在 `_includes/comments.html` 中添加Gitalk代码
3. 在文章模板中引用该文件

## 日常维护指南

### 发布新文章

1. **创建文章文件**
   - 在 `_posts` 目录下创建新文件
   - 文件名格式：`YYYY-MM-DD-title.md`

2. **编写文章内容**
   ```markdown
   ---
   layout: post
   title: "文章标题"
   date: 2023-12-01 12:00:00 +0800
   categories: [分类1, 分类2]
   tags: [标签1, 标签2]
   author: 作者名
   ---
   
   文章内容...
   ```

3. **预览文章**
   ```bash
   bundle exec jekyll serve
   ```
   访问 `http://localhost:4000` 预览

4. **提交更改**
   ```bash
   git add .
   git commit -m "Add new post: 文章标题"
   git push origin main
   ```

### 定期维护任务

#### 每周

- 检查网站访问统计
- 审核并回复评论
- 检查是否有404错误

#### 每月

- 更新Jekyll和依赖包：
  ```bash
  bundle update
  ```
- 检查并修复SEO问题
- 备份网站内容

#### 每季度

- 审查网站设计和功能
- 更新关于页面和联系信息
- 检查外部链接是否有效

### 备份策略

1. **Git仓库备份**
   - 定期推送到GitHub
   - 考虑添加其他远程仓库作为备份

2. **内容备份**
   - 定期导出所有Markdown文件
   - 备份自定义的CSS和JavaScript文件

3. **配置备份**
   - 保存 `_config.yml` 的副本
   - 记录所有自定义配置和插件

## 性能优化技巧

### 图片优化

1. **选择合适的格式**
   - 使用WebP格式（比JPEG小25-35%）
   - 对于简单图形使用SVG
   - 避免使用PNG格式的照片

2. **压缩图片**
   - 使用工具如 [TinyPNG](https://tinypng.com/) 或 [ImageOptim](https://imageoptim.com/)
   - 设置适当的压缩质量

3. **响应式图片**
   ```html
   <img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
        sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
        src="medium.jpg" alt="描述">
   ```

### 代码优化

1. **CSS和JavaScript压缩**
   - Jekyll在生产环境会自动压缩
   - 本地开发可使用 `JEKYLL_ENV=production bundle exec jekyll build`

2. **异步加载非关键资源**
   ```html
   <script async src="/assets/js/non-critical.js"></script>
   <link rel="preload" href="/assets/css/critical.css" as="style">
   ```

3. **优化字体加载**
   ```css
   @font-face {
     font-family: 'MyFont';
     src: url('/assets/fonts/myfont.woff2') format('woff2');
     font-display: swap;
   }
   ```

### 缓存策略

1. **Service Worker**
   - 已包含 `assets/js/sw.js` 用于缓存静态资源
   - 定期更新缓存版本

2. **缓存头设置**
   - GitHub Pages自动设置适当的缓存头
   - 对于不常更改的资源，可以设置长期缓存

## 故障排除

### 常见问题及解决方案

#### Jekyll构建失败

1. **检查YAML语法**
   - 使用 [YAML验证器](https://yaml-online-parser.appspot.com/) 检查 `_config.yml`
   - 确保所有Front Matter格式正确

2. **检查插件兼容性**
   - 确保所有插件与Jekyll版本兼容
   - 查看GitHub Pages支持的插件列表

3. **查看构建日志**
   - 在GitHub仓库的Actions页面查看详细错误信息

#### 网站样式问题

1. **检查CSS路径**
   - 确保所有CSS文件路径正确
   - 检查是否缺少必要的Sass文件

2. **清除浏览器缓存**
   - 强制刷新页面（Ctrl+F5）
   - 或者在开发者工具中禁用缓存

3. **检查控制台错误**
   - 打开浏览器开发者工具
   - 查看Console和Network标签页中的错误

#### 搜索功能不工作

1. **检查JavaScript文件**
   - 确保 `search.js` 正确加载
   - 检查是否有JavaScript错误

2. **验证JSON格式**
   - 确保 `search.json` 格式正确
   - 检查是否有特殊字符导致JSON解析失败

### 获取帮助

1. **官方文档**
   - [Jekyll文档](https://jekyllrb.com/docs/)
   - [GitHub Pages文档](https://docs.github.com/en/pages)

2. **社区支持**
   - [GitHub Pages社区论坛](https://github.community/c/code-to-cloud/github-pages)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll+github-pages)

3. **调试工具**
   - [Jekyll Doctor](https://jekyllrb.com/docs/usage/)：检查配置问题
   - [HTML验证器](https://validator.w3.org/)：检查HTML语法
   - [CSS验证器](https://jigsaw.w3.org/css-validator/)：检查CSS语法

---

通过遵循本指南，你应该能够成功部署和维护一个功能完整、性能优化的Jekyll博客网站。如果遇到任何问题，不要犹豫查阅官方文档或寻求社区帮助。