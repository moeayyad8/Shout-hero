import React from 'react';
import { useFormik } from 'formik';
import { reviewSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useDispatch } from 'react-redux';
import { add_reviews } from '../../redux/features/product-slice';

const ReviewForm = ({reviewValue}) => {

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
    
    </form>
  );
};

export default ReviewForm;