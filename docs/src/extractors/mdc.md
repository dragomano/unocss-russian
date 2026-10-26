---
title: Экстрактор MDC
description: Экстрактор MDC для UnoCSS (@unocss/extractor-mdc)
---

# Экстрактор MDC {#mdc-extractor}

Поддержка извлечения классов из синтаксиса [MDC (Markdown Components)](https://content.nuxtjs.org/guide/writing/mdc).

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/extractor-mdc
```

```bash [yarn]
yarn add -D @unocss/extractor-mdc
```

```bash [npm]
npm install -D @unocss/extractor-mdc
```

```bash [bun]
bun add -D @unocss/extractor-mdc
```

:::

```ts [uno.config.ts]
import extractorMdc from '@unocss/extractor-mdc'
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    extractorMdc(),
  ],
})
```

Он будет применять извлечение к файлам `.md`, `.mdc` и `.markdown`, чтобы извлечь использование классов из инлайн-свойств (пропсов). Например:

```md
# Заголовок{.text-2xl.font-bold}

Привет, [мир]{.text-blue-500}

![image](/image.png){.w-32.h-32}
```

Классы `text-2xl`, `font-bold`, `text-blue-500`, `w-32`, `h-32` будут извлечены.
