// src/components/SideMenu.jsx
import React from 'react'

function SideMenu({ abierto, cerrarMenu, refSeccionLugares }) {
  return (
    <div id="sideMenu" className={`side-menu ${abierto ? 'open' : ''}`}>
      <div className="menu-content">
        {/* Botón de cerrar menú */}
        <button className="close-btn" onClick={cerrarMenu}>
          ✕
        </button>

        <nav>
          <ul>
            <li>
              {/* Ya no llamamos a cerrarMenu() aquí */}
              <a href="#trailer">
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#personajes">
                Skills
              </a>
            </li>
            <li>
              {/* Aquí mantenemos el scroll suave, pero no cerramos el menú */}
              <a
                href="#lugares"
                onClick={() => {
                  if (refSeccionLugares.current) {
                    refSeccionLugares.current.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a href="#descarga">
                Estudios
              </a>
            </li>
            <li>
              <a href="#contacto">
                Contáctame
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideMenu
 