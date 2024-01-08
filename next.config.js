/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		formats: ['image/webp'],
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
