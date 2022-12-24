import React from 'react';
import {useState} from 'react';

const FranchiseForm = () => {
    async function handleOnSubmit(e) {
        e.preventDefault();
    
        const formData = {};
    
        Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value;
        });
    
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
    }
  return (
    <>
       <h2>Next.js Sendgrid form submission</h2>
       <form onSubmit={handleOnSubmit}>
            <p className="comment-input">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>
            <p className="comment-input">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>
            <p className="comment-input">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>
            <p className="comment-input">
              <button className="tp-btn-yellow">Submit</button>
            </p>
          </form>
    
    </>
  );
};

export default FranchiseForm;