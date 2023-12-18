import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ConfigIcon from "../../assets/icons/ConfigIcon.png";
import { API_URL } from "../../constants";
import "boxicons";

const Forms = ({ getUserId }) => {
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);
  const [userid, setUserId] = useState(null);

  let classeLogin, classeRegister;

  const changeForms = () => {
    setLoginForm(!loginForm);
  };

  if (loginForm) {
    classeLogin = "bg-white px-6 py-1";
    classeRegister = "px-6 py-1 text-white bg-[#1e1e1e]";
  } else {
    classeRegister = "bg-white px-6 py-1";
    classeLogin = "px-6 py-1 text-white bg-[#1e1e1e]";
  }

  const fnLogin = async (username, password) => {
    if (!username || !password) return;

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    const url = `${API_URL}/forms/login.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data.message);
      getUserId(data.user_id);
      setUserId(data.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  const fnRegister = async (name, username, password) => {
    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, password }),
    };

    const url = `${API_URL}/forms/register.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {userid ? <Navigate to="/TodoListApp" /> : null}
      <div className="w-80">
        <div className="w-full flex justify-between items-center">
          <div className="w-fit border border-black border-b-0">
            <button className={classeLogin} onClick={changeForms}>
              Login
            </button>
            <button className={classeRegister} onClick={changeForms}>
              Register
            </button>
          </div>
          <div className="relative">
            <button className="border-none" onClick={() => setOpen(!open)}>
              <img src={ConfigIcon} alt="teste" width={20} />
            </button>
            {open ? (
              <div className="absolute w-40 bg-white p-1 border border-black shadow-[2px_2px_1px_#000] bottom-10 right-0">
                <button> Dark Mode </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full min-h-[360px] bg-white border border-black shadow-[4px_4px_1px_#000] flex flex-col p-4">
          {loginForm ? <Login fn={fnLogin} /> : <Register fn={fnRegister} />}
        </div>
      </div>
    </div>
  );
};

export default Forms;
