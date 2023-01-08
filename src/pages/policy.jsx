import React from 'react';
import { FooterThree, Wrapper } from '../layout';
import { HeaderThree } from '../layout';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import SEO from '../components/seo';

const ThankYou = () => {
return (
<Wrapper>
    <SEO pageTitle={'Policy'}></SEO>
<HeaderThree/>
<Breadcrumb/>

<h1 className="tp-title-md">Policy</h1>
<p> At our marketing agency, we are committed to protecting the privacy of our clients and their customers. We understand the importance of maintaining the confidentiality of personal information and we take all necessary measures to ensure that it is protected.

We collect personal information from our clients in order to better understand their marketing needs and to provide them with the most effective solutions. This information may include contact details, demographics, and purchasing habits. We may also collect information from our clients customers through surveys, social media, and other marketing channels.

We will only use the personal information we collect for the purpose of providing marketing services to our clients. We will not sell or share this information with third parties without the express consent of our clients.

We use a variety of security measures to protect the personal information we collect, including encryption and secure servers. We also have strict internal policies in place to prevent unauthorized access to this information.

If you have any questions or concerns about our privacy policy, please do not hesitate to contact us. We are always happy to discuss our practices and provide additional information as needed. 
</p>
<h1 className='tp-title-md'>...</h1>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<FooterThree/>

</Wrapper>

    )
}
export default ThankYou;