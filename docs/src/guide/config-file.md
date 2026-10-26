# Файл конфигурации {#config-file}

Мы **настоятельно рекомендуем использовать отдельный файл `uno.config.ts`** для настройки UnoCSS, чтобы обеспечить наилучшую работу с IDE и другими интеграциями.

Полнофункциональный файл конфигурации выглядит так:

```ts twoslash [uno.config.ts]
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
```

По сравнению с конфигурацией, встроенной в `vite.config.ts` или файлы настроек других инструментов, отдельный файл конфигурации лучше работает с [IDE](/integrations/vscode) и интеграциями, а также с такими инструментами, как [плагин ESLint](/integrations/eslint). Кроме того, это улучшает работу HMR.

По умолчанию UnoCSS автоматически ищет `uno.config.{js,ts,mjs,mts}` или `unocss.config.{js,ts,mjs,mts}` в корневой директории вашего проекта. Вы также можете указать файл конфигурации вручную, например, в Vite:

```ts [vite.config.ts]
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: '../my-uno.config.ts',
    }),
  ],
})
```

Полный список поддерживаемых параметров конфигурации см. в [справочнике по конфигурации](/config/).
