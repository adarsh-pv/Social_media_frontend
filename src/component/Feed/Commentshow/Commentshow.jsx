/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format } from 'timeago.js'
import React from 'react';
// import { useFormik } from 'formik';
import './Commentshow.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { commentpost, fetchcomments } from '../../../Apirequests/postapis';

function Commentshow({ post }) {
  console.log(post, 'postissssssssss');
  const [commets, setComments] = useState([]);
  const fetchCommets = async () => {
    const response = await fetchcomments(post);
    setComments(response.data);
  };
  useEffect(() => {
    fetchCommets();
  }, []);
  const validationSchema = Yup.object({
    comment: Yup.string().required('Please enter something')
  });
  const formik = useFormik({
    initialValues: {
      comment: ''
    },
    onSubmit: async (values) => {
      commentpost({ values, post });
      fetchCommets();
    },
    validationSchema
  });
  return (
    <>
      <i>Comments</i>

      <div className="showit">
        <br />
        {commets?.map((cmnts) => {
          console.log(new Date().toUTCString().slice(0, 16));
          return (
            <>
              {' '}
              <h4>{cmnts?.username.name}</h4>
              <div>{cmnts?.comments?.content}</div>
              <div className="cmt">{format(cmnts?.comments?.Date)}</div>
              {console.log(cmnts?.comments?.Date, 'adarxh')}
              <br />
            </>
          );
        })}
      </div>
      <div className="comments">
        <form onSubmit={formik.handleSubmit}>
          <div className="write">
            <img
              className="img"
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <input
              type="text"
              className="comment"
              name="comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
              placeholder="Write a comment"
            />
            <label>{formik.touched.comment && formik.errors.comment}</label>

            <button className="button" onClick={commets}>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Commentshow;
