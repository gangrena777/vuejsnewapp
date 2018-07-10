<template>
<div class="row">
		
		<div class="container" v-if="inwork">
          <h3 class=".panel-title">Order page</h3>
             <p>YOUR ORDER</p>
             <hr>
          <table  class="order_busket table table-hover"">
				<thead  class="thead-default">
					<tr>
						<th>item</th>
						<th>size</th>
					
						<th>count</th>
						<th>price</th>
            <th>total</th>
					</tr>
				</thead>
				<tbody v-for="(order,index)  in getBusketOrders"  >
					<tr  v-for ="item in order">
						<td>{{item.name}}</td>
						<td> {{item.size}}</td>
						<td>{{item.count}}</td>
            <td>{{item.price}}</td>
						<td>{{item.price * item.count}}$</td>
     

					</tr>
          
               
          
				</tbody>
	      </table>
        <hr>
      <p>total price:{{ }}$</p>
      
        <hr>

          <p>Order information:</p> 
          <div >
          	  <form>
          	  	  <div  class="form-group col-md-6">
          	  	  	
          	  	  	<input type="text"  class="form-control  form-control-sm" v-model="newOrder.firstname" placeholder="first name">
          	  	  </div>

          	  	   <div  class="form-group col-md-6">
          	  	  	
          	  	  	<input type="text"  class="form-control form-control-sm" v-model="newOrder.lastname" placeholder="last name">
          	  	  </div>
          	  	   <div  class="form-group col-md-6">
          	  
          	  	  	<input type="email"  class="form-control form-control-sm"  v-model="newOrder.email" placeholder="email">
          	  	  </div>
          	  	   <div  class="form-group col-md-6">
          	 
          	  	  	<input type="text" class="form-control form-control-sm" v-model="newOrder.adress" placeholder="adress">
          	  	  </div>
          	  	   <div  class="form-group col-md-6">
          	  	  	
          	  	  	<input type="text" class="form-control form-control-sm" v-model="newOrder.phone" placeholder="phone">
          	  	  </div>
                      <div>
          	  	   <div  class="form-group col-md-6">
          	  	  	
          	  	  	<textarea  class="form-control form-control-sm" v-model="newOrder.comment" rows="5" placeholder="comment"></textarea>
                          </div>                    
     <small class=" text_help" >
* Here you must wright some comment to your order.For example  - time when you can take your order...
     </small>
          	  	
                      </div>



<button  class="btn btn-success" v-on:click.prevent="makeNewOrder()"> push </button>
<button class="btn btn-danger" v-on:click.prevent = "cancel()">cancel</button>
          	  </form>




          </div>   



       
               

		</div>

          <div v-else>
          <br>
          Your order is in the work!!!Our manager call you....
          <br>
          <button  class="btn-success btn-block" v-on:click="goHome()">Click here to go to main page</button>
          </div>
</div>
	</template>
     <script >
      import {OrdersRef} from '../firebaseConfig'
      import { mapGetters } from 'vuex'
          export default{
               data(){
                    return{ 
                            
                          inwork: true,
                          newOrder:{
                               'firstname':'',
                               'lastname':'',
                               'email':'',
                               'adress':'',
                               'phone':'',
                               'comment':'',
                               'show':false,
                               'in_work':false
                                 
                                  }
                              
                          }
                    },

                methods:{

                   makeNewOrder()
                              {  
                                  this.inwork = false;
                             OrdersRef.push([this.newOrder, 
                             this.$store.getters.getBusketOrders]);
                             this.$store.commit('cancelBusketOrder'); 
                              },
                     goHome()
                             {
                                  this.$router.push({name:'homelink'})
                             },
                     cancel(index)
                             {
                                  //очистить корзину и вернуться в меню
                                 
                                  //var index = this.index;
                                  this.$store.commit('cancelBusketOrder');
                                  this.$router.go(-1);
                             }
                    
                          },  
               computed:{

                    // getOrderItems(){
                     //  return  this.$store.getters.getOrders;
                          ...mapGetters([
                                 'getOrders',
                                 'getBusketOrders'])

                          }
                        }
                    
              

          
     </script>
     <style >
          .text_help{
               position: relative;
               width: 330px;
              float: right;
              
              bottom: 100px;
             
              right: 130px;
              top: -100;
              color: red
         }
     
     </style>