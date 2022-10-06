// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wellmed OGA',
  // themes: ['@docusaurus/theme-search-algolia'],
  tagline: 'Optum Global Advantage',
  url: 'https://Org-Wellmed.github.io',
  baseUrl: '/pages/Org-Wellmed/Wellmed-OGA/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Org-Wellmed', // Usually your GitHub org/user name.
  projectName: 'Wellmed-OGA', // Usually your repo name.
  githubHost: 'github.optum.com',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.optum.com/Org-Wellmed/Wellmed-OGA/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.optum.com/Org-Wellmed/Wellmed-OGA/edit/main/',
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      docs: {
          sidebar: {
            hideable: true,
          },
        },


        // algolia: {
        //   // The application ID provided by Algolia
        //   appId: 'YOUR_APP_ID',
    
        //   // Public API key: it is safe to commit it
        //   apiKey: 'YOUR_SEARCH_API_KEY',
    
        //   indexName: 'YOUR_INDEX_NAME',
    
        //   // Optional: see doc section below
        //   contextualSearch: true,
    
        //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //   externalUrlRegex: 'external\\.com|domain\\.com',
    
        //   // Optional: Algolia search parameters
        //   searchParameters: {},
    
        //   // Optional: path for search page that enabled by default (`false` to disable it)
        //   searchPagePath: 'search',
    
        //   //... other Algolia params
        // },

        
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/Optum-logoOGA.png',
        },
        // items: [
        //   // {
        //   //   type: 'doc',
        //   //   docId: 'intro',
        //   //   position: 'left',
        //   //   label: 'Tutorial',
        //   // },
        //   {to: '/blog', label: 'Blog', position: 'left'}
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },         
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: '#',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
                // to: '/blog', 
              }
              
            ],
          },
        ],
       
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
