import { Wrapper } from "../layout";
import SEO from "../components/seo";
import SocialMain from "../components/services/social";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Social Main '} />
    <SocialMain/>
  </Wrapper>
  );
};

export default index;