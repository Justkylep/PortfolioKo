import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-area">

        
        <h2 className="about-title">My Focus</h2>

        <p className="about-text">
          I build <i>responsive websites</i> and set up <i>reliable networks</i>,
          and I'm looking for a team to learn from.
        </p>

        <p className="about-para1">
          I've built a solid foundation in web development (HTML, CSS, JavaScript) 
          and database management, configured network setups in Cisco Packet Tracer,
           and applied automation concepts using custom scripts and API integrations.
        </p>

        <p className="about-para2">
          That mix shaped how I approach software: not just building pages,
          but understanding how they connect, where the data lives, and how to
          keep everything running reliably. I care about simple, dependable
          systems over fragile complexity.
        </p>

        <div className="box1">
          <p className="small">NEXT GOAL</p>
          <p className="big">Land an Internship</p>
        </div>

        <div className="box2">
          <p className="small">LEARNING</p>
          <p className="big">Python &amp; APIs</p>
        </div>

        <div className="box3">
          <p className="small">WORK SETUP</p>
          <p className="big">On-site or Remote</p>
        </div>

        <div className="box4 vibrate-1">
  <p className="small">STATUS</p>
  <p className="big">Available for Work</p>
</div>

      </div>
    </section>
  )
}