import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/analyticsImage.png";
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
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "User Research & Persona Development",
    image: softdev1,
    alt: "User research and persona development services in Saudi Arabia",
    content: (
      <>
        Conduct in-depth user research to understand your target audience and
        develop detailed personas that guide effective UI/UX design decisions.
      </>
    ),
  },
  {
    id: "2",
    title: "Wireframing & Prototyping",
    image: softdev2,
    alt: "Wireframing and prototyping services in Saudi Arabia",
    content: (
      <>
        Create interactive wireframes and prototypes to visualize user flows and
        design concepts before development, ensuring a seamless user experience.
      </>
    ),
  },
  {
    id: "3",
    title: "User Interface Design",
    image: softdev3,
    alt: "User interface design services in Saudi Arabia",
    content: (
      <>
        Design visually stunning, brand-aligned user interfaces that provide
        intuitive navigation and enhance user engagement.
      </>
    ),
  },
  {
    id: "4",
    title: "Usability Testing & UX Optimization",
    image: softdev4,
    alt: "Usability testing and UX optimization services in Saudi Arabia",
    content: (
      <>
        Perform usability testing and iterative UX improvements to ensure your
        product is easy to use, accessible, and meets user expectations.
      </>
    ),
  },
  {
    id: "5",
    title: "Product Design Strategy & Consultancy",
    image: softdev5,
    alt: "Product design strategy and consultancy in Saudi Arabia",
    content: (
      <>
        Provide expert product design consultancy to align user experience with
        business goals and maximize product success.
      </>
    ),
  },
  {
    id: "6",
    title: "Interaction & Visual Design",
    image: softdev6,
    alt: "Interaction and visual design services in Saudi Arabia",
    content: (
      <>
        Craft engaging interaction patterns and cohesive visual designs that
        captivate users and strengthen brand identity.
      </>
    ),
  },
  {
    id: "7",
    title: "UI/UX Design System Development",
    image: softdev7,
    alt: "UI/UX design system development services in Saudi Arabia",
    content: (
      <>
        Develop scalable and consistent design systems to streamline UI/UX
        design and maintain brand consistency across digital products.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "User Research & Persona Development",
    title: "User Research & Persona Development",
    desc: "Gain deep insights into your users through research methodologies and persona creation to drive user-centered design.",
  },
  {
    img: c12,
    alt: "Wireframing & Prototyping",
    title: "Wireframing & Prototyping",
    desc: "Visualize user journeys with low and high-fidelity wireframes and prototypes that reduce risks during development.",
  },
  {
    img: c13,
    alt: "User Interface Design",
    title: "User Interface Design",
    desc: "Design clean, intuitive interfaces that align with your brand and enhance user engagement across platforms.",
  },
  {
    img: c11,
    alt: "Usability Testing & UX Optimization",
    title: "Usability Testing & UX Optimization",
    desc: "Conduct thorough usability testing and iterative improvements to maximize product usability and accessibility.",
  },
  {
    img: c12,
    alt: "Product Design Strategy & Consultancy",
    title: "Product Design Strategy & Consultancy",
    desc: "Align your product’s design strategy with business goals through expert consultancy and actionable insights.",
  },
  {
    img: c13,
    alt: "UI/UX Design System Development",
    title: "UI/UX Design System Development",
    desc: "Create scalable design systems to ensure consistency and efficiency in your digital product design workflow.",
  },
];

