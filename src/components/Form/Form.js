import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <form
      className="register-form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        gap: "20px",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "darkcyan",
        borderRadius: "10px",
      }}
    >
      {submitted && valid ? (
        <div
          className="success-message"
          style={{
            background: "lightGreen",
            fontSize: "24px",
            borderRadius: "10px",
            padding: "20px 60px",
          }}
        >
          Success! Thank you!!!
        </div>
      ) : null}
      <Input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
        placeholder="First Name"
        name="firstName"
        submitted={submitted}
      />
      <Input
        onChange={handleLastNameInputChange}
        value={values.lastName}
        placeholder="Last Name"
        name="lastName"
        submitted={submitted}
      />

      <Input
        onChange={handleEmailInputChange}
        value={values.email}
        placeholder="Email"
        name="email"
        submitted={submitted}
      />
      <button
        className="form-field"
        type="submit"
        style={{
          padding: "10px 60px",
          borderRadius: "10px",
          background: "darkcyan",
          border: "2px solid cyan",
          color: "#fff",
          fontSize: "24px",
        }}
      >
        Register
      </button>
    </form>
  );
}

export default Form;
