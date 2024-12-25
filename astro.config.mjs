// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://luckkrit.github.io',
	base: '/int4101',
	integrations: [
		starlight({
			title: 'INT4101',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
				{
					label: 'Labs',
					autogenerate: { directory: 'labs' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/kbd.css',
			],
		}),
	],
});
