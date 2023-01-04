import React from 'react';

const hero_img = '../../../assets/img/logo/shoutheroshieldblue.png';

const Trustbar = () => {


  return (
    <>
      <div className="trustbar">
        <div className="trustbar-container">
          <img className="trust-circle" src={hero_img} alt ="">
       
          </img>

        </div>

      </div>
      <div className="trustbar">
        
        <div className="trust-padding">
        <h2>Our Hero Guarentee</h2>
        </div>
      </div>
      <div className="trust-row">

        <div className="trust-box">
          <h3>Transparency</h3>
          <p>Have a question? Just ask.</p>
        </div>
        <div className="trust-box">
          <h3>Efficiency</h3>
          <p>Increased productivity, better results.</p>
        </div>
        <div className="trust-box">
          <h3>Innovation</h3>
          <p>Stand out in your market.</p>
        </div>
      </div>
      <div className="trust-row-link"><hr/> 
        </div>
        <p className="trust-row-link">Learn more about our guarentee here</p> 

    </>




  );
};

export default Trustbar;