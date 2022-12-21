import React from 'react';
const Trustbar = () => {
  const img = '/assets/img/logo/shoutheroshield.png';

  return (
    <section className='justify-content'>
      <div className="margin-bottom-50">
        <img src={img} alt="" /></div>

          <div className="trustbar">
          <div className="trustbar-container">
                <div className="">
                  <p className="text-white"> Client Satisfaction Guarentee </p>
                  <p className="text-white"> Shout Hero Quality Guarentee </p>
                </div>
          </div>
    </div>
    </section>


  );
};

export default Trustbar;