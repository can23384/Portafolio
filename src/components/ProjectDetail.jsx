import React from 'react'

function ProjectDetail({ id, refDetalle, abierto, titulo, subtitulo, descripcion, repoLink, demoLink, imagenes, volverASecciones }) {
  return (
    <section
      ref={refDetalle}
      id={id}
      className={`section location-detail ${abierto ? '' : 'hidden'}`}>
      <div className="horizontal-scroll">
        <div className="detail-slide">
          <button className="btn back-btn" onClick={volverASecciones}>← Volver</button>
          <div className="character-image" style={{ backgroundImage: `url('${imagenes[0]}')` }}></div>
          <div className="detail-text">
            <h2>{titulo}</h2>
            <h4>{subtitulo}</h4>
            <p>{descripcion}</p>
            {repoLink && (
              <button className="btn explore-btn" onClick={() => window.open(repoLink, '_blank')}>🚀 Repositorio</button>
            )}
            {demoLink && (
              <button className="btn explore-btn" onClick={() => window.open(demoLink, '_blank')}>Demo</button>
            )}
          </div>
        </div>
        {imagenes.slice(1).map((url, idx) => (
          <div className="photo-card" key={idx}>
            <img src={url} alt={`Captura ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectDetail