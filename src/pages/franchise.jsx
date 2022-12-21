import { Wrapper } from "../layout";
import SEO from "../components/seo";
import FranchiseMain from "../components/services/Franchise";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Franchise Marketing Help'} />
    <FranchiseMain/>
  </Wrapper>
  );
};

export default index;