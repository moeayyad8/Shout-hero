import React from 'react';
import Link from 'next/link';
import SingleServiceFour from '../components/common/single-service-4';
import services_data from '../data/services-data.js';
import { HeaderThree, FooterThree } from '../layout';
import SEO from '../components/seo';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import NewsLetter from '../components/homes/home-2/news-letter';

const services_items = services_data.filter(ser => ser.home);

const Plans = () => {
    return (
     <>
     <HeaderThree/>
     <SEO pageTitle={'Plans'}/>
     <Breadcrumb/>

      <div className="tp-service-area pt-125 pb-120">
      <h2 className='tp-title-md'> Plans and Pricing </h2>
      <p></p>
        <div className="container">
          <div className="row">
          <hr className=''/>
            <div className="col-xl-12">
              <div className="tp-service-section-box text-center pb-35">
               
            
                <div className='plans-table'>
                    <div className='container'>
                        <div className='row'>
                        {services_items.map((ser, i) => {
                            return <SingleServiceFour key={i} service={ser} m={true} />
                              })}
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter/>
      <FooterThree/>
     </>
    );
};

export default Plans;