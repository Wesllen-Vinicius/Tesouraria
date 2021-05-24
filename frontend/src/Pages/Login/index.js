import React, { useState } from "react";
import { HiFingerPrint } from "react-icons/hi";
import "./login.css";
import Axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  function logar() {
    if (email === "" || senha === "") {
      alert("campos vazios");
    }
    Axios.get("http://localhost:3001/api/login", {
      email: email,
      senha: senha,
    });
  }
  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <div>
            <HiFingerPrint size={50} /> <span>GiCat</span>
          </div>
        </div>
        <form className="style">
          <input
            type="email"
            id="Login"
            class="fadeIn second"
            name="login"
            placeholder="Usuario"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="Senha"
            class="fadeIn third"
            name="senha"
            placeholder="Senha"
            onChange={e => setSenha(e.target.value)}
          />
        </form>
        <div id="formFooter">
          <input
            type="button"
            onClick={logar}
            class="fadeIn fourth "
            value="Logar"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
