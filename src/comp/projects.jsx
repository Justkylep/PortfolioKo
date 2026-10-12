import '../styles/projects.css'
import trash from '../assets/traslogo.svg'
import build from '../assets/buildits.svg'
import net from '../assets/net.svg'
import todo from '../assets/awesometodos.svg'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-area">

        <h2 className="projects-title">Builds</h2>
        <p className="projects-text">Projects, apps, and prototypes.</p>

        <div className="project">
          <div className="project-photo">
            <img src={trash} />
          </div>
          <h3 className="project-name">TrashTalk</h3>
          <p className="project-desc">
            A prototype app connecting users and janitorial staff to track,
            report, and maintain clean shared spaces.
          </p>
          <a className="project-btn" target="_blank" href="https://www.figma.com/design/IrAgmMHnSX5wcNIgpeCb9x/Trashtalk?node-id=0-1&p=f&t=veWsoI44rsoxSoUQ-0">Check It Out</a>
        </div>

        <div className="project">
          <div className="project-photo">
            <img src={build} />
          </div>
          <h3 className="project-name">BuildIT</h3>
          <p className="project-desc">
            A 2D interactive educational game where users assemble a computer
            system from scratch to learn hardware components.
          </p>
          <a className="project-btn" target="_blank" href="https://www.mediafire.com/file/psqjrtx8ht7ymor/BuildIT.apk/file">Check It Out</a>
        </div>

        <div className="project">
          <div className="project-photo">
            <img src={net} />
          </div>
          <h3 className="project-name">NetLab</h3>
          <p className="project-desc">
            A complete enterprise networking lab implementing VLANs, VoIP,
            wireless clients, and full-mesh OSPF routing for end-to-end device
            reachability.
          </p>
          <a className="project-btn" target="_blank" href="https://github.com/Justkylep/PortfolioKo/blob/main/README.md">Check It Out</a>
        </div>

        <div className="project">
          <div className="project-photo">
            <img src={todo} />
          </div>
          <h3 className="project-name">Awesome To Do</h3>
          <p className="project-desc">
            A full-stack web application for efficient daily task and goal management.
          </p>
          <a className="project-btn" target="_blank" href="https://awesometodos-qhww.onrender.com">Check It Out</a>
        </div>

      </div>
    </section>
  )
}