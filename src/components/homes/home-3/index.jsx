import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import CtaTwo from '../../common/cta/cta-2';


import MissionArea from '../home-5/mission-area';
import BlogArea from './blog-area';

import HeroArea from './hero-area';

import Services from './services';

import TestimonialArea from './testimonial-area';

const HomeThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  
  return (
    <Wrapper>
      <HeaderThree/>
      <HeroArea/>
      <Services/>
      <CtaTwo/>
      

      <FooterThree/>
    </Wrapper>
  );
};

export default HomeThree;