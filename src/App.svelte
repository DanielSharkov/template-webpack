<script>
	import globalStyles from '../public/global.styl'
	import { RouterViewport } from '@danielsharkov/svelte-router'
	import router from './router'
	export let name
</script>



<style lang="stylus">
	nav
		margin 1rem auto 1rem auto
		width 800px
		button
			margin-right 1rem
			&.active
				background-color #06F
				border-color #06F
				color #FFF

	#router-viewport
		width 800px
		margin auto
</style>



<div id="app">
	<nav>
		{#each $router.routes as route}
			{#if route.metadata && route.metadata.nav}
				<button
				class:active={$router.route.name === route.name}
				on:click={() => router.push(route.name)}>
					{route.metadata.nav.displayName}
				</button>
			{/if}
		{/each}
	</nav>
	<div id="router-viewport">
		<RouterViewport router={router}/>
	</div>
</div>
