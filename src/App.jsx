import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Projects  from './components/Projects/Projects'
import CV        from './components/CV/CV'
import Mentoring from './components/Mentoring/Mentoring'
import Coaching  from './components/Coaching/Coaching'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CV />
        <Mentoring />
        <Coaching />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
