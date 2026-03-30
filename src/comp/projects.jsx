import '../styles/projects.css'
import lemon from '../assets/lemon.png'
import perfume from '../assets/perfume.png'
import vault from '../assets/vault.png'

function Projects() {
  return (
    <div id='projects' className='projects-section'>
      <p className='projects-sub'>My Recent Work</p>
      <h2 className='projects-title'>Portfolio</h2>

      <div className='projects-row'>

        <div className='project-left-card'>
          <p className='project-label'>UI Design</p>
          <div className='project-left-images'>
            <img src={lemon} alt='lemon' className='project-img-small' />
            <img src={perfume} alt='perfume' className='project-img-small' />
          </div>
        </div>

        <div className='project-right-card'>
          <img src={vault} alt='vault' className='project-img-vault' />
          <h3 className='project-name'>StudyVault</h3>
          <p className='project-desc'>A full product prototype, where user can manage their study notes. For them to study effectively.</p>
        </div>

      </div>
    </div>
  )
}

export default Projects