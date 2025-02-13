import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "温知文档",
  description: "温知文档,温知笔记,欢迎使用温知系列产品！",
  markdown: {
    config: (md) => {
      md.use(taskLists)
    }
  },
  head:[
    [
      'meta',
      {
        'name':'meta-name',
        'conent':'meta-content'
      }
    ], 
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{"text":"文档","items":[{"text":"文档","link":"/vitepress/cbb13370-ea17-11ef-be56-8bd7c09f16ba/d1f3d4e0-ea17-11ef-be56-8bd7c09f16ba"}]},{"text":"index.md","link":"/"}],
    sidebar: [{"text":"文档","items":[{"text":"文档","link":"/vitepress/cbb13370-ea17-11ef-be56-8bd7c09f16ba/d1f3d4e0-ea17-11ef-be56-8bd7c09f16ba"}]},{"text":"index.md","link":"/"}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyming99/wenzdoc_web' }
    ],
    //页脚
    footer: {
      message: '',
      copyright: 'Copyright ©WenzDoc 2024 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">xxxx</a>',  
    },
  }
})
