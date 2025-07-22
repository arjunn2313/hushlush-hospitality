 
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

 
const categories = [
  {
    name: "Coffee Machines",
    image: "assets/images/resource/cofee-machine.jpg",
    link: "/category/tableware"
  },
  {
    name: "Home Keeping",
    image: "assets/images/resource/housekeeping.jpeg",
    link: "/category/kitchen"
  },
 
  {
    name: "Display Cases",
    image: "assets/images/resource/displaycase.jpg",
    link: "/category/furniture"
  },
    {
    name: "Baking Machine",
    image: "assets/images/resource/baking-5.png",
    link: "/category/cutlery"
  },
  {
    name: "Dish Washer",
    image: "assets/images/resource/dishwasher.jpg",
    link: "/category/glassware"
  },

  // Add more as needed
];



const  ProjectHomeOne = () => {
  return (
    <>
      <section className="portfolio-section-five mt-5">
        <div className="outer-box">
          <div className="main-title text-center">
<h2>Shop by Categories</h2>
<p>
  Explore a wide range of quality essentials—Coffee Machines, Kitchen Tools, and more. <br />
  Browse by category to find exactly what you need for your space.
</p>


          </div>
          <div className="main-content-box">
            <Swiper
              slidesPerView={4}
              spaceBetween={24}
              mousewheel={false}
              speed={1400} 
              watchSlidesProgress={true}
              loop={true}
              autoplay={{
                delay: 5000
              }}
              pagination={{
                el: '.portfolio-pagination',
                clickable: true
              }}
              modules={[Pagination]}
              breakpoints={
                {
                  1920: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  }
                }
              }
              className="portfolio-block-slide">
             {categories.map((cat, index) => (
  <SwiperSlide key={index} className="swiper-slide">
    <div className="portfolio-block-five">
      <figure className="image">
        <img src={cat.image} alt={cat.name} />
      </figure>
      <div className="text-box">
        <Link to={cat.link} className="link">View Products</Link>
        <h3><Link to={cat.link}>{cat.name}</Link></h3>
      </div>
    </div>
  </SwiperSlide>
))}

              <div className="portfolio-pagination"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHomeOne;