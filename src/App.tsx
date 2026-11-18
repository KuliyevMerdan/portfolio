import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useContent } from './i18n/locale'

const YEAR = new Date().getFullYear()

function App() {
  const { footer, hero } = useContent()

  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-8 text-sm text-faint sm:px-6">
          <span>
            © {YEAR} {hero.name} · {footer.text}
          </span>
          <span>
            <span className="text-accent">exit</span> 0
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
