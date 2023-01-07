import Link from "next/link";
import React, {useState} from "react";

const stripe = "https://buy.stripe.com/8wMeYx6kL4f11i0eUZ"




const Pricing = () => {

    const [showFeatures, setShowFeatures] = useState(false);
    const handleFeatures = () => {
      setShowFeatures(true)}
    
    
      return(
       
<div className="row-center">
            <div className='plans-box'>
          <div className='plans-left'>
            <div className='plans-box-card'>

              <div className='plans-circle'>
                <div className="service-padding">
                  <h2 className='tp-service-base'>Base</h2>
                  <p>699</p>
                  <p className='plans-price'>

                    <span className='plans-price-black'>$499</span>/month</p>
                  <p>Pay quarterly save $500</p> </div>

              </div>

              <li className="align-perks-right">
                <ul className='tp-subtitle-white'>up to 2 edits/day</ul>
                <ul className='tp-subtitle-white '>3 scripted content ideas / week </ul>
                <ul className='tp-subtitle-white'>engagement management </ul>
                <ul className='tp-subtitle-white'>weekly consulting</ul>
                <button onClick={handleFeatures} className='tp-p-white'>See More Features +</button>
                {showFeatures && <li>
                  <ul className='tp-subtitle-white'>Owners Training</ul>
                  <ul className='tp-subtitle-white'>Best Fit Content Systems</ul>
                  <ul className='tp-subtitle-white'>Account Audit</ul>
                  

                </li>}
              </li>
              <div className='row-center'><button className='tp-btn-lg-yellow-space'>buy now </button>
              </div>
              <div className='row-center'><p className='tp-message-description-white'>14 Day Risk Free Guarentee</p></div>
            </div>

          </div>
          <div className='plans-right'>
            <div className='plans-box-card'>

              <div className='plans-circle'>
                <div className="service-padding">
                  <h2 className='tp-service-base'>Base</h2>
                  <p>699</p>
                  <p className='plans-price'>

                    <span className='plans-price-black'>$699</span>/month</p>
                  <p>Pay quarterly save $500</p> </div>

              </div>

              <li className="align-perks-right">
                <ul className='tp-subtitle-white'>up to 4 edits/day</ul>
                <ul className='tp-subtitle-white'>24 hour turnaround</ul>
                <ul className='tp-subtitle-white '>5 scripted content ideas / week </ul>
                <ul className='tp-subtitle-white'>engagement management </ul>
                <ul className='tp-subtitle-white'>unlimited consulting</ul>
                <button onClick={handleFeatures} className='tp-p-white'>See More Features +</button>
                {showFeatures && <li>
                  <ul className='tp-subtitle-white'>Owners Training</ul>
                  <ul className='tp-subtitle-white'>Best Fit Content Systems</ul>
                  <ul className='tp-subtitle-white'>Account Audit</ul>
                  <ul className='tp-subtitle-white'>Discount Supplementary Accounts </ul>

                </li>}
              </li>
              <div className='row-center'> <Link href={stripe}><button href='/google' className='tp-btn-lg-yellow-space'>Checkout</button></Link> 
              </div>
              <div className='row-center'><p className='tp-message-description-white'>14 Day Risk Free Guarentee</p></div>
            </div>
          </div>
        </div>
        </div>
        
    
    )
}
        export default Pricing