import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-top">
        <div className="form-area">

          <div className="form-left">
            <p className="form-label">Say Hello.</p>
            <h2 className="form-title">Looking for internship opportunities.</h2>
            <p className="form-text">Actively seeking internship and entry-level opportunities. Send me a message and let's talk.</p>
          </div>

          <form className="form-card" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="fe367722-3877-4537-8b4f-2179f2442132" />
            <h3 className="form-heading">Contact Me!</h3>
            <input className="form-input" type="text" name="name" placeholder="Your name" required />
            <input className="form-input" type="email" name="email" placeholder="Email address" required />
            <textarea className="form-message" name="message" placeholder="Tell me about your idea..." required></textarea>
            <button className="form-btn" type="submit">Send message</button>
          </form>

        </div>
      </div>

      <div className="contact-bottom">
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
      </div>

    </section>
  )
}