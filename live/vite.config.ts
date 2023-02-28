import { defineConfig } from 'vite'
import { plugin } from '../src'

export default defineConfig({
  plugins: [plugin({ regex: /.*\.inline.ts$/ })],
})
