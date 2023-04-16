import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StoreContextProvider from "./Context/storeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);
