// Import all the locales
let en = require("./config_en.js");

module.exports = {
    title: "Desmos Primer Program",
    description: "An introduction on the Desmos world and how you can start playing with it",
    head: [
        ['link', {rel: 'icon', href: '/assets/logo.svg'}],
        ['link', {rel: "apple-touch-icon", sizes: "57x57", href: "/assets/pwa/apple-icon-57x57.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "60x60", href: "/assets/pwa/apple-icon-60x60.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "72x72", href: "/assets/pwa/apple-icon-72x72.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "76x76", href: "/assets/pwa/apple-icon-76x76.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "114x114", href: "/assets/pwa/apple-icon-114x114.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "120x120", href: "/assets/pwa/apple-icon-120x120.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "144x144", href: "/assets/pwa/apple-icon-144x144.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "152x152", href: "/assets/pwa/apple-icon-152x152.png"}],
        ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/assets/pwa/apple-icon-180x180.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/pwa/android-icon-192x192.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/pwa/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/pwa/favicon-96x96.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/pwa/favicon-16x16.png"}],
        ['link', {rel: "manifest", href: "/assets/pwa/manifest.json",}],
        ['meta', {name: "msapplication-TileColor", content: "#ffffff"}],
        ['meta', {name: "msapplication-TileImage", content: "/ms-icon-144x144.png"}],
        ['meta', {name: "theme-color", content: "#ffffff"}],
        ['meta', {property: "og:title", content: "Desmos Primer program"}],
        ['meta', {property: "og:url", content: "https://primer.desmos.network/"}],
        ['meta', {property: "og:description", content: "Complete all the Primer challenges and earn Desmos Tokens!"}],
        ['meta', {property: "og:image", content: "https://primer.desmos.network/assets/logo.png"}],
        ['meta', {roperty: "og:type", content: "website"}],
        ['meta', {property: "og:locale", content: "en_US"}],
    ],
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-108489905-9'
            }
        ]
    ],
    locales: {
        '/': en.locale,
    },
    extraWatchFiles: [
        '.vuepress/config_*.js'
    ],
    themeConfig: {
        repo: "desmos-labs/primer",
        docsDir: ".",
        docsBranch: "master",
        lastUpdated: true,
        logo: "/assets/logo.svg",
        nav: [
            {text: "Desmos website", link: "https://desmos.network"},
        ],
        sidebarDepth: 0,
        locales: {
            '/': en.themeConfig,
        }
    }
};
