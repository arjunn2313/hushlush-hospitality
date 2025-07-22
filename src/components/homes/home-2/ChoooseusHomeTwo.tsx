 const ChoooseusHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <section className={`chooseus-section ${style_2 ? 'about-chooseus' : ''}`}>
        {!style_2 && (
          <div
            className="pattern"
            style={{ backgroundImage: `url(/assets/images/shape/shape-48.png)` }}
          ></div>
        )}

        <div className="container">
          <div className="title-box d-flex flex-end space-between">
            <div className="main-title">
              <h3>Why Choose Us</h3>
              <h2>
                Reliable Hospitality <br />
                <span className="gradient-color">Supply Partner</span>
              </h2>
            </div>
            <div className="title-text">
              <p>
                From guest room comfort to restaurant performance, we deliver quality, reliability,
                and consistency across every hospitality category.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="chooseus-image">
                <figure className="image">
                  <img src="assets/images/team/about-2.jpg" alt="Why Choose Us" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 block-column">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">End-to-End Solutions</a></h3>
                    <p>From linens to kitchen tools, we supply everything your hotel or café needs under one roof.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Quality & Durability</a></h3>
                    <p>We source premium-grade materials designed to withstand the daily demands of hospitality environments.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Trusted by Top Brands</a></h3>
                    <p>Renowned hotels and restaurant chains rely on us for consistent product quality and timely delivery.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 block-column">
                  <div className="chooseus-block-one">
                    <div className="icon-box"><i className="icon-57"></i></div>
                    <h3><a href="#">Customized Procurement</a></h3>
                    <p>We tailor supply packages to meet your specific operational, aesthetic, and budget needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoooseusHomeTwo;
