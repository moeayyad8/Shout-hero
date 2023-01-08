const posts_img = '../../../assets/img/service/posts.png';
const platform_img = '../../../assets/img/service/platform.png';
const dart_img = '../../../assets/img/service/dart.png';
const grow = () => {
  return (

    <div className="container">
      <div className='row'>
        <div className="service-container">
          <h2 className='tp-title-md'>What does it take to grow on Tiktok, Reels, and Shorts?</h2>

          <div className='perk-container'>
            <img src={posts_img}></img>
            <h3 className='tp-subtitle-md-white-bold'>Consistent Posts</h3>
          </div>
          <div className='perk-container'>
            <img src={platform_img}></img>
            <h3 className='tp-subtitle-md-white-bold'>Platform Expertise</h3>
          </div>
          <div className='perk-container'>
            <img src={dart_img}></img>

            <h3 className='tp-subtitle-md-white-bold'>Brand Positioning</h3>
          </div>


        </div>



      </div>
    </div>
  )
}
export default grow
