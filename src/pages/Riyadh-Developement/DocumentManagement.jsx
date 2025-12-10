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
    title: "DMS Strategy & Consultation",
    image: softdev1,
    alt: "Document management system consulting",
    content: (
      <>
        Our DMS experts craft tailored strategies to help you digitize,
        organize, and secure your documents while aligning with compliance and
        operational needs.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Document Management System Development",
    image: softdev2,
    content: (
      <>
        Develop scalable, feature-rich DMS platforms that support document
        indexing, search, collaboration, and secure access across departments.
      </>
    ),
  },
  {
    id: "3",
    title: "User-Friendly Document Portals",
    image: softdev3,
    content: (
      <>
        Empower your teams with intuitive portals for uploading, sharing,
        versioning, and retrieving business-critical documents efficiently.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Document Analysis & Insights",
    image: softdev4,
    content: (
      <>
        Leverage AI to classify documents, extract metadata, and generate
        actionable insights for better document lifecycle management.
      </>
    ),
  },
  {
    id: "5",
    title: "Automation in Document Workflow & Reporting",
    image: softdev5,
    content: (
      <>
        Automate document approvals, routing, and compliance reporting to boost
        productivity and maintain regulatory standards.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for Document Ecosystems",
    image: softdev6,
    content: (
      <>
        Seamlessly integrate with third-party tools like CRMs, ERPs, e-signature
        platforms, and cloud storage services for end-to-end DMS efficiency.
      </>
    ),
  },
  {
    id: "7",
    title: "DMS Performance Optimization & Scalability",
    image: softdev7,
    content: (
      <>
        Ensure fast document retrieval, robust security, and scalable storage
        with regular system updates and monitoring practices.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "DMS Strategy & Planning",
    title: "DMS Strategy & Planning",
    desc: "Design a structured plan to digitize document workflows, enhance data accessibility, and meet compliance needs.",
  },
  {
    img: c12,
    alt: "DMS Software Development",
    title: "Custom Document Management System Development",
    desc: "Build a centralized platform for secure document handling, searchability, collaboration, and lifecycle control.",
  },
  {
    img: c13,
    alt: "Document Portals",
    title: "User-Friendly Document Portals",
    desc: "Launch user-centric portals that allow easy document upload, retrieval, version tracking, and permission control.",
  },
  {
    img: c11,
    alt: "Document Analytics & AI",
    title: "AI-Powered Document Analysis & Insights",
    desc: "Utilize AI to automate document classification, content extraction, and gain valuable operational insights.",
  },
  {
    img: c12,
    alt: "Workflow Automation & Reporting",
    title: "Automation in Document Workflow & Reporting",
    desc: "Improve process efficiency by automating document workflows, approval chains, and compliance documentation.",
  },
  {
    img: c13,
    alt: "DMS Optimization & Maintenance",
    title: "DMS Performance Optimization & Scalability",
    desc: "Enhance system reliability and speed with proactive maintenance, updates, and performance tuning.",
  },
];

const DocumentManagement = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Document Management Systems (DMS) | ASVAYUK Technologies"
        description="ASVAYUK Technologies delivers advanced Document Management Systems (DMS) in Saudi Arabia. We offer secure document storage, intelligent retrieval, workflow automation, and regulatory compliance solutions."
        canonical="https://asvayuktech.com/document-management-systems-in-riyadh-saudi-arabia"
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
                      Document Management Systems Provider in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> offers intelligent
                    Document Management Systems (DMS) to streamline document
                    storage, retrieval, and collaboration for organizations
                    across Saudi Arabia.
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
                    alt="Document Management Systems Provider in Saudi Arabia"
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
                Why Choose Our Document Management Systems in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we build secure, scalable DMS solutions
                tailored to Saudi Arabian businesses, ensuring seamless document
                workflows, enhanced compliance, and improved productivity.
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
                      alt="Custom DMS Solutions Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Tailored Document Solutions for Your Organization
                    </h6>
                    <p className="mb-0 text-muted">
                      We create custom DMS platforms that align with your
                      internal processes, ensuring efficient document indexing,
                      sharing, and retrieval across departments.
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
                      alt="Real-Time Document Access Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Real-Time Access & Version Control
                    </h6>
                    <p className="mb-0 text-muted">
                      Our systems offer real-time document access, smart
                      notifications, and version history to maintain accuracy,
                      reduce duplication, and support collaboration.
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
                      alt="Automated Document Workflows Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Automation & Intelligent Workflow Management
                    </h6>
                    <p className="mb-0 text-muted">
                      Our DMS integrates automation tools and analytics to
                      streamline document workflows, reduce manual tasks, and
                      support data-driven decisions.
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
                      alt="Experienced DMS Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Expert Developers & UI Designers for DMS Solutions
                    </h6>
                    <p className="mb-0 text-muted">
                      Our skilled team blends document management expertise with
                      elegant UI/UX design, delivering powerful, user-friendly
                      platforms for managing business documents.
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
            Document Management Systems (DMS) in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies provides comprehensive document management
            software solutions tailored for businesses in Saudi Arabia. Our
            smart DMS platforms help streamline document workflows, ensure
            secure storage, and enhance collaboration, improving productivity
            and compliance.
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
                Our Core Document Management System Solutions
              </h2>
              <p>
                At ASVAYUK Technologies, we specialize in delivering secure and
                scalable document management systems designed for businesses in
                Saudi Arabia. Our solutions include digital archiving, version
                control, workflow automation, and audit trails to help you
                maintain regulatory compliance and boost operational efficiency.
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
                    Ready to Build an Advanced Document Management System?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Partner with ASVAYUK Technologies today. Our expert
                    development team will collaborate with you to deliver a
                    customized document management solution that ensures secure
                    storage, seamless collaboration, and efficient workflow
                    automation, perfectly suited for businesses across Saudi
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
                WHY DOCUMENT MANAGEMENT SYSTEMS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  MATTER FOR YOUR BUSINESS
                </span>
              </h1>
              <p className="powered_php pt-3">
                Document management systems transform how organizations capture,
                store, and share important files. With tailored DMS solutions,
                you enhance security, improve collaboration, and ensure
                compliance, driving business efficiency forward.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Secure Document Storage">
                      Provides secure digital storage with role-based access
                      control
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Workflow Automation">
                      Automates document approval workflows to speed up business
                      processes
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Version Control & Audit Trails">
                      Maintains version history and detailed audit logs for
                      compliance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Collaboration Tools">
                      Enables real-time collaboration and easy file sharing
                      across teams
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable DMS Solutions">
                      Scales with your organization while safeguarding your
                      critical documents
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
                    Our Document Management System Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in custom{" "}
                    <strong>Document Management system development</strong> for
                    organizations of all sizes. Our approach ensures your
                    platform is secure, user-friendly, and scalable.
                  </p>
                  <p>
                    From secure document storage and version control to workflow
                    automation and compliance tracking, we build solutions that
                    empower your document handling and collaboration.
                  </p>

                  <div className=" mt-3 w-100">
                   <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Needs Assessment:</strong> We evaluate your document
                    workflows, security needs, and compliance requirements to
                    design a tailored system.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our team creates intuitive
                    interfaces for easy document access and management across
                    devices.
                  </li>
                  <li>
                    <strong>Development and Modules:</strong> We build features
                    like secure storage, version control, workflow automation,
                    and audit trails.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> Comprehensive testing
                    guarantees reliability, security, and seamless deployment.
                  </li>
                  <li>
                    <strong>Ongoing Support:</strong> We provide regular updates
                    and maintenance to ensure your document system remains
                    efficient and compliant.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Software Built for Secure Document Control and Seamless
              Collaboration
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop <b>robust, scalable Document Management systems</b>{" "}
              designed to enhance document security, improve collaboration, and
              automate workflows. Our solutions streamline document handling and
              compliance management.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Streamline Your Document Management?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Partner with ASVAYUK Technologies to build a comprehensive
              Document Management solution. Whether you manage small teams or
              large enterprises, we help you secure, organize, and automate your
              documents effectively.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default DocumentManagement;
