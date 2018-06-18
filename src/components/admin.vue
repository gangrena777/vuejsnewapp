<template>
	<div class="row">
		<h1 class=".panel-title">ADMIN PANEL</h1>
		<div class="col-sm-12 col-md-6  addus">
			
         <Newwateradd></newwateradd>
		</div>
		<div class="col-md-6 col-sm-12">
			<h3>Menu:</h3>
			<table>
				<thead>
					<tr>
						<th>Item</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody v-for="(item, index)  in getMenuItems" 
				 v-bind:key="item['.key']">
					<tr  >
						<td>{{ item.name}}</td>
						<td><button class="btn" v-on:click="deleteMenu(item['.key'])">X</button></td>
						
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row order_content"  >
			<h3>Orders:</h3>
			<ul  class="order_ul" >

<li v-for ="order,index  in getOrders"  v-bind:key="order['.key']">

<p  class="showTemplete"       v-on:click="order['.value'][0]['show']=!order['.value'][0]['show']"  v-bind:class="{showTemplete_inwork: order['.value'][0]['in_work']}">Order №:{{index+1}}<button class="btn  orderdel"
 v-on:click="deleteOrder(order['.key'])">X</button></p>

<div  v-if="order['.value'][0]['show']" >
<p><input type="checkbox" id="checkbox" v-model="order['.value'][0]['in_work']" 
 v-on:click="checkbox_value(order['.key'])">
    <label for="checkbox">IN WORK</label></p>
<div class="order_identification"   >
    
	<p>order name:{{order['.value'][0]['firstname']}} {{order['.value'][0]['lastname']}} </p>
	<p>order email:{{order['.value'][0]['email']}}</p>
	<p>order phone:{{order['.value'][0]['phone']}}</p>
	<p>order adress:{{order['.value'][0]['adress']}}</p>
	<p style="color: red"> comment:{{order['.value'][0]['comment']}}</p>


	

	
</div>		
	<table  class="order_busket table table-hover">
				<thead  class="thead-default">
					<tr>
						<th>item</th>
						<th>size</th>
					
						<th>count</th>
						<th>price</th>
					</tr>
				</thead>
				<tbody v-for='item in order' >
				
					<tr  v-for='i in item[1][0]' >
						<td>{{i.name}}</td>
						<td> {{i.size}}</td>
						<td>{{i.count}}</td>
						<td>{{i.price}}</td>
                   
						
					</tr>
					
                 
				</tbody>
	</table>

</div>
</li>

</ul>			
		</div>
	</div>



</template>
<script >
import Newwateradd  from './newwateradd.vue'
import {MenuRef} from '../firebaseConfig'
import {OrdersRef} from '../firebaseConfig'

import { mapGetters } from 'vuex'

export default{
	data(){
		return{
		
		}
	},
	computed:{

				//getMenuItems(){
				//return 	 this.$store.state.menuItems
				//return this.$store.getters.menuItemsGet

				...mapGetters([
					'getMenuItems',
					'getOrders'])
				
				

	},
	methods:{
		 checkbox_value(key){
		 	OrdersRef.child(key).child(0).update({in_work: true});
		
		},
		deleteMenu(key){
			MenuRef.child(key).remove()
		},
		deleteOrder(key){
			OrdersRef.child(key).remove()
		}   
	},
	components:{
           Newwateradd: Newwateradd
	}

	}

	
</script>
<style >
.order_content{
	padding: 20px;
	width: 100%;
}
.order_ul{
   padding: 20px;
	width: 100%;	
}
.order_identification{

}
.order_busket{
	width: 80%;
}   

    h1,h2,h3{
    	width: 60%;
    	display: block;
    	margin: 0 auto;
    	text-align: center;
    	background: green;
    	border-radius: 10px;
    	margin-bottom: 20px


    }
	
	.adduse{
		display: block;
		margin-bottom: 50px;
	}
	.order_ul >li{
       list-style-type: none;   
	}
	.order_block{
		height: 40px
	}
	.showTemplete{
		width: 80%;
		padding: 2px;
		border: 2px solid black;
		background-color: red; 
		display: block
	}
	.showTemplete_inwork{
		background-color: green
	}
     .orderdel{
	
	
		float: right;

	}
</style>