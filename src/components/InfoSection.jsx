import React from 'react'

function InfoSection({ oculto }) {
  return (
    <section className={oculto ? 'hidden section info bg-1' : 'section info bg-1'} id="trailer" data-aos="fade-up">
      <h2>¡Hola! Soy Eliazar</h2>
      <p>
        Soy desarrollador web con experiencia en construcción de interfaces
        intuitivas y optimizadas para la web moderna. Poseo sólidos
        conocimientos en desarrollo frontend y un enfoque orientado a
        resultados. Busco contribuir a proyectos innovadores y continuar
        creciendo profesionalmente en el área tecnológica.
      </p>
    </section>
  )
}

export default InfoSection