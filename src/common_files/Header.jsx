import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top py-3 header-nav">

        <div className="container d-flex align-items-center">

          {/* Logo */}
          <a className="navbar-brand fw-bold text-white logo" href="#home">
            khushbu<span>.</span>
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Menu */}
          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav custom-menu">

              <li className="nav-item">
                <a className="nav-link headlink text-white" href="#home" onClick={closeMenu}>Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link headlink text-white" href="#about" onClick={closeMenu}>About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link headlink text-white" href="#resume" onClick={closeMenu}>Resume</a>
              </li>

              <li className="nav-item">
                <a className="nav-link headlink text-white" href="#work" onClick={closeMenu}>My Work</a>
              </li>

              <li className="nav-item">
                <a className="nav-link headlink text-white" href="#contact" onClick={closeMenu}>Contact</a>
              </li>

            </ul>
          </div>

          {/* Resume Right */}
          <a
            href="/Resume/Front-End Developer.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-link text-white text-decoration-none"
          >
            My Resume <i className="bi bi-download"></i>
          </a>

        </div>
      </nav>
    </>
  )
}

export default Header


