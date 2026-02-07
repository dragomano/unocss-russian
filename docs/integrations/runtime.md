---
title: UnoCSS CDN Runtime
description: CSS-in-JS рантайм для UnoCSS (@unocss/runtime).
outline: deep
---

# Runtime (среда выполнения) {#runtime}

Рантайм UnoCSS предоставляет CDN-сборку, которая запускает UnoCSS прямо в браузере. Она отслеживает изменения DOM и генерирует стили «на лету».

## Использование {#usage}

Добавьте следующую строку в ваш `index.html`:

```html [index.html]
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
```

Работу рантайма можно настроить, определив конфигурацию перед его загрузкой:

```html
<!-- определяем параметры unocss... -->
<script>
  window.__unocss = {
    rules: [
      // пользовательские правила...
    ],
    presets: [
      // пользовательские пресеты...
    ],
    // ...
  }
</script>
<!-- ... а затем загружаем рантайм -->
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
```

По умолчанию применяется [пресет Wind3](/presets/wind3).

Рантайм не включает в себя предварительные настройки (preflights). Если вам нужен сброс стилей, вы можете добавить свой собственный или воспользоваться одним из вариантов из [пакета Reset](/guide/style-reset).

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/normalize.min.css" />
<!-- or -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css" />
```

## Сборки {#builds}

Доступно несколько сборок для различных сценариев использования.

### Uno (по умолчанию) {#uno-default}

С пресетом `@unocss/preset-wind3`:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js"></script>
```

### Attributify

С пресетами `@unocss/preset-wind3` и `@unocss/preset-attributify`:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js"></script>
```

### Mini

С пресетами `@unocss/preset-mini` и `@unocss/preset-attributify`:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js"></script>
```

### Core

Если вам нужно комбинировать пресеты, вы можете загрузить только ядро (core) рантайма и назначить пресеты вручную. Доступны все [официальные пресеты](/presets/#presets) UnoCSS. Загрузите необходимый пресет перед инициализацией ядра рантайма.

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/preset-icons.global.js"></script>
<script>
  window.__unocss = {
    presets: [
      () =>
        window.__unocss_runtime.presets.presetIcons({
          scale: 1.2,
          cdn: 'https://esm.sh/',
        }),
    ],
  }
</script>
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"></script>
```

## Использование с бандлером {#bundler-usage}

```bash
npm i @unocss/runtime
```

```ts
import initUnocssRuntime from '@unocss/runtime'

initUnocssRuntime({ /* параметры */ })
```

Конфигурацию UnoCSS можно передать, используя свойство `defaults`:

```ts
import initUnocssRuntime from '@unocss/runtime'
import config from './uno.config'

initUnocssRuntime({ defaults: config })
```

Пресеты можно импортировать с `esm.sh`:

```ts
import { defineConfig } from '@unocss/runtime'
import presetIcons from 'https://esm.sh/@unocss/preset-icons/browser'
import presetWind3 from 'https://esm.sh/@unocss/preset-wind3'

export default defineConfig({
  presets: [presetWind3(), presetIcons({ cdn: 'https://esm.sh/' })],
})
```

## Предотвращение FOUC {#preventing-fouc}

Поскольку UnoCSS запускается после готовности DOM, может возникнуть «мигание нестилизованного контента» (FOUC — flash of unstyled content), из-за чего пользователь на мгновение увидит страницу без стилей.

Используйте атрибут `un-cloak` вместе с CSS-правилом, например `[un-cloak] { display: none }`, чтобы скрыть нестилизованный элемент до тех пор, пока UnoCSS не применит к нему стили.

::: code-group

```css
[un-cloak] {
  display: none;
}
```

```html
<div class="text-blue-500" un-cloak>Этот текст будет виден только синим цветом.</div>
```

:::
