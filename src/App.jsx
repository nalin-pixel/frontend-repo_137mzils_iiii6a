import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background gradient accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8 text-center text-white/60">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} Royyan Rifki Widyarto — Innovation storytelling
        </div>
      </footer>
    </div>
  )
}

export default App
