import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { ThemeHand } from "../context/ThemeContext";
import { UsrHand } from "../context/UserContext";
import Login from "./Login";

function Home() {
  const navigate = useNavigate();
  const { theme, setTheme } = ThemeHand();
  const { log, setLog } = UsrHand();
  const [openModal, setOpenModal] = useState(false);

  const newForm = () => {
    if (!log) {
      setOpenModal(true);
    } else {
      navigate("/builder");
    }
  };

  const isLogged = () => {
    if (!log) {
      setOpenModal(true);
    } else {
      navigate("/form");
    }
  };

  return (
    <>
      <div
        className={
          !theme
            ? "min-vh-100 p-3 mb-2 bg-light text-dark rounded-3"
            : "min-vh-100 p-3 mb-2 bg-dark text-white rounded-3"
        }
      >
        <h1>Forms List</h1>
        <br />
        <table className={!theme ? "table" : "table table-dark"}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <br />
        <button className="btn btn-info" onClick={newForm}>
          New Form
        </button>
      </div>
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

export default Home;
