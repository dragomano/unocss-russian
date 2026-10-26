---
title: Пресет Tagify
description: Режим тегов для UnoCSS (@unocss/preset-tagify).
outline: deep
---

# Пресет Tagify {#tagify-preset}

Включает [режим тегов](#tagify-mode) для других пресетов.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-tagify)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-tagify
```

```bash [yarn]
yarn add -D @unocss/preset-tagify
```

```bash [npm]
npm install -D @unocss/preset-tagify
```

```bash [bun]
bun add -D @unocss/preset-tagify
```

:::

```ts [uno.config.ts]
import presetTagify from '@unocss/preset-tagify'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetTagify({ /* параметры */ }),
    // ...другие пресеты
  ],
})
```

## Режим тегов {#tagify-mode}

Этот пресет может быть полезен, когда вам нужно применить к элементу только одно правило UnoCSS.

```html
<span class="text-red"> красный текст </span>
<div class="flex">флексбокс</div>
Я сегодня чувствую <span class="i-line-md-emoji-grin"></span>!
```

С режимом тегов вы можете встраивать CSS-стили в HTML-теги:

```html
<text-red> красный текст </text-red>
<flex> флексбокс </flex>
Я сегодня чувствую <i-line-md-emoji-grin />!
```

HTML выше работает именно так, как вы ожидаете.

## С префиксом {#with-prefix}

```js
presetTagify({
  prefix: 'un-'
})
```

```html
<!-- это совпадет -->
<un-flex> </un-flex>
<!-- это не совпадет -->
<flex> </flex>
```

## Дополнительные свойства {#extra-properties}

Вы можете добавлять дополнительные свойства к совпавшим правилам:

```js
presetTagify({
  // добавляет display: inline-block к совпавшим иконкам
  extraProperties: matched => matched.startsWith('i-')
    ? { display: 'inline-block' }
    : { }
})
```

```js
presetTagify({
  // extraProperties также может быть простым объектом
  extraProperties: { display: 'block' }
})
```

## Опции {#options}

### prefix

- **Тип:** `string`

Префикс, который будет использоваться для варианта tagify.

### excludedTags

- **Тип:** `(string | RegExp)[]`
- **По умолчанию:** `['b', /^h\d+$/, 'table']`

Теги, исключённые из обработки.

### extraProperties

- **Тип:** `Record<string, string> | ((matched: string) => Partial<Record<string, string>>)`

Дополнительные свойства CSS, применяемые к совпавшим правилам.

### defaultExtractor

- **Тип:** `boolean`
- **По умолчанию:** `true`

Включить экстрактор по умолчанию.
