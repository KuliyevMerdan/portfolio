import { useContent } from '../i18n/locale'
import { Section } from './Section'

/** Career as `git log`. */
export function Experience() {
  const { experience } = useContent()

  return (
    <Section id="experience" index={4} title={experience.title} intro={experience.intro}>
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.items.map((item, i) => (
          <li key={item.hash} className="relative">
            <span
              className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[37px] ${i === 0 ? 'bg-accent' : 'bg-faint'}`}
              aria-hidden="true"
            />
            <p className="text-sm">
              <span className="text-warn">{item.hash}</span>
              {i === 0 && (
                <span className="text-key">
                  {' '}
                  (<span className="text-accent">HEAD</span> → main)
                </span>
              )}{' '}
              <span className="text-comment">{item.period}</span>
            </p>
            <h3 className="mt-1 text-lg font-semibold text-fg">
              {item.role} <span className="text-muted">@</span> <span className="text-accent">{item.company}</span>
            </h3>
            <p className="mt-1 text-muted">{item.summary}</p>
            <ul className="mt-3 space-y-1 text-sm">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-muted">
                  <span className="text-accent" aria-hidden="true">
                    +
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
