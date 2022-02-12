import { useContext } from 'react'
import { useLocation } from 'wouter'
import DataContext from '../context/DataContext'
import '../Resume.css'
import '../index.css'

export function Resume() {
  const { data } = useContext(DataContext)
  const [path, pushLocation] = useLocation()
  console.log(data)

  const handleClick = (e) => {
    e.preventDefault()
    pushLocation('/')
  }
  return (
    <section className="resume">
      <h1>RESUMEN</h1>{' '}
      <button onClick={handleClick} className="btn bg-primary">
        VOLVER
      </button>
      <div className="resume-container flex-container">
        <div className="flex-1 details">
          <h2>Detalles profesionales</h2>
          <figure className="img-avatar">
            <img src={data.img} alt="avatar" />
          </figure>
          <div className="details-content">
            <div className="details-item">
              <label htmlFor="name">Nombre:</label>
              <span>{data.name}</span>
            </div>
            <div className="details-item">
              <label htmlFor="name">Pais:</label>
              <span>{data.country}</span>
            </div>
            <div className="details-item">
              <label htmlFor="name">Ciudad:</label>
              <span>{data.city}</span>
            </div>
            <div className="details-item">
              <label htmlFor="name">Correo:</label>
              <span>{data.email}</span>
            </div>
          </div>
        </div>
        <div className="flex-2 about">
          <h2>Acerca de ti</h2>
          <div className="about-content flex-container">
            <div className="content-left flex-1">
              <div className="about-item">
                <label htmlFor="name">Nombre:</label>
                <span>{data.name}</span>
              </div>
              <div className="about-item">
                <label htmlFor="country">Pais:</label>
                <span>{data.country}</span>
              </div>
              <div className="about-item">
                <label htmlFor="year">Experiencia:</label>
                <span>{data.years} años</span>
              </div>
            </div>
            <div className="content-right flex-1">
              <div className="about-item">
                <label htmlFor="email">Correo:</label>
                <span>{data.email}</span>
              </div>
              <div className="about-item">
                <label htmlFor="city">Ciudad:</label>
                <span>{data.city}</span>
              </div>
              <div className="about-item">
                <label htmlFor="sector">Rol/Puesto:</label>
                <span>{data.sector}</span>
              </div>
            </div>
          </div>
          <div className="about-tags">
            <h2>Habilidades</h2>
            <div className="tags-content flex-container">
              {data.js ? (
                <span className="tags bg-secondary">JavaScript</span>
              ) : (
                ''
              )}
              {data.html ? (
                <span className="tags bg-secondary">HTML5</span>
              ) : (
                ''
              )}
              {data.css ? <span className="tags bg-secondary">CSS3</span> : ''}
              {data.btp ? (
                <span className="tags bg-secondary">Boostrap</span>
              ) : (
                ''
              )}
              {data.twd ? (
                <span className="tags bg-secondary">Tailwind</span>
              ) : (
                ''
              )}
              {data.rct ? <span className="tags bg-secondary">React</span> : ''}
              {data.vue ? <span className="tags bg-secondary">Vue</span> : ''}

              {data.ang ? (
                <span className="tags bg-secondary">Angular</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="about-description">
            <h2>Descripción</h2>
            <div className="description-content">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
