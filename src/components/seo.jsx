import Head from "next/head";
import FACEBOOK_PIXEL_1 from "./pixels/facebook/pixel-1";
import GOOGLE_PIXEL_2 from "./pixels/google/pixel-2";
import TIKTOK_PIXEL_3 from "./pixels/tiktok/pixel-3";

import HOTJAR_PIXEL_5 from "./pixels/hotjar/pixel-5";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Shout Hero`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="." />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
      
      <HOTJAR_PIXEL_5/>
      <FACEBOOK_PIXEL_1/>
      <GOOGLE_PIXEL_2/>
      <TIKTOK_PIXEL_3/>
     
    </Head>
  </>
);

export default SEO;