/* eslint-disable prettier/prettier */
import React from 'react';
// import Posts from '../Posts/Posts';
import PostShare from '../../Common/PostShare/PostShare';
import './PostSide.css';
import Postlist from '../Postlist/Post';
const PostSide = ({location}) => {
  console.log(location,'this is location') 
  return (
    <div className="PostSide">
      <PostShare />
      <Postlist post={location}/>
    </div>
  );
};

export default PostSide;
