import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);


const AuthContext = ({ children }) => {
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  const providerGoogle = new GoogleAuthProvider();

  function signInWithGoogle() {
    return signInWithPopup(auth, providerGoogle);
  }

  return (
    <authContext.Provider
      value={{
        register,
        signIn,
        logOut,
        signInWithGoogle,
       
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
