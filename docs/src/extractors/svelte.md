---
title: Экстрактор Svelte
---

# Экстрактор Svelte {#svelte-extractor}

Поддерживается извлечение классов из директив `class:` и статических атрибутов `class` без кавычек в файлах `.svelte`.

```svelte
<div class:text-orange-400={foo} />
```

Класс `text-orange-400` будет извлечен, и сгенерируется следующий код:

```css
.text-orange-400 {
  color: #f6993f;
}
```

Атрибуты без кавычек поддерживают только один статический класс:

```svelte
<div class=text-orange-400 />
<div class=hover:bg-red-500></div>
```

Используйте кавычки для нескольких классов или значений, содержащих пробелы, кавычки, обратные кавычки, `=`, `<` или `>`. Выражения Svelte, например `class={active}`, по-прежнему обрабатываются обычным извлечением.

И `class=foo />`, и `class=foo/>` извлекают `foo` в соответствии с синтаксисом самозакрывающихся тегов Svelte. Другие слеши остаются частью токена класса, например `class=w-1/2`.

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
