---
title: Расширение UnoCSS для VS Code
description: UnoCSS для VS Code.
---

# Расширение для VS Code {#vs-code-extension}

[Установить из Marketplace](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

- Оформление и всплывающие подсказки для найденных утилит
- Автоматическая загрузка конфигураций
- Подсчёт найденных утилит

## Команды {#commands}

<!-- commands -->

| Команда                         | Название                                        |
| ------------------------------- | ----------------------------------------------- |
| `unocss.reload`                 | UnoCSS: Перезагрузить UnoCSS                    |
| `unocss.insert-skip-annotation` | UnoCSS: Вставить `@unocss-skip` для выделенного |

<!-- commands -->

## Конфигурация {#configurations}

<!-- configs -->

| Ключ                            | Описание                                                 | Тип            | По умолчанию |
| ------------------------------- | -------------------------------------------------------- | -------------- | ------------ |
| `unocss.disable`                | Отключить расширение UnoCSS                              | `boolean`      | `false`      |
| `unocss.languageIds`            |                                                          | `array`        | ``           |
| `unocss.root`                   | Корень проекта, содержащий файл конфигурации UnoCSS      | `array,string` | ``           |
| `unocss.include`                | Директории файлов для обнаружения                        | `array,string` | ``           |
| `unocss.exclude`                | Директории файлов, которые не следует обнаруживать       | `array,string` | ``           |
| `unocss.underline`              | Включить/отключить подчеркивание для имен классов        | `boolean`      | `true`       |
| `unocss.colorPreview`           | Включить/отключить предпросмотр цвета                    | `boolean`      | `true`       |
| `unocss.colorPreviewRadius`     | Радиус для предпросмотра цвета                           | `string`       | `"50%"`      |
| `unocss.remToPxPreview`         | Включить/отключить конвертацию rem в px при наведении    | `boolean`      | `true`       |
| `unocss.remToPxRatio`           | Соотношение rem к px                                     | `number`       | `16`         |
| `unocss.selectionStyle`         | Включить/отключить оформление стиля выделения            | `boolean`      | `true`       |
| `unocss.strictAnnotationMatch`  | Строгий режим отображения аннотаций                      | `boolean`      | `false`      |
| `unocss.autocomplete.matchType` | Тип сопоставления для автодополнения                     | `string`       | `"prefix"`   |
| `unocss.autocomplete.strict`    | Строгий режим отображения автодополнения                 | `boolean`      | `false`      |
| `unocss.autocomplete.maxItems`  | Максимальное количество элементов в автодополнении       | `number`       | `1000`       |

<!-- configs -->

## Настройка {#config}

Чтобы получить лучший опыт работы с IDE, мы рекомендуем вам [использовать отдельный файл `uno.config.ts`](/guide/config-file) для настройки вашего UnoCSS.

Расширение попытается найти конфигурации UnoCSS внутри вашего проекта. Если конфигурация не найдена, расширение будет отключено.

## Пресет иконок {#icons-preset}

Если вы используете [Пресет иконок](/presets/icons), вы также можете установить [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) для получения встроенного предпросмотра, автодополнения и информации при наведении для ваших иконок.
