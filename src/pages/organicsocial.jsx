import { Wrapper } from "../layout";
import SEO from "../components/seo";
import OrganicSocialMain from "../components/services/organicsocial";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'The #1 Clips Agency'} />
      <OrganicSocialMain/>
    </Wrapper>
  );
};

export default index;