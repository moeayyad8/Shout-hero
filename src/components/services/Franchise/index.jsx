import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FeatureArea from '../../about/feature-area';
import ServicesArea from '../../about/services-area';
import NewsLetter from '../../homes/home-4/news-letter';
import Trustbar from '../../trustbar';

const title = <>Super Powered <br/>Franchise Marketing</>
const subtitle="Advantages"
const objectives="Objectives"



const Franchise = () => {

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
        <div className="inline">

        <div className="tp-sv-tag-purple text-center" >Brand Awarness</div>
        <div className="tp-sv-tag-green text-center" >Conversion</div>
        <div className="tp-sv-tag-yellow text-center" > Something  </div>
        <div className="tp-sv-tag text-center" > Final Tag </div>
     
        </div>
        <p>We're here to offer a helping hand to the owners of local franchises everywhere. Whether you are </p>
        <div className="tp-btn-right">
        <a className="tp-btn"> Schedule a Call </a>
        </div>
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
    <NewsLetter/>
    <FooterThree/>
  </Wrapper>
  );
};

export default Franchise;