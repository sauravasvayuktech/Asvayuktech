import { Col, Container, Nav, Row, Tab, Image } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/digitalTransformImage.png";
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
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
// import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "Digital Strategy Consulting",
    image: softdev1,
    alt: "Digital strategy consulting services in Saudi Arabia",
    content: (
      <>
        Our digital strategy consulting helps organizations in Saudi Arabia
        envision and execute a comprehensive roadmap for digital transformation.
        We analyze your current capabilities and define innovative strategies
        aligned with your business goals.
      </>
    ),
  },
  {
    id: "2",
    title: "Business Process Automation",
    image: softdev2,
    content: (
      <>
        We implement business process automation solutions to streamline
        operations, reduce manual effort, and improve accuracy—enabling your
        enterprise to achieve higher productivity and cost savings.
      </>
    ),
  },
  {
    id: "3",
    title: "Cloud Transformation Services",
    image: softdev3,
    content: (
      <>
        Transition your business to the cloud with our end-to-end cloud
        transformation services. We ensure scalable, secure, and cost-effective
        cloud adoption tailored to your unique enterprise needs.
      </>
    ),
  },
  {
    id: "4",
    title: "Data Analytics & AI Integration",
    image: softdev4,
    content: (
      <>
        Unlock valuable insights by integrating data analytics and artificial
        intelligence into your business processes. Our solutions empower
        data-driven decision-making and optimize operational performance.
      </>
    ),
  },
  {
    id: "5",
    title: "Customer Experience Transformation",
    image: softdev5,
    content: (
      <>
        Enhance customer engagement and satisfaction through tailored digital
        experiences. We leverage modern platforms and tools to create
        personalized, seamless interactions.
      </>
    ),
  },
  {
    id: "6",
    title: "Enterprise Application Modernization",
    image: softdev6,
    content: (
      <>
        Modernize legacy enterprise applications to improve flexibility,
        scalability, and integration capabilities—helping your business stay
        competitive in the digital era.
      </>
    ),
  },
  {
    id: "7",
    title: "IoT and Connected Solutions",
    image: softdev7,
    content: (
      <>
        Integrate Internet of Things (IoT) technologies into your operations to
        enable real-time monitoring, automation, and smarter decision-making
        across your enterprise.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Digital Workflow Automation",
    title: "Advanced Workflow Automation",
    desc: "We design and implement automated workflows that reduce operational bottlenecks and accelerate process efficiency across departments.",
  },
  {
    img: c12,
    alt: "Cloud Migration Services",
    title: "Seamless Cloud Migration",
    desc: "Our experts ensure a smooth transition of your IT infrastructure to the cloud, minimizing downtime and maximizing scalability and security.",
  },
  {
    img: c13,
    alt: "AI-Driven Business Insights",
    title: "Data Analytics & AI Solutions",
    desc: "Leverage AI-powered analytics to gain actionable business insights, improve forecasting, and drive strategic initiatives effectively.",
  },
  {
    img: c11,
    alt: "Customer-Centric Digital Solutions",
    title: "Omnichannel Customer Experience",
    desc: "Deliver consistent and personalized experiences across digital channels to boost customer satisfaction and loyalty.",
  },
  {
    img: c12,
    alt: "Enterprise Application Modernization",
    title: "Legacy Application Modernization",
    desc: "Upgrade your existing applications with the latest technologies to enhance performance, security, and integration capabilities.",
  },
  {
    img: c13,
    alt: "IoT for Smart Enterprises",
    title: "Connected IoT Solutions",
    desc: "Implement IoT solutions that enable real-time data collection and intelligent automation for smarter enterprise management.",
  },
];

