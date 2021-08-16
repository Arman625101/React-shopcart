import React, { useContext, useEffect, useState } from "react";
import db, { auth } from "../../db/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUserProfile = (userProfile, id) => {
    console.log(userProfile);
    return db
      .collection("profile")
      .doc(id)
      .set(userProfile)
      .then(() => {
        console.log("doc success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserProfile = (id) => {
    return db.collection('profile')
  }

  const signup = async ({ email, password, username, avatar }) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = { username, email, avatar };
    await createUserProfile(userProfile, user.uid);
    return userProfile;
  };

  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signup, login, logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
