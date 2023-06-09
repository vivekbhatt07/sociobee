import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Login, SignUp } from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
