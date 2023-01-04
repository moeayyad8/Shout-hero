import React, {useEffect} from "react";

const CallBackForm = () => {
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
                  formId: '0a3d4aa9-30bd-4bc3-aa3c-8ad96244bb88',
                  target: '#hubspotForm'
              })
          }
      });
  }, []);

  return (
      <div>
          <div className="top-padding"></div>
      
          <h2 className="tp-title-md">Fill out the form for a call back.</h2>
          <p>Estimated call back wait time.</p>
          <h2 className='drop-heading'>14 minutes</h2> 
          <div id="hubspotForm"></div>
        
      </div>
  );

}

export default CallBackForm;
