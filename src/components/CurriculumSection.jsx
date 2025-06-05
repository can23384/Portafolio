import React from 'react'

function CurriculumSection({ oculto }) {
  return (
    <section className={oculto ? 'hidden section' : 'section'}>
      <h2 data-aos="fade-up">Currículum</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Consulta mi currículum para obtener más información:
      </p>
      <div className="download-buttons">
        <button
          className="btn"
          data-aos="zoom-in-right"
          onClick={() => window.open('https://www.canva.com/design/DAGpbOG_qFw/bqvrSE8WJhwzTjufsfU62g/edit?utm_content=DAGpbOG_qFw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', '_blank')}
        >
          📄 Ver
        </button>
      </div>
    </section>
  )
}

export default CurriculumSection