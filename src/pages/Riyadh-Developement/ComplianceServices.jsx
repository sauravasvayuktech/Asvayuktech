import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/securityImage.png";
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
    title: "Security Risk Assessment",
    image: softdev1,
    alt: "Enterprise security risk assessment in Saudi Arabia",
    content: (
      <>
        Identify, evaluate, and prioritize security risks across your IT
        infrastructure to develop mitigation strategies aligned with regulatory
        compliance standards.
      </>
    ),
  },
  {
    id: "2",
    title: "Compliance Readiness & Auditing",
    image: softdev2,
    content: (
      <>
        Prepare for regulatory audits with gap analysis, policy updates, and
        readiness assessments to ensure compliance with local and international
        standards such as ISO, GDPR, and NCA.
      </>
    ),
  },
  {
    id: "3",
    title: "Data Privacy & Protection",
    image: softdev3,
    content: (
      <>
        Implement enterprise-grade data protection strategies, including
        encryption, access controls, and secure data storage to protect
        sensitive information.
      </>
    ),
  },
  {
    id: "4",
    title: "Cloud Security Solutions",
    image: softdev4,
    content: (
      <>
        Secure your cloud infrastructure and applications with advanced tools,
        configurations, and monitoring to prevent breaches and data leaks.
      </>
    ),
  },
  {
    id: "5",
    title: "Threat Detection & Incident Response",
    image: softdev5,
    content: (
      <>
        Deploy real-time threat detection systems and establish incident
        response protocols to minimize the impact of cybersecurity attacks.
      </>
    ),
  },
  {
    id: "6",
    title: "Identity & Access Management",
    image: softdev6,
    content: (
      <>
        Strengthen access controls and authentication methods to ensure the
        right users have secure access to your systems and data.
      </>
    ),
  },
  {
    id: "7",
    title: "Security Awareness Training",
    image: softdev7,
    content: (
      <>
        Educate employees with tailored training programs to reduce the risk of
        social engineering and phishing attacks.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Risk Assessment Services",
    title: "IT Risk Assessment & Mitigation",
    desc: "Evaluate your organization’s security posture and implement risk mitigation strategies that align with national and international compliance requirements.",
  },
  {
    img: c12,
    alt: "Regulatory Compliance Audits",
    title: "Compliance Audits & Advisory",
    desc: "Get expert support for ISO 27001, GDPR, NCA ECC, and other regulatory standards with comprehensive compliance audits and advisory services.",
  },
  {
    img: c13,
    alt: "Data Privacy Solutions",
    title: "Data Privacy & Protection Strategies",
    desc: "Protect your organization’s sensitive data using encryption, anonymization, and secure data lifecycle management practices.",
  },
  {
    img: c11,
    alt: "Secure Cloud Infrastructure",
    title: "Cloud Security & Governance",
    desc: "Design and manage secure cloud environments with tools that ensure visibility, compliance, and protection against evolving threats.",
  },
  {
    img: c12,
    alt: "Incident Response Services",
    title: "Threat Detection & Incident Response",
    desc: "Implement advanced threat detection systems and incident response playbooks to minimize risk and recover quickly from breaches.",
  },
  {
    img: c13,
    alt: "Cybersecurity Training Programs",
    title: "Employee Security Awareness Programs",
    desc: "Build a security-first culture with ongoing cybersecurity training, phishing simulations, and best-practice awareness campaigns.",
  },
];

