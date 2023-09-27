import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import DictionaryProvider from "./context/DictionaryProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>
);
