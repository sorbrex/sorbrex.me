import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$Components: 'src/Components',
			$Sections: 'src/Components/Sections',
			$Assets: 'src/Assets'
		}
	}
};

export default config;
