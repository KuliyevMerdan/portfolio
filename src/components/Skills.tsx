import { useContent } from '../i18n/locale'
import { Section } from './Section'

/** The stack rendered as a syntax-highlighted TypeScript object. */
export function Skills() {
  const { skills } = useContent()

  return (
    <Section id="skills" index={3} title={skills.title} intro={skills.intro}>
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <div className="border-b border-border px-4 py-2 text-xs text-muted">stack.ts</div>
        <pre className="p-5 text-sm leading-7">
          <code>
            <span className="text-keyword">export const</span> <span className="text-fg">stack</span>{' '}
            <span className="text-muted">=</span> {'{'}
            {'\n'}
            {skills.groups.map((group) => (
              <span key={group.key}>
                {'  '}
                <span className="text-key">{group.key}</span>
                <span className="text-muted">: [</span>
                {group.items.map((item, i) => (
                  <span key={item}>
                    <span className="text-string">'{item}'</span>
                    {i < group.items.length - 1 && <span className="text-muted">, </span>}
                  </span>
                ))}
                <span className="text-muted">],</span>
                {'\n'}
              </span>
            ))}
            {'}'} <span className="text-keyword">as const</span>
          </code>
        </pre>
      </div>

      {/* Plain list for assistive tech; the code view above is decorative-ish. */}
      <ul className="sr-only">
        {skills.groups.map((g) => (
          <li key={g.key}>
            {g.key}: {g.items.join(', ')}
          </li>
        ))}
      </ul>
    </Section>
  )
}