const ComplianceServices = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Security & Compliance Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies provides comprehensive Security and Compliance services in Saudi Arabia, including risk assessment, regulatory compliance, cybersecurity solutions, and data protection."
        canonical="https://asvayuktech.com/security-compliance-services-in-saudi-arabia"
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
                      Security & Compliance Services Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> provides expert
                    Security and Compliance services designed to protect your
                    business and ensure regulatory adherence. We help you manage
                    risks, safeguard data, and maintain operational integrity.
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
                    src={banners_39} // You may want to replace this image with a security-themed banner
                    alt="Security and Compliance Services Company in Saudi Arabia"
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
                Why Choose Our Security & Compliance Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we deliver comprehensive security and
                compliance solutions to help businesses navigate regulatory
                requirements, mitigate risks, and build trust with their
                customers.
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
                      src={c11} // Replace with relevant security icon/image if available
                      alt="Risk Assessment Services"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Comprehensive Risk Assessment & Management
                    </h6>
                    <p className="mb-0 text-muted">
                      We identify potential security threats and vulnerabilities
                      in your systems, enabling proactive risk mitigation and
                      stronger defense strategies.
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
                      src={c12} // Replace with compliance or cybersecurity icon/image if available
                      alt="Regulatory Compliance Solutions"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Regulatory Compliance & Policy Implementation
                    </h6>
                    <p className="mb-0 text-muted">
                      We ensure your business complies with local and
                      international security regulations, creating policies that
                      protect your assets and reputation.
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
                      src={c14} // Replace with cybersecurity or audit icon/image if available
                      alt="Cybersecurity Solutions"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Advanced Cybersecurity & Incident Response
                    </h6>
                    <p className="mb-0 text-muted">
                      Protect your digital infrastructure with state-of-the-art
                      cybersecurity technologies and rapid incident response to
                      minimize threats.
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
                      src={c13} // Replace with experienced team icon/image if available
                      alt="Experienced Security Specialists"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced Security & Compliance Specialists
                    </h6>
                    <p className="mb-0 text-muted">
                      Our certified experts bring years of experience in
                      security audits, compliance management, and risk
                      mitigation tailored to your industry.
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
            Security & Compliance Solutions Tailored for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            We provide comprehensive security and compliance services to
            organizations across Saudi Arabia, helping you protect your data,
            comply with regulations, and build customer trust. Partner with
            ASVAYUK Technologies to safeguard your business and ensure long-term
            success.
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
                Our Core Security & Compliance Services
              </h2>
              <p>
                At ASVAYUK Technologies, we provide comprehensive security and
                compliance solutions tailored to protect your business assets
                and ensure adherence to regulatory standards. Our expert team
                delivers robust risk management, data privacy, and governance
                frameworks, empowering organizations across Saudi Arabia to
                maintain trust, reduce vulnerabilities, and stay compliant in a
                rapidly evolving digital landscape.
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
                    <span className="grdnt_clr">Secure Your </span>Business with
                    Confidence
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Mitigate Security Risks and Threats Effectively</h3>
                    </li>
                    <li>
                      <h3>Achieve Compliance Faster with Expert Guidance</h3>
                    </li>
                    <li>
                      <h3>Protect Sensitive Data with Advanced Encryption</h3>
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
                WHY SECURITY & COMPLIANCE MATTER FOR YOUR BUSINESS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Ensuring security and compliance protects your business from
                data breaches, legal penalties, and reputational damage. It
                enables trust with customers, partners, and regulators in
                today’s increasingly connected world.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Risk Management Saudi Arabia">
                      Comprehensive risk assessments to identify vulnerabilities
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Data Privacy Solutions Saudi Arabia">
                      Implement data protection policies in line with
                      regulations
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Regulatory Compliance Saudi Arabia">
                      Ensure adherence to industry standards and government
                      mandates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Security Audits Saudi Arabia">
                      Conduct regular audits to maintain security posture
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Incident Response Saudi Arabia">
                      Prepare and respond quickly to security incidents
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
                    Our Security & Compliance Service Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we deliver tailored
                    <strong> security and compliance solutions</strong> that
                    safeguard your business operations across Riyadh and Saudi
                    Arabia. Our proven process ensures compliance frameworks
                    align with your regulatory requirements, mitigate risks, and
                    adapt to evolving security challenges.
                  </p>
                  <p>
                    We develop robust policies and systems to protect sensitive
                    data, manage risks, and maintain governance, empowering your
                    teams with confidence and regulatory assurance customized
                    for your unique environment.
                  </p>

                  <div className="heroBtn mt-3">
                    <Link
                      to="/contact-us"
                      className="d-flex justify-content-between"
                    >
                      <div className="btnText px-3 py-3 text-light">
                        <span>Security Consultation</span>
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
                    <strong>Risk Assessment and Compliance Review:</strong> We
                    start by identifying security risks and reviewing regulatory
                    requirements specific to your business.
                  </li>
                  <li>
                    <strong>Policy Design and Implementation:</strong> Our
                    experts create customized security policies and controls to
                    address vulnerabilities and ensure compliance.
                  </li>
                  <li>
                    <strong>Security Testing and Audits:</strong> We conduct
                    thorough audits and penetration testing to validate the
                    effectiveness of controls.
                  </li>
                  <li>
                    <strong>Deployment and Integration:</strong> We integrate
                    security measures seamlessly into your existing
                    infrastructure and provide training for your staff.
                  </li>
                  <li>
                    <strong>
                      Continuous Monitoring and Compliance Management:
                    </strong>{" "}
                    Ongoing monitoring and updates ensure your security posture
                    evolves with emerging threats and regulations.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Security-First Enterprise Solutions with a Client-Centric Approach
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We build <b>long-term security partnerships</b> by delivering
              solutions that deeply align with your compliance goals. Our
              client-first mindset ensures transparent communication, regular
              updates, and active collaboration, so your business remains secure
              and compliant at every stage.
            </p>
          </Container>
        </section>

        <section className="pb-5 pt-2">
          <Container>
            <h2 className="fw-bold">
              Ready to Strengthen Your Business Security & Compliance?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Don’t compromise on security or compliance. Partner with ASVAYUK
              Technologies for customized solutions designed to protect your
              data, reduce risk, and ensure regulatory adherence. Contact us
              today to start securing your business future.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ComplianceServices;
