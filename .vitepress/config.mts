import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "叶绿体",
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
          { text: 'mysql', link: '/api-examples' },
          { text: '生物信息', link: '/biologicalinformation' },
          { text: '前端面试', link: '/font-end-interview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/dyson-ball' }
    ]
  }
})
