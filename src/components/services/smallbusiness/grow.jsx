const callus_img = '../../../assets/img/logo/callus.png';
const review_img = '../../../assets/img/service/servicehero.png';

const grow = () => {
    return(

<div className="container">
<div className='row'>
  <div className="service-container">
  <h2 className='tp-title-md'>What does it take to grow on Tiktok, Reels, and Shorts?</h2>
        
        <div className='perk-container'>
          <img src={callus_img}></img>
          <h3 className='tp-subtitle-md-white-bold'>Consistent Posts</h3>
        </div>
        <div className='perk-container'>
          <img src={callus_img}></img>
          <h3 className='tp-subtitle-md-white-bold'>Platform Expertise</h3>
        </div>
        <div className='perk-container'>
          <img src={callus_img}></img>

          <h3 className='tp-subtitle-md-white-bold'>Brand Positioning</h3>
        </div>


  </div>
   
     
        
        </div>
</div>
    )
}
export default grow
