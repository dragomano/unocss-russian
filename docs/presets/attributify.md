---
title: Пресет Attributify
description: Пресет UnoCSS, который включает режим атрибутов для других пресетов.
outline: deep
---

# Пресет Attributify {#attributify-preset}

Включает [режим атрибутов](#attributify-mode) для других пресетов.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-attributify)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-attributify
```

```bash [yarn]
yarn add -D @unocss/preset-attributify
```

```bash [npm]
npm install -D @unocss/preset-attributify
```

```bash [bun]
bun add -D @unocss/preset-attributify
```

:::

```ts [uno.config.ts]
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify({ /* параметры пресета */ }),
    // ...
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { presetAttributify } from 'unocss'
```

:::

## Режим атрибутов {#attributify-mode}

Представьте, что у вас есть кнопка, использующая утилиты Tailwind CSS. Когда список становится длинным, его становится очень трудно читать и поддерживать.

```html
<button
  class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
>
  Кнопка
</button>
```

С режимом атрибутов вы можете разделить утилиты по атрибутам:

```html
<button
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Кнопка
</button>
```

Например, `text-sm text-white` может быть сгруппировано в `text="sm white"` без дублирования одного и того же префикса.

## Ссылка префикса на самого себя {#prefix-self-referencing}

Для утилит вроде `flex`, `grid`, `border`, которые имеют утилиты, совпадающие с префиксом, предоставляется специальное значение `~`.

Например:

```html
<button class="border border-red">Кнопка</button>
```

Может быть записано как:

```html
<button border="~ red">Кнопка</button>
```

## Атрибуты без значения {#valueless-attributify}

В дополнение к режиму атрибутов Windi CSS, этот пресет также поддерживает атрибуты без значения.

Например:

```html
<div class="m-2 rounded text-teal-400" />
```

теперь может быть

```html
<div m-2 rounded text-teal-400 />
```

::: info
Примечание: Если вы используете JSX, `<div foo>` может быть преобразован в `<div foo={true}>`, из-за чего сгенерированный UnoCSS CSS не совпадет с атрибутами. Чтобы решить эту проблему, вы можете попробовать использовать [`transformer-attributify-jsx`](/transformers/attributify-jsx) вместе с этим пресетом.
:::

## Конфликты свойств {#properties-conflicts}

Если имя режима атрибутов когда-либо вступит в конфликт со свойствами элементов или компонентов, вы можете добавить префикс `un-`, чтобы указать на принадлежность к режиму атрибутов UnoCSS.

Например:

```html
<a text="red">Это конфликтует со свойством ссылки `text`</a>
<!-- меняем на -->
<a un-text="red">Цвет текста красный</a>
```

Префикс по умолчанию является необязательным. Если вы хотите принудительно использовать префикс, установите:

```ts
presetAttributify({
  prefix: 'un-',
  prefixedOnly: true, // <--
})
```

Вы также можете отключить сканирование определённых атрибутов с помощью:

```ts
presetAttributify({
  ignoreAttributes: [
    'text'
    // ...
  ]
})
```

## Поддержка TypeScript (JSX/TSX) {#typescript-support-jsx-tsx}

Создайте `shims.d.ts` со следующим содержимым:

> По умолчанию тип включает общие атрибуты из `@unocss/preset-wind3`. Если вам нужны пользовательские атрибуты, обратитесь к [исходному коду типов](https://github.com/unocss/unocss/blob/main/packages-presets/preset-attributify/src/jsx.ts), чтобы реализовать свой собственный тип.

### Vue

Начиная с Volar 0.36, [проверка неизвестных атрибутов стала строгой](https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472). Чтобы отключить это, вы можете добавить в свой проект следующий файл:

```ts [html.d.ts]
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}
export {}
```

### React

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
```

### Vue 3

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
```

### SolidJS

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
```

### Svelte и SvelteKit {#svelte-sveltekit}

```ts
declare namespace svelteHTML {
  import type { AttributifyAttributes } from '@unocss/preset-attributify'

  type HTMLAttributes = AttributifyAttributes
}
```

### Astro

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes { }
  }
}
```

### Preact

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
}
```

### Marko

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
  namespace Marko {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
}
```

### Режим атрибутов с префиксом {#attributify-with-prefix}

```ts
import type { AttributifyNames } from '@unocss/preset-attributify'

type Prefix = 'uno:' // замените на свой префикс

interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}
```

## Опции {#options}

### strict

- **тип:** `boolean`
- **по умолчанию:** `false`

Генерировать CSS только для attributify или только для class.

### prefix

- **тип:** `string`
- **по умолчанию:** `'un-'`

Префикс для режима атрибутов.

### prefixedOnly

- **тип:** `boolean`
- **по умолчанию:** `false`

Совпадение только с атрибутами, имеющими префикс.

### nonValuedAttribute

- **тип:** `boolean`
- **по умолчанию:** `true`

Поддержка сопоставления атрибутов без значения.

### ignoreAttributes

- **тип:** `string[]`

Список атрибутов, которые следует игнорировать при извлечении.

### trueToNonValued

- **тип:** `boolean`
- **по умолчанию:** `false`

Атрибуты без значения также будут совпадать, если фактическое значение в DOM равно `true`. Эта опция существует для поддержки фреймворков, которые кодируют атрибуты без значения как `true`. Включение этой опции сломает правила, оканчивающиеся на `true`.

## Благодарности {#credits}

Первоначальная идея принадлежит [@Tahul](https://github.com/Tahul) и [@antfu](https://github.com/antfu). Предыдущая [реализация в Windi CSS](https://windicss.org/posts/v30.html#attributify-mode) от [@voorjaar](https://github.com/voorjaar).
