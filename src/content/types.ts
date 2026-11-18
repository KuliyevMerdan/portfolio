export type SectionId = 'about' | 'projects' | 'skills' | 'experience' | 'contact'

/** Page order of the sections (navigation follows it). */
export const SECTION_IDS: readonly SectionId[] = ['about', 'projects', 'skills', 'experience', 'contact']

export interface Project {
  /** Shown as the "file name" of the card, e.g. `secret-coach`. */
  slug: string
  title: string
  description: string
  stack: string[]
  status?: string
  links: { label: string; href: string }[]
}

export interface SkillGroup {
  /** Rendered as an object key: `frontend: [...]`. */
  key: string
  items: string[]
}

export interface ExperienceItem {
  /** Short fake commit hash shown in the `git log` view. */
  hash: string
  period: string
  role: string
  company: string
  summary: string
  highlights: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

/** Everything the page says. Each locale must provide all of it. */
export interface Content {
  meta: { title: string; description: string }
  nav: Record<SectionId, string>
  ui: {
    menu: string
    close: string
    switchLanguage: string
    skipToContent: string
  }
  hero: {
    prompt: string
    name: string
    role: string
    tagline: string
    location: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    title: string
    paragraphs: string[]
    facts: { key: string; value: string }[]
  }
  projects: {
    title: string
    intro: string
    items: Project[]
  }
  skills: {
    title: string
    intro: string
    groups: SkillGroup[]
  }
  experience: {
    title: string
    intro: string
    items: ExperienceItem[]
  }
  contact: {
    title: string
    intro: string
    links: ContactLink[]
  }
  footer: { text: string }
}
