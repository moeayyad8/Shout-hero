import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PaidAdMain from "../components/services/paid-ads";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'The #1 Clips Agency'} />
      <PaidAdMain/>
    </Wrapper>
  );
};

export default index;