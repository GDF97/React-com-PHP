import React, { useState } from "react";

const Login = ({ fn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-full flex flex-col gap-8 pt-8">
      <div className="flex flex-col gap-2">
        <p className="text-lg dark:text-slate-100">Username:</p>
        <input
          type="text"
          className="border border-black shadow-[4px_4px_1px_#000] outline-none p-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg dark:text-slate-100">Password:</p>
        <input
          type="text"
          className="border border-black shadow-[4px_4px_1px_#000] outline-none p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="w-full text-white bg-[#1E1E1E] flex items-center justify-center gap-2 p-1 dark:bg-blue-800"
        onClick={() => fn(username, password)}
      >
        Login
        <box-icon name="right-arrow-alt" color="rgba(255,255,255,1)"></box-icon>
      </button>
    </div>
  );
};

export default Login;
