module.exports = {
    locale: {
        lang: 'ru-RU',
        // TODO: Translate this
        title: 'Программа Desmos Primer',
        //TODO: Check this
        description: 'Введение в мир Desmos и как с ним начать играть',
    },
    // TODO: Translate this
    themeConfig: {
        // TODO: Translate this
        label: 'Русский',
        sidebar: [
            {
                title: "Этапы",
                collapsable: false,
                children: [
                    {
                        title: "Этап 1",
                        path: "/ru/phases/phase-1/",
                        collapsable: false,
                        children: [
                            {
                                title: "Настройка",
                                collapsable: false,
                                path: "/ru/phases/phase-1/setup/",
                            },
                            {
                                title: "Задания",
                                path: "/ru/phases/phase-1/challenges/",
                                collapsable: false,
                                children: [
                                    ["/ru/phases/phase-1/challenges/refer", "Привести реферала"],
                                    ["/ru/phases/phase-1/challenges/create-post", "Создать пост"],
                                    ["/ru/phases/phase-1/challenges/like-post", "Лайкнуть пост"],
                                    ["/ru/phases/phase-1/challenges/accept-referral", "Подтвердить реферера"],
                                ]
                            }
                        ]
                    }
                ]
            },
        ],
    }
};