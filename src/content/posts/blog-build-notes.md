---
title: 博客搭建记录：Astro + Firefly + Cloudflare Pages
published: 2026-08-02
description: 记录本站从零搭建的过程：技术选型、本地开发、部署上线，以及后续的个性化计划。
tags: [博客, Astro, Cloudflare, 折腾]
category: 技术
---

这篇文章记录本站的搭建过程，也算是一份"从零开始"的参考。

## 技术选型

| 部分 | 方案 |
|---|---|
| 框架 | Astro 7 |
| 主题 | Firefly（流萤），基于 Fuwari 二次开发 |
| 托管 | Cloudflare Pages（免费） |
| 域名 | blog.384322.xyz |
| 包管理器 | pnpm |

选择这个组合的理由：

1. **无服务器**：纯静态站点，不需要买 VPS，Cloudflare 全球 CDN 免费加速
2. **功能丰富**：动态、相册、追番、番组计划、友链、留言板等模块开箱即用
3. **颜值在线**：清新可爱的设计，支持明暗模式与自定义主题色

## 本地开发

```bash
pnpm install     # 安装依赖
pnpm dev         # 本地预览 http://localhost:4321
pnpm build       # 构建到 dist/
pnpm preview     # 本地预览构建产物
```

## 写文章

```bash
pnpm new-post    # 生成文章模板
```

文章使用 Markdown + frontmatter 编写，支持 KaTeX 公式、Mermaid 图表、代码分组等增强语法。

## 部署

推送到 GitHub 仓库后，Cloudflare Pages 自动构建发布，绑定 `blog.384322.xyz` 自定义域名。

## 后续计划

- [ ] 配置评论系统（Waline / Twikoo）
- [ ] 更换头像与 Logo
- [ ] 个性化主题色与字体
- [ ] 添加更多文章

折腾的过程就是最好的学习过程。🚀
