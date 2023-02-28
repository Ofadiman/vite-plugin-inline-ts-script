import { Plugin } from 'vite'
import { transpileModule } from 'typescript'

export const plugin = (options: { regex: RegExp }): Plugin => ({
  name: 'vite-plugin-inline-ts-script',
  transform(code, id) {
    if (options.regex.test(id)) {
      const transpiledOutput = transpileModule(code, {})

      return `export const text = ${JSON.stringify(transpiledOutput.outputText)}`
    }
  },
})
