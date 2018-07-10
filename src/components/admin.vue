<template>
    

     <form>
            

            <div class=" form-group row">
                    <label class="col-sm-3">Name</label>
                       <div class="col-sm-9">
                         <input  name="form-control" v-model="updateWater.name">{{Update_data['name']}}</input>
                       </div>

            </div>           
           <div class=" form-group row">
                    <label class="col-sm-3">Description</label>
                          <div class="col-sm-9">
             <textarea  class="form-control" rows ='5' v-model="updateWater.description" >{{Update_data.description}}</textarea>  
                        </div>
           </div>
        
                        <p class="opttt"><strong>Options:</strong></p>  
                      <button class="btn btn-danger">Add new option</button>
       <div  id ="option" >
          <div  class="opt"     >
          <strong v-on:click='del(index)'>delete</strong>

             <div class=" form-group row">
                     
                        <label class="col-sm-3 lab">size (L)</label>
                       <div class="col-sm-3  inp">
                         <input  class="form-control" ></input>
                       </div>
            </div>
            <div class=" form-group row">
                       <label class="col-sm-3">price ($)</label>
                       <div class="col-sm-3 inp">
                       
                         <input  class="form-control" ></input>
                        </div>
           </div>
           
         </div>
       </div>
            <div class=" form-group row">
        <button  class="btn-success btn-block"  >ADD</button>
            </div>



         </form>

</template>
<script >
    export default{

        
    }
</script>