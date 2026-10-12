import '../styles/skills.css'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/javascript.svg'
import react from '../assets/react.svg'
import node from '../assets/nodejs.svg'
import sql from '../assets/mysql.svg'
import php from '../assets/php.svg'
import cisco from '../assets/cisco.svg'
import git from '../assets/github.svg'
import code from '../assets/vscode.svg'
import figma from '../assets/figma.svg'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-area">

        <h2 className="skills-title">Built With</h2>
        <p className="skills-text">Tools I use across web development and networking.</p>

        <div className="row1">
          <p className="skills-name">Frontend</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src={html} />HTML</p>
            <p className="skill-chip"><img src={css} />CSS</p>
            <p className="skill-chip"><img src={js} />JavaScript</p>
            <p className="skill-chip"><img src={react} />React (Vite)</p>
          </div>
        </div>

        <div className="row2">
          <p className="skills-name">Backend &amp; Database</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src={node} />Node.js</p>
            <p className="skill-chip"><img src={sql} />MySQL</p>
            <p className="skill-chip"><img src={php} />PHP (beginner)</p>
          </div>
        </div>

        <div className="row3">
          <p className="skills-name">Networking</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src={cisco} />Packet Tracer</p>
          </div>
        </div>

        <div className="row4">
          <p className="skills-name">Tools I Use</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src={git} />GitHub</p>
            <p className="skill-chip"><img src={code} />VS Code</p>
            <p className="skill-chip"><img src={figma} />Figma</p>
          </div>
        </div>

        <div className="row5">
          <p className="skills-name">Foundational Skills</p>
          <div className="skills-chips">
            <p className="skill-chip">UI Design Basics</p>
            <p className="skill-chip">API Integration (beginner)</p>
            <p className="skill-chip">Responsive Web Design</p>
          </div>
        </div>

      </div>
    </section>
  )
}