<template>
	


  
  <div class="row">
    <div class="title"><h3>About us...</h3>
        <h4>Click on the links below for more info</h4>
    </div>

         <nav class=" navbar collapse ">  
         	  <ul    class="navbar navbar-light" style="background-color: #e3f2fd;">
         	      <li class="navbar-item">
         	      	   <router-link   :to ="{ name:'historylink'}"><a  class=" navbar-link" href=""> History</a></router-link>
         	      </li>
         	       <li class="navbar-item">
         	       	   <router-link  :to ="{ name:'deliverylink'}"><a  class=" navbar-link" href=""> Delivery</a></router-link>
         	       </li>
         	        <li class="navbar-item">
         	        	<router-link  :to ="{ name:'contactlink'}"><a  class=" navbar-link" href=""> Contact</a></router-link>
         	        </li>
         	        
         	        
         	  	

         	  </ul>


         </nav>
         <hr>
  <div  class="container">
         <router-view></router-view>
    </div>
  </div>
</div>
</template>
<style >
	.title{
		width: 80%;
		margin: auto 0px;
		text-align: center
	}
</style>