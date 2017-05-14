<template>
	<button @click="disparaAcao" class="botao botao-remove" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {

	props: ['tipo', 'rotulo'],
	methods: {
		disparaAcao() {
			if(confirm('Confirma operação?')){
				this.$emit('botaoAtivado');	
			}
		}
	}

}
</script>

<style>
	.botao {
		padding: 3px 7px;
		margin: 5px;
		border-radius: 5px;
		font-size: 12px;
	}

	.botao-remove {
		border-radius: 14px;
		float: right;
		background-color: #f44336;
		color: white;
		opacity: 0.8;
	}

	.botao-remove:hover {
		box-shadow: 0 2px 6px 0 gray;
		opacity: 1;
	}

	.botao-padrao {
		background-color: #e7e7e7; 
		color: black;
	}
</style>