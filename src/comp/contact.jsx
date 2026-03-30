import '../styles/contact.css'
import emailPhoto from '../assets/emailphoto.png'
import messPhoto from '../assets/mess.png'

function Contact() {
  return (
    <div id='contact' className='contact-section'>
      <p className='contact-sub'>Get In Touch</p>
      <h2 className='contact-title'>Contact Me</h2>

      <div className='contact-row'>

        <div className='contact-card'>
          <img src={emailPhoto} alt='email' className='contact-icon' />
          <p className='contact-name'>Jhon Khyle Paduala</p>
          <p className='contact-info'>padualajhonkhyle@gmail.com</p>
          <a href='mailto:padualajhonkhyle@gmail.com' className='contact-link'>Send Message</a>
        </div>

        <div className='contact-card'>
          <img src={messPhoto} alt='messenger' className='contact-icon' />
          <p className='contact-platform'>Messenger</p>
          <p className='contact-name'>Jhon Khyle Paduala</p>
          <a href='https://m.me/' className='contact-link'>Send Message</a>
        </div>

      </div>
    </div>
  )
}

export default Contact