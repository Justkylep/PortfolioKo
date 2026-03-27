import '../styles/profile.css'
import profilePhoto from '../assets/profilephoto.png'
import githubPhoto from '../assets/githubphoto.png'
import linkedinPhoto from '../assets/linkedinphoto.png'
import emailPhoto from '../assets/emailphoto.png'
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
    <span>Email</span>
  </div>
  <div className='social-icons'>
    <img src={githubPhoto} alt='github' className='social-icon' />
    <img src={linkedinPhoto} alt='linkedin' className='social-icon' />
    <img src={emailPhoto} alt='email' className='social-icon' />
  </div>
</div>
    </div>
    
  )
}

export default Profile