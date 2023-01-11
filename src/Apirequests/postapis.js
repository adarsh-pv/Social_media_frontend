/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');
 const admintoken = localStorage.getItem('adminToken')
const api = process.env.REACT_APP_PostsURL;
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });
export const adminInstance = axios.create({ baseURL: api, timeout: 3000, headers: { admintoken } });


export const createpost = async (body) => {
  try{
  return await Instance.post('/createpost', { body });
  }catch(error){
    console.log(error)
  }
};
export const fetchposts = async () => {
  try{
  return await Instance.get('/allposts');
  }catch(error){
    console.log(error)
  }
};
export const likepost = async (body) => {
  try{
  return await Instance.post('/likepost',{ body });
  }catch(error){
    console.log(error)
  }
};
export const commentpost = async (body) =>{
  try{
  return await Instance.post('/commentpost',{body})
  }catch(error){
    console.log(error)
  }
}
export const fetchcomments=async (body) =>{
  try{
  return await Instance.post('/showcommenteduser',{body})
  }catch(error){
    console.log(error)
  }
}
export const showmyposts = async (id)=>{
  try{
  return await Instance.post('/showmyposts',{id})
  }catch(error){
    console.log(error)
  }
}
export const savedposts = async (id) =>{
  try{
  return await Instance.post('/savedfile',{id})
  }catch(error){
    console.log(error)
  }
}
export const fetchsaveditems = async () =>{
  try{
  return await Instance.get('/fetchsaveditems')
  }catch(error){
    console.log(error)
  }
}
export const deleteposts = async (postid) =>{
  try{
    return await Instance.post('/deletepost',{postid})
  }catch(error){
    console.log(error)
  }
}
export const sharepost = async (postid) =>{
  try{
  return await Instance.post('/sharepost',{postid})
  }catch(error){
    console.log(error)
  }
}
export const report = async (postid) =>{
  try{
  return await Instance.patch('/reportpost',{postid})
  }catch(error){
    console.log(error)
  }
}
export const fetchreportedposts= async () =>{
  try{
    return await adminInstance.get('/fetchreportedposts')
  }catch(error){
    console.log(error)
    
  }
}
export const postdelete = async (postid) =>{
  try{
    return await adminInstance.post('/postdelete',{postid})
  }catch(error){
    console.log(error)
  }
}