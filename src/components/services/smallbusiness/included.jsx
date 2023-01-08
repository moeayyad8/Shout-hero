import React from 'react';

const manager_img = '../../../assets/img/service/manager.png'; 
const editor_img = "../../../assets/img/service/editor.png"
const director_img = "../.././/assets/img/service/director.png"

const Included = () => {
    return (
<div className='container'>
    <div className='row'>
    <h2 className='tp-title-md'> Included in Video Hero</h2>
    <div className='service-container'>
  <div className='perk-container'>
    <img src={manager_img}></img>
    <h3 className='tp-title-white-center'>Personal Video Editor</h3>
    <p>*Makes your content more watchable!*</p>
  </div>
  <div className='perk-container'>
  <img src={editor_img}></img>
    <h3 className='tp-title-white-center'>Personal Community Manager </h3>
    <p>*Keeps the community happy!*</p>
  </div>
  <div className='perk-container'>
  <img src={director_img}></img>
    <h3 className='tp-title-white-center'>Personal Creative Director </h3>
    <p>*Content ideas, trends, & opportunites*</p>
  </div>
</div>



    </div>


</div>

    )
}
export default Included;