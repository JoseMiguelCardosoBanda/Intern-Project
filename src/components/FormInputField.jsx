import React from "react";

const FormInputField = ({ inputField, deleteInputField }) => {
  let inputFieldElement;

  switch (inputField.type) {
    case "text":
      inputFieldElement = <input className="form-control" type="text" />;
      break;
    case "textarea":
      inputFieldElement = <textarea className="form-control" />;
      break;
    case "number":
      inputFieldElement = <input className="form-control" type="number" />;
      break;
    default:
      inputFieldElement = null;
  }

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={`Write the question (type ${inputField.label})`}
        name={`${inputField.label}[]`}
      />
      <br />
      <button
        className="btn btn-danger"
        onClick={() => deleteInputField(inputField.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default FormInputField;
