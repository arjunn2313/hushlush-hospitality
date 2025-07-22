import { Link } from "react-router-dom";

const products = [
  {
    name: "Coffee Machine",
    image:
      "assets/images/resource/cofee.jpg",
    link: "/product/coffee-machine",
  },
  {
    name: "Display Showcase",
    image:
      "assets/images/resource/display.jpg",
    link: "/product/display-case",
  },
  {
    name: "Dish Washer",
    image:
      "assets/images/resource/dis.jpg",
    link: "/product/dish-washer",
  },
  {
    name: "Baking Oven",
    image:
      "assets/images/resource/oven.jpg",
    link: "/product/baking-oven",
  },
];

const PortfolioHomeFour = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="title-box">
            <div className="main-title">
              <h3>Our Product Range</h3>
              <h2>
                Explore Our Latest <br />
                <span className="gradient-color">Additions</span>
              </h2>
            </div>
            <p>
              Discover our curated selection of high-quality products designed
              to meet your every need. From innovation to reliability, we bring
              the best right to your fingertips.
            </p>
          </div>

          <div className="row">
            {products.map((product, index) => (
              <div
                key={index}
                className={`col-lg-${
                  index % 2 === 0 ? "5" : "7"
                } col-md-12 col-sm-12 block-column`}
              >
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>
                      <Link to={product.link}>{product.name}</Link>
                    </h3>
                    <div className="link">
                      <Link to={product.link}>
                        <span>View Details</span>
                        <i className="icon-1"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHomeFour;
