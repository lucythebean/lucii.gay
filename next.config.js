/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.mihoyo.com',
				port: '',
				pathname: '/game_record/genshin/**',
			},
			{
				protocol: 'https',
				hostname: '*.hoyoverse.com',
				port: '',
				pathname: '/upload/**',
			},
			{
				protocol: 'https',
				hostname: 'img-os-static.hoyolab.com',
				port: '',
				pathname: '/communityWeb/upload/**',
			},
			{
				protocol: 'https',
				hostname: 'genshin-impact.fandom.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
