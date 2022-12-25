import React from 'react';

export default () => 
<React.Fragment>
    <script dangerouslySetInnerHTML={{
        __html: `<!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QZJLWWCNKV%22%3E</script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-QZJLWWCNKV');
        </script>`
    }}/>
</React.Fragment>