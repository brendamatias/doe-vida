import React from "react"

import logo from "../../assets/logo.png";

export default function Header() {
  function enableForm() {
    document.querySelector(".form").classList.toggle("hide");
  }

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="Doe!"></img>
        
        <h2>A sua doação importa!</h2>
        <p>Até 3 vidas com 1 doação</p>
        <p>Mais de 38.000 doações são necessárias todos os dias</p>
        <p>Apenas 1,9% da população brasileira doa sangue.</p>
        
        <button onClick={() => enableForm()}>Quero ajudar</button>
      </header>
    </>
  )
}
