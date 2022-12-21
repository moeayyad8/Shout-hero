import { Wrapper } from "../layout";
import SEO from "../components/seo";
import WebDesignMain from "../components/services/webdesign";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Top Rated Web Design'} />
    <WebDesignMain/>
  </Wrapper>
  );
};

export default index;