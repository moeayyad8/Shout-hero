import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ClipsMain from "../components/services/clips";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'The #1 Clips Agency'} />
    <ClipsMain/>
  </Wrapper>
  );
};

export default index;
