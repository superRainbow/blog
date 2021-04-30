require('dotenv').config();

module.exports = {
    title: '金魚腦的學習筆記',
    description: '資訊爆炸的年代，邊學邊記是標配',
    base: '/blog/',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ],
    locales: {
        '/': {
            lang: 'zh-TW',
        },
    },
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: 'TimeLine', icon: 'reco-date', link: '/timeline/' },
            {
                text: 'Rainbow',
                icon: 'reco-account',
                items: [
                    { text: 'About Me', icon: 'reco-message', link: 'https://superrainbow.github.io/website/#/about' },
                    { text: 'GitHub', link: 'https://github.com/superrainbow', icon: 'reco-github' },
                ],
            },
        ],
        type: 'blog',
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category', // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag', // 默认 “标签”
            },
        },
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        author: '金魚腦',
        authorAvatar: '/logo.jpg',
        startYear: '2021',
        vssueConfig: {
            platform: 'github',
            owner: 'superRainbow',
            repo: 'blog',
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            locale: 'en'
        }
    },
    markdown: {
        lineNumbers: true,
        linkify: true,
        config: md => {
            md.use(require('markdown-it-deflist'))
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-imsize'))
        },
    },
    plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top', '@vuepress-reco/extract-code'],
}
