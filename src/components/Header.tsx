import { useEffect, useState } from 'react'
import { SECTION_IDS } from '../content/types'
import { useActiveSection } from '../hooks/useActiveSection'
import { LOCALES, useLocale } from '../i18n/locale'

function LanguageSwitch() {
  const { locale, setLocale, content } = useLocale()
  return (
    <div className="flex items-center text-sm" role="group" aria-label={content.ui.switchLanguage}>
      <span className="text-faint" aria-hidden="true">[</span>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className="px-1 text-faint" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`cursor-pointer uppercase transition-colors ${locale === l ? 'text-accent' : 'text-muted hover:text-fg'}`}
          >
            {l}
          </button>
        </span>
      ))}
      <span className="text-faint" aria-hidden="true">]</span>
    </div>
  )
}

export function Header() {
  const { content } = useLocale()
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = SECTION_IDS.map((id) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={() => setOpen(false)}
        aria-current={active === id ? 'location' : undefined}
        className={`block py-1 transition-colors ${active === id ? 'text-accent' : 'text-muted hover:text-fg'}`}
      >
        <span className="text-faint">./</span>
        {content.nav[id]}
      </a>
    </li>
  ))

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-accent focus:px-3 focus:py-1 focus:text-bg"
      >
        {content.ui.skipToContent}
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="shrink-0 text-sm font-semibold">
          <span className="text-accent">~/</span>
          <span className="text-fg">merdan</span>
          <span className="text-key"> $</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-sm">{links}</ul>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitch />
          <button
            type="button"
            className="cursor-pointer rounded border border-border px-2.5 py-1 text-sm text-muted hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? content.ui.close : content.ui.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border/60 bg-bg px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-2">{links}</ul>
        </nav>
      )}
    </header>
  )
}
