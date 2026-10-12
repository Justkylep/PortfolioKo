import '../styles/skills.css'

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-area">

        
        <h2 className="skills-title">Built With</h2>
        <p className="skills-text">Tools I use across web development and networking.</p>

        <div className="row1">
          <p className="skills-name">Frontend</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src="/icons/html5.svg" alt="" />HTML</p>
            <p className="skill-chip"><img src="/icons/css.svg" alt="" />CSS</p>
            <p className="skill-chip"><img src="/icons/javascript.svg" alt="" />JavaScript</p>
            <p className="skill-chip"><img src="/icons/react.svg" alt="" />React (Vite)</p>
          </div>
        </div>

        <div className="row2">
          <p className="skills-name">Backend &amp; Database</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src="/icons/nodejs.svg" alt="" />Node.js</p>
            <p className="skill-chip"><img src="/icons/mysql.svg" alt="" />MySQL</p>
            <p className="skill-chip"><img src="/icons/php.svg" alt="" />PHP (beginner)</p>
          </div>
        </div>

        <div className="row3">
          <p className="skills-name">Networking</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src="/icons/cisco.svg" alt="" />Packet Tracer</p>
          </div>
        </div>

        <div className="row4">
          <p className="skills-name">Tools I Use</p>
          <div className="skills-chips">
            <p className="skill-chip"><img src="/icons/github.svg" alt="" />GitHub</p>
            <p className="skill-chip"><img src="/icons/vscode.svg" alt="" />VS Code</p>
            <p className="skill-chip"><img src="/icons/figma.svg" alt="" />Figma</p>
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