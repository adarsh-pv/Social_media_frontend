/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import './Post.css';
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import { fetchposts, fetchsaveditems, showmyposts} from '../../../Apirequests/postapis';
import { useEffect } from 'react';
// import { Commentlist } from '../comment/Comment';
import Post from '../Post/Post';

const Postlist = ({ data,post }) => {
  console.log(post,'this is the post sider')
  const [posts, setPosts] = useState([]);
  const [profilepost,setProfilepost] = useState([])
  const [savedpost,setSavedpost] = useState([])

  const allposts = async () => {
    const response = await fetchposts();
    setPosts(response.data);
  };
  const fetchsavedpost = async () =>{


    const response = await fetchsaveditems()

    setSavedpost(response.data)
   }
  const {id} = useParams()

  const showmypost= async ()=>{

    const response = await showmyposts(id)
   
    setProfilepost(response.data)
  }

  useEffect(() => {
    allposts();
    showmypost();
    fetchsavedpost();
  }, []);
  return (
    <>
     { post==='home'? posts.map((post) => {
       
       return (
         <Post post={post} allposts={allposts}/>
         );
        }):post==='profile'? profilepost.map((post)=>{
        console.log(profilepost)
        return(
          <Post post={post} allposts={showmypost}/>
        )
        }):savedpost.map((post)=>{
          return(
            <Post post={post} allposts={savedpost}/>
          )
          })
        }
     
        </>
        )
          }
export default Postlist;
