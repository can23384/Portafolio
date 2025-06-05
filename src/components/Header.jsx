import React from 'react'

function Header({ oculto, toggleMenu }) {
  return (
    <header className={oculto ? 'hidden' : ''}>
      <div className="header-container">
        <div className="logo">PORTAFOLIO</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header