import { Wrapper } from "../layout";
import SEO from "../components/seo";
import InfluencerMain from "../components/services/influencer";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Top Rated Influencer Marketing'} />
      <InfluencerMain/>
    </Wrapper>
  )
}
