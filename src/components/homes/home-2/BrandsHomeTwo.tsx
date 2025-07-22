import Count from "../../../common/Count";

 const counter_data = [
  {
    symbol: "+",
    count: 5,
    title: `Years of<br />Trusted Service`,
  },
  {
    symbol: "+",
    count: 100,
    title: `Hospitality Projects<br />Delivered`,
  },
  {
    symbol: "+",
    count: 80,
    title: `Happy Clients<br />Worldwide`,
  },
];

const BrandsHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <section className={`brands-section ${style_2 ? "about-brands" : ""}`}>
        <div
          className="pattern"
          style={{
            backgroundImage: `url(/assets/images/shape/shape-${
              style_2 ? "57" : "46"
            }.png)`,
          }}
        ></div>
        <div className="container">
          <div className="main-title text-center">
            <h2>
              Elevating Hospitality Spaces <br />
              <span className="gradient-color">With Trusted Essentials</span>
            </h2>
          </div>
          <div className="brands-content">
            <div className="text-box">
              <p>
                We are a comprehensive hospitality supply partner delivering
                high-quality products to hotels, restaurants, and cafeterias.
                From guest room linen and cleaning trolleys to kitchen equipment
                and elegant tableware — we bring function and finesse to every
                corner of your space.
              </p>
              <p>
                Our commitment to quality, timely delivery, and product variety
                makes us a go-to supplier for premium hospitality essentials
                across the industry.
              </p>
              <div className="btn-box">
                <a
                  href="/about"
                  className="primary-btn one gradient-bg white-color border-btn"
                >
                  Know About Us
                </a>
              </div>
            </div>
            <div className="fact-content">
              {counter_data.map((item, i) => (
                <div key={i} className="single-item">
                  <div className="count-outer count-box">
                    <span className="odometer" data-count="13">
                      <Count number={item.count} text={item.symbol} />
                    </span>
                  </div>
                  <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsHomeTwo;
