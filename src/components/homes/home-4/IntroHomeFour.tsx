const IntroHomeFour = ({ style_2 }: any) => {
  return (
    <>
      <section className={`intro-section ${style_2 ? 'about-intro' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">Supplying 1300+ Hospitality Projects</a></h3>
                <p>We proudly serve luxury hotels, boutique stays, and large chains with guestroom amenities, linens, and housekeeping essentials across the globe.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">Trusted by 750+ Restaurants & Cafes</a></h3>
                <p>From fine dining kitchens to vibrant cafeterias, we equip culinary spaces with premium kitchen tools, glassware, chinaware, and more.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 intro-block">
              <div className="intro-block-one">
                <div className="decore"></div>
                <h3><a href="#">Global Presence in 11+ Countries</a></h3>
                <p>Our reach spans across continents, ensuring timely delivery and support for hospitality brands wherever they are located.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroHomeFour;
