import { useEffect } from 'react'
import Navbar from './comp/navbar'
import Home from './comp/home'
import About from './comp/about'
import Skills from './comp/skills'
import Projects from './comp/projects'
import Contact from './comp/contact'

export default function App() {

  useEffect(() => {
    const list = document.querySelectorAll(
      '.home-title1, .home-title2, .home-name, .home-desc, .home-btns, .home-photo, ' +
      '.about-title, .about-text, .about-para1, .about-para2, .box1, .box2, .box3, ' +
      '.skills-title, .skills-text, .row1, .row2, .row3, .row4, .row5, ' +
      '.projects-title, .projects-text, .project, ' +
      '.form-left, .form-card'
    )

    const watcher = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add('show')
          watcher.unobserve(item.target)
        }
      })
    })

    list.forEach((one) => {
      one.classList.add('fade')
      watcher.observe(one)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}