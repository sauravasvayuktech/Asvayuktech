// Imports
import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbShoppingCartSearch } from "react-icons/tb";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
// import Group_558 from "../../Images/Group-558.webp";
// import Group_168 from "../../Images/Group-168.webp";
import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaShopify } from "react-icons/fa6";
import BannerButton from "../../Components/BannerBtn/BannerButton";

const miniCards = [
  {
    label: "Shopify App Customization",
    icon: <GiArtificialIntelligence />,
  },
  {
    label: "Agile E-commerce Development",
    icon: <TbShoppingCartSearch />,
  },
  {
    label: "Top Shopify Developers in Riyadh",
    icon: <FaShopify />,
  },
];

const trustedStats = [
  { number: "1", label: "Boost e-commerce sales and customer engagement." },
  {
    number: "2",
    label: "Streamline order fulfillment and inventory management.",
  },
  { number: "3", label: "Offer seamless mobile shopping experiences." },
  { number: "4", label: "Enable faster checkout and personalized offers." },
];

const services = [
  {
    img: c11,
    alt: "Custom Shopify Mobile Apps in Saudi Arabia",
    title: "Custom Shopify Mobile Apps",
    desc: "We build tailor-made Shopify mobile apps that deliver a seamless shopping experience. Our solutions align with your store's goals, ensuring brand consistency and functional excellence.",
  },
  {
    img: c12,
    alt: "Shopify Android & iOS App Development",
    title: "Shopify Android & iOS App Development",
    desc: "We create native and cross-platform Shopify apps optimized for both Android and iOS. Your users enjoy fast, intuitive navigation and secure purchasing on every device.",
  },
  {
    img: c13,
    alt: "On-Demand Features for Shopify Stores",
    title: "On-Demand Features for Shopify Stores",
    desc: "Add features like real-time delivery tracking, in-app chat, and push notifications to keep your Shopify customers informed and engaged at all times.",
  },
  {
    img: c14,
    alt: "Delivery App Integration with Shopify",
    title: "Delivery App Integration",
    desc: "From real-time delivery tracking to integrated logistics APIs, we build Shopify-compatible delivery apps ideal for food, retail, and B2B services.",
  },
  {
    img: c15,
    alt: "Cross-Platform E-commerce Apps",
    title: "Cross-Platform E-commerce Apps",
    desc: "Expand your reach with cross-platform e-commerce apps that work smoothly on Android and iOS. Perfect for businesses aiming for fast deployment and broad market access.",
  },
];

const experienceData = [
  {
    experienceCardWrapper: "experienceCardWrapper experienceShopifyDev1",
    title: "AI-Powered Recommendations",
    description:
      "Leverage AI to deliver smart product recommendations and personalized shopping experiences in your Shopify mobile app, increasing conversions and loyalty.",
    features: [
      "Personalized Suggestions",
      "Behavioral Insights",
      "Automated Upselling",
    ],
  },
  {
    experienceCardWrapper: "experienceCardWrapper experienceShopifyDev2",
    title: "Advanced Shopify Integrations",
    description:
      "Seamlessly integrate with popular Shopify plugins, payment gateways, inventory tools, and CRM systems to streamline operations across your mobile app and storefront.",
    features: [
      "Secure Payment Integration",
      "CRM & ERP Sync",
      "Inventory Management",
    ],
  },
  {
    experienceCardWrapper: "experienceCardWrapper experienceShopifyDev3",
    title: "High Performance & Speed",
    description:
      "Our apps are optimized for speed and responsiveness, ensuring smooth navigation, faster loading, and excellent usability on all devices.",
    features: [
      "Optimized Load Times",
      "Low Bounce Rate",
      "User-Centric Design",
    ],
  },
];

const ShopifyDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="shopify-development-company-riyadh-saudi-arabia"
        description="Asvayuk Technologies is a top Shopify mobile app development company in Riyadh, Saudi Arabia, building high-performance e-commerce apps tailored to your business."
        canonical="https://asvayuktech.com/shopify-development-company-riyadh-saudi-arabia"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper shopifyDevBg">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  Expert Shopify Mobile App Development
                  <span> in Riyadh</span>, Saudi Arabia
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Asvayuk Technologies specializes in creating high-performance
                  Shopify mobile apps tailored for the Saudi market. Our expert
                  developers in Riyadh deliver scalable, feature-rich solutions
                  for e-commerce businesses looking to expand their digital
                  footprint.
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
                      <div className="titleMini-icon">{card.icon}</div>
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
                Why Your E-commerce Business <br /> Needs a Mobile App
              </h2>
              <p>
                With the rapid shift to mobile commerce, having a mobile app is
                essential for any e-commerce business. A custom Shopify mobile
                app can:
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

        {/* Shopify Dev Advantage */}
        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Why Choose Asvayuk for Shopify Mobile App Development in
                    Riyadh
                  </h3>
                  <p>
                    At Asvayuk Technologies, we build Shopify mobile apps that
                    help your store drive engagement and increase revenue. Our
                    team works closely with you to craft apps that meet business
                    goals and elevate customer experience.
                  </p>
                  <p>
                    <strong>Certified Shopify Experts:</strong> We have a
                    dedicated team of Shopify developers specializing in mobile
                    commerce and backend integrations.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start p-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Shopify App Customization:</strong> Unique features
                    tailored to your brand.
                  </li>
                  <li>
                    <strong>Native & Cross-Platform Solutions:</strong> Smooth
                    experiences on Android and iOS.
                  </li>
                  <li>
                    <strong>Post-Launch Support:</strong> We offer continuous
                    optimization and support.
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
                Our Shopify Development Services
              </h2>
              <p className="mt-3" data-aos="zoom-in-up">
                Whether you need custom Shopify apps, delivery integrations, or
                mobile-first experiences, we’ve got the expertise to deliver
                top-notch solutions.
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

        {/* Experience Cards */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Technologies Powering Our Shopify Apps
              </h2>
              <p className="fs-6" data-aos="zoom-in-up">
                We use cutting-edge technologies to build future-ready Shopify
                mobile applications for your business.
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

export default ShopifyDevelopments;
