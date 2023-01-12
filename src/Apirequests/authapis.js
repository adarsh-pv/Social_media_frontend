/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = process.env.REACT_APP_MainURL;
const Instance = axios.create({ baseURL:api, timeout: 5000, headers: { token } });
export const requestsapi = async (body) => {
  try{
    body.number = parseInt(body.number);
  return  await Instance.post('/register', { body });
  }catch(error){
    console.log(error)
  }
};
export const loginapi = async (body) => {
  try{
    return await Instance.post('/login', { body });
  }catch(error){
    console.log(error)
  }
};

export const verifyuser = async () => {
  try{
    return await Instance.get('/verify');
  }catch(error){
    console.log(error)
  }
};
export const profiledata = async (data) => {
  try{
    return await Instance.post('/profileextradata',{data})
  }catch(error){
    console.log(error)
  }
}
export const profilephoto = async (body) =>{
  try{
    return await Instance.post('/profilephoto', {body})
  }catch(error){
    console.log(error)
  }
 
}
export const coverphoto = async (body) =>{
  try{
    return await Instance.post('/coverphoto', {body})
  }catch(error){
    console.log(error)
  }
}
export const fetchProfileDetails = async ()=>{
  try{
    return await Instance.get('/profileDetails')
  }catch(error){
    console.log(error)
  }
}
export const fetchUsers = async () =>{
  try{
    return await Instance.get('/allusers')
  }catch(error){
    console.log(error)
  }
}
export const follow = async (body) =>{
  try{
    return await Instance.post('/follow',{body})
  }catch(error){
    console.log(error)
  }
}
export const userProfile = async (body) =>{
  try{
    return await Instance.post('/userprofile',{body})
  }catch(error){
    console.log(error)
  }
}
export const fetchusers= async () =>{
  try{
    return await Instance.get('/fetchallusers')
  }catch(error){
    console.log(error)
  }
}
export const followingusers = async ()=>{
  try{
    return await Instance.get('/followingusers')
  }catch(error){
    console.log(error)
  }
}
export const follwersusers = async ()=>{
  try{
    return await Instance.get('/followersusers')
  }catch(error){
    console.log(error)
  }
}
export const logineduser = async ()=>{
  try{
    return await Instance.get('/logineduser')
  }catch(error){
    console.log(error)
  }
}
export const getUser = async (id)=>{
  try{
    return await Instance.get(`/getUserdata/${id}`)
  }catch(error){
    console.log(error)
  }
}
export const searchengine = async (body) =>{
  try{
    return await Instance.put('/Searchengine',{body})
  }catch(error){
    console.log(error)
  }
}


