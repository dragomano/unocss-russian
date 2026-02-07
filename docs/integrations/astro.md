---
title: Интеграция UnoCSS с Astro
description: Интеграция UnoCSS для Astro (@unocss/astro).
---

# Интеграция с Astro {#astro-integration}

Интеграция UnoCSS для [Astro](https://astro.build/): `@unocss/astro`. Ознакомьтесь с [примером](https://github.com/unocss/unocss/tree/main/examples/astro).

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D unocss
```

```bash [yarn]
yarn add -D unocss
```

```bash [npm]
npm install -D unocss
```

```bash [bun]
bun add -D unocss
```

:::

```ts [astro.config.ts]
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS(),
  ],
})
```

Создайте файл `uno.config.ts`:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...параметры UnoCSS
})
```

### Сброс стилей {#style-reset}

По умолчанию [сброс стилей браузера](/guide/style-reset) не внедряется. Чтобы включить его, установите пакет `@unocss/reset`:

::: code-group

```bash [pnpm]
pnpm add -D @unocss/reset
```

```bash [yarn]
yarn add -D @unocss/reset
```

```bash [npm]
npm install -D @unocss/reset
```

```bash [bun]
bun add -D @unocss/reset
```

:::

И обновите файл `astro.config.ts`:

```ts [astro.config.ts]
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true // или путь к файлу сброса
    }),
  ],
})
```

### Использование без пресетов {#usage-without-presets}

Этот плагин не поставляется с пресетами по умолчанию.

::: code-group

```bash [pnpm]
pnpm add -D @unocss/astro
```

```bash [yarn]
yarn add -D @unocss/astro
```

```bash [npm]
npm install -D @unocss/astro
```

```bash [bun]
bun add -D @unocss/astro
```

:::

```ts [astro.config.mjs]
import UnoCSS from '@unocss/astro'

export default {
  integrations: [
    UnoCSS(),
  ],
}
```

Для получения более подробной информации см. раздел [Плагин Vite](/integrations/vite).

::: info
Если вы создаете мета-фреймворк поверх UnoCSS, ознакомьтесь с [этим файлом](https://github.com/unocss/unocss/blob/main/packages-presets/unocss/src/astro.ts) для примера того, как подключить пресеты по умолчанию.
:::

## Примечания {#notes}

Для обработки компонентов с директивой [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly) их необходимо разместить в папке [`components`](https://docs.astro.build/en/core-concepts/project-structure/#srccomponents) или добавить в конфигурацию `content` UnoCSS.
