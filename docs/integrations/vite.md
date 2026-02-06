---
title: Плагин UnoCSS для Vite
description: Плагин Vite для UnoCSS (@unocss/vite).
outline: deep
---

<script setup lang="ts">
import { examples } from '../.vitepress/content'

const playgrounds = examples.reduce((acc, cur) => {
  acc[cur.name] = cur
  return acc
}, {})
</script>

# Плагин Vite {#vite-plugin}

Плагин Vite поставляется вместе с пакетом `unocss`.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D unocss
```

```bash [yarn]
yarn add -D unocss
```

```bash [npm]
npm install -D unocss
```

```bash [bun]
bun add -D unocss
```

:::

Установите плагин:

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
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

Добавьте `virtual:uno.css` в вашу точку входа:

```ts [main.ts]
import 'virtual:uno.css'
```

## Режимы {#modes}

Плагин Vite поставляется с набором режимов, которые обеспечивают различное поведение.

### `global` (по умолчанию) {#global-default}

Это режим плагина по умолчанию: в этом режиме вам нужно добавить импорт `uno.css` в вашу точку входа.

Этот режим включает набор плагинов Vite для `build` (сборки) и `dev` (разработки) с поддержкой `HMR`.

Сгенерированный `css` будет глобальной таблицей стилей, внедрённой в `index.html`.

### `vue-scoped`

Этот режим будет внедрять сгенерированный CSS в `<style scoped>` однофайловых компонентов Vue для изоляции.

### `svelte-scoped`

Режим `svelte-scoped` был перенесен в собственный пакет, см. [@unocss/svelte-scoped/vite](/integrations/svelte-scoped).

### `shadow-dom`

Поскольку `веб-компоненты` используют `Shadow DOM`, нет возможности стилизовать контент напрямую из глобальной таблицы стилей (если только вы не используете `пользовательские свойства CSS`, которые проникают в `Shadow DOM`). Вам необходимо встроить сгенерированный плагином CSS в стиль `Shadow DOM`.

Чтобы встроить сгенерированный CSS, вам нужно всего лишь установить режим плагина в `shadow-dom` и добавить магический плейсхолдер `@unocss-placeholder` в блок стилей CSS каждого веб-компонента. Если вы определяете свои веб-компоненты в Vue SFC и хотите определить пользовательские стили наряду с UnoCSS, вы можете обернуть плейсхолдер в комментарий CSS, чтобы избежать синтаксических ошибок в вашей IDE.

### `per-module` (экспериментальный) {#per-module-experimental}

В этом режиме будет генерироваться таблица стилей CSS для каждого модуля; может быть изолированной (scoped).

### `dist-chunk` (экспериментальный) {#dist-chunk-experimental}

В этом режиме будет генерироваться таблица стилей CSS для каждого чанка кода при сборке, что отлично подходит для MPA.

## Редактирование классов в DevTools {#edit-classes-in-devtools}

Из-за ограничения работы «по запросу», DevTools не знает о тех классах, которые вы ещё не использовали в своем исходном коде. Поэтому, если вы хотите протестировать работу, изменяя классы непосредственно в DevTools, просто добавьте следующие строки в вашу точку входа.

```ts
import 'uno.css'
import 'virtual:unocss-devtools'
```

::: warning
Пожалуйста, используйте это с осторожностью: «под капотом» мы используем [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) для отслеживания изменений классов. Это означает, что будут обнаружены и включены в таблицу стилей не только ваши ручные изменения, но и изменения, сделанные вашими скриптами. Это может вызвать несоответствие между режимом разработки и продакшен-сборкой, если вы добавляете динамические классы на основе какой-либо логики в скриптах. Мы рекомендуем добавить ваши динамические части в [белый список](https://github.com/unocss/unocss/issues/511) или, по возможности, настроить тесты UI-регрессии для вашей продакшен-сборки.
:::

## Фреймворки {#frameworks}

Некоторые UI/App фреймворки имеют свои нюансы, которые необходимо учесть для корректной работы. Если вы используете один из следующих фреймворков, просто примените предложенные рекомендации.

### VanillaJS / TypeScript

При использовании VanillaJS или TypeScript вам необходимо добавить расширения файлов `js` и `ts`, чтобы позволить UnoCSS считывать и парсить их содержимое, так как по умолчанию файлы `js` и `ts` исключены. См. раздел [Извлечение из конвейера инструментов сборки](/guide/extracting#extracting-from-build-tools-pipeline).

### React

Если вы используете `@vitejs/plugin-react`:

```ts [vite.config.ts]
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    React(),
    UnoCSS(),
  ],
}
```

Если вы используете `@unocss/preset-attributify`, вам следует удалить `tsc` из скрипта `build`.

Если вы используете `babel-plugin-react-compiler` или `@vitejs/plugin-react` вместе с `@unocss/preset-attributify`, вам необходимо добавить плагин перед `@vitejs/plugin-react`.

```ts [vite.config.ts]
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS(),
    React(),
  ],
}
```

Вы можете найти пример проекта на `React` в директории [examples/vite-react](https://github.com/unocss/unocss/tree/main/examples/vite-react), использующий оба плагина. Ознакомьтесь со скриптами в `package.json` и файлом конфигурации Vite.

<ContentExample :item="playgrounds['vite-react']"  class="Link" integrations />

### Preact

Если вы используете `@preact/preset-vite`:

```ts [vite.config.ts]
import Preact from '@preact/preset-vite'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS(),
    Preact(),
  ],
}
```

или если вы используете `@prefresh/vite`:

```ts [vite.config.ts]
import Prefresh from '@prefresh/vite'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS(),
    Prefresh(),
  ],
}
```

Если вы используете `@unocss/preset-attributify`, вам следует удалить `tsc` из скрипта `build`.

Вы можете найти пример проекта на `Preact` в директории [examples/vite-preact](https://github.com/unocss/unocss/tree/main/examples/vite-preact), использующий оба плагина. Ознакомьтесь со скриптами в `package.json` и файлом конфигурации Vite.

<ContentExample :item="playgrounds['vite-preact']"  class="Link" integrations />

### Svelte

Вам необходимо добавить плагин перед `@sveltejs/vite-plugin-svelte`.

Для поддержки `class:foo` и `class:foo={bar}` добавьте плагин и настройте `extractorSvelte` в опции `extractors`.

Вы можете использовать простые правила с `class:`, например `class:bg-red-500={foo}`, или использовать шорткаты для включения нескольких правил. См. `src/App.svelte` в примере проекта по ссылке ниже.

```ts [vite.config.ts]
import { svelte } from '@sveltejs/vite-plugin-svelte'
import extractorSvelte from '@unocss/extractor-svelte'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      extractors: [
        extractorSvelte(),
      ],
      /* другие параметры */
    }),
    svelte(),
  ],
}
```

<ContentExample :item="playgrounds['vite-svelte']"  class="Link" integrations />

### Sveltekit

Для поддержки `class:foo` и `class:foo={bar}` добавьте плагин и настройте `extractorSvelte` в опции `extractors`.

Вы можете использовать простые правила с `class:`, например `class:bg-red-500={foo}`, или использовать шорткаты для включения нескольких правил. См. `src/routes/+layout.svelte` в примере проекта по ссылке ниже.

```ts [vite.config.ts]
import { sveltekit } from '@sveltejs/kit/vite'
import extractorSvelte from '@unocss/extractor-svelte'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      extractors: [
        extractorSvelte(),
      ],
      /* другие параметры */
    }),
    sveltekit(),
  ],
})
```

<ContentExample :item="playgrounds['sveltekit']"  class="Link mb-4" integrations />

<ContentExample :item="playgrounds['sveltekit-preprocess']"  class="Link mb-4" integrations />

<ContentExample :item="playgrounds['sveltekit-scoped']"  class="Link" integrations />

### Веб-компоненты {#web-components}

Для работы с веб-компонентами вам необходимо включить режим `shadow-dom` в плагине.

Не забудьте удалить импорт `uno.css`, так как режим `shadow-dom` не предоставляет его, и приложение не будет работать.

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      /* другие параметры */
    }),
  ],
}
```

