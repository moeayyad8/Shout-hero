import { Wrapper } from "../layout";
import SEO from "../components/seo";
import LocalLaunchMain from "../components/services/LocalLaunch";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'New Business Marketing'} />
    <LocalLaunchMain/>
  </Wrapper>
  );
};

export default index;