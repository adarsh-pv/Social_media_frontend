/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import { grey } from '@material-ui/core/colors';
import { useState } from 'react';
import { fetchposts } from '../../Apirequests/postapis';
import { useEffect } from 'react';

const Post = ({ data }) => {
  const [posts, setPosts] = useState([]);
  const allposts = async () => {
    const response = await fetchposts();
    setPosts(response.data);
  };
  useEffect(() => {
    allposts();
  }, []);
  console.log(posts, 'posts');
  return (
    <>
      {posts.map((post) => {
        return (
          <div className="Post">
            <img src={post.image} alt="" />

            <div className="postReact">
              <img src={data?.liked ? Heart : NotLike} alt="" />
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
            </div>

            <span style={{ color: grey, fontSize: '12px' }}>{data?.likes}likes</span>
            <div className="details">
              <span>
                <b>{post.userid ? post.userid.name : null}</b>
              </span>
              <span> {post ? post.caption : null} </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
