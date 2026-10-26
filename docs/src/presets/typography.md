---
title: Пресет типографики
description: Классы типографики для UnoCSS (@unocss/preset-typography).
outline: deep
---

# Пресет типографики {#typography-preset}

Предоставляет набор классов `prose`, которые можно использовать для добавления типографических настроек по умолчанию к «ванильному» HTML.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-typography)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-typography
```

```bash [yarn]
yarn add -D @unocss/preset-typography
```

```bash [npm]
npm install -D @unocss/preset-typography
```

```bash [bun]
bun add -D @unocss/preset-typography
```

:::

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import presetTypography from '@unocss/preset-typography'
// или
import { presetTypography } from 'unocss'
```

:::

## Использование {#usage}

```ts [uno.config.ts]
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind3 // или presetWind4
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(), // обязателен!
    presetAttributify(), // обязателен при исползовании режима атрибутов
    presetTypography(),
  ],
})
```

::: code-group

```html [Classes]
<article class="text-base prose dark:prose-invert xl:text-xl">
  {{ markdown }}
  <p class="not-prose">Какой-нибудь текст</p>
</article>
```

```html [Attributes]
<article text-base prose="~ dark:invert" xl="text-xl">
  {{ markdown }}
  <p class="not-prose">Какой-нибудь текст</p>
</article>
```

:::

::: warning
Примечание: `not-prose` может использоваться только как класс, но не как атрибут.
:::

## Особенности {#highlights}

### Любой размер {#any-size}

Применяйте различные размеры типографики с помощью встроенных вариантов размера: `prose-sm`, `prose-base`, `prose-lg`, `prose-xl` и `prose-2xl`. Класс `prose` по умолчанию использует базовый размер, но вы можете переопределить его с помощью утилит конкретного размера.

```html
<!-- Разные размеры -->
<article class="prose prose-sm">Маленькая типографика</article>
<article class="prose prose-base">Базовая типографика (по умолчанию)</article>
<article class="prose prose-lg">Крупная типографика</article>
<article class="prose prose-xl">Очень крупная типографика</article>
<article class="prose prose-2xl">2X крупная типографика</article>
```

Вы также можете комбинировать утилиты размера с адаптивными вариантами:

```html
<!-- Адаптивные размеры типографики -->
<article class="prose prose-sm md:prose-base lg:prose-lg xl:prose-xl">
  Адаптивная типографика, которая масштабируется в зависимости от размера экрана
</article>

<!-- Использование с другими утилитами -->
<article class="prose prose-lg prose-gray dark:prose-invert">Крупная типографика с цветом и тёмным режимом</article>
```

### Любой цвет {#any-color}

Применяйте любой цвет с помощью утилит `prose-${colorName}`, предоставляемых `presetWind3/4`. Их цвета берутся из ключа `colors` вашей темы, и рекомендуется, чтобы эти цвета имели диапазон от `50` до `950` для правильной градации. Поэтому использование `presetWind3/4` является **обязательным**.

Цветом по умолчанию для `prose` является `prose-gray`. Утилиты цвета prose будут применяться к различным типографическим элементам, таким как заголовки, ссылки, цитаты и блоки кода.

```html
<!-- Различные цветовые темы -->
<article class="prose prose-gray">Типографика в серых тонах</article>
<article class="prose prose-blue">Типографика в синих тонах</article>
<article class="prose prose-green">Типографика в зеленых тонах</article>
<article class="prose prose-purple">Типографика в фиолетовых тонах</article>
```

| Естественные цвета                                                                       | Акцентные цвета                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Имеют разные диапазоны цветовой градации, влияя на глобальное использование типографики. | Изменяют только цвет ссылок и не влияют на другие цвета.         |
| `prose-slate`                                                                            | `prose-rose`                                                     |
| `prose-slate`                                                                            | `prose-red`                                                      |
| `prose-gray`                                                                             | `prose-orange`                                                   |
| `prose-zinc`                                                                             | `prose-amber`                                                    |
| `prose-neutral`                                                                          | `prose-yellow`                                                   |
| `prose-stone`                                                                            | `prose-lime`                                                     |
|                                                                                          | `prose-green`                                                    |
|                                                                                          | `prose-emerald`                                                  |
|                                                                                          | `prose-teal`                                                     |
|                                                                                          | `prose-cyan`                                                     |
|                                                                                          | `prose-sky`                                                      |
|                                                                                          | `prose-blue`                                                     |
|                                                                                          | `prose-indigo`                                                   |
|                                                                                          | `prose-violet`                                                   |
|                                                                                          | `prose-purple`                                                   |
|                                                                                          | `prose-fuchsia`                                                  |
|                                                                                          | `prose-pink`                                                     |
|                                                                                          | `prose-rose`                                                     |

Вы можете комбинировать цвета с размерами и адаптивными вариантами:

```html
<!-- Адаптивное изменение цветов -->
<article class="prose prose-gray md:prose-blue lg:prose-green">
  Типографика, меняющая цвет на разных брейкпоинтах
</article>

<!-- Цвет с размером и поддержкой тёмного режима -->
<article class="prose prose-lg prose-slate dark:prose-invert">
  Крупная типографика в сланцевых тонах (slate) и с поддержкой тёмного режима
</article>
```

### Тёмный режим с одной утилитой {#dark-mode-with-a-single-utility}

Включайте типографический тёмный режим с помощью `prose-invert` (фоновый цвет должен обрабатываться пользователем самостоятельно). Например, `prose dark:prose-invert` будет использовать инвертированные цвета в тёмном режиме.

