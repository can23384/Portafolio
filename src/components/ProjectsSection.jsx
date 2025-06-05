// src/components/ProjectsSection.jsx
import React from 'react'
import ProjectPostcard from './ProjectPostcard'

function ProjectsSection({ oculto, refSeccionLugares, mostrarDetalleLugar }) {
  // Si la prop `oculto` es true, no renderizamos nada de "Proyectos"
  if (oculto) return null

  return (
    <>
      {/* Encabezado de Proyectos */}
      <section
        className="section info bg-3"
        id="lugares"
        ref={refSeccionLugares}
        data-aos="fade-up"
      >
        <h2>Proyectos</h2>
      </section>

      {/* Tres tarjetas de proyecto */}
      <ProjectPostcard
        imagenUrl="https://colegioruzafa.com/wp-content/uploads/tecnico-farmacia.jpg"
        nombre="Pharmacenter"
        idDetalle="detalle-vicecity"
        mostrarDetalleLugar={mostrarDetalleLugar}
      />

      <ProjectPostcard
        imagenUrl="https://cdn.dribbble.com/userupload/13811983/file/original-72f60b21b783e262ea429047983849e4.png?resize=752x&vertical=center"
        nombre="Calculadora"
        idDetalle="detalle-leonida"
        mostrarDetalleLugar={mostrarDetalleLugar}
      />

      <ProjectPostcard
        imagenUrl="https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123455.png?raw=true"
        nombre="BeatMood"
        idDetalle="detalle-ambrosia"
        mostrarDetalleLugar={mostrarDetalleLugar}
      />
    </>
  )
}

export default ProjectsSection
