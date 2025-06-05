import React from 'react'

function ProjectPostcard({ imagenUrl, nombre, idDetalle, mostrarDetalleLugar }) {
  return (
    <section className="section location-postcard">
      <div className="postcard" data-aos="fade-up">
        <div className="postcard-image" style={{ backgroundImage: `url('${imagenUrl}')` }}></div>
        <button className="btn explore-btn" onClick={() => mostrarDetalleLugar(idDetalle)}>{nombre}</button>
      </div>
    </section>
  )
}

export default ProjectPostcard