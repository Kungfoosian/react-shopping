import './NavHamburger.css'

export default function NavHamburger() {
  return <button className="nav-toggle" id="nav-toggle">
  <span className="hamburger">
      <span className="lines top-normal" id="burger-top"></span>
      <span className="lines bottom-normal" id="burger-bottom"></span>
  </span>
</button>
}
