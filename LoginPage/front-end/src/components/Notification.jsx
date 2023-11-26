import React from "react";

function Notification({ status, tipo, fnClose }) {
  let classe =
    "flex flex-col justify-between absolute right-4 top-4 p-4 bg-white w-96 h-44 shadow border-l-4 animate-myAnimation transition-all";
  let p1, p2;

  if (status == "ok") {
    classe += " border-green-500";
    p1 = "Success!";
    p2 =
      tipo == "login" ? "Essa conta existe!" : "Cadastro efetuado com sucesso!";
  } else {
    classe += " border-red-500";
    p1 = "Fail!";
    p2 = tipo == "login" ? "Essa conta não existe!" : "Não foi possivel realizar o cadastro!";
  }

  return (
    <div className={classe}>
      <p className="text-2xl">{p1}</p>
      <p>{p2}</p>
      <button
        className="w-44 p-1 text-white bg-[#1e1e1e] rounded hover:bg-slate-950"
        onClick={fnClose}
      >
        OK!
      </button>
    </div>
  );
}

export default Notification;
