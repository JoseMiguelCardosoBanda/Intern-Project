import React, { useState } from "react";
import Login from "./Login";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ThemeHand } from "../context/ThemeContext";
import { UsrHand } from "../context/UserContext";

function NavBar() {
  const { theme, setTheme } = ThemeHand();
  const { log, setLog } = UsrHand();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  const isLogged = () => {
    if (!log) {
      setOpenModal(true);
    }
  };

  const LogOut = () => {
    setLog(false);
  };

  return (
    <>
      <nav className="navbar bg-success border border-success-subtle rounded-3">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <p style={{ color: "#000" }} onClick={goHome}>
                <AiFillHome size={35} />
              </p>
            </div>
            <div className="col-auto">
              <button
                className={!theme ? "btn btn-dark" : "btn btn-light"}
                onClick={changeTheme}
              >
                {!theme ? <FaLightbulb /> : <FaRegLightbulb />}
              </button>
            </div>
            <div className="col-auto">
              {log ? <h3>Welcome Back!!</h3> : null}
            </div>
            <div className="col-auto">
              {log ? (
                <button className="btn btn-danger" onClick={LogOut}>
                  Log Out
                </button>
              ) : (
                <button className="btn btn-primary" onClick={isLogged}>
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      {createPortal(
        <Login
          open={openModal}
          onClose={() => setOpenModal(false)}
          log={log}
        />,
        document.body
      )}
    </>
  );
}

export default NavBar;
