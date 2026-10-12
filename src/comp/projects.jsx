import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-area">

        <h2 className="projects-title">Builds</h2>
        <p className="projects-text">Projects, apps, and prototypes.</p>

        <div className="project project1">
          <div className="project-photo">
            <img src="/projects/trashtalk.jpg" alt="TrashTalk" />
          </div>
          <h3 className="project-name">TrashTalk</h3>
          <p className="project-desc">
            A prototype app connecting users and janitorial staff to track,
            report, and maintain clean shared spaces.
          </p>
          <a className="project-btn" href="#">Check It Out</a>
        </div>

        <div className="project project2">
          <div className="project-photo">
            <img src="/projects/buildit.jpg" alt="BuildIT" />
          </div>
          <h3 className="project-name">BuildIT</h3>
          <p className="project-desc">
            A 2D interactive educational game where users assemble a computer
            system from scratch to learn hardware components.
          </p>
          <a className="project-btn" href="#">Check It Out</a>
        </div>

        <div className="project project3">
          <div className="project-photo">
            <img src="/projects/netlab.jpg" alt="NetLab" />
          </div>
          <h3 className="project-name">NetLab</h3>
          <p className="project-desc">
            A complete enterprise networking lab implementing VLANs, VoIP,
            wireless clients, and full-mesh OSPF routing for end-to-end device
            reachability.
          </p>
          <a className="project-btn" href="#">Check It Out</a>
        </div>

      </div>
    </section>
  )
}