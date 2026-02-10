# Белый список {#safelist}

Белый список — это важная опция в конфигурации UnoCSS, которая позволяет указать набор служебных классов, которые всегда должны быть включены в сгенерированный CSS, независимо от того, обнаружены эти классы в вашем исходном коде или нет.

## Базовое использование {#basic-usage}

### Массив строк {#string-array}

Самый простой способ использования — предоставить массив строк, содержащий имена классов, которые вы хотите сохранить:

```ts
// uno.config.ts
export default defineConfig({
  safelist: [
    'p-1',
    'p-2',
    'p-3',
    'text-center',
    'bg-red-500'
  ]
})
```

### Функциональная форма {#function-form}

Белый список также может содержать функции, которые вызываются во время сборки и могут динамически возвращать имена классов:

```ts
// uno.config.ts
export default defineConfig({
  safelist: [
    // Статические имена классов
    'p-1',
    'p-2',
    // Динамическая функция
    context => ['m-1', 'm-2', 'm-3'],
    (context) => {
      // Генерация имён классов на основе темы
      const colors = Object.keys(context.theme.colors || {})
      return colors.map(color => `bg-${color}-500`)
    }
  ]
})
```

### Смешанное использование {#mixed-usage}

Вы можете смешивать строки и функции в одной конфигурации белого списка:

```ts
// uno.config.ts
export default defineConfig({
  safelist: [
    // Статические имена классов
    'prose',
    'bg-orange-300',
    // Динамическая генерация
    () => ['flex', 'grid', 'block'],
    // Динамическая генерация по условию
    (context) => {
      if (process.env.NODE_ENV === 'development') {
        return ['debug-border', 'debug-grid']
      }
      return []
    }
  ]
})
```

## Типы возвращаемых значений {#return-value-types}

Функции белого списка могут возвращать следующие типы значений:

- `Arrayable<string>` — Строка или массив строк

```ts
safelist: [
  // Возврат массива строк
  () => ['class1', 'class2', 'class3'],

  // Возврат одной строки
  () => 'single-class',

  // Возврат вложенного массива (будет выровнен)
  () => [['nested1', 'nested2'], 'normal3']
]
```

## Практические сценарии использования {#practical-use-cases}

### Динамически генерируемые имена классов {#dynamically-generated-class-names}

Когда у вас есть динамически генерируемые имена классов, которые могут быть не обнаружены статическим анализом:

```ts
safelist: [
  // Динамические классы цветов
  () => {
    const dynamicColors = ['primary', 'secondary', 'accent']
    return dynamicColors.flatMap(color => [
      `bg-${color}`,
      `text-${color}`,
      `border-${color}`
    ])
  },

  // Динамические классы размеров
  () => {
    return Array.from({ length: 12 }, (_, i) => `gap-${i + 1}`)
  }
]
```

### Поддержка сторонних библиотек компонентов {#third-party-component-library-support}

Укажите необходимые имена классов для сторонних библиотек компонентов:

```ts
safelist: [
  // Зарезервированные имена классов для библиотеки компонентов
  'prose',
  'prose-sm',
  'prose-lg',

  // Динамическая генерация вариантов компонентов
  () => {
    const variants = ['primary', 'secondary', 'danger', 'success']
    const sizes = ['sm', 'md', 'lg']

    return variants.flatMap(variant =>
      sizes.map(size => `btn-${variant}-${size}`)
    )
  }
]
```

## Связь с другими настройками {#relationship-with-other-configurations}

### Отличие от чёрного списка {#difference-from-blocklist}

- **safelist**: гарантирует, что указанные имена классов всегда будут включены
- **blocklist**: гарантирует, что указанные имена классов всегда будут исключены

```ts
export default defineConfig({
  safelist: ['always-include'],
  blocklist: ['never-include']
})
```

### Связь с параметрами генерации {#relationship-with-generation-options}

При генерации CSS вы можете управлять включением белого списка с помощью `GenerateOptions`:

```ts
const { css } = await uno.generate('', {
  safelist: true // Включить имена классов из белого списка
})
```
