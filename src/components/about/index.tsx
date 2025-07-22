import AboutArea from "./AboutArea";
import VideoAbout from "./VideoAbout"; 
import CtaHomeFour from "../homes/home-4/CtaHomeFour"; 
import TeamHomeFour from "../homes/home-4/TeamHomeFour";
import BrandsHomeTwo from "../homes/home-2/BrandsHomeTwo";
import IntroHomeFour from "../homes/home-4/IntroHomeFour";
import ClientsHomeTwo from "../homes/home-2/ClientsHomeTwo";
import ChoooseusHomeTwo from "../homes/home-2/ChoooseusHomeTwo";
import Wrapper from "../../layouts/Wrapper";
import Breacrumb from "../../common/Breacrumb";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderTwo from "../../layouts/headers/HeaderTwo";

const About = () => {
	return (
		<Wrapper>
			<div className="boxed_wrapper">
				<HeaderTwo />
				<Breacrumb title="About Our Company" subtitle="Committed to Excellence and Innovation" />
				<AboutArea />
				<IntroHomeFour style_2={true} />
				{/* <ClientsHomeTwo style_2={true} /> */}
				<ChoooseusHomeTwo style_2={true} />
				<VideoAbout />
				<BrandsHomeTwo style_2={true} />
				{/* <TeamHomeFour /> */}
				<CtaHomeFour />
				<FooterFour />
			</div>
		</Wrapper>
	);
};

export default About;
