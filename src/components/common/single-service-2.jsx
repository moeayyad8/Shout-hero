import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


const SingleServiceTwo = ({ name, price, offer,stripe,term,edits,perk,perk2,perk3,perk4,consulting,scripts }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const handleFeatures = () => {
    setShowFeatures(true)
  }

  return (
    <div className='plans-box-card'>
      <div className='plans-circle'>
        <div className="service-padding">
          <h2 className='tp-service-base'>{name}</h2>
          <div className="md-padding"></div>
          <p className='plans-price'>

            <span className='plans-price-black'>{price}</span>/{term}</p>
          <p>{offer}</p> </div>

      </div>

      <li className="padding">
        <ul className='tp-subtitle-white'>Up to {edits} edits/day</ul>
        <ul className='tp-subtitle-white'>24 hour turnaround</ul>
        <ul className='tp-subtitle-white '>{scripts} scripted content ideas / week </ul>
        <ul className='tp-subtitle-white'>Engagement management </ul>
        <ul className='tp-subtitle-white'>{consulting}consulting</ul>
        <button onClick={handleFeatures} className='tp-p-white'>See More Features +</button>
        {showFeatures && <li>
          <ul className='tp-subtitle-white'>Owners Training</ul>
          <ul className='tp-subtitle-white'>Best Fit Content Systems</ul>
          <ul className='tp-subtitle-white'>Account Audit</ul>
          <ul className='tp-subtitle-white'>Subtitles/Captions</ul>
          <ul className='tp-subtitle-white'>Personal Video Editor </ul>
          <ul className='tp-subtitle-white'>Personal Creative Director</ul>
          <ul className='tp-subtitle-white'>Personal Community Manager</ul>
        </li>}
      </li>
      <div className='row-center'> <Link href={stripe}><button href='/google' className='tp-btn-lg-yellow-space'>Checkout</button></Link>
      </div>
      <div className='row-center'><p className='tp-message-description-white'>14 Day Risk Free Guarentee</p></div>
    </div>



  );
};

export default SingleServiceTwo;