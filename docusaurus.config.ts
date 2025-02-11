import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'KubeSense Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.svg',

  plugins : ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://docs.kubesense.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    colorMode : {
      disableSwitch : true,
      defaultMode : "light",
    },
    image: 'https://kubesense-web.s3.ap-south-1.amazonaws.com/images/og_image.png',
    navbar: {
      title: '',
      logo: {
        alt: 'KubeSense logo',
        src: 'img/kubesense-black.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://kubesense.ai',
        //   label: 'kubesense.ai',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: "Socials",
          items : [
            {
              label : "X",
              href: "https://x.com/KubeSense",
            },
            {
              label: "LinkedIn",
              href : "https://www.linkedin.com/company/kubesense"
            },{
              label : "Youtube",
              href : "https://www.youtube.com/@kubesense"
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href : "https://kubesense.ai/blog"
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kubesense-ai',
            },
          ],
        },
        
      ],
      copyright: '© 2024 TykeVision, Inc. All rights reserved.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
