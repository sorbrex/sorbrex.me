<script lang="ts">
	import ButtonLink from "$Components/UI/ButtonLink.svelte";

	export let source: string;
	export let title: string;
	export let description: string;
	export let redirect: string;
</script>

<div class="bg-cardBackground border-4 border-subtitleColor rounded-lg p-10 my-3 flex flex-col items-center justify-center w-[250px] h-[500px]">

	<img src={source} alt={title} class="h-16 w-16 shadow m-10" />

	<h1 class="text-2xl font-bold text-subtitleColor">{title}</h1>

	<p class="text-paragraphColor max-w-[15ch] text-center mt-2 mb-10">{description}</p>

	<ButtonLink ref={redirect} content="Read More..."/>
</div>
