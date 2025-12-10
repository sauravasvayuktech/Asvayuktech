// Imports
import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
// import c14 from "../../Images/c14.webp";
// import c15 from "../../Images/c15.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";
import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
import { PiEscalatorUpFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import BannerButton from "../../Components/BannerBtn/BannerButton";

const miniCards = [
  {
    label: "Smart Delivery App Solutions for Saudi Businesses",
    icon: <TbTruckDelivery />,
  },
  {
    label: "Fast & Scalable App Development Approach",
    icon: <PiEscalatorUpFill />,
  },
  {
    label: "Trusted by Leading Brands in Riyadh & Beyond",
    icon: <FaHandshake />,
  },
];

const trustedStats = [
  {
    number: "1",
    label: "Boost customer satisfaction with real-time delivery tracking.",
  },
  { number: "2", label: "Streamline logistics and reduce operational costs." },
  {
    number: "3",
    label: "Offer flexible on-demand delivery experiences across Riyadh.",
  },
  {
    number: "4",
    label: "Reach wider audiences with cross-platform mobile apps.",
  },
];

const services = [
  {
    img: c11,
    alt: "Grocery & Food Delivery App Development in Saudi Arabia",
    title: "Grocery & Food Delivery App Development in Saudi Arabia",
    desc: "We are aware of our skill that goes into making grocery and food ordering apps. Our master developers in Riyadh know how to develop efficient interfaces to give a hassle-free ordering experience with no intricacy involved. From product discovery through extensive lists to ordering and monitoring delivery, our apps deliver an uninterrupted experience to your business as well as customers. Our apps possess high-order capacity to enable your business to expand conveniently.",
  },
  {
    img: c12,
    alt: "Last-Mile Delivery Software in Riyadh",
    title: "Last-Mile Delivery Software in Riyadh",
    desc: "Last-mile delivery is an important part of the supply chain, and we have Riyadh-based innovative last-mile delivery software solutions. We enhance routes, shorten delivery time, and increase overall efficiency. Companies can gain intelligent value insights into their delivery business by real-time monitoring and advanced analytics, which result in increased customer satisfaction and decreased operating expenses.",
  },
  {
    img: c13,
    alt: "On-Demand Delivery App in Riyadh",
    title: "On-Demand Delivery App in Riyadh",
    desc: "With instant gratification now entering our lives, on-demand delivery apps are more essential than ever. ASVAYUK Technologies comes out in front of everyone else in building on-demand delivery apps offering instant access to different services. Whether food, grocery, or other everyday essentials, our apps enable customers to purchase what they desire, when they desire. Our solutions are scaleable in nature, i.e., organizations can scale and grow as per changing market demands.",
  },
];

const experienceData = [
  {
    experienceCardWrapper: 'experienceCardWrapper experienceCardWrapperDelivery1',
    title: "Local Expertise",
    description:
      "Our Riyadh delivery mobile app developers have deep insight into the Riyadh market. We are experts in managing the Riyadh business challenges and opportunities that are different from elsewhere, thereby enabling us to design solutions uniquely adapted.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceCardWrapperDelivery21',
    title: "Personalized Solutions",
    description:
      "We believe that each business is one-of-a-kind, and that is the reason we provide fully bespoke delivery application solutions. Whether you require a straightforward application for a small enterprise or a sophisticated system for a corporate firm.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceCardWrapperDelivery3',
    title: "Advanced Technology",
    description:
      "Our deployment solutions are constructed using the latest technology and industry standards, utilizing the newest features like secure payment processors, real-time monitoring, and AI analytics to not only launch your application but also remain one step ahead.",
    features: [],
  },
];

const DeliveryAppDevelopment = () => {
  return (
    <>
      <Meta_Component
        title="delivery-app-development-company-riyadh-saudi-arabia"
        description="Revolving Delivery Solutions with ASVAYUK Technologies"
        canonical="https://asvayuktech.com/delivery-app-development-company-riyadh-saudi-arabia"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper deliveryDev">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  <span>Delivery Application</span> Development
                  <br /> in Riyadh, Saudi Arabia
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Welcome to ASVAYUK Technologies, your one-stop-shop for
                  Riyadh&#39;s state-of-the-art delivery app development. With the
                  current speedy life, on-demand delivery is the order of the
                  day. Grocery shopping, food, or other daily essentials, all
                  customers look for fast and convenient delivery. ASVAYUK
                  Technologies specializes in creating scalable and
                  state-of-the-art delivery app solutions designed especially
                  for the specific requirements of Riyadh-based businesses and
                  Saudi Arabia in general.
                </p>
              <BannerButton
                  btnTitle="Get In Touch"
                  blockChainClass="riyadhBtn"
                  icon={<div className="riyadhBtn-icons">
                    <FaArrowRight />
                  </div>}
                />
              </div>

              <Row className="riyadhRowMini-wrapper">
                {miniCards.map((card, index) => (
                  <Col className="mb-3" lg={4} key={index}>
                    <div
                      className={`riyadhMiniTitle-wrapper ${index === 1 ? "afterBorder" : ""
                        }`}
                      data-aos="fade-up"
                    >
                      <div className="titleMini-icon">
                        {card.icon}
                      </div>
                      <div className="titleMini-text">
                        <small>{card.label}</small>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        {/* Trusted Section */}
        <section className="trusted-wrapper">
          <Container>
            <div className="trustedContent-wrapper">
              <h2 className="mb-4" data-aos="zoom-in-up">
                Why Your Delivery Business in Riyadh in Delivery Application
                Development
              </h2>
              <p>
                In today’s fast-paced digital economy, a mobile app is essential
                for any delivery business aiming to compete and grow. A
                custom-built delivery app helps you streamline operations,
                improve customer satisfaction, and scale efficiently in the
                Riyadh market.
              </p>
              <Row className="trustedContent-Row">
                {trustedStats.map((item, idx) => (
                  <Col className="mb-3" lg={3} key={idx}>
                    <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
                      <div className="trustedDiv-first">
                        <span>{item.number}</span>
                      </div>
                      <div className="trustedDiv-second">
                        <h5>{item.label}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Why ASVAYUK Technologies is Your Trusted Partner for
                    Delivery Application Development in Riyadh
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we understand that each delivery
                    business has its own set of challenges and goals. Our
                    Riyadh-focused development approach ensures your app is
                    built for the local market, fully customized, and ready to
                    scale.
                  </p>
                  <div>
                    <p>
                      <strong>
                        Expert Delivery Application Developers in Saudi Arabia:
                      </strong>{" "}
                      Our skilled team of Android & iOS developers specializes
                      in building robust native and cross-platform delivery
                      applications, tailored for food, grocery, logistics, and
                      on-demand businesses.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start mb-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Custom Delivery Application Development:</strong> We
                    craft scalable and secure delivery apps customized for your
                    operational workflows, whether you&#39;re a startup or an
                    enterprise.
                  </li>
                  <li>
                    <strong>Cross-Platform Solutions:</strong> We develop
                    feature-rich apps that run smoothly on both Android and iOS,
                    reducing cost and time-to-market.
                  </li>
                  <li>
                    <strong>On-Demand Delivery Features:</strong> We integrate
                    essential modules like real-time tracking, route
                    optimization, order management, and secure payment systems.
                  </li>
                </ol>
                <div className=" mt-3">
                   <BannerButton btnTitle='Free Consultation' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="performance_card pb-5">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold" data-aos="zoom-in-up">
                Our Delivery App Development Experience
              </h2>
              <p className="mt-3" data-aos="zoom-in-up">
                ASVAYUK Technologies specializes in creating scalable and
                state-of-the-art delivery app solutions designed especially for
                the specific requirements of Riyadh-based businesses and Saudi
                Arabia in general.
              </p>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {services.map((service, i) => (
                <Col lg={4} className="pb-4" data-aos="zoom-in" key={i}>
                  <ServicesCard
                    ServiceCardImg={service.img}
                    altText={service.alt}
                    cardHeading={service.title}
                    cardParaGraph={service.desc}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* WooCommerce Highlight */}
        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2 data-aos="zoom-in-up">Our Development Process</h2>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block my-5">
                  <img
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="..."
                    data-aos="zoom-in"
                    style={{ filter: "invert(1)" }}
                  />
                  <img
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="..."
                    data-aos="zoom-in"
                    style={{ filter: "invert(1)" }}
                  />
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center pt-5 mt-5 overflow-x-hidden">
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Initial Consultation & Business Analysis</h6>
                  <p className="mb-0 fw-semibold text-white">
                    We start by analyzing your delivery business model and
                    defining the app goals that best suit the Riyadh market.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>User-Centric Design & Prototyping</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Our team crafts clean, functional UI/UX prototypes tailored
                    for smooth user journeys, aligned with your brand identity.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Robust Development & Backend Integration</h6>
                  <p className="mb-0 fw-semibold text-white">
                    We build scalable delivery apps and integrate essential
                    features like live tracking, real-time notifications, and
                    payment gateways.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Comprehensive Testing & QA</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Each app undergoes rigorous testing to ensure optimal
                    performance, security, and responsiveness across all
                    devices.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Launch, Deployment & Ongoing Support</h6>
                  <p className="mb-0 fw-semibold text-white">
                    We launch your app on app stores and provide continuous
                    support to keep it running smoothly and securely.
                  </p>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* Experience Cards */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Why Choose ASVAYUK Technologies?
              </h2>
              <Row className="experienceWrapper-Row">
                {experienceData.map((data, index) => (
                  <ExperienceCard
                    key={index}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    features={data.features}
                    experienceCardWrapper={data.experienceCardWrapper}
                  />
                ))}
              </Row>
              <BannerButton
                  btnTitle="Get In Touch"
                  blockChainClass="riyadhBtn text-white"
                  icon={<div className="riyadhBtn-icons">
                    <FaArrowRight />
                  </div>}
                />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default DeliveryAppDevelopment;
