import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/ui-ux-productIamges.png";
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

const DesignProducts = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="UI/UX & Product Design Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies offers cutting-edge UI/UX and product design services in Saudi Arabia to craft engaging and user-friendly digital experiences."
        canonical="https://asvayuktech.com/ui-ux-product-design-services-in-saudi-arabia"
      />

      <main>
        {/* Banner Section */}
        <section className="banner-en">
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
                      UI/UX & Product Design Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> creates intuitive and
                    aesthetically pleasing digital products. Our expert UI/UX
                    designers transform ideas into engaging, user-centric
                    experiences that drive customer satisfaction and business
                    growth.
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
                    alt="UI/UX and Product Design Company in Saudi Arabia"
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
                Why Choose Our UI/UX & Product Design Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we specialize in crafting seamless user
                experiences and visually compelling interfaces that connect your
                brand with your audience. Here’s why we are your ideal design
                partner:
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
                      alt="Custom UI/UX Design Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Custom UI/UX Designs Tailored to Your Users
                    </h6>
                    <p className="mb-0 text-muted">
                      We create user interfaces and experiences that are
                      specifically designed to meet the unique needs of your
                      audience, enhancing engagement and usability.
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
                      alt="Product Design Services Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End Product Design and Prototyping
                    </h6>
                    <p className="mb-0 text-muted">
                      From user research and wireframing to high-fidelity
                      prototypes, we deliver comprehensive product design
                      solutions that accelerate your product development
                      lifecycle.
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
                      alt="UX Consultancy Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      User-Centered Design Strategies for Business Impact
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze user behavior and business goals to craft
                      design strategies that improve satisfaction, retention,
                      and ROI.
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
                      alt="Experienced UI/UX Designers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced UI/UX Designers and Product Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our talented designers use the latest tools and best
                      practices to deliver innovative, accessible, and beautiful
                      digital experiences.
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
            UI/UX & Product Design Services Tailored for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            We craft state-of-the-art UI/UX and product design solutions across
            Saudi Arabia, ensuring your digital products are engaging,
            intuitive, and deliver exceptional user satisfaction. Partner with
            ASVAYUK Technologies to elevate your digital presence.
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

        {/* UI/UX & Product Design Services */}
        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">
                Exceptional UI/UX & Product Design Services
              </h2>
              <p>
                At ASVAYUK Technologies, we craft user-centered digital
                experiences that delight your customers and drive business
                growth. Our design philosophy blends creativity with usability
                to create intuitive, accessible, and visually stunning products.
                From wireframes to prototypes, we ensure seamless user journeys
                that keep users engaged and satisfied.
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
                    <span className="grdnt_clr">Design Experiences</span> That
                    Engage & Inspire
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Increase User Retention with Intuitive Interfaces</h3>
                    </li>
                    <li>
                      <h3>
                        Boost Conversion Rates through Effective Product Design
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Accelerate Time-to-Market with Agile Design Sprints
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
                Why UI/UX & Product Design Matter for Your Business{" "}
                <span
                  className="text-uppercase"
                  style={{ color: "var(--main)" }}
                >
                  IN PANCHKULA AND CHANDIGARH
                </span>
              </h1>
              <p className="powered_php pt-3">
                Great design drives engagement, builds trust, and differentiates
                your brand in a competitive market. Investing in user experience
                leads to happier customers and stronger business outcomes.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="User Research Panchkula">
                      Understand user behavior and needs through thorough
                      research
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Wireframing Chandigarh">
                      Visualize product flow with clear wireframes and
                      prototypes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Responsive Design Panchkula">
                      Ensure seamless experiences across all devices and
                      platforms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Usability Testing Panchkula">
                      Validate designs with real user feedback to optimize UX
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Product Strategy Chandigarh">
                      Align design with your business goals for maximum impact
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
                    Our UI/UX & Product Design Process
                  </h3>
                  <p>
                    We follow a collaborative and iterative design process that
                    ensures every product we create meets user needs and
                    business objectives.
                  </p>
                  <p>
                    From discovery workshops to user testing, we integrate
                    feedback at every stage to deliver compelling digital
                    experiences.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Schedule a Design Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery & Research:</strong> Understand user
                    needs, market trends, and project goals.
                  </li>
                  <li>
                    <strong>Information Architecture & Wireframing:</strong>{" "}
                    Define the structure and layout of your product.
                  </li>
                  <li>
                    <strong>Visual Design & Prototyping:</strong> Craft
                    appealing interfaces and interactive prototypes.
                  </li>
                  <li>
                    <strong>Usability Testing & Feedback:</strong> Validate
                    design choices with real users.
                  </li>
                  <li>
                    <strong>Final Delivery & Support:</strong> Provide assets
                    and guidance for smooth development and launch.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Client-Focused UI/UX Solutions for Business Growth
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Our goal is to deliver design solutions that not only look great
              but also drive measurable business results. We prioritize
              communication and transparency to ensure your vision is realized
              every step of the way.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Elevate Your Product’s User Experience?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies transform your ideas into engaging,
              user-friendly products. Contact us now to begin your UI/UX design
              journey.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default DesignProducts;