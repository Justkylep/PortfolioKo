import '../styles/home.css'
import photo from '../assets/profile.png'

export default function Home() {
  return (
    <section id="home" className="home">

    <div className="home-photo">
  <img src={photo} alt="Jhon Khyle Paduala" className="slide-fwd-center" />
</div>

      <div className="home-words">
        <h1 className="home-name">
          Jhon Khyle <br /> Paduala
        </h1>
        <p className="home-job">Web Dev &amp; Networking</p>

        <a href="#projects" className="home-btn1">View my work</a>
        <a href="#contact" className="home-btn2">Talk</a>
      </div>

    </section>
  )
}