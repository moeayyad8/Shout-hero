import React from 'react';
const Trustbar = () => {
  const img = '/assets/img/logo/shouthornicon.png';

  return (
    
    <div className="trustbar">
      <div className="trustbar-container">
          <a className="trust-circle"><img classaName="trust-innercircle"src={img}></img></a>
      </div>
    </div>
  );
};

export default Trustbar;