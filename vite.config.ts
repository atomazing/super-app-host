import {  } from '@atomazing-org/vite-config/constants'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies'
import tsconfigPaths from 'vite-tsconfig-paths'

import type { UserConfig, Plugin } from 'vite'

const previewServer = {
	port: 3030,
	proxy: {
		'/timesheet': 'http://localhost:3032',
	},
} as const satisfies UserConfig['preview']

const replacePathsPlugin = (): Plugin => ({
	name: 'super-app-replace-importmap-paths',
	apply: (_, env) => env.mode === 'production',
	transformIndexHtml(html) {
		return html.replaceAll('deps/dev', 'deps')
	},
})

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		externalize({ externals: EXTERNAL_DEPS }),
		replacePathsPlugin(),
	],
	esbuild: { jsxDev: false },
	build: {
		target: 'esnext',
		minify: false,
		modulePreload: { polyfill: false },
		rollupOptions: { external: EXTERNAL_DEPS },
	},
	preview: previewServer,
})
