---
title: Тема
description: UnoCSS также поддерживает систему темизации, с которой вы, возможно, знакомы по Tailwind CSS / Windi CSS.
outline: deep
---

# Тема {#theme}

UnoCSS также поддерживает систему темизации, с которой вы, возможно, знакомы по Tailwind CSS / Windi CSS. На пользовательском уровне вы можете указать свойство `theme` в вашей конфигурации, и оно будет глубоко слито с темой по умолчанию.

## Использование {#usage}

<!--eslint-skip-->

```ts
theme: {
  // ...
  colors: {
    veryCool: '#0000ff', // class="text-very-cool"
    brand: {
      primary: 'hsl(var(--hue, 217) 78% 51%)', //class="bg-brand-primary"
      DEFAULT: '#942192' //class="bg-brand"
    },
  },
}
```

::: tip
В процессе парсинга `theme` всегда будет существовать в `context`.
:::

### Использование в `rules` {#usage-in-rules}

Чтобы использовать тему в правилах:

```ts
rules: [
  [/^text-(.*)$/, ([, c], { theme }) => {
    if (theme.colors[c])
      return { color: theme.colors[c] }
  }],
]
```

### Использование в `variants` {#usage-in-variants}

Чтобы использовать тему в вариантах:

```ts
variants: [
  {
    name: 'variant-name',
    match(matcher, { theme }) {
      // ...
    },
  },
]
```

### Использование в `shortcuts` {#usage-in-shortcuts}

Чтобы использовать тему в динамических шорткатах:

```ts
shortcuts: [
  [/^badge-(.*)$/, ([, c], { theme }) => {
    if (Object.keys(theme.colors).includes(c))
      return `bg-${c}4:10 text-${c}5 rounded`
  }],
]
```

## Контрольные точки {#breakpoints}

::: warning
При предоставлении пользовательского объекта `breakpoints` значения по умолчанию будут перезаписаны, а не объединены.
:::

В следующем примере вы сможете использовать только варианты контрольных точек `sm:` и `md:`:

<!--eslint-skip-->

```ts
theme: {
  // ...
  breakpoints: {
    sm: '320px',
    md: '640px',
  },
}
```

Если вы хотите унаследовать контрольные точки `original` (исходной) темы, вы можете использовать `extendTheme`:

```ts
extendTheme: (theme) => {
  return {
    ...theme,
    breakpoints: {
      ...theme.breakpoints,
      sm: '320px',
      md: '640px',
    },
  }
}
```

::: info
`verticalBreakpoints` — то же самое, что и `breakpoints`, но для вертикальной разметки.
:::

Кроме того, мы будем сортировать контрольные точки экрана по размеру (при использовании одной единицы измерения). Для контрольных точек в разных единицах измерения, чтобы избежать ошибок, пожалуйста, используйте унифицированные единицы в конфигурации.

<!--eslint-skip-->

```ts
theme: {
  // ...
  breakpoints: {
    sm: '320px',
    // Поскольку UnoCSS не поддерживает сортировку сравнением для разных единиц измерения, пожалуйста, приведите их к одной единице.
    // md: '40rem',
    md: `${40 * 16}px`,
    lg: '960px',
  },
}
```

## ExtendTheme

`ExtendTheme` позволяет редактировать **глубоко слитую тему** для получения полного объекта темы.

Пользовательские функции мутируют объект темы.

```ts
extendTheme: (theme) => {
  theme.colors.veryCool = '#0000ff' // class="text-very-cool"
  theme.colors.brand = {
    primary: 'hsl(var(--hue, 217) 78% 51%)', // class="bg-brand-primary"
  }
}
```

Также возможно вернуть новый объект темы, чтобы полностью заменить исходный.

```ts
extendTheme: (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsl(var(--hue, 217) 78% 51%)', // class="bg-brand-primary"
      },
    },
  }
}
```
