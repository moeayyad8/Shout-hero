import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FeatureArea from '../../about/feature-area';
import ServicesArea from '../../about/services-area';
import NewsLetter from '../../homes/home-4/news-letter';
import Trustbar from '../../trustbar';
import FranchiseForm from '../../forms/franchise-form';
import ReviewForm from '../../forms/review-form';

const title = <>Super Powered <br/> Franchise Marketing</>
const subtitle="Advantages"
const objectives="Objectives"



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
    <HeaderTwo/>
   
    <div className="grey-bg pt-90 pb-110"> 
    <div className="container tp-services-item">
      <div className="row align-items-center">
        <h1 className="tp-title">{title}</h1>
        <h2 className="tp-subtitle">{objectives}</h2>
        
      </div>
    </div>
    </div>
    <Trustbar/>
    <div className="container extra-padding">
    <h2 className="">{subtitle}</h2>

    </div>
    <ServicesArea/>
    <span> </span>
    <FeatureArea/>
    <FranchiseForm/>
    <NewsLetter/>
    <FooterThree/>
  </Wrapper>
  );
};

export default Franchise;