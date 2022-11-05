import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { logOut } from "../context/firebase-config";


const Navbar = () => {
  const { navi } = useContext(LoginContext);
  console.log(navi);
   const { currentUser} = useContext(LoginContext);
   const [dfg,setDfg] = useState(JSON.parse(localStorage.getItem("test")));
  return (
    <div className="bg-slate-300 w-full h-20 text-3xl font-bold flex items-center justify-between px-6">
      <Link to="/">MOVIE APP</Link>
      <div className=" flex gap-x-8">
        {currentUser ? (
          <h5 className="mb-0 text-capitalize">{navi}</h5>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
        {currentUser ? (
          <button className="nav-link" onClick={()=>logOut()}>
            Logout
          </button>
        ) : (
          <Link className="nav-link" to="/register">
            Register
          </Link>
        )}

        {/* {user?.email != dfg?.email  ? (
          <div className=" flex gap-x-8">
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          <div className=" flex gap-x-8">
            <Link to="/">{dfg?.name}</Link>
            <Link onClick={() => setUser("")} className="nav-link" to="/">
              Logout
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
