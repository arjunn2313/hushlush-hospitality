 import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      <footer className="main-footer">
        <div
          className="pattern"
          style={{ backgroundImage: `url(/assets/images/shape/shape-25.png)` }}
        ></div>
        <div className="container">
          <div className="widget-section">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="small-column">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(/assets/images/shape/shape-26.png)` }}
                  ></div>
                  <figure className="footer-logo">
                    <Link to="/"><img src="assets/images/hod.png" alt="logo" /></Link>
                  </figure>
                  <p>
                    Supplying quality hospitality essentials for hotels, restaurants, and cafeterias —
                    from guestroom amenities to kitchen and dining solutions.
                  </p>
                  <h6>Follow Us:</h6>
                  <ul className="social-links">
                    <li><a href="https://www.facebook.com/share/1GRWMwvh9z/"><i className="icon-15"></i></a></li>
                    <li><a href="https://www.instagram.com/hushlushhospitality?utm_source=qr&igsh=MW50bGp0cjRlOTdzNA=="><i className="icon-18"></i></a></li>
                    <li><a href="#"><i className="icon-16"></i></a></li>
                    <li><a href="#"><i className="icon-17"></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-sm-12 footer-column">
                <div className="big-column">
                  <div className="shape" style={{ backgroundImage: `url(/assets/images/shape/shape-26.png)` }}></div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Company</h3>
                        </div>
                        <ul className="links-list">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/products">Products</Link></li>
                          <li><Link to="/projects">Projects</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget links-widget">
                        <div className="widget-title">
                          <h3>Our Products</h3>
                        </div>
                        <ul className="links-list">
                          <li><Link to="/category/guest-room">Guest Room Items</Link></li>
                          <li><Link to="/category/housekeeping">Housekeeping & Linen</Link></li>
                          <li><Link to="/category/kitchen">Kitchen Equipment</Link></li>
                          <li><Link to="/category/tableware">Chinaware & Glassware</Link></li>
                          <li><Link to="/category/disposables">Cups & Disposables</Link></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 block-column">
                      <div className="footer-widget contact-widget">
                        <div className="widget-title">
                          <h3>Contact Info</h3>
                        </div>
                        <ul className="info-list">
                          <li><i className="icon-19"></i> <span>UAE </span></li>
                          <li><i className="icon-20"></i> <a href="mailto:info@hushlushs.com">info@hushlushs.com</a></li>
                          <li><i className="icon-21"></i> <a href="tel:0542321280">0542321280</a></li>
                          <li><i className="icon-21"></i> <a href="tel:0542321279">0542321279</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content d-flex justify-content-between flex-wrap align-items-center">
              <div className="copyright">
                <p>© {new Date().getFullYear()} Hush Lush Hospitality. All rights reserved.</p>
              </div>
              <ul className="footer-nav">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
