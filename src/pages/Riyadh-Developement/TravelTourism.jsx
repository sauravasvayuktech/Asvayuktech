import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/travelImg.png";
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
    title: "Travel App Strategy & Consultation",
    image: softdev1,
    alt: "Travel app development consulting in Saudi Arabia",
    content: (
      <>
        Our travel tech experts help you define a successful app strategy that
        aligns with the tourism sector in Saudi Arabia, targeting user
        engagement and business growth.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Booking App Development",
    image: softdev2,
    content: (
      <>
        Build high-performance travel booking applications tailored for hotels,
        flights, and tour packages with real-time availability and secure
        payment integration.
      </>
    ),
  },
  {
    id: "3",
    title: "Multilingual Travel Chatbots",
    image: softdev3,
    content: (
      <>
        Enhance traveler experience with AI-driven multilingual chatbots for
        instant customer support, itinerary planning, and local recommendations.
      </>
    ),
  },
  {
    id: "4",
    title: "Image Recognition for Landmarks",
    image: softdev4,
    content: (
      <>
        Use AI-based image recognition to identify tourist spots, scan travel
        documents, and enhance visual discovery within your mobile tourism
        application.
      </>
    ),
  },
  {
    id: "5",
    title: "Automation in Tour Management",
    image: softdev5,
    content: (
      <>
        Streamline operations with automated booking workflows, itinerary
        generation, and CRM tools to improve efficiency for travel agencies in
        Saudi Arabia.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for Travel Services",
    image: softdev6,
    content: (
      <>
        Seamlessly integrate third-party APIs such as Google Maps, payment
        gateways, weather forecasts, and airline databases to enhance user
        experience.
      </>
    ),
  },
  {
    id: "7",
    title: "App Performance Optimization",
    image: softdev7,
    content: (
      <>
        Ensure high performance and user satisfaction through continuous app
        testing, speed optimization, bug fixes, and scalability enhancements.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Travel Strategy & Planning",
    title: "Travel App Strategy & Planning",
    desc: "Develop a clear app roadmap that supports tourism business goals and digital transformation in Saudi Arabia's travel sector.",
  },
  {
    img: c12,
    alt: "Booking App Development",
    title: "Online Booking System Development",
    desc: "Create robust booking systems for hotels, flights, and tours with real-time updates and user-friendly interfaces.",
  },
  {
    img: c13,
    alt: "Travel Chatbot Solutions",
    title: "Conversational Travel Chatbots",
    desc: "Deploy AI-powered travel assistants to offer instant help, booking support, and local tips to tourists in multiple languages.",
  },
  {
    img: c11,
    alt: "Visual Landmark Detection",
    title: "Smart Landmark Detection",
    desc: "Enable users to discover nearby attractions using advanced image recognition features in your mobile travel app.",
  },
  {
    img: c12,
    alt: "Tour Workflow Automation",
    title: "Tour Management Automation",
    desc: "Boost productivity by automating booking processes, client communication, and travel plan organization.",
  },
  {
    img: c13,
    alt: "App Optimization & Maintenance",
    title: "Travel App Optimization",
    desc: "Ensure fast, secure, and bug-free travel apps through performance monitoring, updates, and continuous improvement.",
  },
];

const TravelTourism = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Travel & Tourism App Development in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies builds custom travel and tourism apps in Saudi Arabia. We offer booking systems, itinerary planning, hotel integration, and travel portal development."
        canonical="https://asvayuktech.com/travel-tourism-app-development-in-riyadh-saudi-arabia"
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
                      Travel & Tourism App Development Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> specializes in
                    crafting innovative travel and tourism mobile apps in Saudi
                    Arabia. We empower businesses with custom solutions to
                    enhance traveler experiences, boost bookings, and streamline
                    operations.
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
                    alt="Travel and Tourism App Development Company in Saudi Arabia"
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
                Why Choose Our Travel & Tourism App Development Services in
                Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we deliver bespoke travel app
                development solutions tailored for Saudi Arabia&#39;s dynamic
                tourism sector. Here’s why leading travel businesses rely on us:
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
                      alt="Custom Travel App Development Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Custom Travel Apps Designed for Your Business Goals
                    </h6>
                    <p className="mb-0 text-muted">
                      We develop feature-rich travel and tourism applications
                      tailored to your unique needs, enhancing user engagement,
                      booking efficiency, and destination discovery.
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
                      alt="End-to-End Travel App Development Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End Travel App Development & Deployment
                    </h6>
                    <p className="mb-0 text-muted">
                      From concept to launch, we handle all phases of travel app
                      development, ensuring seamless user experience, secure
                      transactions, and reliable performance.
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
                      alt="Travel App Strategy Consultancy Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Strategic Travel App Solutions for Business Growth
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze market trends and user behavior to craft travel
                      app strategies that increase customer retention and
                      maximize revenue.
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
                      alt="Experienced Travel App Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced Travel App Developers & Designers
                    </h6>
                    <p className="mb-0 text-muted">
                      Our skilled team combines technical expertise and travel
                      industry knowledge to deliver user-friendly, secure, and
                      scalable apps.
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
            Travel & Tourism App Development Services for Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies offers comprehensive travel and tourism app
            development services across Saudi Arabia. Our innovative solutions
            help travel businesses improve customer engagement, increase
            bookings, and streamline operations with cutting-edge technology.
            Partner with us to build powerful mobile apps that transform the
            tourism experience.
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
                Our Key Travel & Tourism App Development Services
              </h2>
              <p>
                At ASVAYUK Technologies, we leverage advanced technologies to
                build smart, user-friendly travel apps tailored for Saudi
                Arabia’s tourism market. Our solutions focus on enhancing
                traveler engagement, automating booking processes, and
                delivering real-time insights. We work closely with clients to
                deliver apps that drive growth and customer satisfaction.
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
                    Ready to Build a Cutting-Edge Travel & Tourism App
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Connect with ASVAYUK Technologies today and let our expert
                    team create a custom travel app that boosts your business
                    growth and enhances traveler experiences across Saudi
                    Arabia.
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
                WHY TRAVEL & TOURISM APP DEVELOPMENT MATTERS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Digital travel and tourism solutions are transforming how tour
                operators, agencies, and travelers connect, plan, and explore.
                With a custom mobile app, your travel business in Saudi Arabia
                can boost bookings, enhance customer experience, and gain a
                competitive edge.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Travel App Development Riyadh">
                      Boosts user engagement with real-time travel assistance
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Tourism Mobile App Saudi Arabia">
                      Streamlines booking and itinerary management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Travel App Solutions">
                      Offers personalized experiences based on user preferences
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Tour Operator App Development">
                      Integrates with maps, guides, payment gateways & more
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Saudi Arabia Tourism App">
                      Drives growth through digital innovation in tourism
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
                    Our Travel App Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in custom{" "}
                    <strong>travel and tourism app development</strong> for
                    agencies, startups, and tourism boards across Saudi Arabia.
                    Our approach ensures your app aligns with business goals,
                    enhances customer journeys, and scales with growth.
                  </p>
                  <p>
                    From itinerary planning and booking engines to GPS
                    navigation and multi-language support, we build apps that
                    elevate the traveler experience and help you stand out in
                    the tourism industry.
                  </p>

                 
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery and Planning:</strong> We understand your
                    business model, target audience, and feature requirements to
                    outline a development roadmap.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our designers craft
                    intuitive, user-friendly interfaces that deliver seamless
                    travel experiences.
                  </li>
                  <li>
                    <strong>Development and Integration:</strong> We develop
                    core features like bookings, reviews, geolocation, and
                    secure payments, integrating APIs as needed.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> Rigorous quality
                    testing ensures the app runs smoothly across devices before
                    going live on app stores.
                  </li>
                  <li>
                    <strong>Maintenance and Updates:</strong> We provide ongoing
                    support and updates to keep your app competitive and aligned
                    with user expectations.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Travel Apps Built for Growth and Customer Delight
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop <b>scalable, high-performing travel applications</b>{" "}
              that serve both local and international tourists. With a
              customer-first approach, we ensure every app is tailored for
              engagement, retention, and real-time support across the Saudi
              Arabian tourism ecosystem.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Launch Your Travel App in Saudi Arabia?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Elevate your tourism business with a feature-rich mobile
              application from ASVAYUK Technologies. Whether you need a city
              guide app, a booking platform, or an end-to-end travel solution,
              we’re here to turn your vision into reality. Let&#39;s build the
              future of tourism together.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default TravelTourism;
