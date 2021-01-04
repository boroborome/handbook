module.exports = {
    title: 'Hello Happy3w',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [1, 2, 3],
        },
    },
    themeConfig: {
        nav: [
            {
                text: "手册",
                link: "/handbook/",
            },
        ],
        sidebar: [
            '/handbook/toolkits/',
            '/handbook/persistence-core/',
            '/handbook/persistence-jpa/',
            '/handbook/persistence-es/',
            '/handbook/persistence-excel/',
        ],
        sidebarDepth: 3,
    },
}