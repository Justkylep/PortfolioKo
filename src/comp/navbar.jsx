import '../styles/navbar.css'

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="nav-logo">khyle.</a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  )
}