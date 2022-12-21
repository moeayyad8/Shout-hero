import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ClipsMain from "../components/services/clips";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'The #1 Clips Agency'} />
      <ClipsMain/>
    </Wrapper>
  )
}
