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
                path: "/validators-program"
            },
            {
                title: "Validating summer",
                path: "/validating-summer"
            },
            {
                title: "Phase 1",
                path: "/phase-1/",
                collapsable: true,
                children: [
                    ["/phase-1/create-post", "Create a post"],
                    ["/phase-1/like-post", "Like a post"],
                ]
            },
            {
                title: "Phase 2",
                path: "/phase-2/",
                collapsable: true,
                children: [
                    ["/phase-2/add-reaction", "Add a post reaction"],
                ]
            },
            {
                title: "Phase 3",
                path: "/phase-3/",
                collapsable: true,
                children: [
                    ["/phase-3/create-poll", "Create a poll post"],
                    ["/phase-3/answer-poll", "Answer to a poll"],
                    ["/phase-3/create-multimedia-post", "Create a multimedia post"],
                    ["/phase-3/update-node", "Update your validator node"],
                ]
            },
            {
                title: "Phase 4",
                path: "/phase-4/",
                collapsable: true,
                children: [
                    ["/phase-4/register-reaction", "Register a reaction"],
                    ["/phase-4/create-account", "Create an account"],
                    ["/phase-4/update-node", "Update your validator node"],
                ]
            },
            {
                title: "Phase 5",
                path: "/phase-5/",
                collapsable: true,
                children: [
                    ["/phase-5/hashtag-post", "Create a post with an hashtag"],
                    ["/phase-5/create-update-profile", "Create or update your profile"],
                    ["/phase-5/report-post", "Report a post"],
                    ["/phase-5/tag-person", "Tag a person"],
                    ["/phase-5/update-node", "Update your validator node"],
                ]
            },
            {
                title: "Phase 6",
                path: "/phase-6/",
                collapsable: true,
                children: [
                    ["/phase-6/edit-post", "Edit a post's attachments and poll"],
                    ["/phase-6/create-relationship", "Add a relationship towards a user"],
                    ["/phase-6/block-unblock", "Block and unblock a user"],
                    ["/phase-6/change-dtag", "Change your DTag"],
                    ["/phase-6/transfer-dtag", "Transfer your DTag to a user"],
                ]
            },
            {
                title: "Scoreboard",
                path: "https://scoreboard.desmos.network"
            },
        ]
    }
};
