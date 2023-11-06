import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const FirebaseContext = createContext(null);

// config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "shopkart-ef831.firebaseapp.com",
  projectId: "shopkart-ef831",
  storageBucket: "shopkart-ef831.appspot.com",
  messagingSenderId: "200810403213",
  appId: "1:200810403213:web:0bb46e86f6af34942719c4",
};

export const useFirebase = () => useContext(FirebaseContext);

// instances
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fireStore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  // user active check
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      console.log("user", user);
    });
  }, []);
  // user active check end

  const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  console.log(user);

  const uploadProfileImg = async (file, user, setLoading) => {
    setLoading(true);
    const fileRef = ref(storage, `profileImages/${user?.uid + ".png"}`);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(user, {
      photoURL,
    });
    setLoading(false);
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signInWithGoogle,

        isLoggedIn,

        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
