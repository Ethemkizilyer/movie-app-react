import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
import { useLocation, useNavigate, useParams } from "react-router-dom";

const PrivateRouter = () => {
       
     
     const { currentUser } = useContext(LoginContext);
//  console.log(user)
  return currentUser != "" ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter