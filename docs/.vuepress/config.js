module.exports = {
    title: 'Hello Lujiaming',
    description: 'this is my new description',
    base: '/learn-typescript/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [{
            title: '欢迎学习',
            path: '/',
            collapsable: false, // 不折叠
            children: [
                { title: "学前必读", path: "/" },
                { title: "引言", path: "/" },
            ]
        }, {
            title: '基础学习',
            path: '/handbook/ConditionalTypes',
            collapsable: false, // 不折叠
            children: [
                {
                    title: "条件类型", path: "/handbook/ConditionalTypes", children: [
                        {
                            title: "条件类型1", path: "/handbook/Generics"
                        }, {
                            title: "条件类型2", path: "/handbook/Generics"
                        }]
                },
                { title: "泛型", path: "/handbook/Generics" },
            ]
        }]
    }
}