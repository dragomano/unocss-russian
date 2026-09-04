---
title: Плагин UnoCSS для Rollup и Rolldown
description: Используйте UnoCSS с Rollup или Rolldown.
outline: deep
---

# Плагин для Rollup и Rolldown {#rollup-and-rolldown-plugin}

Используйте UnoCSS с Rollup или Rolldown без Vite. Плагин поддерживает режим `global` и создаёт CSS-ресурс при импорте `uno.css` из входного модуля.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D unocss rollup
```

```bash [yarn]
yarn add -D unocss rollup
```

```bash [npm]
npm install -D unocss rollup
```

```bash [bun]
bun add -D unocss rollup
```

:::

Замените `rollup` на `rolldown` при использовании Rolldown.

## Rollup

```ts [rollup.config.ts]
import UnoCSS from 'unocss/rollup'

export default {
  input: 'src/main.ts',
  plugins: [
    UnoCSS(),
  ],
}
```

## Rolldown

```ts [rolldown.config.ts]
import UnoCSS from 'unocss/rolldown'

export default {
  input: 'src/main.ts',
  plugins: [
    UnoCSS(),
  ],
}
```

Импортируйте `uno.css` из входного модуля:

```ts [src/main.ts]
import 'uno.css'
```

Плагин создаёт сгенерированный CSS как выходной ресурс. Подключите этот ресурс в своём приложении с помощью пайплайна развёртывания или HTML.

## Конфигурация {#configuration}

Создайте файл `uno.config.ts`:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...параметры UnoCSS
})
```

Вы также можете передать конфигурацию непосредственно в плагин:

```ts
import UnoCSS from 'unocss/rollup'

UnoCSS({
  // ...параметры UnoCSS
})
```
