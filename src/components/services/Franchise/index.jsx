import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FeatureArea from '../../about/feature-area';
import ServicesArea from '../../about/services-area';
import NewsLetter from '../../homes/home-4/news-letter';
import Trustbar from '../../trustbar';
import ContentForm from '../../forms/content-form';
import FaqArea from '../../faq/faq-area';

const title = <>Super Powered <br/> Franchise Marketing</>
const subtitle="Advantages"
const objectives="Objectives"
const desc = "ssss"
const hero_img = "/../assets/img/logo/worldpin.png"



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
   
      <div className="grey-bg pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="grey-bg pt-10 pb-10">
              <div className="container tp-services-item">
                <div className="service-hero">
                  <div className="service-hero-text">
                    <div className='top-padding'></div>
                    <h1 className="tp-title">{title}</h1>
                    <h2 className="tp-subtitle">{objectives}</h2>
                    {/* tags */}
                    <div className="extra-padding">
                      <a className="tp-sv-tag">Content</a>
                      <a className="tp-sv-tag-purple">Production</a>
                      <a className="tp-sv-tag-yellow">Clips</a>
                      <a className="tp-sv-tag-green">Editing</a>
                    </div>

                    <p>{desc}</p>
                    <div className="extra-padding">
                      <button className="tp-btn"> Get started</button>
                    </div>

                  </div>

                  <div className="service-hero-50">
                    <img className="service-hero-image" src={hero_img} alt="" />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Trustbar />
      <div className="extra-padding">
         <ServicesArea/>
      </div>
     <FeatureArea/>
      <h2 className="tp-title-md-blue">We'd love to hear from you.</h2>
      <div className="container">
        <div className='bg-form'>
          <ContentForm className="ContentForm" />

        </div>
      </div>
      <h2 className="tp-title-md">Frequently Asked Questions</h2>
      <FaqArea />
  </Wrapper>
  );
};

export default Franchise;

