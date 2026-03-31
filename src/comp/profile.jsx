import '../styles/profile.css'
import profilePhoto from '../assets/profilephoto.png'
import githubPhoto from '../assets/githubphoto.png'
import linkedinPhoto from '../assets/linkedinphoto.png'
import fb from '../assets/fb.png'

function Profile() {
  return (
    <div className='bg'>
      <div className='text'>
        <p className='hello'>Hello I'm</p>
        <h1 className='name'>Jhon Khyle Paduala</h1>
        <p className='role'>Product & Visual Designer</p>
      </div>

      <img src={profilePhoto} alt='profile' className='profile-photo' />

      <div className='links'>
        <div className='labels'>
          <span>GitHub</span>
          <span>|</span>
          <span>LinkedIn</span>
          <span>|</span>
          <span>Facebook</span>
        </div>
        <div className='social-icons'>
          <a href='https://github.com/Justkylep' target='_blank' rel='noreferrer'>
            <img src={githubPhoto} alt='github' className='social-icon' />
          </a>
          <a href='https://www.linkedin.com/in/jhon-khyle-paduala-142563371/' target='_blank' rel='noreferrer'>
            <img src={linkedinPhoto} alt='linkedin' className='social-icon' />
          </a>
          <a href='https://www.facebook.com/Totokyle.paduala.1' target='_blank' rel='noreferrer'>
            <img src={fb} alt='facebook' className='social-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile