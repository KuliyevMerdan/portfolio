import { EMAIL, GITHUB_URL, LINKEDIN_URL, SKILL_GROUPS, TELEGRAM } from './shared'
import type { Content } from './types'

// TODO(owner): тексты-заглушки — заменить на свои.
export const ru: Content = {
  meta: {
    title: 'Мердан Кулиев — full-stack разработчик',
    description: 'Портфолио: проекты, стек, опыт и контакты.',
  },
  nav: {
    about: 'обо-мне',
    projects: 'проекты',
    skills: 'стек',
    experience: 'опыт',
    contact: 'контакты',
  },
  ui: {
    menu: 'Меню',
    close: 'Закрыть',
    switchLanguage: 'Switch to English',
    skipToContent: 'Перейти к содержимому',
  },
  hero: {
    prompt: 'whoami',
    name: 'Мердан Кулиев',
    role: 'Full-stack разработчик',
    tagline: 'Делаю веб-приложения целиком — от интерфейса и API до базы данных и деплоя на свой сервер.',
    location: 'удалённо',
    ctaProjects: 'смотреть проекты',
    ctaContact: 'написать мне',
  },
  about: {
    title: 'обо мне',
    paragraphs: [
      'Я разработчик, который любит доводить продукт до работающего состояния: не только написать фичу, но и задеплоить её, настроить бэкапы и мониторинг.',
      'Последний большой проект — платформа для онлайн-коучинга: PWA для клиентов, консоль для команды, платежи, видео и чат поддержки в реальном времени.',
    ],
    facts: [
      { key: 'фокус', value: 'TypeScript, React, Node.js' },
      { key: 'люблю', value: 'чистую архитектуру и понятный деплой' },
      { key: 'сейчас', value: 'открыт к предложениям' },
    ],
  },
  projects: {
    title: 'проекты',
    intro: 'Избранные работы. Подробности — по ссылкам.',
    items: [
      {
        slug: 'secret-coach',
        title: 'Secret Coach',
        description:
          'Платформа для онлайн-коучинга: PWA для клиентов и админ-консоль, оплаты, закрытые видео по подписанным ссылкам, push-уведомления и чат поддержки на SSE.',
        stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'MinIO', 'Docker'],
        status: 'demo',
        links: [],
      },
      {
        slug: 'portfolio',
        title: 'Это портфолио',
        description: 'Сайт, который вы сейчас читаете: React + TypeScript + Vite, два языка, деплой на свой VPS.',
        stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        links: [{ label: 'github', href: GITHUB_URL }],
      },
      {
        slug: 'next-project',
        title: 'Следующий проект',
        description: 'Место для пет-проекта, который будет жить на поддомене этого сайта.',
        stack: ['TBD'],
        status: 'скоро',
        links: [],
      },
    ],
  },
  skills: {
    title: 'стек',
    intro: 'С чем работаю каждый день.',
    groups: SKILL_GROUPS,
  },
  experience: {
    title: 'опыт',
    intro: 'git log --oneline --reverse карьеры.',
    items: [
      {
        hash: 'a1f3c9e',
        period: '2025 — сейчас',
        role: 'Full-stack разработчик',
        company: 'Secret Coach',
        summary: 'Спроектировал и разработал платформу с нуля.',
        highlights: [
          'API на Express, очереди на BullMQ, PostgreSQL + Drizzle',
          'Деплой на VPS через Docker Compose и GitHub Actions',
          'Ночные бэкапы с еженедельной проверкой восстановления',
        ],
      },
      {
        hash: '7c2e04b',
        period: '20XX — 20XX',
        role: 'Должность',
        company: 'Компания',
        summary: 'Чем занимались на этом месте.',
        highlights: ['Достижение или задача', 'Ещё одно достижение'],
      },
    ],
  },
  contact: {
    title: 'контакты',
    intro: 'Лучше всего писать в Telegram или на почту — отвечаю в течение дня.',
    links: [
      { label: 'email', value: EMAIL, href: `mailto:${EMAIL}` },
      { label: 'telegram', value: `@${TELEGRAM}`, href: `https://t.me/${TELEGRAM}` },
      { label: 'github', value: 'KuliyevMerdan', href: GITHUB_URL },
      { label: 'linkedin', value: 'linkedin', href: LINKEDIN_URL },
    ],
  },
  footer: { text: 'Сделано на React + TypeScript' },
}
