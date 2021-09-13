import React, { useContext, useEffect, useState } from "react";
import { Firebase } from "../firebase";
import { authAPI } from "../api";
import firebase from "firebase/app";

interface AuthContext {
  currentUser: firebase.User | null;
  profile: IProfile | null;
  updateProfile: () => void;
}

interface IProfile {
  avatar: string;
  username: string;
  email: string;
  products?: string[];
}

const AuthContext = React.createContext<Partial<AuthContext>>({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const updateProfile = () => {
    currentUser &&
      authAPI.getUserById(currentUser.uid).then((data) => setProfile(data));
  };

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

  return (
    <AuthContext.Provider value={{ currentUser, profile, updateProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
