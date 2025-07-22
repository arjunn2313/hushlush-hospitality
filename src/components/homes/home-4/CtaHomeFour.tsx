import { Link } from "react-router-dom";


const CtaHomeFour = () => {
  return (
    <>
      <section className="cta-section">
        <div className="pattern" style={{ backgroundImage: `url(/assets/images/shape/shape-24.png)` }}></div>
        <div className="container">
          <div className="cta-content">
            <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-22.png)` }}></div>
            <figure className="image"><img src="assets/images/icons/loud-1.png" alt="" /></figure>
             <h3>Your Trusted Hospitality Partner</h3>
            <h2>Let's Elevate Your Space</h2>
          <p>
              From premium guest room items to high-grade kitchenware, <br />
              we supply everything your hotel, restaurant, or cafeteria needs.
            </p>
            <div className="btn-box">
              <Link to="/contact" className="primary-btn one gradient-bg white-color"><span>Let’s Talk</span><i className="icon-1 gradient-color"></i></Link>
              {/* <Link to="/contact" className="primary-btn one gradient-bg white-color border-btn"><span>Book Now</span><i className="icon-1 gradient-color"></i></Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaHomeFour;