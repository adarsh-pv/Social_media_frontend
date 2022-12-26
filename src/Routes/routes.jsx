/* eslint-disable prettier/prettier */
import LoginPage from '../Pages/login';
import SignupPage from '../Pages/signup';
import Home from '../Pages/Home';
import PublicRoutes from './PublicRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../Pages/Profile';
import React from 'react';
import PrivateRoute from './PrivateRoutes';
import Allusers from '../Pages/Allusers';
import Savedposts from '../Pages/Savedpost';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }></Route>
        <Route
          path="Signup"
          element={
            <PublicRoutes>
              <SignupPage />
            </PublicRoutes>
          }></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
        <Route
          path="/profile/:id" 
          
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }></Route>
          <Route
          path='/allusers'
          element={
          <PrivateRoute>
            <Allusers/>
          </PrivateRoute>
          }
          ></Route>
          <Route
          path='/savedpost'
          element={
          <PrivateRoute>
            <Savedposts/>
          </PrivateRoute>
          }
          ></Route>
      </Routes>
    </BrowserRouter>
  );
}
