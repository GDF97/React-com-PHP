import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [mostrarLogin, setMostrarLogin] = useState("teste");
  const [notification, setNotification] = useState(false);
  const [statusAPI, setStatusAPI] = useState("");
  const [tipoDeEntrada, setTipoDeEntrada] = useState("");

  let classeLogin = "ease-in-out duration-1000 w-28 h-9 border-black border";
  let classeRegister =
    "ease-in-out duration-1000 w-28 h-9 border-black border bg-black text-white";

  if (mostrarLogin) {
    classeLogin = "ease-in-out duration-200 w-28 h-9 border-black border";
    classeRegister =
      "ease-in-out duration-1000 w-28 h-9 border-black border bg-black text-white";
  } else {
    classeLogin =
      "ease-in-out duration-1000 w-28 h-9 border-black border bg-black text-white";
    classeRegister = "ease-in-out duration-200 w-28 h-9 border-black border";
  }

  const fnClose = () => {
    setNotification(false);
  };

  const fnLogin = async (login, senha) => {
    console.log(login, senha);

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha }),
    };

    const url = `http://localhost:80/React+PHP/LoginPage/back-end/login.php`;

    setTipoDeEntrada("login");

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      setStatusAPI(data.status);
    } catch (error) {
      console.error(error);
    }
  };

  const fnCadastro = async (login, senha, email) => {
    console.log(login, senha, email);

    setTipoDeEntrada("cadastro");

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha, email }),
    };

    const url = `http://localhost:80/React+PHP/LoginPage/back-end/cadastro.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      setStatusAPI(data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      <div className="w-[26rem]">
        <div>
          <button className={classeLogin} onClick={() => setMostrarLogin(true)}>
            Login
          </button>
          <button
            className={classeRegister}
            onClick={() => setMostrarLogin(false)}
          >
            Register
          </button>
        </div>
        <div className="flex flex-col gap-11 px-8 py-12 w-full h-full min-h-[28rem] bg-white border-black border shadow-[4px_4px_0_1px_#000]">
          {mostrarLogin ? (
            <LoginForm notification={setNotification} fnLogin={fnLogin} />
          ) : (
            <RegisterForm
              notification={setNotification}
              fnCadastro={fnCadastro}
            />
          )}
        </div>
      </div>
      {notification ? (
        <Notification
          status={statusAPI}
          tipo={tipoDeEntrada}
          fnClose={fnClose}
        />
      ) : null}
    </div>
  );
}

export default App;
