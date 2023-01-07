import React, { useEffect, useState } from 'react';
import { FooterThree, HeaderSix, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import CtaTwo from '../../common/cta/cta-2';
import NewsLetter from '../home-2/news-letter';
import HeroArea from './hero-area';

import Services from './services';
import CreativeArea from '../home/creative-area';
import NeedHelp from './needhelp';
import HomeForm from '../../forms/home-form';
import BlogArea from '../../homes/home-3/blog-area';
import Introduce from './introduce';

const HomeThree = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);


  return (
    <Wrapper>
      <HeaderThree />
      <HeroArea />
      <Introduce/>
      <CreativeArea></CreativeArea>
      {/*
            <Services />

      */}
      <CtaTwo />
      {/*
            <NewsLetter />
      <NeedHelp />
    
      */}

      <div className='container'>
        <HomeForm />
      </div>
      <BlogArea />
      <FooterThree />
    </Wrapper >
  );
};

export default HomeThree;