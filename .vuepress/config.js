// Import all the locales
let en = require("./config_en.js");
let ru = require("./config_ru.js");

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
    locales: {
        '/': en.locale,
        '/ru/': ru.locale,
    },
    extraWatchFiles: [
        '/ru/**/*',
        '.vuepress/config_*.js'
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
        locales: {
            '/': en.themeConfig,
            '/ru/': ru.themeConfig,
        }
    }
};
