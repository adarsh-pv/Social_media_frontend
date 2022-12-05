/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable prettier/prettier */
// import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import './login.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { loginapi } from '../../Apirequests/authapis';
import cookie from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth, setName } from '../../store/authSlice';

// import '../../App.css'
import Logo from '../../img/logo.png';
// import { useState } from 'react';

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required').min(6, 'password atleaste 6 numbers')
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log('onsubmit', values);
      let response = await loginapi(values);
      console.log(response);
      if (response.data.token) {
        <Navigate to="/home" replace={true} />;
        const Cookie = new cookie();
        Cookie.set('token', response.data.token);
        dispatch(setName(response.data.name));
        dispatch(setAuth(true));
        Navigate('/home');
      }
    },
    validationSchema
  });
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="login">
        <div className="a-left">
          <img src={Logo} alt="" />
          <div className="Webname">
            <h1>Let's Connect</h1>
            <h6>Explore the idea throughout the world</h6>
          </div>
        </div>

        <Log />
      </div>
    </div>
  );

  function Log() {
    return (
      <div className="a-right">
        <form className="infoForm loginForm" onSubmit={formik.handleSubmit}>
          <h3>Login</h3>

          <div>
            <input
              placeholder="Email address"
              type="text"
              autoFocus
              className="infoInput"
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
            />
          </div>
          <label className="validate">{formik.touched.password && formik.errors.password}</label>
          <div>
            <input
              placeholder="Password"
              type="password"
              autoFocus
              className="infoInput"
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
            />
          </div>
          <label className="validate">{formik.touched.password && formik.errors.password}</label>
          <div>
            <span className="Signup">
              Create an account ? <Link to="/signup">SignUp</Link>{' '}
            </span>
            <button className="button infoButton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
