import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';

const title = "The #1 Amazon Review Agency"
const subtitle="Deliverables"
const objectives = "Objectives"
const why ="Why what we do Works"
const how ="How to get started"
const split ="split tested offer"


const PaidAds = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
    <HeaderTwo/>
    <div className="grey-bg pt-11 pb-10"> 
    <div className="container tp-services-item">
      <div className="row align-items-center">
        <h1 className="tp-title">{title}</h1>
        <h2 className="tp-subtitle">{objectives}</h2>
      
      </div>
    </div>

    
    </div>
    <h2>{subtitle}</h2>
    <h2>{objectives}</h2>
    <h3>{why}</h3>
    <h3>{how}</h3>
    <h3>{split}</h3>
    <FooterThree/>
  </Wrapper>
  );
};

export default PaidAds;