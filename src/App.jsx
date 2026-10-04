import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Stats from './components/sections/Stats'
import Academics from './components/sections/Academics'
import Sports from './components/sections/Sports'
import CampusLife from './components/sections/CampusLife'
import AdmissionsCTA from './components/sections/AdmissionsCTA'
import Footer from './components/sections/Footer'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Stats />
        <Academics />
        <Sports />
        <CampusLife />
        <AdmissionsCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
