import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../package.json'

const ogUrl = 'https://dragomano.github.io/unocss-russian/'
const ogImage = `${ogUrl}og.png#1`
const title = 'UnoCSS'
const description = 'Атомарный CSS-движок с мгновенной генерацией по запросу'

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Подготовка', link: '/guide/' },
  { text: 'Почему UnoCSS?', link: '/guide/why' },
  { text: 'Пресеты', link: '/guide/presets' },
  { text: 'Сброс стилей', link: '/guide/style-reset' },
  { text: 'Файл конфигурации', link: '/guide/config-file' },
  { text: 'Извлечение и белый список', link: '/guide/extracting' },
]

const Configs: DefaultTheme.NavItemWithLink[] = [
  { text: 'Обзор', link: '/config/' },
  { text: 'Правила', link: '/config/rules' },
  { text: 'Варианты', link: '/config/variants' },
  { text: 'Шорткаты', link: '/config/shortcuts' },
  { text: 'Тема', link: '/config/theme' },
  { text: 'Экстракторы', link: '/config/extractors' },
  { text: 'Префлайты', link: '/config/preflights' },
  { text: 'Белый список', link: '/config/safelist' },
  { text: 'Слои', link: '/config/layers' },
  { text: 'Пресеты', link: '/config/presets' },
  { text: 'Трансформеры', link: '/config/transformers' },
  { text: 'Автодополнение', link: '/config/autocomplete' },
]

const Integrations: DefaultTheme.NavItemWithLink[] = [
  { text: 'Vite', link: '/integrations/vite' },
  { text: 'Nuxt', link: '/integrations/nuxt' },
  { text: 'Next', link: '/integrations/next' },
  { text: 'Astro', link: '/integrations/astro' },
  { text: 'Svelte Scoped', link: '/integrations/svelte-scoped' },
  { text: 'Webpack', link: '/integrations/webpack' },
  { text: 'Runtime', link: '/integrations/runtime' },
  { text: 'CLI', link: '/integrations/cli' },
  { text: 'PostCSS', link: '/integrations/postcss' },
  { text: 'ESLint', link: '/integrations/eslint' },
  { text: 'Расширение VS Code', link: '/integrations/vscode' },
  { text: 'Плагин JetBrains IDE', link: '/integrations/jetbrains' },
  { text: 'Поддержка LSP', link: '/integrations/lsp' },
]

const Presets: DefaultTheme.NavItemWithLink[] = [
  { text: 'Mini', link: '/presets/mini' },
  { text: 'Wind3', link: '/presets/wind3' },
  { text: 'Wind4', link: '/presets/wind4' },
  { text: 'Иконки', link: '/presets/icons' },
  { text: 'Режим атрибутов', link: '/presets/attributify' },
  { text: 'Типографика', link: '/presets/typography' },
  { text: 'Web-шрифты', link: '/presets/web-fonts' },
  { text: 'Режим совместимости', link: '/presets/legacy-compat' },
  { text: 'Режим тегов', link: '/presets/tagify' },
  { text: 'Конвертация rem в px', link: '/presets/rem-to-px' },
]

const Transformers: DefaultTheme.NavItemWithLink[] = [
  { text: 'Группа вариантов', link: '/transformers/variant-group' },
  { text: 'Директивы', link: '/transformers/directives' },
  { text: 'Компиляция классов', link: '/transformers/compile-class' },
  { text: 'Атрибуты без значений', link: '/transformers/attributify-jsx' },
]

const Extractors: DefaultTheme.NavItemWithLink[] = [
  { text: 'Экстрактор Pug', link: '/extractors/pug' },
  { text: 'Экстрактор MDC', link: '/extractors/mdc' },
  { text: 'Экстрактор Svelte', link: '/extractors/svelte' },
  { text: 'Экстрактор произвольных вариантов ', link: '/extractors/arbitrary-variants' },
]

const Tools: DefaultTheme.NavItemWithLink[] = [
  { text: 'Инспектор', link: '/tools/inspector' },
  { text: 'Core', link: '/tools/core' },
  { text: 'Автодополнение', link: '/tools/autocomplete' },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  { text: 'Интерактив', link: '/interactive/', target: '_blank' },
  { text: 'Песочница', link: '/play/', target: '_blank' },
  { text: 'Учебник', link: 'https://tutorial.unocss.dev/', target: '_blank' },
]

const Introes: DefaultTheme.NavItemWithLink[] = [
  { text: 'Команда', link: '/team' },
]

