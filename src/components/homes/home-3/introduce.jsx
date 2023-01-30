
import React from 'react';

const team_img = '../../../assets/img/service/shoutheroteam.png';


const Introduce = () => {
  return (
<>
<div className='top-padding'></div>
      <div className='container'>
        <div className='row'>
          <div className='top-padding'></div>
          <div className='row-center'>
          <h2 className='tp-title-md'>Your #1 Short Form Media Partner</h2>
          </div>
          <div className='bg-yellow-perks'></div>

        </div>
        <div className='service-container'>
     
        <div className='perk-container'>
         
            <h3 className='tp-title-sm'>Proven Repeat Success</h3>
          </div>
          <div className='perk-container'>
            <img ></img>
            <h3 className='tp-title-sm'>Multi-Platform Expertise</h3>
          </div>
          <div className='perk-container'>
            <img></img>
            <h3 className='tp-title-sm'>Creative and Innovative</h3>
          </div>

        </div>
        
        <div className='top-padding'></div>
        <h3 className='tp-title-md'>See how Shout Hero can help you acheive your goals.</h3>
        <div className='md-padding'></div>
        <div className='row-center'>
          <button className='tp-sv-tag-orange-lg'>Awareness</button>
          <button className='tp-sv-tag-green-lg'>Editing</button>
          <button className='tp-sv-tag-red-lg'>Community</button>
          <div className='tp-sv-tag-lg'>Content</div>
          <button className='tp-sv-tag-teal-lg'>Launch</button>
          <button className='tp-sv-tag-pink-lg'>Conversion </button>
        </div>
      </div>
      <div className='row-center'>
          <button className='tp-sv-tag-purple-lg'>Production</button>
          <button className='tp-sv-tag-yellow-lg'>Clips</button>
          <button className='tp-sv-tag-lightred-lg'>Branding</button>
          <div className='tp-sv-tag-lightgreen-lg'>Design</div>
          <button className='tp-sv-tag-lightpurple-lg'>Engagement</button>
          
        </div>
        <div className='team-class2'>
              <img src={team_img} alt="" />
            </div>
      <div className='top-padding'></div>
      
</>
  );
};

export default Introduce;
