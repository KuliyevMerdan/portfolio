import { useContent } from '../i18n/locale'
import { Section } from './Section'
import { Prompt } from './ui'

export function Contact() {
  const { contact } = useContent()
  const labelWidth = Math.max(...contact.links.map((l) => l.label.length))

  return (
    <Section id="contact" index={5} title={contact.title} intro={contact.intro}>
      <div className="rounded-lg border border-border bg-surface p-5 sm:p-7">
        <Prompt>contact --list</Prompt>
        <ul className="mt-4 space-y-2">
          {contact.links.map((link) => (
            <li key={link.label} className="flex flex-wrap gap-x-3">
              <span className="text-key" style={{ minWidth: `${labelWidth}ch` }}>
                {link.label}
              </span>
              <span className="text-faint" aria-hidden="true">
                →
              </span>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="break-all text-string underline-offset-4 hover:text-accent hover:underline"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
