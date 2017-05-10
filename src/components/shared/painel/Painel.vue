<template>	
      	
	<div class="painel">
		<h5 class="painel-titulo">{{ titulo }}</h5>
		<slot class="painel-conteudo">
			
		</slot>
	</div>

</template>

<script>
export default {
	props: ['titulo']
}
</script>

<style scoped>

	.painel {
		padding: 0 auto;
		display: inline-block;
		margin: 5px;
		background: #fff;
		box-shadow: 3px 3px 3px grey;
		width: 200px;
		height: 100%;
		vertical-align: top;
		text-align: center;
	}

	.painel .painel-titulo {
		font-family: helvetica;
		font-weight: normal;
		text-align: center;
		background: #ddd;
		margin: 4px;
		padding: 10px;
		text-transform: lowercase;
		border-radius: 6px;
	}

</style>
