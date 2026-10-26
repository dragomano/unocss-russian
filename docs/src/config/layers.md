---
title: Слои
icon: ph:stack-bold
description: UnoCSS позволяет определять слои так, как вы хотите.
---

# Слои {#layers}

Порядок CSS влияет на приоритеты стилей. Хотя движок [сохраняет порядок правил](/config/rules#ordering), иногда вам может понадобиться сгруппировать некоторые утилиты, чтобы иметь явный контроль над их порядком.

## Использование {#usage}

В отличие от Tailwind CSS, который предлагает три фиксированных слоя (`base`, `components`, `utilities`), UnoCSS позволяет вам определять слои так, как вы хотите. Чтобы установить слой, вы можете передать метаданные в качестве третьего элемента ваших правил:

```ts
rules: [
  [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }), { layer: 'utilities' }],
  // если вы пропустите слой, он будет `default` (по умолчанию)
  ['btn', { padding: '4px' }],
]
```

Это сгенерирует:

<!-- eslint-skip -->

```css
/* слой: default */
.btn { padding: 4px; }
/* слой: utilities */
.m-2 { margin: 0.5rem; }
```

Слой также может быть установлен для каждого префлайта:

```ts
preflights: [
  {
    layer: 'my-layer',
    getCSS: async () => (await fetch('my-style.css')).text(),
  },
]
```

## Порядок {#ordering}

Вы можете управлять порядком слоев с помощью:

<!--eslint-skip-->

```ts
layers: {
  'components': -1,
  'default': 1,
  'utilities': 2,
  'my-layer': 3,
}
```

Слои без указанного порядка будут отсортированы по алфавиту.

Если вы хотите вставить свой пользовательский CSS между слоями, вы можете обновить свой входной модуль:

```ts
// 'uno:[имя-слоя].css'
import 'uno:components.css'

// слои, которые не являются 'components' и 'utilities', попадут сюда
import 'uno.css'

// ваш собственный CSS
import './my-custom.css'

// слой "utilities" будет иметь наивысший приоритет
import 'uno:utilities.css'
```

## Каскадные слои CSS {#css-cascade-layers}

Вы можете выводить каскадные слои CSS с помощью:

```ts
outputToCssLayers: true
```

Вы можете изменить имена слоев CSS с помощью:

```ts
outputToCssLayers: {
  cssLayerName: (layer) => {
    // Слой default будет выведен в CSS-слой "utilities".
    if (layer === 'default')
      return 'utilities'

    // Слой shortcuts будет выведен в подслой "shortcuts" CSS-слоя "utilities".
    if (layer === 'shortcuts')
      return 'utilities.shortcuts'

    // Все остальные слои будут использовать свое имя в качестве имени CSS-слоя.
  }
}
```

## Вывод всех CSS-слоев {#output-all-css-layers}

UnoCSS по умолчанию выводит все используемые CSS-слои. Если вы хотите принудительно вывести все определённые CSS-слои, воспользуйтесь опцией `allLayers`:

<!-- eslint-skip -->

```ts
outputToCssLayers: {
  allLayers: true,
}
```

Это выведет все определённые CSS-слои, даже если они не используются.

```css
@layer theme, preflights, unused-layer, default;

/* сгенерированный CSS */
```

## Слои с использованием вариантов {#layers-using-variants}

Слои можно создавать с помощью вариантов.

`uno-layer-<name>:` может использоваться для создания слоя UnoCSS.

```html
<p class="uno-layer-my-layer:text-xl">текст</p>
```

<!-- eslint-skip -->

```css
/* слой: my-layer */
.uno-layer-my-layer\:text-xl{ font-size:1.25rem; line-height:1.75rem; }
```

`layer-<name>:` может использоваться для создания CSS @layer:

```html
<p class="layer-my-layer:text-xl">текст</p>
```

<!-- eslint-skip -->

```css
/* слой: default */
@layer my-layer{ .layer-my-layer\:text-xl{ font-size:1.25rem; line-height:1.75rem; } }
```
