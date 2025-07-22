import { Link } from "react-router-dom";

const WorkingHomeOne = () => {
  return (
    <>
      <section className="working-section-two">
        <div className="outer-box">
          <div className="main-title-two">
            <span className="sub-title">(Discover Our Process)</span>
            <h2>How We Work</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>01</h2>
                <h3><Link to="/">Requirement <br />Analysis</Link></h3>
                <p>We understand your business needs, market goals, and product expectations to tailor sourcing strategies.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>02</h2>
                <h3><Link to="/">Sourcing & <br />Procurement</Link></h3>
                <p>We identify and connect with trusted manufacturers and suppliers to secure the best quality at optimal cost.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>03</h2>
                <h3><Link to="/">Logistics & <br />Delivery</Link></h3>
                <p>Our logistics partners ensure smooth transportation, customs clearance, and on-time delivery across regions.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 block-column">
              <div className="working-block-two">
                <div className="shape-box" style={{ backgroundImage: `url(/assets/images/shape/shape-67.png)` }}></div>
                <h2>04</h2>
                <h3><Link to="/">After-Sales <br />Support</Link></h3>
                <p>We ensure ongoing client support, feedback collection, and help resolve any operational challenges post-delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkingHomeOne;
