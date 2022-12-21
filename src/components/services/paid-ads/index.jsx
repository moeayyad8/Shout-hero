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
    <div className="grey-bg pt-10 pb-10"> 
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
        <p>We use sponsored Amazon reviews services to help businesses increase the visibility and credibility of their products on the world's largest online marketplace. Our team of experienced super-marketers will work with you to identify the most influential and trustworthy reviewers on Amazon, and then collaborate with them to create authentic and detailed reviews of your products. Our sponsored reviews are designed to boost your product's ratings and sales, and to give your brand the recognition it deserves.</p>
        <div className="tp-btn-right">
        <a className="tp-btn"> Schedule a Call </a>
        </div>

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