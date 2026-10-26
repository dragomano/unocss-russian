# Экстракторы {#extractors}

Экстракторы используются для извлечения использований утилит из вашего исходного кода.

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    // ваши экстракторы
  ],
})
```

По умолчанию [extractorSplit](https://github.com/unocss/unocss/blob/main/packages-engine/core/src/extractors/split.ts) будет применяться всегда; он разбивает исходный код на токены и передает их напрямую в движок.

Чтобы переопределить экстракторы по умолчанию, вы можете использовать опцию `extractorDefault`.

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    // ваши экстракторы
  ],
  // отключаем стандартный экстрактор
  extractorDefault: false,
  // заменяем стандартный экстрактор собственным
  extractorDefault: myExtractor,
})
```

Например, посмотрите реализацию [экстрактора pug](https://github.com/unocss/unocss/blob/main/packages-presets/extractor-pug/src/index.ts) или [экстрактора атрибутов](https://github.com/unocss/unocss/blob/main/packages-presets/preset-attributify/src/extractor.ts).
