import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Login, SignUp, Account } from "./Pages";
import {
  Home,
  Explore,
  Bookmark,
  Like,
  Profile,
  PostDetail,
} from "./Pages/Account/PrivatePages";
import { PrivateRoute } from "./Components";

function App() {
  return (
    <div className="app bg-stone-50 dark:bg-stone-950 transition-all duration-500 dark:text-stone-50">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <Bookmark />
            </PrivateRoute>
          }
        />
        <Route
          path="/like"
          element={
            <PrivateRoute>
              <Like />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/:userId"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
