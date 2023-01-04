import React from 'react';
import SEO from '../components/seo';
import { HeaderThree, Wrapper } from '../layout';
import ScheduleHubspot from '../components/forms/schedule-hubspot';
import { FooterThree } from '../layout';

const index = () => {
  return (
    <Wrapper>
        <HeaderThree/>
      <SEO pageTitle={'Blog'} />
     <div className="top-padding">
     <h1>Schedule and </h1>
     <ScheduleHubspot/>
     </div>
    
    <FooterThree/>
    </Wrapper>
  );
};

export default index;