import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import {
  ThemeProvider,
  AuthProvider,
  PostProvider,
  UserProvider,
} from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <PostProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </PostProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

makeServer();
reportWebVitals();
