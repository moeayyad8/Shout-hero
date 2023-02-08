import React, { useEffect } from 'react';
import { FooterFive, FooterThree, HeaderThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import FeatureArea from '../../about/feature-area';
import ServicesArea from '../../about/services-area';
import NewsLetter from '../../homes/home-4/news-letter';
import Trustbar from '../../trustbar';
import ContentForm from '../../forms/content-form';
import FaqArea from '../../faq/faq-area';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import HeroSmall from '../smallbusiness/hero-small';
import HeroFsmall from './hero-small';
import ContactUs from '../../forms/contact-form';
import Growf from '../../services/franchise/growf.jsx';
import Delivery from './delivery';

const title = <>Global Brands, Local Reach</>
const subtitle = "Advantages"
const piechart = "../../../assets/img/service/piechart.png"
const smallshop = "../../../assets/img/service/smallshop.png"
const herophone = '/assets/img/service/herophone.png'
const team_img = '../../../assets/img/service/shoutheroteam.png';
const usamap = '../assets/img/service/usamap.png'
const horn_img = "../../../assets/img/logo/hornicon.png"

const Franchise = () => {

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }


  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);


  return (
    <Wrapper>
      <HeaderThree />
      <HeroFsmall />
      <div className='yellow-bg'>
        <div className='md-padding'></div>
        <h1 className='tp-title-md'>Access a team of proven, passionate talent</h1>
        <h2 className='tp-font-p'>Ready to turn your social media into real business results?</h2>
        <div className='center-button'>
          <button className='tp-btn'> Free Social Media Audit  </button>
        </div>
      </div>



      <div className='grey-bg'>
        <div className='top-padding'></div>
        <h4 className='tp-title-md'> Maximize Franchise Success with Cutting-Edge Digital Marketing </h4>
        <p className='tp-font-p'>Unlock the full potential of your franchise with our comprehensive guide to modern digital marketing strategies and tactics. <br></br>At Shout Hero, We help you stay ahead of the competition and achieve your business goals </p>

        <div className='contact1-hero'>
        <div className='right'>
            <div className='center-button'>
              <img src={usamap} alt='' />
              </div>
          </div>
          <div className='left'>
         
            <div className='center-button'><h2 className='tp-title-md'>Launch into new markets</h2>
            </div>
            <div className='center-button'>
              <div className='top-padding'></div>
              <p className='tp-font-p'> Have the confidence to launch into new markets around the country. <br></br>Utilize our team to establish grassroots marketing at the local level <br></br> to support new and exisiting franchises. </p>
            </div>
            <div className='center-button'>
              <button className='tp-btn'> Free Social Media Audit </button>
            </div>

          </div>
     
        </div>


        <div className='contact1-hero'>
          <div className='right'>
            <div className='center-button'><img className='scale2' src={herophone} alt='' />
            </div>
          </div>
          <div className='left'>
            <h2 className="tp-title-md">Streamline marketing efforts </h2>
            <p className='tp-font-p'> Interconnect your franchise marketing efforts for better results with <br></br>our expert tips on coordinating across multiple locations. Helping <br></br> performance at the national and local levels.</p>
            <div className='center-button'>
              <button className='tp-btn'> Free Social Media Audit </button>
            </div>
          </div>
        </div>

        <div className='contact1-hero'>
        <div className='left'>
            <div className='center-button'>
              <img className='scale2' src={smallshop} alt='' />
            </div>
          </div>
          <div className='right'>
            <h2 className='tp-title-md'>Strengthen Franchisee Loyalty</h2>
            <p className='tp-font-p'> Strengthen the relationship between franchisors and franchisees by promoting<br></br> a sense of unity and shared goals. This can lead to increased loyalty<br></br> and collaboration between franchise partners.</p>
            <div className='center-button'>
              <button className='tp-btn'> Free Social Media Audit </button>
            </div>
          </div>
        </div>



        <div className='blue-bg'>
          <div className='md-padding'></div>
          <div className='container'>
            <div className='row'>
              <h3 className='tp-title-md-white'>Speak to a Representative</h3>
              <p className='tp-font-p-white'>Get a response within 24 hours.</p>
              <div className='center-button'>
                <button className='tp-btn-yellow'> Free Social Media Audit </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className='top-padding'></div>
        <h1 className="tp-title-md"> Impactful Digital Marketing Results </h1>
        <p className='tp-font-p'> Marketing services designed to build awareness, reputation- and sales</p>
        <div className='row'>
          <div className='perk1-container'>
            <img className='scale' src={horn_img} alt="" />
            <h3 className='tp-font-black'>1 Billion Impressions</h3>
            <p className='tp-font-pdesc'>Organic brand awareness is our digital marketing specialty. In 2022, we did over 1 billion impressions on a 0$ paid media budget.</p>
          </div>
          <div className='perk1-container'>
            <img className='scale' src={horn_img} alt="" />
            <h3 className='tp-font-black'>Millions in Retail Sales</h3>
            <p className='tp-font-pdesc'>We know the importance of ROI and have helped franchisees have million dollar years. We focus on low cost high upside content. </p>
          </div>
          <div className='perk1-container'>
            <img className='scale' src={horn_img} alt="" />
            <h3 className='tp-font-black'>90% Client Retention</h3>
            <p className='tp-font-pdesc'>Customer satsifaction is our most precious metric. We keep our clients happy, and have earned their loyalty.</p>
          </div>
        </div>
        <div className='center-button'>
          <div className='top-padding'></div>
          <button className='tp-btn-yellow'>Free Social Media Audit</button>
        </div>
      </div>
      {/*
<div className='container'>

    <h2 className='tp-title-md'> Franchise Case Study</h2>
    <p className='tp-font-p'>Get an In-Depth look at our signature organic strategy.</p>
    <div className='center-button'>
    <button className='tp-btn-yellow'>Free Social Media Audit</button>
    </div>
</div>
*/}

      <div className='team-class3'>
        <img src={team_img} alt="" />
      </div>

      <div className='yellow-bg'>
        <div className='md-padding'></div>\

        <h2 className='tp-title-md'> One Agency + All Franchises = Local & National Results </h2>
        <p className='tp-font-p'>  We get clients local marketing results that translate into building national brands</p>
        <div className='top-padding'></div>
        <div className='container'>
        <div className='perk2-container'>
        <h3 className='tp-title-piechart'>#ShoutHero</h3>
        <p className='tp-title-piechart2'>1 Billion Impressions | 140 Videos | 3.6% AVG Engagement Rate </p>
        </div>
       
        </div>
      
        <div className='center-button'>
       
     <img src={piechart} alt=''></img>
        </div>
        <div className='container'>

        <div className='hashtag-la'>
          <div className='md-padding'></div>
          <p className='tp-title-md-white'>#ShoutHeroLA</p>
          <p className='tp-font-p-white'>400 Million Impressions | 47 Videos | 3.2% AVG Engagement Rate </p>
          </div>

          <div className='hashtag-chi'>
          <div className='md-padding'></div>
          <p className='tp-title-md-white'>#ShoutHeroCHI</p>
          <p className='tp-font-p-white'>200 Million Impressions | 28 Videos | 7.2% AVG Engagement Rate </p>
          
          </div>

          <div className='hashtag-phx'>
          <div className='md-padding'></div>
          <p className='tp-title-md-white'>#ShoutHeroPHX</p>
          <p className='tp-font-p-white'>150 Million Impressions | 40 Videos | 8.2% AVG Engagement Rate </p>
          </div>

          <div className='hashtag-cle'>
          <div className='md-padding'></div>
          <p className='tp-title-md-white'>#ShoutHeroCLE</p>
          <p className='tp-font-p-white'>250 Million Impressions | 25 Videos | 8.2% AVG Engagement Rate </p>
          </div>

        </div>
     
        <p className='tp-font-p'>*The hashtags above are a figurative representation of the compound effect of  client results*</p>
        <div className='center-button'>
         
          <button className='tp-btn'>Free Social Media Audit </button>
        </div>
      </div>


      <div className='grey-bg'>
        <div className='container'>
          <div className='top-padding'></div>
          <h2 className='tp-title-md'>Choose how we work together</h2>
          <p className='tp-font-p'>From One Time Consulting to Done-For-You Social Media</p>

          <ul className='parent-grid'>
            <li className='option1'>
              <p className='tp-title-md'>Full Service Managment</p>
            </li>
            <li className='option2'>
              <p className='tp-title-md'>Consulting Session</p>
              <p className='tp-font-p'> Get a push in the right direction </p>
            </li>
            <li className='option3'>
              <p className='tp-title-md'>Starter Campaign</p>
            </li>
            <li className='option4'>
              <p className='tp-title-md'>Partnership</p>
            </li>

          </ul>
        </div>
        <div className='top-padding'></div>
        <h3 className='tp-title-md'> Not sure which option is right for you?</h3>
        <div className='center-button'>
          <button className='tp-btn'> Speak to a Representative</button>

        </div>
      </div>


      <div className='blue-bg'>
        <div className='top-padding'></div>
        <h3 className='tp-title-md-white'>Reach your team at any time.</h3>
        <p className='tp-font-p-white'> We keep in contact through your preferred contact method </p>
        <div className='container'>
          <div className='row'>
            <div className='container-call '>
              <p> Text </p>
            </div>
            <div className='container-call '>
              <p> Call </p>
            </div>
            <div className='container-call '>
              <p> Email </p>
            </div>
          </div>
        </div>


      </div>




      <div className='top-padding'></div>
      <div className='container'>
        <div className='row'>
          <h2></h2>
        </div>

      </div>
      <Trustbar />
      <div className='md-padding'></div>
      <FaqArea />
      <h5>Check Out Our Blog!</h5>
      <FooterThree />
    </Wrapper>
  );
};

export default Franchise;

