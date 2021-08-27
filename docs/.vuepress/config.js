// .vuepress/config.js
module.exports = {
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端学习笔记',
                items: [
                    {
                        text: 'vue',
                        link: '/guide/notes/advanced/vue/about'
                    },
                    {
                        text: '微信小程序',
                        link: '/guide/notes/advanced/Sprogram/ce'
                    }
                ]
            },
            { text: '关于', link: '/guide/about/about' },
            { text: 'github', link: 'https://github.com/baimengxin' },
        ],
    }
}