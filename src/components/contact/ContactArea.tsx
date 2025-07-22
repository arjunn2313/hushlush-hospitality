 "use client";

const ContactArea = () => {
  return (
    <>
      <section className="contact-section-two padding_top_80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-content-two">
                <div className="main-title">
                  <h3>Contact Us</h3>
                  <h2>Let’s plan your <br /><span className="gradient-color">Luxury Experience</span></h2>
                </div>
                <div className="inner-box">
                  <div className="single-item">
                    <div className="icon-box"><i className="icon-55"></i></div>
                    <h3>Say Hello</h3>
                    <p>
                      <a href="mailto:info@hushlushevents.com">info@hushlushevents.com</a><br />
                      <a href="tel:+911234567890">+91 12345 67890</a>
                    </p>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><i className="icon-56"></i></div>
                    <h3>Our Location</h3>
                    <p>Hush Lush Hospitality<br />UAE</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="contact-form-box">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Name*</label>
                        <input type="text" name="name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Email*</label>
                        <input type="email" name="email" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message*</label>
                        <textarea name="Message" placeholder="Tell us how we can assist you..."></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <button type="submit" className="primary-btn one gradient-bg white-color">Send Inquiry</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
