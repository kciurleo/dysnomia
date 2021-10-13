import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import AddCardPack from '../views/AddCardPack.vue'
import Instructions from '../views/Instructions.vue'
import 'buefy/dist/buefy.css'

Vue.use(VueRouter)
Vue.use(Buefy)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testpage',
    name: 'Test',
    component: Test
  },
  {
    path: '/addcardpack',
    name: 'AddCardPack',
    component: AddCardPack
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  }
]

const router = new VueRouter({
  routes
})

export default router
