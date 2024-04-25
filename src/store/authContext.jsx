import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth(firebase);

const USER_INITIALIZER = {
  name: "",
  email: "",
};

const AuthContext = createContext({
  isLoggedIn: false,
  user: USER_INITIALIZER,
  logIn: () => {},
  logOut: () => {},
});

const { Provider, Consumer } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER_INITIALIZER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          email: user.email
        })
        setIsLoggedIn(true)
      }
    });

    return authUser;
  }, []);

  const logIn = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error)
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth)
      setUser(USER_INITIALIZER)
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error)
    }
  }

  const values = {
    isLoggedIn,
    user,
    logIn,
    logOut,
  };

  return <Provider value={values}>{children}</Provider>;
};

export default AuthContext;
export { Consumer, AuthContextProvider as Provider };
