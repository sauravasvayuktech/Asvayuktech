import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
// import { Link } from "react-router-dom";
import { FaArrowRight, FaUserCog } from "react-icons/fa";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
import { MdOnlinePrediction, MdPayment } from "react-icons/md";
import BannerButton from "../../Components/BannerBtn/BannerButton";

const miniCards = [
  {
    label: "Custom Online Store Development",
    icon: <MdOnlinePrediction />,
  },
  {
    label: "Seamless Payment Integration",
    icon: <MdPayment />,
  },
  {
    label: "User-Centric Shopping Experience",
    icon: <FaUserCog />,
  },
];

const trustedStats = [
  { number: "1", label: "Boost your online store visibility and sales." },
  { number: "2", label: "Streamline inventory and order management." },
  {
    number: "3",
    label: "Deliver a fast, secure, and mobile-friendly experience.",
  },
  {
    number: "4",
    label: "Scale effortlessly with cloud-based e-commerce solutions.",
  },
];

const services = [
  {
    img: c11,
    alt: "Custom E-commerce Solutions",
    title: "Custom E-commerce Solutions",
    desc: "We build tailored e-commerce websites that align with your business goals, offering intuitive interfaces, smooth navigation, and optimized checkout experiences for increased conversions.",
  },
  {
    img: c12,
    alt: "Multi-Platform Shopping Integration",
    title: "Multi-Platform Shopping Integration",
    desc: "We help your store reach a wider audience by integrating with major marketplaces like Amazon and Noon, and offer seamless omnichannel experiences across desktop and mobile platforms.",
  },
  {
    img: c13,
    alt: "Performance-Optimized Platforms",
    title: "Performance-Optimized Platforms",
    desc: "Our Riyadh-based e-commerce developers ensure your store is blazing fast, SEO-optimized, and secure, with analytics integration to track and enhance performance continuously.",
  },
];

const experienceData = [
  {
    experienceCardWrapper: 'experienceCardWrapper experienceEcommerce1',
    title: "Requirement Analysis & Planning",
    description:
      "We start with a thorough understanding of your product, market, and competitors. This helps us strategize and document project timelines, technology stacks, and goals clearly.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceEcommerce2',
    title: "Design & Storefront Development",
    description:
      "Our UI/UX experts design clean, responsive storefronts, while our developers create scalable and secure shopping functionalities customized for your target audience.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceEcommerce3',
    title: "Testing, Payment, and Integration",
    description:
      "We conduct extensive testing and integrate essential e-commerce tools like payment gateways, shipping APIs, CRM, and analytics to ensure a flawless shopping experience.",
    features: [],
  },
];

const EcommerceDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="ecommerce-development-company-riyadh-saudi-arabia"
        description="Asvayuk Technologies is your trusted partner in e-commerce development, offering modern, scalable online stores and mobile commerce solutions in Riyadh, Saudi Arabia."
        canonical="https://asvayuktech.com/ecommerce-development-company-riyadh"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper ecommeDev">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  <span>E-commerce</span> Development Riyadh:
                  <br /> Your Commerce Digital Success Key
                </h1>
                <h5>Your Avenue to State-of-the-Art Web Solutions</h5>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Welcome to Asvayuk Technologies, your one-stop partner for
                  cutting-edge e-commerce solutions in Riyadh, Saudi Arabia. In
                  today’s competitive digital market, a powerful and responsive
                  online store is essential for success. Whether you’re
                  launching a new venture or expanding your digital footprint,
                  our expert team is here to turn your vision into reality.
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
                      className={`riyadhMiniTitle-wrapper ${index === 1 ? "afterBorder" : ""}`}
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
                Why Does Your Business Need an E-commerce Platform?
              </h2>
              <p>
                With the rise of digital shopping, having a robust e-commerce
                platform isn’t a luxury—it&#39;s a necessity. A professionally
                developed online store helps businesses:
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

        {/* Why Asvayuk Technologies */}
        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Why Choose Asvayuk Technologies for E-commerce Development?
                  </h3>
                  <p>
                    At Asvayuk Technologies, we blend creativity, technology,
                    and strategic thinking to build online stores that are both
                    functional and visually compelling. Our solutions are built
                    to boost customer retention, optimize workflows, and
                    maximize ROI.
                  </p>
                  <div>
                    <p>
                      <strong>Experienced Developers:</strong> Our Riyadh-based
                      e-commerce team specializes in scalable web platforms,
                      custom features, and seamless third-party integrations.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start mb-3 p-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Tailored Online Stores: </strong> We create
                    solutions that fit your business model, target audience, and
                    future growth goals.
                  </li>
                  <li>
                    <strong>Mobile-First Approach: </strong> Our e-commerce
                    designs are responsive and mobile-ready, ensuring a smooth
                    user experience across all devices.
                  </li>
                  <li>
                    <strong>Secure & Scalable: </strong> We use the latest
                    technologies to ensure your platform is protected, fast, and
                    ready to scale.
                  </li>
                  <div className=" mt-3">
                  <BannerButton btnTitle='Free Consultation' />
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="performance_card pb-5">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold" data-aos="zoom-in-up">
                Our Core E-commerce Services
              </h2>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {services.map((service, i) => (
                <Col lg={4} className="pb-4 mb-3" data-aos="zoom-in" key={i}>
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

        {/* Experience Cards */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Our E-commerce Development Process
              </h2>
              <p className="fs-6" data-aos="zoom-in-up">
                From consultation to post-launch support, our Riyadh-based
                development team ensures a smooth, collaborative, and
                outcome-focused process.
              </p>
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

export default EcommerceDevelopments;
