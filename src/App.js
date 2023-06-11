import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Login, SignUp } from "./Pages";

function App() {
  return (
    <div className="app bg-stone-50 dark:bg-stone-950 transition-all duration-500 dark:text-stone-50">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
