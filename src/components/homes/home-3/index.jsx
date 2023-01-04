import React, { useEffect, useState} from 'react';
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
      <Services />
      {/*    <div className='empower-bg'>
        <h3 className='tp-title-sm-left'>See how Shout Hero Empowers</h3> <p>Small Business</p> <p>Corperations</p> <p>Creators</p> <p>SaaS</p> <p>Agencies</p> <p>eCommerce</p> <p>Self-Starters</p>
      </div> */}
      <CreativeArea></CreativeArea>
      <CtaTwo />
      <NewsLetter />
      <NeedHelp/>
      <BlogArea/>
      <div className='container'>
    
      <HomeForm />      </div> 
      <FooterThree />
    </Wrapper >
  );
};

export default HomeThree;