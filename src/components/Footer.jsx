import React from 'react'

function Footer({ oculto }) {
  return (
    <footer id="contacto" className={oculto ? 'hidden footer-legal' : 'footer-legal'}>
      <div className="footer-warning">
        <p>Contáctame</p>
      </div>
      <div style={{ margin: '1rem 0' }}>
        <a href="https://github.com/can23384" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}>
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" alt="GitHub" width="32" />
        </a>
        <a href="https://www.linkedin.com/in/eliazar-canastuj" target="_blank" rel="noreferrer" style={{ margin: '0 0.5rem' }}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" />
        </a>
        <a href="mailto:ecanastuj@gmail.com" style={{ margin: '0 0.5rem' }}>
          <img src="https://img.icons8.com/fluency/48/000000/gmail.png" alt="Email" width="32" />
        </a>
      </div>
      <p style={{ marginTop: '1rem' }}>
        © 2025 Eliazar Canastuj
      </p>
    </footer>
  )
}

export default Footer