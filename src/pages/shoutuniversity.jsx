import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ProductsMain from '../components/shoutuniversity';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shout University'} />
      <ProductsMain/>
    </Wrapper>
  )
}
