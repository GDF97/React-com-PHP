import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms/index";
import Aplication from "./pages/App";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const getUserInfos = (id, name) => {
    setUserId(id);
    setUserName(name);
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Forms" element={<Forms getUserInfos={getUserInfos} />} />
        <Route
          path="/TodoListApp"
          element={<Aplication id_usuario={userId} nome_usuario={userName} />}
        />
      </Routes>
    </>
  );
};

export default App;
