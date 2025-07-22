import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-section-three">
        <div className="pattern-box" style={{ backgroundImage: `url(/assets/images/shape/shape-66.png)` }}></div>
        <div className="outer-box">
          <div className="main-title-two text-center">
            <span className="sub-title">(What Clients Say?)</span>
            <h2>Our Testimonials</h2>
          </div>
          <div className="image-layer">
            <figure className="image-1"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
            <figure className="image-2"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            mousewheel={false}
            speed={1400}
            watchSlidesProgress={true}
            loop={true}
            autoplay={{
              delay: 5000
            }}
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true
            }}
            navigation={{
              nextEl: '.testimonial-next-btn',
              prevEl: '.testimonial-prev-btn',
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 30 },
              700: { slidesPerView: 1, spaceBetween: 30 },
              900: { slidesPerView: 1, spaceBetween: 30 },
              1400: { slidesPerView: 1, spaceBetween: 30 },
              1920: { slidesPerView: 1, spaceBetween: 30 }
            }}
            className="testimonial-block-slide-two"
          >

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon">
                  <img src="assets/images/icons/icon-35.png" alt="" />
                </div>
                <p>Hush Lush has been an incredible partner in sourcing high-quality hospitality supplies. Their reliability and speed have made them an integral part of our operations.</p>
                <div className="author-box">
                  <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                  <div className="author-text">
                    <h5>Maria Fernandes</h5>
                    <span className="designation">Procurement Manager <br />Hilton Doha</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon">
                  <img src="assets/images/icons/icon-35.png" alt="" />
                </div>
                <p>Thanks to Hush Lush, we’ve streamlined our product sourcing and improved our brand image. They go beyond logistics — they understand our goals.</p>
                <div className="author-box">
                  <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                  <div className="author-text">
                    <h5>Ravi K. Malhotra</h5>
                    <span className="designation">Founder <br />Global Cater & Serve</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="testimonial-block">
                <div className="quote-icon">
                  <img src="assets/images/icons/icon-35.png" alt="" />
                </div>
                <p>We rely on Hush Lush for consistent delivery and product quality across multiple markets. Their team is professional, responsive, and solution-driven.</p>
                <div className="author-box">
                  <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.png" alt="" /></figure>
                  <div className="author-text">
                    <h5>Elena Dimitrova</h5>
                    <span className="designation">Operations Lead <br />Emaar Hospitality Group</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-nav">
              <div className="testimonial-prev-btn nav-btn"><img style={{ cursor: "pointer" }} src="assets/images/icons/icon-36.png" alt="" /></div>
              <div className="testimonial-next-btn nav-btn"><img style={{ cursor: "pointer" }} src="assets/images/icons/icon-37.png" alt="" /></div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialHomeOne;
