import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFive from "../../layouts/headers/HeaderFive";
import HeaderTwo from "../../layouts/headers/HeaderTwo";
import Wrapper from "../../layouts/Wrapper";
import CtaHomeFour from "../homes/home-4/CtaHomeFour";
import PortfolioArea from "./PortfolioArea";
import PortfolioSlider from "./PortfolioSlider";

const Portfolio = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper">
        <HeaderTwo />
        <Breacrumb title="Our Products" subtitle="Hospitality Essentials" />
        <PortfolioArea />
        <PortfolioSlider />
        <CtaHomeFour />
        <FooterFour />
      </div>
    </Wrapper>
  );
};

export default Portfolio;
