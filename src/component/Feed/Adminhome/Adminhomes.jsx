/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import AdminLeftSide from '../AdminLeftSide/AdminLeftSide';
import AdminTable from '../AdminTable/AdminTable';
import './Adminhome.css'

const   Adminhomes = () => {
  const[select,setSelect] = useState('users')
  return( <div className='adminHome'>
    <AdminLeftSide setSelect={setSelect}/>
    <AdminTable select={select}/>
  </div>
  )
};

export default Adminhomes;
