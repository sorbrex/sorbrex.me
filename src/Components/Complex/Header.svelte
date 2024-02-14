<script>
    import ButtonLink from "../UI/ButtonLink.svelte";

    const menuOpen = false;
</script>

<header class="w-full">
    <nav id="NavBar" class="flex items-center justify-between w-full p-4 select-none">

<!--            ============================================-->
<!--            = Standard Mobile Status, Full Hidden Menu =-->
<!--            ============================================-->

        <div id="Mobile Menu" class="block sm:hidden">
            <div class="py-2 px-4 m-1 flex items-start cursor-pointer" onClick={() => console.log("Open Menu")}></div>
        </div>

        <div class={`absolute right-0 top-20 min-w-[200px] min-h-[200px] flex flex-col justify-between sm:hidden ${menuOpen ? "visible" : "hidden"}`}>
            <div class="flex flex-col w-full justify-start items-start text-left">
                <ButtonLink content='Languages' ref="dashboard" />
                <ButtonLink content='Project' ref="/transaction" />
                <ButtonLink content='More' ref="/transaction" />
            </div>
        </div>

<!--            =========================================-->
<!--            = Standard Desktop Status, Full Visible =-->
<!--            =========================================-->

        <div id="UserInteraction" class="w-full flex items-center">
            <ButtonLink content='langs' ref="#Languages" />
            <ButtonLink content='project' ref="#Projects" />
            <ButtonLink content='more' ref="#More" />
        </div>
    </nav>
</header>