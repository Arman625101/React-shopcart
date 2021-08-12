import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../utils/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, signup };

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
