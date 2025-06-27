import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UpTimeX',
  tagline: 'Helping Developers Build and Maintain Better Software',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://uptimex.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nemo97', // Usually your GitHub org/user name.
  projectName: 'uptimex.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   '',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'plugin-image-zoom'
  ],
  themeConfig: {
      imageZoom: {
            // CSS selector to apply the plugin to, defaults to '.markdown img'
            selector: '.markdown img',
            // Optional medium-zoom options
            // see: https://www.npmjs.com/package/medium-zoom#options
          },
    // Replace with your project's social card
    image: 'img/social-card.svg',
    navbar: {
      title: 'UpTimeX',
      logo: {
        alt: 'UpTimeX Logo',
        src: 'img/logo.png',
      },
      items: [        
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: '/contact',
          position: 'right',
          label: 'Contact',
        },        
        {
          to: '/docs/about',
          position: 'right',
          label: 'About',
        },                
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
        items : [
         {
              position: 'left',
              label: 'Contact',
              to: '/contact',
        },
      ]
    }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UpTimeX , Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.jettwaveDark,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
