/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Comment from '../../../img/comment.png';
import Share from '../../../img/share.png';
import Heart from '../../../img/like.png';
import NotLike from '../../../img/notlike.png';
import { grey, red } from '@material-ui/core/colors';
// import { Commentlist } from '../comment/Comment';
import { deleteposts, likepost, report, savedposts } from '../../../Apirequests/postapis';
// import {savedposts } from '../../../Apirequests/authapis'
import Commentshow from '../../Feed/Commentshow/Commentshow';
import { UilBookmark } from '@iconscout/react-unicons';
import { UilCloudBookmark } from '@iconscout/react-unicons';
import { UilTrash } from '@iconscout/react-unicons';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import {RWebShare} from 'react-web-share'
import Allusers from '../../../Pages/Allusers';
import { format } from 'timeago.js';
import { Menu, MenuItem } from '@mui/material';
function Post({post,allposts}) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[open,setOpen] = useState(false)
  const handlePostLike = async (id) => {
    const res = await likepost(id);
    console.log(res);
    allposts();
  };
  const handleClick = (event) => {
    setOpen(true)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };
  const {userid} = useSelector((state)=>state.authReducer)
  const {id} = useParams()
  const deletepost = async (postid) =>{
    const deleted = await deleteposts(postid)
   {deleted.data.status === true ? 
    toast.success( "Post deleted sucessfully",{
      icon: ' 🔕 ',
    style: {
        width: '250px',
        backgroundColor:'lightyellow',
        fontSize: '15px',
    }
  }): ""}
  allposts()
  }

  const savedpost = async (id) =>{
      const saved = await savedposts(id)
      {saved.data.saved === true ? 
        toast.success( "Post Saved sucessfully",{
          icon: ' 🎊🎊🎊 ',
        style: {
            width: '250px',
            backgroundColor:'lightyellow',
            fontSize: '15px',
        }
        }): ""}

    allposts();

  }
  const reportpost = async (postid) =>{
    const reports = await report(postid)
    console.log(reports,"i")
    if(reports.status === 200){
      toast.error( "Post Reported",{
        icon: '🥵 ',
      style: {
          width: '270px',
          backgroundColor:'lightyellow',
          fontSize: '20px',
      }
    })
  }
  allposts();

}
  const ids = post._id
  return (
    
    <div className="Post" style={{backgroundColor:'white'}}>

      <Toaster/>
      <div className="outerDiv" style={{display:'flex', justifyContent:'space-between'}} >
        <span><b>{post.userid ? post.userid.name : null}</b></span>
        <div><span 
      onClick={handleClick}>...</span></div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        onClose={handleClose}
    
      >
        <MenuItem ><div onClick={()=>savedpost(post._id)}>
        
        {/* {post?.isSaved ?   <span><UilCloudBookmark />saved</span> : <span><UilBookmark /><h4>save</h4></span> } */}
        {post?.isSaved ?   <span>saved</span> : <span>save</span> }

        </div></MenuItem>
        <MenuItem onClick={()=>{reportpost(post._id)}}>Report</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        <div><h6>{format(post?.createdAt)}</h6></div>
      {/* <div className="details">
        <span> */}
          {/* <b>{post.userid ? post.userid.name : null}</b> */}
          
        {/* </span> */}
        {/* {post.image?
        <span> {post ? post.caption : null} </span> : null
        } */}
        {/* <div>
        </div>
       {commentOpen && <Commentshow post={post._id} />}
      </div> */}
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
       <div>
        
        <RWebShare
        data={{
          url:(`http://localhost:3000/post/${ids}`)
          // url:(`http://localhost:3000/post/63ac340e2ae367a71e444154`)
          // `)

        }}
        >
       <img src={Share}  alt="" />
        </RWebShare>
       </div> 
        
          { userid === id ?  <div onClick={()=>deletepost(post._id)}>
          <UilTrash/>
        </div> : <div></div>}

      </div>

      <span style={{ color: grey, fontSize: '12px' }}>
        <b>{post.reactions.length} likes</b>
      </span>
       <div className="details">
        <span>
          {/* <b>{post.userid ? post.userid.name : null}</b> */}
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