const DigitalTransformations = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Digital Transformation Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies offers comprehensive digital transformation services in Saudi Arabia, helping enterprises adopt innovative technologies for business growth."
        canonical="https://asvayuktech.com/digital-transformation-services-in-saudi-arabia"
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
                      Digital Transformation Services Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> empowers businesses in
                    Saudi Arabia to harness the power of digital transformation
                    through innovative technologies and strategic consulting.
                    Our services enable seamless integration, automation, and
                    modernization to drive growth and operational excellence.
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
                    alt="Digital Transformation Company in Saudi Arabia"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* Intro Text Section */}
        <Container className="my-5">
          <h2 className="left-para mb-4 fw-bold">
            Comprehensive Digital Transformation Solutions in Saudi Arabia
          </h2>
          <p className="app__subhead mb-5 fs-5">
            We provide end-to-end digital transformation services that enable
            your enterprise to innovate, automate, and optimize business
            operations. Our expert team delivers scalable solutions designed to
            accelerate your digital journey and foster competitive advantage.
          </p>

          {/* Tabbed Service Details */}
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
              <h2 className="fw-bold">Digital Transformation Services</h2>
              <p>
                At ASVAYUK Technologies, we help businesses in Saudi Arabia
                harness the power of digital technologies to transform
                operations, enhance customer experiences, and drive innovation.
                Our digital transformation services empower organizations to
                adapt, compete, and thrive in today’s fast-evolving market.
              </p>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {serviceData.map((service, i) => (
                <Col lg={4} className="pb-4 mb-3" key={i}>
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

        <div
          className="accelerate-bx bg_new_bx padding_coman"
          style={{
            background: `radial-gradient(
      circle,
      rgba(32, 150, 120, 1) -300%,
      rgba(0, 0, 0, 1) 100%
    )`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="new_font_content new_font_white new_font_center">
                  <h1 className="fw-bold text-white text-center pb-5">
                    <span className="grdnt_clr">Accelerate Your </span>Digital
                    Journey
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Cut Operational Costs by Up to 75%</h3>
                    </li>
                    <li>
                      <h3>Accelerate Time-to-Market by 50%</h3>
                    </li>
                    <li>
                      <h3>Enhance Agility & Innovation by 30%</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3 p-3">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Our Digital Transformation Process
                  </h3>
                  <p>
                    ASVAYUK Technologies partners with businesses across Riyadh
                    and Saudi Arabia to deliver digital transformation
                    strategies that unlock new value. We ensure your technology
                    roadmap aligns with your business goals, making your
                    operations more agile, efficient, and customer-centric.
                  </p>
                  <p>
                    Our expertise covers cloud adoption, process automation,
                    data-driven insights, and technology modernization, enabling
                    your enterprise to stay competitive and innovative.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Assessment & Strategy Development:</strong> We
                    evaluate your current technology landscape and business
                    needs to design a tailored digital transformation roadmap.
                  </li>
                  <li>
                    <strong>Technology Implementation:</strong> Our team
                    integrates advanced digital tools including cloud platforms,
                    automation, and analytics tailored to your organization.
                  </li>
                  <li>
                    <strong>Change Management & Training:</strong> We support
                    your team through adoption with training and change
                    management to maximize transformation success.
                  </li>
                  <li>
                    <strong>Continuous Optimization:</strong>{" "}
                    Post-implementation, we monitor and optimize your digital
                    assets to ensure sustained performance and adaptability.
                  </li>
                  <li>
                    <strong>Ongoing Support & Innovation:</strong> We provide
                    proactive maintenance and help you leverage emerging
                    technologies for ongoing competitive advantage.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">Client-Focused Digital Solutions</h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We cultivate <strong>enduring partnerships</strong> by delivering
              digital transformation services that align perfectly with your
              vision and business objectives. Transparent collaboration and
              continuous communication keep your goals central through every
              phase.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Start Your Digital Transformation?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Don’t settle for outdated processes. Partner with ASVAYUK
              Technologies to unlock the power of digital transformation and
              accelerate your business growth. Contact our experts today to
              begin your journey toward innovation and operational excellence.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default DigitalTransformations;
