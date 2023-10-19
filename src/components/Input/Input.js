import React from "react";

function Input({ submitted, values, onChange, value, placeholder, name }) {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        className="form-field"
        placeholder={placeholder}
        name={name}
        style={{ width: "90%", padding: "10px", borderRadius: "10px" }}
      />
      {submitted && !value ? (
        <span
          style={{
            color: "#fff",
            width: "90%",
            background: "red",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          Please enter a {name}
        </span>
      ) : null}
    </>
  );
}

export default Input;
