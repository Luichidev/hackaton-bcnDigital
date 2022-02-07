import "./App.css";

function App() {
  const handleClick = () => {
    console.log("ok");
  };
  return (
    <main>
      <section>
        <div className="form">
          <h1>Formulario</h1>
          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Correo:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group"></div>
            <label htmlFor="name">Nombre completo:</label>
            <input type="text" id="name" />

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
                <input type="text" />
              </div>
              <div className="flex-1">
                <label htmlFor="city">Ciudad de residencia</label>
                <input type="text" />
              </div>
            </div>
            <div className="form-group flex-container">
              <div className="avatar flex-1">
                <img src="./images/no-avatar.png" alt="Avatar" />
              </div>
              <div className="button flex-1">
                <button className="btn" onClick={handleClick}>
                  Generar
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
