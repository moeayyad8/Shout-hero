import Link from 'next/link';
import React from 'react';

const newsLatter_contents = {
  img: '/assets/img/news/news-2.png',
  subtitle: 'Shout University | Courses and E-Books',
  title: "Transform your career. Become a Shout Hero",
  btn_text: 'Explore',
  bg_img: '/assets/img/news/shape-3.png',
}
const { bg_img, btn_text, img, subtitle, title } = newsLatter_contents;

const NewsLetter = () => {
  return (
    <>
      <div className="tp-news-area fix">
        <div className="container">
          <div className="row align-items-end flex-wrap-reverse flex-md-wrap">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-newsletter-left-img pt-60 p-relative wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="z-index"> <img src={img} alt="" /></div>
                <div className="news-shape-img">
                  <img src="/assets/img/creative/creative-circle-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-news-letter-section-box-two pt-135 pb-145 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-md-left pb-10">{title}</h2>
                <Link href="/shoutuniversity">
                  <a className="tp-btn">{btn_text}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;