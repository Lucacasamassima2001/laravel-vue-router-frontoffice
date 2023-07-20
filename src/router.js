import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppDrinks from './pages/AppDrinks.vue';
import AppShow from './pages/AppShow.vue';




// Importare i componenti Vue


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: AppHome,
		},
		{
			path: '/about',
			name: 'about',
			component: AppAbout,
		},
		{
			path: '/drinks',
			name: 'drinks',
			component: AppDrinks,
		},
		{
			path: '/show/:id',
			name: 'drinks.show',
			component: AppShow,
		},
		// {
		// 	path: '/contacts',
		// 	name: 'contacts',
		// 	component: Contacts,
		// },
	],
});

export { router };

