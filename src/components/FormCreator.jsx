import React, { useState } from "react";
import FormInputField from "./FormInputField";
import { ThemeHand } from "../context/ThemeContext";
import { UsrHand } from "../context/UserContext";
import { CreatrHand } from "../context/CreatorContext";

function FormCreator() {
  const { theme, setTheme } = ThemeHand();
  const { log, setLog } = UsrHand();
  const { creator, setCreator } = CreatrHand();
  const [inputFields, setInputFields] = useState([]);
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");

  let totalText = document.getElementsByName("text[]").length;
  let totalInt = document.getElementsByName("number[]").length;
  let totalArea = document.getElementsByName("textarea[]").length;

  const insertInputField = (fieldType) => {
    setInputFields([
      ...inputFields,
      { type: fieldType, label: `${fieldType}`, id: Date.now() },
    ]);
  };

  const deleteInputField = (id) => {
    setInputFields(inputFields.filter((inputField) => inputField.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (totalText + 1 > 4 || totalInt + 1 > 4 || totalArea + 1 > 4) {
      alert("Only 4 Fields Of The Same Type Allowed");
    }
  };

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
    <div
      className={
        !theme
          ? "min-vh-100 p-3 mb-2 bg-light text-dark rounded-3"
          : "min-vh-100 p-3 mb-2 bg-dark text-white rounded-3"
      }
    >
      <div className="row">
        <div className="col">
          <button
            className="btn btn-info"
            onClick={() => insertInputField("text")}
          >
            Insert Text Field
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-info"
            onClick={() => insertInputField("textarea")}
          >
            Insert Textarea Field
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-info"
            onClick={() => insertInputField("number")}
          >
            Insert Number Field
          </button>
        </div>
      </div>
      <br />
      <br />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Form Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Form Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          required
        />
        <br />
        {inputFields.map((inputField) => (
          <>
            <FormInputField
              key={inputField.id}
              inputField={inputField}
              deleteInputField={deleteInputField}
            />
            <br />
          </>
        ))}
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default FormCreator;
