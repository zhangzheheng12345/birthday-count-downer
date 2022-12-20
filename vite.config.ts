import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

const path = require('path')

export default defineConfig({
  base: '', // Deploy to zhangzheheng12345/bcd
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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
