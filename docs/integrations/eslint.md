---
title: Конфигурация ESLint для UnoCSS
description: Конфигурация ESLint для UnoCSS (@unocss/eslint-config).
---

# Конфигурация ESLint {#eslint-config}

Конфигурация ESLint для UnoCSS: `@unocss/eslint-config`.

## Установка {#installation}

::: code-group

```bash [pnpm]
pnpm add -D @unocss/eslint-config
```

```bash [yarn]
yarn add -D @unocss/eslint-config
```

```bash [npm]
npm install -D @unocss/eslint-config
```

```bash [bun]
bun add -D @unocss/eslint-config
```

:::

В [стиле Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new):

```js [eslint.config.js]
import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  // другие настройки
]
```

В устаревшем стиле `.eslintrc`:

```json [.eslintrc]
{
  "extends": [
    "@unocss"
  ]
}
```

## Правила {#rules}

- `@unocss/order` — Обеспечивает соблюдение определённого порядка для селекторов классов.
- `@unocss/order-attributify` — Обеспечивает соблюдение определённого порядка для селекторов режима атрибутов.
- `@unocss/blocklist` — Запрещает использование определённых селекторов классов [Опционально].
- `@unocss/enforce-class-compile` — Принуждает к использованию компиляции классов [Опционально].

### Опции правил {#rule-options}

#### `@unocss/order`

- `unoFunctions` (string[]) — помечает вызовы функций с совпадающими именами для применения этого правила. Это простые имена, не шаблоны, регистронезависимые. По умолчанию: `['clsx', 'classnames']`.
- `unoVariables` (string[]) — помечает объявления переменных с совпадающими именами для применения этого правила. Это шаблоны регулярных выражений с флагом `i`. По умолчанию: `['^cls', 'classNames?$']`. Например, совпадет с именами переменных `clsButton` и `buttonClassNames`.

### Опциональные правила {#optional-rules}

Эти правила не включены по умолчанию. Чтобы включить их, добавьте следующее в ваш `.eslintrc`:

```json [.eslintrc]
{
  "extends": [
    "@unocss"
  ],
  "rules": {
    "@unocss/<rule-name>": "warn", // или "error",
    "@unocss/<another-rule-name>": ["warn" /* или "error" */, { /* параметры */ }]
  }
}
```

#### `@unocss/blocklist`

Выдает предупреждение или ошибку при обнаружении совпадений с утилитами, перечисленными в `blocklist` (чёрном списке).

Вы можете настроить сообщения для заблокированных правил, чтобы сделать их более информативными и специфичными для контекста, используя свойство `message` мета-объекта:

```ts [unocss.config.ts]
export default defineConfig({
  blocklist: [
    ['bg-red-500', { message: 'Use bg-red-600 instead' }],
    [/-auto$/, { message: s => `Use ${s.replace(/-auto$/, '-a')} instead` }], // -> "my-auto" в чёрном списке: Используйте вместо него "my-a"
  ],
})
```

#### `@unocss/enforce-class-compile` :wrench:

_Это правило предназначено для работы в сочетании с [трансформером компиляции классов](https://unocss.dev/transformers/compile-class)._

Выдает предупреждение или ошибку, если атрибут `class` или директива не начинаются с `:uno:`.

:wrench: автоматически добавляет префикс `:uno:` ко всем атрибутам `class` и директивам.

Опции:

- `prefix` (string) — может использоваться в сочетании с [пользовательским префиксом](https://github.com/unocss/unocss/blob/main/packages-presets/transformer-compile-class/src/index.ts#L34). По умолчанию: `:uno:`
- `enableFix` (boolean) — если `false`, может использоваться для постепенной миграции. По умолчанию: `true`

**Примечание**: в настоящее время поддерживается только Vue. _Отправьте PR_, если вам нужна поддержка JSX. Если вы ищете подобное для Svelte, возможно, вам нужен режим [`svelte-scoped`](https://unocss.dev/integrations/svelte-scoped).

## Предшествующие разработки {#prior-arts}

Спасибо [eslint-plugin-unocss](https://github.com/devunt/eslint-plugin-unocss) от [@devunt](https://github.com/devunt).
