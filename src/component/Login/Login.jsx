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
import { setAuth, setName, setUserid } from '../../Store/authSlice';
import toast,{Toaster} from 'react-hot-toast'

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
    
      if(response.data.maessage === "Invalid password" ){
        toast.error( "Invalid password",{
          icon: ' 🔕 ',
        style: {
            width: '250px',
            backgroundColor:'lightyellow',
            fontSize: '15px',
        }
      })
      }
      if(response.data.message === "User not found"){
        toast.error( "User not found",{
          icon: ' 🚷 ',
        style: {
            width: '250px',
            backgroundColor:'lightblue',
            fontSize: '15px',
        }
      })
      }
      if(response.data.message === "You're Blocked"){
        toast.error( "Sorry for inconvenience you're Blocked",{
          icon: ' 🚷 🚷 ',
        style: {
            width: '350px',
            backgroundColor:'lightblue',
            fontSize: '15px',
        }
      })
      }
      
      if (response.data.token) {
        console.log(response)
        // <Navigate to="/home" replace={true} />;
        const Cookie = new cookie();
        localStorage.setItem('userid',response.data._id)
        dispatch(setUserid(response.data._id))
        dispatch(setName(response.data.name));
        dispatch(setAuth(true));
        Cookie.set('token', response.data.token);
        Navigate('/home');
      }
    },
    validationSchema
  });
  return (
    <div className="App">
<Toaster/>  
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
