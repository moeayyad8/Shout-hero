import { Wrapper } from "../layout";
import SEO from "../components/seo";
import SocialMain from "../components/services/social";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Job'} />
      <SocialMain/>
    </Wrapper>
  )
}
