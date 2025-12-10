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
    title: "Cloud Architecture Design & Deployment",
    image: softdev1,
    alt: "Cloud architecture design services AWS Azure GCP",
    content: (
      <>
        Design and deploy scalable, secure, and cost-effective cloud
        architectures tailored to your business needs using AWS, Azure, and GCP.
      </>
    ),
  },
  {
    id: "2",
    title: "Multi-Cloud Integration & Migration",
    image: softdev2,
    alt: "Multi-cloud integration and migration services",
    content: (
      <>
        Seamlessly integrate and migrate your existing infrastructure to
        multiple cloud platforms ensuring minimal downtime and optimized
        performance.
      </>
    ),
  },
  {
    id: "3",
    title: "Cloud Security & Compliance",
    image: softdev3,
    alt: "Cloud security and compliance services",
    content: (
      <>
        Implement robust cloud security measures and compliance standards to
        protect your data and applications on AWS, Azure, and GCP.
      </>
    ),
  },
  {
    id: "4",
    title: "Cloud Automation & DevOps",
    image: softdev4,
    alt: "Cloud automation and DevOps services",
    content: (
      <>
        Automate your cloud workflows and streamline deployments using DevOps
        best practices and tools across major cloud providers.
      </>
    ),
  },
  {
    id: "5",
    title: "Cloud Monitoring & Optimization",
    image: softdev5,
    alt: "Cloud monitoring and cost optimization services",
    content: (
      <>
        Monitor cloud infrastructure health and optimize resource usage to
        reduce costs and improve efficiency.
      </>
    ),
  },
  {
    id: "6",
    title: "Disaster Recovery & Backup Solutions",
    image: softdev6,
    alt: "Cloud disaster recovery and backup services",
    content: (
      <>
        Implement reliable disaster recovery and backup strategies to ensure
        business continuity and data resilience in the cloud.
      </>
    ),
  },
  {
    id: "7",
    title: "Cloud Consulting & Strategy",
    image: softdev7,
    alt: "Cloud consulting and strategy services",
    content: (
      <>
        Get expert consulting to plan your cloud adoption strategy, optimize
        cloud spend, and align cloud solutions with your business goals.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Cloud Architecture Design AWS Azure GCP",
    title: "Custom Cloud Architecture",
    desc: "Build scalable and secure cloud infrastructure tailored to your business requirements on AWS, Azure, or GCP.",
  },
  {
    img: c12,
    alt: "Multi-Cloud Integration Services",
    title: "Multi-Cloud Integration",
    desc: "Integrate services across multiple cloud providers to maximize flexibility and minimize vendor lock-in.",
  },
  {
    img: c13,
    alt: "Cloud Security & Compliance",
    title: "Cloud Security & Compliance",
    desc: "Ensure your cloud environments comply with industry standards and safeguard your data with advanced security practices.",
  },
  {
    img: c11,
    alt: "Cloud Automation and DevOps",
    title: "Cloud Automation & DevOps",
    desc: "Automate deployments and manage infrastructure efficiently with cloud-native DevOps tools and pipelines.",
  },
  {
    img: c12,
    alt: "Cloud Monitoring and Cost Optimization",
    title: "Monitoring & Cost Optimization",
    desc: "Track cloud resource utilization and optimize your cloud spend while maintaining performance and reliability.",
  },
  {
    img: c13,
    alt: "Disaster Recovery & Backup Solutions",
    title: "Disaster Recovery & Backup",
    desc: "Implement backup and recovery plans to protect your business-critical data and applications in the cloud.",
  },
];

