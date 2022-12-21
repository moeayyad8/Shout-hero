import { Wrapper } from "../layout";
import SEO from "../components/seo";
import InfluencerMain from "../components/services/influencer";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Top Rated Influencer Marketing'} />
      <InfluencerMain/>
    </Wrapper>
  );
};

export default index;