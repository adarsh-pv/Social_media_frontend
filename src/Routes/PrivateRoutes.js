/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Children, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { verifyuser } from '../Apirequests/authapis';
import { setAuth, setName, setUserid } from '../Store/authSlice';
function PrivateRoute({ children }) {
  const cookie = new Cookies();
  const token = cookie.get('token');
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    check();
  }, [auth]);

  if (auth) return children;
  async function check() {
    if (!token) {
      return Navigate('/');
    }
    if (auth) {
      return children;
    } else {
      try {
        let res = await verifyuser();
        if (res.data.name) {
          dispatch(setAuth(true));
          dispatch(setName(res.data.name));
          dispatch(setUserid(res.data.id))
        } else {
          cookie.remove('token');
          return Navigate('/');
        }
      } catch (error) {
        cookie.remove('token');
        return Navigate('/');
      }
    }
  }
}

export default PrivateRoute;
