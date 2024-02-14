/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			rotate: {
				135: '135deg'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				pageBackground: '#18181A',
				cardBackground: '#27272A',
				paragraphColor: '#9F9FA8',
				subtitleColor: '#D4D4D8',
				titleColor: '#E4E4E7',
				white: '#ffffff'
			},
			fontFamily: {
				Satoshi: ['Satoshi', 'sans-serif']
			}
		}
	},
	plugins: []
};
