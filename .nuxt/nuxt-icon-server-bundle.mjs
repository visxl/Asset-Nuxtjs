import { createRequire } from 'module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'heroicons': () => require('@iconify-json/heroicons/icons.json'),
  'mdi': () => require('@iconify-json/mdi/icons.json'),
  'mdi-light': () => require('@iconify-json/mdi-light/icons.json'),
  'radix-icons': () => require('@iconify-json/radix-icons/icons.json'),
}