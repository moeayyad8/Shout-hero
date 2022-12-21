import { Wrapper } from "../layout";
import SEO from "../components/seo";
import LocalLaunchMain from "../components/services/LocalLaunch";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'New Business Marketing'} />
      <LocalLaunchMain/>
    </Wrapper>
  )
}
