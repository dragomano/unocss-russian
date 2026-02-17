---
title: Трансформер директив
description: Трансформер UnoCSS для директив @apply, @screen и theme() (@unocss/transformer-directives)
outline: deep
---

# Трансформер директив {#directives-transformer}

Трансформер UnoCSS для директив `@apply`, `@screen` и `theme()`: `@unocss/transformer-directives`.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/transformer-directives
```

```bash [yarn]
yarn add -D @unocss/transformer-directives
```

```bash [npm]
npm install -D @unocss/transformer-directives
```

```bash [bun]
bun add -D @unocss/transformer-directives
```

:::

```ts [uno.config.ts]
import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { transformerDirectives } from 'unocss'
```

:::

## Использование {#usage}

### `@apply`

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

Будет преобразовано так:

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

#### `--at-apply`

Для совместимости с нативным CSS вы можете использовать пользовательские свойства CSS для замены директивы `@apply`:

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

Эта функция включена по умолчанию с несколькими псевдонимами, которые вы можете настроить или отключить с помощью:

```js
transformerDirectives({
  // значения по умолчанию
  applyVariable: ['--at-apply', '--uno-apply', '--uno'],
  // или отключаем так:
  // applyVariable: false
})
```

#### Добавление кавычек {#adding-quotes}

Чтобы использовать правила с `:`, вам придется заключить всё значение в кавычки:

```css
.custom-div {
  --at-apply: 'hover:text-red hover:font-bold';
  /* или */
  @apply 'hover:text-red hover:font-bold';
}
```

Использование кавычек после `@apply` является необязательным, это нужно для соответствия поведению некоторых форматтеров кода.

### `@screen`

Директива `@screen` позволяет создавать медиа-запросы, ссылающиеся на ваши контрольные точки по именам, взятым из [`theme.breakpoints`](/config/theme).

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen sm {
  .grid {
    --uno: grid-cols-3;
  }
}
/* ... */
...;
```

Будет преобразовано в:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 320px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
/* ... */
```

#### Поддержка вариантов контрольных точек {#breakpoint-variant-support}

`@screen` также поддерживает варианты `lt` и `at`:

#### `@screen lt-`

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen lt-xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen lt-sm {
  .grid {
    --uno: grid-cols-3;
  }
}
/* ... */
```

Будет преобразовано в:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 319.9px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (max-width: 639.9px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
/* ... */
```

#### `@screen at-`

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen at-xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen at-xl {
  .grid {
    --uno: grid-cols-3;
  }
}
@screen at-xxl {
  .grid {
    --uno: grid-cols-4;
  }
}
/* ... */
```

Будет преобразовано в:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 320px) and (max-width: 639.9px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (min-width: 1280px) and (max-width: 1535.9px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
/* ... */
```

### `theme()`

Используйте функцию `theme()` для доступа к значениям конфигурации вашей темы, используя точечную нотацию.

```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

Будет скомпилировано в:

```css
.btn-blue {
  background-color: #3b82f6;
}
```

### `icon()`

Используйте функцию `icon()` для преобразования утилиты иконки в конкретную svg-иконку.

::: warning
`icon()` зависит от `@unocss/preset-icons` и будет использовать его конфигурацию; убедитесь, что вы добавили этот пресет.
:::

```css
.icon {
  background-image: icon('i-carbon-sun');
}
```

Будет скомпилировано в:

```css
.icon {
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z'/%3E%3C/svg%3E");
}
```

Поскольку иконка по умолчанию использует `currentColor` в качестве цвета заливки, если вы хотите настроить цвет иконки, вы можете использовать `icon('icon name', 'custom color')`.

```css
.icon {
  background-image: icon('i-carbon-moon', '#fff');
  background-image: icon('i-carbon-moon', 'theme("colors.red.500")'); /* используем цвет темы */
}
```

Будет скомпилировано в:

```css
.icon {
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%23fff' d='M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3'/%3E%3C/svg%3E");
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%23ef4444' d='M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3'/%3E%3C/svg%3E");
}
```

## Лицензия {#license}

- Лицензия MIT &copy; 2022-настоящее время [hannoeru](https://github.com/hannoeru)
