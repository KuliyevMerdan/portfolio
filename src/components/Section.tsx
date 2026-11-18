import type { ReactNode } from 'react'
import type { SectionId } from '../content/types'

interface SectionProps {
  id: SectionId
  index: number
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, index, title, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border/60 py-20 sm:py-28">
      <header className="mb-10">
        <p className="mb-2 text-sm text-comment">// {String(index).padStart(2, '0')}</p>
        <h2 id={`${id}-title`} className="text-2xl font-semibold text-fg sm:text-3xl">
          <span className="text-accent">#</span> {title}
        </h2>
        {intro && <p className="mt-3 text-muted">{intro}</p>}
      </header>
      {children}
    </section>
  )
}
