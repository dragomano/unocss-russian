---
title: Модуль Nuxt для UnoCSS
description: Модуль Nuxt для UnoCSS.
---

# Модуль Nuxt {nuxt-module}

Модуль Nuxt для UnoCSS.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/nuxt
```

```bash [yarn]
yarn add -D unocss @unocss/nuxt
```

```bash [npm]
npm install -D unocss @unocss/nuxt
```

```bash [bun]
bun add -D unocss @unocss/nuxt
```

:::

Добавьте `@unocss/nuxt` в ваш файл конфигурации Nuxt:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
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

Точка входа `uno.css` будет автоматически внедрена модулем.

## Статус поддержки {#support-status}

|               | Nuxt 2 | Nuxt Bridge | Nuxt 3 |
| ------------- | :----- | :---------- | :----- |
| Webpack Dev   | ✅     | ✅          | 🚧     |
| Webpack Build | ✅     | ✅          | ✅     |
| Vite Dev      | -      | ✅          | ✅     |
| Vite Build    | -      | ✅          | ✅     |

## Конфигурация {#configuration}

Мы рекомендуем использовать отдельный файл `uno.config.ts` для настройки. Подробнее см. в разделе [Файл конфигурации](/guide/config-file).

Вы можете включить опцию `nuxtLayers`, чтобы Nuxt автоматически объединял файлы `uno.config` из каждого слоя Nuxt:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // ...
  unocss: {
    nuxtLayers: true,
  },
})
```

затем вы можете реэкспортировать сгенерированную конфигурацию в корневом файле конфигурации:

```ts [uno.config.ts]
import config from './.nuxt/uno.config.mjs'

export default config
```

или изменить/расширить её:

```ts
import { mergeConfigs } from '@unocss/core'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  // ваши переопределения
}])
```

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
