---
title: Пресет Mini
description: Минималистичный пресет для UnoCSS (@unocss/preset-mini).
outline: deep
---

# Пресет Mini {#mini-preset}

Базовый пресет для UnoCSS, содержащий только самые необходимые утилиты.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-mini)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-mini
```

```bash [yarn]
yarn add -D @unocss/preset-mini
```

```bash [npm]
npm install -D @unocss/preset-mini
```

```bash [bun]
bun add -D @unocss/preset-mini
```

:::

```ts [uno.config.ts]
import presetMini from '@unocss/preset-mini'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetMini(),
    // ...другие пресеты
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { presetMini } from 'unocss'
```

:::

## Правила {#rules}

Этот пресет является подмножеством [`@unocss/preset-wind3`](/presets/wind3) и содержит только самые необходимые утилиты, соответствующие свойствам CSS. Он исключает специфичные или сложные утилиты, введенные в Tailwind CSS (`container`, `animation`, `gradient` и др.). Это может стать отличной отправной точкой для вашего собственного пресета, основанного на знакомых утилитах из Tailwind CSS или Windi CSS.

## Возможности {#features}

### Тёмный режим {#dark-mode}

По умолчанию этот пресет генерирует тёмный режим на основе классов с помощью варианта `dark:`.

```html
<div class="dark:bg-red:10" />
```

сгенерирует:

```css
.dark .dark\:bg-red\:10 {
  background-color: rgb(248 113 113 / 0.1);
}
```

#### Тёмный режим на основе медиа-запросов {#media-query-based-dark-mode}

Чтобы использовать глобальный тёмный режим на основе медиа-запросов, вы можете изменить конфигурацию варианта `dark:`:

```ts
presetMini({
  dark: 'media'
})
```

Теперь

```html
<div class="dark:bg-red:10" />
```

сгенерирует:

```css
@media (prefers-color-scheme: dark) {
  .dark\:bg-red\:10 {
    background-color: rgb(248 113 113 / 0.1);
  }
}
```

### CSS @layer

[Нативный CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) поддерживается с помощью варианта `layer-xx:`

```html
<div class="layer-foo:p4" />
<div class="layer-bar:m4" />
```

сгенерирует:

```css
@layer foo {
  .layer-foo\:p4 {
    padding: 1rem;
  }
}
@layer bar {
  .layer-bar\:m4 {
    margin: 1rem;
  }
}
```

### Тема {#theme}

Вы можете полностью настроить свойства темы в вашей конфигурации, и UnoCSS в итоге выполнит их глубокое слияние (deep merge) с темой по умолчанию.

:::warning
Свойство `breakpoints` не объединяется глубоко, а перезаписывается; см. [Контрольные точки](/config/theme#breakpoints).
:::

```ts
presetMini({
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsl(var(--hue, 217) 78% 51%)', // class="bg-brand-primary"
      }
    },
  }
})
```

## Опции {#options}

### dark

- **Тип:** `class | media | DarkModeSelectors`
- **По умолчанию:** `class`

Опции тёмного режима. Это может быть `class`, `media` или пользовательский объект селекторов (`DarkModeSelectors`).

```ts
interface DarkModeSelectors {
  /**
   * Селектор для светлого варианта.
   *
   * @default '.light'
   */
  light?: string

  /**
   * Селектор для тёмного варианта.
   *
   * @default '.dark'
   */
  dark?: string
}
```

### attributifyPseudo

- **Тип:** `Boolean`
- **По умолчанию:** `false`

Генерировать псевдоселектор как `[group=""]` вместо `.group`.

### variablePrefix

- **Тип:** `string`
- **По умолчанию:** `un-`

Префикс для пользовательских свойств CSS.

### prefix

- **Тип:** `string | string[]`
- **По умолчанию:** `undefined`

Префикс утилит.

### preflight

- **Тип:** `boolean` | `on-demand`
- **По умолчанию:** `true`

Генерация префлайта. Возможные значения:

- `true`: всегда генерировать префлайт.
- `false`: не генерировать префлайт.
- `on-demand`: генерировать префлайт только для использованных утилит.
