 
import { Link } from "react-router-dom";
import { useState } from "react";
import VideoPopup from "../../../modals/video-popup";


const HeroHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="hero-section-two text-center">
        <div
  className="pattern"
  style={{
    backgroundImage: `url(assets/images/hero/hero-5.jpg)`,
    filter: 'grayscale(40%)',
  }}
></div>

        <div className="container">
      <div className="content-box">
      <h3>Global Reach, <span className="gradient-color">Trusted Trade</span></h3>
      <h2>Connecting Markets with <span>Reliability & Integrity</span></h2>
      <p className="text-light">Hush Lush Hospitality is a leading general trading company providing quality products and sourcing solutions across various sectors.<br /> We bridge businesses with opportunities globally.</p>
      <div className="btn-box">
        <Link to="/contact" className="primary-btn one gradient-bg white-color">
          <span>Contact Us</span><img src="assets/images/icons/icon-1.png" alt="" />
        </Link>
        <a href="#" className="primary-btn one gradient-bg white-color border-btn">
          <span>Explore Products</span><img src="assets/images/icons/icon-2.png" alt="" />
        </a>
      </div>
      </div>
          {/* <div className="hero-image-box-two">
            <figure className="image"><img src="assets/images/hero/hero-4.png" alt="" /></figure>
            <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-29.png)` }}></div>
            <div className="curve-text">
              <div className="text"><img src="assets/images/icons/curve-text.png" alt="" /></div>
              <div className="video-btn">
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="lightbox-image" data-caption=""><i className="gradient-color icon-25"></i></a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  );
};

export default HeroHomeThree;