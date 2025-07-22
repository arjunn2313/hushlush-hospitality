import { Link } from "react-router-dom";

 

const AboutHomeOne = () => {
  return (
    <>
      <section className="about-section-five">
        <div className="outer-box">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="left-content">
                <div className="main-title-two">
                  <span className="sub-title">(Who We Are)</span>
                </div>
                <div className="content-box">
                  <div className="single-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-29.png" alt="Global Network Icon" />
                    </div>
                    <div className="text-box">
                      <h3>Global Trade Network</h3>
                      <p>
                        We connect businesses across continents with reliable supply chains, offering a wide range of quality products and sourcing solutions tailored to industry needs.
                      </p>
                    </div>
                  </div>
                  <div className="single-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-30.png" alt="Integrity Icon" />
                    </div>
                    <div className="text-box">
                      <h3>Integrity & Excellence</h3>
                      <p>
                        With a commitment to transparency, professionalism, and timely delivery, we ensure every partnership is built on trust and long-term value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="right-content">
                <h2>
                  Driving Global Trade <img src="assets/images/icons/icon-31.png" alt="" /> 
                  Powering Industry Growth <img src="assets/images/icons/icon-32.png" alt="" /> 
                  Through Strategic Supply <img src="assets/images/icons/icon-33.png" alt="" />
                </h2>
                <p>
                  At Hush Lush Hospitality, we specialize in bridging markets with quality products and efficient distribution. From FMCG to industrial goods, we serve global clients with speed and precision.
                </p>
                <Link to="/about">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeOne;