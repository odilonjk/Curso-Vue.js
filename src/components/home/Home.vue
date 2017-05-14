<template>
	
  <div id="root">

  	<input type="search" class="filtro" placeholder="título" @input="filtro =   $event.target.value">
  	<ul class="fotos">
      <li class="fotos-item" v-for="foto of fotosComFiltro">
      	
        <krgr-painel :titulo="foto.titulo">
      		<imagem-responsiva :url="foto.url" :alt="foto.titulo" />
          <krgr-botao tipo="button" rotulo="X" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="remove"/>
				</krgr-painel>
      	
      </li>
    </ul>

  </div>

</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
	components: {
		'krgr-painel': Painel,
		'imagem-responsiva': ImagemResponsiva,
    'krgr-botao': Botao
	},

  data() {
  	return {
  		titulo: 'krogr photos',
  		menu: [
  			{
  				url: 'cadastro.html',
  				descricao: 'sign in'
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
  		fotos: [],
  		filtro: ''
  	}
  },

  computed: {
  	fotosComFiltro() {
  		if(this.filtro) {
  			let exp = new RegExp(this.filtro.trim(), 'i');
  			return this.fotos.filter(foto => exp.test(foto.titulo));
  		} else {
  			return this.fotos;
  		}
  	}
  },

  methods: {

    remove(foto) {
      alert('Foto removida! ' + foto.titulo);  
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

/* Estilo da lista de fotos */
.filtro {
	display: block;
	margin-top: 10px;
	padding: 8px;
	width: 100%;
}

.fotos {
	margin: 0 auto;
	list-style: none;
}

.fotos .fotos-item {
	display: inline-block;
}

</style>
