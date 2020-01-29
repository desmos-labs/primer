module.exports = {
    locale: {
        lang: 'ru-RU',
        title: 'Программа Desmos Primer',
        description: 'Введение в мир Desmos и как с ним начать играть',
    },
    themeConfig: {
        label: 'Русский',
        sidebar: [
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
            },
            // TODO: Translate
            {
                title: "Этап 2",
                path: "/ru/phases/phase-2/",
                collapsable: false,
                children: [
                    {
                        title: "Настройка",
                        collapsable: false,
                        path: "/ru/phases/phase-2/#setup",
                    },
                    {
                        title: "Задания",
                        collapsable: false,
                        path: "/ru/phases/phase-2/#challenges",
                        children: [
                            ["/ru/phases/phase-2/challenges/add-reaction", "Add a reaction to a post"],
                            ["/ru/phases/phase-2/challenges/become-validator", "Become a validator"],
                        ]
                    }
                ]
            }
        ],
    }
};