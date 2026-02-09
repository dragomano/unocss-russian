---
title: UnoCSS Svelte Scoped
description: Плагин Svelte Scoped для Vite и препроцессор Svelte для UnoCSS.
outline: deep
---

# Svelte Scoped

Помещает сгенерированный CSS для служебных стилей каждого компонента Svelte непосредственно в блок `<style>` этого компонента, вместо глобального файла CSS.

Этот компонент:

```svelte
<div class="mb-1" />
```

преобразуется в:

```svelte
<div class="uno-ei382o" />

<style>
  :global(.uno-ei382o) {
    margin-bottom: 0.25rem;
  }
</style>
```

## Когда использовать {#when-to-use}

| Сценарий использования |     | Описание                                                                                                                                                 | Какой пакет использовать                                 |
| ---------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Небольшие приложения   | :x: | Удобнее иметь 1 глобальный CSS-файл. Используйте обычный плагин Vite для [Svelte](/integrations/vite#svelte)/[SvelteKit](/integrations/vite#sveltekit).  | [unocss/vite](/integrations/vite#svelte)                 |
| Крупные приложения     | ✅  | Svelte Scoped поможет вам избежать постоянно растущего глобального CSS-файла.                                                                            | [@unocss/svelte-scoped/vite](#vite-plugin)               |
| Библиотека компонентов | ✅  | Сгенерированные стили помещаются непосредственно в собранные компоненты, без необходимости использования UnoCSS в конвейере сборки использующего их приложения. | [@unocss/svelte-scoped/preprocess](#svelte-preprocessor) |

## Как это работает {#how-it-works}

Обычная настройка UnoCSS/Tailwind CSS помещает служебные стили в глобальный CSS-файл с правильным порядком. В отличие от этого, Svelte Scoped распределяет ваши стили по множеству произвольно упорядоченных CSS-файлов компонентов Svelte. Однако он должен сохранять служебные стили глобальными, чтобы они могли учитывать контекст, что необходимо для таких задач, как поддержка RTL и других [сценариев использования](#context-aware), перечисленных ниже. Это создает проблему, которая решается с помощью использования обёртки `:global()` в Svelte, чтобы отказаться от стандартного метода хеширования CSS в Svelte и вместо этого использовать хеш, основанный на имени файла + имени класса (классов), для компиляции уникальных имён классов, которые могут быть сделаны глобальными без конфликтов стилей.

## Использование {#usage}

Поскольку Svelte Scoped переписывает имена ваших служебных классов, вы ограничены в том, где можете их писать:

| Поддерживаемый синтаксис     | Пример                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| Атрибут `class`              | `<div class="mb-1" />`                                                                      |
| Директива `class`            | `<div class:mb-1={condition} />`                                                            |
| Сокращение директивы `class` | `<div class:logo />`                                                                        |
| Проп `class`                 | `<Button class="mb-1" />`                                                                   |
| Аналог `clsx`                | `<div class={["mb-1", { logo, 'font-bold': isBold() }, isUnderlined() && 'underline' ]} />` |

Svelte Scoped разработан как прямая замена для проекта, использующего служебные стили. В связи с этим, выражения внутри атрибутов `class` также поддерживаются (например, `<div class="mb-1 {foo ? 'mr-1' : 'mr-2'}" />`), но мы рекомендуем в дальнейшем использовать синтаксис `clsx`. Обратите внимание, что если вы использовали имена классов другими способами, например, помещая их в блок `<script>` или используя режим атрибутов, вам потребуется предпринять дополнительные шаги перед использованием Svelte Scoped. Вы можете использовать опцию `safelist`, а также ознакомиться с разделом [поддержка пресетов](#presets-support) ниже для получения дополнительных советов.

### Учёт контекста {#context-aware}

Хотя стили распределены по компонентам Svelte вашего приложения, они всё равно остаются глобальными классами и будут работать во взаимосвязи с элементами, находящимися за пределами их конкретных компонентов. Вот несколько примеров:

#### Зависимость от родителя {#parent-dependent}

Классы, зависящие от атрибутов, найденных в родительском компоненте:

```svelte
<div class="dark:mb-2 rtl:right-0"></div>
```

преобразуются так:

```svelte
<div class="uno-3hashz"></div>

<style>
  :global(.dark .uno-3hashz) {
    margin-bottom: 0.5rem;
  }
  :global([dir="rtl"] .uno-3hashz) {
    right: 0rem;
  }
</style>
```

#### Влияние на дочерние элементы {#children-influencing}

Вы можете добавить отступы между 3 дочерними элементами, некоторые из которых находятся в отдельных компонентах:

```svelte
<div class="space-x-1">
  <div>Статус: онлайн</div>
  <Button>FAQ</Button>
  <Button>Войти</Button>
</div>
```

преобразуется так:

```svelte
<div class="uno-7haszz">
  <div>Статус: онлайн</div>
  <Button>FAQ</Button>
  <Button>Войти</Button>
</div>

<style>
  :global(.uno-7haszz > :not([hidden]) ~ :not([hidden])) {
    --un-space-x-reverse: 0;
    margin-left: calc(0.25rem * calc(1 - var(--un-space-x-reverse)));
    margin-right: calc(0.25rem * var(--un-space-x-reverse));
  }
</style>
```

#### Передача классов дочерним компонентам {#passing-classes-to-child-components}

Вы можете добавить проп `class` в компонент, чтобы разрешить передачу пользовательских классов везде, где этот компонент используется.

```svelte
<Button class="px-2 py-1">Войти</Button>
```

преобразуется так:

```svelte
<Button class="uno-4hshza">Войти</Button>

<style>
  :global(.uno-4hshza) {
    padding-left:0.5rem;
    padding-right:0.5rem;
    padding-top:0.25rem;
    padding-bottom:0.25rem;
  }
</style>
```

Простой способ применить класс в принимающем компоненте — добавить его к элементу, используя `{$$props.class}`, например: `<div class="{$$props.class} foo bar" />`.

### Директивы apply {#apply-directives}

Вы можете использовать директивы apply внутри блоков `<style>` с помощью `--at-apply`, `@apply` или пользовательского значения, заданного с помощью опции `applyVariables`.

Svelte Scoped даже корректно обрабатывает классы, зависящие от контекста, такие как `dark:text-white`, с которыми обычный пакет [`@unocss/transformer-directives`](/transformers/directives) не может справиться должным образом, так как он не был создан специально для блоков стилей Svelte. Например, с Svelte Scoped этот компонент:

```svelte
<div />

<style>
  div {
    --at-apply: rtl:ml-2;
  }
</style>
```

преобразуется так:

```svelte
<div />

<style>
  :global([dir=\\"rtl\\"]) div {
    margin-right: 0.5rem;
  }
</style>
```

Чтобы `rtl:ml-2` работал правильно, селектор `[dir="rtl"]` оборачивается в `:global()`, чтобы компилятор Svelte не удалил его автоматически, так как у компонента нет элемента с таким атрибутом. Однако `div` не может быть включен в обёртку `:global()`, потому что этот стиль тогда повлиял бы на каждый `div` в вашем приложении.

### Другие директивы блока стилей {#other-style-block-directives}

Использование [theme()](https://unocss.dev/transformers/directives#theme) также поддерживается, но [@screen](https://unocss.dev/transformers/directives#screen) — **нет**.

## Плагин Vite {#vite-plugin}

В приложениях Svelte или SvelteKit внедряйте сгенерированные стили непосредственно в ваши компоненты Svelte, помещая минимально необходимые стили в глобальную таблицу стилей. Ознакомьтесь с [примером SvelteKit](https://github.com/unocss/unocss/tree/main/examples/sveltekit-scoped) в Stackblitz:

[![Открыть в StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/unocss/unocss/tree/main/examples/sveltekit-scoped)

### Установка {#install}

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/svelte-scoped
```

```bash [yarn]
yarn add -D unocss @unocss/svelte-scoped
```

```bash [npm]
npm install -D unocss @unocss/svelte-scoped
```

```bash [bun]
bun add -D unocss @unocss/svelte-scoped
```

:::

#### Добавление плагина {#add-plugin}

Добавьте `@unocss/svelte-scoped/vite` в конфигурацию Vite:

```ts [vite.config.ts]
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      // injectReset: '@unocss/reset/normalize.css', // см. определение типов для всех включенных вариантов сброса или узнайте, как передать собственный
      // ...другие опции Svelte Scoped
    }),
    sveltekit(),
  ],
})
```

#### Добавление файла конфигурации {#add-config-file}

Настройте файл `uno.config.ts`, как описано [ниже](#configuration).

#### Глобальные стили {#global-styles}

Хотя почти все стили размещаются в отдельных компонентах, есть несколько, которые должны быть помещены в глобальную таблицу стилей: префлайты, safelist (белый список) и опциональный сброс (если вы используете опцию `injectReset`).

Добавьте плейсхолдер `%unocss-svelte-scoped.global%` в тег `<head>`. В Svelte это `index.html`. В SvelteKit это будет в `app.html` перед `%sveltekit.head%`:

<!-- eslint-skip -->

```html [index.html]
<head>
  <!-- ... -->
  <title>SvelteKit с использованием UnoCSS Svelte Scoped</title>
  %unocss-svelte-scoped.global%
  %sveltekit.head%
</head>
```

## Препроцессор Svelte {#svelte-preprocessor}

Используйте служебные стили для создания библиотеки компонентов, которая не зависит от включения сопутствующего CSS-файла, используя препроцессор для размещения сгенерированных стилей непосредственно в собранных компонентах. Ознакомьтесь с [примером библиотеки SvelteKit](https://github.com/unocss/unocss/tree/main/examples/sveltekit-preprocess) в Stackblitz:

[![Открыть в StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/unocss/unocss/tree/main/examples/sveltekit-preprocess)

### Установка

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/svelte-scoped
```

```bash [yarn]
yarn add -D unocss @unocss/svelte-scoped
```

```bash [npm]
npm install -D unocss @unocss/svelte-scoped
```

```bash [bun]
bun add -D unocss @unocss/svelte-scoped
```

:::

#### Добавление препроцессора {#add-preprocessor}

Добавьте `@unocss/svelte-scoped/preprocess` в конфигурацию Svelte:

```ts [svelte.config.js]
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from '@unocss/svelte-scoped/preprocess'

const config = {
  preprocess: [
    vitePreprocess(),
    UnoCSS({
      // ... параметры препроцессора
    }),
  ],
  // другая конфигурация Svelte
}
```

#### Не объединяйте имена классов в разработке {#don-t-combine-class-names-in-development}

При использовании Svelte Scoped в обычном приложении плагин Vite автоматически определяет режим `dev` (разработка) или `build` (сборка). В режиме разработки классы остаются раздельными и хешируются на месте для удобства включения/выключения в инструментах разработчика вашего браузера. `class="mb-1 mr-1"` превратится во что-то вроде `class="_mb-1_9hwi32 _mr-1_84jfy4`. В продакшене они будут скомпилированы в одно имя класса с использованием желаемого префикса (по умолчанию `uno-`) и хеша, основанного на имени файла + именах классов, например `class="uno-84dke3`.

Если вы хотите получить такое же поведение при использовании препроцессора, вы должны вручную установить опцию `combine` в зависимости от окружения. Один из способов сделать это — установить [cross-env](https://www.npmjs.com/package/cross-env) и обновить ваш dev-скрипт следующим образом:

```
"dev": "cross-env NODE_ENV=development vite dev"
```

Затем скорректируйте ваш `svelte.config.js`:

```diff
+const prod = process.env.NODE_ENV !== 'development'
const config = {
  preprocess: [
    vitePreprocess(),
    UnoCSS({
+      combine: prod,
    }),
  ],
}
```

#### Добавление файла конфигурации {#add-config-file-1}

Настройте файл `uno.config.ts`, как описано [ниже](#configuration).

### Префлайты {#preflights}

При использовании препроцессора у вас есть возможность включить префлайты в конкретные компоненты, где они необходимы, добавив `uno-preflights` в качестве атрибута стиля.

```html
<style uno-preflights></style>
```

Любые специальные префлайты, начинающиеся с точки, такие как `.prose :where(a):not(:where(.not-prose, .not-prose *))`, будут обёрнуты в `:global()`, чтобы избежать автоматического удаления компилятором Svelte.

_Добавление префлайтов в отдельные компоненты необязательно, если ваши классы не зависят от них, или если ваши собранные компоненты используются только в приложениях, которые уже включают префлайты._

### Белый список {#safelist}

При использовании препроцессора у вас есть возможность включить классы из белого списка в компонент, добавив `uno-safelist` в качестве атрибута стиля.

```html
<style uno-safelist></style>
```

Стили из белого списка будут обёрнуты в `:global()`, чтобы избежать их автоматического удаления компилятором Svelte.

## Конфигурация {#configuration}

Поместите настройки UnoCSS в файл `uno.config.ts`:

```ts [uno.config.ts]
import { defineConfig } from 'unocss'

export default defineConfig({
  // параметры ...UnoCSS
})
```

Экстракторы не поддерживаются из-за различий между обычным глобальным использованием UnoCSS и использованием в Svelte Scoped. Пресеты и трансформеры поддерживаются, как описано в следующих разделах. Все остальные подробности см. в [Файле конфигурации](/guide/config-file) и [Справочнике по конфигурации](/config/).

### Поддержка пресетов {#presets-support}

Из-за того, что несколько необходимых стилей находятся в глобальной таблице стилей, а всё остальное содержится в каждом компоненте по мере необходимости, пресеты нужно рассматривать в индивидуальном порядке:

| Пресет                                                                                                                                                                                                                                                                                                                                                                      | Поддержка | Примечания                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ~~[@unocss/preset-uno](https://unocss.dev/presets/uno)~~, [@unocss/preset-mini](https://unocss.dev/presets/mini), [@unocss/preset-wind3](https://unocss.dev/presets/wind3), [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages-presets/preset-icons), [@unocss/web-fonts](https://github.com/unocss/unocss/tree/main/packages-presets/preset-icons) | ✅        | Эти и все плагины сообщества (например, [unocss-preset-forms](https://github.com/Julien-R44/unocss-preset-forms)), которые полагаются только на правила/варианты/префлайты, будут работать.                                                                                                                                                                                                            |
| [@unocss/preset-typography](https://github.com/unocss/unocss/tree/main/packages-presets/preset-typography)                                                                                                                                                                                                                                                                  | ✅        | Из-за того, как этот пресет добавляет наборы правил в ваши префлайты, вы должны добавить класс `prose` в белый список (safelist) при использовании этого пресета, иначе префлайты никогда не сработают. Все остальные классы из этого пресета, например `prose-pink`, могут быть изолированы в компоненте. <hr/> После `v66.5.0` стили `prose` были переработаны в `rule` (правило), что означает, что вам больше не нужно добавлять этот класс в белый список. |
| [@unocss/preset-rem-to-px](https://github.com/unocss/unocss/tree/main/packages-presets/preset-rem-to-px)                                                                                                                                                                                                                                                                    | ✅        | Этот и все подобные пресеты, которые только модифицируют вывод стилей, будут работать.                                                                                                                                                                                                                                                                                                                  |
| [@unocss/preset-attributify](https://github.com/unocss/unocss/tree/main/packages-presets/preset-attributify)                                                                                                                                                                                                                                                                | -         | Пресет работать не будет. Вместо этого используйте плагин Vite [unplugin-attributify-to-class](https://github.com/MellowCo/unplugin-attributify-to-class) (`attributifyToClass({ include: [/\.svelte$/]})`) перед плагином Svelte Scoped для Vite.                                                                                                                      |
| [@unocss/preset-tagify](https://github.com/unocss/unocss/tree/main/packages-presets/preset-tagify)                                                                                                                                                                                                                                                                          | -         | Пресеты, добавляющие пользовательские экстракторы, работать не будут. Создайте препроцессор для конвертации `<text-red>Hi</text-red>` в `<span class="text-red">Hi</span>`, затем создайте PR, чтобы добавить ссылку сюда.                                                                                                                                                                              |

Для других пресетов: если они не полагаются на традиционное использование `class="..."`, вам нужно сначала преобразовать эти имена классов в атрибут `class="..."`. Если они добавляют пресеты, подобные классу `.prose` в типографике, вам нужно поместить классы, вызывающие добавление пресета, в ваш белый список.

### Поддержка трансформеров {#transformers-support}

Трансформеры поддерживаются для ваших CSS-файлов (css|postcss|sass|scss|less|stylus|styl). Чтобы использовать их, добавьте трансформер в опцию `cssFileTransformers` в вашем `vite.config.ts`:

```ts [vite.config.ts]
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  plugins: [
    UnoCSS({
      cssFileTransformers: [transformerDirectives()],
    }),
    sveltekit(),
  ],
})
```

::: info
Трансформеры не поддерживаются в компонентах Svelte из-за особенностей работы Svelte Scoped.
:::

## Изолированные служебные классы раскрывают творческий потенциал {#scoped-utility-classes-unleash-creativity}

Несколько советов о том, когда стоит использовать изолированные стили: если вы дошли до той стадии разработки крупного проекта, когда каждый раз, добавляя класс вроде `.md:max-w-[50vw]` (который, как вы знаете, используется всего один раз), вы внутренне сжимаетесь, чувствуя, как раздувается ваша глобальная таблица стилей — попробуйте этот пакет. Страх использовать именно тот класс, который нужен, ограничивает творчество. Конечно, можно использовать `--at-apply: md:max-w-[50vw]` в блоке стилей, но это утомительно, да и видеть стили в контексте (в HTML) бывает полезно. Кроме того, если вы захотите использовать в проекте большое разнообразие иконок, вы начнете ощущать тяжесть их добавления в глобальную таблицу стилей. Когда каждый компонент сам несет нагрузку своих стилей и иконок, вы можете продолжать расширять проект, не задумываясь о целесообразности каждого нового добавления с точки зрения производительности.

## Лицензия {#license}

- Лицензия MIT &copy; 2022-настоящее время [Jacob Bowdoin](https://github.com/jacob-8)
