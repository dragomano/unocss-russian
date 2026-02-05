---
title: Пресеты
description: Пресеты — это сердце UnoCSS. Они позволяют создать собственный фреймворк за считанные минуты.
outline: deep
---

# Пресеты {#presets}

Пресеты — это сердце UnoCSS. Они позволяют создать собственный фреймворк за считанные минуты.

### Использование пресетов {#using-presets}

Чтобы добавить пресеты в ваш проект:

```ts twoslash [uno.config.ts]
import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* параметры пресета */}),
    presetWind3(),
    // ...пользовательские пресеты
  ],
})
```

Если указана опция `presets`, пресет по умолчанию будет проигнорирован.

Чтобы отключить пресет по умолчанию, можно задать для `presets` пустой массив:

```ts twoslash [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [], // отключаем пресет по умолчанию
  rules: [
    // пользовательские правила
  ],
})
```

Ознакомьтесь с [официальными пресетами](/presets/) и [пресетами от сообщества](/presets/community), чтобы узнать больше.

### Создание пресетов {#creating-presets}

Чтобы узнать, как создать свой собственный пресет, см. раздел [Конфигурация: пресеты](/config/presets).
