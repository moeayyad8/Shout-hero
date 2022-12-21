import { Wrapper } from "../layout";
import HomeMain from '../components/homes/home';
import SEO from "../components/seo";
import HomeThreeMain from '../components/homes/home-3';

export default function index() {
  
  return (
    <Wrapper>
    <SEO pageTitle={'Home'} />
    <HomeThreeMain />
  </Wrapper>
  )
}
