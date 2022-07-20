import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeProvider } from "./Components/Context/ModeContext";
import { AuthContextProvider } from "./Components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
