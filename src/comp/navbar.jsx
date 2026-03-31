import '../styles/navbar.css'
import logophoto from '../assets/klogo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='left'>
        <img src={logophoto} alt='logo' className='logo' />
        <span className='nav-title'>Portfolio</span>
      </div>
      <div className='right'>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
      </div>
    </nav>
  )
}

export default Navbar