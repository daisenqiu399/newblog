import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "戴森球",
  description: "Let’s build from here",
  themeConfig: {
    search:{
   provider:'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🗽首页', link: '/' },
      { text: '📚Article',link:'/article' },
      { text: '👬Friends',link:'/friends'},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '前端', link: '/markdown-examples' },
         
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/daisenqiu399' }
    ]
  }
})
