import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/bankImage.png";
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
    title: "Healthcare Software Strategy & Consultation",
    image: softdev1,
    alt: "Healthcare software consultation in Saudi Arabia",
    content: (
      <>
        Expert consultation to design scalable, secure healthcare software
        solutions tailored for Riyadh’s medical sector, ensuring compliance with
        health regulations and patient satisfaction.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Mobile Health App Development",
    image: softdev2,
    alt: "Mobile health app development",
    content: (
      <>
        Develop user-friendly mobile health applications featuring appointment
        booking, telemedicine, health records access, and real-time alerts.
      </>
    ),
  },
  {
    id: "3",
    title: "Patient Portal & Electronic Health Records (EHR)",
    image: softdev3,
    alt: "Patient portal and EHR development",
    content: (
      <>
        Create secure patient portals for appointment scheduling, medical
        history management, test results, and communication with healthcare
        providers.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Diagnostic & Monitoring Tools",
    image: softdev4,
    alt: "AI healthcare solutions",
    content: (
      <>
        Integrate AI for diagnostics, predictive analytics, patient monitoring,
        and personalized treatment plans using real-time health data.
      </>
    ),
  },
  {
    id: "5",
    title: "CRM & Automation for Healthcare Providers",
    image: softdev5,
    alt: "Healthcare CRM development",
    content: (
      <>
        Implement CRM systems to automate patient onboarding, appointment
        reminders, follow-ups, and personalized healthcare communications.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integrations with Health Systems & Devices",
    image: softdev6,
    alt: "Healthcare system and device integration",
    content: (
      <>
        Seamlessly connect electronic health records, medical devices, lab
        systems, and third-party health APIs for unified healthcare management.
      </>
    ),
  },
  {
    id: "7",
    title: "Ongoing Support & Healthcare Compliance",
    image: softdev7,
    alt: "Healthcare software maintenance and compliance",
    content: (
      <>
        Provide continuous maintenance, cybersecurity, software updates, and
        ensure adherence to Saudi healthcare regulations and data privacy laws.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Healthcare Strategy Saudi Arabia",
    title: "Healthcare Software Strategy",
    desc: "Plan robust digital strategies tailored for healthcare providers in Saudi Arabia, ensuring compliance and innovation.",
  },
  {
    img: c12,
    alt: "Healthcare App Development",
    title: "Healthcare App Development",
    desc: "Create secure, intuitive apps that support patient management, telemedicine, and health record access.",
  },
  {
    img: c13,
    alt: "Digital Patient Onboarding Saudi Arabia",
    title: "Digital Patient Onboarding & eKYC",
    desc: "Simplify patient registration with compliant eKYC, identity verification, and onboarding solutions built for healthcare.",
  },
  {
    img: c11,
    alt: "AI in Healthcare",
    title: "AI for Diagnostics & Insights",
    desc: "Use AI-driven analytics to support diagnostics, monitor patient health, and personalize treatment plans.",
  },
  {
    img: c12,
    alt: "Healthcare CRM Software",
    title: "CRM for Healthcare Providers",
    desc: "Enhance patient relationships and automate key workflows with specialized CRM systems for clinics and hospitals.",
  },
  {
    img: c13,
    alt: "Healthcare Software Maintenance",
    title: "Software Security & Compliance",
    desc: "Maintain your healthcare systems with secure, regulation-compliant updates and continuous technical support in Saudi Arabia.",
  },
];

const HealthcareSoftware = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Healthcare Software Development in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies delivers custom healthcare software development services in Saudi Arabia, including telemedicine platforms, EHR systems, patient engagement apps, and secure data integration."
        canonical="https://asvayuktech.com/healthcare-software-development-in-riyadh-saudi-arabia"
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
                      Healthcare Software Solutions in Riyadh, Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers advanced
                    healthcare software solutions in Riyadh, Saudi Arabia. We
                    empower hospitals, clinics, and healthcare providers with
                    tailored digital platforms that enhance patient care, ensure
                    regulatory compliance, and optimize operational workflows.
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
                    alt="Healthcare Software Solutions in Riyadh"
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
                Why Choose Our Healthcare Software Development Services in
                Riyadh?
              </h1>
              <p>
                ASVAYUK Technologies offers innovative healthcare app and
                platform development tailored for the evolving medical sector in
                Saudi Arabia. Here&#39;s why top providers trust us:
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
                      alt="Custom Healthcare App Development Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Tailored Healthcare Applications Focused on Patient Care
                    </h6>
                    <p className="mb-0 text-muted">
                      We design and develop patient-centric healthcare
                      applications customized to your operational needs,
                      improving patient management, appointment scheduling, and
                      telemedicine services.
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
                      alt="Comprehensive Hospital Software Solutions Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End Hospital Management Software Development
                    </h6>
                    <p className="mb-0 text-muted">
                      From design to deployment, we create secure, scalable
                      hospital management systems that streamline patient
                      records, billing, inventory, and staff coordination.
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
                      alt="Healthcare IT Consulting Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Strategic Healthcare IT Solutions for Medical Excellence
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze the healthcare landscape in Saudi Arabia to
                      craft IT strategies that boost operational efficiency,
                      patient satisfaction, and regulatory compliance.
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
                      alt="Experienced Healthcare Software Developers Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Skilled Healthcare Software Developers & Medical IT
                      Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our team combines deep technical expertise with healthcare
                      domain knowledge to deliver solutions that improve care
                      delivery in Riyadh&#39;s hospitals and clinics.
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
            Healthcare Software Development Services in Riyadh
          </h1>
          <p className="app__subhead mb-5 fs-5">
            At ASVAYUK Technologies, we specialize in healthcare software
            development services customized for the growing medical market in
            Riyadh, Saudi Arabia. From electronic health records (EHR) and
            telehealth platforms to patient engagement systems and workflow
            automation, our comprehensive solutions enhance clinical operations
            and patient outcomes. Partner with us to build scalable, secure, and
            future-ready healthcare software that fits your needs.
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
                Our Key Healthcare Software Development Services
              </h2>
              <p>
                ASVAYUK Technologies delivers cutting-edge software solutions to
                empower healthcare providers across Riyadh and Saudi Arabia.
                Whether you need custom EMR/EHR systems, AI-powered diagnostics,
                or mobile apps for patients and practitioners, we have the
                expertise to bring your digital vision to life. Enhance patient
                care, streamline operations, and gain a competitive edge in the
                evolving healthcare landscape.
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
                    Ready to Build Smart Healthcare Software Solutions?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Partner with ASVAYUK Technologies to create custom
                    healthcare platforms that improve patient outcomes, automate
                    workflows, and elevate healthcare experiences across Riyadh
                    and Saudi Arabia.
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
                WHY HEALTHCARE TECH SOLUTIONS MATTER{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Healthcare technology is revolutionizing how providers,
                patients, and administrators interact. With tailored software
                solutions, your healthcare organization in Riyadh can enhance
                patient care, streamline workflows, and stay ahead in a
                competitive market.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Healthcare App Development Riyadh">
                      Enhances patient engagement with smart scheduling and
                      telehealth features
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Electronic Medical Records Saudi Arabia">
                      Automates medical record keeping, billing, and compliance
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom Healthcare Platforms">
                      Delivers personalized care plans and real-time patient
                      monitoring
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Healthcare CRM Integration">
                      Integrates CRM, analytics, and patient communication
                      systems
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Saudi Arabia Healthcare Tech">
                      Drives innovation through digital transformation in
                      healthcare
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
                    Our Healthcare Software Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we provide scalable{" "}
                    <strong>healthcare tech solutions</strong> for hospitals,
                    clinics, and health organizations in Saudi Arabia. Our
                    structured process ensures seamless implementation,
                    regulatory compliance, and user-friendly interfaces.
                  </p>
                  <p>
                    From patient portals and telemedicine platforms to secure
                    data management and mobile access, we deliver end-to-end
                    solutions that enhance care delivery and operational
                    efficiency.
                  </p>

                  
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Analysis:</strong> Understand your
                    healthcare needs, target users, and regulatory requirements
                    to map a custom strategy.
                  </li>
                  <li>
                    <strong>Design and Prototyping:</strong> Build intuitive
                    UI/UX focused on patient journeys and clinician workflows.
                  </li>
                  <li>
                    <strong>Development and Integration:</strong> Implement
                    patient portals, EMR/EHR, telehealth, and secure payment
                    modules.
                  </li>
                  <li>
                    <strong>Quality Testing:</strong> Ensure HIPAA compliance,
                    cross-device compatibility, and performance before final
                    deployment.
                  </li>
                  <li>
                    <strong>Post-Launch Support:</strong> Provide ongoing
                    updates, enhancements, and technical support for sustainable
                    growth.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Healthcare Apps Designed for Performance and Growth
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We build <b>customizable, user-centric healthcare platforms</b>{" "}
              that serve patients, providers, and administrators in Riyadh and
              beyond. Our applications focus on engagement, secure data
              handling, and automation to help you lead the digital healthcare
              market in Saudi Arabia.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Digitize Your Healthcare Business?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies help you build a powerful healthcare
              platform with advanced features like telemedicine, AI diagnostics,
              and patient engagement tools. Whether you&#39;re a hospital, clinic,
              or health service provider, we tailor tech-driven solutions that
              elevate your operations in Riyadh, Saudi Arabia.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default HealthcareSoftware;
