/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Adminlogin from '../component/Login/Adminlogin';


const adminlogin = () => {
    const token = localStorage.getItem('adminToken')
    const Navigate = useNavigate()
useEffect(() => {


    if(token)
    {console.log('first')
         Navigate('/admin/home')
    }
  
}, [])
    return (
    <div className="App">
    <div className="blur" style={{ top: '-18%', right: '0' }}></div>
    <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
     <div>
        <Adminlogin/>
     </div>
    </div>
    )
};

export default adminlogin;
