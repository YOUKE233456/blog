export const PAGE_SIZE = 8;

export const LIGHT_MODE = "light",
	DARK_MODE = "dark",
	SYSTEM_MODE = "system";
export const DEFAULT_THEME: typeof LIGHT_MODE = LIGHT_MODE; // 仅作为向后兼容的默认值，实际使用 siteConfig.themeColor.defaultMode

// Wallpaper modes
export const WALLPAPER_BANNER = "banner",
	WALLPAPER_FULLSCREEN = "fullscreen",
	WALLPAPER_OVERLAY = "overlay",
	WALLPAPER_NONE = "none";

// Banner height unit: vh
// 普通页面 banner 高度
export const BANNER_HEIGHT = 35;
// 首页在普通高度基础上额外增加的高度（与 BANNER_HEIGHT 相加 = 首页总高度）
// 当前配置使首页 banner 占满整个视口（100vh），与 fqzlr.com 效果一致
export const BANNER_HEIGHT_EXTEND = 65;
export const BANNER_HEIGHT_HOME: number = BANNER_HEIGHT + BANNER_HEIGHT_EXTEND;

// The height the main panel overlaps the banner, unit: rem
export const MAIN_PANEL_OVERLAPS_BANNER_HEIGHT = 3.5;

// Page width: rem
export const PAGE_WIDTH = 100;

// Category constants
export const UNCATEGORIZED = "uncategorized";
