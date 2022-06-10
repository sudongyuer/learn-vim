import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Vim通关小册',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  base:"/learn-vim/",

  themeConfig: {
    repo: 'sudongyuer/learn-vim',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    nav: [
      { text: 'Start', link: '/guide', activeMatch: '^/$|^/guide/' },
      {
        text: 'About ME',
        link: 'https://github.com/sudongyuer'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '开始我们Vim学习吧～',
       link:''
    },
    { text: '什么是Vim', link: '/guide/什么是Vim' },
    { text: '安装Vim', link: '/guide/安装Vim' },
    { text: 'Vim练习第一天', link: '/guide/Vim练习第一天'},
    { text: 'Vim练习第二天', link: '/guide/Vim练习第二天'},
    { text: 'Vim练习第三天', link: '/guide/Vim练习第三天'},
    { text: 'Vim练习第四天', link: '/guide/Vim练习第四天'},
    { text: 'Vim练习第五天', link: '/guide/Vim练习第五天'},
    { text: 'Vim备忘录清单', link: '/guide/Vim备忘录清单'},
    { text: 'Vim练习第六天', link: '/guide/Vim练习第六天'},
  ]
}
