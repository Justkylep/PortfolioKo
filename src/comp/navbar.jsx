import { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [active, setActive] = useState('home')

 useEffect(() => {
  window.onscroll = () => {
    const names = ['home', 'about', 'skills', 'projects', 'contact']
    for (let i = 0; i < names.length; i++) {
      const box = document.getElementById(names[i])
      if (box.getBoundingClientRect().top <= 150) {
        setActive(names[i])
      }
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      setActive('contact')
    }
  }
}, [])

  return (
    <div className="nav">
      <a className="nav-logo" href="#home">khyle.</a>

      <div className="nav-links">
        <a className={active === 'home' ? 'active' : ''} href="#home">Home</a>
        <a className={active === 'about' ? 'active' : ''} href="#about">About</a>
        <a className={active === 'skills' ? 'active' : ''} href="#skills">Skills</a>
        <a className={active === 'projects' ? 'active' : ''} href="#projects">Projects</a>
        <a className={active === 'contact' ? 'active' : ''} href="#contact">Contact</a>
      </div>
    </div>
  )
}