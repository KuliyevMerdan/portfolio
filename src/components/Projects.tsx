import { useContent } from '../i18n/locale'
import { Section } from './Section'
import { Tag } from './ui'

export function Projects() {
  const { projects } = useContent()

  return (
    <Section id="projects" index={2} title={projects.title} intro={projects.intro}>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <li
            key={project.slug}
            className="group flex flex-col rounded-lg border border-border bg-surface transition-colors hover:border-accent/60"
          >
            <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2 text-xs">
              <span className="truncate text-muted">
                <span className="text-accent">▸</span> {project.slug}/README.md
              </span>
              {project.status && (
                <span className="shrink-0 rounded border border-warn/40 px-1.5 text-warn">{project.status}</span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-fg group-hover:text-accent">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-key underline-offset-4 hover:underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
