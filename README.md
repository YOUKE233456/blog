# 384322 的博客

> 基于 [Astro](https://astro.build) + [Firefly（流萤）](https://github.com/CuteLeaf/Firefly) 主题的个人博客，托管于 Cloudflare Pages，纯静态、零服务器。

在线地址：**https://blog.384322.xyz**

## ✨ 功能

- 📝 Markdown/MDX 写作，支持 KaTeX 公式、Mermaid 图表、代码分组
- 🔍 Pagefind 站内全文搜索（`Ctrl+K`）
- 🌗 明暗主题切换，可自定义主题色
- 📡 RSS 订阅（`/rss/`）、站点地图（`/sitemap-index.xml`）
- 🗨️ 动态、相册、追番、番组计划、友链、留言板、打赏等模块
- 🎨 看板娘（Live2D/Spine）可配置开关

## 🚀 本地开发

要求：Node.js ≥ 22、pnpm ≥ 9

```bash
pnpm install     # 安装依赖
pnpm dev         # 本地开发 http://localhost:4321
pnpm build       # 生产构建，输出 dist/
pnpm preview     # 本地预览构建产物
pnpm check       # Astro 类型检查
```

## ✍️ 写文章

```bash
pnpm new-post    # 生成文章模板
```

文章存放在 `src/content/posts/`，动态存放在 `src/content/dynamic/`。
详细语法（扩展 Markdown、MDX、图表等）可参考主题原文档 [FIREFLY-README.md](./FIREFLY-README.md) 与 [Firefly 文档](https://docs-firefly.cuteleaf.cn)。

## ⚙️ 站点配置

所有配置集中在 `src/config/` 目录：

| 文件 | 作用 |
|---|---|
| `siteConfig.ts` | 站点标题/URL/主题色/页面开关/追番(B站UID)/番组(Bangumi ID) |
| `profileConfig.ts` | 头像、昵称、签名、社交链接 |
| `commentConfig.ts` | 评论系统（none/twikoo/waline/giscus/artalk） |
| `navBarConfig.ts` | 导航栏菜单 |
| `announcementConfig.ts` | 跑马灯公告 |
| `friendsConfig.ts` | 友链 |
| `galleryConfig.ts` | 相册（图片放 `public/gallery/`） |
| `sponsorConfig.ts` | 打赏（二维码图片放 `public/assets/images/sponsor/`） |
| `musicConfig.ts` | 音乐播放器（Meting 歌单 ID） |
| `pioConfig.ts` | 看板娘开关 |

**上线前必改**（当前为占位/演示值）：

- `src/config/profileConfig.ts`：头像 `avatar.avif`、昵称、GitHub 链接、邮箱
- `src/config/siteConfig.ts`：`bangumi.userId`、`anime.bilibili.uid` 换成你自己的
- `src/config/musicConfig.ts`：`meting.id` 换成你的歌单 ID
- `src/content/spec/`：关于/友链/留言板页面内容

## 🌐 部署（Cloudflare Pages）

1. 在 GitHub 新建仓库（如 `blog`），推送本仓库代码：

```bash
git init -b master
git add .
git commit -m "feat: initialize personal blog with Firefly theme"
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin master
```

2. Cloudflare 控制台 → **Workers & Pages** → **创建** → **Pages** → **连接到 Git**
3. 选择仓库，构建配置：
   - 框架预设：**Astro**
   - 构建命令：`pnpm build`
   - 输出目录：`dist`
   - 环境变量：`NODE_VERSION=22`（可选，Node 22+）
4. **保存并部署**，得到 `xxx.pages.dev` 地址
5. 项目 → **自定义域** → **设置自定义域** → 输入 `blog.384322.xyz`（Cloudflare 会自动创建代理 CNAME，无需手动添加 DNS）
6. 之后每次 `git push` 自动重新部署

> 💡 若想用 GitHub Pages：仓库自带 `.github/workflows/deploy.yml`，推送 `master` 分支即可自动部署。

## 🗨️ 评论系统（后续可选）

编辑 `src/config/commentConfig.ts` 的 `type`：

- **Waline**：推荐用 Cloudflare Workers + D1/KV 免费自建后端（参考 [Waline 文档](https://waline.js.org)），`serverURL` 填你的 Worker 地址
- **Twikoo**：`envId` 填你的 Twikoo 服务地址
- **Giscus**：基于 GitHub Discussions，零后端

## 📄 许可

本站源码基于 [MIT License](./LICENSE)（主题 Firefly 的开源协议）。