### Ваш собственный стиль {#your-very-own-style}

Стили элементов, находящихся вне `prose`, останутся неизменными. Никакого сброса стилей, как и в UnoCSS.

### Отмена с помощью утилиты `not` {#undo-with-not-utility}

Примените `not-prose` к элементам, чтобы отменить типографические стили. Например, `<table class="not-prose">` пропустит стили этого пресета для элемента `table` **(ПРИМЕЧАНИЕ: утилита `not` может использоваться только в классе, так как она используется только в CSS-селекторе и не сканируется UnoCSS)**.

### Опции совместимости {#compatibility-options}

Этот пресет использует некоторые псевдоклассы, которые не имеют широкой поддержки, но вы можете их отключить. ([#2064](https://github.com/unocss/unocss/pull/2064))

- Если вы включите `noColonNot` или `noColonWhere`, `not-prose` будет недоступен.
- Если вы включите `noColonIs`, режим атрибутов будет работать некорректно.

## Опции {#options}

Этот пресет предоставляет обширные возможности конфигурации для настройки стилей типографики, цветов, размеров и поведения.

:::tip
CSS-декларации, переданные в `cssExtend`:

- **переопределят** встроенные стили, если значения конфликтуют, иначе
- **будут объединены** (глубокое слияние) со встроенными стилями.
:::

### selectorName

- **Тип:** `string`
- **По умолчанию:** `prose`

Имя класса для использования типографических утилит. Чтобы отменить стили для элементов, используйте его в формате `not-${selectorName}`, что по умолчанию будет `not-prose`.

:::tip
Утилита `not` доступна только в классе.
:::

### cssExtend

- **Тип:** `Record<string, CSSObject> | ((theme: T) => Record<string, CSSObject>)`
- **По умолчанию:** `undefined`

Расширение или переопределение CSS-селекторов с помощью блока CSS-деклараций. Может быть либо статическим объектом, либо функцией, которая принимает тему и возвращает CSS-селекторы.

### important

- **Тип:** `boolean | string`
- **По умолчанию:** `false`

Управляет тем, должны ли типографические утилиты быть помечены как `!important`. При установке в `true` все стили `prose` получат `!important`. При установке в строку она будет использоваться как CSS-селектор для области действия.

### colorScheme

- **Тип:** `TypographyColorScheme`
- **По умолчанию:** См. ниже

Цветовая схема для типографических элементов. Каждый ключ представляет собой типографический элемент со значениями в формате `[light, dark]` => `[color, invert-color]`.

**Цветовая схема по умолчанию:**

```json
{
  "body": [700, 300],
  "headings": [900, "white"],
  "lead": [600, 400],
  "links": [900, "white"],
  "bold": [900, "white"],
  "counters": [500, 400],
  "bullets": [300, 600],
  "hr": [200, 700],
  "quotes": [900, 100],
  "quote-borders": [200, 700],
  "captions": [500, 400],
  "kbd": [900, "white"],
  "kbd-shadows": [900, "white"],
  "code": [900, "white"],
  "pre-code": [200, 300],
  "pre-bg": [800, "rgb(0 0 0 / 50%)"],
  "th-borders": [300, 600],
  "td-borders": [200, 700]
}
```

### sizeScheme

- **Тип:** `TypographySizeScheme`
- **По умолчанию:** `undefined`

Схема размеров для типографических элементов. Позволяет настраивать стили CSS различных типографических элементов для разных размеров. Похоже на `cssExtend`, но применяет гранулярные переопределения к разным размерам текста.

**Пример:**

```json
{
  "sm": {
    "h1": { "font-size": "1.5rem" },
    "p": { "font-size": "0.875rem" }
  },
  "base": {
    "h1": { "font-size": "2rem" },
    "p": { "font-size": "1rem" }
  },
  "lg": {
    "h1": { "font-size": "2.5rem" },
    "p": { "font-size": "1.125rem" }
  }
}
```

### cssVarPrefix

- **Тип:** `string`
- **По умолчанию:** `--un-prose`

Префикс для генерируемых пользовательских свойств CSS (CSS-переменных). Позволяет настроить именование CSS-переменных, используемых внутри пресета.

### compatibility

- **Тип:** `TypographyCompatibilityOptions`
- **По умолчанию:** `undefined`

См. [Опции совместимости](#compatibility-options).
:::warning
Обратите внимание, что это повлияет на некоторые функции.
:::

```ts
interface TypographyCompatibilityOptions {
  noColonWhere?: boolean
  noColonIs?: boolean
  noColonNot?: boolean
}
```

## Пример {#example}

```ts [uno.config.ts]
import { presetTypography } from '@unocss/preset-typography'
import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(), // требуется, если используется режим атрибутов
    presetWind3(), // требуется
    presetTypography({
      selectorName: 'markdown', // теперь используйте как `markdown markdown-gray`, `not-markdown`
      // cssExtend - это объект, ключом которого является CSS-селектор,
      // а значением - блок CSS-деклараций, как при написании обычного CSS.
      cssExtend: {
        'code': {
          color: '#8b5cf6',
        },
        'a:hover': {
          color: '#f43f5e',
        },
        'a:visited': {
          color: '#14b8a6',
        },
      },
    }),
  ],
})
```

## Благодарности {#acknowledgement}

- [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [Windi CSS Typography](https://github.com/windicss/windicss/tree/main/src/plugin/typography)
