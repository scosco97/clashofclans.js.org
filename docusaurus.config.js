// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const site = {
  title: 'clashofclans.js',
  url: 'https://clashofclans.js.org',
  description: 'JavaScript library for interacting with the Clash of Clans API'
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: site.title,
  tagline: site.description,
  url: site.url,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'clashperk',
  projectName: 'clashofclans.js.org',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./.sidebar.config.js'),
          editUrl: 'https://github.com/clashperk/clashofclans.js.org/edit/master/',
        },
        blog: {
          path: 'guide',
          showReadingTime: false,
          routeBasePath: 'guide',
          editUrl: 'https://github.com/clashperk/clashofclans.js.org/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'wip',
        content: '[WIP] Welcome to v2.0.0 documentation. For old v1.5.5 docs, visit <a target="_blank" href="https://www.npmjs.com/package/clashofclans.js/v/1.5.5">NPM</a>',
        backgroundColor: '#FAFBFC',
        textColor: '#091E42',
        isCloseable: true
      },
      navbar: {
        title: 'clashofclans.js',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/guide', label: 'Guide', position: 'left' },
          {
            href: 'https://github.com/clashperk/clashofclans.js',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resource',
            items: [
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/clashofclans.js',
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Discord',
                href: 'https://discord.gg/clashapi',
              }
            ]
          },
          {
            title: 'Developer',
            items: [
              {
                label: 'Clash of Clans API',
                href: 'https://developer.clashofclans.com/#/',
              }
            ]
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Supercell Fan Content Policy',
                href: 'https://supercell.com/en/fan-content-policy/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} clashofclans.js.org. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'javascript',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      metadatas: [
        { name: 'theme-color', content: '#5970C1' },
        { property: 'og:title', content: site.title },
        { property: 'og:description', content: site.description }
      ]
    }),

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      ({
        id: 'lib',
        readme: 'none',
        tsconfig: './lib/tsconfig.json',
        entryPoints: ['./lib/src/index.ts'],
        excludeExternals: true,
        excludeInternal: true,
        excludePrivate: true,
        excludeProtected: true,
        sort: ['instance-first']
      })
    ]
  ]
};

module.exports = config;
