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
    title: "Banking Platform Strategy & Consultation",
    image: softdev1,
    alt: "Real estate software consultation in Saudi Arabia",
    content: (
      <>
        Get expert consultation to build scalable and secure digital banking
        platforms tailored for Saudi Arabia’s financial sector, ensuring
        compliance and customer satisfaction.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Mobile Banking App Development",
    image: softdev2,
    alt: "Property listing app development",
    content: (
      <>
        Develop secure and user-friendly mobile banking apps with features like
        biometric login, transaction history, fund transfers, and real-time
        notifications.
      </>
    ),
  },
  {
    id: "3",
    title: "Insurance Policy Management Portals",
    image: softdev3,
    alt: "Virtual real estate tour development",
    content: (
      <>
        Create digital insurance portals for policy purchase, claims tracking,
        premium payment, and customer service automation with a seamless user
        experience.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Driven Risk Assessment Tools",
    image: softdev4,
    alt: "AI real estate solutions",
    content: (
      <>
        Integrate AI to automate underwriting, fraud detection, and credit
        scoring by analyzing customer data and transaction patterns in
        real-time.
      </>
    ),
  },
  {
    id: "5",
    title: "CRM & Automation for Banks and Insurers",
    image: softdev5,
    alt: "Real estate CRM development",
    content: (
      <>
        Implement CRM solutions to automate client onboarding, lead nurturing,
        follow-ups, and personalized communication across banking and insurance
        channels.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integrations with Core Banking & Insurance Systems",
    image: softdev6,
    alt: "MLS integration for real estate apps",
    content: (
      <>
        Connect with core banking systems, payment gateways, insurance
        databases, and third-party APIs to deliver seamless and secure service
        experiences.
      </>
    ),
  },
  {
    id: "7",
    title: "Ongoing Support & Compliance Maintenance",
    image: softdev7,
    alt: "Real estate app maintenance",
    content: (
      <>
        Maintain peak performance of your fintech solutions with regular
        updates, bug fixes, cybersecurity checks, and compliance with Saudi
        regulatory standards.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Banking Strategy Saudi Arabia",
    title: "Banking Software Strategy",
    desc: "Plan robust digital strategies tailored for the banking and insurance sector in Saudi Arabia, ensuring compliance and innovation.",
  },
  {
    img: c12,
    alt: "Banking App Development",
    title: "Banking & Insurance App Development",
    desc: "Create secure, intuitive apps that support digital transactions, policy management, and customer self-service.",
  },
  {
    img: c13,
    alt: "Digital KYC Saudi Arabia",
    title: "Digital Onboarding & eKYC",
    desc: "Simplify customer registration with compliant eKYC, identity verification, and onboarding solutions built for fintech.",
  },
  {
    img: c11,
    alt: "AI in Banking",
    title: "AI for Fraud Detection & Insights",
    desc: "Use AI-driven analytics to detect suspicious activities, recommend services, and improve financial decision-making.",
  },
  {
    img: c12,
    alt: "Financial CRM Software",
    title: "CRM for Financial Institutions",
    desc: "Enhance customer relationships and automate key workflows with specialized CRM systems for banks and insurers.",
  },
  {
    img: c13,
    alt: "Banking Software Maintenance",
    title: "Software Security & Compliance",
    desc: "Maintain your systems with secure, regulation-compliant updates and continuous technical support in Saudi Arabia.",
  },
];

const BankingInsurance = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Banking & Insurance Software Solutions in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies delivers custom banking and insurance software solutions in Saudi Arabia, including secure fintech apps, digital onboarding, CRM systems, and API integrations."
        canonical="https://asvayuktech.com/banking-insurance-software-solutions-saudi-arabia"
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
                      Banking & Insurance Software Solutions in Riyadh, Saudi
                      Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers advanced
                    banking and insurance software solutions in Riyadh, Saudi
                    Arabia. We empower financial institutions and insurers with
                    customized digital platforms that enhance customer
                    engagement, ensure regulatory compliance, and streamline
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
                    alt="Banking & Insurance Software Solutions in Riyadh"
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
                Why Choose Our Banking & Insurance Software Development Services
                in Riyadh?
              </h1>
              <p>
                ASVAYUK Technologies offers innovative banking and insurance app
                and portal development tailored for the dynamic financial sector
                in Saudi Arabia. Here&#39;s why leading institutions trust us:
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
                      alt="Custom Banking App Development Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Bespoke Banking Applications Aligned with Business Goals
                    </h6>
                    <p className="mb-0 text-muted">
                      We design and develop user-centric banking applications
                      tailored to your business requirements, optimizing
                      customer onboarding, transaction management, and service
                      delivery.
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
                      alt="End-to-End Insurance App Solutions Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Comprehensive Insurance App Development Lifecycle
                    </h6>
                    <p className="mb-0 text-muted">
                      From planning and design to deployment and maintenance, we
                      deliver secure and scalable insurance technology solutions
                      that simplify policy management and claims processing.
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
                      alt="Financial Technology Consulting Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Strategic Technology Solutions for Financial Growth
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze the financial services landscape in Saudi
                      Arabia to create digital strategies that increase ROI,
                      customer satisfaction, and operational efficiency.
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
                      alt="Experienced Fintech App Developers Riyadh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Skilled Fintech Developers & Tech Experts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our experienced team brings deep technical know-how and
                      financial industry expertise to deliver digital platforms
                      that drive success in Riyadh&#39;s banking and insurance
                      sectors.
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
            Banking & Insurance Software Development Services in Riyadh
          </h1>
          <p className="app__subhead mb-5 fs-5">
            At ASVAYUK Technologies, we specialize in banking and insurance
            software development services tailored for the dynamic financial
            market of Riyadh, Saudi Arabia. From intelligent loan management
            systems and customer portals to CRM integration and workflow
            automation, our end-to-end solutions streamline operations and
            enhance the customer experience. Partner with us to build scalable,
            future-ready platforms that align with your business goals.
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
                Our Key Banking & Insurance Software Development Services
              </h2>
              <p>
                ASVAYUK Technologies delivers secure and scalable software
                solutions to enhance banking and insurance operations in Saudi
                Arabia. Whether you need core banking systems, digital insurance
                platforms, or AI-based fraud detection tools, our team builds
                custom solutions to streamline workflows, improve customer
                experiences, and ensure compliance with local financial
                regulations.
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
                    Ready to Transform Your Banking & Insurance Operations?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Partner with ASVAYUK Technologies to develop powerful
                    digital solutions for banks and insurance providers in Saudi
                    Arabia. Improve service delivery, enhance data security, and
                    lead the financial sector with smart, compliant, and
                    future-ready software.
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
                WHY BANKING & INSURANCE SOFTWARE SOLUTIONS MATTER{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                The financial sector in Saudi Arabia is rapidly evolving with
                the integration of fintech and insurtech. Custom software
                solutions enable banks and insurance companies to offer seamless
                digital services, meet compliance standards, detect fraud in
                real-time, and deliver personalized financial experiences for
                customers.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Banking App Development Saudi Arabia">
                      Offers secure mobile and web banking solutions for
                      customers
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Insurance Software Saudi Arabia">
                      Automates policy management, claims processing, and
                      renewals
                    </a>
                  </li>
                  <li>
                    <a href="#" title="AI Fraud Detection Tools">
                      Utilizes AI and ML to detect and prevent financial fraud
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="RegTech and Compliance Solutions">
                      Ensures full compliance with Saudi banking and insurance
                      laws
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Digital Transformation for Banks in KSA">
                      Drives digital transformation for modern banking and
                      insurance
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
                    Our Banking & Insurance Software Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we create robust{" "}
                    <strong>banking and insurance software solutions</strong>{" "}
                    tailored for financial institutions across Saudi Arabia. Our
                    streamlined process ensures regulatory compliance,
                    operational efficiency, and secure user experiences.
                  </p>
                  <p>
                    From mobile banking apps and customer onboarding portals to
                    claims management systems and AI-powered analytics, we
                    deliver end-to-end platforms that improve trust and drive
                    digital transformation.
                  </p>

                  <div className=" mt-3">
                   <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Requirement Analysis:</strong> Identify your
                    financial goals, customer needs, and compliance standards to
                    shape the right tech architecture.
                  </li>
                  <li>
                    <strong>Design and Prototyping:</strong> Create intuitive,
                    secure, and user-friendly designs tailored for banking and
                    insurance workflows.
                  </li>
                  <li>
                    <strong>Development and Integration:</strong> Build core
                    features like transaction modules, claims processing, user
                    verification, and API integrations.
                  </li>
                  <li>
                    <strong>Quality Testing:</strong> Perform rigorous security
                    checks, load testing, and usability audits across devices.
                  </li>
                  <li>
                    <strong>Post-Launch Support:</strong> Ensure system
                    stability, regular updates, and tech support for seamless
                    business continuity.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Financial Software Solutions for Scalability and Compliance
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop <b>secure, scalable fintech and insurtech platforms</b>{" "}
              to support banking, insurance, and financial service providers in
              Saudi Arabia. Our solutions focus on automation, fraud detection,
              data insights, and customer engagement.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Elevate Your Financial Services with Technology?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              ASVAYUK Technologies can help you build future-ready banking or
              insurance platforms featuring biometric login, AI claims
              management, smart loan processing, and real-time risk analytics.
              Transform your operations in Saudi Arabia with powerful digital
              solutions.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default BankingInsurance;
