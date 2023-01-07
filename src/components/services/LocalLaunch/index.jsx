import React, { useEffect } from 'react';
import { FooterThree, HeaderTwo, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
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
    <Breadcrumb></Breadcrumb>
    <div className='container'>
      <div className='row'>
        <div className='top-padding'></div>
      <h1 className='tp-title-md'>Get Video Hero by Shout Hero </h1>
    <HubspotContactForm/>
      </div>
    </div>
    <h2 className='tp-title-md'>Schedule Call</h2>

    <ScheduleHubspot/>
    <FooterThree/>
  </Wrapper>
  );
};

export default LocalLaunch;