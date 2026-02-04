---
layout: home
title: "UnoCSS: Атомарный CSS-движок с мгновенной генерацией по запросу"

hero:
  image:
    src: /logo.svg
    alt: UnoCSS
  name: "UnoCSS"
  text: Атомарный CSS-движок с мгновенной генерацией по запросу
  tagline: Настраиваемый · Мощный · Быстрый · Приятный
  actions:
    - theme: brand
      text: Подготовка
      link: /guide/
    - theme: alt
      text: Интерактив
      link: https://unocss.dev/interactive/
      target: _blank
    - theme: alt
      text: Песочница
      link: https://unocss.dev/play/
      target: _blank
    - theme: alt
      text: Учебник
      link: https://tutorial.unocss.dev/
      target: _blank

features:
  - icon: <span class="i-carbon:ibm-toolchain"></span>
    title: Полностью настраиваемый
    details: "В ядре нет встроенных утилит — все возможности приходят через пресеты."
    link: /guide/
    linkText: Начать работу
  - icon: <span class="i-carbon-meter-alt"></span>
    title: Мгновенный
    details: "Без парсинга, без AST, без сканирования. В 5 раз быстрее, чем Windi CSS или Tailwind CSS JIT."
  - icon: <span class="i-carbon-wind-gusts"></span>
    title: Лёгкий
    details: "Без зависимостей и дружелюбен к браузеру: ~6 КБ в min+brotli"
  - icon: <span class="i-carbon-ibm-cloud-transit-gateway"></span>
    title: Богатая интеграция
    details: "Отличная поддержка Vite, Webpack, PostCSS, CLI, VS Code, ESLint и многих других."
    link: /integrations/vite
    linkText: "Подробнее"
  - icon: <span class="i-carbon-asset"></span>
    title: Шорткаты
    details: "Динамическое создание алиасов и группировка утилит"
    link: /config/shortcuts
    linkText: "Настройка и использование"
  - icon: <span class="i-carbon:code"></span>
    title: Режим атрибутов
    details: "Группировка утилит прямо в атрибутах HTML"
    link: /presets/attributify
    linkText: "@unocss/preset-attributify"
  - icon: <span class="i-carbon-face-wink hover:i-carbon-face-satisfied"></span>
    title: Чистые CSS-иконки
    details: "Любую иконку можно использовать с помощью единственного класса"
    link: /presets/icons
    linkText: "@unocss/preset-icons"
  - icon: <span class="i-carbon:group-objects"></span>
    title: Группы вариантов
    details: "Сокращённая запись для групп утилит с общими префиксами"
    link: /transformers/variant-group
    linkText: "@unocss/transformer-variant-group"
  - icon: <span class="i-carbon:at"></span>
    title: Директивы CSS
    details: "Переиспользование утилит в CSS через директиву @apply"
    link: /transformers/directives
    linkText: "@unocss/transformer-directives"
  - icon: <span class="i-carbon-tree-view-alt scale-x--100"></span>
    title: Режим компиляции классов
    details: "Объединяет несколько классов в один во время сборки"
    link: /transformers/compile-class
    linkText: "@unocss/transformer-compile-class"
  - icon: <span class="i-carbon:inspection"></span>
    title: Инспектор
    details: "Интерактивный просмотр и отладка стилей"
    link: /tools/inspector
    linkText: "@unocss/inspector"
  - icon: <span class="i-carbon:executable-program"></span>
    title: Сборка через CDN в рантайме
    details: "Использование UnoCSS всего одной строкой импорта через CDN"
    link: /integrations/runtime
    linkText: "@unocss/runtime"
---
