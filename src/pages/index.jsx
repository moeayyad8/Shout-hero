import { Wrapper } from "../layout";
import HomeMain from '../components/homes/home';
import SEO from "../components/seo";
import HomeThreeMain from '../components/homes/home-3';
import ReviewForm from '../components/forms/review-form';
import GOOGLE_PIXEL_2 from "../components/pixels/google/pixel-2";
import FACEBOOK_PIXEL_1 from "../components/pixels/facebook/pixel-1";
import TIKTOK_PIXEL_3 from "../components/pixels/tiktok/pixel-3";
export default function index() {
  
  return (
    <Wrapper>
      
      <FACEBOOK_PIXEL_1/>
      <TIKTOK_PIXEL_3/>
      <GOOGLE_PIXEL_2/>
     
    <SEO pageTitle={'Home'} />
    <HomeThreeMain />
    <ReviewForm/>
  </Wrapper>
  )
}

