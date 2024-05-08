import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const auth = getAuth(firebase);
const firestore = getFirestore(firebase);

const USER_INITIALIZER = {
  name: "",
  email: "",
};

const AuthContext = createContext({
  isLoggedIn: false,
  user: USER_INITIALIZER,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {}
});

const { Provider, Consumer } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER_INITIALIZER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        getRole(user.uid).then((res) => {
          if (res === "client") {
            console.log("User logged", user)
            setUser({
              name: user.displayName,
              email: user.email,
              uid: user.uid
            });
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
            signOut(auth)
          }
        });
      }
    });

    return authUser;
  }, []);

  const logIn = async ({ email, password }) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password).then(() => {
        return true
      }).catch(() => {
        return false;
      });
      console.info({ res })
      return res
    } catch (error) {
      console.info(error);
      return { isError: true, errorMessage: error }
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(USER_INITIALIZER);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (email, password, name) => {
    try {
      const userInfo = await createUserWithEmailAndPassword(auth, email, password).then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name
        })
        return res
      });
      const roleRef = doc(firestore, `roles/${userInfo.user.uid}`)
      setDoc(roleRef, {email: email, role: 'client'})
      return !!userInfo
    } catch (error) {
      console.error(error);
    }
  };

  const getRole = async (uid) => {
    const rolRef = doc(firestore, `roles/${uid}`);
    const roleCifred = await getDoc(rolRef);
    const role = roleCifred.data();
    return role.role;
  };

  const values = {
    isLoggedIn,
    user,
    logIn,
    logOut,
    signUp
  };

  return <Provider value={values}>{children}</Provider>;
};

export default AuthContext;
export { Consumer, AuthContextProvider as Provider };
