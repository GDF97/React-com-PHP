import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms/index";
import Aplication from "./pages/App";

const App = () => {
  const [userId, setUserId] = useState(null);
  const getUserId = (id) => {
    setUserId(id);
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Forms" element={<Forms getUserId={getUserId} />} />
        <Route
          path="/TodoListApp"
          element={<Aplication id_usuario={userId} />}
        />
      </Routes>
    </>
  );
};

export default App;
