<template>
    <footer class="row">
       <nav class="navbar navbar-toogleable -md navbar-light">
       	   <ul class="navbar nav  ">

             <li class="navbar-item"> 
            <router-link   :to ="{ name:'homelink'}"><a  class=" navbar-link" href=""> HOME</a></router-link>
             </li>

              <li class="navbar-item"> 
            <router-link :to ="{ name:'menulink'}"><a  class=" navbar-link" href=""> MENU</a></router-link>
             </li>

                 <li class="navbar-item"> 
            <router-link  :to ="{ name:'adminlink'}"><a  class=" navbar-link" href=""> ADMIN</a></router-link>
             </li>

          
          </ul>
       </nav>
    	</footer>
</template>

<style >
   .navbar{
      display: block;
      float: right;


    }
  .navbar-item{
    display: block;
    float: left;
    width: 100px; 
  }

</style>