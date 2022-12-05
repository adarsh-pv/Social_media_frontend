/* eslint-disable prettier/prettier */
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import Home from '../pages/Home';
import PublicRoutes from './PublicRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';
import React from 'react';
import PrivateRoute from './PrivateRoutes';

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
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
}
