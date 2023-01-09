import { Wrapper } from "../layout";
import SEO from "../components/seo";
import SmallBusinessMain from "../components/services/smallbusiness";
import GOOGLE_PIXEL_2 from "../components/pixels/google/pixel-2";
import TIKTOK_PIXEL_3 from "../components/pixels/tiktok/pixel-3";
import HOTJAR_PIXEL_5 from "../components/pixels/hotjar/pixel-5";

const index = () => {
  return (
    <Wrapper>
      <TIKTOK_PIXEL_3/>
      <HOTJAR_PIXEL_5/>
      <SEO pageTitle={'Video Hero For Small Business'} />
      <SmallBusinessMain/>
    </Wrapper>
  );
};

export default index;