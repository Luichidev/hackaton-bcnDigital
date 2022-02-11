import { useRef } from 'react'
import '../App.css'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useForm } from 'react-hook-form'
import { Checkbox } from './Checkbox'

export function FormRegister({ toggleProfile, setToggleProfile }) {
  const avatarImg = useRef(null)

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
    console.log(data)
    setToggleProfile(!toggleProfile)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const nroRandom = Math.floor(Math.random() * 1000)
    const avatarRandom = `https://avatars.dicebear.com/api/avataaars/${nroRandom}.svg`
    setAvatar(avatarRandom)
  }

  return (
    <main>
      <section>
        <div className="form">
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
                    message: 'Este campo es requerido',
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre completo:</label>
              <input
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido',
                  },
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea
                {...register('description')}
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="form-group flex-container">
              <div className="flex-1">
                <label htmlFor="country">Pais:</label>
                <input
                  type="text"
                  {...register('country', {
                    required: {
                      value: true,
                      message: 'Este campo es requerido',
                    },
                  })}
                />
                {errors.country && (
                  <p className="error">{errors.country.message}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="city">Ciudad de residencia</label>
                <input
                  type="text"
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'Este campo es requerido',
                    },
                  })}
                />
                {errors.city && <p className="error">{errors.city.message}</p>}
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
                      message: 'Este campo es requerido',
                    },
                  })}
                />
                {errors.years && (
                  <p className="error">{errors.years.message}</p>
                )}
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
                >
                  <option value="na">-</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile</option>
                  <option value="data">Data</option>
                </select>
                {errors.sector && <p className="error">{errors.sector.type}</p>}
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
        </div>
      </section>
    </main>
  )
}
