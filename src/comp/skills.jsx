import '../styles/skills.css'
import check from '../assets/checkphoto.png'

function Skills() {
  return (
    <div id='skills' className='skills-section'>
      <p className='skillstext'>What Skills I Have</p>
      <h2 className='skillst'>My Proficiency</h2>

      <div className='mgaskills'>

        <div className='box'>
          <h3 className='skilltitle'>Programming & Web Development</h3>
          <ul className='skill-list'>
            <li><img src={check} className='check' alt='' />Java (Basics)</li>
            <li><img src={check} className='check' alt='' />HTML5 & CSS3</li>
            <li><img src={check} className='check' alt='' />JavaScript (Basics)</li>
            <li><img src={check} className='check' alt='' />Responsive Design</li>
          </ul>
        </div>

        <div className='box'>
          <h3 className='skilltitle'>Design & UI/UX Strategy</h3>
          <ul className='skill-list'>
            <li><img src={check} className='check' alt='' />Figma (Prototyping)</li>
            <li><img src={check} className='check' alt='' />User Interface (UI)</li>
            <li><img src={check} className='check' alt='' />Wireframing</li>
            <li><img src={check} className='check' alt='' />User-Centered Design</li>
          </ul>
        </div>

        <div className='box'>
          <h3 className='skilltitle'>Data Science & Analytics</h3>
          <ul className='skill-list'>
            <li><img src={check} className='check' alt='' />Data Cleaning</li>
            <li><img src={check} className='check' alt='' />Data Processing</li>
            <li><img src={check} className='check' alt='' />Exploratory Data Analysis</li>
            <li><img src={check} className='check' alt='' />Python (Basics)</li>
          </ul>
        </div>

        <div className='box'>
          <h3 className='skilltitle'>Business & Technopreneurship</h3>
          <ul className='skill-list'>
            <li><img src={check} className='check' alt='' />Technopreneurship</li>
            <li><img src={check} className='check' alt='' />IT Accounting</li>
            <li><img src={check} className='check' alt='' />Project Documentation</li>
            <li><img src={check} className='check' alt='' />Product Pitching</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Skills