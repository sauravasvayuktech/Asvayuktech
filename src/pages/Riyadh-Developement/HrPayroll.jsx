import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/HrImage.png";
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
    title: "HR & Payroll Software Strategy & Consultation",
    image: softdev1,
    alt: "HR and payroll software consulting",
    content: (
      <>
        Our HR & payroll experts help you design a strategy aligned with your
        business goals, focusing on compliance, employee management, and
        seamless payroll processing.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom HR & Payroll Software Development",
    image: softdev2,
    content: (
      <>
        Develop scalable, feature-rich HR and payroll systems tailored for
        employee records, attendance tracking, and automated payroll
        calculations.
      </>
    ),
  },
  {
    id: "3",
    title: "Multilingual Employee Self-Service Portals",
    image: softdev3,
    content: (
      <>
        Enhance employee engagement with AI-driven multilingual portals for
        leave requests, payslip access, and real-time payroll queries.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Attendance & Leave Management",
    image: softdev4,
    content: (
      <>
        Use AI-based tools to automate attendance tracking, leave approvals, and
        workforce analytics to improve HR efficiency.
      </>
    ),
  },
  {
    id: "5",
    title: "Automation in Payroll & Compliance Management",
    image: softdev5,
    content: (
      <>
        Automate payroll processing, tax calculations, statutory compliance, and
        employee notifications for error-free and timely salary disbursements.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for Benefits & Tax Systems",
    image: softdev6,
    content: (
      <>
        Integrate third-party APIs such as tax filing services, benefits
        providers, and attendance devices to streamline HR & payroll workflows.
      </>
    ),
  },
  {
    id: "7",
    title: "HR & Payroll Software Performance Optimization",
    image: softdev7,
    content: (
      <>
        Ensure fast processing, data security, and system reliability with
        continuous monitoring, updates, and scalability improvements.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "HR & Payroll Strategy & Planning",
    title: "HR & Payroll Strategy & Planning",
    desc: "Create a comprehensive roadmap that supports efficient employee management and compliant payroll processing.",
  },
  {
    img: c12,
    alt: "HR & Payroll Software Development",
    title: "Custom HR & Payroll Software Development",
    desc: "Build a robust platform supporting payroll automation, employee data management, and attendance tracking.",
  },
  {
    img: c13,
    alt: "Employee Self-Service Portals",
    title: "Multilingual Employee Self-Service Portals",
    desc: "Deploy portals enabling employees to manage their profiles, leaves, and payroll info easily and securely.",
  },
  {
    img: c11,
    alt: "Attendance & Leave Management",
    title: "AI-Powered Attendance & Leave Management",
    desc: "Leverage AI to automate attendance recording, leave approvals, and workforce analytics for HR teams.",
  },
  {
    img: c12,
    alt: "Payroll & Compliance Automation",
    title: "Payroll & Compliance Automation",
    desc: "Automate salary calculations, tax filings, and compliance management to reduce errors and save time.",
  },
  {
    img: c13,
    alt: "HR & Payroll Optimization & Maintenance",
    title: "HR & Payroll Software Performance Optimization",
    desc: "Maintain a secure, efficient HR and payroll system with ongoing updates and performance tuning.",
  },
];

const HrPayroll = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="HR & Payroll Software Development in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies offers robust HR & Payroll software development services in Saudi Arabia. We build scalable HR platforms, automated payroll systems, secure data handling, and custom workforce management solutions."
        canonical="https://asvayuktech.com/hr-payroll-software-development-in-riyadh-saudi-arabia"
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
                      HR & Payroll Software Development Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers modern HR &
                    Payroll software solutions built to streamline workforce
                    management for companies in Saudi Arabia. Our platforms are
                    secure, scalable, and tailored to meet local compliance and
                    employee needs.
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
                    alt="HR & Payroll Software Development Company in Saudi Arabia"
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
                Why Choose Our HR & Payroll Software Development Services in
                Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we specialize in building custom HR and
                payroll systems for organizations across Saudi Arabia. Here&#39;s
                why businesses trust us to digitize their workforce operations:
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
                      alt="Custom HR Software Development Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Tailored HR Software Built for Your Workforce
                    </h6>
                    <p className="mb-0 text-muted">
                      We develop HR platforms that align with your company&#39;s
                      structure, policies, and workflows — enhancing employee
                      lifecycle management, from onboarding to retirement.
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
                      alt="End-to-End Payroll Automation Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End Payroll Automation & Compliance
                    </h6>
                    <p className="mb-0 text-muted">
                      From salary calculations to tax deductions and payslip
                      generation, we automate your payroll operations and ensure
                      compliance with Saudi labor regulations.
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
                      alt="HR Strategy & Software Architecture Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Strategic HR Tech & Scalable Architecture
                    </h6>
                    <p className="mb-0 text-muted">
                      We implement data-driven HR strategies supported by
                      secure, scalable system architecture — enabling real-time
                      insights, workforce analytics, and integrations with ERP
                      tools.
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
                      alt="Experienced HR Software Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Skilled HR Software Developers & UI Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our expert team blends domain knowledge in HR with modern
                      UI/UX to deliver intuitive, secure, and efficient employee
                      management and payroll systems.
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
            HR & Payroll Software Development Services in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies offers end-to-end HR and payroll software
            development services tailored for Saudi Arabian businesses. Our
            intelligent digital solutions help organizations automate HR
            operations, ensure compliance, manage payroll seamlessly, and
            enhance employee satisfaction. Partner with us to build robust HR
            systems that drive efficiency and foster growth.
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
                Our Core HR & Payroll Software Development Offerings
              </h2>
              <p>
                At ASVAYUK Technologies, we specialize in developing powerful,
                user-centric HR and payroll software solutions tailored for
                Saudi businesses. From automated payroll processing and employee
                self-service portals to real-time attendance tracking and
                compliance management, our solutions empower organizations to
                optimize HR operations. Partner with us to transform your
                workforce management.
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
                    Ready to Build a Smart HR & Payroll System?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Connect with ASVAYUK Technologies today. Our skilled
                    development team will collaborate with you to deliver an HR
                    & payroll software solution that simplifies workforce
                    management, ensures legal compliance, and scales with your
                    business across Saudi Arabia.
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
                WHY HR & PAYROLL SOFTWARE DEVELOPMENT MATTERS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  FOR YOUR BUSINESS
                </span>
              </h1>
              <p className="powered_php pt-3">
                HR & Payroll software solutions are transforming the way
                organizations manage employees, track attendance, and process
                salaries. With a tailored platform, your business can ensure
                compliance, streamline operations, and improve workforce
                satisfaction.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="HR Software Features">
                      Automates employee onboarding and document management
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Payroll Management Solutions">
                      Simplifies payroll processing with accurate tax
                      calculations
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Employee Self-Service Portals">
                      Offers self-service access for pay slips and leave
                      requests
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="HR Integration Tools">
                      Integrates attendance, biometrics, and performance
                      tracking systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable HR Tech Solutions">
                      Scales as your business grows while ensuring data security
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
                    Our HR & Payroll Software Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in custom{" "}
                    <strong>HR & Payroll software development</strong> for
                    businesses of all sizes. Our approach ensures your platform
                    is compliant, efficient, and user-friendly.
                  </p>
                  <p>
                    From employee records and attendance to tax compliance and
                    payslip generation, we build HR solutions that empower your
                    organization.
                  </p>

                  <div className=" mt-3 w-100">
                    <BannerButton btnTitle='Free  Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Needs Assessment:</strong> We evaluate your HR and
                    payroll workflows, compliance requirements, and integration
                    needs to plan a tailored solution.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our team designs clean,
                    intuitive dashboards for HR managers and employees.
                  </li>
                  <li>
                    <strong>Development and Modules:</strong> We build essential
                    modules like employee management, payroll engine, tax
                    computation, and leave tracking.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> Comprehensive testing
                    ensures data accuracy, security, and smooth operations
                    before rollout.
                  </li>
                  <li>
                    <strong>Ongoing Support:</strong> We provide continuous
                    updates and maintenance to keep your HR system aligned with
                    regulations and organizational needs.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Software Built for Workforce Efficiency and Compliance
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop <b>powerful, scalable HR & Payroll systems</b> tailored
              to various industries. With a focus on automation, legal
              compliance, and employee engagement, we help you manage your human
              capital effectively.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Digitize Your HR & Payroll Operations?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Partner with ASVAYUK Technologies to build a comprehensive HR &
              Payroll software solution. Whether you&#39;re a growing SME or a large
              enterprise, we’ll help you streamline workforce management,
              improve compliance, and boost employee satisfaction.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default HrPayroll;
