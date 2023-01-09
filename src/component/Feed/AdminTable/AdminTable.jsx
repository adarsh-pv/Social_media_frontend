/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react'
import Searchbar from '../Adminsearchbar/Searchbar'
import PostTable from './PostTable'
import {Tabledata} from './Tabledata'
const   AdminTable = ({select}) => {

useEffect(() => {
}, [select])


  return( 
    <div>
      <Searchbar select={select}/>

      {select == 'users' ?<Tabledata/> : ''}

  
      {select == 'posts' ? <PostTable/>: ''}

    </div>
    )
}

export default AdminTable