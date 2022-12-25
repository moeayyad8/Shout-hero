import Head from "next/head";
import FACEBOOK_PIXEL_1 from "./pixels/facebook/pixel-1";
import GOOGLE_PIXEL_2 from "./pixels/google/pixel-2";
import TIKTOK_PIXEL_3 from "./pixels/tiktok/pixel-3";

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
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />

      <FACEBOOK_PIXEL_1/>
      <TIKTOK_PIXEL_3/>
      <GOOGLE_PIXEL_2/>
     
    </Head>
  </>
);

export default SEO;