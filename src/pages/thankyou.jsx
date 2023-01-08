import React from 'react';
import { FooterThree, Wrapper } from '../layout';
import { HeaderThree } from '../layout';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';

const ThankYou = () => {
return (
<Wrapper>
<HeaderThree/>
<Breadcrumb/>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<h1 className="tp-title-md">Thank You!</h1>
<h1 className="tp-title-md">Redirecting you home </h1>
<h1 className='tp-title-md'>...</h1>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<FooterThree/>

</Wrapper>

    )
}
export default ThankYou;