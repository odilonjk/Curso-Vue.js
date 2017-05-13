import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
import Store from './components/store/Store.vue';
import About from './components/about/About.vue';

export const routes = [
	{ path: '', component: Home, titulo: 'home' },
	{ path: '/cadastro', component: Cadastro, titulo: 'sign in' },
	{ path: '/store', component: Store, titulo: 'store' },
	{ path: '/about', component: About, titulo: 'about' }
];