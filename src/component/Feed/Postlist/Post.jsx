/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import './Post.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchposts, fetchsaveditems, showmyposts } from '../../../Apirequests/postapis';
import { useEffect } from 'react';
// import { Commentlist } from '../comment/Comment';
import Post from '../Post/Post';

const Postlist = ({ data, post, allpost, action }) => {
  console.log(post, 'this is the post sider');
  const [posts, setPosts] = useState([]);
  const [profilepost, setProfilepost] = useState([]);
  const [savedpost, setSavedpost] = useState([]);

  const fetchsavedpost = async () => {
    const response = await fetchsaveditems();

    setSavedpost(response.data);
  };
  const { id } = useParams();

  const showmypost = async () => {
    const response = await showmyposts(id);

    setProfilepost(response.data);
    // allpost()
  };

  useEffect(() => {
    // allpost();
    showmypost();
    fetchsavedpost();
  }, []);
  return (
    <>
      {post === 'home'
        ? allpost.map((post) => {
            return <Post post={post} allpost={allpost} actions={action} />;
            // return <Post post={post}  />;
          })
        : post === 'profile'
        ? profilepost.map((post) => {
            return <Post post={post} allposts={showmypost} />;
          })
        : savedpost.map((post) => {
            return <Post post={post} allposts={savedpost} />;
          })}
    </>
  );
};
export default Postlist;
