/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sharepost } from '../../../Apirequests/postapis';
import Post from '../Post/Post';

const view = () => {
  const {id} = useParams()
  const [posts,setPosts] = useState([])
  const fetchSharePost = async (id) =>{
    const response = await sharepost(id)
    console.log(response,"d")
    setPosts(response.data)
  }
  useEffect(()=>{
  fetchSharePost(id)
  },[])
  return (
  <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div>
   {posts.map((postss) => <Post post={postss}/>)}
</div>
</div>
  );
};

export default view;
