/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import './Post.css';
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import { fetchposts, showmyposts} from '../../../Apirequests/postapis';
import { useEffect } from 'react';
// import { Commentlist } from '../comment/Comment';
import Post from '../Post/Post';
// import { commentlist } from '../comment/comment';

// eslint-disable-next-line no-unused-vars
const Postlist = ({ data,post }) => {
  console.log(post,'this is the post sider')
  const [posts, setPosts] = useState([]);
  const [profilepost,setProfilepost] = useState([])
  const allposts = async () => {
    const response = await fetchposts();
    console.log(response,"resssssssss")
    setPosts(response.data);
  };
  const showmypost= async ()=>{
    const response = await showmyposts()
    console.log(response,"my profile is here for you")
    setProfilepost(response.data)
  }

  useEffect(() => {
    allposts();
    showmypost();
  }, []);
  return (
    <>
     { post==='home'? posts.map((post) => {
       
       return (
         <Post post={post} allposts={allposts}/>
         );
        }):profilepost.map((post)=>{
        console.log(profilepost)
        return(
          <Post post={post} allposts={showmypost}/>
        )
      })}
    
    </>
  );
};

export default Postlist;
