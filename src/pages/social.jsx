import { Wrapper } from "../layout";
import SEO from "../components/seo";
import SocialMain from "../components/services/social";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'The #1 Clips Agency'} />
      <SocialMain/>
    </Wrapper>
  );
};

export default index;