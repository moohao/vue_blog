import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/articles',
      component (resolve) {
        require(['../pages/ArticleList.vue'], resolve)
      }
    },
    {
      path: '/articles/new',
      component (resolve) {
        require(['../pages/NewArticle.vue'], resolve)
      }
    },
    {
      path: '/articles/:id',
      component (resolve) {
        require(['../pages/ShowArticle.vue'], resolve)
      }
    }
  ]
})
