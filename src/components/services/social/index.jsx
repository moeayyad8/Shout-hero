import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import SocialPerks from './social-perks';
import Trustbar from '../../trustbar';
import SocialExplain from './social-explain';
import ContentForm from '../../forms/content-form';
import FaqArea from '../../faq/faq-area';
const title = 'Personal Social Media Manager'
const objectives = 'Objectives'
const desc = "We provide qualified social media managers with experience growing, maintaining, and engaging with your audience"
const hero_img = '../../../assets/img/logo/shoutheroman.png'
const OrganicSocial = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <><Wrapper>
      <HeaderTwo />
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
        <SocialPerks />
      </div>
      <SocialExplain />
      <h2 className="tp-title-md-blue">Submit a form</h2>
      <div className="container">
        <div className='bg-form'>
          <ContentForm className="ContentForm" />

        </div>
      </div>
      <h2 className="tp-title-md">Frequently Asked Questions</h2>
      <FaqArea />
      <FooterThree />
    </Wrapper>
    </>
  
  );
};

export default OrganicSocial;