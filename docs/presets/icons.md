---
title: Пресет иконок
description: Используйте любые иконки на чистом CSS для UnoCSS (@unocss/preset-icons).
outline: deep
---

<script setup>
const toggleDark = () => {
  document.querySelector('.VPSwitchAppearance')?.click()
}
</script>

# Пресет иконок {#icons-preset}

Используйте любые иконки на чистом CSS для UnoCSS.

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-icons)

::: tip
Рекомендуется к прочтению: [Иконки на чистом CSS](https://antfu.me/posts/icons-in-pure-css)
:::

Для использования иконок следуйте следующим соглашениям:

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

Например:

```html
<!-- Базовая иконка якоря из Phosphor icons -->
<div class="i-ph-anchor-simple-thin" />
<!-- Оранжевый будильник из Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- Большой логотип Vue -->
<div class="i-logos-vue text-3xl" />
<!-- Солнце в светлой теме, Луна в тёмном режиме, из Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji смеха, превращающийся в слезы радости при наведении -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
```

<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-ph:anchor-simple-thin" />
  <div class="i-mdi:alarm text-orange-400 hover:text-teal-400" />
  <div class="w-2em h-2em i-logos:vue transform transition-800 hover:rotate-180" />
  <button class="i-carbon:sun dark:i-carbon:moon !w-2em !h-2em" @click="toggleDark()" title="toggle dark mode"/>
  <div class="i-twemoji:grinning-face-with-smiling-eyes hover:i-twemoji:face-with-tears-of-joy" />
  <div class="text-base my-auto flex"><div class="i-carbon:arrow-left my-auto mr-1" /> Наведите курсор</div>
</div>

Посмотреть [все доступные иконки](https://icones.js.org/).

## Установка {#install}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

```bash [yarn]
yarn add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

```bash [npm]
npm install -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

```bash [bun]
bun add -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

:::

Мы используем [Iconify](https://iconify.design) в качестве источника данных иконок. Вам необходимо установить соответствующий набор иконок в `devDependencies`, следуя шаблону `@iconify-json/*`. Например, `@iconify-json/mdi` для [Material Design Icons](https://materialdesignicons.com/), `@iconify-json/tabler` для [Tabler](https://tabler-icons.io/). Вы можете обратиться к [Icônes](https://icones.js.org/) или [Iconify](https://icon-sets.iconify.design/) для просмотра всех доступных коллекций.

```ts [uno.config.ts]
import presetIcons from '@unocss/preset-icons'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({ /* параметры */ }),
    // ...другие пресеты
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { presetIcons } from 'unocss'
```

:::

::: info
Вы также можете использовать этот пресет отдельно, как дополнение к вашим существующим UI-фреймворкам, чтобы получить иконки на чистом CSS!
:::

Если вы предпочитаете установить все наборы иконок, доступные на Iconify, за один раз (~130 МБ):

::: code-group

```bash [pnpm]
pnpm add -D @iconify/json
```

```bash [yarn]
yarn add -D @iconify/json
```

```bash [npm]
npm install -D @iconify/json
```

```bash [bun]
bun add -D @iconify/json
```

:::

### Дополнительные свойства {#extra-properties}

Вы можете предоставить дополнительные CSS-свойства для управления поведением иконок по умолчанию. Ниже приведен пример того, как сделать иконки строчными по умолчанию:

```ts
presetIcons({
  extraProperties: {
    'display': 'inline-block',
    'vertical-align': 'middle',
    // ...
  },
})
```

## Переопределение режимов {#modes-overriding}

По умолчанию этот пресет выбирает режим рендеринга автоматически для каждой иконки, основываясь на её характеристиках. Подробнее об этом можно прочитать в этом [посте в блоге](https://antfu.me/posts/icons-in-pure-css). В некоторых случаях вам может потребоваться явно задать режим рендеринга для каждой иконки.

- `?bg` для `background-img` — рендерит иконку как фоновое изображение
- `?mask` для `mask` — рендерит иконку как изображение-маску

Например, `vscode-icons:file-type-light-pnpm` — это иконка с цветами (`svg` не содержит `currentColor`), которая будет отрендерена как фоновое изображение. Используйте `vscode-icons:file-type-light-pnpm?mask`, чтобы отрендерить её как изображение-маску и игнорировать её цвета.

```html
<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-vscode-icons:file-type-light-pnpm" />
  <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
