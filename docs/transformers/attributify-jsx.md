---
title: Трансформер Attributify JSX
description: Поддержка атрибутов без значений в JSX/TSX (@unocss/transformer-attributify-jsx)
---

# Трансформер Attributify JSX {#attributify-jsx-transformer}

Поддержка [атрибутов без значений](/presets/attributify#valueless-attributify) в JSX/TSX: `@unocss/transformer-attributify-jsx`.

## Введение {#presentation}

<!-- @unocss-ignore -->

```jsx
export function Component() {
  return (
    <div text-red text-center text-5xl animate-bounce>
      unocss
    </div>
  )
}
```

Будет преобразовано так:

```jsx
export function Component() {
  return (
    <div text-red="" text-center="" text-5xl="" animate-bounce="">
      unocss
    </div>
  )
}
```

::: details Без этого трансформера JSX рассматривает атрибуты без значения как логические атрибуты.

```jsx
export function Component() {
  return (
    <div text-red={true} text-center={true} text-5xl={true} animate-bounce={true}>
      unocss
    </div>
  )
}
```

:::

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/transformer-attributify-jsx
```

```bash [yarn]
yarn add -D @unocss/transformer-attributify-jsx
```

```bash [npm]
npm install -D @unocss/transformer-attributify-jsx
```

```bash [bun]
bun add -D @unocss/transformer-attributify-jsx
```

:::

```ts{11} [uno.config.ts]
import { defineConfig, presetAttributify } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  // ...
  presets: [
    // ...
    presetAttributify(),
  ],
  transformers: [
    transformerAttributifyJsx(), // <--
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { transformerAttributifyJsx } from 'unocss'
```

:::

## Предостережения {#caveats}

::: warning
Правила практически такие же, как и у [пресета Attributify](/presets/attributify), но есть несколько предостережений.
:::

```html
<div translate-x-100% />
<!-- не может заканчиваться на `%` -->

<div translate-x-[100px] />
<!-- не может содержать `[` или `]` -->
```

Вместо этого вам, возможно, стоит использовать атрибуты со значениями:

```html
<div translate="x-100%" />

<div translate="x-[100px]" />
```

## Чёрный список {#blocklist}

Этот трансформер будет преобразовывать только те атрибуты, которые являются действительными утилитами UnoCSS.
Вы также можете использовать `blocklist`, чтобы исключить некоторые атрибуты из преобразования.

```js
transformerAttributifyJsx({
  blocklist: [/text-[a-zA-Z]*/, 'text-5xl']
})
```

```jsx
<div text-red text-center text-5xl animate-bounce>
  unocss
</div>
```

Будет скомпилирован так:

```html
<div text-red text-center text-5xl animate-bounce="">unocss</div>
```
