"use client";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const productData = [
  {
    // title: "Guest Room Amenities",
    link: "/products/guest-room-items",
    image: "/assets/images/portfolio/1.jpg",
  },
  {
    // title: "Kitchen Equipment",
    link: "/products/kitchen-equipment",
    image: "/assets/images/portfolio/2.jpg",
  },
  {
    // title: "Housekeeping Trolleys",
    link: "/products/housekeeping",
    image: "/assets/images/portfolio/3.jpg",
  },
  {
    // title: "Chinaware & Glassware",
    link: "/products/chinaware",
    image: "/assets/images/portfolio/4.jpg",
  },
  {
    // title: "Chinaware & Glassware",
    link: "/products/chinaware",
    image: "/assets/images/portfolio/5.jpg",
  },
];

const ProductSlider = () => {
  return (
    <section className="service-section product-service">
      <div className="container">
        <div className="small-title">Explore Our Hospitality Products:</div>
        <div className="main-content">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            mousewheel={false}
            speed={1400}
            watchSlidesProgress={true}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: ".prev-btn",
              prevEl: ".next-btn",
            }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              1920: { slidesPerView: 4, spaceBetween: 30 },
              1400: { slidesPerView: 4, spaceBetween: 30 },
              900: { slidesPerView: 3, spaceBetween: 30 },
              700: { slidesPerView: 2, spaceBetween: 30 },
              0: { slidesPerView: 1, spaceBetween: 30 },
            }}
            className="product-block-slide"
          >
            {productData.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-block-one">
                  <div className="text-box">
                    <h3>
                      <Link to={product.link}>{product.title}</Link>
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
                      <img src={product.image} alt={product.title} />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper-nav-btn">
          <button className="prev-btn"><i className="icon-51"></i></button>
          <button className="next-btn"><i className="icon-52"></i></button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
