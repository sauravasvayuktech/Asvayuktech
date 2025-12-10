import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/onlinemarketplaceImg.png";
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
    title: "Online Marketplace Strategy & Consultation",
    image: softdev1,
    alt: "Online marketplace development consulting",
    content: (
      <>
        Our marketplace experts help you define a winning strategy that
        aligns with your business goals, focusing on user acquisition and
        seamless vendor-buyer engagement.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Marketplace Platform Development",
    image: softdev2,
    content: (
      <>
        Build scalable, feature-rich online marketplaces tailored for multiple
        product categories with real-time inventory management and secure
        payment gateways.
      </>
    ),
  },
  {
    id: "3",
    title: "Multilingual Marketplace Chatbots",
    image: softdev3,
    content: (
      <>
        Improve user support and engagement with AI-driven multilingual chatbots
        handling queries, order tracking, and personalized recommendations.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Product Recognition",
    image: softdev4,
    content: (
      <>
        Use AI-based image recognition to enable visual search, product tagging,
        and automated catalog management within your online marketplace.
      </>
    ),
  },
  {
    id: "5",
    title: "Automation in Vendor & Order Management",
    image: softdev5,
    content: (
      <>
        Automate vendor onboarding, order processing, and customer notifications
        to streamline marketplace operations and improve efficiency.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for Payment & Shipping",
    image: softdev6,
    content: (
      <>
        Integrate third-party APIs such as payment gateways, shipping providers,
        and analytics tools to enhance marketplace functionality and user
        experience.
      </>
    ),
  },
  {
    id: "7",
    title: "Marketplace Performance Optimization",
    image: softdev7,
    content: (
      <>
        Ensure fast load times, smooth transactions, and high availability with
        continuous testing, bug fixes, and scalability improvements.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Marketplace Strategy & Planning",
    title: "Online Marketplace Strategy & Planning",
    desc: "Create a strategic roadmap that supports your marketplace's growth and seamless vendor-buyer interactions.",
  },
  {
    img: c12,
    alt: "Marketplace Platform Development",
    title: "Custom Marketplace Platform Development",
    desc: "Develop a robust marketplace platform supporting multiple vendors, product categories, and secure transactions.",
  },
  {
    img: c13,
    alt: "Marketplace Chatbot Solutions",
    title: "AI-Powered Marketplace Chatbots",
    desc: "Deploy conversational chatbots for customer service, order assistance, and personalized shopping recommendations.",
  },
  {
    img: c11,
    alt: "Product Recognition Technology",
    title: "AI Product Recognition",
    desc: "Enable users to search and discover products using image recognition technology within your marketplace.",
  },
  {
    img: c12,
    alt: "Order & Vendor Automation",
    title: "Vendor and Order Management Automation",
    desc: "Automate vendor onboarding, order tracking, and notifications to streamline marketplace operations.",
  },
  {
    img: c13,
    alt: "Marketplace Optimization & Maintenance",
    title: "Marketplace Performance Optimization",
    desc: "Maintain a fast, secure, and reliable marketplace with ongoing performance monitoring and updates.",
  },
];

const OnlineMarketplace = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Online Marketplace Development in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies specializes in custom online marketplace development in Saudi Arabia. We deliver scalable eCommerce platforms, multi-vendor systems, secure payment integration, and tailored marketplace solutions."
        canonical="https://asvayuktech.com/online-marketplace-development-in-riyadh-saudi-arabia"
      />

      <main>
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
                      Online Marketplace Development Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> builds scalable online
                    marketplace platforms tailored for Saudi Arabia’s growing
                    digital economy. We help businesses connect vendors and
                    customers with secure, high-performance, and user-centric
                    multi-vendor marketplace solutions.
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
                    alt="Online Marketplace Development Company in Saudi Arabia"
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
                Why Choose Our Online Marketplace Development Services in Saudi
                Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we offer tailored marketplace
                development services designed to support businesses across Saudi
                Arabia. Here’s why top brands trust us to build their digital
                commerce ecosystems:
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
                      alt="Custom Online Marketplace Development Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Custom Online Marketplaces Built to Fit Your Business
                      Model
                    </h6>
                    <p className="mb-0 text-muted">
                      We create marketplace platforms tailored to your niche,
                      business goals, and user experience expectations —
                      empowering vendors and buyers with efficient tools and
                      interfaces.
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
                      alt="End-to-End Marketplace Development Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End Marketplace Development & Launch Support
                    </h6>
                    <p className="mb-0 text-muted">
                      From idea validation to deployment and maintenance, we
                      manage every stage of your online marketplace development
                      journey — ensuring smooth performance and scalability.
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
                      alt="Marketplace Strategy and Consulting Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Marketplace Strategy & Scalable Architecture
                    </h6>
                    <p className="mb-0 text-muted">
                      We offer data-driven strategy and a robust backend
                      architecture to ensure your online marketplace scales
                      efficiently while delivering a seamless experience for
                      users.
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
                      alt="Experienced Marketplace Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Skilled Marketplace Developers & UX Designers
                    </h6>
                    <p className="mb-0 text-muted">
                      Our experienced team combines eCommerce knowledge with
                      modern UI/UX design to create visually appealing, secure,
                      and performance-optimized marketplaces.
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
            Travel & Tourism App Development Services in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies delivers end-to-end travel and tourism app
            development services tailored for Saudi Arabia. Our advanced digital
            solutions empower travel businesses to elevate customer engagement,
            boost bookings, and streamline operations. Partner with us to build
            innovative mobile apps that redefine travel experiences and drive
            measurable growth.
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
                Our Core Travel & Tourism App Development Offerings
              </h2>
              <p>
                At ASVAYUK Technologies, we specialize in crafting intelligent,
                intuitive travel applications for Saudi Arabia’s tourism
                ecosystem. From seamless booking automation to personalized
                travel experiences, our apps are designed to engage users, boost
                conversions, and provide real-time business insights.
                Collaborate with us to develop travel solutions that set you
                apart.
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
                    Ready to Launch a Smart Travel & Tourism App?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Get in touch with ASVAYUK Technologies today. Our expert
                    development team will work closely with you to design a
                    travel app that enhances user experiences, streamlines
                    operations, and accelerates business growth across Saudi
                    Arabia.
                  </p>
                  <Row>
                    <Col lg={6}>
                      <BannerButton
                        btnTitle="Book a Consultation"
                        url="/contact-us"
                      />
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
                WHY ONLINE MARKETPLACE DEVELOPMENT MATTERS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  FOR YOUR BUSINESS
                </span>
              </h1>
              <p className="powered_php pt-3">
                Online marketplace solutions are revolutionizing how buyers and
                sellers connect, trade, and grow. With a custom platform, your
                business can expand reach, streamline transactions, and foster a
                loyal community.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Marketplace Development Features">
                      Enhances user engagement with seamless product discovery
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Multi-vendor Marketplace Solutions">
                      Simplifies order management and vendor coordination
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Marketplace Platforms">
                      Offers personalized shopping experiences and
                      recommendations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Marketplace Payment Integration">
                      Integrates secure payment gateways, reviews, and shipping
                      APIs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Marketplace Growth Solutions">
                      Drives business growth through scalable digital innovation
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
                    Our Online Marketplace Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in custom{" "}
                    <strong>online marketplace development</strong> for
                    startups, SMEs, and enterprises. Our approach ensures your
                    platform meets market needs, delivers a smooth user
                    experience, and scales seamlessly.
                  </p>
                  <p>
                    From multi-vendor onboarding and product catalogs to payment
                    processing and analytics, we build marketplaces that connect
                    buyers and sellers efficiently.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery and Planning:</strong> We analyze your
                    business goals, target users, and marketplace features to
                    create a clear development roadmap.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our designers craft
                    intuitive, engaging interfaces that encourage browsing and
                    buying.
                  </li>
                  <li>
                    <strong>Development and Integration:</strong> We build core
                    marketplace features like product listings, vendor
                    management, payments, and ratings, integrating APIs where
                    necessary.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> Thorough testing
                    guarantees smooth operation across devices and secure
                    transactions before launch.
                  </li>
                  <li>
                    <strong>Maintenance and Updates:</strong> Ongoing support
                    ensures your marketplace evolves with user needs and market
                    trends.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Marketplaces Built for Scalability and Customer Satisfaction
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop <b>robust, scalable online marketplaces</b> that cater
              to diverse industries and audiences. By focusing on user
              experience, security, and performance, we help businesses build
              thriving digital marketplaces.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Launch Your Online Marketplace?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Partner with ASVAYUK Technologies to create a powerful marketplace
              platform tailored to your unique business needs. From local to
              global reach, we help you connect buyers and sellers like never
              before. Let’s build the future of commerce together.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default OnlineMarketplace;