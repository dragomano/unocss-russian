# Автодополнение {#autocomplete}

Автодополнение можно настроить для интеллектуальных подсказок UnoCSS в <a href="/play" target="_blank" rel="noreferrer">песочнице</a> и [расширении VS Code](/integrations/vscode).

<!--eslint-skip-->

```ts
autocomplete: {
  templates: [
    // вывод темы
    'bg-$color/<opacity>',
    // сокращения
    'text-<font-size>',
    // логические группы "ИЛИ"
    '(b|border)-(solid|dashed|dotted|double|hidden|none)',
    // константы
    'w-half',
  ],
  shorthands: {
    // эквивалентно `opacity: "(0|10|20|30|40|50|60|70|90|100)"`
    'opacity': Array.from({ length: 11 }, (_, i) => i * 10),
    'font-size': '(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)',
    // переопределение встроенных сокращений
    'num': '(0|1|2|3|4|5|6|7|8|9)',
  },
  extractors: [
      // ...экстракторы
  ],
}
```

- `templates` использует простой DSL для указания предложений автодополнения.

- `shorthands` — это сопоставление имён сокращений их шаблонам. Если это `Array`, это будет логическая группа «ИЛИ».

- `extractors` для подбора возможных классов и преобразования предложений в стиле имён классов в правильный формат. Например, вы можете посмотреть, как мы реализовали [экстрактор автодополнения для режима атрибутов](https://github.com/unocss/unocss/blob/main/packages-presets/preset-attributify/src/autocomplete.ts).

- За дополнительной помощью обращайтесь [сюда](/tools/autocomplete).
