<template>
	
  <div>

  	<div class="container"> 	
	  	<div class="title-container">
	  		<h1 class="title">{{ titulo }}</h1>	
	  		
		  	<ul class="menu">
	  			<li v-for="item in menu" class="lista">
	  				<a :href="item.url" class="menu-item">{{ 	item.descricao }}</a>
	  			</li>
	  		</ul>	
			</div>
  	</div>
	  	  		


  	<ul class="fotos">
      <li class="fotos-item" v-for="foto of fotos">
      	<krgr-painel :titulo="foto.titulo">
  				<img :src="foto.url" :alt="foto.titulo" class="imagem-responsiva">		
  			</krgr-painel>
      	
      </li>
    </ul>

  </div>

</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
	components: {
		'krgr-painel': Painel
	},
  data() {
  	return {
  		titulo: 'krogr photos',
  		menu: [
  			{
  				url: 'sign_up.html',
  				descricao: 'sign up'
  			},
  			{
  				url: 'store.html',
  				descricao: 'store'
  			},
  			{
  				url: 'about.html',
  				descricao: 'about'
  			}
  		],
  		fotos: []
  	}
  },
  created() {
  	this.$http.get('http://localhost:3000/v1/fotos')
  		.then(res => res.json())
  		.then(fotos => this.fotos = fotos, err => console.log('Erro: API de fotos não encontrada.'));

  }
}
</script>

<style>

/* Estilo do header */
.container {
	margin: 0 auto;
	width: 100%;
	height: 300px;
	background-image: url("./assets/banner2.jpg");
}

.title-container {
	margin: auto;
	text-align: center;
	font-family: helvetica;
	display: table;
	
}

.title {	
	font-family: helvetica;
	border: 3px solid #e6e6e6;
	padding: 10px;
	width: 300px;
}

 /* Estilo do menu do header */
.menu {
	margin-right: 40px;
	text-align: center;
}

.menu li {
	display: inline;
}

.menu li:not(:first-child):before {
  content: "|";
  opacity: 0.4;
}

.menu .menu-item {
	font-family: helvetica;
	font-weight: bold;
	color: #333;	
	text-decoration: none;
	padding: 10px;
}

/* Estilo da lista de fotos */
.fotos {
	background-color: #e6e6e6;
	list-style: none;
}

.fotos .fotos-item {
	display: inline-block;
}

.imagem-responsiva {
	width: 100%;
}

</style>
