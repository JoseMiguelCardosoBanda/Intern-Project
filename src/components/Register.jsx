import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeHand } from "../context/ThemeContext";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const { theme, setTheme } = ThemeHand();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const registered = String(new Date());
  const last_login = "";
  const role = "Admin";
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validEmail.test(email)) {
      axios
        .post("https://itr-mysql-project-d385ad05f863.herokuapp.com/register", {
          name,
          email,
          password,
          registered,
          last_login,
          role,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Invalid E-Mail!! Try Again");
    }
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div
        className={
          !theme
            ? "min-vh-100 p-3 mb-2 bg-light text-dark rounded-3"
            : "min-vh-100 p-3 mb-2 bg-dark text-white rounded-3"
        }
      >
        <center>
          <div>
            <h1>Register</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="col-md-4 position-relative">
              <label htmlFor="validation01" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="validation01"
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="validation02" className="form-label">
                E-Mail
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="validation02"
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-4 position-relative">
              <label htmlFor="validation03" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="validation03"
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
                Register
              </button>
            </div>
            <br />
            <div className="col-12">
              <button className="btn btn-warning" onClick={returnHome}>
                Return to Main Page
              </button>
            </div>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Register;
