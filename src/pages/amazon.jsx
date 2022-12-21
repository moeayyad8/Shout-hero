import { Wrapper } from "../layout";
import SEO from "../components/seo";
import AmazonMain from "../components/services/amazon";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Amazon Agency'} />
    <AmazonMain/>
  </Wrapper>
  );
};

export default index;