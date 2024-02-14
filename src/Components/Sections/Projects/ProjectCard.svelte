<script lang="ts">
	import ButtonLink from "$Components/UI/ButtonLink.svelte";

	export let source: string;
	export let title: string;
	export let description: string;
	export let redirect: string;
</script>

<div
	class="bg-cardBackground border-4 border-subtitleColor rounded-lg p-2 flex flex-col items-center justify-center w-[200px] m-2"
>
	<img src={source} alt={title} class="h-16 w-16 shadow m-10" />
	<h1 class="text-2xl font-bold text-subtitleColor">{title}</h1>
	<p class="text-paragraphColor max-w-[15ch] text-center my-2">{description}</p>
	<ButtonLink ref={redirect} content="Read More..."/>
</div>
