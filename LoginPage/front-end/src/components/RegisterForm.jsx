import { useState } from "react";

const RegisterForm = ({ notification, fnCadastro }) => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [inputType, setInputType] = useState("password");

  const changeInputType = () => {
    if (inputType == "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const showValues = () => {
    if (!login || !password || !email) return;

    fnCadastro(login, password, email);
    notification(true);
    setLogin("");
    setPassword("");
		setEmail("");
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-2xl">Login:</p>
        <input
          type="text"
          value={login}
          onChange={(ev) => setLogin(ev.target.value)}
          className="p-2 w-full outline-none text-sm border-black border shadow-[4px_4px_0_1px_#000]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl">Email:</p>
        <input
          type="text"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="p-2 w-full outline-none text-sm border-black border shadow-[4px_4px_0_1px_#000]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-2xl">Password:</p>
        <div className="relative flex items-center">
          <input
            type={inputType}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="p-2 w-full outline-none text-sm border-black border shadow-[4px_4px_0_1px_#000]"
          />
          <button
            onClick={changeInputType}
            className="w-6 h-6 rounded-full border border-black absolute right-2"
          ></button>
        </div>
      </div>
      <button
        onClick={showValues}
        className="w-full bg-[#1E1E1E] p-2 text-white border-none rounded hover:bg-black duration-1000 ease-in-out"
      >
        Entrar
      </button>
    </>
  );
};

export default RegisterForm;
