// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'clashofclans.js',
  tagline: 'JavaScript library for interacting with the Clash of Clans Game API',
  url: 'https://clashofclans.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'clashperk',
  projectName: 'clashofclans.js.org',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./.sidebar.config.js'),
          editUrl: 'https://github.com/clashperk/clashofclans.js/edit/master/',
        },
        blog: {
          path: 'guide',
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
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resource',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
      }
    }),

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'lib',
        readme: 'none',
        tsconfig: './lib/tsconfig.json',
        entryPoints: ['./lib/src/index.ts'],
        excludeExternals: true,
        excludeInternal: true,
        excludePrivate: true,
        excludeProtected: true,
        sort: ['instance-first']
      }
    ]
  ]
};

module.exports = config;
