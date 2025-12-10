import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/apiDevelopmentImage.png";
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
    title: "Custom API Development",
    image: softdev1,
    alt: "Custom API development services in Saudi Arabia",
    content: (
      <>
        Build robust, scalable, and secure APIs tailored to your business
        workflows. We design RESTful and GraphQL APIs optimized for performance,
        documentation, and future integrations.
      </>
    ),
  },
  {
    id: "2",
    title: "Third-Party API Integration",
    image: softdev2,
    content: (
      <>
        Seamlessly integrate with third-party services like payment gateways,
        CRMs, ERPs, and social platforms to streamline operations and improve
        digital capabilities.
      </>
    ),
  },
  {
    id: "3",
    title: "API Gateway & Management",
    image: softdev3,
    content: (
      <>
        Implement secure API gateways and lifecycle management tools to control
        access, usage policies, and versioning for internal and external APIs.
      </>
    ),
  },
  {
    id: "4",
    title: "Authentication & Security",
    image: softdev4,
    content: (
      <>
        Ensure secure API access with OAuth2, JWT, API key encryption, and IP
        whitelisting. We help you meet Saudi data protection laws and
        compliance.
      </>
    ),
  },
  {
    id: "5",
    title: "Mobile App API Services",
    image: softdev5,
    content: (
      <>
        Develop backend APIs for mobile apps that ensure low latency, high
        throughput, and reliable data exchange between users and servers.
      </>
    ),
  },
  {
    id: "6",
    title: "Legacy System Integration",
    image: softdev6,
    content: (
      <>
        Modernize your IT environment by integrating legacy systems with modern
        APIs to enable data flow, automation, and interoperability across
        platforms.
      </>
    ),
  },
  {
    id: "7",
    title: "Real-Time Data Integration",
    image: softdev7,
    content: (
      <>
        Enable real-time syncing of business-critical data between platforms via
        Webhooks, WebSockets, or polling to enhance responsiveness and user
        experience.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "API Development Company Saudi Arabia",
    title: "End-to-End API Development",
    desc: "Design and develop custom APIs that power your digital services—built with security, scalability, and performance at the core.",
  },
  {
    img: c12,
    alt: "Third-Party API Integration Saudi Arabia",
    title: "Third-Party Integrations",
    desc: "Integrate seamlessly with external systems such as payment gateways, logistics APIs, social platforms, and enterprise tools.",
  },
  {
    img: c13,
    alt: "API Gateway & Access Management",
    title: "API Gateway & Management",
    desc: "Secure and manage your APIs with access controls, analytics, throttling, and token-based authentication using industry best practices.",
  },
  {
    img: c11,
    alt: "Secure Authentication for APIs",
    title: "Authentication & Security Layers",
    desc: "Implement robust authentication and authorization standards including OAuth2, JWT, and API key-based access to protect sensitive data.",
  },
  {
    img: c12,
    alt: "Legacy Software Integration",
    title: "Legacy System API Integration",
    desc: "Enable legacy applications to communicate with modern platforms using middleware and API connectors built for compatibility.",
  },
  {
    img: c13,
    alt: "Real-Time Data API",
    title: "Real-Time Data APIs",
    desc: "Build real-time APIs and data pipelines using Webhooks, GraphQL subscriptions, or WebSockets for time-sensitive applications.",
  },
];

