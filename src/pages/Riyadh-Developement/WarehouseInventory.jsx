import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/WarehouseInventoryImage.png";
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
    title: "Warehouse & Inventory Strategy & Consultation",
    image: softdev1,
    alt: "Warehouse and inventory management consulting",
    content: (
      <>
        Our warehouse management experts help you design a strategy aligned with
        your operational goals, focusing on inventory accuracy, space
        optimization, and seamless stock control.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Warehouse & Inventory Software Development",
    image: softdev2,
    content: (
      <>
        Develop scalable, feature-rich warehouse systems tailored for real-time
        inventory tracking, order fulfillment, and stock replenishment.
      </>
    ),
  },
  {
    id: "3",
    title: "User-Friendly Inventory Management Portals",
    image: softdev3,
    content: (
      <>
        Enhance warehouse staff efficiency with intuitive portals for inventory
        updates, order management, and shipment tracking.
      </>
    ),
  },
  {
    id: "4",
    title: "AI-Powered Stock Monitoring & Analytics",
    image: softdev4,
    content: (
      <>
        Use AI-driven tools to monitor stock levels, predict demand, and
        optimize warehouse space and resource allocation.
      </>
    ),
  },
  {
    id: "5",
    title: "Automation in Inventory Control & Reporting",
    image: softdev5,
    content: (
      <>
        Automate stock movements, alerts for low inventory, and generate
        detailed reports for better decision-making and compliance.
      </>
    ),
  },
  {
    id: "6",
    title: "API Integration for Supply Chain Systems",
    image: softdev6,
    content: (
      <>
        Integrate third-party APIs such as shipping carriers, ERP systems, and
        barcode scanners to streamline warehouse workflows.
      </>
    ),
  },
  {
    id: "7",
    title: "Warehouse Software Performance Optimization",
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
    alt: "Warehouse & Inventory Strategy & Planning",
    title: "Warehouse & Inventory Strategy & Planning",
    desc: "Create a comprehensive roadmap that supports accurate inventory management and efficient warehouse operations.",
  },
  {
    img: c12,
    alt: "Warehouse & Inventory Software Development",
    title: "Custom Warehouse & Inventory Software Development",
    desc: "Build a robust platform supporting real-time stock tracking, order management, and warehouse automation.",
  },
  {
    img: c13,
    alt: "Inventory Management Portals",
    title: "User-Friendly Inventory Management Portals",
    desc: "Deploy portals enabling staff to update inventory, manage orders, and track shipments easily and securely.",
  },
  {
    img: c11,
    alt: "Stock Monitoring & Analytics",
    title: "AI-Powered Stock Monitoring & Analytics",
    desc: "Leverage AI to optimize stock levels, predict demand, and improve warehouse space utilization.",
  },
  {
    img: c12,
    alt: "Inventory Control & Reporting Automation",
    title: "Automation in Inventory Control & Reporting",
    desc: "Automate stock movement alerts, generate compliance reports, and improve accuracy in inventory management.",
  },
  {
    img: c13,
    alt: "Warehouse Software Optimization & Maintenance",
    title: "Warehouse Software Performance Optimization",
    desc: "Maintain a secure, efficient warehouse system with ongoing updates, monitoring, and performance tuning.",
  },
];

