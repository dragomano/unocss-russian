---
title: Языковой сервер UnoCSS
---

# Поддержка LSP для UnoCSS {#lsp-support-for-unocss}

Языковой сервер UnoCSS обеспечивает IDE-подобную поддержку UnoCSS в любом редакторе, поддерживающем LSP (Neovim, VS Code, Emacs и т. д.).

:::info
Примечание: Это **языковой сервер, поддерживаемый сообществом, а не официальной командой UnoCSS**. Используйте на свое усмотрение. Сообщайте о проблемах в [xna00/unocss-language-server](https://github.com/xna00/unocss-language-server).
:::

## Установка {#installation}

```bash
npm install -g unocss-language-server
```

## Возможности {#features}

- Автодополнение для утилит UnoCSS
- Всплывающая документация с предпросмотром CSS

## Использование {#usage}

Запустите языковой сервер командой:

```bash
unocss-language-server --stdio
```

Настройте LSP-клиент вашего редактора для подключения к нему.

## Сообщения об ошибках / Запросы функций {#bug-reports-feature-requests}

Сообщайте о них в [Issue Tracker](https://github.com/xna00/unocss-language-server/issues)
