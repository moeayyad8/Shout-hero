import React, { useState, useEffect } from 'react';
import { FooterThree, HeaderThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactForm from '../forms/contact-form';
import Trustbar from '../trustbar';
import Script from 'next/script';

const message_img = '../../../assets/img/logo/messageus.png';
const callus_img = '../../../assets/img/logo/callus.png';

const search_img = '../../../assets/img/logo/search.png';
const display_img = '../../../assets/img/logo/display.png';
const viewcounter = '../../../assets/img/logo/viewcounter.png';
const analytics = '../../../assets/img/logo/analytics.png';
const video = '../../../assets/img/logo/video.png';
const postcounter = '../../../assets/img/logo/postcounter.png'; 


function Contact() {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  

  const handleLiveChatClick = () => {
    fetch('//js-na1.hs-scripts.com/23636729.js')
      .then(response => response.text())
      .then(text => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = text;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      });
  };
  const handleCallClick = () => {
    setShowCallClick(true);
    setShowCompleteForm(false);

  };
  
  return (
    <Wrapper>


      <HeaderThree />
      <Breadcrumb title={'Contact'} />
      <div className="container">
        <div className="contact-hero">
          {/* Left Side Hero */}
          <div className="left">
            <div className="top-padding">
              <div className="tpcontact ">
                <div className="top-padding"></div>
                <h1 className="tp-title-md-left">Need help finding the <br />best option?</h1>
                <div className="md-padding"></div>

                <p> <></>If you need help deciding on a plan, requesting services,<br /> or questions about our services, our team of heroes can help.</p>


                <div className="contact-hero">
                  {/*Message Us */}
                  <div className="left">
                    <img src={message_img} />
                    <h3>Chat with us.</h3>
                    <p>Schedule a time to speak with a hero.</p>
                    <button onClick={handleLiveChatClick} className="tp-btn-yellow">LIVE CHAT</button>
                  </div>
                  {/*Call Us */}
                  <div className="right">
                    <img src={callus_img} />
                    <h3>Get a call back.</h3>
                    <p>Schedule a time to speak with a hero.</p>
                    <button onClick={handleCallClick} className="tp-btn-yellow">CALL NOW</button>
                  </div>
               
                </div>
                <div className="md-padding"></div>

                <div className="align-text-center"><p className='text-white-email'>or email us at <a className="" href="mailto:hello@shouthero.io">hello@shouthero.io</a></p></div>
                <hr></hr>
                <div classname="top-padding">
                <h3 className="">Certified heroes, ready to save the day.</h3>
                <p> We care about your success, and our team of experts has the accolades to prove it. We are commited to helping you acheive any digital possiblility.</p>
                <div className="tp-certif">
                  <img  src={search_img} alt="Google Search Ads Certified"/>
                  <img  src={display_img} alt="Google Display Ads Certified"/>
                  <img  src={viewcounter} alt="500 Million views 2022"/>
                  <img  src={postcounter} alt="1000+ Posts"/>
                  <img  src={analytics} alt="Google Analytics Certified"/>
                  <img  src={video} alt="Google Video Ads Certified"/>

                  <li>
                    <p className='font-bold-list'>Certifications and Experience </p>
                   
                    <ul>
                      <p>Google Search Ads Certified</p>
                    </ul>
                    <ul>
                      <p>Google Display Ads Certified</p>
                    </ul>
                    <ul>
                      <p>500 Million views in 2022</p>
                    </ul>
                    <ul>
                      <p>1000+ Posts</p>
                    </ul>
                    <ul>
                      <p>Google Analytics Certified</p>
                    </ul>
                    <ul>
                      <p>Google Video Ads Certified</p>
                    </ul>
                  </li>
                </div>
                </div>

              
              </div>
            </div>

          </div>
          {/* Right Side Hero */}
          <div className="right ">
            <div className="top-padding">
            </div>
            <div className="bg-form">
              <div>
                <div className="extra-padding">
                  <ContactForm />
                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
      <div className="top-padding">
      </div>
      <div className="top-padding">
      </div>
      <Trustbar />
      <div className="container">
        <div className="row">
          <div className="top-padding">
          </div>

          <div className="tp-title-sm-center">
            <h3>Charity Work</h3>
            <p>We offer free charity projects to charitable organizations. Email us for more information.</p>
            <button className="tp-btn-sm"> REACH OUT </button>
          </div>
          <div className="tp-title-sm-center">
            <h3>Press Inquires</h3>
            <p>To contact Shout Hero about press or news items, send an email to our PR team</p>
            <button className="tp-btn-sm"> EMAIL PR TEAM </button>
          </div>
          <div className="tp-title-sm-center">
            <h3>Shout Hero Careers</h3>
            <p> Interested in joining the team? Check out our careers page. </p>
            <button className="tp-btn-sm"> CAREERS </button>
          </div>
          <div className="top-padding">
          </div>
          <div className="top-padding">
          </div>
        </div>
      </div>

      <FooterThree />
    </Wrapper>
  );
}

export default Contact;

