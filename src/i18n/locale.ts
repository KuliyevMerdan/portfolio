import { createContext, useContext } from 'react'
import type { Content } from '../content/types'

export const LOCALES = ['ru', 'en'] as const
export type Locale = (typeof LOCALES)[number]

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  content: Content
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used inside <LocaleProvider>')
  return value
}

/** Shortcut for components that only need the text. */
export function useContent(): Content {
  return useLocale().content
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}
