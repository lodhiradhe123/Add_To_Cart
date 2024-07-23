import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Cardcontext from "./components/contexts/Cardcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Cardcontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Cardcontext>
);
