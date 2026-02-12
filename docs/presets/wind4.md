---
title: Пресет Wind4
description: Компактный пресет Tailwind4 CSS для UnoCSS (@unocss/preset-wind4).
outline: deep
---

# Пресет Wind4 {#wind4-preset}

Компактный пресет Tailwind4 CSS для UnoCSS. Он совместим со всеми функциями PresetWind3 и расширяет его возможности.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-wind4)

::: tip
Вы можете потратить немного времени на чтение этого документа, чтобы понять изменения
:::

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-wind4
```

```bash [yarn]
yarn add -D @unocss/preset-wind4
```

```bash [npm]
npm install -D @unocss/preset-wind4
```

```bash [bun]
bun add -D @unocss/preset-wind4
```

:::

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    //  ^?
  ],
})
```

## Совместимость {#compatibility}

Обратитесь к странице [Tailwind Compatibility](https://tailwindcss.com/docs/compatibility), чтобы узнать о поддержке браузеров и совместимости.

## Тема {#theme}

Тема `PresetWind4` практически идентична теме `PresetWind3`, но некоторые ключи темы были скорректированы.

::: warning
При переходе на PresetWind4, пожалуйста, сверьтесь с таблицей ниже, чтобы проверить конфигурацию ключей вашей темы и внести соответствующие корректировки.
:::

|                                            PresetWind3                                            |                          PresetWind4                                           |
| :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
|                                           `fontFamily`                                            |                            `font`                                              |
|                                            `fontSize`                                             | Перемещено в свойство `fontSize` внутри `text`                                 |
|                                           `lineHeight`                                            | Перемещено в свойство `lineHeight` внутри `text` или используйте `leading`     |
|                                          `letterSpacing`                                          | Перемещено в свойство `letterSpacing` внутри `text` или используйте `tracking` |
|                                          `borderRadius`                                           |                           `radius`                                             |
|                                             `easing`                                              |                            `ease`                                              |
|                                           `breakpoints`                                           |                         `breakpoint`                                           |
|                                       `verticalBreakpoints`                                       |                     `verticalBreakpoint`                                       |
|                                            `boxShadow`                                            |                           `shadow`                                             |
|                                                 -                                                 |                         `insetShadow`                                          |
| Свойства размера, такие как `width`, `height`, `maxWidth`, `maxHeight`, `minWidth`, `minHeight`   | Унифицировано для использования `spacing`                                      |
|                                       `transitionProperty`                                        |                          `property`                                            |
| `gridAutoColumn`, `gridAutoRow`, `gridColumn`, `gridRow`, `gridTemplateColumn`, `gridTemplateRow` |                               -                                                |
|                                       `container.maxWidth`                                        |                     `containers.maxWidth`                                      |
|                                                 -                                                 |                          `defaults`                                            |

### `Theme.defaults`

`Theme.defaults` — это глобальная конфигурация темы по умолчанию, которая будет применяться к стилям `reset` или использоваться в качестве значений по умолчанию для определенных правил.

Ниже приведены значения по умолчанию для `Theme.defaults`, которые вы можете переопределить в своей конфигурации темы.

<details>
<summary>Нажмите, чтобы просмотреть значения по умолчанию</summary>

```ts twoslash [uno.config.ts]
import type { Theme } from '@unocss/preset-wind4/theme'

export const defaults: Theme['default'] = {
  transition: {
    duration: '150ms',
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  font: {
    family: 'var(--font-sans)',
    featureSettings: 'var(--font-sans--font-feature-settings)',
    variationSettings: 'var(--font-sans--font-variation-settings)',
  },
  monoFont: {
    family: 'var(--font-mono)',
    featureSettings: 'var(--font-mono--font-feature-settings)',
    variationSettings: 'var(--font-mono--font-variation-settings)',
  },
}
```

</details>

## Опции {#options}

Базовая конфигурация PresetWind4 аналогична [PresetWind3](/presets/wind3#options), со следующими важными изменениями.

### Префлайты {#preflights}

В `PresetWind4` мы добавили опцию `preflights`, чтобы контролировать, включать ли стили пресета.

#### Опция `reset` {#reset}

В PresetWind4 мы приводим стили сброса в соответствие с Tailwind4 и интегрируем их внутри. Вам не нужно устанавливать никаких дополнительных пакетов сброса CSS, таких как `@unocss/reset` или `normalize.css`.

```ts [main.ts]
import '@unocss/reset/tailwind.css' // [!code --]
import '@unocss/reset/tailwind-compat.css' // [!code --]
```

Вам нужно лишь управлять включением стилей сброса с помощью переключателя:

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { // [!code ++]
        reset: true, // [!code ++]
      } // [!code ++]
    }),
  ],
})
```

#### Тема {#theme-1}

Выберите, как генерировать CSS-переменные темы.

##### Режим {#mode}

Движок UnoCSS с установленным `presetWind4` будет автоматически собирать зависимости от темы при парсинге утилит и генерировать CSS-переменные в конце.

- `true`: Генерировать ключи темы полностью.
- `false`: Отключить ключи темы. (Не рекомендуется ⚠️)
- `'on-demand'`: Генерировать ключи темы только при использовании. -> ✅ **(По умолчанию)**

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { // [!code ++]
        theme: true, // [!code ++]
      }, // [!code ++]
    }),
  ],
})
```

