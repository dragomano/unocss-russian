---
title: Трансформер компиляции классов
description: Компилирует группу классов в один класс (@unocss/transformer-compile-class)
outline: deep
---

# Трансформер компиляции классов {#compile-class-transformer}

<!-- @unocss-ignore -->

Компилирует группу классов в один класс. Вдохновлено [режимом компиляции](https://windicss.org/posts/modes.html#compilation-mode) Windi CSS и [задачей #948](https://github.com/unocss/unocss/issues/948) от [@UltraCakeBakery](https://github.com/UltraCakeBakery).

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/transformer-compile-class
```

```bash [yarn]
yarn add -D @unocss/transformer-compile-class
```

```bash [npm]
npm install -D @unocss/transformer-compile-class
```

```bash [bun]
bun add -D @unocss/transformer-compile-class
```

:::

```ts [uno.config.ts]
import transformerCompileClass from '@unocss/transformer-compile-class'
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass(),
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { transformerCompileClass } from 'unocss'
```

:::

## Использование {#usage}

Добавьте `:uno:` в начало строк классов, чтобы пометить их для компиляции.

Например:

```html
<div class=":uno: text-center sm:text-left">
  <div class=":uno: text-sm font-bold hover:text-red" />
</div>
```

Будет скомпилировано в:

```html
<div class="uno-qlmcrp">
  <div class="uno-0qw2gr" />
</div>
```

```css
.uno-qlmcrp {
  text-align: center;
}
.uno-0qw2gr {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}
.uno-0qw2gr:hover {
  --un-text-opacity: 1;
  color: rgb(248 113 113 / var(--un-text-opacity));
}
@media (min-width: 640px) {
  .uno-qlmcrp {
    text-align: left;
  }
}
```

## Опции {#options}

Вы можете настроить строку-триггер и префикс для компиляции классов с помощью опций. Подробности см. в [типах](https://github.com/unocss/unocss/blob/main/packages-presets/transformer-compile-class/src/index.ts#L4).

## Инструменты {#tooling}

### ESLint

Существует правило eslint для принудительного применения трансформера компиляции классов во всем проекте: [@unocss/enforce-class-compile](https://unocss.dev/integrations/eslint#unocss-enforce-class-compile)

**Использование:**

```json
{
  "plugins": ["@unocss"],
  "rules": {
    "@unocss/enforce-class-compile": "warn"
  }
}
```

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
