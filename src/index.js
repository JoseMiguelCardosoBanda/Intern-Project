import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContextProv from "./context/ThemeContext";
import UsrContextProv from "./context/UserContext";
import CreatrContextProv from "./context/CreatorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProv>
    <UsrContextProv>
      <CreatrContextProv>
        <App />
      </CreatrContextProv>
    </UsrContextProv>
  </ThemeContextProv>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
