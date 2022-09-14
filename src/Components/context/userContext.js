import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, SetLoading] = useState();
  const [error, SetError] = useState("");

  useEffect(() => {
    SetLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? SetUser(res) : SetUser(null);
      SetError("");
      SetLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, name, password) => {
    SetLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        SetUser({ ...cred.user, displayName: name });
        updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((err) => SetError(err.message))
      .finally(() => {
        SetLoading(false);
      });
  };

  const signInUser = (email, password) => {
    SetLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => SetError(err.message))
      .finally(() => {
        SetLoading(false);
      });
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