const WarehouseInventory = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Warehouse & Inventory Management Systems | ASVAYUK Technologies"
        description="ASVAYUK Technologies provides advanced Warehouse & Inventory Management Systems in Saudi Arabia. We deliver efficient inventory tracking, real-time stock management, and seamless warehouse automation solutions."
        canonical="https://asvayuktech.com/warehouse-inventory-management-systems-saudi-arabia"
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
                      Warehouse & Inventory Management Systems Provider in Saudi
                      Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> delivers cutting-edge
                    Warehouse & Inventory Management solutions designed to
                    optimize stock control and streamline warehouse operations
                    for businesses in Saudi Arabia.
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
                    alt="Warehouse & Inventory Management Systems Provider in Saudi Arabia"
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
                Why Choose Our Warehouse & Inventory Management Systems in Saudi
                Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we specialize in delivering tailored
                warehouse and inventory management software to help Saudi
                Arabian businesses increase accuracy, reduce costs, and gain
                real-time visibility into their stock.
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
                      alt="Custom Warehouse Management Solutions Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Tailored Warehouse Solutions for Your Business Needs
                    </h6>
                    <p className="mb-0 text-muted">
                      We develop customized inventory and warehouse systems that
                      fit your operational workflows, improving accuracy in
                      stock tracking, order fulfillment, and storage management.
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
                      alt="Real-Time Inventory Tracking Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Real-Time Inventory Tracking & Alerts
                    </h6>
                    <p className="mb-0 text-muted">
                      Our systems provide live updates and automated alerts to
                      prevent stockouts, overstocking, and ensure timely
                      replenishment aligned with your business demands.
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
                      alt="Warehouse Automation & Analytics Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Warehouse Automation & Data-Driven Analytics
                    </h6>
                    <p className="mb-0 text-muted">
                      We implement automation technologies and analytics
                      dashboards to optimize warehouse space, labor, and
                      inventory turnover for smarter decision-making.
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
                      alt="Experienced Inventory Management Developers Saudi Arabia"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced Developers & UI Experts for Inventory Systems
                    </h6>
                    <p className="mb-0 text-muted">
                      Our team combines inventory domain expertise with modern
                      UI/UX design to deliver intuitive, reliable, and efficient
                      warehouse management software.
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
            Warehouse & Inventory Management Systems in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies offers end-to-end warehouse and inventory
            management software solutions tailored for businesses in Saudi
            Arabia. Our intelligent platforms help optimize stock levels,
            automate warehouse workflows, and improve supply chain visibility,
            driving operational efficiency and growth.
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
                Our Core Warehouse & Inventory Management System Solutions
              </h2>
              <p>
                At ASVAYUK Technologies, we excel in crafting robust, efficient
                warehouse and inventory management systems tailored for
                businesses in Saudi Arabia. From real-time stock tracking and
                automated order processing to supply chain optimization and
                detailed reporting, our solutions help you streamline inventory
                control and boost operational efficiency.
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
                    Ready to Build an Advanced Warehouse & Inventory System?
                  </h2>
                  <p className="text-white pt-3 fs-6">
                    Partner with ASVAYUK Technologies today. Our expert
                    development team will work closely with you to deliver a
                    customized warehouse and inventory management solution that
                    enhances stock accuracy, reduces waste, and scales
                    seamlessly with your business across Saudi Arabia.
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
                WHY WAREHOUSE & INVENTORY MANAGEMENT SYSTEMS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  MATTER FOR YOUR BUSINESS
                </span>
              </h1>
              <p className="powered_php pt-3">
                Warehouse and inventory management systems revolutionize how
                businesses track stock, manage orders, and optimize supply
                chains. With tailored solutions, you can improve accuracy,
                reduce costs, and enhance overall productivity.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Inventory Tracking Features">
                      Enables real-time inventory tracking and automatic stock
                      updates
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Order Management Solutions">
                      Streamlines order processing and reduces fulfillment
                      errors
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Reporting & Analytics">
                      Provides detailed insights for better inventory
                      decision-making
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Supply Chain Integration">
                      Integrates with suppliers and logistics for end-to-end
                      visibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Scalable Warehouse Solutions">
                      Grows with your business while ensuring data accuracy and
                      security
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
                    Our Warehouse & Inventory Management System Development
                    Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in custom{" "}
                    <strong>
                      Warehouse & Inventory Management system development
                    </strong>
                    for businesses of all sizes. Our approach ensures your
                    platform is efficient, accurate, and scalable.
                  </p>
                  <p>
                    From real-time inventory tracking and automated stock
                    replenishment to order fulfillment and warehouse
                    optimization, we build solutions that empower your supply
                    chain operations.
                  </p>

                  <div className=" mt-3 w-100">
                        <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Needs Assessment:</strong> We analyze your warehouse
                    workflows, inventory challenges, and integration
                    requirements to plan a tailored system.
                  </li>
                  <li>
                    <strong>UI/UX Design:</strong> Our team designs intuitive
                    dashboards and mobile-friendly interfaces for warehouse
                    managers and staff.
                  </li>
                  <li>
                    <strong>Development and Modules:</strong> We build modules
                    such as stock management, barcode/RFID scanning, order
                    processing, and reporting.
                  </li>
                  <li>
                    <strong>Testing and Launch:</strong> Rigorous testing
                    ensures accuracy, reliability, and smooth operation before
                    deployment.
                  </li>
                  <li>
                    <strong>Ongoing Support:</strong> We provide continuous
                    updates and maintenance to keep your warehouse system
                    optimized and scalable.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Software Built for Inventory Accuracy and Warehouse Efficiency
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We develop{" "}
              <b>robust, scalable Warehouse & Inventory Management systems</b>
              designed to streamline inventory control, reduce stockouts, and
              optimize warehouse space utilization. Our solutions enhance
              operational visibility and supply chain responsiveness.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Optimize Your Warehouse & Inventory Management?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Partner with ASVAYUK Technologies to develop a comprehensive
              Warehouse & Inventory Management solution. Whether you operate a
              small warehouse or a large distribution center, we’ll help you
              improve inventory accuracy, increase throughput, and reduce
              operational costs.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default WarehouseInventory;
