 import { Link } from "react-router-dom";

const PortfolioHomeOne = () => {
  return (
    <>
      <section className="portfolio-section-four">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="title-box text-center">
            <h2>Delivering Excellence Across <br />Trading & Supply Solutions</h2>
            <p>We specialize in sourcing, logistics, and custom solutions tailored to hospitality and commercial needs across the globe.</p>
          </div>

          <div className="main-content-box">
            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/portfolio-details">Product Sourcing</Link></h3>
                <ul className="category-list">
                  <li><Link to="/portfolio-details">Hospitality Supplies</Link></li>
                  <li><Link to="/portfolio-details">FMCG & Essentials</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/portfolio-details">
                  <img src="assets/images/icons/icon-34.png" alt="View" />
                </Link>
              </div>
              <div className="image-content">
                {/* <figure className="image"><img src="assets/images/portfolio/portfolio-1.png" alt="Sourcing" /></figure> */}
              </div>
            </div>

            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/portfolio-details">Logistics & Distribution</Link></h3>
                <ul className="category-list">
                  <li><Link to="/portfolio-details">Global Shipping</Link></li>
                  <li><Link to="/portfolio-details">Inventory Management</Link></li>
                  <li><Link to="/portfolio-details">On-time Delivery</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/portfolio-details">
                  <img src="assets/images/icons/icon-34.png" alt="View" />
                </Link>
              </div>
              <div className="image-content">
                {/* <figure className="image"><img src="assets/images/portfolio/portfolio-2.png" alt="Logistics" /></figure> */}
              </div>
            </div>

            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/portfolio-details">Custom Packaging Solutions</Link></h3>
                <ul className="category-list">
                  <li><Link to="/portfolio-details">Private Labeling</Link></li>
                  <li><Link to="/portfolio-details">Brand Consistency</Link></li>
                  <li><Link to="/portfolio-details">Eco-Friendly Options</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/portfolio-details">
                  <img src="assets/images/icons/icon-34.png" alt="View" />
                </Link>
              </div>
              <div className="image-content">
                {/* <figure className="image"><img src="assets/images/portfolio/portfolio-3.png" alt="Packaging" /></figure> */}
              </div>
            </div>

            <div className="portfolio-block-four">
              <div className="text-box">
                <h3><Link to="/portfolio-details">Hospitality Product Range</Link></h3>
                <ul className="category-list">
                  <li><Link to="/portfolio-details">Tableware & Glassware</Link></li>
                  <li><Link to="/portfolio-details">Kitchen Supplies</Link></li>
                </ul>
              </div>
              <div className="link-box">
                <Link to="/portfolio-details">
                  <img src="assets/images/icons/icon-34.png" alt="View" />
                </Link>
              </div>
              <div className="image-content">
                {/* <figure className="image"><img src="assets/images/portfolio/portfolio-4.png" alt="Hospitality Products" /></figure> */}
              </div>
            </div>
          </div>

          <div className="lower-link-box text-center">
            <Link to="/portfolio">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeOne;
