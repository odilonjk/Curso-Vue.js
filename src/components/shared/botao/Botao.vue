<template>
	<button @click="disparaAcao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
// ['tipo', 'rotulo', 'confirmacao', 'estilo']
	props: {
		tipo: {
			required: true,
			type: String
		},
		rotulo: {
			required: true,
			type: String
		},
		confirmacao: Boolean,
		estilo: String
	},
	methods: {
		disparaAcao() {
			if(this.confirmacao) {
				if(confirm('Confirma operação?')){
					this.$emit('botaoAtivado');	
				}
				return;
			}
			this.$emit('botaoAtivado');
		}
	},
	computed: {
		estiloDoBotao() {
			if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
			if(this.estilo == 'remove') return 'botao botao-remove';
		}
	}

}
</script>

<style>
	.botao {
		padding: 3px 7px;
		margin: 5px;
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
		border-radius: 5px;
	}
</style>