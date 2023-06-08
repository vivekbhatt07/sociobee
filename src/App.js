import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Login } from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
