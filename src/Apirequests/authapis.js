/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4000';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });
export const requestsapi = async (body) => {
  body.number = parseInt(body.number);
  await Instance.post('/register', { body });
};
export const loginapi = async (body) => {
  return await Instance.post('login', { body });
};

export const verifyuser = async () => {
  return await Instance.get('/verify');
};
export const profiledata = async (data) => {
  return await Instance.post('/profileextradata',{data})
}
export const profilephoto = async (body) =>{
  console.log(body,"sjjksdfjkdfjkdf")
  return await Instance.post('/profilephoto', {body})
}
export const coverphoto = async (body) =>{
  console.log(body,"sjjksdfjkdfjkdf")
  return await Instance.post('/coverphoto', {body})
}
export const fetchProfileDetails = async ()=>{
  return await Instance.get('/profileDetails')
}
export const fetchUsers = async () =>{
  console.log("first")
  return await Instance.get('/allusers')
}
export const follow = async (body) =>{
  return await Instance.post('/follow',{body})
}
export const userProfile = async (body) =>{
  console.log(body,"rtrt")
  return await Instance.post('/userprofile',{body})
}
// export const savedposts=async (body)=>{
//   console.log(body,"cjd")
//   return await Instance.post('/savedposts',{body})
// }
export const fetchusers= async () =>{
  console.log("kkkkkh")
  return await Instance.get('/fetchallusers')
}
export const followingusers = async ()=>{
  console.log("fddddddd")
  return await Instance.get('/followingusers')
}
export const follwersusers = async ()=>{
  return await Instance.get('/followersusers')
}
export const logineduser = async ()=>{
  return await Instance.get('/logineduser')
}
