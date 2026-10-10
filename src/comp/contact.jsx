import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-area">

        {/* ---------- LEFT ---------- */}
        <p className="contact-logo">khyle.</p>
        <p className="contact-text">
          3rd-year BSIT student building responsive websites and reliable networks.
        </p>
        <p className="contact-pill">Iloilo, Philippines (UTC+8) · On-site or remote</p>

        {/* ---------- NAVIGATION ---------- */}
        <div className="contact-nav">
          <p className="contact-title">NAVIGATION</p>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* ---------- PROFILES ---------- */}
        <div className="contact-profiles">
          <p className="contact-title">PROFILES &amp; REACH</p>

          {/* ADD YOUR GITHUB LINK: change the # inside href */}
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/icons/footer-github.svg" alt="" />GitHub
          </a>

          {/* ADD YOUR LINKEDIN LINK: change the # inside href */}
          <a href="#" target="_blank" rel="noreferrer">
            <img src="/icons/footer-linkedin.svg" alt="" />LinkedIn
          </a>

          {/* ADD YOUR EMAIL: change the text after mailto: */}
          <a href="mailto:youremail@gmail.com">
            <img src="/icons/footer-mail.svg" alt="" />Direct Email
          </a>

          {/* ADD YOUR RESUME: put resume.pdf inside the public folder */}
          <a href="/resume.pdf" download>
            <img src="/icons/footer-download.svg" alt="" />Download Resume
          </a>
        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="contact-line"></div>
        <p className="contact-copy">© 2026 Jhon Khyle Paduala</p>

      </div>
    </section>
  )
}