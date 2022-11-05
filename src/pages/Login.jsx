import React, { useContext, useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from "react-router-dom";
import { signIn,auth, signInWithGoogle } from "../context/firebase-config";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";


 

const Login = () => {
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");


     const { user, setUser } = useContext(LoginContext);
     const [eth,setEth]= useState({name:"",email:"",password:""})
const dfg= JSON.parse(localStorage.getItem("test"))
      const navigate = useNavigate();

      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   if ((dfg?.email == eth?.email) & (dfg?.password == eth?.password)) {
      //     alert(`HoşGeldiniz Sn. ${dfg?.name}`);
      //   } else {
      //     setEth({ name: "", email: "", password: "" });
      //     alert("Yanlış Giriş...");
      //   }
      //   navigate(-1);
      //   setUser(eth)
      // };


      const handleSubmit = async (e) => {
         e.preventDefault();
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
           navigate(-1);
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };


      // useEffect(() => {
      //   onAuthStateChanged(auth, (currentUser) => {
      //     console.log(currentUser);
      //     return setUser(currentUser);
      //   });
      //   signInWithGoogle();
       
      // }, []);

        const signInWithGoo = () => {
          signInWithGoogle();
        };

  return (
    <div className="flex flex-col justify-center items-center block p-6 rounded-lg shadow-lg bg-white w-full ">
      <div className="flex flex-col justify-center block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
        <div className="text-center"></div>
        <button
          className="bg-slate-300 rounded px-1 mt-4 "
          onClick={signInWithGoo}
        >
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default Login