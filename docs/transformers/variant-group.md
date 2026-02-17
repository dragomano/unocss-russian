---
title: Трансформер групп вариантов
description: Включает функцию групп вариантов из Windi CSS для UnoCSS (@unocss/transformer-variant-group)
---

# Трансформер групп вариантов {#variant-group-transformer}

Включает [функцию групп вариантов](https://windicss.org/features/variant-groups.html) из Windi CSS для UnoCSS.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/transformer-variant-group
```

```bash [yarn]
yarn add -D @unocss/transformer-variant-group
```

```bash [npm]
npm install -D @unocss/transformer-variant-group
```

```bash [bun]
bun add -D @unocss/transformer-variant-group
```

:::

```ts [uno.config.ts]
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...
  transformers: [
    transformerVariantGroup(),
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { transformerVariantGroup } from 'unocss'
```

:::

## Использование {#usage}

```html
<div class="hover:(bg-gray-400 font-medium) font-(light mono)" />
```

Будет преобразовано так:

```html
<div class="hover:bg-gray-400 hover:font-medium font-light font-mono" />
```

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
