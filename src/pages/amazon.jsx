import { Wrapper } from "../layout";
import SEO from "../components/seo";
import AmazonMain from "../components/services/amazon";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Amazon Agency'} />
      <AmazonMain/>
    </Wrapper>
  )
}