const CloudSolutions = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Cloud Solutions (AWS, Azure, GCP) | ASVAYUK Technologies"
        description="Leverage scalable and secure cloud solutions with ASVAYUK Technologies in Saudi Arabia. We specialize in AWS, Azure, and GCP cloud architecture, migration, and management services."
        canonical="https://asvayuktech.com/cloud-solutions-in-riyadh-saudi-arabia"
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
                      Cloud Solutions (AWS, Azure, GCP) | ASVAYUK Technologies
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers expert cloud
                    computing services across Saudi Arabia, providing scalable,
                    secure, and cost-effective solutions on AWS, Microsoft
                    Azure, and Google Cloud Platform.
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
                    src={banners_39} // Replace this with a relevant cloud solutions banner image if available
                    alt="Cloud Solutions AWS Azure GCP"
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
                Why Choose Our Cloud Solutions Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we enable businesses to harness the
                power of cloud computing with customized AWS, Azure, and GCP
                solutions that improve agility, reduce costs, and ensure robust
                security compliance.
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
                      src={c11} // Replace with relevant AWS logo/icon if preferred
                      alt="Cloud Architecture & Design"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Cloud Architecture & Design
                    </h6>
                    <p className="mb-0 text-muted">
                      We architect scalable and resilient cloud infrastructures
                      tailored to your business needs using AWS, Azure, and GCP
                      platforms.
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
                      src={c12} // Replace with Azure logo/icon if preferred
                      alt="Cloud Migration Services"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">Cloud Migration Services</h6>
                    <p className="mb-0 text-muted">
                      Smooth and secure migration of your on-premises
                      infrastructure and applications to AWS, Azure, or GCP
                      cloud environments.
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
                      src={c14} // Replace with GCP logo/icon if preferred
                      alt="Cloud Security & Compliance"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Cloud Security & Compliance
                    </h6>
                    <p className="mb-0 text-muted">
                      Implement robust security practices and compliance
                      controls to protect your data and applications in the
                      cloud.
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
                      src={c13} // Replace with a cloud support/service icon if preferred
                      alt="Cloud Management & Optimization"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Cloud Management & Optimization
                    </h6>
                    <p className="mb-0 text-muted">
                      Ongoing cloud resource monitoring, cost optimization, and
                      managed services to maximize your cloud investments.
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
            Cloud Solutions for Businesses in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies empowers Saudi enterprises with secure and
            scalable cloud computing solutions on AWS, Azure, and GCP. Whether
            it’s cloud migration, architecture, or ongoing management, we help
            you innovate and transform your business.
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
              <h2 className="fw-bold">Our Cloud Solutions Offerings</h2>
              <p>
                ASVAYUK Technologies provides comprehensive cloud solutions that
                drive digital transformation, improve operational efficiency,
                and secure your infrastructure with leading cloud platforms:
                AWS, Azure, and GCP.
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
                    <span className="grdnt_clr">Transform </span>Your Business
                    with Scalable Cloud Solutions
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Leverage AWS, Azure, and GCP for Flexible Cloud
                        Infrastructure
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Optimize Costs & Performance with Expert Cloud
                        Management
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Ensure Secure, Reliable, and Compliant Cloud Deployments
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
                WHY CLOUD SOLUTIONS ARE ESSENTIAL{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  FOR BUSINESSES IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Companies in Saudi Arabia are adopting cloud technologies to
                drive innovation, improve agility, and scale operations
                efficiently. Cloud platforms like AWS, Azure, and GCP enable
                faster deployment, robust security, and cost-effective resource
                management tailored to business needs.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Cloud Infrastructure Setup Saudi Arabia">
                      Design and deploy scalable cloud infrastructure tailored
                      to your business requirements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Multi-Cloud Strategy & Migration Saudi Arabia"
                    >
                      Migrate workloads seamlessly and manage hybrid or
                      multi-cloud environments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Cloud Security & Compliance Saudi Arabia"
                    >
                      Implement comprehensive cloud security measures meeting
                      regulatory standards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Cloud Cost Optimization Saudi Arabia">
                      Optimize cloud spend with monitoring, automation, and best
                      practices
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Cloud DevOps & Automation Saudi Arabia">
                      Integrate CI/CD pipelines and automate cloud operations
                      for faster delivery
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
                    Our Cloud Solutions Delivery Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we offer end-to-end{" "}
                    <strong>cloud services</strong> to empower Saudi businesses
                    with reliable and efficient cloud infrastructure. Whether
                    you are starting your cloud journey or optimizing existing
                    environments, our experts guide you every step.
                  </p>
                  <p>
                    From assessment and design to migration, automation, and
                    ongoing support, we ensure your cloud environment delivers
                    performance, security, and scalability.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Request Cloud Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery & Requirement Analysis:</strong> Assessing
                    your current IT landscape and defining cloud goals.
                  </li>
                  <li>
                    <strong>Architecture & Design:</strong> Crafting cloud
                    architectures optimized for your workload, compliance, and
                    budget.
                  </li>
                  <li>
                    <strong>Migration & Deployment:</strong> Moving applications
                    and data securely with minimal disruption.
                  </li>
                  <li>
                    <strong>Automation & Optimization:</strong> Implementing
                    DevOps practices, monitoring, and cost management.
                  </li>
                  <li>
                    <strong>Support & Continuous Improvement:</strong> Proactive
                    cloud management and scaling aligned with your evolving
                    business needs.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Enterprise-Grade Cloud Solutions for Scalability & Innovation
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We partner with organizations to deliver{" "}
              <b>secure, scalable cloud platforms</b>
              using AWS, Azure, and GCP. Our solutions drive digital
              transformation, improve operational efficiency, and enable
              innovation to keep you competitive in a cloud-first world.
            </p>
          </Container>
        </section>

        <section className="pb-5 pt-2">
          <Container>
            <h2 className="fw-bold">
              Ready to Accelerate Your Cloud Journey with ASVAYUK Technologies?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let our cloud experts help you harness the full potential of AWS,
              Azure, and GCP for your business. Contact us today to design,
              deploy, and optimize your cloud infrastructure for lasting
              success.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default CloudSolutions;
