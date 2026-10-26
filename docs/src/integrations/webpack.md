---
title: Плагин UnoCSS для Webpack
description: Плагин webpack для UnoCSS (@unocss/webpack).
outline: deep
---

# Плагин Webpack {#webpack-plugin}

Плагин webpack для UnoCSS: `@unocss/webpack`. В настоящее время этот плагин поддерживает только [режим `global`](https://github.com/unocss/unocss/blob/main/packages-integrations/vite/src/types.ts#L11-L21).

::: info
Этот плагин не поставляется с пресетами по умолчанию.
:::

## Предварительные требования {#prerequisite}

Для обработки CSS-файлов `@unocss/webpack` требуются `style-loader` и `css-loader`.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/webpack
```

```bash [yarn]
yarn add -D @unocss/webpack
```

```bash [npm]
npm install -D @unocss/webpack
```

```bash [bun]
bun add -D @unocss/webpack
```

:::

Начиная с версии `v0.59.0`, UnoCSS перешел на использование только ESM. Вам необходимо загружать конфигурацию через динамический импорт:

::: code-group

```ts [webpack 5]
// webpack.config.js
module.exports = function () {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    plugins: [
      UnoCSS()
    ],
    optimization: {
      realContentHash: true
    }
  }))
}
```

```js [webpack 4]
// webpack.config.js
module.exports = function () {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    plugins: [
      UnoCSS()
    ],
    css: {
      extract: {
        filename: '[name].[hash:9].css'
      },
    },
  }))
}
```

:::

Если вы используете более старую версию UnoCSS, вы можете воспользоваться следующим кодом:

::: code-group

```ts [webpack 5]
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [
    UnoCSS()
  ],
  optimization: {
    realContentHash: true
  }
}
```

```js [webpack 4]
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [
    UnoCSS()
  ],
  css: {
    extract: {
      filename: '[name].[hash:9].css'
    }
  }
}
```

:::

Создайте файл `uno.config.ts`:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...параметры UnoCSS
})
```

::: warning
Если вы используете webpack@4.x, опция `optimization.realContentHash` не поддерживается, и вам следует использовать `css.extract.filename` для настройки имени CSS-файла (в качестве примера мы используем первые 9 символов хеш-кода вместо contenthash). Обратите внимание на эту [известную проблему](https://github.com/unocss/unocss/issues/1728) с бандлом и [webpack#9520](https://github.com/webpack/webpack/issues/9520#issuecomment-749534245).
:::

## Использование {#usage}

Добавьте `uno.css` в вашу точку входа:

```ts [main.ts]
import 'uno.css'
```

## Фреймворки {#frameworks}

### Vue + Vue CLI

Если вы используете [Vue CLI](https://cli.vuejs.org/) с webpack 4/5 и UnoCSS версии `v0.59.0` и выше, вам необходимо использовать последнюю версию [сервиса Vue CLI](https://cli.vuejs.org/guide/cli-service.html) `v5.0.8` для загрузки вашей конфигурации через динамический импорт:

::: code-group

```ts [webpack 5]
// vue.config.js
const process = require('node:process')

module.exports = function () {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    configureWebpack: {
      devtool: 'inline-source-map',
      plugins: [
        UnoCSS()
      ],
      optimization: {
        realContentHash: true
      }
    },
    chainWebpack(config) {
      config.module.rule('vue').uses.delete('cache-loader')
      config.module.rule('tsx').uses.delete('cache-loader')
      config.merge({
        cache: false
      })
    },
    css: {
      extract: process.env.NODE_ENV === 'development'
        ? {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
          }
        : true
    }
  }))
}
```

```ts [webpack 4]
// vue.config.js
const process = require('node:process')

module.exports = function () {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    configureWebpack: {
      plugins: [
        UnoCSS({})
      ]
    },
    chainWebpack(config) {
      config.module.rule('vue').uses.delete('cache-loader')
      config.module.rule('tsx').uses.delete('cache-loader')
      config.merge({
        cache: false
      })
    },
    css: {
      extract: process.env.NODE_ENV === 'development'
        ? {
            filename: '[name].css',
            chunkFilename: '[name].[hash:9].css'
          }
        : true
    }
  }))
}
```

:::

Если используется более старая версия UnoCSS, вы можете воспользоваться следующим кодом:

::: code-group

```ts [webpack 5]
// vue.config.js
const process = require('node:process')
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: {
    devtool: 'inline-source-map',
    plugins: [
      UnoCSS()
    ],
    optimization: {
      realContentHash: true
    }
  },
  chainWebpack(config) {
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
    config.merge({
      cache: false
    })
  },
  css: {
    extract: process.env.NODE_ENV === 'development'
      ? {
          filename: 'css/[name].css',
          chunkFilename: 'css/[name].css'
        }
      : true
  },
}
```

```ts [webpack 4]
// vue.config.js
const process = require('node:process')
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  configureWebpack: {
    plugins: [
      UnoCSS({}),
    ]
  },
  chainWebpack(config) {
    config.module.rule('vue').uses.delete('cache-loader')
    config.module.rule('tsx').uses.delete('cache-loader')
    config.merge({
      cache: false,
    })
  },
  css: {
    extract: process.env.NODE_ENV === 'development'
      ? {
          filename: '[name].css',
          chunkFilename: '[name].[hash:9].css',
        }
      : true,
  },
}
```

:::
