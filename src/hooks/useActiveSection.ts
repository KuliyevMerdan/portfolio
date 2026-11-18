import { useEffect, useState } from 'react'

/** Id of the section currently under the header (scroll spy). */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting)
        // First section (in page order) that crosses the band below the header.
        setActive(ids.find((id) => visible.get(id)) ?? null)
      },
      // A thin band 30–40% down the viewport.
      { rootMargin: '-30% 0px -60% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
