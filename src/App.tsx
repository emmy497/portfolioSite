import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Marquee from './components/Marquee'
import Footer from './components/Footer'
import './App.css'

function Divider() {
  return <div className="divider container" aria-hidden="true" />
}

function App() {
  return (
    <>
      <Hero />
      <main className="dark">
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Marquee />
        <Divider />
      </main>
      <Footer />
    </>
  )
}

export default App
