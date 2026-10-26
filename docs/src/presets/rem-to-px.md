---
title: Пресет rem в px
description: Конвертирует rem в px для утилит (@unocss/preset-rem-to-px).
outline: deep
---

# Пресет rem в px {#rem-to-px-preset}

Конвертирует `rem` в `px` для всех утилит.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-rem-to-px)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-rem-to-px
```

```bash [yarn]
yarn add -D @unocss/preset-rem-to-px
```

```bash [npm]
npm install -D @unocss/preset-rem-to-px
```

```bash [bun]
bun add -D @unocss/preset-rem-to-px
```

:::

```ts [uno.config.ts]
import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetRemToPx(),
    // ...другие пресеты
  ],
})
```

## Использование {#usage}

```html
<div class="m-2"></div>
```

::: code-group

```css [Without]
.m-2 {
  margin: 0.5rem;
}
```

```css [With]
.m-2 {
  margin: 8px;
}
```

:::

## Опции {#options}

### baseFontSize

- **Тип:** `number`
- **По умолчанию:** `16`

Базовый размер шрифта для конвертации rem в px (`1rem = n px`).
