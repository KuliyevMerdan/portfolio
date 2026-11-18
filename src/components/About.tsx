import { useContent } from '../i18n/locale'
import { Section } from './Section'

export function About() {
  const { about } = useContent()
  const keyWidth = Math.max(...about.facts.map((f) => f.key.length))

  return (
    <Section id="about" index={1} title={about.title}>
      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="self-start rounded-lg border border-border bg-surface p-5 text-sm">
          <p className="mb-3 text-comment" aria-hidden="true">
            # me.yml
          </p>
          {about.facts.map(({ key, value }) => (
            <div key={key} className="flex gap-2">
              <dt className="shrink-0 text-key" style={{ minWidth: `${keyWidth + 1}ch` }}>
                {key}:
              </dt>
              <dd className="text-string">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
