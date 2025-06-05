import React from 'react'

function StudiesSection({ oculto }) {
  return (
    <section className={oculto ? 'hidden section' : 'section'} id="descarga">
      <h2 data-aos="fade-up">Estudios</h2>
      <article className="news-item" data-aos="fade-right">
        <h3>Universidad</h3>
        <p>
          Actualmente curso el tercer año de la carrera de Ciencias de la
          Computación en la Universidad del Valle de Guatemala. A lo largo de
          mi formación universitaria, he adquirido una sólida base en
          programación, desarrollo de software y gestión de proyectos. Mi
          desempeño académico se refleja en un promedio general de
          aproximadamente 80 puntos, lo cual respalda mi compromiso y
          dedicación al aprendizaje continuo.
        </p>
      </article>
      <article className="news-item" data-aos="fade-left">
        <h3>Colegio</h3>
        <p>
          Obtuve el título de Bachiller en Ciencias y Letras en el Colegio
          Liceo Guatemala. Durante mi etapa escolar comencé a interesarme por
          el mundo de la programación, explorándolo de forma autodidacta
          mediante la observación, el estudio y el aprendizaje independiente.
          Aunque el contacto formal con la programación fue limitado, esa
          etapa despertó mi curiosidad y motivación por el desarrollo
          tecnológico. Mi desempeño académico fue sólido, con un promedio de
          calificaciones alrededor de 85 puntos.
        </p>
      </article>
    </section>
  )
}

export default StudiesSection