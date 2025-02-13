// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Software eV4',
			logo: {
				src: './src/assets/logo-ev4.webp',
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
