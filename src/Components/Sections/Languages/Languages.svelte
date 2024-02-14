<script>
    import LanguageCard from "../../Sections/Languages/LanguageCard.svelte";
</script>

<section class="flex flex-col p-2 mt-10">
    <h1 class="text-3xl font-bold text-titleColor">Languages</h1>

    <div class="flex flex-row items-center justify-around mt-5 flex-wrap">
        <LanguageCard source="typescript" color="#3178C6" alt="typescript" name="TypeScript"/>

        <LanguageCard source="react" color="#61DAFB" alt="react" name="React"/>

        <LanguageCard source="svelte" color="#FF3E00" alt="svelte" name="SvelteKit"/>

        <LanguageCard source="tailwindcss" color="#06B6D4" alt="tailwindcss" name="Tailwind"/>

        <LanguageCard source="swift" color="#F05138" alt="swift" name="Swift"/>
    </div>

    <div class="flex flex-row items-center justify-around mt-5 flex-wrap">
        <LanguageCard source="nodedotjs" color="#339933" alt="nodedotjs" name="NodeJS"/>

        <LanguageCard source="fastify" color="fff" alt="fastify" name="Fastify"/>

        <LanguageCard source="express" color="green" alt="express" name="Express"/>

        <LanguageCard source="prisma" color="#5163BA" alt="prisma" name="Prisma"/>

        <LanguageCard source="mongodb" color="#47A248" alt="mongodb" name="MongoDB"/>
    </div>

    <div class="flex flex-row items-center justify-around mt-5 flex-wrap">
        <LanguageCard source="minio" color="#C72E49" alt="minio" name="MinIO"/>

        <LanguageCard source="apachekafka" color="fff" alt="apachekafka" name="Kafka"/>

        <LanguageCard source="ansible" color="EE0000" alt="ansible" name="Ansible"/>

        <LanguageCard source="kubernetes" color="#326CE5" alt="kubernetes" name="Kubernetes"/>

        <LanguageCard source="gnubash" color="#4EAA25" alt="gnubash" name="Bash"/>
    </div>

</section>