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

  const handleNext = (params) => {
    console.log(params);
  };

  const username = useField({ type: "text" });
  return (
    <main>
      <section>
        <div className="form">
          <h1>Formulario</h1>
          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input {...username} name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre completo:</label>
              <input type="text" name="name" id="name" required />
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
                <input type="text" id="country" name="country" required />
              </div>
              <div className="flex-1">
                <label htmlFor="city">Ciudad de residencia</label>
                <input type="text" id="city" name="city" required />
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
            <div className="form-group">
              <button className="btn bg-primary" onClick={handleNext}>
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
