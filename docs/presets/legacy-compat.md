---
title: Пресет Legacy Compat
description: Коллекции утилит для обратной совместимости.
outline: deep
---

# Пресет Legacy Compat {#legacy-compat-preset}

Коллекции утилит для обратной совместимости.

Этот пресет не содержит никаких правил, он применяет постобработку (postprocess) к сгенерированному CSS из других пресетов.

По умолчанию ни одна из опций не включена, вам нужно явно включить каждую из них.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-legacy-compat)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-legacy-compat
```

```bash [yarn]
yarn add -D @unocss/preset-legacy-compat
```

```bash [npm]
npm install -D @unocss/preset-legacy-compat
```

```bash [bun]
bun add -D @unocss/preset-legacy-compat
```

:::

```ts [uno.config.ts]
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    // ...другие пресеты
    presetLegacyCompat({
      // параметры
      commaStyleColorFunction: true,
      legacyColorSpace: true
    }),
  ],
})
```

## Опции {#options}

### `commaStyleColorFunction`

- **Тип:** `boolean`
- **По умолчанию:** `false`

Конвертирует цветовые функции (`rgb()` и `hsl()`) из разделённых пробелами в разделённые запятыми, для лучшей совместимости с устаревшими браузерами. Возвращает старое поведение до версии UnoCSS v0.57.0, которое было изменено на разделение пробелами в [#3221](https://github.com/unocss/unocss/pull/3221) для соответствия Tailwind CSS.

Примеры:

- `rgb(255 0 0)` -> `rgb(255, 0, 0)`
- `rgb(255 0 0 / 50%)` -> `rgba(255, 0, 0, 50%)`
- `hsl(0 100% 50% / 50%)` -> `hsla(0, 100%, 50%, 50%)`

### `legacyColorSpace`

- **Тип:** `boolean`
- **По умолчанию:** `false`

Удаляет ключевые слова цветового пространства, такие как `in oklch` и `in oklab`, из сгенерированных стилей. Это полезно для обеспечения совместимости с устаревшими браузерами, которые не поддерживают современные цветовые пространства.

Чтобы включить эту функцию, установите опцию `legacyColorSpace` в `true`.
