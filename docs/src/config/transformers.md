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

## Программное использование {#programmatic-usage}

Трансформеры применяются интеграциями (Vite, Webpack, CLI и т. д.). Когда вы используете [`@unocss/core`](/tools/core) напрямую, `createGenerator` разрешает `transformers` из вашей конфигурации, но не выполняет их, поэтому вам нужно применить их к своему исходному коду самостоятельно перед извлечением утилит:

```ts
import type { UnocssPluginContext } from '@unocss/core'
import { createGenerator } from '@unocss/core'
import MagicString from 'magic-string'
import config from './uno.config'

const uno = await createGenerator(config)
const tokens = new Set<string>()

// подмножество контекста плагина, используемое официальными трансформерами
const ctx = { uno, tokens, invalidate: () => {} } as unknown as UnocssPluginContext

async function applyTransformers(code: string, id: string) {
  for (const enforce of ['pre', 'default', 'post'] as const) {
    for (const t of uno.config.transformers ?? []) {
      if ((t.enforce ?? 'default') !== enforce)
        continue
      if (t.idFilter && !t.idFilter(id))
        continue
      if (t.codeFilter && !t.codeFilter(code, id))
        continue
      const s = new MagicString(code)
      await t.transform(s, id, ctx)
      code = s.toString()
    }
  }
  return code
}

const code = await applyTransformers(source, 'src/App.vue')
await uno.applyExtractors(code, 'src/App.vue', tokens)
const { css } = await uno.generate(tokens)
```

Используйте преобразованный `code` вместо исходного кода, поскольку такие трансформеры, как [Группы вариантов](/transformers/variant-group) и [Компиляция классов](/transformers/compile-class), переписывают в нём имена классов. То же самое касается ваших CSS-файлов при использовании [Директив](/transformers/directives).

Это не охватывает то, что интеграции добавляют поверх, например комментарии `@unocss-ignore` и `@unocss-skip` или source map'ы.
