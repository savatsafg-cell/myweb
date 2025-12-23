# 快速开始指南

本指南将帮助你在15分钟内将个人博客部署到GitHub Pages。

## 前提条件

- 一个GitHub账户
- Git已安装在本地计算机

## 步骤一：Fork或克隆仓库

### 选项A：Fork仓库（推荐新手）

1. 访问 [GitHub仓库页面](https://github.com/username/username.github.io)
2. 点击右上角的"Fork"按钮
3. 将仓库重命名为 `你的用户名.github.io`

### 选项B：克隆仓库（适合有经验的用户）

```bash
git clone https://github.com/original-username/original-repo.git 你的用户名.github.io
cd 你的用户名.github.io
git remote set-url origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

## 步骤二：基本配置

编辑 `_config.yml` 文件，修改以下基本设置：

```yaml
# 网站基本信息
title: 你的博客标题
description: 你的博客描述
url: "https://你的用户名.github.io"

# 作者信息
author: 你的名字
email: your.email@example.com

# 社交媒体链接（可选）
github_username: 你的GitHub用户名
twitter_username: 你的Twitter用户名
linkedin_username: 你的LinkedIn用户名
```

## 步骤三：启用GitHub Pages

1. 进入你的GitHub仓库页面
2. 点击"Settings"选项卡
3. 在左侧菜单中找到"Pages"
4. 在"Source"下选择"Deploy from a branch"
5. 选择"main"分支和"/(root)"目录
6. 点击"Save"

## 步骤四：等待部署完成

GitHub会自动构建和部署你的网站，这通常需要几分钟时间。你可以：

1. 在仓库的"Actions"标签页查看构建状态
2. 构建完成后，访问 `https://你的用户名.github.io` 查看网站

## 步骤五：发布第一篇文章

1. 在 `_posts` 目录中找到示例文章
2. 复制一个示例文件并重命名为 `YYYY-MM-DD-my-first-post.md`
3. 编辑文件内容，修改标题和正文：
   ```markdown
   ---
   layout: post
   title: "我的第一篇文章"
   date: 2023-12-23 12:00:00 +0800
   categories: [生活]
   tags: [第一篇, 博客]
   ---
   
   这是我的第一篇博客文章！
   
   ## 这里是一个小标题
   
   这里是一些正文内容...
   ```

4. 提交并推送更改：
   ```bash
   git add .
   git commit -m "Add my first post"
   git push origin main
   ```

## 步骤六：自定义（可选）

### 更换头像

1. 准备一张正方形的个人照片
2. 将其重命名为 `avatar.jpg`
3. 替换 `assets/images/avatar.jpg`

### 修改主题颜色

编辑 `assets/css/style.scss` 文件，修改以下变量：

```scss
// 主题颜色
$primary-color: #0366d6;  // 主色调
$text-color: #333;        // 文本颜色
$bg-color: #fff;         // 背景颜色
```

### 添加自定义域名（可选）

1. 在仓库根目录创建 `CNAME` 文件
2. 文件内容为你的域名（如 `yourdomain.com`）
3. 按照DEPLOYMENT.md中的说明配置DNS

## 常用命令

### 本地预览

```bash
# 安装依赖（首次运行）
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 在生产模式下构建
JEKYLL_ENV=production bundle exec jekyll build
```

### 发布新文章

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到GitHub
git push origin main
```

## 下一步

- 阅读 [DEPLOYMENT.md](DEPLOYMENT.md) 了解详细的部署和维护指南
- 查看 [README.md](README.md) 了解更多功能和自定义选项
- 开始撰写你的博客文章！

## 需要帮助？

如果遇到问题，可以：

1. 查看 [故障排除](DEPLOYMENT.md#故障排除) 部分
2. 搜索 [Jekyll文档](https://jekyllrb.com/docs/)
3. 在GitHub上提交Issue

恭喜！你已经成功部署了自己的Jekyll博客！🎉