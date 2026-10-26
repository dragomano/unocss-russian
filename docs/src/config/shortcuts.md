---
title: Шорткаты
description: Функциональность шорткатов, предоставляемая UnoCSS, аналогична той, что была в Windi CSS.
---

# Шорткаты {#shortcuts}

Шорткаты позволяют объединять несколько правил в одно сокращение, что вдохновлено [Windi CSS](https://windicss.org/features/shortcuts.html).

## Использование {#usage}

<!--eslint-skip-->

```ts
shortcuts: {
  // шорткаты для нескольких утилит
  'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  // псевдоним (алиас) для одной утилиты
  'red': 'text-red-100',
}
```

В дополнение к обычному сопоставлению, UnoCSS также позволяет определять динамические шорткаты.

Подобно [Правилам](/config/rules), динамический шорткат представляет собой комбинацию сопоставителя `RegExp` и функции-обработчика.

```ts
shortcuts: [
  // вы всё ещё можете использовать стиль объекта
  {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  },
  // динамические шорткаты
  [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
]
```

Благодаря этому мы можем использовать `btn-green` и `btn-red` для генерации следующего CSS:

```css
.btn-green {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgb(74 222 128 / var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgb(220 252 231 / var(--un-text-opacity));
}
.btn-red {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgb(254 226 226 / var(--un-text-opacity));
}
```
