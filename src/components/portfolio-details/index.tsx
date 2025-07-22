import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour";
import ProductDetails from "./ProductDetails";

const PortfolioDetails = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderTwo />
        <Breacrumb title="Our Products" subtitle="Hospitality Essentials" />
        <ProductDetails />
      
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default PortfolioDetails;
