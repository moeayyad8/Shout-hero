import React, { useEffect, useState } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import SocialPerks from './social-perks';
import Trustbar from '../../trustbar';
import SocialExplain from './social-explain';
import ContentForm from '../../forms/content-form';
import FaqArea from '../../faq/faq-area';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import HeroSmall from './hero-small';
import Grow from './grow';
import Splitter from './splitter';
import Pricing from './pricing'
import Link from 'next/link';


const SmallBusiness = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderThree />
      <HeroSmall />
      <Grow />
      {/*White Area*/}
      <Splitter />
      <SocialExplain />
      <div>
        <h2 className='tp-title-md'> Included in Video Hero</h2>
        <div className='service-container'>
          <div className='perk-container'>
            <h3>Personal Video Editor</h3>
          </div>
          <div className='perk-container'>
            <h3>Personal Community Manager </h3>
          </div>
          <div className='perk-container'>
            <h3>Personal Creative Director </h3>
          </div>
        </div>
      </div>
      <TestimonialArea />
      <div className='container'>
        {/* <Process/>  */}
        <Pricing></Pricing>


        <div className="container">
          <div className='top-padding'></div>
          <div className='grey-bg'>
            <div className="row-center">
              <h2 className="tp-title">Need help deciding if Shout Hero is for you?</h2>
              <div className='service-padding'>
                <Link href="/contact">
                  <a className="tp-btn-yellow-semilar">Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='top-padding'></div>
      </div>

      <Trustbar />

      {/*form*/}


      <FaqArea />
      <FooterThree />
    </Wrapper>


  );
};

export default SmallBusiness;