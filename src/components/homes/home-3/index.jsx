import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import CtaTwo from '../../common/cta/cta-2';
import HeroArea from './hero-area';
import Services from './services';
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