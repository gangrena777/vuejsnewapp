<template>
    <header class="row">
       <nav class="navbar navbar-nav">
       	  <a  class="navbar-brand" href="/"> CLEAR CRISTALL WATER</a>
       	  <ul class="navbar nav  ">

       	  	 <li class="navbar-item"> 
            <router-link  :to ="{ name:'homelink'}"><a  class=" navbar-link" href=""> HOME</a></router-link>
       	  	 </li>

       	  	  <li class="navbar-item"> 
                 <router-link  :to ="{ name:'menulink'}"><a  class=" navbar-link" href=""> MENU</a></router-link>
       	  	 </li>

       	  	   	 <li class="navbar-item"> 
            <router-link  :to ="{ name:'aboutlink'}"><a  class=" navbar-link" href=""> ABOUT</a></router-link>
       	  	 </li>

       	  
       	  </ul>
       </nav>
    	</header>
</template>
<style>
     .navbar-brand{
     	font-size: 23px;
     	background: #eee; 
    box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
    padding: 10px;
     }
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