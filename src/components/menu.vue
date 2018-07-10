<template>
	<div class="row">
	  <div class="col-sm-4">
	  
	  	<table  class="table table-hover">
	  		
	  		<thead class="thead-default">
	  			<tr>
                      <th> size</th>
                       <th>price</th>
                       <th>add to bascet</th>

	  			</tr>
	  		</thead>
	  		<tbody v-for='menu,index  in getMenuItems'>
	  			  <tr>
	  			  	<th><strong>{{ menu.name}}</strong></th>
	  			  	<p>{{menu.description}}</p>
	  			  </tr>
	  			  <tr  v-for='option in menu.options'>
	  			  	<td>{{ option.size}}</td>
	  			  	<td>{{ option.price}}<strong>$</strong></td>
	  			  	<td>
	  			 <button class="btn btn-success" 
	  			  v-on:click ='addToBusket(menu,  option)'><strong>+</strong>
	  			  </button>
	  			  	</td>
	  			  </tr>
	  		</tbody>
	  	</table>
	  	</div>
	  
	 
	  <div  class="col-sm-8"  v-if='busket.length > 0'>
	  	
      <div  >    	
      <table  class="table table-hover">
	  		
	  		<thead class="thead-default">
	  			<tr>
                     
                       <th>NAME</th>
                      
                        <th> COUNT</th>
                        <th>TOTAL</th>
                        <th></th>

	  			</tr>
	  		</thead>
	  		<tbody v-for='(item,index) in busket'>
	  			  <tr>
	  			  	<td><strong>{{ item.name}}</strong> - {{item.size}}</td>
	  			  
	  			  
	  			  	<td>
	  			  	    <button class="btn btn-danger" v-on:click='plus(item)' >+</button>
	  			  	     <span>{{item.count}}</span>
	  			  	       <button class="btn btn-danger"  v-on:click ='minus(item)'>-</button>
	  			  		
                     </td>
                     <td>
                     {{price(item.count, item.price)}}
                     </td>
                     <td  ><button class="btn"  v-on:click='removeFromBusket(index)'>X</button></td>

	  			  </tr>
	  			  
	  			  
	  		</tbody>
	  	</table>

	  	<p>TOTAL PRICE:{{total()}}$</p>
	  	<button class="btn-success btn-block" v-on:click="makeOrder">Let's ordered</button>

       
	  </div>

	  
</div>
<div  class="empty_busket" v-else>
<h6>Your Basket is empty</h6>
	<img  src="../assets/basket.jpg">
</div>
 </div>
</template>
<script >
import { mapGetters } from 'vuex'
import { OrdersRef } from '../firebaseConfig'
 //  import {MenuRef} from '../firebaseConfig'
	export default{
		data (){
			return {

				busket:[],
				price_item:'',
				totall: ''
				
                   }
				
			},
			computed: {
				//getMenuItems(){
				//return 	 this.$store.state.menuItems
				//return this.$store.getters.menuItemsGet
				...mapGetters([
					'getMenuItems'])
				

               
			},
			methods: {
				addToBusket(menu, option){
					this.busket.push(
					                 {
					                    name : menu.name,
					                     size: option.size,
					                      price:option.price,
					                       count:1,
					                      
					                     
					                      
                                     }
					                 )
					                    },
			  plus(item){
			   	item.count ++;
			   },
			   minus(item){
			   item.count --;

			   if(item.count === 0){
			   	this.removeFromBusket(item);
			   }
			   },
			   removeFromBusket(index){
			   	this.busket.splice(index, 1);
			   },
			  makeOrder(){
               this.$store.commit('addOrder', this.busket);

               //OrdersRef.push(this.busket);
			   this.$router.push({

				name:'orderpagelink'
			                  })
		       },
		       price(x ,y){
		       	   var p = x * y;
		       	   this.price_item = p;
		       	   return p
	            },
	          
                total(){
                   var totalCost =0;
                   for(var items in this.busket)
                            {
                   	              var item_price = this.busket[items];
                   	               totalCost += item_price.count * item_price.price;
                             }
                     return  totalCost;
                     this.totall = totalCost;

                       }
                
	           // }
	         //  addNewOrder(){
	          // 	this.$store.commit('addOrder', this.busket)
	          // }
		       
		   
          }///methods
}

			   
	


</script>
<style >
    .empty_busket{
    	margin: 0 auto;
    	margin-top: 30px
    }
</style>