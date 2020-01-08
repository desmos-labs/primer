module.exports = {
    title: "Desmos Primer Program",
    description: "An introduction on the Desmos world and how you can start playing with it",
    head: [
        ['link', {rel: 'icon', href: '/icon.png'}]
    ],
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        'latex'
    ],
    themeConfig: {
        repo: "desmos-labs/primer",
        docsDir: ".",
        docsBranch: "master",
        lastUpdated: true,
        nav: [
            {text: "Desmos", link: "https://github.com/desmos-labs/desmos"},
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: "Phases",
                collapsable: false,
                children: [
                    {
                        title: "Phase 1",
                        path: "/phases/phase-1/",
                        collapsable: false,
                        children: [
                            {
                                title: "Setup",
                                collapsable: false,
                                path: "/phases/phase-1/setup/",
                            },
                            {
                                title: "Challenges",
                                path: "/phases/phase-1/challenges/",
                                collapsable: false,
                                children: [
                                    ["/phases/phase-1/challenges/refer", "Refer a friend"],
                                    ["/phases/phase-1/challenges/create-post", "Create a post"],
                                    ["/phases/phase-1/challenges/like-post", "Like a post"],
                                    ["/phases/phase-1/challenges/accept-referral", "Accept a referral"],
                                ]
                            }
                        ]
                    }
                ]
            },
        ],
    }
};
