module.exports = {
    locale: {
        lang: 'en-US',
        title: 'Desmos Primer Program',
        description: 'An introduction on the Desmos world and how you can start playing with it'
    },
    themeConfig: {
        label: 'English',
        sidebar: [
            {
                title: "Setup",
                path: "/setup/",
            },
            {
                title: "Phase 1",
                path: "/phase-1/",
                collapsable: false,
            },
            {
                title: "Phase 2",
                path: "/phase-2/",
                collapsable: false,
                children: [
                    ["/phase-2/challenges/add-reaction", "Add a reaction to a post"],
                    ["/phase-2/challenges/become-validator", "Become a validator"],
                ]
            }
        ]
    }
};
