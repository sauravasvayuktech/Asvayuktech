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
    title: "Custom Booking System Development",
    image: softdev1,
    alt: "Custom booking system development services in Riyadh",
    content: (
      <>
        Develop tailored booking and appointment systems that align with your
        business needs, including real-time scheduling, calendar integration,
        and user-friendly interfaces.
      </>
    ),
  },
  {
    id: "2",
    title: "Multi-Platform Integration",
    image: softdev2,
    alt: "Multi-platform booking system integration in Saudi Arabia",
    content: (
      <>
        Integrate your booking solution across web, mobile apps, and third-party
        platforms to ensure seamless appointment management and user engagement.
      </>
    ),
  },
  {
    id: "3",
    title: "Secure Payment & Confirmation Systems",
    image: softdev3,
    alt: "Payment and confirmation modules for appointment systems",
    content: (
      <>
        Implement secure online payment gateways and automated confirmation
        systems to streamline your appointment workflows and enhance customer
        trust.
      </>
    ),
  },
  {
    id: "4",
    title: "Admin & User Panel Development",
    image: softdev4,
    alt: "Admin and user dashboards for booking solutions",
    content: (
      <>
        Build intuitive admin dashboards and user panels to manage bookings,
        track customer data, and monitor service performance in real time.
      </>
    ),
  },
  {
    id: "5",
    title: "Automated Notifications & Reminders",
    image: softdev5,
    alt: "Automated SMS and email reminders for appointments",
    content: (
      <>
        Reduce no-shows with automated SMS/email reminders and real-time
        notifications for appointments, changes, and cancellations.
      </>
    ),
  },
  {
    id: "6",
    title: "Analytics & Reporting Modules",
    image: softdev6,
    alt: "Analytics for appointment systems in Riyadh",
    content: (
      <>
        Gain insights into your bookings with advanced analytics and reporting
        tools, helping you make data-driven business decisions.
      </>
    ),
  },
  {
    id: "7",
    title: "Consulting & Strategy Planning",
    image: softdev7,
    alt: "Appointment system consulting services",
    content: (
      <>
        Get expert consultation to design the right appointment system strategy
        that fits your industry, customers, and operational workflow in Saudi
        Arabia.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Custom appointment system in Riyadh",
    title: "Tailored Booking Systems",
    desc: "Build custom booking and appointment solutions to match your specific business requirements in Saudi Arabia.",
  },
  {
    img: c12,
    alt: "Multi-device appointment app",
    title: "Cross-Platform Integration",
    desc: "Deploy your appointment system across mobile, web, and third-party platforms for maximum reach and efficiency.",
  },
  {
    img: c13,
    alt: "Secure payments and confirmations",
    title: "Payment & Confirmation",
    desc: "Enable secure online payments and instant booking confirmations for seamless user experiences.",
  },
  {
    img: c11,
    alt: "Admin dashboards for appointment systems",
    title: "Admin & Customer Portals",
    desc: "Empower both administrators and users with smart dashboards for managing schedules and customer data.",
  },
  {
    img: c12,
    alt: "Automated booking reminders",
    title: "Reminders & Alerts",
    desc: "Send timely reminders and updates via SMS or email to reduce missed appointments and increase reliability.",
  },
  {
    img: c13,
    alt: "Reports and analytics on bookings",
    title: "Reporting & Analytics",
    desc: "Analyze performance metrics and booking trends to make informed business decisions.",
  },
];

const AppointmentSystem = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Booking & Appointment Systems in Riyadh | ASVAYUK Technologies"
        description="Streamline your business operations with custom booking and appointment systems by ASVAYUK Technologies in Riyadh, Saudi Arabia. We offer tailored solutions for healthcare, salons, legal services, and more."
        canonical="https://asvayuktech.com/booking-appointment-systems-in-riyadh-saudi-arabia"
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
                      Booking & Appointment Systems | ASVAYUK Technologies
                      Riyadh
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> specializes in
                    developing advanced booking and appointment systems in
                    Riyadh, Saudi Arabia — empowering businesses with automated
                    scheduling, secure payment integrations, and real-time
                    confirmations.
                  </p>

                  <BannerButton btnTitle="Get a Free Demo" url="/contact-us" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg">
                  <img
                    src={banners_39}
                    alt="Booking Appointment System"
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
                Why Choose Our Booking System Solutions in Riyadh?
              </h1>
              <p>
                Our customized appointment platforms streamline your operations
                with features like calendar sync, online payments, SMS/email
                reminders, and customer portals — designed specifically for
                Saudi Arabia’s business ecosystem.
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col md={6}>
              <Card
                className="p-4 shadow-lg card"
                style={{ borderRadius: "12px", background: "#f9f9f9" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c11}
                      alt="Custom Scheduling"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">Custom Scheduling Logic</h6>
                    <p className="mb-0 text-muted">
                      Configure booking rules tailored to your hours, services,
                      staff availability, and business needs.
                    </p>
                  </Col>
                </Row>
              </Card>

              <Card
                className="p-4 shadow-lg mt-4 ms-md-n3 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c12}
                      alt="Online Payments"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Online Payments & Invoicing
                    </h6>
                    <p className="mb-0 text-muted">
                      Enable seamless integration with payment gateways like STC
                      Pay, Apple Pay, or Mada for local transactions.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="p-4 shadow-lg mt-md-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c14}
                      alt="Automated Reminders"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">Automated Reminders</h6>
                    <p className="mb-0 text-muted">
                      Reduce no-shows with SMS/email reminders and calendar sync
                      for customers and staff.
                    </p>
                  </Col>
                </Row>
              </Card>

              <Card
                className="p-4 shadow-lg mt-4 card"
                style={{ background: "#f9f9f9", borderRadius: "12px" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c13}
                      alt="Admin Dashboard"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Admin Dashboard & Analytics
                    </h6>
                    <p className="mb-0 text-muted">
                      Monitor appointments, customer insights, revenue reports,
                      and manage staff performance all in one place.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Intro Text Section */}
        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Smart Booking Systems for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            From salons and clinics to consultancies and training centers — our
            flexible booking & appointment solutions are localized for Saudi
            businesses, helping you save time, increase bookings, and offer a
            premium user experience.
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
              <h2 className="fw-bold">Comprehensive Booking Solutions</h2>
              <p>
                We deliver robust scheduling systems designed to handle high
                booking volumes, integrate with local systems, and scale with
                your business in Riyadh and across Saudi Arabia.
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
                    <span className="grdnt_clr">Digitize</span> Your Bookings
                    with ASVAYUK Technologies
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Accept Appointments 24/7 with Mobile-Friendly Interfaces
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Customize Time Slots, Staff Assignments, and Service
                        Categories
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Integrate with CRMs, WhatsApp, or SMS Gateways in Saudi
                        Arabia
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppointmentSystem;
