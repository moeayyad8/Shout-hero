import React from 'react';
import { FooterThree, Wrapper } from '../layout';
import { HeaderThree } from '../layout';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import SEO from '../components/seo';

const ThankYou = () => {
return (
<Wrapper>
    <SEO pageTitle={'Guarentee'}></SEO>
<HeaderThree/>
<Breadcrumb/>

<div className="top-padding"></div><div className="top-padding"></div>
<h1 className="tp-title-md">14 Risk Free Guarentee</h1>
<p> At our marketing agency, we are confident in the results that we deliver to our clients. That's why we offer a 14-day money back guarantee. If you are not satisfied with the results of our marketing services within 14 days of starting your campaign, we will refund the full amount of your investment.

To qualify for a refund, you must have implemented all of the recommendations provided by our team and provided us with the necessary information and materials to execute the campaign. If you have not met these requirements, we reserve the right to refuse a refund.

If you are not satisfied with the results of your marketing campaign, please contact us as soon as possible to discuss your concerns. We will work with you to identify any issues and make any necessary adjustments to your campaign. If, after working with our team, you still feel that you are not seeing the results you were expecting, we will process a full refund within 7 business days.

We are committed to providing our clients with the highest level of service and delivering results that exceed their expectations. If you have any questions or concerns about our money back guarantee, please do not hesitate to contact us. 
 </p>
 <p> We reserve the right to rule the guarentee invalid if any (but not limited to ) of the following conditions have been met.</p>
 <li>
    <ul> Refusal to record given scripts</ul>
    <ul> Not uploading in a timely matter to our team</ul>
    <ul> Innapropriate behavior towards the Shout Hero Team</ul>
    <ul> Unaddressed issues made known by the team </ul>

 </li>

<p>Shout Hero reserves the right to refuse the 14 day risk free guarentee. The Shout Hero team will make exceptions based on applicable conditions, as well as platform behaviors uncontrollable by Shout Hero.</p>
<h1 className='tp-title-md'>Shout Hero will act in the best interest of its group of customers.</h1>

<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<FooterThree/>

</Wrapper>

    )
}
export default ThankYou;