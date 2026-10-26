---
title: Сброс стилей
description: UnoCSS по умолчанию не выполняет сброс стилей или preflight для максимальной гибкости и не заполняет ваш глобальный CSS.
outline: deep
---

# Сброс стилей браузера {#browser-style-reset}

UnoCSS по умолчанию не предоставляет сброс стилей или префлайты, чтобы не загромождать ваш глобальный CSS, а также для обеспечения максимальной гибкости. Если вы используете UnoCSS вместе с другими CSS-фреймворками, они, скорее всего, уже выполняют сброс стилей за вас. Если вы используете только UnoCSS, вы можете использовать библиотеки для сброса стилей, такие как [Normalize.css](https://github.com/csstools/normalize.css).

Мы также предоставляем небольшую коллекцию готовых решений для быстрого подключения:

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add @unocss/reset
```

```bash [yarn]
yarn add @unocss/reset
```

```bash [npm]
npm install @unocss/reset
```

```bash [bun]
bun add @unocss/reset
```

:::

## Использование {#usage}

Вы можете добавить один из следующих файлов сброса стилей в ваш `main.js`.

### Normalize.css

Источник: https://github.com/csstools/normalize.css

```ts
import '@unocss/reset/normalize.css'
```

### sanitize.css

Источник: https://github.com/csstools/sanitize.css

```ts
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
```

### Eric Meyer

Источник: https://meyerweb.com/eric/tools/css/reset/index.html

```ts
import '@unocss/reset/eric-meyer.css'
```

### Tailwind

Основан на старой версии [Preflight](https://github.com/tailwindlabs/tailwindcss/blob/v3.4.18/src/css/preflight.css), с некоторыми недавними изменениями

```ts
import '@unocss/reset/tailwind.css'
```

### Tailwind v4

Основан на [Preflight](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css)

```ts
import '@unocss/reset/tailwind-v4.css'
```

### Tailwind compat

```ts
import '@unocss/reset/tailwind-compat.css'
```

Этот сброс основан на [сбросе Tailwind](#tailwind), за исключением переопределения цвета фона для кнопок, чтобы избежать конфликтов с UI-фреймворками. См. [связанное обсуждение](https://github.com/unocss/unocss/issues/2127).

::: code-group

```css [До]
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
```

```css [После]
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  /*background-color: transparent; !* 2 *!*/
  background-image: none; /* 2 */
}
```

:::
