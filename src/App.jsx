import "./App.css";

function App() {
  return (
    <main>
      <section>
        <div className="form">
          <form action="#">
            <label htmlFor="email">Correo:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="name">Nombre completo:</label>
            <input type="text" id="name" />
            <label htmlFor="description">Descripción</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Breve descripción"
            ></textarea>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;
