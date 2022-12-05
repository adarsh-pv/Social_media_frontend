/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react";
import Cookie from 'universal-cookie'

import { Navigate } from "react-router-dom";


function PublicRoutes(props) {
    const cookie = new Cookie()
    
    const token = cookie.get('token')
  if(!token) return  props.children
  else{
    return <Navigate to='/home'></Navigate>
    
  }     
}
PublicRoutes.propTypes = {}
export default PublicRoutes

