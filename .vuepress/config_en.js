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
                title: "Referral program",
                collapsable: true,
                children: [
                    ["/referral-program/refer-a-friend", "Refer a friend"],
                    ["/referral-program/accept-referral", "Accept a referral"],
                ]
            },
            {
                title: "Validators program",
                path: "/validators-program/overview"
            },
            {
                title: "Phase 1",
                path: "/phase-1/",
                collapsable: false,
            },
            {
                title: "Phase 2",
                path: "/phase-2/",
                collapsable: true,
                children: [
                    ["/phase-2/challenges/add-reaction", "Add a reaction to a post"],
                    ["/phase-2/challenges/become-validator", "Become a validator"],
                ]
            },
            {
                title: "Phase 3",
                path: "/phase-3/",
                collapsable: true,
                children: [
                    ["/phase-3/challenges/create-poll", "Create a poll post"],
                    ["/phase-3/challenges/answer-poll", "Answer to a poll"],
                    ["/phase-3/challenges/create-multimedia-post", "Create a multimedia post"],
                    ["/phase-3/challenges/update-node", "Upgrade node"],
                ]
            }
        ]
    }
};
