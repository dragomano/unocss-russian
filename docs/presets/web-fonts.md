---
title: Пресет веб-шрифтов
description: Поддержка веб-шрифтов для UnoCSS (@unocss/preset-web-fonts).
outline: deep
---

# Пресет веб-шрифтов {#web-fonts-preset}

Используйте веб-шрифты из [Google Fonts](https://fonts.google.com/), [FontShare](https://www.fontshare.com/), просто указав названия шрифтов.

См. информацию обо [всех поддерживаемых провайдерах](#providers).

[Исходный код](https://github.com/unocss/unocss/tree/main/packages-presets/preset-web-fonts)

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-web-fonts
```

```bash [yarn]
yarn add -D @unocss/preset-web-fonts
```

```bash [npm]
npm install -D @unocss/preset-web-fonts
```

```bash [bun]
bun add -D @unocss/preset-web-fonts
```

:::

```ts [uno.config.ts]
import presetWebFonts from '@unocss/preset-web-fonts'
import presetWind3 from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({ /* параметры */ }),
  ],
})
```

::: tip
Этот пресет включен в пакет `unocss`, вы также можете импортировать его оттуда:

```ts
import { presetWebFonts } from 'unocss'
```

:::

## Провайдеры {#providers}

В настоящее время поддерживаются следующие провайдеры:

- `none` — ничего не делать, рассматривать шрифт как системный
- `google` — [Google Fonts](https://fonts.google.com/)
- `bunny` — [Google Fonts, ориентированный на конфиденциальность](https://fonts.bunny.net/)
- `fontshare` — [Качественный сервис шрифтов от ITF](https://www.fontshare.com/)
- `fontsource` — [Self-Host шрифты с открытым исходным кодом в аккуратно упакованных пакетах NPM](https://fontsource.org/)
- `coollabs` — [Замена Google Fonts, ориентированная на конфиденциальность](https://fonts.coollabs.io/)

::: info
Приветствуются PR для добавления новых провайдеров. 🙌
:::

### Пользовательская функция загрузки {#custom-fetch-function}

Используйте собственную функцию для загрузки источника шрифта.

```ts [uno.config.ts]
import presetWebFonts from '@unocss/preset-web-fonts'
import presetWind3 from '@unocss/preset-wind3'
import axios from 'axios'
import ProxyAgent from 'proxy-agent'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      // использование axios с https прокси
      customFetch: (url: string) => axios.get(url, { httpsAgent: new ProxyAgent('https://localhost:7890') }).then(it => it.data),
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
})
```

## Опции {#options}

### provider

- **Тип:** `WebFontsProviders`
- **По умолчанию:** `google`

Провайдер сервиса веб-шрифтов.

```ts
type WebFontsProviders = 'google' | 'bunny' | 'fontshare' | 'fontsource' | 'coollabs' | 'none'
```

### fonts

- **Тип:** `Record<string, WebFontMeta | string | (WebFontMeta | string)[]>`

Шрифты. Подробнее см. в [примере](#example).

```ts
interface WebFontMeta {
  name: string
  weights?: (string | number)[]
  italic?: boolean
  /**
   * Переопределяем провайдера
   * @default <соответствует корневой конфигурации>
   */
  provider?: WebFontsProviders
}
```

### extendTheme

- **Тип:** `boolean`
- **По умолчанию:** `true`

Расширить объект темы.

### themeKey

- **Тип:** `string`
- **По умолчанию:** `fontFamily`

Ключ для объекта темы.

### inlineImports

- **Тип:** `boolean`
- **По умолчанию:** `true`

Встраивать CSS `@import()`.

### customFetch

- **Тип:** `(url: string) => Promise<string>`
- **По умолчанию:** `undefined`

Использовать собственную функцию для загрузки источника шрифта. См. [Пользовательская функция загрузки](#custom-fetch-function).

## Пример {#example}

```ts
presetWebFonts({
  provider: 'google', // провайдер по умолчанию
  fonts: {
    // они расширят тему по умолчанию
    sans: 'Roboto',
    mono: ['Fira Code', 'Fira Mono:400,700'],
    // пользовательские
    lobster: 'Lobster',
    lato: [
      {
        name: 'Lato',
        weights: ['400', '700'],
        italic: true,
      },
      {
        name: 'sans-serif',
        provider: 'none',
      },
    ],
  },
})
```

Следующий CSS будет сгенерирован автоматически:

<!-- eslint-skip -->

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Fira+Code&family=Fira+Mono:wght@400;700&family=Lobster&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* слой: default */
.font-lato {
  font-family: "Lato", sans-serif;
}
.font-lobster {
  font-family: "Lobster";
}
.font-mono {
  font-family: "Fira Code", "Fira Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans {
  font-family: "Roboto", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}
```

## Локальная раздача шрифтов {#serve-fonts-locally}

По умолчанию пресет загружает шрифты из CDN провайдера. Если вы хотите раздавать шрифты локально, вы можете загрузить их и раздавать с собственного сервера, используя процессор из `@unocss/preset-web-fonts/local`.

```ts
import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Roboto',
        mono: 'Fira Code',
      },
      // Это загрузит шрифты и раздаст их локально
      processors: createLocalFontProcessor({
        // Директория для кеширования шрифтов
        cacheDir: 'node_modules/.cache/unocss/fonts',

        // Директория для сохранения ресурсов шрифтов
        fontAssetsDir: 'public/assets/fonts',

        // Базовый URL для раздачи шрифтов клиенту
        fontServeBaseUrl: '/assets/fonts',

        // Пользовательская функция fetch для загрузки шрифтов
        fetch: async url => axios.get(url)
      })
    }),
  ],
})
```

Это загрузит файлы шрифтов в `public/assets/fonts` и будет раздавать их клиенту по пути `/assets/fonts`. При этом убедитесь, что лицензия шрифтов позволяет вам их распространять; инструмент не несет ответственности за любые юридические проблемы.

::: info

Эта функция специфична для Node.js и не будет работать в браузере.

:::
