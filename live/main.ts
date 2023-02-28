import { text } from './script.inline.ts'

const script = document.createElement('script')
script.type = 'module'
script.innerHTML = text
document.body.appendChild(script)
