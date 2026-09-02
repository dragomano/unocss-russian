import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createTwoslasher } from '@unocss/twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'

const require = createRequire(import.meta.url)
const unoPkgPath = require.resolve('unocss/package.json')
const { version } = JSON.parse(readFileSync(unoPkgPath, 'utf-8'))

const ogUrl = 'https://dragomano.github.io/unocss-russian/'
const ogImage = `${ogUrl}og.png#1`
const title = 'UnoCSS'
const description = 'Атомарный CSS-движок с мгновенной генерацией по запросу'

type LinkItem = {
  text: string
  link: string
  target?: string
}

const Guides: LinkItem[] = [
  { text: 'Подготовка', link: '/guide/' },
  { text: 'Почему UnoCSS?', link: '/guide/why' },
  { text: 'Пресеты', link: '/guide/presets' },
  { text: 'Сброс стилей', link: '/guide/style-reset' },
  { text: 'Файл конфигурации', link: '/guide/config-file' },
  { text: 'Извлечение и белый список', link: '/guide/extracting' },
]

const Configs: LinkItem[] = [
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
  { text: 'Процессоры', link: '/config/processors' },
  { text: 'Автодополнение', link: '/config/autocomplete' },
]

const Integrations: LinkItem[] = [
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
  { text: 'Twoslash', link: '/integrations/twoslash' },
  { text: 'Поддержка LSP', link: '/integrations/lsp' },
  { text: 'Расширение VS Code', link: '/integrations/vscode' },
  { text: 'Плагин JetBrains IDE', link: '/integrations/jetbrains' },
  { text: 'Расширение Zed', link: '/integrations/zed' },
]

const Presets: LinkItem[] = [
  { text: 'Mini', link: '/presets/mini' },
  { text: 'Wind3', link: '/presets/wind3' },
  { text: 'Wind4', link: '/presets/wind4' },
  { text: 'Иконки', link: '/presets/icons' },
  { text: 'Режим атрибутов', link: '/presets/attributify' },
  { text: 'Типографика', link: '/presets/typography' },
  { text: 'Веб-шрифты', link: '/presets/web-fonts' },
  { text: 'Режим совместимости', link: '/presets/legacy-compat' },
  { text: 'Режим тегов', link: '/presets/tagify' },
  { text: 'Конвертация rem в px', link: '/presets/rem-to-px' },
]

const Transformers: LinkItem[] = [
  { text: 'Группа вариантов', link: '/transformers/variant-group' },
  { text: 'Директивы', link: '/transformers/directives' },
  { text: 'Компиляция классов', link: '/transformers/compile-class' },
  { text: 'Атрибуты без значений', link: '/transformers/attributify-jsx' },
]

const Extractors: LinkItem[] = [
  { text: 'Экстрактор Pug', link: '/extractors/pug' },
  { text: 'Экстрактор MDC', link: '/extractors/mdc' },
  { text: 'Экстрактор Svelte', link: '/extractors/svelte' },
  { text: 'Экстрактор произвольных вариантов ', link: '/extractors/arbitrary-variants' },
]

const Processors: LinkItem[] = [
  { text: 'Lightning CSS', link: '/processors/lightningcss' },
]

const Tools: LinkItem[] = [
  { text: 'Инспектор', link: '/tools/inspector' },
  { text: 'Core', link: '/tools/core' },
  { text: 'Автодополнение', link: '/tools/autocomplete' },
]

const Resources: LinkItem[] = [
  { text: 'Интерактив', link: '/interactive/', target: '_blank' },
  { text: 'Песочница', link: '/play/', target: '_blank' },
  { text: 'Учебник', link: 'https://tutorial.unocss.dev/', target: '_blank' },
]

const Introes: LinkItem[] = [
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
      {
        text: 'Процессоры',
        items: Processors,
      },
    ],
    activeMatch: '^/(presets|transformers|extractors|processors)/',
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
    text: 'Процессоры',
    collapsed: false,
    items: Processors,
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
    ['link', { rel: 'icon', href: '/unocss-russian/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/unocss-russian/favicon.ico', type: 'image/png', sizes: '16x16' }],
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
    ['link', { rel: 'search', type: 'application/opensearchdescription+xml', href: '/unocss-russian/search.xml', title: 'UnoCSS' }],
    [
      'script',
      {},
      `(function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'vj4j68v9ve')`,
    ],
  ],
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/play/,
    /^\/interactive/,
    /:\/\/localhost/,
  ],

  markdown: {
    languages: ['html', 'vue'],
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
      transformerTwoslash({
        langs: ['vue', 'html'],
        twoslasher: createTwoslasher(),
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
    lastUpdated: {
      text: 'Последнее обновление',
    },
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
      '/processors/': SidebarPresets,
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
