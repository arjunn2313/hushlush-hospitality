 
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import ContactArea from "./ContactArea";
import Wrapper from "../../layouts/Wrapper";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderTwo from "../../layouts/headers/HeaderTwo";


const Contact = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderTwo />
        <Breacrumb title="Contact Us" subtitle="Contact Us" />
        <ContactArea />
        {/* <ClientsHomeTwo /> */}
        <CtaHomeFour />
        <FooterFour />
      </div>      
    </Wrapper>
  );
};

export default Contact;