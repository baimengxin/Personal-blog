// .vuepress/config.js
module.exports = {
    base: '/docs/',
    themeConfig: {
        // logo设置
        logo: '/assets/img/hero.png',
        // 导航栏设置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端学习笔记',
                items: [
                    {
                        text: 'vue',
                        link: '/guide/notes/advanced/vue/'
                    },
                    {
                        text: '微信小程序',
                        link: '/guide/notes/advanced/Sprogram/'
                    }
                ]
            },
            { text: '关于', link: '/guide/about/about' },
            { text: 'github', link: 'https://github.com/baimengxin' },
        ],
        // 侧边导航栏设置
        sidebar: {
            '/guide/notes/advanced/vue/': [
                '',
                'element-ui',
                'about',
                'uview-ui'
            ],
            '/guide/notes/advanced/Sprogram/': [
                '',
                'cs',
                '黑马优购'
            ],

            // 注意：首页不能写在最前面，不然会只剩下首页的侧边栏
            // 它的匹配规则是从上往下，匹配路径越短的东西，需要放在最下面，否则所有路径都会匹配到
            '/': [
                ''
            ],
        },
        // 获取每个文件最后一次 git 提交的 UNIX 时间戳
        lastUpdated: '更新时间', // string | boolean
    }
}