##### Опция `process` {#process}

И вы можете дополнительно контролировать вывод ваших переменных темы. Например, если вы хотите конвертировать `rem` в `px` для переменных темы, мы предоставляем функцию `createRemToPxProcessor` для обработки ваших переменных темы.

```ts twoslash [uno.config.ts]
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils' // [!code ++]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { // [!code ++]
        theme: { // [!code ++]
          mode: 'on-demand', // По умолчанию 'on-demand' // [!code ++]
          process: createRemToPxProcessor(), // [!code ++]
        } // [!code ++]
      }, // [!code ++]
    }),
  ],
})
```

Кстати, если вы хотите использовать пресет `presetRemToPx` для конвертации `rem` в `px`, вам больше не нужно импортировать этот пресет отдельно, так как `presetWind4` предоставляет эту функциональность внутри.

```ts twoslash [uno.config.ts]
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils' // [!code ++]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { // [!code ++]
        theme: { // [!code ++]
          process: createRemToPxProcessor(), // [!code ++]
        } // [!code ++]
      }, // [!code ++]
    }),
  ],
  postprocess: [createRemToPxProcessor()], // [!code ++]
})
```

#### Опция `property` {#property}

Управляет генерацией CSS-правил `@property` в слое `properties`.

По умолчанию PresetWind4 использует `@property` для определения пользовательских свойств CSS для лучшей оптимизации браузером. Эти свойства автоматически генерируются на основе использования ваших утилит и оборачиваются в запрос `@supports` для прогрессивного улучшения.

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        property: true, // включено (по умолчанию) | `false` для отключения [!code ++]
      },
    }),
  ],
})
```

##### Родитель и селектор {#parent-and-selector}

Вы можете настроить родительскую обёртку и селектор:

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        property: {
          // Пользовательский родительский селектор (например, использовать @layer вместо @supports)
          parent: '@layer custom-properties',
          // Пользовательский селектор для применения свойств
          selector: ':where(*, ::before, ::after)',
        },
      },
    }),
  ],
})
```

Если вам не нужна обёртка `@supports` и вы хотите, чтобы свойства применялись напрямую:

```ts twoslash [uno.config.ts]
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        property: {
          parent: false, // Без родительской обёртки
        },
      },
    }),
  ],
})
```

**Вывод по умолчанию:**

```css
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or
  ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
  *,
  ::before,
  ::after,
  ::backdrop {
    --un-text-opacity: 100%;
    /* ... */
  }
}
```

**С `parent: false`:**

```css
*,
::before,
::after,
::backdrop {
  --un-text-opacity: 100%;
  /* ... */
}
```

## Сгенерированный CSS {#generated-css}

В вывод PresetWind4 были добавлены три новых слоя: `base`, `theme` и `properties`.

| Имя слоя | Описание | Порядок |
| :------: | :------: | :-----: |
| `properties` | CSS-свойства, определённые через `@property` | -200 |
| `theme` | CSS-переменные, связанные с темой | -150 |
| `base` | Базовые стили preflight/reset | -100 |

### Слой `properties` {#properties-layer}

Мы использовали `@property` для определения CSS-свойств во многих правилах, чтобы добиться лучшей производительности и меньшего размера.

Например, часто используемые утилиты, такие как `text-op-xx`, `bg-op-xx` и так далее.

```css
@property --un-text-opacity {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}
```

### Слой `theme` {#theme-layer}

Мы поместили CSS-переменные, связанные с темой, в слой `theme`, чтобы вам было проще их переопределять и использовать напрямую.
Он может быть полным или формироваться по запросу. Данные всегда берутся из вашей конфигурации темы.

::: info
Сгенерированные имена ключей могут не полностью совпадать с `Tailwind4`. Мы стараемся избегать значительных изменений имён ключей в теме из уважения к пользователям, мигрирующим с `presetWind3`.
Вы также можете настроить желаемый вывод в секции [`preflights.theme.process`](#process).
:::

```css
:root,
:host {
  --spacing: 0.25rem;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  --colors-black: #000;
  --colors-white: #fff;
  /* ... */
}
```

## Совместимость с другими пресетами {#compatibility-with-other-presets}

`PresetWind4` расширяет и совместим с `PresetWind3`. Поскольку другие пакеты изначально разрабатывались для `PresetWind3`, при их совместном использовании могут возникнуть некоторые проблемы. Известные проблемы включают:

### presetRemToPx

`presetRemToPx` больше не требуется в `PresetWind4`, так как он уже включен внутри. Вы можете удалить его из вашей конфигурации.

См. опцию [`process`](#process) в настройках.

### presetLegacyCompat

В `presetWind4` мы используем цветовую модель `oklch` для обеспечения лучшего цветового контраста и цветовосприятия. Поэтому он несовместим с `presetLegacyCompat`, и их совместное использование **не рекомендуется**.

Пожалуйста, обратитесь к разделу [Совместимость](#compatibility) для получения дополнительной информации.
