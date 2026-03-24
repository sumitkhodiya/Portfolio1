import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-scroll')
        }
      })
    }, observerOptions)

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
