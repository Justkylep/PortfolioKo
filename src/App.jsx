import Navbar from './comp/navbar'
import Profile from './comp/profile'
import About from './comp/about'
import Projects from './comp/projects'
import Skills from './comp/skills'
import Contact from './comp/contact'
import './App.css'

function App() {
  return (  
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className='footer'>
  <p className='footer-goto'>Go To</p>
  <div className='footer-links'>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#projects'>Projects</a>
  </div>
  <p className='footer-name'>Jhon Khyle Paduala</p>
  <p className='footer-copy'>© 2025 Jhon Khyle Paduala | All rights reserved</p>
</footer>
    </>
  )



  
}

export default App