В каждый `веб-компонент` просто добавьте `@unocss-placeholder` в его блок стилей CSS:

```ts
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {...}
@unocss-placeholder
</style>
<div class="m-1em">
...
</div>
`
```

Если вы используете [Lit](https://lit.dev/):

```ts
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {...}
    @unocss-placeholder
  `
  // ...
}
```

Вы можете найти пример проекта с `веб-компонентами` в директории [examples/vite-lit](https://github.com/unocss/unocss/tree/main/examples/vite-lit).

#### Встроенная поддержка `::part` {#part-built-in-support}

Вы можете использовать `::part`, так как плагин поддерживает его через шорткаты и правило `part-[<part-name>]:<rule|shortcut>` из `preset-mini`. Например, можно использовать простые правила, такие как `part-[<part-name>]:bg-green-500`, или какой-либо шорткат: см. `src/my-element.ts` в примере проекта по ссылке выше.

Правило `part-[<part-name>]:<rule|shortcut>` будет работать только с этим плагином при использовании режима `shadow-dom`.

Плагин использует `nth-of-type`, чтобы избежать конфликтов между несколькими частями внутри одного веб-компонента, а также между одинаковыми частями в разных веб-компонентах. Вам не нужно беспокоиться об этом, плагин возьмет всё на себя.

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      shortcuts: [
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' },
      ],
      /* другие параметры */
    }),
  ],
}
```

Затем в своих веб-компонентах:

```ts
// my-container-wc.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<my-wc-with-parts class="part-[cool-part]:cool-blue part-[another-cool-part]:cool-green">...</my-wc-with-parts>
`
```

```ts
// my-wc-with-parts.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<div>
  <div part="cool-part">...</div>
  <div part="another-cool-part">...</div>
</div>
`
```

<ContentExample :item="playgrounds['vite-lit']"  class="Link" integrations />

### Solid

Вам необходимо добавить плагин `vite-plugin-solid` после плагина UnoCSS.

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'
import solidPlugin from 'vite-plugin-solid'

export default {
  plugins: [
    UnoCSS({
      /* параметры */
    }),
    solidPlugin(),
  ],
}
```

<ContentExample :item="playgrounds['vite-solid']"  class="Link" integrations />

### Elm

Вам необходимо добавить плагин `vite-plugin-elm` перед плагином UnoCSS.

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Elm from 'vite-plugin-elm'

export default defineConfig({
  plugins: [
    Elm(),
    UnoCSS(),
  ],
})
```

<ContentExample :item="playgrounds['vite-elm']"  class="Link" integrations />

### Marko

Вам необходимо добавить `@marko/vite` или `@marko/run/vite` перед плагином UnoCSS.

```ts [vite.config.ts]
import marko from '@marko/run/vite'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    marko(),
    UnoCSS(),
  ],
})
```

<ContentExample :item="playgrounds['marko-run']"  class="Link" integrations />

## Legacy

Если используется `@vitejs/plugin-legacy` с параметром `renderModernChunks: false`, вам необходимо добавить его в опцию `unocss`

```ts
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { presetWind3 } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetWind3()],
      legacy: {
        renderModernChunks: false,
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      renderModernChunks: false,
    }),
  ],
})
```

## Лицензия {#license}

- Лицензия MIT &copy; 2021-настоящее время [Anthony Fu](https://github.com/antfu)
