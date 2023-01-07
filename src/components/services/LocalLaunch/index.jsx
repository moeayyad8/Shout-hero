import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import HubspotContactForm from '../../forms/content-form';
import ScheduleHubspot from '../../forms/schedule-hubspot'

const LocalLaunch = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
    <HeaderTwo/>
    <div className='container'>
      <div className='row'>
        <div className='top-padding'></div>
      <h1 className='tp-title-md'>Get Video Hero by Shout Hero </h1>
    <HubspotContactForm/>
      </div>
    </div>
   
    <ScheduleHubspot/>
    <h2 className='tp-title-md'>Schedule Call</h2>
    <FooterThree/>
  </Wrapper>
  );
};

export default LocalLaunch;