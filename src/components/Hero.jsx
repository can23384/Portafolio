import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content" data-aos="zoom-in">
        <div className="logo-box"></div>
        <button
          className="play-button"
          onClick={() => window.open('https://github.com/can23384', '_blank')}
        >
          🚀 Eliazar
        </button>
      </div>
    </section>
  )
}

export default Hero