import Script from 'next/script';
import React from 'react';

const TIKTOK_PIXEL_3 = () => 
<>
<React.Fragment>
    <Script id='tiktok' dangerouslySetInnerHTML={{__html:`!function (w, d, t) {
          w.TiktokAnalyticsObject=t;
          var ttq=w[t]=w[t]||[];
          ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
          for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
          ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;
            n<ttq.methods.length;
            n++)ttq.setAndDefer(e,ttq.methods[n]);
            return e},
            ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
        
          ttq.load('CET26ARC77UD28TRPA00');
          ttq.page();
        }(window, document, 'ttq');` }}> </Script>
</React.Fragment>
</>
export default TIKTOK_PIXEL_3;


