<script lang="ts">
	import Header from '$Components/Complex/Header.svelte';
	import About from '$Sections/About/About.svelte';
	import Languages from '$Sections/Languages/Languages.svelte';
	import Projects from '$Sections/Projects/Projects.svelte';
	import More from "$Sections/More/More.svelte";

	import type { PageData } from './$types'
	export let data: PageData

</script>

<main class="bg-pageBackground text-paragraphColor font-Satoshi h-screen select-none overflow-y-auto">
	<div id="Page" class="flex flex-col h-full max-w-[800px] my-0 mx-auto">
		<!--    Header-->
		<div id="Header">
			<Header />
		</div>

		<!--    About-->
		<div id="About">
			<About />
		</div>

		<!--    Languages-->
		<div id="Languages">
			<Languages />
		</div>

		<!--    Projects-->
		<div id="Projects">
			<Projects />
		</div>

		<!--    More-->
		<div id="More">
			<More data={data}/>
		</div>

		<!--    Footer-->
		<div id="Footer" class="flex justify-center items-center h-18 pb-1">
			<p class="text-paragraphColor text-xs"> <a href="https://it.wikipedia.org/wiki/Licenza_MIT" target="_blank" class="inline text-titleColor border-titleColor border-b-2 border-dotted">MIT</a> © 2024 Nando Sorbello</p>
		</div>
	</div>
</main>
