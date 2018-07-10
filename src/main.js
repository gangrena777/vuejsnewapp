import Vue from 'vue'
import App from './App.vue'
import  VueRouter from 'vue-router'
import Home from './components/home.vue'
import Menu from './components/menu.vue'
import Admin from './components/admin.vue'
import History from './components/history.vue'
import Contact from './components/contact.vue'
import Delivery from './components/delivery.vue'
import About from './components/about.vue'
import OrderPage from './components/orderpage.vue'
import Login from './components/login.vue'
import {store } from './store/store.js'
import Adminview from './components/adminview'
import Vmodal from 'vue-js-modal'

Vue.use(VueRouter)
Vue.use(Vmodal)

const routes  = [
  {  path: '/',name:'homelink',  component : Home},
  { path: '/menu', name:'menulink', component : Menu},
  { path: '/login', name:'loginlink', component:Login},
  
  { path: '/about', name:'aboutlink', component: About,  children : [
       { path:'/history' , name:'historylink', component: History},
       { path:'/contact' , name:'contactlink', component: Contact},
       { path: '/delivery',name:'deliverylink', component: Delivery}
  ]
  },
  { path:'/orderpage', name:'orderpagelink', component:OrderPage},
  {path:'/admin', name:'adminlink' , component:Admin,beforeEnter:(to, from, next)=>{
        alert("Что бы зайти в панель администратора нужно авторизироваться!");
        next('/login')
  }},
  { path:'/adminview', name:'adminviewlink', component: Adminview},
  { path: '*' , redirect :"/"}

]

const router  = new VueRouter ({
  routes,
  mode: 'history'
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
