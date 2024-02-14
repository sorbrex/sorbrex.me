<script>
	import ProjectCard from '$Sections/Projects/ProjectCard.svelte';
</script>

<section class="flex flex-col p-2 mt-10">
	<h1 class="text-3xl font-bold text-titleColor">Projects</h1>

	<div class="flex flex-row items-center justify-around mt-5 flex-wrap">
		<ProjectCard
			source="https://i.postimg.cc/1t8mcKJq/moneykeeper.png"
			title="MoneyKeeper"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi."
			redirect="https://github.com/sorbrex/MoneyKeeper"
		/>
		<ProjectCard
			source="https://cdn.simpleicons.org/bookstack/fff"
			title="Chapter Merge"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi."
			redirect="https://github.com/sorbrex/chapter-converter"
		/>
		<ProjectCard
			source="https://cdn.simpleicons.org/pluscodes/fff"
			title="Battle Math"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi."
			redirect="https://github.com/sorbrex/BattleMath"
		/>
	</div>
</section>
