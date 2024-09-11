import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "菜鸟教研室",
  description: "Let’s build from here",
  themeConfig: {
    search:{
   provider:'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'git命令', link: '/markdown-examples' },
          { text: 'mysql', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/dyson-ball' }
    ]
  }
})
