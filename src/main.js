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
import {store } from './store/store.js'


Vue.use(VueRouter)

const routes  = [
  {  path: '/',name:'homelink',  component : Home},
  { path: '/menu', name:'menulink', component : Menu},
  
  { path: '/about', name:'aboutlink', component: About,  children : [
       { path:'/history' , name:'historylink', component: History},
       { path:'/contact' , name:'contactlink', component: Contact},
       { path: '/delivery',name:'deliverylink', component: Delivery}
  ]
  },
  { path:'/orderpage', name:'orderpagelink', component:OrderPage},
  {path:'/admin', name:'adminlink' , component:Admin},
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
