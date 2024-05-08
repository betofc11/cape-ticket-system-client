import React from "react";

const Input = ({ id, label, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </>
  );
};

export default Input;
