"use client";
import { useEffect, useRef } from "react";
import CircleType from "circletype";
import { Link } from "react-router-dom";

const AboutHomeFour = () => {
  const curvedTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curvedTextRef.current) {
      new CircleType(curvedTextRef.current)
        .dir(1)
        .radius(70)
        .forceHeight(true)
        .forceWidth(true);
    }
  }, []);

  return (
    <>
      <section className="about-section mt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
           <div className="about-content">
  <div className="main-title">
    <h3>About Us</h3>
    <h2>Cornerstone of <span className="gradient-color color-one">Hospitality</span> <span className="gradient-color color-two">Solutions</span></h2>
  </div>
  <div className="about-text">
    <p>Established as a trusted name in the hospitality industry, we have been setting new standards in quality, reliability, and innovation. With years of experience and a deep understanding of the market, Royal Hospitality Supplies is proud to be a preferred partner for premium hospitality solutions in Qatar—and now expanding into the UAE.</p>
    <p>Our journey is driven by a commitment to excellence and a vision to lead the region in delivering top-tier products and services tailored to the evolving needs of our clients.</p>
  </div>
  <div className="btn-box">
    <Link to="/about" className="primary-btn one gradient-bg white-color border-btn">
      <span>Explore More</span>
      <i className="icon-1 gradient-color"></i>
    </Link>
  </div>
</div>

            </div>
            <div className="col-lg-6 col-md-12 col-md-12 image-column">
              <div className="about-image-box">
                <div className="rotate-text-box">
                  <div
                    className="shape-1"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-4.png)`,
                    }}
                  ></div>
                  <div
                    className="shape-2"
                    style={{
                      backgroundImage: `url(/assets/images/shape/shape-5.png)`,
                    }}
                  ></div>
                  <h2>5</h2>
                  <span ref={curvedTextRef} className="curved-text">
                    Years Of Experience
                  </span>
                </div>
                <div className="about-image">
                  <figure className="image image-1">
                    <img src="assets/images/resource/about-10.png" alt="" />
                  </figure>
                  <figure className="image image-2">
                    <img src="assets/images/resource/about-13.png" alt="" />
                  </figure>
                  <figure className="image image-3">
                    <img src="assets/images/resource/about-15.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHomeFour;
