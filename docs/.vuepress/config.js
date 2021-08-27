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
                        link: '/guide/notes/advanced/vue'
                    },
                    {
                        text: '微信小程序',
                        link: '/guide/notes/advanced/Sprogram'
                    }
                ]
            },
            { text: '关于', link: '/about' },
            { text: 'github', link: 'https://github.com/baimengxin' },
        ],
    }
}