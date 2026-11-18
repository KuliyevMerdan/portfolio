import { useEffect, useState } from 'react'

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Types out `lines` one after another. Returns how much of each line is shown
 * and whether everything is done. Restarts when the lines change (e.g. locale).
 */
export function useTypewriter(lines: readonly string[], { speed = 45, pause = 350 } = {}) {
  const key = lines.join('\u0000')
  const [state, setState] = useState({ key, line: 0, char: 0 })

  const [reduced] = useState(prefersReducedMotion)

  // Reset synchronously when the input changes (no flash of stale text).
  if (state.key !== key) setState({ key, line: 0, char: 0 })

  const done = reduced || state.line >= lines.length

  useEffect(() => {
    if (done) return
    const current = lines[state.line]
    const atEnd = state.char >= current.length
    const timer = window.setTimeout(
      () =>
        setState((s) => (atEnd ? { key, line: s.line + 1, char: 0 } : { ...s, char: s.char + 1 })),
      atEnd ? pause : speed,
    )
    return () => clearTimeout(timer)
  }, [state, done, key, lines, speed, pause])

  const shown = done
    ? [...lines]
    : lines.map((line, i) => (i < state.line ? line : i === state.line ? line.slice(0, state.char) : ''))
  return { shown, activeLine: done ? -1 : state.line, done }
}
