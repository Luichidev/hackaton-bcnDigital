import { useRef } from "react";
import "./App.css";
import { useField } from "./hooks/useField";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const avatarImg = useRef(null);
  const [avatar, setAvatar] = useLocalStorage(
    "avatar",
    "./images/no-avatar.png"
  );

  const handleClick = (e) => {
    e.preventDefault();
    const nroRandom = Math.floor(Math.random() * 1000);
    const avatarRandom = `https://avatars.dicebear.com/api/avataaars/${nroRandom}.svg`;
    setAvatar(avatarRandom);
  };

  const handleSubmit = (params) => {
    console.log(params);
  };

  const username = useField({ type: "text" });
  const email = useField({ type: "email" });
  const country = useField({ type: "text" });
  const city = useField({ type: "text" });
  const years = useField({ type: "number" });

  return (
    <main>
      <section>
        <div className="form">
          <h1>Formulario</h1>
          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input {...email} name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre completo:</label>
              <input {...username} name="name" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                placeholder="Breve descripción"
              ></textarea>
            </div>
            <div className="form-group flex-container">
              <div className="flex-1">
                <label htmlFor="country">Pais:</label>
                <input {...country} id="country" name="country" required />
              </div>
              <div className="flex-1">
                <label htmlFor="city">Ciudad de residencia</label>
                <input {...city} id="city" name="city" required />
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
                <input {...years} id="years" name="years" required />
              </div>
              <div className="flex-1">
                <label htmlFor="sector">Sector</label>
                <select name="sector" id="sector">
                  <option value="-1">-</option>
                  <option value="0">Frontend</option>
                  <option value="1">Backend</option>
                  <option value="2">Mobile</option>
                  <option value="3">Data</option>
                </select>
              </div>
            </div>
            <h2 className="skill-title">Skills</h2>
            <div className="form-group flex-container">
              <div className="skill-items flex-1">
                <input id="js" name="js" type="checkbox" />
                <label htmlFor="years">JavaScript</label>
              </div>
              <div className="skill-items flex-1">
                <input id="html" name="html" type="checkbox" />
                <label htmlFor="sector">HTML</label>
              </div>
            </div>
            <div className="form-group">
              <button className="btn bg-primary" onClick={handleSubmit}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
