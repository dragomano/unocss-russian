---
title: Правила
description: Писать пользовательские правила для UnoCSS очень просто.
---

# Правила {#rules}

Правила определяют служебные классы и результирующий CSS. UnoCSS имеет множество встроенных правил, но также позволяет легко добавлять пользовательские правила.

## Статические правила {#static-rules}

С этим примером:

```ts
rules: [
  ['m-1', { margin: '0.25rem' }],
]
```

Следующий CSS будет сгенерирован каждый раз, когда `m-1` обнаруживается в кодовой базе пользователя:

```css
.m-1 {
  margin: 0.25rem;
}
```

> **Примечание**: Синтаксис тела соответствует синтаксису свойств CSS, например, `font-weight` вместо `fontWeight`. Если в имени свойства есть дефис `-`, оно должно быть заключено в кавычки.
>
> ```ts
> rules: [
>   ['font-bold', { 'font-weight': 700 }],
> ]
> ```

## Динамические правила {dynamic-rules}

Чтобы сделать правило более умным, измените сопоставитель (matcher) на `RegExp`, а тело — на функцию:

```ts
rules: [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
  // Вы можете получить богатую контекстную информацию из второго аргумента, например `theme`, `symbols` и т. д.
  [/^p-(\d+)$/, (match, ctx) => ({ padding: `${match[1] / 4}rem` })],
]
```

Первый аргумент функции тела — это результат совпадения `RegExp`, который можно деструктурировать для получения совпавших групп.

Например, при следующем использовании:

```html
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
    Моя кнопка
  </button>
</div>
```

будет сгенерирован соответствующий CSS:

<!-- eslint-skip -->

```css
.m-100 { margin: 25rem; }
.m-3 { margin: 0.75rem; }
.p-5 { padding: 1.25rem; }
```

Поздравляем! Теперь у вас есть собственные мощные утилиты атомарного CSS. Наслаждайтесь!

## Резервные правила CSS {#css-rules-fallback}

В случаях, когда вы хотите использовать резервные правила CSS, чтобы задействовать новые возможности CSS, но при этом сохранить поддержку старых браузеров, вы можете опционально вернуть двумерный массив в качестве CSS-представления для правил с одинаковыми ключами. Например:

```ts
rules: [
  [/^h-(\d+)dvh$/, ([_, d]) => {
    return [
      ['height', `${d}vh`],
      ['height', `${d}dvh`],
    ]
  }],
]
```

Что заставит `h-100dvh` сгенерировать:

<!-- eslint-skip -->

```css
.h-100dvh { height: 100vh; height: 100dvh; }
```

## Специальные символы {#special-symbols}

Начиная с версии v0.61, UnoCSS поддерживает специальные символы для определения дополнительной метаинформации для вашего сгенерированного CSS. Вы можете получить доступ к символам из объекта `symbols` из `@unocss/core` или из второго аргумента функции динамического сопоставления правил.

Например:

::: code-group

```ts [Статические правила]
import { symbols } from '@unocss/core'

rules: [
  ['grid', {
    [symbols.parent]: '@supports (display: grid)',
    display: 'grid',
  }],
]
```

```ts [Динамические правила]
rules: [
  [/^grid$/, ([, d], { symbols }) => {
    return {
      [symbols.parent]: '@supports (display: grid)',
      display: 'grid',
    }
  }],
]
```

:::

Сгенерирует:

```css
@supports (display: grid) {
  .grid {
    display: grid;
  }
}
```

:::tip
Если вы точно знаете, как генерируется правило, мы рекомендуем использовать **статические правила** для повышения производительности UnoCSS.
:::

### Доступные символы {#available-symbols}

