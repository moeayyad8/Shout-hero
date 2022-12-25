import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ContentMain from "../components/services/content";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'The #1 Clips Agency'} />
      <ContentMain/>
    </Wrapper>
  );
};

export default index;