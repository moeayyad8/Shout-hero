import React, {useEffect} from "react";

const ContactUs = () => {
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
                    formId: 'c3ac7a00-8e44-4b8f-b8f2-1c68b302aa66',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div className="bg-form-yellow">
          <h2 className="tp-title-sm-left"> Request more information </h2>
          <p>Need help deciding on our services? Use the form, chat, or get a call back to talk to a Shout Hero now</p>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default ContactUs;
