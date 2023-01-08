/* eslint-disable prettier/prettier */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { verifyAdmin } from '../Apirequests/adminapis';
import { setAdminAuth } from '../Store/authSlice';

function AdminRoute({ children }) {
  const cookie = new Cookies();
  const token = localStorage.getItem('adminToken')
  const { admin } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
console.log(token,"tppafsd")
  // eslint-disable-next-line consistent-return
  async function checkAdmin() {
    try {
      const { data } = await verifyAdmin();
      if (data) {
        dispatch(setAdminAuth(true));
        return children;
      }
    } catch (error) {
      console.log('object');
      cookie.remove('Admintoken');

    }
  }
  useEffect(() => {
    if (!token) {
      Navigate('/admin');
    }
    checkAdmin();
  }, []);

  if (admin) return children;
}

export default AdminRoute;
