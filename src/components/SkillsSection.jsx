import React from 'react'

function SkillsSection({ oculto }) {
  return (
    <>
      <section className={oculto ? 'hidden section info bg-2' : 'section info bg-2'} id="personajes" data-aos="fade-up">
        <div className="section-header">
          <h2>Skills</h2>
        </div>
      </section>
      <section className={oculto ? 'hidden section character-profile' : 'section character-profile'}>
        {/* Lenguajes */}
        <div className="character-container" data-aos="fade-up">
          <div className="character-text">
            <h2>Lenguajes de programación</h2>
            <h3 className="character-sub">
              JavaScript, Python, C++, HTML &amp; CSS, Java
            </h3>
            <p>
              Soy desarrollador con experiencia en varios lenguajes, tanto para el
              desarrollo web como para la programación general. Me enfoco en
              escribir código limpio, estructurado y fácil de mantener. Me gusta
              seguir aprendiendo y mejorar mis habilidades constantemente.
            </p>
          </div>
          <div className="character-image" style={{ backgroundImage: "url('https://concepto.de/wp-content/uploads/2018/09/lenguaje-de-programaci%C3%B3n-e1537466894547.jpg')" }}></div>
        </div>
        {/* Bases de datos */}
        <div className="character-container" data-aos="fade-up" style={{ flexDirection: 'row-reverse' }}>
          <div className="character-text">
            <h2>Bases de datos</h2>
            <h3 className="character-sub">
              MySQL, PostgreSQL, MongoDB, Firebase
            </h3>
            <p>
              Tengo experiencia trabajando con bases de datos relacionales y
              NoSQL, diseñando esquemas eficientes, optimizando consultas y
              asegurando la integridad y seguridad de los datos. He manejado
              tanto bases de datos tradicionales como MySQL y PostgreSQL, como
              bases de datos orientadas a documentos como MongoDB, y también he
              integrado soluciones en tiempo real con Firebase para aplicaciones
              web y móviles.
            </p>
          </div>
          <div className="character-image" style={{ backgroundImage: "url('https://www.aceinfoway.com/blog/wp-content/uploads/2020/03/Best-Database-to-work-with-in-2020.jpg')" }}></div>
        </div>
        {/* Herramientas */}
        <div className="character-container" data-aos="fade-up">
          <div className="character-text">
            <h2>Herramientas de desarrollo</h2>
            <h3 className="character-sub">
              VS Code, WebStorm, Docker, Postman
            </h3>
            <p>
              Estoy familiarizado con diversas herramientas que facilitan el
              desarrollo y despliegue de software, incluyendo entornos de
              desarrollo como Visual Studio Code, sistemas de control de versiones
              como Git y plataformas de colaboración como GitHub. También he
              utilizado Docker para crear entornos de trabajo consistentes y
              Postman para probar y validar APIs, asegurando la calidad y
              eficiencia en el desarrollo de aplicaciones.
            </p>
          </div>
          <div className="character-image" style={{ backgroundImage: "url('https://images.ctfassets.net/lzny33ho1g45/developer-tools-p-img/b3531d4b48255d0fec4d2102fc01111c/file.png?w=1520&fm=jpg&q=31&fit=thumb&h=760')" }}></div>
        </div>
      </section>
    </>
  )
}

export default SkillsSection