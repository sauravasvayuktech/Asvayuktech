import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/cloudSolImage.png";
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
    title: "Custom EdTech Platform Development",
    image: softdev1,
    alt: "Custom EdTech platform development Riyadh Saudi Arabia",
    content: (
      <>
        We design and develop scalable EdTech platforms tailored to schools,
        universities, and training institutes in Saudi Arabia. Empower your
        learners with intuitive, mobile-friendly, and feature-rich eLearning
        solutions.
      </>
    ),
  },
  {
    id: "2",
    title: "LMS Integration & Customization",
    image: softdev2,
    alt: "Learning Management System integration Riyadh",
    content: (
      <>
        Seamlessly integrate and customize Learning Management Systems (LMS)
        like Moodle, Canvas, or custom-built solutions to enhance digital
        learning delivery and management in Riyadh and beyond.
      </>
    ),
  },
  {
    id: "3",
    title: "Virtual Classroom Solutions",
    image: softdev3,
    alt: "Virtual classroom solutions for Saudi education",
    content: (
      <>
        Launch fully interactive virtual classroom environments with real-time
        video, chat, whiteboards, and content sharing to support remote and
        hybrid learning models across Saudi Arabia.
      </>
    ),
  },
  {
    id: "4",
    title: "Gamified Learning & Mobile Apps",
    image: softdev4,
    alt: "Gamified education app development Saudi Arabia",
    content: (
      <>
        Engage students through gamified learning platforms and educational
        mobile apps designed to boost motivation, interactivity, and retention
        in K–12 and higher education.
      </>
    ),
  },
  {
    id: "5",
    title: "AI-Powered EdTech Solutions",
    image: softdev5,
    alt: "AI in education Riyadh Saudi Arabia",
    content: (
      <>
        Incorporate AI-driven features like personalized learning paths,
        automated assessments, and intelligent tutoring systems to revolutionize
        the learning experience in Riyadh.
      </>
    ),
  },
  {
    id: "6",
    title: "E-Learning Content Development",
    image: softdev6,
    alt: "E-learning content creation Riyadh Saudi Arabia",
    content: (
      <>
        Develop rich, multimedia-based educational content including
        SCORM-compliant modules, quizzes, animations, and assessments tailored
        to Saudi educational standards.
      </>
    ),
  },
  {
    id: "7",
    title: "EdTech Strategy & Consultation",
    image: softdev7,
    alt: "EdTech consultancy Riyadh",
    content: (
      <>
        Get expert consultation for EdTech project planning, platform selection,
        digital transformation, and long-term scaling strategies aligned with
        the Saudi Vision 2030 education goals.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Custom EdTech platform development Riyadh Saudi Arabia",
    title: "Custom EdTech Platforms",
    desc: "Develop tailored educational technology platforms that support interactive learning and scalable deployment for Saudi institutions.",
  },
  {
    img: c12,
    alt: "Learning Management System integration Riyadh",
    title: "LMS Integration & Customization",
    desc: "Integrate and customize Learning Management Systems like Moodle and Canvas to streamline digital learning and administration.",
  },
  {
    img: c13,
    alt: "Virtual classroom solutions for Saudi education",
    title: "Virtual Classroom Solutions",
    desc: "Enable remote and hybrid learning with real-time interactive virtual classrooms optimized for K–12 and higher education.",
  },
  {
    img: c11,
    alt: "Gamified learning and mobile app development Saudi Arabia",
    title: "Gamified Learning & Mobile Apps",
    desc: "Create engaging, gamified learning experiences and mobile applications to boost student participation and knowledge retention.",
  },
  {
    img: c12,
    alt: "AI-powered education solutions Riyadh Saudi Arabia",
    title: "AI-Powered EdTech Solutions",
    desc: "Leverage artificial intelligence for personalized learning, automated grading, and intelligent tutoring systems.",
  },
  {
    img: c13,
    alt: "E-learning content development Riyadh Saudi Arabia",
    title: "E-Learning Content Development",
    desc: "Design multimedia-rich educational content, including SCORM-compliant modules, quizzes, and interactive assessments.",
  },
];

