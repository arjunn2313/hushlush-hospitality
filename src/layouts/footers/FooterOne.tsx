import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      <footer className="main-footer style-three" id="footer">
        <div className="footer-widget-section">
          <ul className="scroll-text">
            {/* <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li>
            <li>Lumara Web Development Company</li> */}
            <li>Hush Lush Hospitality</li>
            <li>Hush Lush Hospitality</li>
            <li>Hush Lush Hospitality</li>
            <li>Hush Lush Hospitality</li>
            <li>Hush Lush Hospitality</li>
          </ul>
          <div className="outer-box">
            <div className="row">
              {/* Logo and description */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link to="/">
                      <img src="assets/images/hod.png" alt="Hush Lush Logo" />
                    </Link>
                  </figure>
                  <p>
                    We connect global suppliers with regional hospitality
                    businesses, offering efficient sourcing, branding, and
                    logistics support.
                  </p>
                </div>
              </div>

              {/* Company links */}
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h5>Solutions</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list">
                      <li>
                        <Link to="/services#sourcing">Product Sourcing</Link>
                      </li>
                      <li>
                        <Link to="/services#branding">
                          Private Label Branding
                        </Link>
                      </li>
                      <li>
                        <Link to="/services#logistics">
                          Logistics & Delivery
                        </Link>
                      </li>
                      <li>
                        <Link to="/services#distribution">
                          Bulk Distribution
                        </Link>
                      </li>
                      <li>
                        <Link to="/services#custom">Custom Packaging</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h5>Contact Us</h5>
                  </div>
                  <div className="widget-content">
                    <p>
                      Office 205, Business Bay Tower
                      <br />
                      Dubai, UAE
                    </p>
                    <ul className="info-list clearfix">
                      <li>
                        <a href="mailto:info@hushlush.com">info@hushlush.com</a>
                      </li>
                      <li>
                        <a href="tel:+971501234567">+971 50 123 4567</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget social-widget">
                  <div className="widget-title">
                    <h5>Follow Us</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="social-list">
                      <li>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="outer-box">
            <div className="bottom-inner">
              <div className="copyright">
                <p>
                  {new Date().getFullYear()} &copy; Hush Lush Hospitality.
                  All&nbsp;Rights&nbsp;Reserved.
                  {/* credit link can lead to your portfolio or agency site */}
                  &nbsp;Designed&nbsp;&amp;&nbsp;Developed&nbsp;by&nbsp;
                  <Link to="/">HUSh LUSH</Link>
                </p>
              </div>

              <div className="mail-box">
                <a href="mailto:info@hushlush.com">info@hushlush.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
