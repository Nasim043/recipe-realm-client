import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google login
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
  }

  // github
  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider)
  }
 
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  const updateUserProfile = (userName, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: userName, photoURL: url })
  }

  // observer user auth state 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    // stop observing while unmounting 
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = { user, register, login, logOut, updateUserProfile, loading, googleLogIn, githubLogIn };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;