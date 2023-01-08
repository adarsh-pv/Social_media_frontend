/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
import Heart from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';
import { grey, red } from '@material-ui/core/colors';

import { deleteposts, likepost, report, savedposts } from '../../../Apirequests/postapis';
// import {savedposts } from '../../../Apirequests/authapis'
import Commentshow from '../../Feed/Commentshow/Commentshow';
import unknownuser from '../../../img/unknown.png';
import { UilTrash } from '@iconscout/react-unicons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import { RWebShare } from 'react-web-share';
import { format } from 'timeago.js';
import './Post.css';
import { Menu, MenuItem } from '@mui/material';
import Circles from 'react-loading-icons/dist/esm/components/circles';
import { Center } from '@mantine/core';
import { width } from '@mui/system';


function Post({ post, allposts }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);
  const handlePostLike = async (id) => {
    const res = await likepost(id);
    allposts();
  };
  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const { userid } = useSelector((state) => state.authReducer);
  const { id } = useParams();
  const deletepost = async (postid) => {
    setIsLoading(true);
    const deleted = await deleteposts(postid);
    {
      deleted.data.status === true
        ? toast.success('Post deleted sucessfully', {
            icon: ' 🔕 ',
            style: {
              width: '250px',
              backgroundColor: 'lightyellow',
              fontSize: '15px'
            }
          })
        : '';
    }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    allposts();
  };
  const savedpost = async (id) => {
    setIsLoading(true);

    const saved = await savedposts(id);
    {
      saved.data.saved === true
        ? toast.success('Post Saved sucessfully', {
            icon: ' 🎊🎊🎊 ',
            style: {
              width: '250px',
              backgroundColor: 'lightyellow',
              fontSize: '15px'
            }
          })
        : '';
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    allposts();
  };
  const reportpost = async (postid) => {
    const reports = await report(postid);
    console.log(reports, 'i');
    if (reports.status === 200) {
      toast.error('Post Reported', {
        icon: '🥵 ',
        style: {
          width: '270px',
          backgroundColor: 'lightyellow',
          fontSize: '20px'
        }
      });
    }
    allposts();
  };
  const ids = post._id;
  return (
    <div className="Post" style={{ backgroundColor: 'white' }}>
      <Toaster />
       {isLoading ? (
      <div>
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />
       <Circles style={{backgroundColor:'orange'}} />


      </div>
    ) :
     ( <><div className="image" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="image">
            <img src={post.userid.profileimage ? post.userid.profileimage : unknownuser} alt="" onClick={()=>navigate(`/profile/${post.userid._id}`)}/>
            <span className="name">
              <b onClick={()=>navigate(`/profile/${post.userid._id}`)}>{post.userid.name ? post.userid.name : null}</b>
            </span>
          </div>
          <div>
            <span onClick={handleClick}>...</span>
          </div>
        </div><Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
          onClose={handleClose}>
            <MenuItem>
              <div onClick={() => savedpost(post._id)}>
                {post?.isSaved ? <span>saved</span> : <span>save</span>}
              </div>
            </MenuItem>
           
           { userid === id || userid == post.userid._id ? <MenuItem
            onClick={() =>
               deletepost(post._id)}>
              Delete
            </MenuItem> :
             <MenuItem
             onClick={() => {
               reportpost(post._id);
             } }>
             Report
           </MenuItem>}
          </Menu><div>
            <p>{format(post?.createdAt)}</p>
          </div>
      {post.image ? <img src={post.image} alt="" /> : <span>{post.caption}</span>}

      <div className="postReact">
        <img
          onClick={() => handlePostLike(post._id)}
          src={post?.isliked ? Heart : NotLike}
          alt=""
        />
        <img src={Comment} onClick={() => setCommentOpen(!commentOpen)} alt="" />
        <div>
          <RWebShare
            data={{
              url: `http://localhost:3000/post/${ids}`
              // url:(`http://localhost:3000/post/63ac340e2ae367a71e444154`)
              // `)
            }}>
            <img src={Share} alt="" />
          </RWebShare>
        </div>
      </div>

      <span style={{ color: grey, fontSize: '12px' }}>
        <b>{post.reactions.length} likes</b>
      </span>
      <div className="details">
        <span>{/* <b>{post.userid ? post.userid.name : null}</b> */}</span>
        {post.image ? <span> {post ? post.caption : null} </span> : null}

        <div></div>
        {commentOpen && <Commentshow post={post._id} />}
      </div></>)
      }
    </div>
  );
}

export default Post;
