import adapter from '@sveltejs/adapter-static';

import path from 'path';
const absolutePath = (filepath) => path.resolve(__dirname, filepath);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		  }),
		paths: {
			base: '/DataVisualization',
			assets: absolutePath('src/_app')
		},
		
	}
};

export default config;
