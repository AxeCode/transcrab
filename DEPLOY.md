# TransCrab 部署指南

## 项目状态

✅ 项目已配置完成，准备部署到 Netlify

## 部署步骤

### 1. Fork GitHub 仓库

1. 访问 https://github.com/onevcat/transcrab
2. 点击右上角的 "Fork" 按钮
3. 等待 Fork 完成

### 2. 推送本地配置到你的 Fork

```bash
# 添加你的 fork 为远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add myfork https://github.com/YOUR_USERNAME/transcrab.git

# 推送配置到 fork
git push myfork main
```

### 3. 部署到 Netlify

#### 选项 A：通过 Netlify UI（推荐）

1. 访问 https://app.netlify.com
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub，授权 Netlify 访问你的仓库
4. 选择 `transcrab` 仓库
5. 配置构建设置（通常会自动检测）：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. 点击 "Deploy site"

#### 选项 B：通过 Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 初始化部署
netlify init

# 部署
netlify deploy --prod
```

### 4. 配置自定义域名（可选）

1. 在 Netlify 站点设置中找到 "Domain management"
2. 点击 "Add custom domain"
3. 输入你的域名并按提示配置 DNS

## 验证部署

部署完成后，访问 Netlify 提供的 URL（如 `https://your-site-name.netlify.app`），应该能看到 TransCrab 首页。

## 使用 TransCrab

部署完成后，你可以：

1. 发送一个 URL 给我
2. 然后发送 `crab`
3. 我会自动抓取、翻译并部署文章

## 项目文件说明

- `astro.config.mjs` - Astro 配置文件（已配置为 Netlify 优化）
- `scripts/` - 核心脚本目录
  - `add-url.mjs` - 添加 URL 到处理队列
  - `run-crab.sh` - 主要入口脚本
- `content/articles/` - 文章存储目录
