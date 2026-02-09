# Пресеты {#presets}

Пресеты — это частичные конфигурации, которые будут объединены с основной конфигурацией.

При создании пресета мы обычно экспортируем функцию-конструктор, которой можно передать специфические для этого пресета опции. Например:

```ts [my-preset.ts]
import { definePreset, Preset } from 'unocss'

export default definePreset((options?: MyPresetOptions) => {
  return {
    name: 'my-preset',
    rules: [
      // ...
    ],
    variants: [
      // ...
    ],
    // поддерживается большинство параметров, доступных в корневой конфигурации
  }
})
```

Затем пользователь может использовать это следующим образом:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'
import myPreset from './my-preset'

export default defineConfig({
  presets: [
    myPreset({ /* параметры пресета */ }),
  ],
})
```

Вы можете ознакомиться с [официальными пресетами](/presets/) и [пресетами сообщества](/presets/community) для поиска дополнительных примеров.
