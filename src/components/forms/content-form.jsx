import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '23636729',
                    formId: '71478775-48b9-4ebf-9a42-43bbae64dc25',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>

            <p>You will receive a reply within one business day.</p>
            <div id='hubspotForm'></div>
        </div>
    );

}

export default HubspotContactForm;
