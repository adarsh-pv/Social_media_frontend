/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
// import Posts from '../Posts/Posts';
import PostShare from '../../Common/PostShare/PostShare';
import './PostSide.css';
import Postlist from '../Postlist/Post';
import { fetchposts } from '../../../Apirequests/postapis';
const PostSide = ({ location }) => {
  const [postlist, setPostlist] = useState([]);
  const allposts = async () => {
    const response = await fetchposts();
    setPostlist(response.data);
  };
  useEffect(() => {
    allposts();
  }, []);
  return (
    <div className="PostSide">
      <PostShare allpost={allposts} />
      <Postlist post={location} allpost={postlist} action={allposts} />
    </div>
  );
};

export default PostSide;
