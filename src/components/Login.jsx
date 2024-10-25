import React, { useState, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { UsrHand } from "../context/UserContext";
import { CreatrHand } from "../context/CreatorContext";
import axios from "axios";
import "../styles/Login.css";

function Login({ open, onClose }) {
  const { log, setLog } = UsrHand();
  const { creator, setCreator } = CreatrHand();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const buttonRef = useRef(null);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://itr-mysql-project-d385ad05f863.herokuapp.com/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "Login Successfully") {
          setLog(true);
          setCreator(email);
          buttonRef.current.click();
        } else {
          alert(res.data);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="modalContainer">
          <div className="title-container">
            <h1>Log In</h1>
          </div>
          <div className="modalClose">
            <p onClick={onClose} className="closeBtn" ref={buttonRef}>
              <AiFillCloseCircle />
            </p>
          </div>
          <div className="content">
            <form action="" onSubmit={handleSubmit}>
              <div className="col position relative">
                <label htmlFor="mailIn" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mailIn"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <br />
              <div className="col position relative">
                <label htmlFor="passIn" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passIn"
                  autoComplete="off"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  required
                />
              </div>
              <br />
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </form>
            <br />
            <br />
            <p className="text-sm text-primary text-center">
              Not Registered Yet?{" "}
              <NavLink to="/register">Register Here</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
