import * as React from "react"
import "./navbar.scss"
import Switch from "./switch/switch"

const Navbar = () => {
  return <div className="nav-bar">
    <div className="nav-box">
      <a href="#background">Background</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
    </div>
    <Switch/>
  </div>
}

export default Navbar