const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'Основы',
    items: [
      {
        text: 'Основы',
        items: Guides,
      },
    ],
    activeMatch: '^/guide/',
  },
  {
    text: 'Интеграции',
    items: [
      {
        text: 'Обзор',
        link: '/integrations/',
      },
      {
        text: 'Интеграции',
        items: Integrations,
      },
      {
        text: 'Примеры',
        link: '/integrations/#examples',
      },
    ],
    activeMatch: '^/integrations/',
  },
  {
    text: 'Конфигурация',
    items: [
      {
        text: 'Файл конфигурации',
        link: '/guide/config-file',
      },
      {
        text: 'Принципы',
        items: Configs,
      },
    ],
    activeMatch: '^/config/',
  },
  {
    text: 'Пресеты',
    items: [
      {
        text: 'Обзор',
        link: '/presets/',
      },
      {
        text: 'Пресеты от сообщества',
        link: 'https://github.com/unocss-community',
      },
      {
        text: 'Пресеты',
        items: Presets,
      },
      {
        text: 'Трансформеры',
        items: Transformers,
      },
      {
        text: 'Экстракторы',
        items: Extractors,
      },
    ],
    activeMatch: '^/(presets|transformers|extractors)/',
  },
  {
    text: 'Ресурсы',
    items: [
      ...Resources,
      {
        items: Introes,
      },
    ],
  },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Примечания к релизу',
        link: 'https://github.com/unocss/unocss/releases',
      },
      {
        text: 'Вклад',
        link: 'https://github.com/unocss/unocss/blob/main/.github/CONTRIBUTING.md',
      },
      {
        component: 'RainbowAnimationSwitcher',
        props: {
          text: 'Анимация радуги',
        },
      },
    ],
  },
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Основы',
    items: Guides,
  },
  {
    text: 'Интеграции',
    items: [
      {
        text: 'Обзор',
        link: '/integrations/',
      },
      ...Integrations,
      {
        text: 'Примеры',
        link: '/integrations/#examples',
      },
    ],
  },
  {
    text: 'Конфигурация',
    link: '/config/',
  },
  {
    text: 'Пресеты',
    link: '/presets/',
  },
]

const SidebarPresets: DefaultTheme.SidebarItem[] = [
  {
    text: 'Обзор',
    link: '/presets/',
  },
  {
    text: 'Пресеты',
    collapsed: false,
    items: Presets,
  },
  {
    text: 'Пресеты от сообщества',
    link: 'https://github.com/unocss-community',
  },
  {
    text: 'Трансформеры',
    collapsed: false,
    items: Transformers,
  },
  {
    text: 'Экстракторы',
    collapsed: false,
    items: Extractors,
  },
  {
    text: 'Другие пакеты',
    collapsed: false,
    items: Tools,
  },
]

const SidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: 'Конфигурация',
    collapsed: false,
    items: Configs,
  },
  {
    text: 'Файл конфигурации',
    link: '/guide/config-file',
  },
]

export default defineConfig({
  base: '/unocss-russian/',
  lang: 'ru',
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: 'https://unocss.dev/',
    }
  },
  title,
  titleTemplate: title,
  description,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@antfu7' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'search', type: 'application/opensearchdescription+xml', href: '/search.xml', title: 'UnoCSS' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/play/,
    /^\/interactive/,
    /:\/\/localhost/,
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    container: {
      tipLabel: 'СОВЕТ',
      warningLabel: 'ПРЕДУПРЕЖДЕНИЕ',
      dangerLabel: 'ОПАСНОСТЬ',
      infoLabel: 'ИНФОРМАЦИЯ',
    },
    codeTransformers: [
      transformerTwoslash({
        processHoverInfo: info => info.replace(/_unocss_core\./g, ''),
      }),
    ],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  vite: {
    plugins: [],
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: Nav,
    outline: { label: 'Содержание этой страницы' },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
    lastUpdatedText: 'Последнее обновление',
    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote: 'Но если не менять направление и продолжать искать, то можно оказаться там, где надо.',
      linkLabel: 'перейти на главную',
      linkText: 'Вернуться на главную'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            displayDetails: 'Отобразить подробный список',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Нет результатов для',
            footer: {
              selectText: 'выбрать',
              navigateText: 'перейти',
              closeText: 'закрыть'
            }
          }
        }
      }
    },
    sidebar: {
      '/guide/': SidebarGuide,
      '/integrations/': SidebarGuide,
      '/tools/': SidebarPresets,
      '/presets/': SidebarPresets,
      '/transformers/': SidebarPresets,
      '/extractors/': SidebarPresets,
      '/config/': SidebarConfig,
    },
    editLink: {
      pattern: 'https://github.com/dragomano/unocss-russian/edit/main/docs/:path',
      text: 'Предложить изменения для этой страницы',
    },
    socialLinks: [
      { icon: 'bluesky', link: 'https://bsky.app/profile/unocss.dev' },
      { icon: 'github', link: 'https://github.com/unocss/unocss' },
      { icon: 'discord', link: 'https://chat.antfu.me' },
    ],
    footer: {
      message: 'Распространяется по лицензии MIT.',
      copyright: '© 2021 — настоящее время, Anthony Fu',
    },
  },
})
