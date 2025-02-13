// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Primeros pasos',
					autogenerate: { directory: 'primerospasos' },
				},
				{
					label: 'Tips',
					autogenerate: { directory: 'tips' },
				},
				{
					label: 'Tu empresa',
					autogenerate: { directory: 'tuempresa' },
				},
				{
					label: 'Como importar mis datos',
					autogenerate: { directory: 'importardatos' },
				},
				{
					label: 'Mi primer presupuesto',
					autogenerate: { directory: 'primerpresupuesto' },
				},
				{
					label: 'Mi primera factura',
					autogenerate: { directory: 'primerafactura' },
				},
				{
					label: 'Bancos',
					autogenerate: { directory: 'bancos' },
				},
				{
					label: 'Articulos',
					autogenerate: { directory: 'articulos' },
				},
				{
					label: 'Contabilidad',
					autogenerate: { directory: 'contabilidad' },
				},
			],
		}),
	],
});
