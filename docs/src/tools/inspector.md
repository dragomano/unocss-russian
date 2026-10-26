---
title: Инспектор
description: UI инспектора для UnoCSS (@unocss/inspector).
---

# Инспектор {#inspector}

UI инспектора для UnoCSS: `@unocss/inspector`.
Поставляется вместе с `unocss` и `@unocss/vite`.

Инспектор позволяет просматривать сгенерированные CSS-правила и применённые классы для каждого файла. Он также предоставляет REPL для тестирования ваших утилит на основе текущей конфигурации.

Инспектор построен на базе [devframe](https://devfra.me/) и может быть развёрнут несколькими способами.

## Vite DevTools (рекомендуется) {#vite-devtools-recommended}

Когда установлен [Vite DevTools](https://devtools.vite.dev/) (`@vitejs/devtools`), инспектор монтируется автоматически как **док UnoCSS** внутри него — без запроса авторизации, с поддержкой живых обновлений.

Статическая сборка DevTools при `vite build` также запекает предварительно вычисленный снимок данных инспектора в экспорт, так что анализ доступен для просмотра без dev-сервера.

## Отдельный URL {#standalone-url}

Откройте <a href="http://localhost:5173/__unocss" target="_blank" rel="noreferrer">localhost:5173/\_\_unocss</a> на вашем dev-сервере Vite, чтобы увидеть инспектор.

При первом использовании введите одноразовый 6-значный код, выведенный в терминале вашего dev-сервера, чтобы разблокировать доступ (токен запоминается для браузера). Когда активен Vite DevTools, этот URL перенаправляет в интерфейс DevTools.

::: info
Отдельный URL — это устаревший способ доступа; рекомендуемый способ использования инспектора в дальнейшем — док Vite DevTools.
:::

## Другие хосты {#other-hosts}

`@unocss/inspector/devframe` экспортирует инспектор как переносимое [определение devframe](https://devfra.me/), которое может быть смонтировано любым хостом devframe:

- `createInspectorDevframe(ctx)` — привязывает инспектор к существующему контексту плагина UnoCSS.
- `createStandaloneInspectorDevframe(options)` — создаёт отдельный контекст путём сканирования файлов проекта, для хостов без интегрированного через бандлер контекста UnoCSS (например, приложение Next.js, использующее `@unocss/postcss` через [`@devframes/next`](https://devfra.me/frameworks/next)).

<img src="https://user-images.githubusercontent.com/11247099/140885990-1827f5ce-f12a-4ed4-9d63-e5145a65fb4a.png" loading="lazy" alt="UnoCSS Inspector" />
<img src="https://user-images.githubusercontent.com/11247099/140886020-7014f412-f020-4aed-a169-d025cc1bbcd3.png" loading="lazy" alt="UnoCSS Inspector REPL" />
