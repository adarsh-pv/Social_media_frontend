/* eslint-disable prettier/prettier */

import { Box, Button, Table } from '@mantine/core';
import { Modal, TableBody, TableCell, TableContainer, Paper , TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { object } from 'yup';
import { fetchreportedposts, postdelete } from '../../../Apirequests/postapis';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height:350,
  bgcolor: 'background.#000',
  border: '2px solid #000',
  
  p: 4,
};

const PostTable = () => {
  const [posts,setPosts]= useState([])
  const [open, setOpen] = React.useState(false);
  const [post,setPost] = useState({})
  const reportedPosts = async () =>{
    const {data}= await fetchreportedposts()
    console.log("daatthhjhkkjkjk",data)
    setPosts(data)
  }
  const deletePost = async (id)=>{
    const {data} = await postdelete(id)
    console.log(data,"loo")
    const response = posts.filter((post)=> post._id !== id)
    setPosts(response)
 }
    useEffect(()=>{
   reportedPosts()
   deletePost()
    },[])

      const handleOpen = (post) =>{
        setPost(post)
         setOpen(true)}
      const handleClose = () => setOpen(false);
  const {searchResult} = useSelector((state) =>state.userReducer)
    
    console.log(open)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Reporters count</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         {posts.length === 0 ? <h2>No reportedposts</h2>: 
          posts.map((post)=>{
            {if(post.status == false){
              ''
            }else{
            return(
            // eslint-disable-next-line react/jsx-key
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {post.user[0].name}
            </TableCell>
            <TableCell align="left">{post.user[0].email}</TableCell>

            <TableCell align="left"><Button onClick={()=>handleOpen(post)}>view</Button></TableCell>
  
        
            <TableCell align="left">{post.reportedusers.length}</TableCell>

            <TableCell align="left">
              <Button className="button" onClick={()=>deletePost(post._id)} style={{ width: '70px' }}>
                Delete
              </Button>

            </TableCell>
          </TableRow>
            )
          }}})}
        </TableBody>
        <Modal  
   open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={style}>
{post.image ? <img style={{width:'100%'}} src={post.image} alt=""  />: <span>{post.caption}</span>}

{post.image ? <h3 style={{marginLeft:'10px'}}>{post.caption}</h3> : ''}
  </Box>
  </Modal>
      </Table>
      <div className="flex justify-center mt-10">
        {/* <Pagination page={activePage} onChange={changePage} count={totalPages} /> */}
      </div>
    </TableContainer>
  );
  
};

export default PostTable;
