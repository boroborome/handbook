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
            '/handbook/toolkits.md',
            '/handbook/persistence-core.md',
            '/handbook/persistence-jpa.md',
            '/handbook/persistence-es.md',
            '/handbook/persistence-excel.md',
        ],
        sidebarDepth: 3,
    },
}