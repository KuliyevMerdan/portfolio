import { EMAIL, GITHUB_URL, LINKEDIN_URL, SKILL_GROUPS, TELEGRAM } from './shared'
import type { Content } from './types'

// TODO(owner): placeholder copy — replace with your own.
export const en: Content = {
  meta: {
    title: 'Merdan Kuliyev — full-stack developer',
    description: 'Portfolio: projects, stack, experience and contacts.',
  },
  nav: {
    about: 'about',
    projects: 'projects',
    skills: 'stack',
    experience: 'experience',
    contact: 'contact',
  },
  ui: {
    menu: 'Menu',
    close: 'Close',
    switchLanguage: 'Переключить на русский',
    skipToContent: 'Skip to content',
  },
  hero: {
    prompt: 'whoami',
    name: 'Merdan Kuliyev',
    role: 'Full-stack developer',
    tagline: 'I build web apps end to end — from the UI and the API to the database and deployment on my own server.',
    location: 'remote',
    ctaProjects: 'see projects',
    ctaContact: 'get in touch',
  },
  about: {
    title: 'about',
    paragraphs: [
      'I like getting a product all the way to working: not just writing the feature, but shipping it, setting up backups and monitoring.',
      'My latest big project is an online coaching platform: a PWA for clients, a console for the team, payments, video and real-time support chat.',
    ],
    facts: [
      { key: 'focus', value: 'TypeScript, React, Node.js' },
      { key: 'into', value: 'clean architecture and boring deploys' },
      { key: 'now', value: 'open to offers' },
    ],
  },
  projects: {
    title: 'projects',
    intro: 'Selected work. Details behind the links.',
    items: [
      {
        slug: 'secret-coach',
        title: 'Secret Coach',
        description:
          'An online coaching platform: client PWA and admin console, payments, gated video over signed URLs, push notifications and SSE support chat.',
        stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'MinIO', 'Docker'],
        status: 'demo',
        links: [],
      },
      {
        slug: 'portfolio',
        title: 'This portfolio',
        description: 'The site you are reading: React + TypeScript + Vite, two languages, deployed to my own VPS.',
        stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        links: [{ label: 'github', href: GITHUB_URL }],
      },
      {
        slug: 'next-project',
        title: 'Next project',
        description: 'A slot for a pet project that will live on a subdomain of this site.',
        stack: ['TBD'],
        status: 'soon',
        links: [],
      },
    ],
  },
  skills: {
    title: 'stack',
    intro: 'What I work with every day.',
    groups: SKILL_GROUPS,
  },
  experience: {
    title: 'experience',
    intro: 'git log --oneline --reverse of a career.',
    items: [
      {
        hash: 'a1f3c9e',
        period: '2025 — now',
        role: 'Full-stack developer',
        company: 'Secret Coach',
        summary: 'Designed and built the platform from scratch.',
        highlights: [
          'Express API, BullMQ queues, PostgreSQL + Drizzle',
          'VPS deploys with Docker Compose and GitHub Actions',
          'Nightly backups with a weekly restore rehearsal',
        ],
      },
      {
        hash: '7c2e04b',
        period: '20XX — 20XX',
        role: 'Position',
        company: 'Company',
        summary: 'What you did there.',
        highlights: ['An achievement or a task', 'Another achievement'],
      },
    ],
  },
  contact: {
    title: 'contact',
    intro: 'Telegram or email works best — I reply within a day.',
    links: [
      { label: 'email', value: EMAIL, href: `mailto:${EMAIL}` },
      { label: 'telegram', value: `@${TELEGRAM}`, href: `https://t.me/${TELEGRAM}` },
      { label: 'github', value: 'KuliyevMerdan', href: GITHUB_URL },
      { label: 'linkedin', value: 'linkedin', href: LINKEDIN_URL },
    ],
  },
  footer: { text: 'Built with React + TypeScript' },
}
