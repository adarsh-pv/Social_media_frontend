/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import './Signup.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { requestsapi } from '../../Apirequests/authapis';
import Logo from '../../img/logo.png';
import jwt_decode from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { setAuth, setName, setUserid } from '../../Store/authSlice';

const SignUp = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    const { email, given_name, family_name } = userObject;
    let guser = {
      email,
      name: given_name + family_name
    };
    requestsapi(guser);
  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENTID,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'larage'
    });
  }, []);
  const ValidationSchema = Yup.object({
    name: Yup.string().required('This field is Required'),
    email: Yup.string().required('This field is Required'),
    number: Yup.string()
      .required('This field is Required')
      .min(10, 'Mobile number must be 10 numbers'),
    password: Yup.string().required('Wrong password').min(6, 'password atleaste 6 numbers'),
    conpassword: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('password'), null], 'password must be same as abouve')
  });
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      number:'',
      password: '',
      conpassword: ''
    },
    onSubmit:async (values) => {

    const response = await  requestsapi(values);

    if(response.data.exist === true){
      toast.error('Your already exist',{  icon: ' 🚷 ',
        style: {
            width: '350px',
            backgroundColor:'orange',
            fontSize: '15px',}
        })
    }
    if(response.status === 200 ){
      const Cookie = new Cookies();  
      localStorage.setItem('userid',response.data._id)
      dispatch(setUserid(response.data._id))
      dispatch(setName(response.data.name));
      dispatch(setAuth(true));
      Cookie.set('token', response.data.token);
      Navigate('/home')
    }
    },
    validationSchema:ValidationSchema
  });

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="signup">
        <div className="a-left">
          <img src={Logo} alt="" />
          <div className="Webname">
            <h1>Let's Connect</h1>
            <h6>Explore the idea throughout the world</h6>
          </div>
        </div>

        <Sign />
      </div>
    </div>
  );
  
  function Sign() {
    return (
      <div className="a-right">
<Toaster/>

        <form className="infoForm loginForm" onSubmit={formik.handleSubmit}>
          <h3>Signup</h3>
          <div >
                  <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Full name"
              name="name"
              className="infoInput"
              />
             
           <label className="validat">{formik.touched.name && formik.errors.name}</label>
          {/* {  toast.error(formik.touched.name && formik.errors.name) } */}
           
            
            <input
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Email address"
              className="infoInput"
              name="email"
              />
               
            <span className="validat">{formik.touched.email && formik.errors.email}</span>
          {/* {  toast.error(formik.touched.email && formik.errors.email) } */}

          </div>

          <div>
                  <input
              type="number"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              onBlur={formik.handleBlur}
              className="infoInput"
              placeholder="PH Number"
              />
            <span className="validat">{formik.touched.number && formik.errors.number}</span>
          {/* {  toast.error(formik.touched.number && formik.errors.number) } */}
        
          
          </div>      
          <div>
                      <input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="infoInput"
              placeholder="password"
              name="password"
              />
            <span className="validat">{formik.touched.password && formik.errors.password}</span>
            {
            // toast.error(formik.touched.password && formik.errors.password) 
            }
                    <input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.conpassword}
              onBlur={formik.handleBlur}
              className="infoInput"                         
              placeholder="Confirm pssword"
              name="conpassword"
              />
            <span className="validate">
              {formik.touched.conpassword && formik.errors.conpassword}
              {/* {toast.error(formik.touched.conpassword && formik.errors.conpassword) } */}

            </span>
          </div>
          <div>
            <span className="Login">
              Already have an account. <Link to="/">Login!</Link>
            </span>
          </div>

          <button className="button infoButton" type="submit">
            SignUp
          </button>
          <div id="signInDiv"></div>
        </form>
      </div>
    );
  }
};

export default SignUp;
