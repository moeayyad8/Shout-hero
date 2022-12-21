import { Wrapper } from "../layout";
import SEO from "../components/seo";
import DiscordMain from "../components/services/Discord";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'#1 Discord Managment Agency'} />
    <DiscordMain/>
  </Wrapper>
  );
};

export default index;