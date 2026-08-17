---
title: Интеграция с Twoslash
---

# Интеграция с Twoslash {#twoslash-integration}

`@unocss/twoslash` предоставляет интеграцию [twoslash](https://twoslash.netlify.app/) с UnoCSS, добавляя к блокам кода сгенерированный CSS-вывод. Это особенно полезно для сайтов с документацией, работающих на [VitePress](https://vitepress.dev).

```ts twoslash [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['m-1', { margin: '1px' }],
  ],
})
```

## Установка {#installation}

```bash
npm add @unocss/twoslash
```

## Использование с VitePress {#usage-with-vitepress}

В вашем `.vitepress/config.ts`:

```ts
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createTwoslasher } from '@unocss/twoslash'
import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    codeTransformers: [
      transformerTwoslash({
        langs: ['vue', 'html'],
        twoslasher: createTwoslasher(),
      }),
    ],
  },
})
```

Затем используйте `twoslash` после указания языка в блоках кода:

```html twoslash
<div class="p-4 text-red"></div>
```

## Параметры {#options}

### `configPath`

Путь к вашему файлу конфигурации UnoCSS. Если он не указан, путь будет автоматически найден при поиске вверх по дереву каталогов.

```ts
createTwoslasher({
  configPath: './my-uno.config.ts',
})
```

### `preprocess`

Пользовательское преобразование кода перед его отправкой в UnoCSS для генерации. Оно не влияет на отображаемый код.

```ts
createTwoslasher({
  preprocess: code => code.replace(/\/\/.*$/gm, ''),
})
```
