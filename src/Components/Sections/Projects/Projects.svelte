<script>
	import ProjectCard from '$Sections/Projects/ProjectCard.svelte';
</script>

<section class="flex flex-col p-2 mt-10">
	<h1 class="text-3xl font-bold text-titleColor">Projects</h1>

	<div class="flex flex-row items-center justify-around mt-5 flex-wrap">
		<ProjectCard
			source="https://i.postimg.cc/1t8mcKJq/moneykeeper.png"
			title="MoneyKeeper"
			description="This Web Application aims to give a clear view of our financial movements. It provides accurate data through filters and groupings that allow us to better understand the trend of our spending habits."
			redirect="https://github.com/sorbrex/MoneyKeeper"
		/>
		<ProjectCard
			source="https://cdn.simpleicons.org/bookstack/fff"
			title="Kinga"
			description="This project was born from the need to be able to read Tachiyomi comics on your Kindle Device. With this tool you will be able to take all the Chapters of a manga and turn them in merged Volumes."
			redirect="https://github.com/sorbrex/chapter-converter"
		/>
		<ProjectCard
			source="https://cdn.simpleicons.org/pluscodes/fff"
			title="Battle Math"
			description="Challenge your friends in Mathematical Competitions. It will allows you to play a multiplayer game where players challenge each other in multiplication knowledge."
			redirect="https://github.com/sorbrex/BattleMath"
		/>
	</div>
</section>
