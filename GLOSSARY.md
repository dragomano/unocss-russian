# Глоссарий

Глоссарий терминов, используемых в данной документации (`docs/src`), и принятых для них переводов. Список составлен по фактическому употреблению и сверен с оригинальной документацией в репозитории [unocss/unocss](https://github.com/unocss/unocss/tree/main/docs).

## Принципы

- Названия пакетов, пресетов, трансформеров, экстракторов и процессоров, а также имена опций, типов и функций в коде не переводятся: `@unocss/preset-wind3`, `presetWind3`, `attributify`, `blocklist`, `safelist`, `matcher`, `theme`.
- Названия технологий и продуктов сохраняются в оригинальном написании: UnoCSS, Windi CSS, Tailwind CSS, Vite, Webpack, PostCSS, Iconify, Lightning CSS.
- При первом упоминании сложного термина используется русский вариант, а оригинал даётся в скобках: «сопоставитель (matcher)», «at-правило (at-rule)», «разрешённая (resolved) конфигурация», «режим наблюдения (Watch mode)».
- Заголовки страниц переводятся, но якоря (`{#...}`) остаются английскими — они должны совпадать с оригиналом.
- Термин «утилита» обозначает саму CSS-утилиту, а «служебный класс» — класс в разметке, который её включает.

## Основные понятия

| Английский | Русский | Примечание |
| --- | --- | --- |
| atomic CSS | атомарный CSS | Также «атомарный CSS-движок». |
| atomic CSS engine | движок атомарного CSS | В тексте также «CSS-движок». |
| engine | движок | Не «механизм». |
| core | ядро | В названии страницы пакета сохраняется «Core». |
| utility | утилита | Основной термин для единицы генерации CSS. |
| utility class | служебный класс | «Утилита» — когда речь о самой утилите. Вариант «утилитарный класс» в документации не используется. |
| rule | правило | Правило генерации CSS; правила ESLint также называются «правилами». |
| preset | пресет | Всегда транслитерация. |
| variant | вариант | Не «вариация». |
| shortcut | шорткат | «Сокращение» — только пояснение («объединяют несколько правил в одно сокращение»). |
| extractor | экстрактор | Не «извлекатель». |
| transformer | трансформер | |
| processor | процессор | Не «обработчик»; «обработчик» — только про функцию-обработчик. |
| preflight | префлайт | Множественное число — «префлайты». |
| layer | слой | Для CSS — «CSS-слой», «каскадный слой CSS». |
| theme | тема | «Объект темы», «тема по умолчанию». |
| configuration | конфигурация | Объект, файл, набор настроек. |
| config | конфигурация | Разговорное «конфиг» встречается один раз. |
| config file | файл конфигурации | Не «конфиг-файл». |
| option | опция | В конфигурации и API. В CLI — «параметр». |
| parameter | параметр | В CLI, таблицах опций и разделах «Параметры». |
| default | по умолчанию | «Дефолтный» встречается только в «дефолтный экстрактор». |
| on-demand | по запросу | «Принцип „on-demand“ (только по запросу)». |
| monorepo | монорепозиторий | |
| package | пакет | |
| dependency | зависимость | `devDependencies` не переводится. |

## Правила, шорткаты и варианты

| Английский | Русский | Примечание |
| --- | --- | --- |
| static rule | статическое правило | |
| dynamic rule | динамическое правило | |
| fully controlled rule | полностью управляемое правило | |
| multi-selector rule | правило с множественными селекторами | |
| CSS rules fallback | резервные правила CSS | |
| rules merging | объединение правил | О слиянии CSS-правил с одинаковым телом. |
| dynamic shortcut | динамический шорткат | |
| shorthand | сокращение | Только про опцию автодополнения `shorthands`; не путать с `shortcut`. |
| alias | псевдоним | |
| matcher | сопоставитель (matcher) | При первом упоминании; далее в коде — `matcher`. |
| matcher types | типы сопоставления | |
| selector | селектор | |
| arbitrary value | произвольное значение | |
| arbitrary variant | произвольный вариант | |
| variant group | группа вариантов | |
| prefix | префикс | |
| separator | разделитель | «Разделитель вариантов». |
| important | `!important` | Не переводится; «пометка `!important`». |
| canonical syntax | канонический синтаксис | |
| convention | соглашение | |

## Извлечение и генерация CSS

| Английский | Русский | Примечание |
| --- | --- | --- |
| extraction | извлечение | Не «экстракция». |
| extracting | извлечение | Название страницы — «Извлечение». |
| content sources | источники контента | |
| pipeline | конвейер | «Конвейер инструментов сборки», «конвейер сборки». |
| build tools | инструменты сборки | |
| filesystem | файловая система | |
| inline text | встроенный текст | |
| scanning | сканирование | |
| scan | сканировать | |
| static analysis | статический анализ | |
| magic comment | «магический комментарий» | Про `@unocss-include` и подобные. |
| safelist | белый список (safelist) | При первом упоминании — «белый список», затем допустим `safelist`. |
| blocklist | чёрный список (blocklist) | При первом упоминании — «чёрный список», затем допустим `blocklist`. |
| variant awareness | учёт вариантов | |
| merging behavior | поведение при слиянии | |
| pattern | шаблон | |
| glob pattern | glob-шаблон | |
| filter pattern | шаблон фильтрации | В тексте также «фильтры». |
| scale | шкала | «Шкала отступов», «значения шкалы». |
| scale value | значение шкалы | |
| raw unit | произвольная единица | В контексте blocklist — «произвольные единицы» (`px`, `rem`). |
| design system | дизайн-система | |
| design tokens | дизайн-токены | Также «токены дизайн-системы». |
| token | токен | И в извлечении классов, и в авторизации инспектора. |
| generated CSS | сгенерированный CSS | |
| output | вывод | «Вывод CSS»; файл — «выходной файл». |
| enforcement | принудительное использование | «Принудительно установить», «соблюдение соглашений». |
| restriction | ограничение | «Ограничение токенами дизайн-системы». |

## Конфигурация и API

| Английский | Русский | Примечание |
| --- | --- | --- |
| configuring | настройка | Название страницы — «Настройка UnoCSS». |
| setup | настройка | В интеграциях — «Настройка». |
| extendTheme | ExtendTheme | Название API сохраняется; в тексте — «расширить тему». |
| preprocess | предварительная обработка | |
| postprocess | постобработка | |
| preprocessor | препроцессор | Например, препроцессор Svelte. |
| hook | хук | |
| callback | колбэк | |
| resolve / resolved | разрешённая (resolved) | «Разрешённая конфигурация», «разрешённая тема». |
| override | переопределение | Также «перезапись» — когда значение заменяется целиком. |
| merge | объединение | Для коллекций и массивов. |
| deep merge | глубокое слияние | Для объектов, например темы. |
| mutate | мутировать | «Функции, мутирующие объект темы». |
| fallback | резервный | «Резервные правила CSS». |
| falsy | ложное (falsy) | |
| boolean | логическое / булево | «Булево значение»; тип `Boolean` не переводится. |
| argument | аргумент | «Первый аргумент правила». |
| attribute | атрибут | Не «свойство». |
| prop | проп | Проп компонента; не путать с «атрибутом». |
| property | свойство | CSS-свойство или свойство объекта. |
| key | ключ | «Ключ темы», «ключ конфигурации». |
| order | порядок | |
| priority | приоритет | |
| case-insensitive | регистронезависимый | |
| dot notation | точечная нотация | |
| placeholder | плейсхолдер | |
| entry point | точка входа | |
| input module | входной модуль | |
| output file | выходной файл | |
| working directory | рабочая директория | |
| root directory | корневая директория | |
| environment mode | режим окружения | Опция `envMode`. |
| dev mode | режим разработки | Также «режим `dev`». |
| build mode | режим `build` (сборка) | Пояснение «(сборка)» даётся при первом упоминании, в паре с «режимом `dev` (разработка)». |

## Слои, тема и CSS

| Английский | Русский | Примечание |
| --- | --- | --- |
| layer ordering | порядок слоёв | |
| CSS cascade layers | каскадные слои CSS | Название спецификации — CSS Cascade Layers. |
| breakpoint | контрольная точка | |
| media query | медиа-запрос | |
| CSS property | CSS-свойство | |
| declaration | декларация | «CSS-декларации». «Объявление» — только про объявления переменных. |
| custom property | пользовательское свойство CSS | |
| CSS variable | CSS-переменная | |
| stylesheet | таблица стилей | |
| reset | сброс | «Сброс стилей браузера». |
| pseudo-class | псевдокласс | |
| at-rule | at-правило (at-rule) | |
| directive | директива | CSS-директива, например `@apply`. |
| minification | минификация | |
| minify | минифицировать | |
| browser targets | целевые браузеры | |
| color space | цветовое пространство | |
| progressive enhancement | прогрессивное улучшение | |
| accessibility | доступность | |
| screen reader | программа чтения с экрана (скринридер) | |
| decorative | декоративный | |
| sticky hover | «залипающее» наведение | |
| hover | наведение | Вариант `hover:` не переводится. |
| raw CSS | «сырой» CSS | В кавычках, как в оригинале. |
| scope / scoped | область действия / изолированный (scoped) | «Изолированные стили», «изолированной (scoped)». |
| specificity | специфичность | |

## Пресеты и режимы

| Английский | Русский | Примечание |
| --- | --- | --- |
| Attributify | Attributify | Название пресета сохраняется. |
| attributify mode | режим атрибутов | |
| valueless attributify | атрибуты без значения | |
| Tagify | Tagify | Название пресета сохраняется. |
| tagify mode | режим тегов | |
| compile class | компиляция классов | «Трансформер компиляции классов». |
| icons preset | пресет иконок | |
| pure CSS icons | чистые CSS-иконки | |
| web fonts | веб-шрифты | |
| typography | типографика | |
| prose | prose | Имя класса сохраняется. |
| collection | коллекция | Коллекция иконок. |
| resolver | резолвер | |
| loader | загрузчик | |
| provider | провайдер | |
| custom fetch function | пользовательская функция загрузки | |
| customization | кастомизация | В контексте иконок; общая настройка — «настройка». |
| transform | трансформация / трансформировать | |
| cleanup | очистка | «Очистка пользовательских наборов иконок». |
| mode | режим | |
| self-referencing | ссылка на самого себя | «Ссылка префикса на самого себя». |
| conflict | конфликт | «Конфликты свойств». |
| injection | инъекция / внедрение | «Инъекции „сырого“ CSS»; в интеграциях — «внедрять». |
| inline imports | встраивание `@import()` | |
| serve locally | локальная раздача | «Локальная раздача шрифтов». |
| build output | итоговая сборка | «Добавление шрифтов в итоговую сборку». |
| emit | добавлять в сборку / выводить | Зависит от контекста. |
| legacy compat | Legacy Compat | Название пресета сохраняется; «обратная совместимость». |
| rem-to-px | rem в px | Название пресета — «Пресет rem в px». |
| mini | Mini | Название пресета сохраняется. |
| wind3 / wind4 | Wind3 / Wind4 | Названия пресетов сохраняются. |

## Сборка, инструменты и интеграции

| Английский | Русский | Примечание |
| --- | --- | --- |
| build | сборка | Глагол — «собирать». |
| production | продакшен | «Продакшен-сборка»; в заголовке — «Продакшен». |
| development | разработка | |
| production build | продакшен-сборка | |
| bundler | бандлер | Не «сборщик». |
| bundle | бандл | «CSS-бандл». |
| chunk | чанк | |
| hash | хеш | |
| dev server | dev-сервер | |
| HMR | HMR | Не переводится. |
| watch mode | режим наблюдения (Watch mode) | |
| runtime | рантайм | |
| CDN | CDN | Не переводится. |
| FOUC | FOUC | Не переводится; даётся расшифровка «мигание нестилизованного контента». |
| MPA | MPA | Не переводится. |
| isomorphic | изоморфный | |
| devframe | devframe | Не переводится. |
| dock | док | «Док Vite DevTools». |
| REPL | REPL | Не переводится. |
| snapshot | снимок | «Снимок данных инспектора». |
| standalone | отдельный | «Отдельный URL». |
| flag | флаг | Флаг CLI. |
| CLI | CLI | Не переводится. |
| command line interface | интерфейс командной строки | |
| IDE | IDE | Не переводится. |
| LSP | LSP | Не переводится. |
| language server | языковой сервер | |
| integration | интеграция | |
| plugin | плагин | |
| extension | расширение | Расширение редактора. |
| module | модуль | |
| framework | фреймворк | |
| meta-framework | мета-фреймворк | |
| web components | веб-компоненты | |
| Shadow DOM | Shadow DOM | Не переводится. |
| single-file component (SFC) | однофайловый компонент | |
| component | компонент | |
| UI | UI | Не переводится. |
| tooling | инструменты | |
| inspector | инспектор | |
| playground | песочница | |
| interactive | интерактив | «Интерактивная документация». |
| Marketplace | Marketplace | Не переводится. |
| Issue Tracker | Issue Tracker | Не переводится. |
| bug report | сообщение об ошибке | В заголовках — «Сообщения об ошибках». |
| feature request | запросы функций | В заголовках — «Запросы функций» и «Запросы новых функций». |
| prior arts | предшествующие разработки | |

## Документация

| Английский | Русский | Примечание |
| --- | --- | --- |
| installation | установка | |
| usage | использование | |
| features | возможности | |
| notes | примечания | |
| caveats | предостережения | |
| credits | благодарности | |
| acknowledgement | благодарности | |
| license | лицензия | |
| motivations | мотивация | |
| presentation | введение | |
| support status | статус поддержки | |
| prerequisite | предварительные требования | |
| built-in features | встроенные возможности | |
| highlights | особенности | |
| example | пример | |
| source code | исходный код | |
| source file | исходный файл | |
| rewrite | перезапись | «Перезапись исходных файлов». |
| splitting | разделение | «Разделение CSS». |
| debugging | отладка | |
| inspection | инспектирование | |
| deprecated | устаревший | |
| experimental | экспериментальный | |
| breaking change | критическое изменение | |
| semantic versioning | семантическое версионирование | |
| patch version | патч-версия | |
| migration | миграция | |
| community | сообщество | |
| official | официальный | |
| third-party | сторонний | |

## Непереводимые названия и обозначения

Сохраняются без перевода:

- **Продукты и языки:** UnoCSS, Windi CSS, Tailwind CSS, Iconify, Lightning CSS, Vite, Webpack, Rollup, Rolldown, PostCSS, ESLint, Nuxt, Next.js, Astro, Svelte, SvelteKit, Vue, React, Preact, SolidJS, Elm, Marko, VS Code, Zed, JetBrains, Twoslash, VitePress, StackBlitz.
- **Пакеты и API:** `@unocss/*`, `presetWind3`, `presetWind4`, `presetMini`, `presetAttributify`, `presetIcons`, `presetWebFonts`, `presetTypography`, `presetRemToPx`, `presetLegacyCompat`, `transformerDirectives`, `transformerVariantGroup`, `transformerCompileClass`, `transformerAttributifyJsx`, `extractorSplit`, `createGenerator`, `getLayer`, `setLayer`.
- **Опции и ключи конфигурации:** `rules`, `shortcuts`, `theme`, `variants`, `extractors`, `preflights`, `layers`, `presets`, `transformers`, `processors`, `blocklist`, `safelist`, `content`, `envMode`, `important`, `prefix`, `separator`.
- **Аббревиатуры:** CDN, HMR, FOUC, MPA, LSP, IDE, CLI, API, DSL, REPL, UI, DOM, SFC.
- **Названия режимов и пресетов:** Attributify, Tagify, Mini, Wind3, Wind4, Legacy Compat, Core, Runtime, Svelte Scoped, Compiled Class, Variant Group.
