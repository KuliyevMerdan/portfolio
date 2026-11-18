import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { content } from '../content'
import { isLocale, LocaleContext, type Locale } from './locale'

const STORAGE_KEY = 'locale'

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // storage unavailable (private mode etc.) — fall through
  }
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    const current = content[locale]
    document.documentElement.lang = locale
    document.title = current.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', current.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore
    }
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, content: content[locale] }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
