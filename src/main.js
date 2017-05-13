import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
