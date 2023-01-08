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
                <SingleServiceTwo edits="2" scripts="3" consulting="weekly" name="Base" price="$499" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/8wM3fPcJ912PbWE28j" term="monthly"></SingleServiceTwo>
              </div>
              <div className='plans-right'>
                <SingleServiceTwo edits='4' scripts='5' consulting='unlimited' name="Plus" price="$749" offer="save 10% when you pay quarterly" stripe="https://buy.stripe.com/aEUcQp5gH3aXaSA4go" term="monthly"></SingleServiceTwo>
              </div>
            </div>
          )}

        {/*Show Quarterly */}
        {showQuarterly && (
          <div className='plans-box'>
            <div className='plans-left'>
              <SingleServiceTwo edits="2" scripts="3" consulting="weekly" name="Base" price="$1349" offer="Get 2 Months Free Annually" stripe="https://buy.stripe.com/aEU4jTbF59zl8Ks3co" term="quarterly"></SingleServiceTwo>
            </div>
            <div className='plans-right'>
              <SingleServiceTwo  edits='4' scripts='5' consulting='unlimited' name="Plus" price="$1999" offer="Get 2 Months Free Annually" stripe="https://buy.stripe.com/dR6dUt7oPbHt5yg5kz" term="monthly"></SingleServiceTwo>
            </div>
          </div>
        )}

        {/*Show Annually*/}

        {showAnnually && (
          <div className='plans-box'>
            <div className='plans-left'>
              <div className="perk-container">
              <SingleServiceTwo edits="2" scripts="3" consulting="weekly" name="Base" price="$5249" offer="You are getting the best deal!" stripe="https://buy.stripe.com/dR69Ed5gH7rdaSA8wJ" term="annually"></SingleServiceTwo>

              </div>
            </div>
            <div className='plans-right'>
              <SingleServiceTwo edits='4' scripts='5' consulting='unlimited' name="Plus" price="$11849" offer="You are getting the best deal!" stripe="https://buy.stripe.com/4gweYxaB16n9aSAcN2" term="annually"></SingleServiceTwo>
            </div>
          </div>
        )}

      </div>
    </div>



  )
}
export default Pricing