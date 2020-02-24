import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <section className="form hide">
        <h2>Entre na lista de doadores</h2>
        <form action="/">
          <input type="text" name="name" placeholder="Nome completo" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="text" name="blood" placeholder="Tipo sanguíneo" />

          <button>Quero ajudar</button>
        </form>
      </section>

      <main>
        <h2>Últimos <span>doadores</span></h2>

        <section className="donors">
          <div className="donor">
            <div className="blood">AB+</div>
            <p>Diego Fernandes</p>
          </div>
          <div className="donor">
            <div className="blood">AB+</div>
            <p>Cleiton Souza</p>
          </div>
          <div className="donor">
            <div className="blood">AB+</div>
            <p>Robson Marques</p>
          </div>
          <div className="donor">
            <div className="blood">AB+</div>
            <p>Mayk Brito</p>
          </div>
        </section>
      </main>

      <footer>Made with <span>❤</span> in Brazil</footer>
    </>
  );
}

export default App;
