import '../styles/contact.css'
import emailPhoto from '../assets/emailphoto.png'
import messPhoto from '../assets/mess.png'

function Contact() {
  return (
    <div id='contact' className='contact-section'>
      <p className='contactd'>Get In Touch</p>
      <h2 className='contacttitle'>Contact Me</h2>

      <div className='contacts'>

        <div className='cbox'>
          <img src={emailPhoto} alt='email' className='contact-icon' />
          <p className='contact-name'>Jhon Khyle Paduala</p>
          <p className='contact-info'>padualajhonkhyle@gmail.com</p>
          <a href='mailto:padualajhonkhyle@gmail.com' className='contact-link'>Send Message</a>
        </div>

        <div className='cbox'>
          <img src={messPhoto} alt='messenger' className='contact-icon' />
          <p className='contactp'>Messenger</p>
          <p className='contact-name'>Jhon Khyle Paduala</p>
         <a href='https://www.facebook.com/Totokyle.paduala.1' target='_blank' rel='noreferrer' className='contact-link'>Send Message</a>
        </div>

      </div>
    </div>
  )
}

export default Contact