const ApiIntegration = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="API Development & Third-Party Integration Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies specializes in secure API development and third-party integration services in Saudi Arabia, enabling businesses to streamline operations through robust, scalable, and compliant API solutions."
        canonical="https://asvayuktech.com/api-development-third-party-integration-saudi-arabia"
      />

      <main>
        {/* Banner Section */}
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
                      API Development & Third-Party Integration Company in Saudi
                      Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> offers robust API
                    Development & Third-Party Integration services tailored to
                    enhance business efficiency and connect your systems with
                    external platforms seamlessly and securely.
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
                    alt="API Development & Third-Party Integration Company in Saudi Arabia"
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
                Why Choose Our API & Integration Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we provide scalable and secure API
                solutions along with seamless third-party integrations,
                empowering your business with automation, efficiency, and modern
                digital capabilities.
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
                      alt="Custom API Development"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Custom API Design & Development
                    </h6>
                    <p className="mb-0 text-muted">
                      We build secure, scalable APIs tailored to your system
                      requirements, ensuring smooth data exchange and process
                      automation.
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
                      alt="Third-Party Integration Services"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Seamless Third-Party Integrations
                    </h6>
                    <p className="mb-0 text-muted">
                      We connect your software with payment gateways, CRMs,
                      social platforms, ERP systems, and more — to unlock
                      enhanced functionality.
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
                      alt="Secure API Authentication"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Secure Authentication & Data Handling
                    </h6>
                    <p className="mb-0 text-muted">
                      We implement OAuth, JWT, and token-based security to
                      protect API endpoints and ensure data integrity across
                      integrations.
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
                      alt="Experienced Integration Experts"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced Integration Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our specialists have hands-on experience with RESTful
                      APIs, GraphQL, and popular SaaS/enterprise system
                      integrations.
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

        {/* Intro Text Section */}
        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            API Integration & Development Services for Saudi Enterprises
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies enables businesses in Saudi Arabia to
            streamline operations and boost productivity through custom API
            development and seamless integration with third-party platforms.
            Partner with us to future-proof your digital infrastructure.
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

        {/* Services */}
        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">
                Our API Development & Integration Services
              </h2>
              <p>
                At ASVAYUK Technologies, we build reliable, secure, and scalable
                APIs and integrate third-party systems to streamline your
                business operations. From custom API development to SaaS and
                enterprise integrations, we help businesses in Saudi Arabia
                connect platforms, automate workflows, and accelerate digital
                transformation.
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="new_font_content new_font_white new_font_center">
                  <h1 className="fw-bold text-white text-center pb-5">
                    <span className="grdnt_clr">Integrate </span>Your Systems
                    Seamlessly
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Accelerate Digital Transformation with Custom APIs
                      </h3>
                    </li>
                    <li>
                      <h3>Boost Operational Efficiency via Automation</h3>
                    </li>
                    <li>
                      <h3>
                        Ensure Data Security and Compliance in Integrations
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                WHY API DEVELOPMENT & INTEGRATION IS ESSENTIAL{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Modern businesses rely on seamless connectivity and automation.
                Effective API development and integration services empower
                organizations to scale, reduce manual tasks, and create agile
                digital ecosystems.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Custom API Development Saudi Arabia">
                      Build RESTful and GraphQL APIs tailored to business needs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Third Party Integration Saudi Arabia">
                      Connect with third-party SaaS, CRM, ERP, and payment
                      systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Secure API Architecture Saudi Arabia">
                      Ensure secure authentication and data handling practices
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="API Testing & Monitoring Saudi Arabia">
                      Test, monitor, and maintain high-performing API
                      environments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Legacy System Modernization Saudi Arabia"
                    >
                      Integrate legacy systems with modern digital platforms
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
                    Our API Development & Integration Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we offer end-to-end{" "}
                    <strong>
                      API development and third-party integration services
                    </strong>{" "}
                    to help businesses in Saudi Arabia unlock new digital
                    capabilities. Whether it&#39;s integrating payment gateways,
                    CRMs, or ERP platforms, our process ensures secure,
                    scalable, and seamless connectivity.
                  </p>
                  <p>
                    Our team follows a structured approach—planning, developing,
                    and integrating APIs that streamline operations, enhance
                    user experience, and accelerate digital transformation
                    across your systems.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Request API Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Analysis & API Strategy:</strong> We
                    begin by understanding your business goals and technical
                    needs to design a scalable API strategy.
                  </li>
                  <li>
                    <strong>Custom API Development:</strong> We build RESTful or
                    GraphQL APIs with secure authentication, proper error
                    handling, and efficient data transfer mechanisms.
                  </li>
                  <li>
                    <strong>Third-Party API Integration:</strong> Seamless
                    integration with external platforms like payment providers,
                    CRM tools, ERP systems, and cloud services.
                  </li>
                  <li>
                    <strong>Testing & Quality Assurance:</strong> Rigorous
                    testing is conducted for functionality, performance,
                    security, and compatibility across systems.
                  </li>
                  <li>
                    <strong>Deployment & Ongoing Support:</strong> APIs are
                    deployed in your production environment with monitoring,
                    documentation, and post-launch support.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Enterprise-Grade API Solutions Designed for Scalability &
              Innovation
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We partner with businesses to build <b>robust and secure APIs</b>{" "}
              that drive efficiency and enable smart integrations. Whether
              you&#39;re developing a custom SaaS solution or integrating with
              third-party services, our client-first approach ensures seamless
              delivery and long-term value.
            </p>
          </Container>
        </section>

        <section className="pb-5 pt-2">
          <Container>
            <h2 className="fw-bold">
              Ready to Accelerate with Powerful APIs & Integrations?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies transform your business with modern API
              architecture and reliable third-party integrations. Contact us
              today to unlock new possibilities through connected systems and
              smart automation.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ApiIntegration;
