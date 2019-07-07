import { Router } from '@danielsharkov/svelte-router'
import ViewHome from './views/Home'
import ViewAbout from './views/About'
import ViewParameter from './views/Parameter'
import ViewNotFound from './views/NotFound'

export default new Router({
	window,
	routes: {
		'home': {
			path: '/',
			component: ViewHome,
			metadata: {
				name: 'World',
				nav: {
					displayName: 'Home',
				},
			},
		},
		'about': {
			path: '/about',
			component: ViewAbout,
			metadata: {
				nav: {
					displayName: 'About',
				},
			},
		},
		'parameter': {
			path: '/parameter/:param1/:param2',
			component: ViewParameter,
		},
		'404': {
			path: '/404',
			component: ViewNotFound,
		},
	},
	fallback: {
		name: '404',
	},
})
