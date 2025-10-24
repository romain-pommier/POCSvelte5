/// <reference types="vitest/config" />
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig, loadEnv, type UserConfig } from 'vite';

export default defineConfig(({ mode }): UserConfig => {
	const useLocalDS: boolean = true;
	const localWikitPath: string = '../wiseed-wikit';

	if (useLocalDS && !localWikitPath) {
		throw new Error(
			'USE_LOCAL_DESIGN_SYSTEM is set, but LOCAL_WIKIT_PATH is not defined or empty.'
		);
	}
	return {
		plugins: [sveltekit()],

		resolve: {
			alias: useLocalDS ? { '@wiseed/wikit': path.resolve(__dirname, localWikitPath) } : {}
		},
		server: {
			fs: {
				allow: useLocalDS ? [path.resolve(localWikitPath)] : []
			}
		},

		optimizeDeps: useLocalDS
			? {
					exclude: ['@wiseed/wikit']
				}
			: { include: ['@wiseed/wikit'] }
	};
});
