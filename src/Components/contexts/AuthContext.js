import React, { useContext, useEffect, useState } from "react";
import db, { auth } from "../../db/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  const createUserProfile = (userProfile, id) => {
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

  const getUserProfile = (id) =>
    db
      .collection("profile")
      .doc(id)
      .get()
      .then((snapshot) => snapshot.data());

  const signup = async ({ email, password, username, avatar }) => {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = { username, email, avatar };
    await createUserProfile(userProfile, user.uid);
    setProfile(userProfile);
    return userProfile;
  };

  const login = async (email, password) => {
    const data = await auth.signInWithEmailAndPassword(email, password);
    const user = await getUserProfile(data.user.uid);
    setProfile(user);
    return user;
  };

  const logout = () => {
    setProfile();
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      user && getUserProfile(user.uid).then((res) => setProfile(res));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, profile, signup, login, logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