| Символы                    | Описание                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `symbols.parent`           | Родительская обёртка сгенерированного правила CSS (например, `@supports`, `@media` и т. д.)                |
| `symbols.selector`         | Функция для изменения селектора сгенерированного правила CSS (см. пример ниже)                             |
| `symbols.layer`            | Устанавливает слой UnoCSS для сгенерированного правила CSS (может быть строкой, функцией или regexp-матчем)|
| `symbols.variants`         | Массив обработчиков вариантов, применяемых к текущему CSS-объекту                                          |
| `symbols.shortcutsNoMerge` | Булево значение для отключения объединения текущего правила в шорткатах                                    |
| `symbols.noMerge`          | Булево значение для отключения объединения текущего правила                                                |
| `symbols.sort`             | Число для перезаписи порядка сортировки текущего CSS-объекту                                               |
| `symbols.body`             | Полный контроль над телом сгенерированного правила CSS (см. [#4889](https://github.com/unocss/unocss/pull/4889)) |

## Правила с множественными селекторами {#multi-selector-rules}

Начиная с версии v0.61, UnoCSS поддерживает множественные селекторы через [функции-генераторы JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). И генерирует _несколько_ правил CSS из _одного_ правила.

Например:

::: code-group

```ts [Статические правила]
rules: [
  ['button-red', [
    { background: 'red' },
    {
      [symbols.selector]: selector => `${selector}:hover`,
      // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
      background: `color-mix(in srgb, red 90%, black)`
    },
  ]],
]
```

```ts [Динамические правила]
rules: [
  [/^button-(.*)$/, function* ([, color], { symbols }) {
    yield {
      background: color
    }
    yield {
      [symbols.selector]: selector => `${selector}:hover`,
      // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
      background: `color-mix(in srgb, ${color} 90%, black)`
    }
  }],
]
```

:::

Сгенерирует несколько правил CSS:

```css
.button-red {
  background: red;
}
.button-red:hover {
  background: color-mix(in srgb, red 90%, black);
}
```

## Полностью управляемые правила {#fully-controlled-rules}

::: tip
Это продвинутая функция, в большинстве ситуаций она не понадобится.
:::

Когда вам действительно нужны сложные правила, которые не покрываются комбинацией [динамических правил](#dynamic-rules) и [вариантов](/config/variants), UnoCSS также предоставляет способ, дающий вам полный контроль над генерацией CSS.

Это позволяет вам вернуть строку из функции тела динамического правила, которая будет **напрямую** передана в сгенерированный CSS (это также означает, что вам придется позаботиться о таких вещах, как экранирование CSS, применение вариантов, конструирование CSS и так далее).

```ts [uno.config.ts]
import { defineConfig, toEscapedSelector as e } from 'unocss'

export default defineConfig({
  rules: [
    [/^custom-(.+)$/, ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
      // отбрасываем неподходящие правила
      if (name.includes('something'))
        return

      // при желании можно отключить варианты для этого правила
      if (variantHandlers.length)
        return
      const selector = e(rawSelector)
      // возвращаем строку вместо объекта
      return `
${selector} {
  font-size: ${theme.fontSize.sm};
}
/* у вас может быть несколько правил */
${selector}::after {
  content: 'after';
}
.foo > ${selector} {
  color: red;
}
/* или медиа-запросы */
@media (min-width: ${theme.breakpoints.sm}) {
  ${selector} {
    font-size: ${theme.fontSize.sm};
  }
}
`
    }],
  ],
})
```

::: warning
Вышеприведённый метод позволяет полностью контролировать сгенерированный CSS, но он не может быть расширен через `variants`, теряя гибкость, предоставляемую вариантами.

Например: `hover:custom-xxx` -> Вариант `hover` работать не будет.
:::

Поэтому, если вы хотите полностью настроить вывод, но при этом наслаждаться удобством вариантов, вы можете рассмотреть использование `symbols.body` для достижения этой цели.

::: code-group

```ts [Статические правила]
import { symbols } from '@unocss/core'

rules: [
  ['custom-red', {
    // symbols.body не требует оборачивания стилей в `{}`
    [symbols.body]: `
      font-size: 1rem;
      &::after {
        content: 'after';
      }
      & > .bar {
        color: red;
      }
    `,
    [symbols.selector]: selector => `:is(${selector})`,
  }]
]
```

```ts [Динамические правила]
rules: [
  [/^custom-(.+)$/, ([_, c], { symbols }) => {
    return {
      [symbols.body]: `
        font-size: 1rem;
        &::after {
          content: 'after';
        }
        & > .bar {
          color: ${c};
        }
      `,
      [symbols.selector]: selector => `:is(${selector})`,
    }
  }]
]
```

:::

Сгенерирует полноценные правила CSS из `hover:custom-red`:

```css
:is(.hover\:custom-red):hover {
  font-size: 1rem;
  &::after {
    content: 'after';
  }
  & > .bar {
    color: red;
  }
}
```

## Порядок (Ordering) {#ordering}

UnoCSS соблюдает порядок правил, который вы определили, в сгенерированном CSS. Более поздние правила имеют более высокий приоритет.

При использовании динамических правил они могут совпадать с несколькими токенами. По умолчанию вывод тех токенов, которые совпали в рамках одного динамического правила, будет отсортирован по алфавиту внутри группы.

## Объединение правил {#rules-merging}

По умолчанию UnoCSS объединяет CSS-правила с одинаковым телом для минимизации размера CSS.

Например, `<div class="m-2 hover:m2">` сгенерирует:

```css
.hover\:m2:hover,
.m-2 {
  margin: 0.5rem;
}
```

Вместо двух отдельных правил:

```css
.hover\:m2:hover {
  margin: 0.5rem;
}
.m-2 {
  margin: 0.5rem;
}
```
