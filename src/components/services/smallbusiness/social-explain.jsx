import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle}) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
const content = <><div className='tp-sv-tag-lg'> + Content Quality </div></>
const brand = <><div className='tp-sv-tag-lightred-lg'> + Branding </div></>
const awareness = <><div className='tp-sv-tag-orange-lg'> + Awareness </div></>
const conversion = <><div className='tp-sv-tag-lightpink-lg'> + Conversion</div></>

const contents = {
  title: 'How Shout Hero Helps',
  sm_desc_1: "Operations",
  sm_desc_2: "Strategy & Planning"
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const SocialExplain = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className='top-padding'></div>
            <h2 className='tp-title-md'>{title}</h2>
            <div className='row-center'>
              
              <p className='tp-p-md'>Areas we help you improve</p>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Content Sourcing'}
                subtitle={content} />
              <FeatureItem title={'Positioning'} color={'2'}
                subtitle={brand} />
              <FeatureItem title={'Distribution'} color={'3'}
                subtitle={awareness} />
              <FeatureItem title={'Data Analysis'} color={'4'}
                subtitle={conversion} />

            </div>

          </div>
      
        </div>
      </div>
    </>
  );
};

export default SocialExplain;



