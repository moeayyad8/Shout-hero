import React, {useEffect} from "react";

const HomeForm = () => {
  useEffect(() => {
      const script = document.createElement('script');
      script.src='https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);

      script.addEventListener('load', () => {
          // @TS-ignore
          if (window.hbspt) {
              // @TS-ignore
              window.hbspt.forms.create({
                  portalId: '23636729',
                  formId: '71078f27-d1a2-493d-8bab-94f77b770ea6',
                  target: '#hubspotForm'
              })
          }
      });
  }, []);

  return (
      <div>
          <div className='top-padding'></div>
       
          <div id='hubspotForm'></div>
          <p>You'll receive a reply within one business day.</p>
      </div>
  );

}

export default HomeForm;
