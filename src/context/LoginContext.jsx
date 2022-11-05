import { useContext } from "react";
import { useState,useEffect } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { userObserver } from "./firebase-config";

// 1-) Creating Login Context
export const LoginContext = createContext();

// 2 PROVIDING

const LoginProvider = ({ children }) => {
 const [currentUser, setCurrentUser] = useState();
 const [navi, setNavi] = useState("");

   useEffect(() => {
     userObserver(setCurrentUser);
   }, []);


  return (
    <LoginContext.Provider value={{ currentUser,navi,setNavi }}>
      {children}
    </LoginContext.Provider>
  );
};


// export const useLoginContext = () => {
//   return useContext(LoginContext);
// };

export default LoginProvider;






