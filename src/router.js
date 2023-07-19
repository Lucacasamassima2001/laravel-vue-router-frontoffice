import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';

// Importare i componenti Vue


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: AppHome,
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	component: About,
		// },
		// {
		// 	path: '/contacts',
		// 	name: 'contacts',
		// 	component: Contacts,
		// },
	],
});

export { router };

