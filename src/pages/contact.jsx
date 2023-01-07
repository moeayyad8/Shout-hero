import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactMain from '../components/contact';
import { useEffect } from 'react';
import { animationCreate } from '../utils/utils';


const Index = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <ContactMain/>
    </Wrapper>
  );
};

export default Index;