const DataAnalytics = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Data Analytics & BI Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies delivers advanced Data Analytics and Business Intelligence services in Saudi Arabia. Empower your decisions with actionable insights and real-time reporting."
        canonical="https://asvayuktech.com/data-analytics-bi-services-in-saudi-arabia"
      />

      <main>
        {/* Banner Section */}
        <section className="banner-en ">
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
                      Data Analytics & BI Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> empowers businesses
                    with data-driven decision-making through powerful analytics,
                    interactive dashboards, and intelligent reporting solutions
                    tailored to Saudi Arabia’s digital landscape.
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
                    alt="Data Analytics & BI Company in Saudi Arabia"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* Benefits Section */}
        <Container className="py-5">
          <Row className="align-items-center mb-4 text-center">
            <Col lg={10} className="mx-auto">
              <h1 className="fw-bold">
                Why Choose Our Data Analytics & BI Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we harness the power of data to
                transform how your business operates. Here’s why we are your
                go-to partner for analytics and business intelligence:
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            {/* Card 1 */}
            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative card"
                style={{ borderRadius: "12px", background: "#f9f9f9" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c11}
                      alt="Custom Analytics Solutions"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">Custom Analytics Solutions</h6>
                    <p className="mb-0 text-muted">
                      We build tailored analytics systems to help your business
                      uncover meaningful trends and optimize operations.
                    </p>
                  </Col>
                </Row>
              </Card>

              {/* Card 2 */}
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
                      alt="BI Dashboard Development"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">BI Dashboard Development</h6>
                    <p className="mb-0 text-muted">
                      Deliver visual, interactive dashboards for real-time
                      performance tracking and data insights.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Card 3 & 4 */}
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
                      alt="Predictive Analytics"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Predictive & Prescriptive Analytics
                    </h6>
                    <p className="mb-0 text-muted">
                      Use historical and real-time data to forecast trends, make
                      predictions, and optimize business outcomes.
                    </p>
                  </Col>
                </Row>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative mt-4 card"
                style={{ background: "#f9f9f9", borderRadius: "12px" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c13}
                      alt="Data Integration Services"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Data Integration & Automation
                    </h6>
                    <p className="mb-0 text-muted">
                      Connect all your data sources and automate reporting
                      workflows to ensure accuracy and efficiency.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Data Analytics & BI Services Tailored for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            Empower your business with actionable insights and data-driven
            strategies. At ASVAYUK Technologies, we deliver advanced data
            analytics and business intelligence solutions across Saudi Arabia,
            transforming raw data into valuable business outcomes.
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
                Powerful Data Analytics & Business Intelligence Solutions
              </h2>
              <p>
                We help you unlock the full potential of your data. From
                real-time dashboards to predictive analytics, our BI solutions
                deliver the clarity you need to make confident decisions. With
                ASVAYUK Technologies, your data becomes a strategic asset that
                fuels growth and innovation.
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
            background: `radial-gradient(circle, rgba(36, 159, 129, 1) -300%, rgba(0, 0, 0, 1) 100%)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="new_font_content new_font_white new_font_center">
                  <h1 className="fw-bold text-white text-center pb-5">
                    <span className="grdnt_clr">Turn Data</span> Into Actionable
                    Insights
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Make Informed Decisions with Real-Time Dashboards</h3>
                    </li>
                    <li>
                      <h3>Improve Efficiency through Data-Driven Strategies</h3>
                    </li>
                    <li>
                      <h3>Unlock Hidden Patterns with Predictive Analytics</h3>
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
                Why Data Analytics & BI Matter for Your Business{" "}
                <span
                  className="text-uppercase"
                  style={{ color: "var(--main)" }}
                >
                  IN PANCHKULA AND CHANDIGARH
                </span>
              </h1>
              <p className="powered_php pt-3">
                Leveraging data analytics helps your business gain a competitive
                edge, enhance customer experience, and drive smarter, faster
                decision-making through actionable insights.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Data Collection Panchkula">
                      Collect, clean, and organize data from diverse sources
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Dashboard Visualization Chandigarh">
                      Visualize KPIs with dynamic dashboards and charts
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cloud Data Analytics Panchkula">
                      Deploy scalable analytics solutions on cloud platforms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Data Warehousing Chandigarh">
                      Centralize data with secure and optimized warehousing
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Predictive Analytics Panchkula">
                      Use machine learning to forecast trends and behaviors
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
                  <h3 className="fw-bold">Our Data Analytics & BI Process</h3>
                  <p>
                    Our proven process ensures you gain value from your data at
                    every stage. We combine analytics best practices with
                    business acumen to provide impactful insights.
                  </p>
                  <p>
                    From strategy to implementation, we collaborate closely with
                    clients to align analytics with goals and drive tangible
                    results.
                  </p>

                  <div className="heroBtn mt-3">
                    <Link
                      to="/contact-us"
                      className="d-flex justify-content-between"
                    >
                      <div className="btnText px-3 py-3 text-light">
                        <span>BI Consultation</span>
                      </div>
                      <div className="btn_icon px-4 py-2 align-content-center">
                        <FaChevronRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Analysis:</strong> Identify business
                    objectives, define key metrics, and outline analytical
                    goals.
                  </li>
                  <li>
                    <strong>Data Integration:</strong> Consolidate data from
                    different platforms like CRM, ERP, and web analytics for a
                    centralized view.
                  </li>
                  <li>
                    <strong>Dashboard & Reporting:</strong> Design interactive
                    dashboards and visual reports for real-time decision-making.
                  </li>
                  <li>
                    <strong>Advanced Analytics:</strong> Leverage statistical
                    methods and machine learning to uncover patterns and
                    predictions.
                  </li>
                  <li>
                    <strong>Optimization & Support:</strong> Continuously
                    enhance models and provide expert guidance to improve
                    outcomes.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Business-Centric Analytics Solutions for Growth
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We design every analytics solution to empower your teams, reduce
              risk, and uncover opportunities. At ASVAYUK, your business growth
              is our data mission.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">Ready to Unlock the Power of Your Data?</h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies help you turn raw data into meaningful
              intelligence. Contact us today to begin your Data Analytics & BI
              transformation journey.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default DataAnalytics;
