import React, { useEffect, useState} from 'react';
import HomeForm from '../../forms/home-form';
import ScheduleHubspot from '../../forms/schedule-hubspot';
import CallBackForm from '../../forms/livechatform';

const message_img = '../../../assets/img/logo/messageus.png';
const callus_img = '../../../assets/img/logo/callus.png';
const appointment_img = '../../../assets/img/logo/appointment.png';
const form_img = '../../../assets/img/logo/form.png';

const NeedHelp = () => {
    const [isModalVisible, setModalVisible] = useState(false);
const handleModalClick = () => {
  isModalVisible ? setModalVisible(false) : setModalVisible(true);
setCallBackVisible(false);
setScheduleVisible(false);
setChatVisible(false);


};
const [isCallBackVisible, setCallBackVisible] = useState(false);
 const handleCallBackClick = () => {
  isCallBackVisible ? setCallBackVisible(false) : setCallBackVisible(true);
setModalVisible(false);
setScheduleVisible(false);
setChatVisible(false);

};
const [isScheduleVisible, setScheduleVisible] = useState(false);
const handleScheduleClick = () => {
  isScheduleVisible ? setScheduleVisible(false) : setScheduleVisible(true);
setCallBackVisible(false);
setModalVisible(false);
setChatVisible(false);
};
const [isChatVisible, setChatVisible] = useState(false);

  const handleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  };
  const handleLiveChatClick = () => {
    fetch('//js-na1.hs-scripts.com/23636729.js')
      .then(response => response.text())
      .then(text => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.text = text;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      });
      isChatVisible ? setChatVisible(false) : setChatVisible(true);
      setModalVisible(false);
      setCallBackVisible(false);
      setScheduleVisible(false);
  };
    return (
    <div className='contact-bg-home'>
    <div className='container'>
      <div className='p-center'>
        <div className='top-padding'></div>
        <div>
        <h1 className="tp-title-md">Need help finding the <br />best option?</h1>
        <p classname="p-center"> <></>If you need help deciding on a plan, requesting services,<br /> or questions about our services, our team of heroes can help.</p>
      </div>

      <div className='display-flex-50'>
        <div className='class-50'>
          <img classname="hide-mobile"src={message_img} />
          <h3>Chat with us.</h3>

          <button onClick={handleLiveChatClick} className="tp-btn-yellow">LIVE CHAT</button>
     
        </div>
        <div className='class-50'>
          <img src={form_img} />
          <h3>Submit Form</h3>
          <button onClick={handleModalClick} className="tp-btn-yellow">SUBMIT FORM </button>
        </div>
        <div className='class-50'>
          <img src={appointment_img} />
          <h3>Set Appointment</h3>
          <button onClick={handleScheduleClick} className="tp-btn-yellow">SCHEDULE CALL</button>
        </div>
        <div className='class-50'>
          <img src={callus_img} />
          <h3>Receive a Call</h3>
          <button onClick={handleCallBackClick} className="tp-btn-yellow">RECEIVE CALLBACK</button>
        </div>
       
      </div>
     {isModalVisible &&(
      <div>
      <HomeForm />
     </div>
     )} 
       {isCallBackVisible &&(
      <div>
        <CallBackForm/>
    
     </div>
     )} 
        {isScheduleVisible &&(
      <div>
      <ScheduleHubspot/>
    <p>Trouble loading? Please refresh.</p>
     </div>
      
     )} 
        {isChatVisible &&(
      <div>
     <p>Estimated live chat wait time</p>
     <h2 className='drop-heading'>7 minutes</h2>
     <p>Live chat enabled (Check Corner)</p>
     </div>
     )} 
        </div>
             <div className='top-padding'></div>

    </div>

  </div>
    )
        }
        

 export default NeedHelp