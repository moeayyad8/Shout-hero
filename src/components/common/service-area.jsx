import Link from 'next/link';
import React from 'react';
;
const ServiceArea = () => {
  return (
    <>
      <div className="am-about-me-area pt-110 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="ac-ab-img fix">
                <img className='w-100' src="img" alt=""/>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-6">
                  <div className="amaboutinfo">
                    <div className="amaboutinfo__client-info">
                      <h4>t</h4>
                      <span>Title</span>
                      <p>titleeee</p>
                    </div>
                    <div className="amaboutinfo__experience">
                      <p><b>Expertise:</b> Genetic Specialist</p>
                      <p><b>Experience:</b> 5 Years</p>
                      <p><a href="mailto:webmail.info@gmail.com"><b>E-mail:</b> webmail.info@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;