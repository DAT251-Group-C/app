import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: new URL('./', import.meta.url).pathname,
      server: {
        deps: {
          inline: ['vuetify']
        }
      }
    },
  })
)
