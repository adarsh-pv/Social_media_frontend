/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4001';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });

export const createpost = async (body) => {
  console.log(body, 'rr');
  return await Instance.post('/createpost', { body });
};
export const fetchposts = async () => {
  return await Instance.get('/allposts');
};
