---
title: Экстрактор Svelte
---

# Экстрактор Svelte {#svelte-extractor}

Поддержка извлечения классов из директивы `class:`.

```svelte
<div class:text-orange-400={foo} />
```

Класс `text-orange-400` будет извлечен, и сгенерируется следующий код:

```css
.text-orange-400 {
  color: #f6993f;
}
```

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/extractor-svelte
```

```bash [yarn]
yarn add -D @unocss/extractor-svelte
```

```bash [npm]
npm install -D @unocss/extractor-svelte
```

```bash [bun]
bun add -D @unocss/extractor-svelte
```

:::

```ts [uno.config.ts]
import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
})
```
