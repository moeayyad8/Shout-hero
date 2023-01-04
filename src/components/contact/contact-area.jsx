import React, {useState} from 'react';
import ContactForm from '../forms/contact-form';
import MultiLocationForm from '../forms/multi-location';
import CreatorForm from '../forms/creator-form';

const ContactArea = () => {
  const [showSingleLocationForm, setShowSingleLocationForm] = useState(false);
  const [showMultiLocationForm, setShowMultiLocationForm] = useState(false);
  const [showCreatorForm, setShowCreatorForm] = useState(false);
  
  const handleSingleLocationClick = () => {
    setShowSingleLocationForm(true);
    setShowMultiLocationForm(false);
    setShowCreatorForm(false);
  }
  
  const handleMultiLocationClick = () => {
    setShowSingleLocationForm(false);
    setShowMultiLocationForm(true);
    setShowCreatorForm(false);
  }
  
  const handleCreatorClick = () => {
    setShowSingleLocationForm(false);
    setShowMultiLocationForm(false);
    setShowCreatorForm(true);
  }
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
         
          
              <div className="tpcontact ">
                <h4 className="tp-title"><span className="tp-">Theres no time to waste. </span> See what Shout Hero can do for you.</h4>
                <div><h2>or email us at <a className="" href="mailto:hello@shouthero.io">hello@shouthero.io</a></h2></div>        
                <div className="tpcontact__form tpcontact__form-3">
                 
                  <h2> Complete this form to get into contact with our heroes</h2>
                  <button onClick={handleSingleLocationClick} className="tp-btn-yellow">Single Location Business</button>
                  <button onClick={handleMultiLocationClick} className="tp-btn-yellow">Multi Location Business</button>
                  <button onClick={handleCreatorClick} className="tp-btn-yellow">Creator</button>
                <button className=""></button>

               {/* ContactForm start */}
                { showSingleLocationForm ? <ContactForm /> : null }
                { showMultiLocationForm ? <MultiLocationForm /> : null }
                { showCreatorForm ? <CreatorForm /> : null }
              {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;