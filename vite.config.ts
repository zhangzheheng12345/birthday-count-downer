import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  base: 'birthday-count-downer',
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno()]
    })
  ],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443
    }
  }
})
