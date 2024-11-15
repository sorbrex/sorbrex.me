<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let source: string;
	export let color: string;
</script>

<div class="flex flex-col items-center justify-center m-2 min-w-16">
	<Icon icon={source} {color} class="h-16 w-16 shadow mb-1" />
	<h2 class="text-subtitleColor font-bold text-lg mb-3">{name}</h2>
</div>
