---
title: Экстрактор произвольных вариантов
---

# Экстрактор произвольных вариантов {#arbitrary-variants-extractor}

Более сложный экстрактор для поддержки произвольных вариантов утилит.

```html
<div class="[&>*]:m-1 [&[open]]:p-2"></div>
```

`[&>*]:m-1` и `[&[open]]:p-2` будут распознаны как варианты.

Этот экстрактор включен в [`@unocss/preset-mini`](/presets/mini) как экстрактор по умолчанию. Обычно вам не нужно устанавливать этот пакет вручную.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/extractor-arbitrary-variants
```

```bash [yarn]
yarn add -D @unocss/extractor-arbitrary-variants
```

```bash [npm]
npm install -D @unocss/extractor-arbitrary-variants
```

```bash [bun]
bun add -D @unocss/extractor-arbitrary-variants
```

:::

```ts [uno.config.ts]
import extractorArbitrary from '@unocss/extractor-arbitrary-variants'
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    extractorArbitrary(),
  ],
})
```
