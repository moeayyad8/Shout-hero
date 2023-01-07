
function FeatureItem({ title, subtitle }) {
    return (
      <div className="col-xl-3 col-lg-3 col-md-6">
        <div className='acfeature mb-50'>
          <div className={`ac-circle`}></div>
          <div className="acfeature__item">
            <h3 className="tp-subtitle-md-white">
              {title}
            </h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    )
  }
  
  
  
  
const Process = () => {
return(

    <div className='blue-bg-round'>
    <div className='row-center'>
      <h2 className='tp-title-md-white'>Our Proven Process</h2>
    </div>
    <div className='md-padding'></div>
    
    <div className='ac-feature-area'>
      <div className="ac-feature-border-top">
        <div className='container'>
          <div className="row">
            <div className='top-padding'></div>
            <FeatureItem title={'Strategy'}
              subtitle={'We pinpoint a clear social strategy to acheive your goals .'} />
            <FeatureItem title={'Ideation'} color={'2'}
              subtitle={'Spend less time coming up with ideas. Our team has the expertise.'} />
            <FeatureItem title={'Scripting'} color={'3'}
              subtitle={'We help increase efficency and systemize your strategy.'} />
            <FeatureItem title={'Review'} color={'4'}
              subtitle={'Every piece of content matters, we help refine content before it goes out.'} />
    
          </div>
        </div>
      </div>
    </div>
    </div>
)

}

export default Process;