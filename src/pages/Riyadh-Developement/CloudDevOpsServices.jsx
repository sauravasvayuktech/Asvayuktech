import { Col, Container, Nav, Row, Tab, Image } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/devopsImage.png";
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

const services = [
  {
    id: "1",
    title: "Cloud Strategy & Consulting",
    image: softdev1,
    alt: "Cloud strategy consulting services in Saudi Arabia",
    content: (
      <>
        We help organizations in Saudi Arabia define and implement effective
        cloud strategies aligned with business objectives. From choosing the
        right cloud platform to planning migration, our experts guide your
        journey end to end.
      </>
    ),
  },
  {
    id: "2",
    title: "DevOps Implementation",
    image: softdev2,
    content: (
      <>
        Accelerate software delivery with our DevOps services. We automate CI/CD
        pipelines, infrastructure provisioning, and testing processes to ensure
        faster, more reliable releases.
      </>
    ),
  },
  {
    id: "3",
    title: "Cloud Migration Services",
    image: softdev3,
    content: (
      <>
        Seamlessly move your infrastructure, applications, and data to the
        cloud. Our cloud migration services reduce downtime and ensure secure,
        cost-effective transitions to AWS, Azure, or Google Cloud.
      </>
    ),
  },
  {
    id: "4",
    title: "Infrastructure as Code (IaC)",
    image: softdev4,
    content: (
      <>
        Implement modern infrastructure management with tools like Terraform and
        AWS CloudFormation. We enable scalable, repeatable, and
        version-controlled infrastructure setups.
      </>
    ),
  },
  {
    id: "5",
    title: "Cloud Monitoring & Optimization",
    image: softdev5,
    content: (
      <>
        Gain real-time visibility into cloud performance and resource usage. We
        help monitor, optimize, and secure your cloud infrastructure for maximum
        efficiency and cost control.
      </>
    ),
  },
  {
    id: "6",
    title: "Containerization & Orchestration",
    image: softdev6,
    content: (
      <>
        Adopt Docker and Kubernetes to enhance application portability,
        scalability, and resilience. We design and deploy container-based
        architectures tailored to your business needs.
      </>
    ),
  },
  {
    id: "7",
    title: "Cloud Security & Compliance",
    image: softdev7,
    content: (
      <>
        Secure your cloud environment with built-in compliance and governance.
        We implement robust security protocols, identity management, and data
        protection best practices.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Cloud Strategy & Planning",
    title: "Cloud Strategy & Planning",
    desc: "Craft a customized cloud adoption roadmap that aligns with your business goals, ensuring scalability, security, and cost-efficiency from the start.",
  },
  {
    img: c12,
    alt: "Cloud Migration Services",
    title: "Zero-Downtime Cloud Migration",
    desc: "Move applications and infrastructure to the cloud seamlessly with minimal disruption, leveraging proven migration tools and practices.",
  },
  {
    img: c13,
    alt: "DevOps CI/CD Pipelines",
    title: "CI/CD Pipeline Automation",
    desc: "Accelerate development cycles with automated CI/CD pipelines that ensure faster deployments, quality assurance, and rollback capabilities.",
  },
  {
    img: c11,
    alt: "Infrastructure as Code (IaC)",
    title: "Infrastructure as Code (IaC)",
    desc: "Automate infrastructure provisioning and management using tools like Terraform, enabling consistent and version-controlled environments.",
  },
  {
    img: c12,
    alt: "Cloud Cost Optimization",
    title: "Cloud Cost Optimization",
    desc: "Reduce cloud spend through detailed monitoring, right-sizing, and intelligent resource allocation to ensure maximum ROI.",
  },
  {
    img: c13,
    alt: "Cloud Security Services",
    title: "Cloud Security & Compliance",
    desc: "Implement robust security controls, identity management, and compliance frameworks to protect your cloud-native environment.",
  },
];

const trustedStats = [
  { number: "1", label: "Boost customer engagement and loyalty effectively." },
  { number: "2", label: "Streamline and optimize business workflows." },
  { number: "3", label: "Offer seamless on-demand and delivery options." },
  {
    number: "4",
    label:
      "Reach a global audience through versatile cross-platform solutions.",
  },
];

const CloudDevOpsServices = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Cloud & DevOps Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies provides expert Cloud and DevOps services in Saudi Arabia, helping businesses accelerate deployment, improve scalability, and reduce operational costs."
        canonical="https://asvayuktech.com/cloud-devops-services-in-saudi-arabia"
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
                      Cloud & DevOps Services Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> helps businesses
                    across Saudi Arabia accelerate their digital growth with
                    expert Cloud and DevOps solutions. From cloud migration to
                    CI/CD pipelines, we ensure faster deployments, improved
                    performance, and cost-effective operations.
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
                    alt="Cloud and DevOps Company in Saudi Arabia"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* Trusted Section */}
        <section className="trusted-wrapper">
          <Container>
            <div className="trustedContent-wrapper">
              <h2 className="mb-4">
                Why Your Business Needs Cloud and DevOps
                <br />
                for Modern Growth and Efficiency
              </h2>
              <p>
                Embracing Cloud and DevOps is vital for businesses looking to
                accelerate innovation, improve scalability, and streamline
                operations. Effective cloud adoption combined with DevOps
                practices can:
              </p>

              <Row className="trustedContent-Row">
                {trustedStats.map((item, idx) => (
                  <Col className="mb-3" lg={3} key={idx}>
                    <div className="trustedDiv-wrapper">
                      <div className="trustedDiv-first">
                        <span>{item.number}</span>
                      </div>
                      <div className="trustedDiv-second">
                        <h5>{item.label}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        {/* Intro Text Section */}
        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Cloud & DevOps Solutions Tailored for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            Our Cloud and DevOps services are designed to help companies in
            Saudi Arabia streamline operations, improve scalability, and launch
            products faster. Whether you&#39;re modernizing infrastructure or
            automating deployment, ASVAYUK Technologies delivers reliable,
            secure, and agile solutions for your business growth.
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

        <section
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
                    <span className="grdnt_clr">Empower Your </span>Cloud
                    Transformation
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Reduce Infrastructure Costs by Up to 60%</h3>
                    </li>
                    <li>
                      <h3>Deploy Applications 2x Faster with CI/CD</h3>
                    </li>
                    <li>
                      <h3>Achieve 99.99% Uptime with Cloud Reliability</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Tailored Digital Solutions That Drive Impact
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              At ASVAYUK Technologies, we build{" "}
              <strong>long-lasting partnerships</strong> by delivering
              customized digital solutions that align seamlessly with your
              business strategy. With transparent collaboration and ongoing
              support, we ensure your objectives remain our top priority every
              step of the way.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">Start Your Digital Evolution Today</h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Outdated systems slow you down. Embrace digital innovation with
              ASVAYUK Technologies to streamline operations, enhance agility,
              and accelerate growth. Reach out now to transform your vision into
              a scalable, future-ready solution.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default CloudDevOpsServices;
