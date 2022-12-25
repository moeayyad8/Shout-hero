import React from "react";
import Head from "next/head";

import FACEBOOK_PIXEL_1 from "./facebook/pixel-1";
import GOOGLE_PIXEL_2 from "./google/pixel-2";
import TIKTOK_PIXEL_3 from "./tiktok/pixel-3";


const Pixels = () => 
<React.Fragment>
    <Head>  
        <FACEBOOK_PIXEL_1 />
        <GOOGLE_PIXEL_2 />
        <TIKTOK_PIXEL_3 />
    </Head>
</React.Fragment>

export default Pixels;