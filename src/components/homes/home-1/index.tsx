import HeroHomeOne from "./HeroHomeOne";
import CounterHomeOne from "./CounterHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import ParallaxImgHomeOne from "./ParallaxImgHomeOne";
import PortfolioHomeOne from "./PortfolioHomeOne";
import WorkingHomeOne from "./WorkingHomeOne";
import ProjectHomeOne from "./ProjectHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";

import CtaHomeOne from "./CtaHomeOne";
import Wrapper from "../../../layouts/Wrapper";

import FooterOne from "../../../layouts/footers/FooterOne";
import HeroHomeThree from "../home-3/HeroHomeThree";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import AboutHomeFour from "../home-4/AboutHomeFour";
import PortfolioHomeFour from "../home-4/PortfolioHomeFour";

const HomeOne = () => {
  return (
    <Wrapper>
      <div className="boxed_wrapper main-home">
        <HeaderTwo />
        <HeroHomeThree />
        <CounterHomeOne />
        <AboutHomeFour />
        <AboutHomeOne />
        <ParallaxImgHomeOne />
        <ProjectHomeOne />
        <PortfolioHomeFour />

        <PortfolioHomeOne />
        <WorkingHomeOne />

        <TestimonialHomeOne />
        {/* <TeamHomeOne />
				<BlogHomeOne /> */}
        <CtaHomeOne />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default HomeOne;
