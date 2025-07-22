import { Link } from "react-router-dom";

const PortfolioDetailsArea = ({
  productName,
  category,
  brand,
  description,
  features,
  idealFor,
  images = [],
}) => {
  return (
    <section className="portfolio-details">
      <div className="container">
        <div className="top-box">
          <div className="inner-box">
            <figure className="top-image h-[200px] overflow-hidden">
              <img
                src={images[0]}
                alt={productName}
              style={{ height: "400px", width: "100%", objectFit: "cover" }}

              />
            </figure>

            <div className="lower-info">
              <div className="info-box">
                <div className="single-item">
                  <div className="icon-box">
                    {/* <img   src="assets/images/icons/icon-21.png" alt="Product Icon" /> */}
                  </div>
                  <div className="inner">
                    <h5>Product Name</h5>
                    <span>{productName}</span>
                  </div>
                </div>

                <div className="single-item">
                  <div className="icon-box">
                    {/* <img src="assets/images/icons/icon-21.png" alt="Category Icon" /> */}
                  </div>
                  <div className="inner">
                    <h5>Category</h5>
                    <span>{category}</span>
                  </div>
                </div>

                <div className="single-item">
                  <div className="icon-box">
                    {/* <img src="assets/images/icons/icon-21.png" alt="Brand Icon" /> */}
                  </div>
                  <div className="inner">
                    <h5>Brand</h5>
                    <span>{brand}</span>
                  </div>
                </div>
              </div>

              <div className="btn-box">
                <Link
                  to="#"
                  className="primary-btn one gradient-bg white-color"
                >
                  <span>Download Catalogue</span>
                  <i className="icon-1 gradient-color"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-box">
          <h2>Premium Guest Essentials by {brand}</h2>

          {description?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <h3>Our Guest Essentials Include:</h3>
          <ul className="list">
            {features?.map((item, i) => (
              <li key={i}>
                <i className="icon-57"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3>Ideal For:</h3>
          <ul className="list">
            {idealFor?.map((item, i) => (
              <li key={i}>
                <i className="icon-57"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
 <div className="image-box mt-6">
  <div className="row clearfix flex flex-wrap -mx-2">
    {images?.slice(1).map((img, i) => (
      <div
        key={i}
        className="col-lg-4 col-md-6 col-sm-12 image-column px-2 mb-4"
      >
        <figure className="image h-64 overflow-hidden rounded shadow-md" style={{ height: "350px" }}>
          <img
            src={img}
            alt={`Additional ${productName}`}
            className="w-full h-full object-cover"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </figure>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default PortfolioDetailsArea;
