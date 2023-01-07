import { Wrapper } from "../layout";
import SEO from "../components/seo";
import SmallBusinessMain from "../components/services/smallbusiness";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Video Hero For Small Business'} />
      <SmallBusinessMain/>
    </Wrapper>
  );
};

export default index;