---
title: Core
description: Основной движок UnoCSS без каких-либо пресетов. Его можно использовать в качестве движка для вашего собственного фреймворка атомарного CSS.
---

# Core {#core}

Основной движок UnoCSS без каких-либо пресетов: `@unocss/core`. Его можно использовать в качестве движка для вашего собственного фреймворка атомарного CSS.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/core
```

```bash [yarn]
yarn add -D @unocss/core
```

```bash [npm]
npm install -D @unocss/core
```

```bash [bun]
bun add -D @unocss/core
```

:::

## Использование {#usage}

```ts
import { createGenerator } from '@unocss/core'

const generator = await createGenerator(
  { /* пользовательские параметры */ },
  { /* стандартные параметры */ }
)

const { css } = await generator.generate(code)
```

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
