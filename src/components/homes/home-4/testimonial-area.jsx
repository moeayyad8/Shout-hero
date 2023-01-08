import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link';

const team_img = '../../../assets/img/service/shoutheroteam.png';

const testimonial_contents = {
  title: 'Client Success Stories',
  description: '*Sob *',
  testimonial_data: [
    {
      id: 1,
      brand_img: 'df',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Created a huge buzz upon their grand opening paired with different marketing strategies to lead them to over $1,000,000 in sales.',
      img: '/assets/img/testimonial/testi-4.2.png',
      name: 'Resturant Business Owner',
      title: 'Columbus, Ohio',
      tagline:'“The numbers speak for themself”',
      quote:'$1M in Sales | 500% Growth Rate',  
    },
    {
      id: 2,
      brand_img: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: "Using Paid Ad campaigns and influencer marketing, we were able to generate 575 million impressions",
      img: '/assets/img/testimonial/testi-4.5.png',
      name: 'Health and Wellness Brand',
      quote: '575M Impressions',
      tagline:'“They saved the day for us”',
    },
    {
      id: 3,
      brand_img: '/assets/img/testimonial/testi-brands-3.png',
      ratings: [1, 2, 3, 4, 5],
      desc: "Through organic social media, web design, and paid ad campaigns, we were able to TRIPLE their client base and generate 500+ leads.",
      img: '/assets/img/testimonial/testi-4.1.png',
      name: 'Auto Service ',
      title: 'New York Metropolitan Area',
      quote:"500+ Leads | 350+ Conversions",
      tagline:'"I am forever thankful for everything Shout Hero has done for me"'
    },
    {
      id: 4,
      brand_img: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'We used social media organic growth strategies to generate 750,000,000+ impressions and over 80,000 followers in just 1 year.',
      img: '/assets/img/testimonial/testi-4.2.png',
      name: 'Leslie Alexander',
      title: '',
      quote:'675% Growth Rate | 750+ Million impressions',
      tagline:'“They call them heroes for a reason!”'
    }
  ]
}

const { highlight_text, testimonial_data, title } = testimonial_contents;

const TestimonialArea = ({ home_6, style_2 = false }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <div className='yellow-bg'>
      <div className={`tp-testimonial-area ${style_2 ? 'pb-130' : 'pt-130 pb-130'} p-relative`}>
    <div className={`${home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'} d-none d-lg-block`}>
      <img src={home_6 ? "/assets/img/testimonial/testimonial-shape-5.3.png" : "/assets/img/hero/hero-shape-4.png"} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
            <div className="tp-testimonial-title-box ">
              
              <h2 className="tp-title-sm">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="212" height="11" viewBox="0 0 212 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                  </svg>
                </span>
              </h2>
              <p className='tp-message'>A message from the founders.</p>
              <p className='tp-message-description'>We started Shout Hero in 2018, coming from families of small business we knew the marketing struggles of small business personally. Our goal was give small business the marketing they deserved. Since then we have achieved some amazing feats for some even more amazing people.</p>
            </div>
        
          </div>
        </div>
      </div>
      <div className="tp-testimonial-slider-section-four">
        <Swiper
          loop={sliderLoop}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          centeredSlidesBounds={true}
          className="swiper-container testi-slider-active-five"
          breakpoints={{
            '1200': {
              slidesPerView: 3,
            },
            '992': {
              slidesPerView: 3,
            },
            '768': {
              slidesPerView: 1,
            },
            '576': {
              slidesPerView: 1,
            },
            '0': {
              slidesPerView: 1,
            },
          }}
        >
          {testimonial_data.map((item) => {
            const { id, desc, img, name, title,quote,tagline } = item;
            return <SwiperSlide key={id}>
              <div className="tp-testimonial-item-four">
              <h2 className="tp-title-sm">{quote}</h2>
              <div className="tp-testi-paragraph pb-40">
                  <p>{desc}</p>
                </div>
              <h2 className='tp-title'>{tagline}</h2>
                <div className="tp-testimonial-item-four__client d-flex align-items-center">
                  <div className="tp-testimonial-item-four__position">
                    <h4 className="m-0">{name}</h4>
                    <span>{title}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      
      </div>
    </div>
  
  </div>
  <div className='container'>
          <div className='row '>
            <div className='team-class'>
              <img src={team_img} alt="" />
            </div>
          </div>
        </div>
  </div>
  );
};

export default TestimonialArea;