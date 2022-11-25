// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'openbyt.es',
  tagline: 'Open source products and applications.',
  url: 'https://openbyt.es',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',

  organizationName: 'openbyt.es',
  projectName: 'site',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    github: 'https://github.com/openbyt.es',
    logo: '/img/logo.svg',
    twitter: '@wolfenrain',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: 'articles',
          path: './articles',
          authorsMapPath: 'authors.yaml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/preview.png',
      navbar: {
        title: 'openbyt.es',
        logo: {
          alt: 'openbyt.es Logo',
          src: 'img/icon.svg',
        },
        items: [
          { to: 'projects', label: 'Projects', position: 'left' },
          // { to: 'articles', label: 'Articles', position: 'left' },
          {
            type: 'custom-ghIcon',
            label: 'GitHub',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Articles',
            items: [],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Projects',
                href: '/projects',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/openbyt-es',
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ['bash', 'dart', 'yaml'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
