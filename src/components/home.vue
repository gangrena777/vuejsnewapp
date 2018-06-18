<template>
	
	<div class="row">
		<div   id = "home" class="col-sm-12 text-center">
			 <div class="background">
			 	<h1>WELCOME  TO WATER SHOP!</h1>
			 	<h2>you feel thirsty</h2>
			 	<button class=" btn btn-success" v-on:click = "letsOrder()"> let's order</button>
			 </div>
		</div>
	</div>
</template>

<script >
export default{
	methods:{
		letsOrder(){
			this.$router.push({
				name:'menulink'
			})
		}
	}
}
	
</script>

<style >
	
	#home{
		background:url('../assets/Penguins.jpg');
		height: 800px;
		padding: 10%

	}
	.background{
		margin: 0 auto;
		background:#eee;
		opacity: 0.7;
		max-width: 60%;
		padding: 20px 0;
	}
</style>