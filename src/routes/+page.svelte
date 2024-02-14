<script>
	import Header from '$Components/Complex/Header.svelte';
	import About from '$Sections/About/About.svelte';
	import Languages from '$Sections/Languages/Languages.svelte';
	import Projects from '$Sections/Projects/Projects.svelte';
</script>

<main class="bg-pageBackground text-paragraphColor font-Satoshi h-screen select-none">
	<div id="Page" class="flex flex-col h-full max-w-[700px] overflow-y-auto my-0 mx-auto">
		<!--    Header-->
		<section id="Header">
			<Header />
		</section>

		<!--    About-->
		<section id="About">
			<About />
		</section>

		<!--    Languages-->
		<section id="Languages">
			<Languages />
		</section>

		<!--    Projects-->
		<section id="Projects">
			<Projects />
		</section>

		<!--    More-->
		<section id="More"></section>
	</div>
</main>
