import { Wrapper } from "../layout";
import SEO from "../components/seo";
import UGCMain from "../components/services/UGC";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'User Generated Content'} />
    <UGCMain/>
  </Wrapper>
  );
};

export default index;