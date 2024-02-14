<script>
    import ProjectCard from "$Sections/Projects/ProjectCard.svelte"
    import MoneyKeeperLogo from "$Assets/moneykeeper.png"
    import BookLogo from "$Assets/bookstack.svg"
    import PlusLogo from "$Assets/pluscode.svg"
</script>

<section class="flex flex-col p-2 mt-10">
    <h1 class="text-3xl font-bold text-titleColor">Projects</h1>

    <div class="flex flex-row items-center justify-around mt-5 flex-wrap">
        <ProjectCard source={MoneyKeeperLogo} title="MoneyKeeper" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi." redirect="https://github.com/sorbrex/MoneyKeeper" />
        <ProjectCard source={BookLogo} title="Chapter Converter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi." redirect="https://github.com/sorbrex/chapter-converter" />
        <ProjectCard source={PlusLogo} title="Battle Math" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero tincidunt aliquam. Nulla facilisi." redirect="https://github.com/sorbrex/BattleMath" />
    </div>
</section>