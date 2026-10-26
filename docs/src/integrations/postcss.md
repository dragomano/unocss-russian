---
title: Плагин UnoCSS для PostCSS
outline: deep
---

# Плагин PostCSS {#postcss-plugin}

Плагин PostCSS для UnoCSS. Поддерживает директивы `@apply`, `@screen` и `theme()`.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-integrations/postcss)

::: warning
Этот пакет в настоящее время находится в экспериментальном состоянии. Он не следует семантическому версионированию и может вносить критические изменения в патч-версиях.
:::

## Установка {#install}

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/postcss
```

```bash [yarn]
yarn add -D unocss @unocss/postcss
```

```bash [npm]
npm install -D unocss @unocss/postcss
```

```bash [bun]
bun add -D unocss @unocss/postcss
```

:::

```ts [postcss.config.mjs]
import UnoCSS from '@unocss/postcss'

export default {
  plugins: [
    UnoCSS(),
  ],
}
```

```ts [uno.config.ts]
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro,marko}',
    ],
  },
  presets: [
    presetWind3(),
  ],
})
```

```css [style.css]
@unocss;
```

## Использование {#usage}

### `@unocss`

at-правило (at-rule) `@unocss` является плейсхолдером. Оно будет заменено сгенерированным CSS.

Вы также можете внедрять каждый слой по отдельности:

```css [style.css]
@unocss preflights;
@unocss default;

/*
  Резервный слой (fallback). Всегда рекомендуется включать его.
  Сюда будут внедрены только неиспользованные слои.
*/
@unocss;
```

Если вы хотите включить все слои, независимо от того, были ли они включены ранее, вы можете использовать `@unocss all`. Это полезно, если вы хотите включить сгенерированный CSS в несколько файлов.

```css
@unocss all;
```

Или, если вы хотите исключить определенный слой, вы можете использовать директиву `@unocss !<layer>`:

```css
@unocss !preflights, !<other-layer>;
```

### `@apply`

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

Будет преобразовано в:

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

### `@screen`

Директива `@screen` позволяет создавать медиа-запросы, ссылающиеся на ваши контрольные точки по именам, взятым из [`theme.breakpoints`](https://github.com/unocss/unocss/blob/main/README.md#extend-theme).

```css
.grid {
  @apply grid grid-cols-2;
}
@screen xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen sm {
  .grid {
    @apply grid-cols-3;
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

#### Поддержка вариантов Breakpoint {#breakpoint-variant-support}

`@screen` также поддерживает варианты `lt` и `at`

##### `@screen lt`

```css
.grid {
  @apply grid grid-cols-2;
}
@screen lt-xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen lt-sm {
  .grid {
    @apply grid-cols-3;
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

##### `@screen at`

```css
.grid {
  @apply grid grid-cols-2;
}
@screen at-xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen at-xl {
  .grid {
    @apply grid-cols-3;
  }
}
@screen at-xxl {
  .grid {
    @apply grid-cols-4;
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
