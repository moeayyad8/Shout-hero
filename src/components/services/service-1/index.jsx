import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import ServiceArea from '../../common/service-area';
import AboutContact from '../about-contact';
import ExperienceArea from '../experience-area'; 



const Service = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
    <HeaderTwo/>
    <ServiceArea />
    <ExperienceArea/>
    <AboutContact/>
    <FooterThree />
  </Wrapper>
  );
};

export default Service;