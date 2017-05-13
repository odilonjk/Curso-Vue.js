<template>
	
  <div id="root">

  	<krgr-header :routes="routes"/>
	  
	  <transition name="fade">
  		<router-view></router-view>
  	</transition>

  </div>

</template>

<script>

import { routes } from './routes'
import Header from './components/shared/header/Header.vue'

export default {

	components: {
		'krgr-header': Header
	},
  data() {
  	return {
  		routes,
  		menu: [
  			{
  				url: 'cadastro',
  				descricao: 'sign up'
  			},
  			{
  				url: 'store',
  				descricao: 'store'
  			},
  			{
  				url: 'about',
  				descricao: 'about'
  			}
  		],
  	}
	}
}
</script>

<style>

/* Estilo da transição entre componentes */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
