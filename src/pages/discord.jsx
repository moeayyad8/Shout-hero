import { Wrapper } from "../layout";
import SEO from "../components/seo";
import DiscordMain from "../components/services/Discord";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'#1 Discord Managment Agency'} />
      <DiscordMain/>
    </Wrapper>
  )
}
