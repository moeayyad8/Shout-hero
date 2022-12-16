import React from 'react';
import { HighlightThree } from '../../../svg';

const SvgHighlight = () => (<svg width="201" height="12" viewBox="0 0 201 12" fill="none" 
xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
</svg>)

const contents = {
  shapes: [
    'mission-shape-5.1.png',
    'mission-shape-5.6.png',
    'mission-shape-5.3.png',
  ],
  tabs: [
    { active: true, id: 'mission', title: 'Our Mission' },
   
    { id: 'value', title: 'Our Values' },
  ],
  tab_contents: [
    {
      show: true, id: 'mission',
      title: <>Here to rescue your <span className="tp-section-highlight"> marketing <SvgHighlight /> </span> from evil.</>,
      text_1: <>We are a team of young passionate marketers who understand <br /> digital marketing ands its power to help small businesses. </>,
      text_2: <>Devastated by watching greedy corperations shut down business after business, we decided to make a change. Our mission is  to restore and protect the american dream for generations to come.  </>
    },

    {
      id: 'value',
      title: <>Bussiness conduct policy, our <span className="tp-section-highlight"> Heroes Code.
        <HighlightThree /> </span> </>,
      text_1: <>We believe in showing our clients respect, transparency, and integrity, and we strive to provide effective and affordable marketing solutions that are tailored to their unique needs and goals. <br /> </>,
      text_2: <>Our goal is to help small business owners succeed, and we are dedicated to providing the support and guidance they need to achieve their dreams and grow their businesses.</>
    },
  ],
  img:'/assets/img/mission/collage.png'
}

const { shapes, tabs, tab_contents,img } = contents;

const MissionArea = () => {
  return (
    <div className="tp-mission-area pt-130 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-mission-shape-${i+1} d-none d-lg-block`}>
          <img src={`/assets/img/mission/${s}`} alt=""/>
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-tab-section pb-10">
              <nav>
                <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                  {tabs.map((tab) => (
                  <button key={tab.id} className={`nav-links ${tab.active?'active':''}`} id={`nav-${tab.id}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab.id}`} type="button" role="tab" aria-controls={`nav-${tab.id}-tab`} aria-selected={tab.active?'true':'false'} tabIndex='-1'><span>{tab.title}</span></button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              {tab_contents.map((item) => {
                const {id,text_1,text_2,title,show} = item;
                return <div key={id} className={`tab-pane fade ${show?'show active':''}`} id={id} 
                role="tabpanel" aria-labelledby={`nav-${id}-tab`}>
                <div className="tpmission">
                  <div className="tpmission__content">
                    <h2 className="tp-mission-title">{title}</h2>
                    <p className="pb-20">{text_1}</p>
                    <p>{text_2}</p>
                  </div>
                </div>
              </div>
              })}
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-img">
              <img src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
