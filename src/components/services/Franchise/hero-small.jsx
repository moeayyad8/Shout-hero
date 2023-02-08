import Link from 'next/link';
import React, { useRef, useContext } from 'react';
import ContactUs from '../../forms/contact-form';

const title = 'Local Franchise Marketing Support '
const objectives = 'Global Brands, Local Reach'
const hero_img = '../../../assets/img/logo/yourheros.png';
const local ='/local-launch'
const message_img = '../../../assets/img/logo/messageus.png';
const callus_img = '../../../assets/img/logo/callus.png';

const search_img = '../../../assets/img/logo/search.png';
const display_img = '../../../assets/img/logo/display.png';
const viewcounter = '../../../assets/img/logo/viewcounter.png';
const analytics = '../../../assets/img/logo/analytics.png';
const video = '../../../assets/img/logo/video.png';
const postcounter = '../../../assets/img/logo/postcounter.png';

const HeroFsmall = () => {
  return (
    <>
    <div className='bg-blue-gradient pt-10 pb-10'>

      <div className='container'>
        
        <div className='row'>
          <div className='top-padding'></div>
          <div className='top-padding'></div>
          <div className='md-padding'></div>
          <hr></hr>
          <div className='md-padding'></div>
          <div className='contact-hero'>
            <div className='left'>
              <div className='top-padding'></div>
            <h1 className='tp-title-white'>Shout Hero is Your Proven<span className='yellow-font'> Franchise Marketing </span>  Partner </h1>
            
            <h3 className="tp-white-text">Certified heroes, ready to save the day.</h3>
                  <p className='tp-white-text'> We care about your success, and our team of experts has the accolades to prove it. We are commited to helping you acheive any digital possiblility.</p>
                  <div className="tp-certif">
                  <hr></hr>

                    <li>
                    <img src={search_img} alt="Google Search Ads Certified" />
                      <img src={display_img} alt="Google Display Ads Certified" />
                      <img src={video} alt="Google Video Ads Certified" />
                      <img src={analytics} alt="Google Analytics Certified" />
                      <p className='text-white-email'>Certifications and Experience </p>
                      <ul>
                  
                        <p className='tp-subtitle-white'>Google Search, Display, Video Ads Certified</p>
                      </ul>
                      <ul>
                      

                        <p className='tp-subtitle-white'>Tiktok SEO, Organic, Paid Experts</p>
                      </ul>
                      <ul>
                

                        <p className="tp-subtitle-white">Meta Digital Marketing, Creative Strategy, Community Manager </p>
                      </ul>
                   
                    </li>
                  </div>
            </div>
            <div className='right'>
            <ContactUs></ContactUs>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    
 
    {/*  <div className="bg-blue-gradient pt-10 pb-10">
        <div className="container">
          <div className="row">
            <div className=" pt-10 pb-10">
              <div className="container tp-services-item">
                <div className="service-hero">

                  <div className="service-hero-text">
                    <div className='top-padding'></div>
                    <div className='top-padding'></div>

                    <h2 className="tp-title-sm-white">{title}</h2>
                    <hr></hr>
                    <h1 className="tp-title-white-lg">Proven Content Marketing for Local Franchises.</h1>
                    <h1 className="tp-service-title">{objectives}</h1>

                    <li>
                    
                      <ul className='tp-subtitle-white'>1 on 1 Consultations for all franchises.</ul>
                      <ul className='tp-subtitle-white'>40% more Cost Efficient than Agencies</ul>
                      <ul className='tp-subtitle-white'>Specilized Tiktok, Reels, and Shorts Expertise</ul>
                    </li>
                    <div className="contact-hero">
                     
                      <div className="right">
                        <Link href={local}>
                        <button className="tp-btn-lg-yellow">Contact Us</button>
                        </Link>
                      </div>
                    </div>
                    <div className="md-padding"></div>

                  </div>

                  <div className="service-hero-50">
                    <div className='top-padding'></div>
                    <div className='top-padding'></div>

                    <img src={hero_img}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactUs/>
        </div>
 
      </div>   */}
     
 
    </>
  );
};

export default HeroFsmall;