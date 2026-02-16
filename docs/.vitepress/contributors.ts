import type { DefaultTheme } from 'vitepress'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  x?: string
  bluesky?: string
  webtools?: string
  discord?: string
  youtube?: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
  /**
   * Whether the member is currently active in the team.
   *
   * @default true
   */
  active?: boolean
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.webtools)
    tm.links.push({ icon: 'mastodon', link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}` })
  if (tm.discord)
    tm.links.push({ icon: 'discord', link: tm.discord })
  if (tm.youtube)
    tm.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${tm.youtube}` })
  if (tm.x)
    tm.links.push({ icon: 'x', link: `https://x.com/${tm.x}` })
  if (tm.bluesky)
    tm.links.push({ icon: 'bluesky', link: `https://bsky.app/profile/${tm.bluesky}` })
  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: 'https://github.com/antfu.png',
    name: 'Anthony Fu',
    github: 'antfu',
    webtools: 'antfu',
    youtube: 'antfu',
    discord: 'https://chat.antfu.me',
    x: 'antfu7',
    bluesky: 'antfu.me',
    sponsor: 'https://github.com/sponsors/antfu',
    title: 'Фанатичный адепт открытого кода, работает в',
    org: 'NuxtLabs',
    orgLink: 'https://nuxtlabs.com/',
    desc: 'Член основной команды Vite и Vue',
  },
  {
    avatar: 'https://github.com/chu121su12.png',
    name: 'Saya',
    github: 'chu121su12',
    title: 'Программист',
    active: false,
  },
  {
    avatar: 'https://github.com/zyyv.png',
    name: 'Chris',
    github: 'zyyv',
    x: 'chris_zyyv',
    bluesky: 'zyyv.dev',
    title: 'Не взирая на прошлое, не спрашивай о будущем.',
    desc: 'Создатель @Onu-UI, сообщества @UnoCSS',
  },
  {
    avatar: 'https://github.com/sibbng.png',
    name: 'sibbng',
    github: 'sibbng',
    x: 'sibbng',
    title: 'Дизайнер / Разработчик',
    active: false,
  },
  {
    avatar: 'https://github.com/userquin.png',
    name: 'Joaquín Sánchez',
    github: 'userquin',
    webtools: 'userquin',
    bluesky: 'userquin.bsky.social',
    title: 'Фулстек и Android разработчик',
    desc: 'Фанатичный последователь Vite',
  },
  {
    avatar: 'https://github.com/QiroNT.png',
    name: 'Chino Moca',
    github: 'QiroNT',
    x: 'QiroNT',
    title: 'Баланс и компромиссы',
    active: false,
  },
  {
    avatar: 'https://github.com/johannschopplich.png',
    name: 'Johann Schopplich',
    github: 'johannschopplich',
    title: 'Фулстек-разработчик',
    desc: 'В прошлом фармацевт',
    active: false,
  },
  {
    avatar: 'https://github.com/ydcjeff.png',
    name: 'Jeff Yang',
    github: 'ydcjeff',
    x: 'ydcjeff',
    active: false,
  },
  {
    avatar: 'https://github.com/sudongyuer.png',
    name: 'Tsuki Su',
    github: 'sudongyuer',
    x: 'sudongyuer',
    title: 'Рьяный адепт открытого кода, фулстек-разработчик и начинающий дизайнер',
    desc: 'Ранее работал в Tencent, сейчас открывает свой бизнес',
    active: false,
  },
  {
    avatar: 'https://github.com/jacob-8.png',
    name: 'Jacob Bowdoin',
    github: 'jacob-8',
    x: 'jacobbowdoin',
    title: 'Svelte, i18n',
    org: 'Polylingual Development',
    orgLink: 'https://polylingual.dev/',
  },
  {
    avatar: 'https://github.com/Dunqing.png',
    name: 'Dunqing',
    github: 'Dunqing',
    x: 'dunqingg',
    title: 'Увлечен открытым исходным кодом',
    active: false,
  },
  {
    avatar: 'https://github.com/Simon-He95.png',
    name: 'Simon He',
    github: 'Simon-He95',
    x: 'simon_he1995',
    title: 'Увлечен открытым исходным кодом, фронтенд-разработчик',
    desc: 'Автор @webview-use, мастер плагинов VS Code, маг открытого кода, фанат antfu номер один',
  },
  {
    avatar: 'https://github.com/henrikvilhelmberglund.png',
    name: 'Henrik Berglund',
    github: 'henrikvilhelmberglund',
    x: 'henrikvberglund',
    title: 'Фронтенд-разработчик',
    desc: 'Любит Svelte, Vite и open source, автор руководства по UnoCSS',
  },
  {
    avatar: 'https://github.com/hannoeru.png',
    name: 'ハン / Han',
    github: 'hannoeru',
    x: 'hannoeru',
    bluesky: 'hannoeru.me',
    title: 'Инженер-программист',
  },
]

const teamMembers = plainTeamMembers.filter(tm => tm.active !== false).map(tm => createLinks(tm))
const teamEmeritiMembers = plainTeamMembers.filter(tm => tm.active === false).map(tm => createLinks(tm))

export { teamEmeritiMembers, teamMembers }
