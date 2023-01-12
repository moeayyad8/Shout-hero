import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProductsArea from './product-area';


const Products = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title={'Shout University'} />
        {/*Hero */}
      {/*Introducing Shout University*/}
       {/* Empowering Independent Social Media Managers */}
        
        {/* Action Bar Free Course, Get Certified, Become a Member */}
         
         {/*About Shout University */}
         {/*Start managing social media accounts without performance anxiety */}

         {/* Inside Shout University */}

        {/* Become a member */}
        {/* Get access to meetings with our team */}
        {/*  */}
      <div className='container'>
        <div className='row'>
        <div className="top-padding"></div>
          <h1 className='tp-title-md'>Shout University</h1>
          <p> We offer our in-house research, collaborabations, and consulting sessions into easy to access courses and e-books to spread the knowledge to people</p>
          <hr />
          <div className="plans-table">

          </div>
     
        </div>
      </div>
      <ProductsArea />
      <FooterThree />
    </Wrapper>
  );
};

export default Products;