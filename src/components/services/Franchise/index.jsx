import React, { useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FeatureArea from '../../about/feature-area';
import ServicesArea from '../../about/services-area';
import NewsLetter from '../../homes/home-4/news-letter';
import Trustbar from '../../trustbar';
import ContentForm from '../../forms/content-form';
import FaqArea from '../../faq/faq-area';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import HeroSmall from '../smallbusiness/hero-small';
import HeroFsmall from './hero-small';
import ContactUs from '../../forms/contact-form';
import Growf from '../../services/franchise/growf.jsx';
import Delivery from './delivery';

const title = <>Global Brands, Local Reach</>
const subtitle="Advantages"
const objectives="Objectives"
const desc = ""
const hero_img = "/../assets/img/logo/yourheros.png"



const Franchise = () => {

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
  
  
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);


  return (
    <Wrapper>
    <HeaderThree/>
    <HeroFsmall/>
   
    <div className='top-padding'></div>
    <div className='container'>
    <div className='row'>
    <ContactUs/>
    </div>
    </div>
    <div className='top-padding'></div>
    <FeatureArea/>
    <div className="container">
    <h1> The new way to approach social media marketing 
      one content source 
      unlimited platforms
    </h1>
   <div className='md-padding'></div>
         <ServicesArea/>
    </div>
    <Growf></Growf>
<Delivery></Delivery>
    <div className='container'>
      <div className='row'>
        <h3> How this helps corperate.</h3>
        <li>
          <ul> Builds diversified marketing assets on new platforms for corperate. </ul>
          <ul> Align corperate marketing goals with local reach.</ul>
          <ul> Releive marketing pressure from independent franchises.</ul>
          <ul> Succeed in new markets to build national brands. </ul>
        </li>
      </div>
    </div>
      <Trustbar />
      <div className='md-padding'></div>
    <h3 className='tp-title-md'>Answer your franchisors questions.</h3>
      <FaqArea />
  </Wrapper>
  );
};

export default Franchise;

