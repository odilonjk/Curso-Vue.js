<template>
	<button class="botao botao-perigo" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {

	props: ['tipo', 'rotulo']

}
</script>

<style>
	.botao {
		padding: 4px 8px;
		margin: 5px;
		border-radius: 5px;
		font-size: 12px;
	}

	.botao-perigo {
		float: right;
		background-color: #f44336;
		color: white;
		opacity: 0.8;
	}

	.botao-perigo:hover {
		box-shadow: 0 2px 6px 0 gray;
		opacity: 1;
	}

	.botao-padrao {
		background-color: #e7e7e7; 
		color: black;
	}
</style>