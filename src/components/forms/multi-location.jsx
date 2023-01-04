import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { contactSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';

const MultiLocationForm = () => {
  // user
  // const { user } = useSelector(state => state.auth);
  // console.log(user)

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', msg: '', number: '' },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success(`${values.name} your message sent successfully`, {
        position: 'top-left'
      })
      resetForm()
    }
  })

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
       <div className='mb-30'>
        <input value={values.first} onChange={handleChange} onBlur={handleBlur}
          name="first" type="text" placeholder="First Name" />
        {touched.first && <ErrorMsg error={errors.first} />}
      </div>
      <div className='mb-30'>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur}
          name="name" type="text" placeholder="Business Name" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className='mb-30'>
        <input value={values.email} onChange={handleChange} onBlur={handleBlur}
          name="email" type="email" placeholder="Email" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className='mb-30'>
        <input value={values.counter} onChange={handleChange} onBlur={handleBlur}
          name="counter" type="number" placeholder="How many locations?" />
        {touched.counter && <ErrorMsg error={errors.counter} />}
      </div>
      <div className='mb-30'>
        <input value={values.number} onChange={handleChange} onBlur={handleBlur}
          name="number" type="text" placeholder="Phone Number" />
        {touched.number && <ErrorMsg error={errors.number} />}
      </div>
      <div className='mb-30'>
        <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg"
          placeholder="Describe your project (Optional)"></textarea>
        {touched.msg && <ErrorMsg error={errors.msg} />}
      </div>
      <button type="submit" className="tp-btn">Submit</button>
    </form>
  );
};

export default MultiLocationForm;