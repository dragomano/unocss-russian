---
title: Пакеты
description: "Пакеты UnoCSS: доступные пакеты, а также то, что включено и активировано в unocss."
outline: deep
---

# Пакеты {#packages}

UnoCSS — это монорепозиторий, содержащий несколько пакетов. На этой странице перечислены все пакеты и указано, что включено в пакет `unocss`:

| Пакет                                                                | Описание                                          | Включено в `unocss` | Активировано |
| -------------------------------------------------------------------- | ------------------------------------------------- | ------------------- | ------------ |
| [@unocss/core](/tools/core)                                          | Основная библиотека без пресетов                  | ✅                  | -            |
| [@unocss/cli](/integrations/cli)                                     | Интерфейс командной строки для UnoCSS             | ✅                  | -            |
| [@unocss/preset-mini](/presets/mini)                                 | Минимальные, но основные правила и варианты       | ✅                  | ✅           |
| [@unocss/preset-wind3](/presets/wind3)                               | Компактный пресет Tailwind CSS / Windi CSS        | ✅                  | ✅           |
| [@unocss/preset-wind4](/presets/wind4)                               | Компактный пресет Tailwind4 CSS                   | ✅                  | ✅           |
| [@unocss/preset-attributify](/presets/attributify)                   | Включает режим атрибутов для других правил        | ✅                  | Нет          |
| [@unocss/preset-tagify](/presets/tagify)                             | Включает режим тегов для других правил            | ✅                  | Нет          |
| [@unocss/preset-icons](/presets/icons)                               | Решение для чистых CSS-иконок на базе Iconify     | ✅                  | Нет          |
| [@unocss/preset-web-fonts](/presets/web-fonts)                       | Поддержка веб-шрифтов (Google Fonts и др.)        | ✅                  | Нет          |
| [@unocss/preset-typography](/presets/typography)                     | Пресет типографики                                | ✅                  | Нет          |
| [@unocss/preset-rem-to-px](/presets/rem-to-px)                       | Конвертирует rem в px для утилит                  | Нет                 | Нет          |
| [@unocss/preset-legacy-compat](/presets/legacy-compat)               | Коллекции утилит для обратной совместимости       | Нет                 | Нет          |
| [@unocss/transformer-variant-group](/transformers/variant-group)     | Трансформер для функции групп вариантов Windi CSS | ✅                  | Нет          |
| [@unocss/transformer-directives](/transformers/directives)           | Трансформер для CSS-директив, таких как `@apply`  | ✅                  | Нет          |
| [@unocss/transformer-compile-class](/transformers/compile-class)     | Компилирует группу классов в один класс           | ✅                  | Нет          |
| [@unocss/transformer-attributify-jsx](/transformers/attributify-jsx) | Поддержка атрибутов без значений в JSX/TSX        | ✅                  | Нет          |
| [@unocss/extractor-pug](/extractors/pug)                             | Экстрактор для Pug                                | Нет                 | -            |
| [@unocss/extractor-svelte](/extractors/svelte)                       | Экстрактор для Svelte                             | Нет                 | -            |
| [@unocss/autocomplete](/tools/autocomplete)                          | Утилиты для автодополнения                        | Нет                 | -            |
| [@unocss/config](/guide/config-file)                                 | Загрузчик файла конфигурации                      | ✅                  | -            |
| [@unocss/reset](/guide/style-reset)                                  | Коллекция распространённых сбросов CSS            | ✅                  | Нет          |
| [@unocss/vite](/integrations/vite)                                   | Плагины Vite                                      | ✅                  | -            |
| [@unocss/inspector](/tools/inspector)                                | UI инспектора для UnoCSS                          | ✅                  | -            |
| [@unocss/astro](/integrations/astro)                                 | Интеграция с Astro                                | ✅                  | -            |
| [@unocss/webpack](/integrations/webpack)                             | Плагин Webpack                                    | Нет                 | -            |
| [@unocss/nuxt](/integrations/nuxt)                                   | Модуль Nuxt                                       | Нет                 | -            |
| [@unocss/svelte-scoped](/integrations/svelte-scoped)                 | Плагин Vite для Svelte Scoped + Препроцессор      | Нет                 | -            |
| [@unocss/next](/integrations/next)                                   | Плагин Next.js                                    | Нет                 | -            |
| [@unocss/runtime](/integrations/runtime)                             | CSS-in-JS Runtime для UnoCSS                      | Нет                 | -            |
| [@unocss/eslint-plugin](/integrations/eslint)                        | Плагин ESLint                                     | Нет                 | -            |
| [@unocss/eslint-config](/integrations/eslint)                        | Конфигурация ESLint                               | Нет                 | -            |
| [@unocss/postcss](/integrations/postcss)                             | Плагин PostCSS                                    | Нет                 | -            |
| [Расширение VS Code](/integrations/vscode)                           | UnoCSS для VS Code                                | -                   | -            |
