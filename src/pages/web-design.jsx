import { Wrapper } from "../layout";
import SEO from "../components/seo";
import WebDesignMain from "../components/services/webdesign";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Top Rated Web Design'} />
      <WebDesignMain/>
    </Wrapper>
  )
}
