import React, { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")

  return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              Bem-vindo!
            </span>

            <span className="login-form-title">
              <img src={''} alt="" />
            </span>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val input' : 'input'} 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val input' : 'input'}  type="password"
               value={password}
               onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="create-an-account">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2" href="#">Criar Conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;