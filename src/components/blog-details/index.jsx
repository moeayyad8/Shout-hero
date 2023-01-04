import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogDetailsArea from './blog-details-area';


const BlogDetails = ({blog}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumb title={'Blog Details'} />
      <BlogDetailsArea blog={blog}/>
      <FooterThree />
    </Wrapper>
  );
};

export default BlogDetails;