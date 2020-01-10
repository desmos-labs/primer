module.exports = {
    locale: {
        lang: 'ru-RU',
        // TODO: Translate this
        title: 'Desmos Primer Program',
        //TODO: Check this
        description: 'Введение в мир Desmos и как с ним начать играть',
    },
    // TODO: Translate this
    themeConfig: {
        // TODO: Translate this
        label: 'Russian',
        sidebar: [
            {
                title: "Phases",
                collapsable: false,
                children: [
                    {
                        title: "Phase 1",
                        path: "/ru/phases/phase-1/",
                        collapsable: false,
                        children: [
                            {
                                title: "Setup",
                                collapsable: false,
                                path: "/ru/phases/phase-1/setup/",
                            },
                            {
                                title: "Challenges",
                                path: "/ru/phases/phase-1/challenges/",
                                collapsable: false,
                                children: [
                                    ["/ru/phases/phase-1/challenges/refer", "Refer a friend"],
                                    ["/ru/phases/phase-1/challenges/create-post", "Create a post"],
                                    ["/ru/phases/phase-1/challenges/like-post", "Like a post"],
                                    ["/ru/phases/phase-1/challenges/accept-referral", "Accept a referral"],
                                ]
                            }
                        ]
                    }
                ]
            },
        ],
    }
};