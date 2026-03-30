import '../styles/about.css'
import aboutPhoto from '../assets/portfolioaboutme.jpg'
function About() {
  return <div> <div className='about'>
    <div id='about'></div>
      <p className='gtk'>Get To Know</p>
      <h2 className='about-title'>ABOUT ME</h2>
    </div>


    <div className='sulat'>
      <img src={aboutPhoto} alt='about me' className='about-pic' />
  <div className='box'>
    <h3 className='who-title'>Who i Am</h3>
    <p className='who-text'>
      I believe that the best digital experiences happen when creativity and technology work together. Over the past two years, I have grown my skills through various projects that helped me understand both the technical side and the creative side of building digital solutions. For me, design is more than just how something looks—it's about making sure it is simple, useful, and easy to use.
      <br /><br />
      I enjoy taking a small idea and turning it into something clear and engaging. I pay close attention to the small details because I want the things I build to feel natural and approachable for everyone who uses them.
      <br /><br />
      I am always learning and looking for new ways to make digital work that feels thoughtful and serves a real purpose.
    </p>
    
  </div>
</div>
</div>
}
export default About