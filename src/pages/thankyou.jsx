import React from 'react';
import { FooterThree, Wrapper } from '../layout';
import { HeaderThree } from '../layout';
import Breadcrumb from '../components/common/breadcrumb/breadcrumb';
import SEO from '../components/seo';
import TIKTOK_PIXEL_3 from '../components/pixels/tiktok/pixel-3';
import Link from 'next/link';

const ThankYou = () => {
return (
<Wrapper>
    <SEO pageTitle={'Order Confirmation'}></SEO>
<HeaderThree/>
<Breadcrumb/>
<TIKTOK_PIXEL_3/>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<h1 className="tp-title-md">Thank You!</h1>
<h1 className="tp-title-md">Redirecting you home </h1>
<h1 className='tp-title-md'>...</h1>
<Link href="/">
                <div className="row-center"><button href='/#' className="tp-btn">Return Home</button></div>
            </Link>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
<div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>

<FooterThree/>

</Wrapper>

    )
}
export default ThankYou;