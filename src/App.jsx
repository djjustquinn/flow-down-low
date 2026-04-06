import Nav from './components/Nav'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Experience from './components/Experience'
import Venues from './components/Venues'
import Partner from './components/Partner'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Experience />
        <Venues />
        <Partner />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
