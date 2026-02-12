---
title: Пресет Wind3
description: Компактный пресет Tailwind CSS / Windi CSS для UnoCSS (@unocss/preset-wind3).
outline: deep
---

# Пресет Wind3 {#wind3-preset}

Компактный пресет Tailwind CSS / Windi CSS для UnoCSS.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-wind3)

::: info
`@unocss/preset-wind` и `@unocss/preset-uno` устарели и были переименованы в `@unocss/preset-wind3`. Этот пресет наследует от [`@unocss/preset-mini`](/presets/mini).
:::

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-wind3
```

```bash [yarn]
yarn add -D @unocss/preset-wind3
```

```bash [npm]
npm install -D @unocss/preset-wind3
```

```bash [bun]
bun add -D @unocss/preset-wind3
```

:::

```ts [uno.config.ts]
import presetWind3 from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { presetWind3 } from 'unocss'
```

:::

## Правила {#rules}

Основная цель этого пресета — обеспечить совместимость с [Tailwind CSS](https://tailwindcss.com/) и [Windi CSS](https://windicss.org/). Следует отметить, что полная совместимость не гарантируется. Подробную информацию об использовании см. в их [документации](https://tailwindcss.com/docs).

Полный список правил и пресетов, включенных в этот пресет, можно найти в нашей <a href="/interactive/" target="_blank">интерактивной документации</a> или непосредственно в [исходном коде](https://github.com/unocss/unocss/tree/main/packages-presets/preset-wind3).

## Возможности {#features}

### Тёмный режим {#dark-mode}

По умолчанию этот пресет генерирует тёмный режим на основе классов с помощью варианта `dark:`.

```html
<div class="dark:bg-red:10" />
```

сгенерируется:

```css
.dark .dark\:bg-red\:10 {
  background-color: rgb(248 113 113 / 0.1);
}
```

#### Тёмный режим на основе медиа-запросов {#media-query-based-dark-mode}

Чтобы вместо этого использовать тёмный режим на основе медиа-запросов глобально, вы можете изменить конфигурацию для варианта `dark:`:

```ts
presetWind3({
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

#### Опциональный тёмный режим на основе медиа-запросов {#opt-in-media-query-based-dark-mode}

Чтобы использовать опциональный тёмный режим на основе медиа-запросов, воспользуйтесь вариантом `@dark:`:

```html
<div class="@dark:bg-red:10" />
```

```css
@media (prefers-color-scheme: dark) {
  .\@dark\:bg-red\:10 {
    background-color: rgb(248 113 113 / 0.1);
  }
}
```

## Отличия от Tailwind CSS {#differences-from-tailwind-css}

### Кавычки {#quotes}

Использование кавычек в шаблоне (файлах, предназначенных для обработки) не поддерживается из-за особенностей работы экстрактора. Например, вы не сможете написать `before:content-['']`. В таких случаях предпочтительнее ввести новую утилиту, которую можно задать явно, например `class="before:content-empty"`.

### background-position с произвольными значениями {#background-position-with-arbitrary-values}

Tailwind [позволяет](https://tailwindcss.com/docs/background-position#using-custom-values) использовать пользовательские значения для `background-position`, используя «голый» синтаксис:

```html
<div class="bg-[center_top_1rem]"></div>
```

Пресет Wind вместо этого интерпретирует `center_top_1rem` как цвет. Используйте префикс `position:` для достижения того же результата:

```html
<div class="bg-[position:center_top_1rem]"></div>
```

### Анимации {#animates}

В Tailwind CSS меньше встроенных анимаций; мы полностью поддерживаем его правила анимации и внутренне интегрируем [Animate.css](https://github.com/animate-css/animate.css), чтобы предоставить больше анимационных эффектов.

Вы можете использовать префикс `animate-`, чтобы помочь IntelliSense быстрее найти нужную анимацию.

:::tip
Мы не объединяем конфликтующие названия анимаций из Tailwind и Animate.css. Если вам нужно использовать название анимации из Animate.css, используйте `animate-<название>-alt`.
:::

Например:

| Tailwind CSS | Animate.css |
| :---: | :---: |
| `animate-bounce` | `animate-bounce-alt` |
| <div w-full flex="~ items-center justify-center"><div class="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-purple-900/5 dark:ring-purple-200/20 shadow-lg rounded-full flex items-center justify-center"><div text-purple size-5 i-carbon-arrow-down></div></div></div> | <div w-full flex="~ items-center justify-center"><div class="animate-bounce-alt bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-purple-900/5 dark:ring-purple-200/20 shadow-lg rounded-full flex items-center justify-center"><div text-purple size-5 i-carbon-arrow-down></div></div></div> |

Если вы хотите настроить или изменить эффект анимации, мы предоставляем гибкие параметры конфигурации. Вы можете изменить длительность, задержку, кривую скорости и т. д. анимации через параметры конфигурации.

```ts [uno.config.ts]
export default defineConfig({
  theme: {
    animation: {
      keyframes: {
        custom: '{0%, 100% { transform: scale(0.5); } 50% { transform: scale(1); }}',
      },
      durations: {
        custom: '1s',
      },
      timingFns: {
        custom: 'cubic-bezier(0.4,0,.6,1)',
      },
      properties: {
        custom: { 'transform-origin': 'center' },
      },
      counts: {
        custom: 'infinite',
      },
    }
  }
})
```

Предварительный просмотр пользовательской анимации:

<div class="animate-custom bg-white dark:bg-slate-800 p-2 w-fit ring-1 ring-purple-900/5 dark:ring-purple-200/20 shadow-lg rounded-md flex items-center justify-center">animate-custom</div>

:::tip
Вы также можете добавить `category`, чтобы сгруппировать анимации для более удобного управления. Это упростит использование эффектов анимации сторонними инструментами.

```ts [uno.config.ts] {9}
export default defineConfig({
  theme: {
    animation: {
      keyframes: {
        custom: '{0%, 100% { transform: scale(0.5); } 50% { transform: scale(1); }}',
      },
      // ...
      category: {
        custom: 'Zooming',
      },
    }
  }
})
```

:::

## Отличия от Windi CSS {#differences-from-windi-css}

### Контрольные точки {#breakpoints}

| Windi CSS | UnoCSS      |
| :-------- | :---------- |
| `<sm:p-1` | `lt-sm:p-1` |
| `@lg:p-1` | `at-lg:p-1` |
| `>xl:p-1` | `xl:p-1`    |

### Пробелы в синтаксисе с квадратными скобками {#bracket-syntax-spaces}

Этот пресет использует `_` вместо `,` для обозначения пробела в синтаксисе с квадратными скобками.

| Windi CSS                          | UnoCSS                             |
| :--------------------------------- | :--------------------------------- |
| `grid-cols-[1fr,10px,max-content]` | `grid-cols-[1fr_10px_max-content]` |

Поскольку некоторые правила CSS требуют использования `,` как части значения, например: `grid-cols-[repeat(3,auto)]`

## Экспериментальные функции {#experimental-features}

::: warning
Этот пресет включает экспериментальные функции, которые в любое время могут претерпеть кардинальные изменения.
:::

### Media Hover

Media hover решает проблему [«залипающего» наведения](https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/), когда на мобильных устройствах при нажатии на элемент со стилем `hover` этот стиль сохраняется до тех пор, пока пользователь не нажмет в другом месте.

Поскольку обычный стиль `:hover` используется повсеместно, данный вариант использует синтаксис `@hover`, чтобы отличить его от стандартного псевдокласса `hover`.

Вариант `@hover-text-red` сгенерирует:

```css
@media (hover: hover) and (pointer: fine) {
  .\@hover-text-red:hover {
    --un-text-opacity: 1;
    color: rgb(248 113 113 / var(--un-text-opacity));
  }
}
```

## Параметры {#options}

::: info
Параметры этого пресета наследуются от [`@unocss/preset-mini`](/presets/mini#options).
:::

### important

- **Тип:** `boolean | string`
- **По умолчанию:** `false`

Опция `important` позволяет управлять тем, должны ли утилиты UnoCSS помечаться как `!important`. Это может быть очень полезно при использовании UnoCSS вместе с существующим CSS, который имеет селекторы с высокой специфичностью.

::: warning
Использование этой опции применит `important` ко всем утилитам, созданным UnoCSS. Если вы хотите применить его только к конкретным утилитам, используйте вместо этого вариант `important:`.
:::

Однако установка `important` в значение `true` может привести к проблемам при интеграции сторонних JS-библиотек, которые добавляют инлайновые стили вашим элементам. В таких случаях утилиты UnoCSS с `!important` перекрывают инлайновые стили, что может нарушить задуманный дизайн.

Чтобы обойти это, вы можете установить `important` в значение ID-селектора, например `#app`:

```ts [uno.config.ts]
import presetWind3 from '@unocss/preset-wind'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3({
      important: '#app',
    }),
  ],
})
```

Эта конфигурация добавит заданный селектор в качестве префикса ко всем вашим утилитам, фактически увеличивая их специфичность без реального использования `!important`.

Утилита `dark:bg-blue` выведет:

```css
#app :is(.dark .dark\:bg-blue) {
  --un-bg-opacity: 1;
  background-color: rgb(96 165 250 / var(--un-bg-opacity));
}
```
