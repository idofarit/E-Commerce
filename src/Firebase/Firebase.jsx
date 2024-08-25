import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
    });
  }, []);
  // user active check end

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
  const isLoggedIn = user ? true : false;

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
