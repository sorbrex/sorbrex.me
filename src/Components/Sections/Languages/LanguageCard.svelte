<script lang="ts">
	export let name: string;
	export let source: string;
	export let alt: string;
	export let color: string;
</script>

<div class="flex flex-col items-center justify-center m-2 min-w-16">
	<img src={`https://cdn.simpleicons.org/${source}/${color}`} {alt} class="h-16 w-16 shadow mb-1" />
	<h2 class="text-subtitleColor font-bold text-lg mb-3">{name}</h2>
</div>
