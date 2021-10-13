import { defineConfig, loadEnv } from 'vite'
import { join } from 'path'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

const root = join(__dirname, 'src')
const dist = join(__dirname, 'dist')

const htmlPlugin = (env: Record<string, string>) => {
    return {
        name: 'html-transform',
        transformIndexHtml(html: string) {
            return html.replace(/%(.*?)%/g, function (match, p1) {
                return env[p1]
            })
        },
    }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, root)

    return {
        plugins: [
            vue(),
            tsconfigPaths({ root: __dirname }),
            htmlPlugin(env),
            mdPlugin({ mode: [Mode.VUE] }),
        ],
        root,
        resolve: {
            alias: {
                '~': root,
                '@': root,
            },
        },
        build: {
            outDir: dist,
        },
    }
})
