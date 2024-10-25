import React from "react";
import { ThemeHand } from "../context/ThemeContext";
import { UsrHand } from "../context/UserContext";

function Form() {
  const { theme, setTheme } = ThemeHand();
  const { log, setLog } = UsrHand();

  if (!log)
    return (
      <div
        className={
          !theme
            ? "min-vh-100 p-3 mb-2 bg-light text-dark rounded-3"
            : "min-vh-100 p-3 mb-2 bg-dark text-white rounded-3"
        }
      >
        <h1>Only For Registered Users</h1>
      </div>
    );

  return (
    <>
      <div
        className={
          !theme
            ? "min-vh-100 p-3 mb-2 bg-light text-dark rounded-3"
            : "min-vh-100 p-3 mb-2 bg-dark text-white rounded-3"
        }
      >
        <h1>Form</h1>
      </div>
    </>
  );
}

export default Form;
