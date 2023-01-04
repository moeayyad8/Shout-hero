import React, { useRef, useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FaqArea from '../../faq/faq-area';
import ContentForm from '../../forms/content-form';
import ContentPerks from '../../services/content/content-perks';
import Trustbar from '../../trustbar';
import ContentExplain from './content-explain';
import Script from 'next/script';



const title = 'Content Production Assitance'
const objectives = 'Objectives'
const desc = "Content can be a huge time sink for businesses. We offer a variety of content production services to help you save time and money."
const hero_img = "../../../assets/img/service/herolikes.png"
const ContentMain = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);


  return (
    <Wrapper>
      <HeaderTwo />


      <div className="grey-bg pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className="grey-bg pt-10 pb-10">
              <div className="container tp-services-item">
                <div className="service-hero">
                  <div className="service-hero-text">

                    <h1 className="tp-title">{title}</h1>
                    <h2 className="tp-subtitle">{objectives}</h2>

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

                  <div className="service-hero-image">
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
        <ContentPerks />
      </div>
      <ContentExplain />
      <h2 className="tp-title-md-blue">Submit a Form</h2>
      <div className="container">
        <div className='bg-form'>
        <ContentForm className="ContentForm" />

        </div>
      </div>
      <h2 className="tp-title-md">Frequently Asked Questions</h2>
      <FaqArea />
      <FooterThree />
    </Wrapper>
  );
};

export default ContentMain;