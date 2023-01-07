import Link from 'next/link';
import React, { useRef, useContext } from 'react';

const title = 'For Small Business'
const objectives = 'Sign up today, and Get $200 off your first month!'
const hero_img = '../../../assets/img/logo/shoutheroman.png';
const local ='/local-launch'


const HeroSmall = () => {
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
                    <h1 className="tp-title-white-lg">Make your business fly with Video Hero.</h1>
                    <h1 className="tp-service-title">{objectives}</h1>

                    <li>
                      <ul className='tp-subtitle-white'>Specilized Expertise</ul>
                      <ul className='tp-subtitle-white'>Save an average of 2-4 hours a day.</ul>
                      <ul className='tp-subtitle-white'>Cost Efficent</ul>

                    </li>
                    <div className="contact-hero">
                      {/*Message Us */}

                      {/*Call Us */}
                      <div className="right">
                        <Link href={local}>
                        <button className="tp-btn-lg-yellow">Schedule Call</button>
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

export default HeroSmall;