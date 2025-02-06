import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Intro from './components/intro/intro'
import Services from './components/services/Services'
import Experience from './components/Experience/Experience'
import Works from "./components/work/Works"
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Intro />
    <Services />
    <Experience />
    <Works />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default App
