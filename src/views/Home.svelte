<script>
	import route from '../router'
	export let metadata

	let param1 = ''
	let param2 = ''

	function openRoute() {
		if (param1 !== '' && param2 !== '') {
			route.push('parameter', {param1, param2})
		}
	}
</script>



<style lang="stylus">
	h1
		color purple
</style>



<h1>Hello {metadata.name}!</h1>

<input type="text" placeholder="Param 1" bind:value={param1}>
<input type="text" placeholder="Param 2" bind:value={param2}>
<button on:click={openRoute} disabled={param1 === '' && param2 === ''}>
	Open Route Parameter
</button>
