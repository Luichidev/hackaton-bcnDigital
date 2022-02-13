import { useContext, useRef } from 'react'
import '../App.css'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useForm } from 'react-hook-form'
import { Checkbox } from './Checkbox'
import { useRandomAvatar } from '../hooks/useRandomAvatar'
import { useLocation } from 'wouter'
import DataContext from '../context/DataContext'

export function FormRegister() {
  const avatarImg = useRef(null)
  const { setData } = useContext(DataContext)
  const [, pushLocation] = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [avatar, setAvatar] = useLocalStorage(
    'avatar',
    './images/no-avatar.png'
  )

  const onSubmit = (data) => {
    data.img = avatar
    setData(data)
    pushLocation('/resume')
  }

  const handleClick = (e) => {
    e.preventDefault()
    const avatarRandom = useRandomAvatar()
    setAvatar(avatarRandom)
  }

  return (
    <section className="form">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            placeholder="ejemplo@ejemplo.com"
            {...register('email', {
              required: {
                value: true,
              },
              pattern: {
                value: /^\S+@\S+$/i,
              },
            })}
            className={errors.email && 'error'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            {...register('name', {
              required: {
                value: true,
              },
            })}
            className={errors.name && 'error'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea {...register('description')} cols="30" rows="5"></textarea>
        </div>
        <div className="form-group flex-container">
          <div className="flex-1">
            <label htmlFor="country">Pais:</label>
            <input
              type="text"
              {...register('country', {
                required: {
                  value: true,
                },
              })}
              className={errors.country && 'error'}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="city">Ciudad de residencia</label>
            <input
              type="text"
              {...register('city', {
                required: {
                  value: true,
                },
              })}
              className={errors.city && 'error'}
            />
          </div>
        </div>
        <div className="form-group flex-container">
          <div className="avatar flex-1">
            <img ref={avatarImg} src={avatar} alt="Avatar" />
          </div>
          <div className="button flex-1">
            <button className="btn bg-secondary" onClick={handleClick}>
              Generar
            </button>
          </div>
        </div>
        <div className="form-group flex-container">
          <div className="flex-1">
            <label htmlFor="years">Años de experiencia:</label>
            <input
              type="number"
              {...register('years', {
                required: {
                  value: true,
                },
              })}
              className={errors.years && 'error'}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="sector">Sector</label>
            <select
              {...register('sector', {
                required: {
                  value: true,
                },
                validate: {
                  'Selecciona una opción': (sector) => sector !== 'na',
                },
              })}
              className={errors.sector && 'error'}
            >
              <option value="na">-</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mobile">Mobile</option>
              <option value="data">Data</option>
            </select>
          </div>
        </div>
        <h2 className="skill-title">Skills</h2>
        <div className="form-group flex-container">
          <div className="skill-group flex-1">
            <Checkbox register={register} name="js" title="JavaScript" />
            <Checkbox register={register} name="html" title="HTML5" />
            <Checkbox register={register} name="css" title="CSS3" />
            <Checkbox register={register} name="btp" title="Boostrap" />
          </div>
          <div className="skill-group flex-1">
            <Checkbox register={register} name="twd" title="Tailwind" />
            <Checkbox register={register} name="rct" title="React" />
            <Checkbox register={register} name="vue" title="Vue" />
            <Checkbox register={register} name="ang" title="Angular" />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn bg-primary">
            Vista previa
          </button>
        </div>
      </form>
    </section>
  )
}
