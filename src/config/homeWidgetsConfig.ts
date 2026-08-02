import type { HomeWidgetsConfig } from "../types/homeWidgets";

// 首页扩展组件配置（仿 fqzlr.com 风格的自定义首页组件）
export const homeWidgetsConfig: HomeWidgetsConfig = {
	// 首页是否启用扩展组件（跑马灯公告 + 数据卡片区）
	enable: true,

	// 公告跑马灯配置
	marquee: {
		enable: true,
		// 每条公告：tag 为标签（如 欢迎/公告/更新），text 为内容
		items: [
			{ tag: "欢迎", text: "欢迎来到 隐德来希 的博客！" },
			{ tag: "公告", text: "本站正在装修中，更多内容陆续上线～" },
			{ tag: "更新", text: "最近更新：博客搭建记录" },
			{ tag: "提示", text: "按 Ctrl + K 打开站内全文搜索" },
		],
	},

	// 能力矩阵配置（首页卡片）
	abilities: {
		enable: true,
		title: "能力矩阵",
		description: "技能覆盖到工程、内容和部署的方方面面。",
		// name: 技能名称，level: 熟练度 0-100，icon: 可选图标
		items: [
			{ name: "前端开发", level: 60, icon: "material-symbols:code" },
			{ name: "后端开发", level: 40, icon: "material-symbols:database" },
			{ name: "Linux / 运维", level: 50, icon: "material-symbols:terminal" },
			{ name: "写作记录", level: 70, icon: "material-symbols:edit-note" },
			{ name: "摄影修图", level: 45, icon: "material-symbols:photo-camera" },
			{ name: "游戏 / ACGN", level: 80, icon: "material-symbols:sports-esports" },
		],
	},

	// 社交联系配置（首页滚动轨道）
	social: {
		enable: true,
		title: "社交联系",
		description: "把散落的入口收束在一条缓慢移动的轨道里。",
		items: [
			{ name: "QQ群", icon: "fa7-brands:qq", url: "" },
			{ name: "Bilibili", icon: "fa7-brands:bilibili", url: "" },
			{ name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/" },
			{ name: "Email", icon: "fa7-solid:envelope", url: "mailto:you@example.com" },
			{ name: "RSS", icon: "fa7-solid:rss", url: "/rss/" },
		],
	},

	// 技能图标配置（首页滚动轨道）
	skills: {
		enable: true,
		title: "技能图标",
		description: "工程、内容和部署工具在同一条轨道上循环。",
		items: [
			{ name: "Astro", icon: "simple-icons:astro" },
			{ name: "Svelte", icon: "simple-icons:svelte" },
			{ name: "TypeScript", icon: "simple-icons:typescript" },
			{ name: "React", icon: "simple-icons:react" },
			{ name: "Tailwind", icon: "simple-icons:tailwindcss" },
			{ name: "Node.js", icon: "simple-icons:nodedotjs" },
			{ name: "Python", icon: "simple-icons:python" },
			{ name: "Docker", icon: "simple-icons:docker" },
			{ name: "Linux", icon: "simple-icons:linux" },
			{ name: "Nginx", icon: "simple-icons:nginx" },
			{ name: "Redis", icon: "simple-icons:redis" },
			{ name: "MySQL", icon: "simple-icons:mysql" },
			{ name: "MongoDB", icon: "simple-icons:mongodb" },
			{ name: "Git", icon: "simple-icons:git" },
			{ name: "Cloudflare", icon: "simple-icons:cloudflare" },
		],
	},
};