const EducationalTechnology = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="EdTech Development Company in Riyadh Saudi Arabia | ASVAYUK Technologies"
        description="Empower digital learning with ASVAYUK Technologies, Riyadh's leading EdTech development company. We build custom LMS platforms, virtual classrooms, and e-learning solutions for schools and enterprises."
        canonical="https://asvayuktech.com/edtech-development-riyadh-saudi-arabia"
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
                      Educational Technology (EdTech) Development in Riyadh |
                      ASVAYUK Technologies
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> empowers institutions
                    and educational platforms in Saudi Arabia with custom EdTech
                    solutions that enhance digital learning, streamline
                    management, and enable data-driven education.
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
                    src={banners_39} // Replace with relevant EdTech banner image
                    alt="EdTech Development in Saudi Arabia"
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
                Why Choose Our EdTech Development Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we build intuitive, scalable, and
                feature-rich educational software tailored to schools,
                universities, and corporate learning needs across Riyadh and
                beyond.
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
                      alt="LMS Architecture & Development"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      LMS Architecture & Development
                    </h6>
                    <p className="mb-0 text-muted">
                      We design and build custom learning management systems
                      (LMS) that support online courses, exams, and
                      certifications.
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
                      alt="Digital Classroom Integration"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Digital Classroom Integration
                    </h6>
                    <p className="mb-0 text-muted">
                      Enable virtual classrooms, video conferencing,
                      whiteboards, and real-time engagement tools into your
                      education platform.
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
                      alt="Data Analytics for Learning"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Data Analytics for Learning
                    </h6>
                    <p className="mb-0 text-muted">
                      Track student progress, identify learning gaps, and
                      enhance performance using intelligent reporting and
                      dashboards.
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
                      alt="EdTech Maintenance & Support"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      EdTech Maintenance & Support
                    </h6>
                    <p className="mb-0 text-muted">
                      Receive ongoing support, performance monitoring, and
                      regular updates for your educational technology solutions.
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
            Educational Solutions for Riyadh’s Institutions
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies empowers educational providers in Riyadh with
            next-gen EdTech platforms that support online learning, student
            tracking, and teacher collaboration. From LMS design to AI-driven
            insights, we transform how education is delivered.
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

        {/* Services Section */}
        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">Our EdTech Solutions</h2>
              <p>
                We provide end-to-end educational technology development—from
                student portals to exam engines, AI assessments, eLearning
                platforms, and integrated communication tools.
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
                    <span className="grdnt_clr">Empower</span> Learning with
                    Innovative EdTech Solutions
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Develop Interactive & Scalable Digital Learning
                        Platforms
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Enhance Student Engagement with Gamification & AI Tools
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Enable Seamless Remote & Hybrid Learning Experiences
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
                WHY EDTECH DEVELOPMENT IS CRUCIAL{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  FOR EDUCATIONAL INSTITUTIONS IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Educational institutions in Saudi Arabia are embracing EdTech to
                modernize learning, increase accessibility, and foster
                innovation. Advanced digital tools and platforms empower
                educators and students to achieve better outcomes with
                personalized and engaging content.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="Custom EdTech Platform Development Riyadh"
                    >
                      Design and build custom e-learning platforms tailored to
                      your institution&#39;s needs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="LMS Integration Saudi Arabia">
                      Integrate and customize Learning Management Systems for
                      seamless content delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Virtual Classroom Solutions Riyadh">
                      Enable remote learning with feature-rich virtual
                      classrooms and collaboration tools
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="Gamified Learning and AI Solutions Saudi Arabia"
                    >
                      Incorporate gamification and AI to enhance engagement and
                      personalized learning paths
                    </a>
                  </li>
                  <li>
                    <a href="#" title="E-learning Content Development Riyadh">
                      Develop interactive and multimedia-rich e-learning content
                      for diverse subjects
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
                  <h3 className="fw-bold">Our EdTech Development Process</h3>
                  <p>
                    At ASVAYUK Technologies, we partner with educational
                    institutions in Saudi Arabia to deliver comprehensive EdTech
                    solutions. From ideation to deployment, our team ensures
                    your digital learning platforms meet modern standards and
                    drive impactful learning experiences.
                  </p>
                  <p>
                    We focus on user experience, scalability, and integration
                    with existing systems to support educators and learners
                    effectively.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Request EdTech Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Gathering & Analysis:</strong>{" "}
                    Understand your institution’s goals and current
                    infrastructure.
                  </li>
                  <li>
                    <strong>Platform Design & Prototyping:</strong> Create
                    intuitive and accessible user interfaces for educators and
                    students.
                  </li>
                  <li>
                    <strong>Development & Integration:</strong> Build robust
                    platforms integrating LMS, virtual classrooms, and content
                    management.
                  </li>
                  <li>
                    <strong>Testing & Quality Assurance:</strong> Ensure
                    seamless user experience and platform reliability across
                    devices.
                  </li>
                  <li>
                    <strong>Deployment & Support:</strong> Launch your EdTech
                    solution and provide ongoing maintenance and enhancements.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Innovative EdTech Solutions to Transform Learning
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We deliver advanced educational technology platforms and tools
              that foster collaboration, personalized learning, and academic
              success. Partner with us to revolutionize how education is
              delivered in Saudi Arabia.
            </p>
          </Container>
        </section>

        <section className="pb-5 pt-2">
          <Container>
            <h2 className="fw-bold">
              Ready to Elevate Your Institution’s Learning Experience with
              ASVAYUK Technologies?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Connect with our EdTech experts to design, develop, and deploy
              innovative digital learning solutions tailored for Saudi Arabia’s
              educational landscape.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default EducationalTechnology;
