import Link from 'next/link';
import React, { useRef, useContext } from 'react';

const title = 'Local Franchise Marketing Support '
const objectives = 'Global Brands, Local Reach'
const hero_img = '../../../assets/img/logo/yourheros.png';
const local ='/local-launch'


const HeroFsmall = () => {
  return (
    <>
      <div className="bg-blue-gradient pt-10 pb-10">
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
                      {/*Message Us */}

                      {/*Call Us */}
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
        </div>
      </div>
    </>
  );
};

export default HeroFsmall;