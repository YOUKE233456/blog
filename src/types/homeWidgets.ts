// 首页扩展组件配置类型定义

export interface HomeWidgetsConfig {
	enable: boolean;
	marquee: MarqueeConfig;
	abilities: AbilitiesConfig;
	social: SocialConfig;
	skills: SkillsConfig;
}

export interface MarqueeConfig {
	enable: boolean;
	items: { tag: string; text: string }[];
}

export interface AbilitiesConfig {
	enable: boolean;
	title: string;
	description: string;
	items: { name: string; level: number; icon?: string }[];
}

export interface SocialConfig {
	enable: boolean;
	title: string;
	description: string;
	items: { name: string; icon: string; url: string }[];
}

export interface SkillsConfig {
	enable: boolean;
	title: string;
	description: string;
	items: { name: string; icon: string }[];
}
