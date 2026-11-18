import { useMemo } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { useContent } from '../i18n/locale'
import { ButtonLink, Cursor, TerminalWindow } from './ui'

function CommandLine({ text, typing }: { text: string; typing: boolean }) {
  return (
    <p className="text-muted">
      <span className="text-accent">~</span> <span className="text-key">$</span> <span className="text-fg">{text}</span>
      {typing && <Cursor />}
    </p>
  )
}

export function Hero() {
  const { hero } = useContent()
  const commands = useMemo(() => [hero.prompt, 'cat tagline.txt'], [hero.prompt])
  const { shown, activeLine, done } = useTypewriter(commands)
  const reveal = (line: number) => activeLine === -1 || activeLine > line

  return (
    <section id="top" className="flex min-h-svh items-center pb-16 pt-28">
      {/* Screen readers get the whole thing at once, not the animation. */}
      <h1 className="sr-only">
        {hero.name} — {hero.role}
      </h1>

      <TerminalWindow title="merdan@portfolio: ~" className="w-full">
        {/* Everything is laid out from the start and only made visible step by
            step, so the window never changes size while typing. */}
        <div aria-hidden="true" className="space-y-4">
          <CommandLine text={shown[0]} typing={activeLine === 0} />

          <div className={`space-y-1 ${reveal(0) ? '' : 'invisible'}`}>
            <p className="text-4xl font-bold leading-tight text-fg sm:text-6xl">{hero.name}</p>
            <p className="text-lg text-accent sm:text-xl">
              {hero.role} <span className="text-faint">· {hero.location}</span>
            </p>
          </div>

          <div className={reveal(0) ? '' : 'invisible'}>
            <CommandLine text={shown[1]} typing={activeLine === 1} />
          </div>

          <p className={`max-w-2xl text-muted ${reveal(1) ? '' : 'invisible'}`}>{hero.tagline}</p>

          <p className={`text-muted ${done ? '' : 'invisible'}`}>
            <span className="text-accent">~</span> <span className="text-key">$</span> <Cursor />
          </p>
        </div>

        <p className="sr-only">{hero.tagline}</p>

        <div className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>
          <ButtonLink href="#projects" primary>
            {hero.ctaProjects}
          </ButtonLink>
          <ButtonLink href="#contact">{hero.ctaContact}</ButtonLink>
        </div>
      </TerminalWindow>
    </section>
  )
}