</div>
```

<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-vscode-icons:file-type-light-pnpm" />
  <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
</div>

## Настройка коллекций и резолверов иконок {#configuring-collections-and-icons-resolvers}

Вы можете предоставлять коллекции через `@iconify-json/[нужная-вам-коллекция]`, `@iconify/json` или использовать свои собственные, используя опцию `collections` в вашей конфигурации `UnoCSS`.

### Браузер {#browser}

Для загрузки коллекций `iconify` следует использовать `@iconify-json/[нужная-вам-коллекция]`, а не `@iconify/json`, так как файл `json` очень большой.

#### Бандлер {#bundler}

При использовании бандлеров вы можете предоставлять коллекции с помощью `динамических импортов`, чтобы они собирались как асинхронные чанки и загружались по запросу.

```ts
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
      }
    })
  ]
})
```

#### CDN

Или, если вы предпочитаете загружать их из CDN, вы можете указать опцию `cdn` (начиная с `v0.32.10`). Мы рекомендуем [esm.sh](https://esm.sh/) в качестве CDN-провайдера.

```ts
presetIcons({
  cdn: 'https://esm.sh/'
})
```

#### Кастомизация {#customization}

Вы также можете предоставить свои собственные коллекции, используя [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L17) или [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L86), например, используя `InlineCollection`:

```ts
presetIcons({
  collections: {
    custom: {
      circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
      /* ... */
    },
    carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
    /* ... */
  }
})
```

И затем вы можете использовать это в вашем html: `<span class="i-custom:circle"></span>`

### Node.js

В `Node.js` пресет будет автоматически искать установленный набор данных iconify, поэтому вам не нужно регистрировать коллекции `iconify`.

Вы также можете предоставить свои собственные коллекции, используя [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L24) или [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L100).

#### FileSystemIconLoader

Кроме того, вы также можете использовать [FileSystemIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/node-loaders.ts#L9) для загрузки ваших пользовательских иконок из файловой системы. Вам потребуется установить пакет `@iconify/utils` как `dev dependency`.

```ts [unocss.config.ts]
import fs from 'node:fs/promises'
// вспомогательные функции загрузчика
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        // ключ как имя коллекции
        'my-icons': {
          account: '<svg><!-- ... --></svg>',
          // загрузка пользовательской иконки лениво (lazy)
          settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8'),
          /* ... */
        },
        'my-other-icons': async (iconName) => {
          // ваш пользовательский загрузчик здесь. Делайте всё, что хотите.
          // например, загрузка с удалённого сервера:
          return await fetch(`https://example.com/icons/${iconName}.svg`).then(res => res.text())
        },
        // помощник для загрузки иконок из файловой системы
        // файлы в `./assets/icons` с расширением `.svg` будут загружены по их имени файла
        // вы также можете предоставить колбэк трансформации для изменения каждой иконки (опционально)
        'my-yet-other-icons': FileSystemIconLoader(
          './assets/icons',
          svg => svg.replace(/#fff/, 'currentColor')
        )
      }
    })
  ]
})
```

#### ExternalPackageIconLoader

С версии `@iconify/utils v2.1.20` вы можете использовать другие пакеты для загрузки иконок от других авторов, используя новый хелпер [createExternalPackageIconLoader](https://github.com/iconify/iconify/blob/main/packages/utils/src/loader/external-pkg.ts#L13).

::: warning ВНИМАНИЕ
Внешние пакеты должны включать файл `icons.json` с данными `icons` в формате `IconifyJSON`, который можно экспортировать с помощью Iconify Tools. Для получения более подробной информации см. [Экспорт набора иконок в виде JSON-пакета](https://iconify.design/docs/libraries/tools/export/json-package.html).
:::

Например, вы можете использовать `an-awesome-collection` или `@my-awesome-collections/some-collection` для загрузки ваших пользовательских или сторонних иконок:

```ts [unocss.config.ts]
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: createExternalPackageIconLoader('an-awesome-collection')
    })
  ]
})
```

Вы также можете комбинировать его с другими пользовательскими загрузчиками иконок, например:

```ts [unocss.config.ts]
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import { defineConfig, presetIcons } from 'unocss'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        ...createExternalPackageIconLoader('other-awesome-collection'),
        ...createExternalPackageIconLoader('@my-awesome-collections/some-collection'),
        ...createExternalPackageIconLoader('@my-awesome-collections/some-other-collection'),
        'my-yet-other-icons': FileSystemIconLoader(
          './assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    })
  ]
})
```

## Кастомизация иконок {#icon-customizations}

Вы можете кастомизировать все иконки, используя опцию конфигурации `customizations`.

Доступные функции кастомизации:

- `transform`: трансформирует исходный `svg`, применяется только при использовании `пользовательской` коллекции иконок (коллекции `iconify` исключены).
- `customize`: изменяет значения кастомизации иконок по умолчанию.
- `iconCustomizer`: изменяет значения кастомизации иконок по умолчанию.

Для каждой загруженной иконки кастомизации будут применяться в следующем порядке:

- применение `transform` к исходному `svg`, если предоставлен и используется пользовательская коллекция иконок
- применение `customize` со значениями кастомизации по умолчанию, если предоставлен
- применение `iconCustomizer` с кастомизациями из `customize`, если предоставлен

### Глобальная трансформация пользовательских иконок {#global-custom-icon-transformation}

При загрузке ваших пользовательских иконок вы можете трансформировать их, например, добавив атрибут `fill` со значением `currentColor`:

```ts
presetIcons({
  customizations: {
    transform(svg) {
      return svg.replace(/#fff/, 'currentColor')
    }
  }
})
```

С версии `0.30.8` функция `transform` предоставляет имена `collection` (коллекции) и `icon` (иконки):

```ts
presetIcons({
  customizations: {
    transform(svg, collection, icon) {
      // не применять fill к этим иконкам в этой коллекции
      if (collection === 'custom' && icon === 'my-icon')
        return svg
      return svg.replace(/#fff/, 'currentColor')
    }
  }
})
```

### Глобальная кастомизация иконок {#global-icon-customization}

При загрузке любой иконки вы можете кастомизировать общие свойства для всех из них, например, настроить одинаковый размер:

```ts
presetIcons({
  customizations: {
    customize(props) {
      props.width = '2em'
      props.height = '2em'
      return props
    }
  }
})
```

### Кастомизация иконки/коллекции {#icon-collection-customization}

Вы можете кастомизировать каждую иконку, используя опцию конфигурации `iconCustomizer`.

`iconCustomizer` имеет приоритет над конфигурацией.

`iconCustomizer` будет применен к любой коллекции, то есть к каждой иконке из `custom` загрузчика, `inlined` (встроенной) в `custom collections` или из `@iconify`.

Например, вы можете настроить `iconCustomizer`, чтобы изменить все иконки для коллекции или отдельные иконки в коллекции:

```ts
presetIcons({
  customizations: {
    iconCustomizer(collection, icon, props) {
      // кастомизация всех иконок в этой коллекции
      if (collection === 'my-other-icons') {
        props.width = '4em'
        props.height = '4em'
      }
      // кастомизация этой конкретной иконки в этой коллекции
      if (collection === 'my-icons' && icon === 'account') {
        props.width = '6em'
        props.height = '6em'
      }
      // кастомизация этой иконки @iconify в этой коллекции
      if (collection === 'mdi' && icon === 'account') {
        props.width = '2em'
        props.height = '2em'
      }
    }
  }
})
```

## Директивы {#directives}

Вы можете использовать директиву `icon()` в вашем CSS, чтобы получить метаданные иконки.

```css
.icon {
  background-image: icon('i-carbon-sun');
}
```

::: warning
`icon()` зависит от `@unocss/preset-icons` и будет использовать его конфигурацию; убедитесь, что вы добавили этот пресет.
:::

Подробнее о директиве `icon()` см. [Директивы](/transformers/directives#icon).

## Опции {#options}

### scale

- Тип: `number`
- По умолчанию: `1`

Масштаб относительно текущего размера шрифта (1em).

### mode

- Тип: `'mask' | 'bg' | 'auto'`
- По умолчанию: `'auto'`
- См.: https://antfu.me/posts/icons-in-pure-css

Режим генерируемых CSS-иконок.

:::tip

- `mask` — использовать цвет фона и свойство `mask` для монохромных иконок
- `bg` — использовать фоновое изображение для иконок, цвета статические
- `auto` — умный выбор режима между `mask` и `bg` для каждой иконки на основе её стиля

:::

### prefix

- Тип: `string | string[]`
- По умолчанию: `'i-'`

Префикс класса для сопоставления правил иконок.

### extraProperties

- Тип: `Record<string, string>`
- По умолчанию: `{}`

Дополнительные CSS-свойства, применяемые к сгенерированному CSS.

### warn

- Тип: `boolean`
- По умолчанию: `false`

Выдавать предупреждение при отсутствии совпадений иконок.

### iconifyCollectionsNames

- Тип: `string[]`
- По умолчанию: `undefined`

Дополнительные коллекции `@iconify-json` для использования. Эту опцию следует использовать, когда появляются новые коллекции `@iconify-json`, не перечисленные в именах коллекций пресета иконок по умолчанию.

### collections

- Тип: `Record<string, (() => Awaitable<IconifyJSON>) | undefined | CustomIconLoader | InlineCollection>`
- По умолчанию: `undefined`

В среде Node.js пресет будет автоматически искать установленный набор данных iconify. При использовании в браузере эта опция предоставляется для обеспечения набора данных с пользовательским механизмом загрузки.

### layer

- Тип: `string`
- По умолчанию: `'icons'`

Слой правил.

### customizations

- Тип: `Omit<IconCustomizations, 'additionalProps' | 'trimCustomSvg'>`
- По умолчанию: `undefined`

Пользовательские кастомизации иконок.

### autoInstall

- Тип: `boolean`
- По умолчанию: `false`

Автоматически устанавливать пакеты с исходниками иконок при обнаружении использования.

:::warning
Только в среде `node`, в `browser` эта опция будет проигнорирована.
:::

### unit

- Тип: `string`
- По умолчанию: `'em'`

Пользовательская единица измерения иконки.

### cdn

- Тип: `string`
- По умолчанию: `undefined`

Загружать иконки из CDN. Должен начинаться с `https://` и заканчиваться `/`.

Рекомендуется:

- `https://esm.sh/`
- `https://cdn.skypack.dev/`

### customFetch

- Тип: `(url: string) => Promise<any>`
- По умолчанию: `undefined`

Пресет использует [`ofetch`](https://github.com/unjs/ofetch) как загрузчик по умолчанию. Вы также можете использовать пользовательскую функцию fetch для предоставления данных иконки.

### processor

- Тип: `(cssObject: CSSObject, meta: Required<IconMeta>) => void`
- По умолчанию: `undefined`

```ts
interface IconMeta {
  collection: string
  icon: string
  svg: string
  mode?: IconsOptions['mode']
}
```

Процессор для объекта CSS перед преобразованием в строку. См. [пример](https://github.com/unocss/unocss/blob/7d83789b0dee8c72c401db24263ea429086de95d/test/preset-icons.test.ts#L66-L82).

## Продвинутая очистка пользовательских наборов иконок {#advanced-custom-icon-set-cleanup}

При использовании этого пресета с вашими пользовательскими иконками рассмотрите возможность использования процесса очистки, аналогичного тому, который выполняется [Iconify](https://iconify.design/) для любых наборов иконок. Все необходимые инструменты доступны в [Iconify Tools](https://iconify.design/docs/libraries/tools/).

Вы можете ознакомиться с этим репозиторием, где данный пресет используется в проекте на `Vue 3`: [@iconify/tools/@iconify-demo/unocss](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss).

Прочитайте статью [Cleaning up icons (Очистка иконок)](https://iconify.design/docs/articles/cleaning-up-icons/) от [Iconify](https://iconify.design/) для получения более подробной информации.

## Вопросы доступности {#accessibility-concerns}

При использовании иконок важно учитывать всех ваших потенциальных пользователей. Некоторые из них могут использовать программы чтения с экрана (скринридеры), и им понадобится альтернативный текст, чтобы понять, что означает иконка. Вы можете использовать атрибут `aria-label`, чтобы предоставить описание иконки:

```html
<a href="/profile" aria-label="Profile" class="i-ph:user-duotone"></a>
```

Если иконка является чисто декоративной и не требует текстовой альтернативы, вы можете использовать `aria-hidden="true"`, чтобы скрыть её от программ чтения с экрана:

```html
<a href="/profile">
  <span aria-hidden="true" class="i-ph:user-duotone"></span>
  My Profile
</a>
```

Существует множество других техник для предоставления подсказок программам чтения с экрана; например, [пресет Wind3](./wind3) включает [sr-only](/interactive/?s=sr-only) для визуального скрытия элементов, сохраняя их доступными для скринридеров.

В интернете можно найти хорошие ресурсы по доступности иконок. Поскольку CSS-иконки ведут себя как шрифтовые иконки, вы можете использовать те же методы, что и для них.

## Благодарности {#credits}

- Этот пресет вдохновлен [этим обсуждением](https://github.com/antfu/unplugin-icons/issues/88), созданным [@husayt](https://github.com/husayt).
- Основан на работе в [этом PR](https://github.com/antfu/unplugin-icons/pull/90) от [@userquin](https://github.com/userquin).
