---
title: Процессор Lightning CSS
description: Обрабатывает сгенерированный UnoCSS с помощью Lightning CSS в Node.js (@unocss/processor-lightningcss).
outline: deep
---

# Процессор Lightning CSS {#lightning-css-processor}

`@unocss/processor-lightningcss` обрабатывает каждый сгенерированный слой UnoCSS с помощью [Lightning CSS](https://lightningcss.dev/). Он может минифицировать CSS, компилировать современный синтаксис CSS и выполнять преобразования для обеспечения совместимости с целевыми браузерами.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/processor-lightningcss)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/processor-lightningcss
```

```bash [yarn]
yarn add -D @unocss/processor-lightningcss
```

```bash [npm]
npm install -D @unocss/processor-lightningcss
```

```bash [bun]
bun add -D @unocss/processor-lightningcss
```

:::

## Использование {#usage}

Добавьте процессор в массив [`processors`](/config/processors) в конфигурации UnoCSS:

```ts [uno.config.ts]
import processorLightningCSS from '@unocss/processor-lightningcss'
import { defineConfig } from 'unocss'

export default defineConfig({
  processors: [
    processorLightningCSS({
      targets: {
        chrome: 111 << 16,
        safari: 15 << 16,
      },
    }),
  ],
})
```

Процессор запускается после того, как UnoCSS генерирует каждый непустой слой. Его результат возвращается через `getLayer()`, `getLayers()` и сгенерированный результат `css`.

## Опции {#options}

Процессор принимает [опции `TransformOptions`](https://github.com/parcel-bundler/lightningcss/blob/master/node/index.d.ts) Lightning CSS, за исключением `code` и `filename`. UnoCSS предоставляет эти значения для каждого сгенерированного слоя.

Текущее имя слоя используется в качестве имени файла. Например, слой `utilities` передаётся в Lightning CSS как `utilities.css`, что упрощает определение источника ошибок преобразования.

### Минификация {#minification}

По умолчанию минификация включена, если `envMode` имеет значение `build`, и отключена, если он имеет значение `dev`. Явно задайте `minify`, чтобы изменить это поведение:

```ts [uno.config.ts]
processorLightningCSS({
  minify: true,
})
```

### Целевые браузеры {#browser-targets}

Используйте `targets`, чтобы управлять преобразованиями для обеспечения совместимости, которые применяет Lightning CSS:

```ts [uno.config.ts]
processorLightningCSS({
  targets: {
    chrome: 111 << 16,
    firefox: 113 << 16,
    safari: 15 << 16,
  },
})
```

## Только для Node.js {#node-js-only}

Этот процессор использует нативную сборку Lightning CSS для Node.js и предназначен для использования во время сборки. При вызове вне Node.js UnoCSS один раз выводит предупреждение и возвращает исходный CSS без изменений.

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
