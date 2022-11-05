import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import LoginProvider from '../context/LoginContext'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <LoginProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
          
          {/* <Route path=":id" element={<MovieDetail />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </LoginProvider>
  );
}

export default AppRouter