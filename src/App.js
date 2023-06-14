import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Login, SignUp, Account } from "./Pages";
import {
  Home,
  Explore,
  Bookmark,
  Like,
  Profile,
} from "./Pages/Account/PrivatePages";

function App() {
  return (
    <div className="app bg-stone-50 dark:bg-stone-950 transition-all duration-500 dark:text-stone-50">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Account />}>
          <Route path="home" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="like" element={<Like />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
