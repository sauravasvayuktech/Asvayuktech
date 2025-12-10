import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/DocumentImage.png";
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
    title: "LXP Strategy & Consultation",
    image: softdev1,
    alt: "Learning experience platform consulting",
    content: (
      <>
        Our LXP experts design personalized learning strategies that align with
        your business goals, ensuring effective digital learning adoption and
        learner engagement.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom LXP Development",
    image: softdev2,
    content: (
      <>
        Build scalable and interactive learning platforms that support content
        curation, social learning, personalization, and progress tracking.
      </>
    ),
  },
  {
    id: "3",
    title: "Learner-Centric Portals",
    image: softdev3,
    content: (
      <>
        Create intuitive, user-friendly portals where learners can access
        resources, track progress, and participate in collaborative learning.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Learning Insights",
    image: softdev4,
    content: (
      <>
        Use AI to recommend learning paths, track user behavior, and deliver
        actionable insights for continuous learning improvement.
      </>
    ),
  },
  {
    id: "5",
    title: "Learning Workflow Automation",
    image: softdev5,
    content: (
      <>
        Automate onboarding, course assignments, certification tracking, and
        reporting to streamline the learning experience lifecycle.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for LXP Ecosystems",
    image: softdev6,
    content: (
      <>
        Seamlessly connect your LXP with HRMS, CRMs, content providers, and
        communication platforms for an integrated learning ecosystem.
      </>
    ),
  },
  {
    id: "7",
    title: "LXP Optimization & Scalability",
    image: softdev7,
    content: (
      <>
        Enhance system performance, ensure fast content delivery, and scale your
        LXP to support evolving organizational learning needs.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "LXP Strategy & Planning",
    title: "LXP Strategy & Planning",
    desc: "Craft a learning roadmap that aligns digital learning initiatives with your organizational objectives and learner needs.",
  },
  {
    img: c12,
    alt: "LXP Software Development",
    title: "Custom LXP Development",
    desc: "Develop a centralized platform for personalized learning journeys, content curation, and engagement tracking.",
  },
  {
    img: c13,
    alt: "Learner Portals",
    title: "Learner-Centric Portals",
    desc: "Deploy engaging portals where users can access courses, track learning progress, and participate in social learning.",
  },
  {
    img: c11,
    alt: "Learning Analytics & AI",
    title: "AI-Powered Learning Insights",
    desc: "Implement AI to generate insights, recommend content, and monitor learner behavior for continuous platform improvement.",
  },
  {
    img: c12,
    alt: "Learning Workflow Automation",
    title: "Learning Workflow Automation",
    desc: "Automate course enrollments, reminders, reporting, and certification to simplify LXP management processes.",
  },
  {
    img: c13,
    alt: "LXP Optimization & Maintenance",
    title: "LXP Optimization & Scalability",
    desc: "Ensure consistent performance and reliability through regular updates, optimization, and scalable architecture.",
  },
];

const LearningExperience = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Learning Experience Platforms (LXP) | ASVAYUK Technologies"
        description="ASVAYUK Technologies offers cutting-edge Learning Experience Platforms (LXP) in Saudi Arabia. We deliver personalized learning, AI-driven insights, seamless integrations, and scalable digital training solutions."
        canonical="https://asvayuktech.com/learning-experience-platforms-in-riyadh-saudi-arabia"
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
                      Learning Experience Platform Provider in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers advanced
                    Learning Experience Platforms (LXP) that personalize
                    education, engage learners, and boost training outcomes
                    across enterprises and institutions in Saudi Arabia.
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
                    alt="Learning Experience Platform Provider in Saudi Arabia"
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
                Why Choose Our Learning Experience Platforms in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we craft scalable LXPs tailored to
                Saudi organizations, offering intuitive interfaces, AI-powered
                content delivery, and seamless integration with your learning
                ecosystem.
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
                      alt="Custom LXP Solutions Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Personalized Learning Journeys
                    </h6>
                    <p className="mb-0 text-muted">
                      We design LXP platforms that adapt to each learner&#39;s pace,
                      behavior, and goals—enabling organizations to deliver
                      impactful, user-centric training experiences.
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
                      alt="Real-Time Learning Analytics Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Real-Time Insights & Progress Tracking
                    </h6>
                    <p className="mb-0 text-muted">
                      Gain actionable analytics on learner performance,
                      engagement, and course completion to drive continuous
                      improvement and learning outcomes.
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
                      alt="AI-Based Learning Platform Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      AI-Powered Content Recommendations
                    </h6>
                    <p className="mb-0 text-muted">
                      Our LXP uses intelligent algorithms to recommend the right
                      content at the right time, optimizing learning efficiency
                      and knowledge retention.
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
                      alt="Experienced LXP Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Expert Developers & UI Designers for LXPs
                    </h6>
                    <p className="mb-0 text-muted">
                      Our experienced team crafts modern, intuitive learning
                      interfaces that maximize usability, engagement, and ROI on
                      your digital training investments.
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
            Learning Experience Platforms (LXP) in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies delivers innovative Learning Experience
            Platforms (LXP) tailored for businesses and educational institutions
            in Saudi Arabia. Our smart LXP solutions enhance personalized
            learning journeys, boost engagement, and empower continuous employee
            development with intelligent content delivery and tracking.
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
                Our Core Learning Experience Platform Solutions
              </h2>
              <p>
                At ASVAYUK Technologies, we specialize in developing secure,
                AI-driven Learning Experience Platforms designed for
                organizations in Saudi Arabia. Our LXP solutions support
                microlearning, skill-based content delivery, social learning,
                and analytics to ensure learners achieve maximum engagement and
                development.
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
                    Ready to Launch a Smart Learning Experience Platform?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Collaborate with ASVAYUK Technologies to build a tailored
                    Learning Experience Platform. Our expert team will design
                    and develop an intuitive, secure, and scalable LXP that
                    transforms how your teams learn, grow, and collaborate—right
                    here in Saudi Arabia.
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
                WHY LEARNING EXPERIENCE PLATFORMS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  MATTER FOR YOUR BUSINESS
                </span>
              </h1>
              <p className="powered_php pt-3">
                Learning Experience Platforms (LXPs) revolutionize corporate
                training by delivering personalized, engaging, and adaptive
                learning journeys. With modern LXP solutions, you drive employee
                growth, foster collaboration, and align learning with
                organizational goals.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Personalized Learning Paths">
                      Offers personalized learning paths based on individual
                      roles and goals
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI-Powered Recommendations">
                      Leverages AI to recommend relevant courses and content in
                      real time
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Skill Gap Analysis">
                      Tracks learner progress and identifies skill gaps with
                      analytics
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Collaborative Learning">
                      Enables social and peer-to-peer learning through
                      integrated tools
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable LXP Architecture">
                      Scales with your enterprise while adapting to diverse
                      learning needs
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
                    Our Learning Experience Platform Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we build custom{" "}
                    <strong>Learning Experience Platforms (LXPs)</strong> that
                    align with your learning strategy. Our approach ensures the
                    platform is intuitive, scalable, and data-driven.
                  </p>
                  <p>
                    From AI-powered recommendations and personalized paths to
                    gamification and analytics, we design LXPs that maximize
                    learner engagement and impact.
                  </p>

                  <div className=" mt-3 w-100">
                   <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Needs Assessment:</strong> We analyze your learning
                    goals, audience types, and current infrastructure to define
                    key LXP features.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our team crafts engaging,
                    mobile-friendly interfaces to boost user experience and
                    retention.
                  </li>
                  <li>
                    <strong>Development and Features:</strong> We implement core
                    modules like content curation, personalized learning paths,
                    discussion forums, and analytics.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> We rigorously test your
                    LXP to ensure high performance, accessibility, and ease of
                    use.
                  </li>
                  <li>
                    <strong>Ongoing Support:</strong> We offer continuous
                    support, updates, and enhancements to keep your platform
                    effective and innovative.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Software Built for Personalized Learning and Engagement
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop{" "}
              <b>dynamic, scalable Learning Experience Platforms (LXPs)</b>{" "}
              tailored to modern learners. Our solutions enhance engagement
              through personalization, community interaction, and performance
              insights.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Transform Your Learning Ecosystem?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Partner with ASVAYUK Technologies to build an impactful Learning
              Experience Platform. From employee training to enterprise
              knowledge sharing, we empower your teams through engaging,
              intelligent learning experiences.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default LearningExperience;
