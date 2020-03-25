import React from "react";

import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

const Logon = () => {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />
      </section>

      <form>
        <h1>Faça seu logon</h1>
        <input placeholder="Sua ID" />
        <button className="button" type="submit">Entrar</button>
        <a className="linkInfo" href="/register">
           Não tenho cadastro
        </a>
      </form>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};

export default Logon;
