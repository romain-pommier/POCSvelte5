import 'dotenv/config';

const useLocalDS = process.env.USE_LOCAL_DESIGN_SYSTEM === 'true';
const localWikitPath = process.env.LOCAL_WIKIT_PATH ?? '';

export default {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {
			config: useLocalDS && localWikitPath ? './tailwind.local-config.ts' : './tailwind.config.ts'
		},
		'postcss-preset-env': {
			stage: 1,
			features: { 'nesting-rules': false }
		},
		autoprefixer: {},
		cssnano: {}
	}
};
