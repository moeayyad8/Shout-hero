import { FooterThree, HeaderThree, Wrapper } from "../layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/common/breadcrumb/breadcrumb";
import Link from "next/link";


const Confirmation = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Payment Confirmed'} />

            <HeaderThree />
            <Breadcrumb />
            <div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
            <div className="top-padding"></div><div className="top-padding"></div><div className="top-padding"></div>
            <h1 className="tp-title-md"> Welcome to the team!</h1>
            <h1 className="tp-title-md"> A team member will reach out to you shortly.  </h1>
            <Link href="/">
                <div className="row-center"><button href='/#' className="tp-btn">Return Home</button></div>
            </Link>
            <div className="row-center"><button href='/#' className="tp-btn">Return Home</button></div>
            <div className="top-padding"> </div><div className="top-padding"></div><div className="top-padding"></div>
            <div className="top-padding"> </div><div className="top-padding"></div><div className="top-padding"></div>

            <FooterThree />


        </Wrapper>
    );
};

export default Confirmation;