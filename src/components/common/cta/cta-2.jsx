import Link from 'next/link';
import React from 'react';

const CtaTwo = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-65 pb-60"
      style={{ backgroundImage: 'url(/assets/img/news/news-bg.jpg)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-12 ">
            <div className="tp-news-sub-wrapper pr-50">
              <div className="tp-news-letter-section-box">
                <h4 className="tp-subtitle subtitle-secondary-color wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">Franchisor Solutions</h4>
                <h1 className="tp-title-sm tp-title-sm tp-white-text pb-25 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"> Get your local franchises 
                  expert marketing help.
                </h1>
                <p className="text-white"> With an audience at local levels around the country, we can help you create a huge audience</p>
              </div>
              <div className="tp-news-button wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                <Link href="/franchise">
                  <a className="tp-btn-lg-yellow mr-20">Franchisor Solutions</a>
                </Link>
  
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
              <img src="/assets/img/news/news-7.1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaTwo;