import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
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

const contents = {
  title: 'Capitalize on short form video platforms.',
  sm_desc_1: "Distrubuting long form content to short form platforms provides brand awarenss unlike we have ever seen before. We're here to help you strategize, edit and distribute your content to the right platforms. ",
  sm_desc_2: ""
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const ContentExplain = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Content Sourcing'}
                subtitle={'We understand how to secure good content from business owners.'} />
              <FeatureItem title={'Retention Edit'} color={'2'}
                subtitle={'Performance based editing perfect for short form platform distrubution.'} />
              <FeatureItem title={' Platform Distribution'} color={'3'}
                subtitle={'We are masters of deployment, essential to a succesful social media plan.'} />
              <FeatureItem title={'Data Analysis'} color={'4'}
                subtitle={'We decide where to rank your next videos based on competitive metrics'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentExplain;