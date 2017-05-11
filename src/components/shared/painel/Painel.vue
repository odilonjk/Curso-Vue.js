<template>	
      	
	<div class="painel">
		<h5 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h5>
		<transition name="painel-fade">
			<div class="painel-conteudo" v-show="visivel">
				<slot></slot>
			</div>
		</transition>
	</div>

</template>

<script>
export default {
	props: ['titulo'],
	data () {
		return {
			visivel: true
		}

	}
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

	.painel-fade-enter, .painel-fade-leave-active {
		opacity: 0;
	}

	.painel-fade-enter-active, .painel-fade-leave-active {
		transition: opacity 0.5s;
	}

</style>
