import Link from "next/link";
import React, { useState } from "react";
import SingleServiceTwo from "../../common/single-service-2";


const Pricing = () => {

  const [showFeatures, setShowFeatures] = useState(false);
  const handleFeatures = () => {
    setShowFeatures(true)
  }

  const [showMonthly, setShowMonthly] = useState(true);
  const handleMonthly = () => {
    setShowMonthly(true)
    setShowQuarterly(false)
    setShowAnnually(false)
  }

  const [showQuarterly, setShowQuarterly] = useState(false);
  const handleQuarterly = () => {
    setShowQuarterly(true)
    setShowMonthly(false)
    setShowAnnually(false)
  }

  const [showAnnually, setShowAnnually] = useState(false);
  const handleAnnually = () => {
    setShowAnnually(true)
    setShowMonthly(false)
    setShowQuarterly(false)
  }


  return (
    <div>
      <div className="md-padding"></div>
      <h3 className='tp-title-md-blue'> Subscribe to Video Hero Today.</h3>

      <div className="row-center">
        <button onClick={handleMonthly} className="tp-btn"> Monthly </button>
        <button onClick={handleQuarterly} className="tp-btn">Quarterly</button>
        <button onClick={handleAnnually} className="tp-btn">Annually</button>
      </div>

      <div className="row-center">
      {/*Show Monthly */}
      {showMonthly && 
      (
        <div className='plans-box'>
        <div className='plans-left'>
        <SingleServiceTwo name="Base" price="$499" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
        </div>
        <div className='plans-right'>
         <SingleServiceTwo name="Plus" price="$849" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
        </div>
      </div>
      )}
    
      {/*Show Quarterly */}
{showQuarterly &&(
        <div className='plans-box'>
        <div className='plans-left'>
          <SingleServiceTwo name="Base" price="$2499" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
          </div>
          <div className='plans-right'>
           <SingleServiceTwo name="Plus" price="$2849" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
          </div>
      </div>
)}

      {/*Show Annually*/}
      
      {showAnnually && (
     <div className='plans-box'>
     <div className='plans-left'>
       <SingleServiceTwo name="Base" price="$11499" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
       </div>
       <div className='plans-right'>
        <SingleServiceTwo name="Plus" price="$11849" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wMeYx6kL4f11i0eUZ" term="monthly"></SingleServiceTwo>
       </div>
   </div>
      )}
 
    </div>
    </div>



  )
}
export default Pricing