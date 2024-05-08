import React, { useContext, useState } from "react";
import "./Register.scss";
import AuthContext from "../../store/authContext";
import Input from "../../components/Input/Input";
import {
  minLength,
  checkPassword,
  passwordsMatches,
} from "../../utils/formUtils";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { isLoggedIn, signUp } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    "confirm-password": "",
  });
  const [logInError, setLoginError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, "confirm-password": confirm } = data;

    if (
      minLength(name, 3) &&
      email &&
      checkPassword(password) &&
      passwordsMatches(password, confirm)
    ) {
      signUp(email, password, name).then((res) => {
        console.log("Register response:", { res });
        if (!res) {
          setLoginError("Something went wrong");
        } else {
          setLoginError("");
        }
      });
    }
  };

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return isLoggedIn ? <Navigate to="/" /> : (
    <form className="flex flex-1 justify-center" onSubmit={handleSubmit}>
      <section className="login-wrapper">
        <h4 className="font-extrabold text-3xl mb-2">Register Now</h4>
        <div className="flex flex-col items-center border-t-2 pt-6">
          <Input
            id="name"
            label="Full Name"
            required
            onChange={handleChange}
            type="text"
            name="name"
          />
          <Input
            id="email"
            label="Email"
            required
            onChange={handleChange}
            type="email"
            name="email"
          />
          <Input
            id="password"
            label="Password"
            required
            onChange={handleChange}
            type="password"
            name="password"
          />
          <Input
            id="confirm-password"
            label="Confirm Password"
            required
            onChange={handleChange}
            type="password"
            name="confirm-password"
          />
          {logInError && (
            <p className="p-2 mt-6 rounded-xl font-extrabold bg-red-500">
              {logInError}
            </p>
          )}
          <button type="submit" className="flex">
            Register{" "}
            <span className="ml-1 material-symbols-outlined">login</span>
          </button>
        </div>
      </section>
    </form>
  );
};

export default Register;
