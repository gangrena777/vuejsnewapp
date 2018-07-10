<template>
	<div class="row  color">
		<h1 class=".panel-title">ADMIN PANEL</h1>
		<div class="col-sm-12 col-md-6  addus">
			<h3 >Add new type of water</h3>
			<button class="btn-block"  v-on:click='addNew=!addNew'>show form</button>

            <Newwateradd  v-if='addNew'></newwateradd>
		</div>
		<div class="col-md-6 col-sm-12">
			<h3>Menu:</h3>
			<table>
				<thead>
					<tr>
						<th>Item</th>
						<th>Delete</th>
						<th>Update</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody v-for="(item, index)  in getMenuItems" 
				 v-bind:key="item['.key']">
					<tr  >
						<td>{{ item.name}}</td>
						<td><button class="btn" v-on:click="deleteMenu(item['.key'])">X</button></td>
						<td><button class="btn"  v-on:click.prevent="showUpdate(item['.key'])"><img src="../assets/pencil.png"></button></td>
						<td><button class="btn" v-on:click.prevent="showView(item['.key'])"><img src="../assets/eye.png"></button></td>
						
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
<!-- ////UPDATE   ////-->
		 <modal name="update"   width='700' height="auto"  :scrollable="true">
  <h2>Update Item</h2>
 
   

    <form >
         	

         	<div class=" form-group row  view_form">
         	        <label class="col-sm-2">Name</label>
         	           <div class="col-sm-6">
         	   	         <input  name="form-control" v-model='updateWater.name' ></input>
         	           </div>

         	</div>           
           <div class=" form-group row  view_form">
         	        <label class="col-sm-2">Description</label>
         	              <div class="col-sm-7">
         	 <textarea  class="form-control" rows ='5' v-model='updateWater.description'></textarea>  
         	            </div>
           </div>
        
         	            <p class="opttt  view_form"><strong>Options:</strong></p>  
               <button class="btn btn-danger view_form" v-on:click.prevent="addNewOption()">Add new option</button>
       <div  id ="option"  v-for="(option,index) in updateWater.options" class="view_form">
          <div  class="opt ">
          
          <strong v-on:click='del(index)'><button>X</button>delete</strong>

             <div class=" form-group row">
         	         
         	            <label class="col-sm-3 lab" >size (L)</label>
         	           <div class="col-sm-3  inp">
         	   	         <input  class="form-control"  v-model="option.size"></input>
         	           </div>
            </div>
            <div class=" form-group row">
         	           <label class="col-sm-3">price ($)</label>
         	           <div class="col-sm-3 inp">
         	           
         	   	         <input  class="form-control"   v-model="option.price"></input>
         	            </div>
           </div>
           <hr>
         </div>
       </div>
       <div > 
        <button  class="btn-success" style="margin-left: 50px; width: 60px" v-on:click.prevent = "UpdateWater()">Update</button>
         <button   class="btn-danger"  style="margin-left: 10px;width: 60px" v-on:click.prevent="hideUpdate()">hide</button>
         </div>	
      </form>
    
  </modal>
<!--  ////Update ///-->



   <!-- ////VIEW -->
 <modal name="view"   width='700' height="auto"  :scrollable="true">
  <h2>View Item</h2>
  
  

    <form  v-for="item in getMenuItem">
         	

         	<div class=" form-group row view_form">
         	        <label class="col-sm-2">Name</label>
         	           <div class="col-sm-6">
         	   	         <input  name="form-control" :value="item[0]['name']" ></input>
         	           </div>

         	</div>           
           <div class=" form-group row  view_form">
         	        <label class="col-sm-2">Description</label>
         	              <div class="col-sm-7">
         	 <textarea  class="form-control" rows ='5'  :value="item[0]['description']"  ></textarea>  
         	            </div>
           </div>
        
         	            <p class="opttt  view_form"><strong>Options:</strong></p>  
                    
       <div  id ="option"  v-for="(option,index) in item[0]['options']"  class="view_form">
          <div  class="opt" >
          
         

             <div class=" form-group row">
         	         
         	            <label class="col-sm-3 lab">size (L)</label>
         	           <div class="col-sm-3  inp">
         	   	         <input  class="form-control" :value="option.size"  ></input>
         	           </div>
            </div>
            <div class=" form-group row">
         	           <label class="col-sm-3">price ($)</label>
         	           <div class="col-sm-3 inp">
         	           
         	   	         <input  class="form-control" :value="option.price"  ></input>
         	            </div>
           </div>
           <hr>
         </div>
       </div>
        
               	


        <button   class="btn-danger but" v-on:click.prevent="hideView()">hide</button>
         </form>
    </modal>

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
              addNew:false,
              firstModal:false,
              id_key:'',
              
              Update_data:[],
               updateWater:{
                           'name' : '',
                            'description':'',
                            'options':[
                                  {
                                 
                               	'size': '',
                               	'price': ''
                                   }

                                      ]
                            }
		
		      }
	    },
	    computed:{

				//getMenuItems(){
				//return 	 this.$store.state.menuItems
				//return this.$store.getters.menuItemsGet

				...mapGetters([
					'getMenuItems',
					'getOrders',
					'getMenuItem'
					          ])
				
				

	},

	methods:{
		checkbox_value(key){ //update in work data in order view
	     OrdersRef.child(key).child(0).update({in_work: true});
		
		},
		deleteMenu(key){  //delete menu item
			MenuRef.child(key).remove()
		},
		deleteOrder(key){  //deleye order item
			OrdersRef.child(key).remove()
		},
		showUpdate(key){  //show update  modal
	         MenuRef.child(key).on("value", snapshot =>this.Update_data.push(snapshot.val()));
             this.$store.commit('addItem', this.Update_data);
             this.$modal.show('update');
             this.id_key = key;
             var item = this.getMenuItem;
             this.updateWater = 
	            {
			          name :item[0][0]['name'],
			          description:item[0][0]['description'],
			          options:item[0][0]['options']
                }
	    },
		hideUpdate() {  //hide modal and delete data
			this.$modal.hide('update');
			this.$store.commit('cancelUpdate'); 
			this.key = '';
			this.Update_data=[]
		},

		showView(key){  //show view modal
             MenuRef.child(key).on("value", snapshot =>this.Update_data.push(snapshot.val()));
             this.$store.commit('addItem', this.Update_data);
             this.$modal.show('view');
        },
		hideView() {  //hide modal and delete data
			this.$modal.hide('view');
			this.$store.commit('cancelUpdate'); 
			this.Update_data=[]
		},
		addNewOption(){  // add new option in update panel
                 this.updateWater.options.push({
                    size:'',
                    price:''
                 })
        },
         del(index){  // delete option from update panel
                 	this.updateWater.options.splice(index, 1);
        },
        UpdateWater(key){
          MenuRef.child(this.id_key).update({name:this.updateWater.name,
          	                         description:this.updateWater.description,
          	                         options: this.updateWater.options
                                    });
          alert('Update is successfull!!!');
          this.$modal.hide('update');
		  this.$store.commit('cancelUpdate'); 
		  this.Update_data=[];
		  this.key = ''

		}  
	},
	components:{
           Newwateradd: Newwateradd
	}

	}

	
</script>
<style >
.color: {
	background-color: orange
}
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
	.view_form{ 
		margin-left: 30px
	}
	.but{
		margin: 5px 50px;
		width: 60px;
	}
</style>