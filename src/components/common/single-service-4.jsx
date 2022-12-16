import Link from 'next/link';
import React from 'react';



const SingleServiceFour = ({ service, index, m }) => {
  const { delay, duration,id,img, text_1, title, color, perk_1, perk_2, perk_3, tag_1, tag_2, tag_3, tag_color1, tag_color2, tag_color3} = service || {};
  return (
    <div className="col-xl-4 col-md-6">

      <div className={`tp-services-item text-left
      ${color} ${index && index > 2 ? 'mb-30' : ''} ${m ? 'mb-30' : ''} wow tpfadeUp`}
        data-wow-duration={duration} data-wow-delay={delay}>
       
        <div className="tp-services-item__content">
       
        <h3 className="tp-sv-title">
            <Link href={`/service-details/${id}`}>
              <a>{title}</a>
            </Link>
          
          </h3>
          <p className="tp-subtitle extra-padding wow tpfadeUp">Objectives:</p>
          <div>
          <a className={tag_color1} >{tag_1}</a>
          <div className= {tag_color2} >{tag_2}</div>
          <div className= {tag_color3} >{tag_3}</div>
          </div>
          <div className="tp-sv-tag-purple text-center" >  </div>
          <p className="extra-padding">{text_1}</p>
          
          <p className="tp-subtitle bullet-list">{perk_1}</p>
          <p className="tp-subtitle bullet-list wow tpfadeUp">{perk_2}</p>
          <p className="tp-subtitle bullet-list wow tpfadeUp">{perk_3}</p>
       
          
          <Link href="/about-me">
            <a className="tp-btn-sm-sky">add var</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceFour;