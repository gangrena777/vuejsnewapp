<template>
<div id="app">
  <div class="container">
       <Header></header>
  </div>
  <hr>
 <div class="container">
    <router-view></router-view>
  </div>
  <hr>
  <div class="container">
       <Footer></footer>
  </div>


</div>
</template>

<script>

import Header from './components/header.vue'
import Footer from './components/footer.vue'

import {MenuRef, OrdersRef} from './firebaseConfig'

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  created(){
     this.$store.dispatch('setMenu', MenuRef),
     this.$store.dispatch('setOrders', OrdersRef)
    // this.$store.dispatch('generalVuex/setItemsRef', firebaseWrapper.db.ref('items'))


  },
  components:{
    Header,
    Footer
   
  }
}
</script>

