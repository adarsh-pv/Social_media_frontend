/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { fetchsaveditems } from '../../../Apirequests/postapis';
import Post from '../../Feed/Post/Post';
import Postlist from '../../Feed/Postlist/Post';

const saveditems = () => {
   const fetchsavedpost = async () =>{
    const response = await fetchsaveditems()
   }
   useEffect(()=>{
    fetchsavedpost()
   },[])
  return (
    <div>
      {/* <Postlist /> */}
      {/* <h1>hai</h1> */}

    </div>
  );
};

export default saveditems;
