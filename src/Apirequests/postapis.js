/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4001';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });

export const createpost = async (body) => {
  return await Instance.post('/createpost', { body });
};
export const fetchposts = async () => {
  return await Instance.get('/allposts');
};
export const likepost = async (body) => {
  return await Instance.post('/likepost',{ body });
};
export const commentpost = async (body) =>{
  return await Instance.post('/commentpost',{body})
}
export const fetchcomments=async (body) =>{
  console.log(body,"ss")
  return await Instance.post('/showcommenteduser',{body})
}
export const showmyposts = async (id)=>{
  return await Instance.post('/showmyposts',{id})
}
export const savedposts = async (id) =>{
  console.log(id,"id")
  return await Instance.post('/savedfile',{id})
}
export const fetchsaveditems = async () =>{
  return await Instance.get('/fetchsaveditems')
}
export const deleteposts = async (postid) =>{
  return await Instance.post('/deletepost',{postid})
}
export const sharepost = async (postid) =>{
  return await Instance.post('/sharepost',{postid})
}
export const report = async (postid) =>{
  return await Instance.patch('/reportpost',{postid})
}
export const fetchreportedposts= async () =>{
  return await Instance.get('/fetchreportedposts')
}
export const postdelete = async (postid) =>{
  return await Instance.post('/postdelete',{postid})
}
