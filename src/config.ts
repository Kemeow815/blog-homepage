import dotenv from "dotenv";

dotenv.config();

export const SiteConfig = {
	title: "site.title",
	master: "site.master",
	description: "site.description",
	SiteURL: "https://www.kemiao.online",
	masterEmail: "kemiaofx@163.com",
	Avatar: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/202503171226033.png",
	followListURL: "https://app.follow.is/share/lists/104218695533715456",
	opmlURL: "/tnxg.opml",
	Features: {
		StatusDot: true,
		StatusAPI: true,
	},
	keywords: ["克喵爱吃卤面", "Ke Miao", "个人主页", "克喵の自留地", "homepage", "nextjs"],
	Author: {
		Name: "site.author.name",
		Email: "kemiao@kmblog.icu",
	},
	SocialMedia: {
		Twitter: "https://twitter.com/kemiaosw",
		GitHub: "https://github.com/Kemeow815",
	},
	favicon: {
		default: "/favicon.ico",
		dark: "/favicon.ico",
		apple: "/favicon.ico",
	},
	HomeConfig: {
		greeting: "site.home.greeting",
		namePrefix: "site.home.namePrefix",
		nameJP: "site.home.nameJP",
		nameEN: "site.home.nameEN",
		motto: "site.home.motto",
		socialLinks: [
			{
				name: "site.home.socialLinks.blog",
				icon: "mingcute:book-line",
				url: "https:/www.kemiao.online",
			},
			{
				name: "site.home.socialLinks.rss",
				icon: "mingcute:rss-line",
				url: "/feed/index.xml",
			},
			{
				name: "site.home.socialLinks.github",
				icon: "mingcute:github-line",
				url: "https://github.com/Kemeow815",
			},
			{
				name: "site.home.socialLinks.twitter",
				icon: "mingcute:twitter-line",
				url: "https://twitter.com/kemiaosw",
			},
			{
				name: "site.home.socialLinks.telegram",
				icon: "mingcute:telegram-line",
				url: "https://telegram.me/Kemiaojun",
			},
		],
	},
	BackgroundConfig: {
		images: [
			"https://cdn.tnxg.top/images/cover/119207866_p0_nst.png",
			"https://cdn.tnxg.top/images/cover/tomori_nst.png",
			"https://cdn.tnxg.top/images/cover/MyGo!!!!!_Kaisou_Soyo.nst.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res036012_rip/trim_normal.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res036010_rip/trim_normal.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res036010_rip/trim_after_training.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res038009_rip/trim_after_training.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res038008_rip/trim_after_training.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res037011_rip/trim_after_training.png",
			"https://bestdori.com/assets/cn/characters/resourceset/res037008_rip/trim_after_training.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res039011_rip/trim_after_training.png",
			"https://bestdori.com/assets/jp/characters/resourceset/res040011_rip/trim_after_training.png",
			"https://bestdori.com/assets/cn/characters/resourceset/res040005_rip/trim_after_training.png",

		],
		opacity: 0.5,
	},
	Shiki: {
		langs: ["bat", "c", "cpp", "css", "diff", "html", "ini", "java", "js", "json", "log", "makefile", "matlab", "md", "mdc", "powershell", "python", "sh", "sql", "ssh-config", "toml", "ts", "tsx", "vb", "vue", "xml", "yaml"],
	},
};

export const SidebarConfig = {
	sections: [
		// { name: "sidebar.sections.about", icon: "mingcute:rss-line", href: "/rss" },
		{ name: "sidebar.sections.home", icon: "mingcute:home-6-line", href: "/" },
		{ name: "sidebar.sections.recently", icon: "mingcute:bubble-line", href: "/recently" },
		{ name: "sidebar.sections.friends", icon: "mingcute:link-fill", href: "https://blog-v3.kemeow.top/link" },
	],
	copyright: {
		StartDate: 2025,
		text: "sidebar.copyright.text",
		license: {
			name: "CC BY-NC-SA 4.0",
			url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
		},
	},
	externalLinks: [
		// { name: "sidebar.externalLinks.qq", icon: "mingcute:qq-line", href: "https://jq.qq.com/?_wv=1027&k=hc3OKNED" },
		{ name: "sidebar.externalLinks.rss", icon: "mingcute:rss-line", href: "/tnxg.opml " },
		{ name: "sidebar.externalLinks.blog", icon: "mingcute:book-6-line", href: "https://shokax.kemeow.top" },
		{ name: "sidebar.externalLinks.github", icon: "mingcute:github-line", href: "https://github.com//kemeow815" },
		{ name: "sidebar.externalLinks.telegram", icon: "mingcute:telegram-line", href: "https://t.me/KemiaoJun" },
	],
};

export const FriendsConfig = {
	title: "friends.title",
	description: {
		text: "friends.description.text",
		link: {
			text: "friends.description.link.text",
			url: "https://shokax.kemeow.top/friends",
		},
		suffix: "friends.description.suffix",
	},
};

export const RecentlyConfig = {
	title: "recently.title",
	description: "recently.description",
};

export const APIConfig = {
	misskey: {
		user: "a5vwhj6ok3v21cud",
		// eslint-disable-next-line node/prefer-global/process
		token: process.env.MISSKEY_TOKEN,
	},
	baseURL: "https://nya.one/api/v2",
	endpoints: {
		ncm: "https://netease-api.kemiaosw.top/", // 某个还能用的网易云音乐API
		// 自制的后端api，详见https://github.com/TNXG/space-api/
		friends: "https://api-space.tnxg.top/links",
		space_status: "https://api-space.tnxg.top/status", // 实际获取无参和带s=n的状态
		// misskeyapi接口
		misskey: "https://nya.one",
		// 实际上以下的api都是Mix-Space提供的，这里提供一个方便更换的接口
		recently: "https://mx.tnxg.top/api/v2/recently/all",
		status: "https://api-space.tnxg.top/status/getReportMsg",
	},
};
