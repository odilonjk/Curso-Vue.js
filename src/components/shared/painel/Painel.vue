<template>	
      	
	<div class="painel">
		<h5 class="painel-titulo">{{ titulo }}</h5>
		<div>
			
		</div>
	</div>

</template>

<script>
export default {
	props: ['titulo']
}
</script>

<style>

	.painel {
		padding: 0 auto;
		display: inline-block;
		margin: 5px;
		box-shadow: 3px 5px 5px grey;
		width: 200px;
		height: 100%;
		vertical-align: top;
		text-align: center;
	}

	.painel .painel-titulo {
		font-family: helvetica;
		text-align: center;
		background: #fff;
		margin: 0 0 15px 0;
		padding: 10px;
		text-transform: uppercase;
	}

</style>
