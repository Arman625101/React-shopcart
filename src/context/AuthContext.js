import React, { useContext, useEffect, useState } from "react";
import { Firebase } from "../firebase";
import axios from "axios";
import { authAPI } from "../api";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:4010";

  useEffect(() => {
    const unsubscribe = Firebase.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      user &&
        authAPI.getUserById(user.uid).then((userData) => {
          setProfile(userData);
        });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, profile };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
