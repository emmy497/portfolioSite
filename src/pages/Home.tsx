import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Marquee from '../components/Marquee'
import Divider from '../components/Divider'

export default function Home() {
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
    </>
  )
}
