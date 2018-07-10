<template>
<div  class="row">
	
      <h3> Autorize  before enter at admin panel</h3>

     <div  class='<div class="col-sm-12 col-md-8'>
     	 <form>
     	 	<div class="form-group">
     	 		<label>Email:</label>
     	 		<input type="email" class="form-control" id="email"  placeholder="Write here your email" required>
     	 	</div>
            <div class="form-group">
     	 		<label>Password:</label>
     	 		<input type="Password" class="form-control" id="password"  placeholder="Write here your pass" required>
     	 	</div>


          <button  type="button" class="btn primary"  v-on:click="SignIn">Sign in</button>
     	 </form>
    </div>                   
</div>

</template>
<script >
	import Firebase from 'Firebase'

	export default{

		methods:{

			SignIn(){
				var email = document.getElementById('email').value;
				var password = document.getElementById('password').value;
				Firebase.auth().signInWithEmailAndPassword(email,password)
				.then(
					  
					  vm =>{  this.$router.push({
				                name:'adminviewlink'
				
			                                  })
				          }
				)
				.catch(
					function(error){
					var errorCode = error.code;
					var errorMessage  = error.message;
					if(errorMessage ==='auth/wrong-password'){
						alert('Wrong password')
					}
					else{alert(errorMessage)}

				})

			}

	}


	}

	



</script>