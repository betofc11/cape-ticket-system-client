import React, { useContext, useState } from "react";
import "./Login.scss";
import AuthContext from "../../store/authContext";
import { Link, Navigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const { logIn, isLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [logInError, setLoginError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    logIn(data).then((res) => {
      if (!res) {
        setLoginError("Something went wrong");
        setLoading(false);
      } else {
        setLoginError("");
      }
    });
  };

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return !isLoggedIn ? (
    <>
      <form className="flex flex-1 justify-center" onSubmit={handleSubmit}>
        <section className="login-wrapper">
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          />
          {logInError && (
            <p className="p-2 mt-6 rounded-xl font-extrabold bg-red-500">
              {logInError}
            </p>
          )}
          <button type="submit" className="flex">
            Login <span className="ml-1 material-symbols-outlined">login</span>
          </button>

          <span className="mt-6">
            {" "}
            Don&apos;t you have an account yet?{" "}
            <Link to="/register" className="text-sky-700">
              register here
            </Link>
          </span>
        </section>
      </form>
      {loading && (
        <div className="fixed top-0 bottom-0 right-0 left-0 backdrop-blur-sm bg-zinc-900/50">
          <Spinner />
        </div>
      )}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
