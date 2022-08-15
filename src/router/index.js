import { createRouter, createWebHashHistory } from 'vue-router'
import WordCloudView from '../views/WordCloudView.vue'

const routes = [
  {
    path: '/',
    name: 'wordcloud',
    component: WordCloudView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
