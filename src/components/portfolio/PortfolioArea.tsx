 import { Link } from "react-router-dom";

const productData = [
  {
    title: "Guest Room Essentials",
    link: "/portfolio-details",
    image: "assets/images/resource/hos.jpg",
    col: "5",
  },
  {
    title: "Restaurant Kitchen Equipment",
    link: "/portfolio-details",
    image: "assets/images/resource/kit.jpg",
    col: "7",
  },
  {
    title: "Hotel Linen & Housekeeping",
    link: "/portfolio-details",
    image: "assets/images/resource/tt.jpg",
    col: "7",
  },
  {
    title: "Chinaware & Glassware",
    link: "/portfolio-details",
    image: "assets/images/resource/www.jpg",
    col: "5",
  },
  {
    title: "Cafeteria Essentials",
    link: "/portfolio-details",
    image: "assets/images/resource/caf.jpg",
    col: "5",
  },
  {
    title: "Cleaning & Hygiene Tools",
    link: "/portfolio-details",
    image: "assets/images/resource/clean.jpg",
    col: "7",
  },
];

const PortfolioArea = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          {productData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-${item.col} col-md-12 col-sm-12 block-column`}
            >
              <div className="portfolio-block-one">
                <div className="text-box">
                  <h3>
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                  <div className="link">
                    <Link to={item.link}>
                      <span>View Details</span>
                      <i className="icon-1"></i>
                    </Link>
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ height: "300px", width: "100%", objectFit: "cover" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;
