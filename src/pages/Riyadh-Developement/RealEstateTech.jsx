import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/realEstateIamge.png";
import BannerButton from "../../Components/BannerBtn/BannerButton";
import { useState } from "react";
import softdev1 from "../../Images/softdev1.svg";
import softdev2 from "../../Images/softdev2.svg";
import softdev3 from "../../Images/softdev3.svg";
import softdev4 from "../../Images/softdev4.svg";
import softdev5 from "../../Images/softdev5.svg";
import softdev6 from "../../Images/softdev6.svg";
import softdev7 from "../../Images/softdev7.svg";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
// import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "Real Estate Platform Strategy & Consultation",
    image: softdev1,
    alt: "Real estate software consultation in Saudi Arabia",
    content: (
      <>
        Our real estate tech consultants in Riyadh help define a scalable
        platform strategy focused on property listing efficiency, client
        engagement, and business ROI.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Property Listing App Development",
    image: softdev2,
    alt: "Property listing app development",
    content: (
      <>
        Develop intuitive property listing apps for residential and commercial
        sectors with features like geolocation, media galleries, and inquiry
        forms.
      </>
    ),
  },
  {
    id: "3",
    title: "Virtual Property Tours & 3D Visualization",
    image: softdev3,
    alt: "Virtual real estate tour development",
    content: (
      <>
        Offer immersive property experiences using 360° virtual tours and 3D
        visualizations integrated directly into your real estate platforms.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Property Recommendation Engine",
    image: softdev4,
    alt: "AI real estate solutions",
    content: (
      <>
        Implement AI algorithms to deliver personalized property suggestions
        based on user behavior, preferences, and search history.
      </>
    ),
  },
  {
    id: "5",
    title: "CRM & Automation for Realtors",
    image: softdev5,
    alt: "Real estate CRM development",
    content: (
      <>
        Streamline realtor workflows through automated lead capture, follow-up
        systems, and integrated CRM tools designed for real estate operations.
      </>
    ),
  },
  {
    id: "6",
    title: "MLS & Third-Party API Integrations",
    image: softdev6,
    alt: "MLS integration for real estate apps",
    content: (
      <>
        Integrate Multiple Listing Services (MLS), payment gateways, and
        location APIs to enrich user experience and property discovery.
      </>
    ),
  },
  {
    id: "7",
    title: "Performance Optimization & Maintenance",
    image: softdev7,
    alt: "Real estate app maintenance",
    content: (
      <>
        Ensure smooth performance of your real estate apps through regular
        updates, bug fixes, speed enhancements, and technical support.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Real Estate Strategy",
    title: "Real Estate Software Strategy",
    desc: "Plan and design effective digital strategies that align with Saudi Arabia’s property market and user demands.",
  },
  {
    img: c12,
    alt: "Property Listing Development",
    title: "Property Listing App Development",
    desc: "Create user-centric apps that make it easy to browse, search, and filter real estate listings with integrated maps and media.",
  },
  {
    img: c13,
    alt: "Virtual Tours",
    title: "Virtual Property Tour Integration",
    desc: "Deliver interactive 3D tours and virtual walkthroughs to boost buyer engagement and streamline decision-making.",
  },
  {
    img: c11,
    alt: "AI Suggestions",
    title: "AI-Powered Property Recommendations",
    desc: "Enhance user experience with AI engines that suggest properties based on behavior, interest, and preferences.",
  },
  {
    img: c12,
    alt: "CRM Automation",
    title: "Realtor CRM & Automation Tools",
    desc: "Improve realtor productivity with automated task flows, lead tracking, and real-time alerts within custom CRMs.",
  },
  {
    img: c13,
    alt: "App Maintenance",
    title: "Real Estate App Optimization",
    desc: "Keep your property apps fast, secure, and up-to-date with continuous performance monitoring and improvements.",
  },
];

const RealEstateTech = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Real Estate Tech Solutions Company in Riyadh, Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies builds custom travel and tourism apps in Saudi Arabia. We offer booking systems, itinerary planning, hotel integration, and travel portal development."
        canonical="https://asvayuktech.com/real-estate-tech-solutions-company-in-riyadh-saudi-arabia"
      />

      <main>
        <section className="banner-en py-5">
          <Container>
            <Row className="align-items-center">
              <div className="col-lg-6">
                <div className="banner_textInfo-en">
                  <h1 style={{ fontSize: "40px", lineHeight: "1.1" }}>
                    <a
                      href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Real Estate Tech Solutions Company in Riyadh, Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> provides cutting-edge
                    real estate technology solutions in Riyadh, Saudi Arabia. We
                    empower real estate agencies and developers with custom
                    digital platforms that enhance property search, improve
                    client engagement, and streamline business operations.
                  </p>

                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg">
                  <img
                    src={banners_39}
                    alt="Real Estate Tech Solutions Company in Riyadh"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Container className="py-5">
          <Row className="align-items-center mb-4 text-center">
            <Col lg={10} className="mx-auto">
              <h1 className="fw-bold">
                Why Choose Our Real Estate Software Development Services in
                Riyadh?
              </h1>
              <p>
                ASVAYUK Technologies delivers innovative real estate app and
                portal development tailored for the fast-evolving property
                sector in Saudi Arabia. Here&#39;s why leading firms trust us:
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative card"
                style={{ borderRadius: "12px", background: "#f9f9f9" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c11}
                      alt="Custom Real Estate App Development Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Bespoke Real Estate Apps Aligned with Business Goals
                    </h6>
                    <p className="mb-0 text-muted">
                      We design and develop user-centric real estate
                      applications tailored to your business requirements,
                      optimizing lead generation, property listings, and
                      customer engagement.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative ms-md-n3 mt-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c12}
                      alt="End-to-End Property App Solutions Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Complete Real Estate App Development Lifecycle
                    </h6>
                    <p className="mb-0 text-muted">
                      From planning and design to deployment and maintenance, we
                      deliver secure and scalable real estate technology
                      solutions that simplify property management and sales.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative mt-md-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c14}
                      alt="Real Estate Technology Consulting Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Strategic Technology Solutions for Real Estate Growth
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze the real estate market landscape in Saudi
                      Arabia to create digital strategies that increase ROI,
                      client satisfaction, and operational efficiency.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative mt-4 card"
                style={{ background: "#f9f9f9", borderRadius: "12px" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c13}
                      alt="Experienced Real Estate App Developers Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Skilled Real Estate Developers & Tech Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our experienced team brings deep technical know-how and
                      real estate industry expertise to deliver digital
                      platforms that drive success in Riyadh&#39;s property market.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Real Estate Software Development Services in Riyadh
          </h1>
          <p className="app__subhead mb-5 fs-5">
            At ASVAYUK Technologies, we specialize in real estate software
            development services tailored for the dynamic property market of
            Riyadh, Saudi Arabia. From smart listing management and client
            portals to CRM integration and workflow automation, our end-to-end
            solutions streamline operations and elevate the customer experience.
            Partner with us to build scalable, future-ready platforms that align
            with your business goals.
          </p>

          <div className="tabSoftDev">
            <Tab.Container
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
            >
              <Row className="align-items-center">
                <Col md={6}>
                  <Nav className="flex-column scroll_list ps-3">
                    {services.map((service, index) => (
                      <Nav.Item key={service.id} className="navItemsSoftDev">
                        <Nav.Link
                          eventKey={service.id}
                          className={`tab-link navLinkSoftDev ${
                            activeKey === service.id ? "current" : ""
                          }`}
                        >
                          <span>
                            <span className="scroll_list_num">{`${String(
                              index + 1
                            ).padStart(2, "0")}.`}</span>{" "}
                            {service.title}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>

                <Col md={6}>
                  <Tab.Content className="p-4">
                    {services.map((service) => (
                      <Tab.Pane key={service.id} eventKey={service.id}>
                        <div className="tab-accordion-header tab-accordion-headerDev mb-3">
                          <Image src={service.image} alt={service.alt} fluid />
                          <h4 className="serv_card_head mt-3 fw-semibold">
                            {service.title}
                          </h4>
                        </div>
                        <div className="tab-accordion-body">
                          <p className="card_para">{service.content}</p>
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>

        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">
                Our Key Real Estate Software Development Services
              </h2>
              <p>
                ASVAYUK Technologies delivers innovative software solutions to
                empower real estate businesses in Riyadh. Whether you need
                custom CRM systems, AI-powered property matching tools, or
                mobile apps for buyers and agents, we have the expertise to
                bring your digital vision to life. Enhance client satisfaction,
                increase efficiency, and gain a competitive edge in the evolving
                Saudi property market.
              </p>
            </div>

            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {serviceData.map((servicedata, i) => (
                <Col lg={4} className="pb-4 mb-3" key={i}>
                  <ServicesCard
                    ServiceCardImg={servicedata.img}
                    altText={servicedata.alt}
                    cardHeading={servicedata.title}
                    cardParaGraph={servicedata.desc}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <div
          className="accelerate-bx bg_new_bx padding_coman"
          style={{
            background: `radial-gradient(
        circle,
        rgba(36, 159, 129, 1) -300%,
        rgba(0, 0, 0, 1) 100%
    )`,
          }}
        >
          <Container>
            <Row className="align-items-center">
              <Col md={10} lg={12} className="pb-4 pb-md-0">
                <div>
                  <h2
                    className="text-uppercase fw-bold"
                    style={{ color: "#2cbe9a" }}
                  >
                    Ready to Build Smart Real Estate Software Solutions?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Partner with ASVAYUK Technologies to create custom real
                    estate platforms that boost property visibility, automate
                    workflows, and elevate client experiences across Riyadh and
                    Saudi Arabia.
                  </p>
                  <Row>
                    <Col lg={6}>
                      <BannerButton btnTitle="Consultation" url="/contact-us" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                WHY REAL ESTATE TECH SOLUTIONS MATTER{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Real estate technology is transforming how developers, agents,
                and buyers interact. With tailored software solutions, your real
                estate business in Riyadh can simplify property listings,
                increase lead conversion, and stay ahead in a competitive
                market.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real Estate App Development Riyadh">
                      Enhances property discovery with smart search and filters
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Property Management Software Saudi Arabia"
                    >
                      Automates listings, scheduling, and document handling
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Real Estate Platform">
                      Delivers personalized property suggestions and alerts
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real Estate CRM Integration">
                      Integrates CRM, maps, payment gateways, and analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Saudi Arabia Property Tech">
                      Drives growth through digital transformation in real
                      estate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3 p-3">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Our Real Estate Software Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we provide scalable{" "}
                    <strong>real estate tech solutions</strong> for developers,
                    agencies, and brokers in Saudi Arabia. Our structured
                    process ensures seamless implementation, market
                    adaptability, and user-friendly interfaces.
                  </p>
                  <p>
                    From virtual tours and lead management systems to secure
                    payments and mobile access, we deliver end-to-end platforms
                    that boost sales and simplify operations.
                  </p>

                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Analysis:</strong> Understand your
                    business model, target users, and tech stack to map a custom
                    strategy.
                  </li>
                  <li>
                    <strong>Design and Prototyping:</strong> Build intuitive
                    UI/UX focused on customer journeys and seamless navigation.
                  </li>
                  <li>
                    <strong>Development and Integration:</strong> Implement
                    property listings, CRM tools, geolocation, and secure
                    payment modules.
                  </li>
                  <li>
                    <strong>Quality Testing:</strong> Ensure cross-device
                    compatibility and performance before final deployment.
                  </li>
                  <li>
                    <strong>Post-Launch Support:</strong> We provide ongoing
                    updates, enhancements, and tech support for sustainable
                    growth.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Real Estate Apps Designed for Performance and Growth
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We build <b>customizable, user-centric real estate platforms</b>{" "}
              that serve property buyers, sellers, and agents in Riyadh and
              beyond. Our applications focus on engagement, seamless
              transactions, and automation to help you lead the digital real
              estate market in Saudi Arabia.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Digitize Your Real Estate Business?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies help you build a powerful real estate
              platform with advanced features like virtual tours, AI property
              matching, and lead nurturing. Whether you&#39;re a developer, broker,
              or agency, we tailor tech-driven solutions that elevate your real
              estate operations in Riyadh, Saudi Arabia.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default RealEstateTech;
