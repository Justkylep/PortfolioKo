import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-area">

       
        <h2 className="projects-title">Builds</h2>

        {/* ---------- PROJECT 1 ---------- */}
        <div className="project project1">
          <div className="project-photo">
            {/* ADD YOUR PHOTO HERE: change the file name inside src */}
            <img src="/projects/trashtalk.jpg" alt="TrashTalk screenshot" />
          </div>
          <h3 className="project-name">TrashTalk</h3>
          <p className="project-text">
            A prototype app connecting users and janitorial staff to track,
            report, and maintain clean shared spaces.
          </p>
          {/* ADD YOUR LINK HERE: change the # inside href */}
          <a className="project-btn" href="#" target="_blank" rel="noreferrer">Check It Out</a>
        </div>

        {/* ---------- PROJECT 2 ---------- */}
        <div className="project project2">
          <div className="project-photo">
            {/* ADD YOUR PHOTO HERE */}
            <img src="/projects/buildit.jpg" alt="BuildIT screenshot" />
          </div>
          <h3 className="project-name">BuildIT</h3>
          <p className="project-text">
            A 2D interactive educational game where users assemble a computer
            system from scratch to learn hardware components.
          </p>
          {/* ADD YOUR LINK HERE */}
          <a className="project-btn" href="#" target="_blank" rel="noreferrer">Check It Out</a>
        </div>

        {/* ---------- PROJECT 3 ---------- */}
        <div className="project project3">
          <div className="project-photo">
            {/* ADD YOUR PHOTO HERE */}
            <img src="/projects/netlab.jpg" alt="NetLab screenshot" />
          </div>
          <h3 className="project-name">NetLab</h3>
          <p className="project-text">
            A complete enterprise networking lab implementing VLANs, VoIP,
            wireless clients, and full-mesh OSPF routing for end-to-end device
            reachability.
          </p>
          {/* ADD YOUR LINK HERE */}
          <a className="project-btn" href="#" target="_blank" rel="noreferrer">Check It Out</a>
        </div>

      </div>
    </section>
  )
}