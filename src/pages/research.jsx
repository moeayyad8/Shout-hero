import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ResearchMain from "../components/services/Research";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Top Rated Market Research'} />
      <ResearchMain/>
    </Wrapper>
  )
}
