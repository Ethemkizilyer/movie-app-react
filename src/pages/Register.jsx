import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

import { createUser } from "../context/firebase-config";

import { auth, signInWithGoogle } from "../context/firebase-config";

const Register = () => {
const {navi} = useContext(LoginContext)
const {setNavi} = useContext(LoginContext)
 const [registerEmail, setRegisterEmail] = useState("");
 const [registerPassword, setRegisterPassword] = useState("");
 const [displayName, setRegisterdisplayName] = useState("");
console.log(navi)





  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   setNavi(displayName);
   navigate("/");
 createUser(registerEmail, registerPassword, displayName);
  };



  return (
    <div className="flex flex-col justify-center items-center block p-6 rounded-lg shadow-lg bg-white w-full ">
      <div className="flex flex-col justify-center block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full ">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputName2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
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
              id="exampleInputName2"
              value={displayName}
              onChange={(e) => setRegisterdisplayName(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
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
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
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
            

              onChange={(e) => setRegisterPassword(e.target.value)}
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
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
            
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
