import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import SocialPerks from './social-perks';
import Trustbar from '../../trustbar';
import SocialExplain from './social-explain';

const title = 'Personal Account Management'
const objectives = 'Objectives'


const Social = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
    <HeaderTwo/>
    <div className="grey-bg pt-10 pb-10"> 
    <div className="container tp-services-item">
      <div className="row align-items-center">
        <h1 className="tp-title">{title}</h1>
        <h2 className="tp-subtitle">{objectives}</h2>
        

      </div>
    </div>

    
    </div>
    <Trustbar/>
   <SocialPerks/>
   <SocialExplain/>
    <h2>{objectives}</h2>
    <h3>{why}</h3>
    <h3>{how}</h3>
    <h3>{split}</h3>
    
    <FooterThree/>
  </Wrapper>
  );
};

export default Social;