import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectDetail from './components/ProjectDetail'
import StudiesSection from './components/StudiesSection'
import CurriculumSection from './components/CurriculumSection'
import Footer from './components/Footer'


function App() {
  const [detalleAbierto, setDetalleAbierto] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const refDetalleVicecity = useRef(null)
  const refDetalleLeonida = useRef(null)
  const refDetalleAmbrosia = useRef(null)
  const refSeccionLugares = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120 })
    const faders = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    faders.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const mostrarDetalleLugar = idLugar => {
    setDetalleAbierto(idLugar)
    setMenuAbierto(false)
    let ref = null
    if (idLugar === 'detalle-vicecity') ref = refDetalleVicecity.current
    if (idLugar === 'detalle-leonida') ref = refDetalleLeonida.current
    if (idLugar === 'detalle-ambrosia') ref = refDetalleAmbrosia.current
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const volverASecciones = () => {
    setDetalleAbierto(null)
    if (refSeccionLugares.current) {
      refSeccionLugares.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMenu = () => {
    setMenuAbierto(prev => !prev)
  }

  return (
    <div>
      <Header oculto={!!detalleAbierto} toggleMenu={toggleMenu} />
      <SideMenu abierto={menuAbierto} cerrarMenu={() => setMenuAbierto(false)} refSeccionLugares={refSeccionLugares} />
      <Hero />
      <InfoSection oculto={!!detalleAbierto} />
      <SkillsSection oculto={!!detalleAbierto} />
      <ProjectsSection
        oculto={!!detalleAbierto}
        refSeccionLugares={refSeccionLugares}
        mostrarDetalleLugar={mostrarDetalleLugar}
      />
      <ProjectDetail
        id="detalle-vicecity"
        refDetalle={refDetalleVicecity}
        abierto={detalleAbierto === 'detalle-vicecity'}
        titulo="Pharmacenter"
        subtitulo="Control automatizado de farmacia"
        descripcion={`Este proyecto tiene como objetivo resolver un problema recurrente
          en una farmacia local: la mala organización y gestión de los
          medicamentos debido a la falta de un sistema digital. Actualmente,
          el personal de la farmacia depende de métodos manuales, como el uso
          de papel, lo cual dificulta el control del inventario, reduce la
          eficiencia y aumenta la probabilidad de errores. La solución propuesta consiste en el desarrollo de una página web que permita llevar un control ordenado y automatizado del inventario de medicamentos. Además, la plataforma ofrecerá la opción de realizar ventas en línea, lo que facilitará tanto la administración interna como la experiencia del cliente.`}
        repoLink="https://github.com/Josero31/pharmacenter_proyecto"
        imagenes={[
          'https://colegioruzafa.com/wp-content/uploads/tecnico-farmacia.jpg',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20122849.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20122904.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20122916.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20122929.png?raw=true',
        ]}
        volverASecciones={volverASecciones}
      />
      <ProjectDetail
        id="detalle-leonida"
        refDetalle={refDetalleLeonida}
        abierto={detalleAbierto === 'detalle-leonida'}
        titulo="Calculadora"
        subtitulo="Calculadora funcional en web"
        descripcion={`Esta calculadora web, accesible desde cualquier navegador mediante
          una URL, ofrece las funciones básicas que se encuentran en
          cualquier calculadora convencional. Está desarrollada utilizando
          React con la herramienta de desarrollo rápido Vite y su
          arquitectura se basa en componentes reutilizables. Además, cuenta
          con pruebas funcionales correctamente implementadas, así como
          documentación interactiva a través de Storybook, lo que garantiza
          un desarrollo limpio, mantenible y profesional.`}
        repoLink="https://github.com/can23384/Proyecto_Calculadora"
        demoLink="https://calicheoficial.lat/23384/Calculadora/"
        imagenes={[
          'https://cdn.dribbble.com/userupload/13811983/file/original-72f60b21b783e262ea429047983849e4.png?resize=752x&vertical=center',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123229.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123247.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123321.png?raw=true',
        ]}
        volverASecciones={volverASecciones}
      />
      <ProjectDetail
        id="detalle-ambrosia"
        refDetalle={refDetalleAmbrosia}
        abierto={detalleAbierto === 'detalle-ambrosia'}
        titulo="BeatMood"
        subtitulo="App de recomendación de música"
        descripcion={`Esta aplicación, actualmente en desarrollo, tiene como objetivo
          optimizar la experiencia de recomendaciones musicales para los
          usuarios. Diseñada para integrarse con plataformas de streaming
          musical, permite a los usuarios guardar sus canciones, artistas y
          géneros favoritos. A partir de esta información la aplicación
          genera recomendaciones personalizadas, adaptadas a los gustos
          musicales individuales. Su enfoque está orientado a complementar
          las aplicaciones existentes, brindando una experiencia más afinada
          y centrada en el usuario.`}
        imagenes={[
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123455.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123508.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123516.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123525.png?raw=true',
          'https://github.com/can23384/capturas/blob/main/Captura%20de%20pantalla%202025-06-04%20123537.png?raw=true',
        ]}
        volverASecciones={volverASecciones}
      />
      <StudiesSection oculto={!!detalleAbierto} />
      <CurriculumSection oculto={!!detalleAbierto} />
      <Footer oculto={!!detalleAbierto} />
    </div>
  )
}

export default App