# Трансформеры {#transformers}

Предоставляет унифицированный интерфейс для преобразования исходного кода с целью поддержки соглашений.

```ts [my-transformer.ts]
import { SourceCodeTransformer } from 'unocss'
import { createFilter } from 'unplugin-utils'

export default function myTransformers(options: MyOptions = {}): SourceCodeTransformer {
  return {
    name: 'my-transformer',
    enforce: 'pre', // выполняем перед другими трансформерами
    idFilter(id) {
      // трансформируем только файлы .tsx и .jsx
      return id.match(/\.[tj]sx$/)
    },
    async transform(code, id, { uno }) {
      // code — это экземпляр MagicString
      code.appendRight(0, '/* my transformer */')
    },
  }
}
```

Вы можете ознакомиться с [официальными трансформерами](/presets/#transformers) для поиска дополнительных примеров.
