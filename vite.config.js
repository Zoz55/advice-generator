import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
		  // these are the aliases and paths to them
		  '@components': path.resolve('./src/components'),
		  '@lib': path.resolve('./src/lib'),
		  '@utils': path.resolve('./src/lib/utils')
		}
	  }
});
