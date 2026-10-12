import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="mail-box">
        <p className="mail-text">Have a project or question? The best way to reach me is by email.</p>
        <a 
  className="mail-btn" 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=whileitlastt@gmail.com" 
  target="_blank"
>
  Email me
</a>
      </div>

      <div className="contact-area">

        <div className="contact-left">
          <h3 className="contact-logo">khyle.</h3>
          <p className="contact-text">3rd-year BSIT student building responsive websites and reliable networks.</p>
        </div>

        <div className="contact-nav">
          <p className="contact-title">NAVIGATION</p>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="contact-profiles">
          <p className="contact-title">PROFILES &amp; REACH</p>
          <a href="https://github.com/Justkylep" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.facebook.com/Totokyle.paduala.1" target="_blank" rel="noreferrer">Facebook</a>
        </div>

        <div className="contact-line"></div>
        <p className="contact-copy">© 2026 Jhon Khyle Paduala</p>

      </div>
    </section>
  )
}