import wikitTailwindConf from '@wiseed/wikit/dist/tailwind.config';
import { colors } from './src/theme/colors';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,css}',
		'./node_modules/@wiseed/wikit/dist/user-interface/**/**/**/*.{html,js,svelte,ts}'
	],
	presets: [wikitTailwindConf],
	theme: {
		extend: {
			colors: colors,
			borderRadius: {
				'btn-default': 'var(--btn-radius-default)'
			}
		}
	}
} satisfies Config;
