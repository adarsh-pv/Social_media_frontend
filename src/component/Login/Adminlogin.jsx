/* eslint-disable prettier/prettier */
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserid } from '../../Store/authSlice';
import Logo from '../../img/logo.png';
import { adminlogin } from '../../Apirequests/adminapis';

const Adminlogin = () => {
    const Navigate = useNavigate();
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
        let response = await adminlogin(values);
        console.log(response)
      
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
        
        if (response.data.token) {
          console.log(response)
          // <Navigate to="/home" replace={true} />;
          const Cookie = new Cookie();
          localStorage.setItem('Admintoken', response.data.token)
          Cookie.set('Admintoken', response.data.token);
    
        }
      },
      validationSchema
    });
  return(
    <div className="App">
    <Toaster/>
          <div className="blur" style={{ top: '-18%', right: '0' }}></div>
          <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
          <div className="login">
            <div className="a-left">
              <img src={Logo} alt="" />
              <div className="Webname">
                <h1>Admin</h1>
                <h6>Login</h6>
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
            
                <button className="button infoButton" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
  )
};
}

export default Adminlogin;
