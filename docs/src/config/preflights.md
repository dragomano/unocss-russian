---
title: Префлайты
description: Вы можете внедрять необработанный CSS в качестве preflights из конфигурации. Итоговая тема доступна для настройки CSS.
---

# Префлайты {#preflights}

Вы можете внедрять необработанный CSS в качестве префлайтов из конфигурации. Итоговая `theme` доступна для настройки CSS.

<!--eslint-skip-->

```ts
preflights: [
  {
    getCSS: ({ theme }) => `
      * {
        color: ${theme.colors.gray?.[700] ?? '#333'};
        padding: 0;
        margin: 0;
      }
    `,
  },
]
```
