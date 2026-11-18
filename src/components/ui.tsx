import type { ReactNode } from 'react'

/** A window with macOS-style traffic lights and a title — the site's main frame. */
export function TerminalWindow({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-3 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  )
}

/** `$ command` line. */
export function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted">
      <span className="text-accent">~</span> <span className="text-key">$</span> <span className="text-fg">{children}</span>
    </p>
  )
}

export function Cursor() {
  return <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] animate-blink bg-accent" aria-hidden="true" />
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted">{children}</li>
}

/** Bracketed terminal-style link button. */
export function ButtonLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  const base = 'inline-flex items-center gap-1 rounded px-4 py-2 text-sm transition-colors'
  const style = primary
    ? 'bg-accent text-bg hover:bg-accent-dim'
    : 'border border-border text-fg hover:border-accent hover:text-accent'
  return (
    <a href={href} className={`${base} ${style}`}>
      <span aria-hidden="true">[</span>
      {children}
      <span aria-hidden="true">]</span>
    </a>
  )
}
