/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
import Heart from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';
import { grey } from '@material-ui/core/colors';
// import { Commentlist } from '../comment/Comment';
import { likepost, savedposts } from '../../../Apirequests/postapis';
// import {savedposts } from '../../../Apirequests/authapis'
import Commentshow from '../../Feed/Commentshow/Commentshow';
import { UilBookmark } from '@iconscout/react-unicons';
import { UilCloudBookmark } from '@iconscout/react-unicons';

import { height, width } from '@mui/system';

function Post({post,allposts}) {
  console.log(post,"oioioiioioioioioioi")
  const [commentOpen, setCommentOpen] = useState(false);
  const handlePostLike = async (id) => {
    const res = await likepost(id);
    console.log(res);
    allposts();
  };

  const savedpost = async (id) =>{
      const saved = await savedposts(id)
      console.log(saved,"juuuuu")
    allposts();

  }
  return (
    <div className="Post">
    {post.image?
    <img src={post.image} alt="" />
    :<span>{post.caption}</span>
    }
      <div className="postReact">
        <img
          onClick={() => handlePostLike(post._id)}
          src={post?.isliked ? Heart : NotLike}
          alt=""
        />
        <img src={Comment} onClick={() => setCommentOpen(!commentOpen)} alt="" />
        <img src={Share}  alt="" />
        <div onClick={()=>savedpost(post._id)}>
        
        {post?.isSaved ?   <UilCloudBookmark/>  : <UilBookmark/> }
        </div>

      </div>

      <span style={{ color: grey, fontSize: '12px' }}>
        <b>{post.reactions.length} likes</b>
      </span>
      <div className="details">
        <span>
          <b>{post.userid ? post.userid.name : null}</b>
        </span>
        {post.image?
        <span> {post ? post.caption : null} </span> : null
        }
        <div>
        </div>
       {commentOpen && <Commentshow post={post._id} />}
      </div>
    </div>
  );
}

export default Post;
