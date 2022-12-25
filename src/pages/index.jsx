import { Wrapper } from "../layout";
import HomeMain from '../components/homes/home';
import SEO from "../components/seo";
import HomeThreeMain from '../components/homes/home-3';
import ReviewForm from '../components/forms/review-form';
import Pixels from '../components/pixels';
export default function index() {
  
  return (
    <Wrapper>
      <Pixels/>
    <SEO pageTitle={'Home'} />
    <HomeThreeMain />
    <ReviewForm/>
  </Wrapper>
  )
}

