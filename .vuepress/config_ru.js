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
                path: "/ru/phase-1/",
                collapsable: false,
            },
            // TODO: Translate
            {
                title: "Этап 2",
                path: "/ru/phase-2/",
                collapsable: false,
                children: [
                    ["/ru/phase-2/challenges/add-reaction", "Add a reaction to a post"],
                    ["/ru/phase-2/challenges/become-validator", "Become a validator"],
                ]
            }
        ],
    }
};
