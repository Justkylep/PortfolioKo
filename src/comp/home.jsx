import '../styles/home.css'
import profile from '../assets/profile.png'

<img src={profile} alt="Khyle" />

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-area">

        <h1 className="home-title1">Web Dev</h1>
        <h1 className="home-title2">& Networking</h1>

        <p className="home-name">Jhon Khyle Paduala</p>
        <p className="home-desc">
          3rd-year BSIT student building responsive websites and reliable networks.
        </p>

        <div className="home-btns">
          <a className="home-btn1" href="#projects">View my work</a>
          <a className="home-btn2" href="#contact">Talk</a>
        </div>

        <div className="home-photo">
         <img src={profile} alt="Khyle" />
        </div>

      </div>
    </section>
  )
}