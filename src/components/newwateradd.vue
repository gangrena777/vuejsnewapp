<template>
	
         <form>
         	<h3>Add new type of water</h3>

         	<div class=" form-group row">
         	        <label class="col-sm-3">Name</label>
         	           <div class="col-sm-9">
         	   	         <input  name="form-control" v-model="newWater.name"></input>
         	           </div>

         	</div>           
           <div class=" form-group row">
         	        <label class="col-sm-3">Description</label>
         	              <div class="col-sm-9">
         	 <textarea  class="form-control" rows ='5' v-model="newWater.description"></textarea>  
         	            </div>
           </div>
        
         	            <p class="opt"><strong>Options:</strong></p>  
         	            <button class="btn btn-danger" v-on:click.prevent="addNewOption()">Add new option</button>
       <div  id="option"  v-for="(optionzzz,index) in newWater.options"  >
          <div  class="opt"   >
          <strong v-on:click='del(index)'>delete</strong>

             <div class=" form-group row">
         	         
         	            <label class="col-sm-3 lab">size (L)</label>
         	           <div class="col-sm-3  inp">
         	   	           <input  class="form-control" v-model="optionzzz.size"></input>
         	           </div>
            </div>
            <div class=" form-group row">
         	           <label class="col-sm-3">price ($)</label>
         	           <div class="col-sm-3 inp">
         	           
         	   	         <input  class="form-control" v-model="optionzzz.price"></input>
         	            </div>
           </div>
           <hr>
         </div>
       </div>
         	<div class=" form-group row">
        <button  class="btn-success btn-block"  v-on:click = 'addWater()'>ADD</button>
         	</div>



         </form>



</template>
<script >
          import {MenuRef} from '../firebaseConfig'

	      export default {
            data(){
                


             return {  count:1,
                       newWater:{
                           'name' : '',
                            'description':'',
                            'options':[
                                  {
                                 
                               	'size1': '',
                               	'price1': ''
                                   },
                                      {
                                 
                                'size2': '',
                                'price2': ''
                                   }

                                      ]
                                   }
                                }
                    
                   },
            methods: {
                 addWater(){

                 	MenuRef.push(this.newWater)

                 },
               /*  addNewOption(){

            

                    var option  = document.getElementById('option');
                    var elem = option.querySelector('.opt'); 

                    var clone = elem.cloneNode(true);
                    cl = clone.querySelector()
                    
                     option.appendChild(clone);


                   this.newWater.options.push(
                     {    
                           
                           size:optionzzz.size,
                           price:optionzzz.price
                     })

                 

                 }*/
                 del(index){
                 	this.newWater.options.splice(index, 1);
                 }
                    
            }       

	      }

</script>
<style >

     .option{
     	width: 80%;
     	height: 20px;
     	margin:0 auto;
     }
     .opt_cont{
     	width: 100%;
     }
     .lab{

     
     }
     .inp{
     	float: right;
     }
     button{
     	margin-bottom: 10px
     }
</style>