// Imports
import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import { TbShoppingCartSearch } from "react-icons/tb";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";
import work3 from "../../Images/exmp2.webp";
import work2 from "../../Images/larawk3.jpg";
import { MdSettingsApplications } from "react-icons/md";
import { PiEscalatorUpFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import BannerButton from "../../Components/BannerBtn/BannerButton";

const miniCards = [
  {
    label: "Custom CRM Solutions for Saudi Businesses",
    icon: <MdSettingsApplications />,
  },
  {
    label: "Efficient & Scalable CRM Development Approach",
    icon: <PiEscalatorUpFill />,
  },
  {
    label: "Trusted by Leading Brands in Riyadh & Beyond",
    icon: <FaHandshake />,
  },
];

const services = [
  {
    img: c11,
    alt: "Experience and Expertise",
    title: "Experience and Expertise",
    desc: "With extensive experience, our Riyadh ERP specialists have a comprehensive understanding of Saudi Arabian business challenges and opportunities. We are skilled at designing and delivering customized ERP solutions that are aligned with your specific business requirements, thus enabling you to achieve your goals better.",
  },
  {
    img: c12,
    alt: "Tailored Solutions",
    title: "Tailored Solutions",
    desc: "We are aware that every business is unique, and that is why we offer customized ERP development services. We walk you through your needs and goals and then design an ERP system unique to your business process. You might need a simple ERP solution or a complex multi-department system; in either scenario, we can offer it.",
  },
  {
    img: c13,
    alt: "Proven Track Record",
    title: "Proven Track Record",
    desc: "We possess a track record of successful delivery of high-quality ERP development projects in Riyadh and across Saudi Arabia. Our portfolio reflects a range of ERP solutions, each carefully crafted to meet the unique needs of our clients. We are committed to cost-effective and timely delivery with utmost satisfaction on your part.",
  },
];

const ERPDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="erp-development-riyadh-saudi-arabia"
        description="Empower Your Business with Asvayuk Technologies: Riyadh ERP Solutions"
        canonical="https://asvayuktech.com/erp-development-riyadh-saudi-arabia"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper erpDevelopments">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  Empower Your Business with <br /> AsvayukTech:{" "}
                  <span>Riyadh ERP Solutions</span>
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  As a fast-paced business city, Riyadh needs an efficient and
                  appropriate Enterprise Resource Planning (ERP) system to
                  become successful. Asvayuk Technologies is one of the top{" "}
                  <strong>
                    <span style={{ color: "var(--main)" }}>
                      ERP software development companies{" "}
                    </span>
                  </strong>{" "}
                  in Riyadh that creates tailored ERP solutions for Saudi
                  Arabian business organizations to fulfill their specific
                  business needs. Our experts guarantee to automate your
                  operations, enhance productivity, and grow your business.
                </p>
                <BannerButton
                  btnTitle="Get In Touch"
                  blockChainClass="riyadhBtn"
                  icon={<div className="riyadhBtn-icons">
                    <FaArrowRight />
                  </div>}
                />
              </div>

              <Row className="riyadhRowMini-wrapper">
                {miniCards.map((card, index) => (
                  <Col className="mb-3" lg={4} key={index}>
                    <div
                      className={`riyadhMiniTitle-wrapper ${index === 1 ? "afterBorder" : ""}`}
                      data-aos="fade-up"
                    >
                      <div className="titleMini-icon">
                        {card.icon}
                      </div>
                      <div className="titleMini-text">
                        <small>{card.label}</small>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="performance_card pb-5">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold" data-aos="zoom-in-up">
                Why Choose Asvayuk Technologies for Your ERP Development Need?
              </h2>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {services.map((service, i) => (
                <Col lg={4} className="pb-4 mb-3" data-aos="zoom-in" key={i}>
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

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">Our Process: Vision to Reality</h3>
                  <p>
                    At ASVAYUK Technologies, we specialize in providing
                    end-to-end <strong>ERP development services</strong> for
                    businesses in Riyadh and across Saudi Arabia. Our process is
                    designed to ensure your ERP solution is fully aligned with
                    your goals, efficient in performance, and scalable for
                    future growth.
                  </p>
                  <p>
                    At ASVAYUK Technologies, we deliver comprehensive{" "}
                    <strong>ERP development services</strong> tailored for
                    businesses in Riyadh and throughout Saudi Arabia. Our goal
                    is to build intelligent CRM systems that streamline your
                    operations, enhance customer relationships, and support
                    long-term business growth through scalable and efficient
                    solutions.
                  </p>

                  <div className=" mt-3">
                      <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start mb-3 p-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Discovery and Planning:</strong> We begin by
                    performing an in-depth discovery process to understand your
                    business goals, operations, and requirements. Through
                    detailed meetings, we gather insights and create a
                    comprehensive project plan.
                  </li>
                  <li>
                    <strong>Design and Development:</strong> Our expert
                    developers design and build a CRM system tailored to your
                    company’s workflow. The interface is intuitive and optimized
                    for efficiency across all departments.
                  </li>
                  <li>
                    <strong>Testing and Quality Assurance:</strong>{" "}
                    Post-development, we conduct rigorous testing to ensure your
                    CRM system is error-free, scalable, secure, and performs
                    exactly as intended.
                  </li>
                  <li>
                    <strong>Deployment and Training:</strong> After final
                    checks, we deploy your CRM system and provide extensive
                    training to your staff, ensuring they are confident and
                    fully equipped to use the system effectively.
                  </li>
                  <li>
                    <strong>Ongoing Support and Maintenance:</strong> We offer
                    continuous support and maintenance to keep your CRM running
                    smoothly, with regular updates to match evolving business
                    needs and technological advancements.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* WooCommerce Highlight */}
        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2 data-aos="zoom-in-up">Full-Range Services</h2>
                <p data-aos="zoom-in-up" className="text-center text-white">
                  Asvayuk Technologies offers a full range of ERP development
                  services, including:
                </p>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block my-5">
                  <img
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="..."
                    data-aos="zoom-in"
                    style={{ filter: "invert(1)" }}
                  />
                  <img
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="..."
                    data-aos="zoom-in"
                    style={{ filter: "invert(1)" }}
                  />
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center pt-5 mt-5 overflow-x-hidden">
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Custom ERP Development Saudi Arabia</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Tailor-made ERP systems that meet your unique business
                    processes.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>ERP Software Development Riyadh</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Robust and scalable ERP software that can grow with your
                    business.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Enterprise Solutions Saudi Arabia</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Full solutions that cover every aspect of your business
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>ERP System Riyadh Businesses</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Custom ERP systems that have the same functionality as
                    leading market solutions, but for your business.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>ERP Software Riyadh Company</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Expert development services that secure your ERP system,
                    making it strong and user-friendly.
                  </p>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        <section className="laravel-projects-section py-5">
          <div className="container">
            <div className="text-center Experienceg_title">
              <h2 className="pb-3 fw-bold" data-aos="zoom-in-up">
                Our Team: The Force Behind Your Success
              </h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card" data-aos="zoom-in-up">
                  <div className="project-text">
                    <h3 className="project-title">Expert ERP Developers</h3>
                    <p className="project-description">
                      Our team of ERP experts has a good amount of experience
                      and expertise in every project. Our developers, having a
                      clear insight into ERP best practices and technologies,
                      tailor your ERP system to your particular business needs.
                    </p>
                  </div>
                  <div className="project-image">
                    <img
                      src={work2}
                      alt="Offshore Software Development Chandigarh"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card" data-aos="zoom-in-up">
                  <div className="project-text">
                    <h3 className="project-title">
                      Dedicated Project Managers
                    </h3>
                    <p className="project-description">
                      Our project managers are the backbone of our company. They
                      keep your project on schedule, on budget, and meet all
                      deadlines. They maintain an open line of communication and
                      stay in touch with you during the process, checking back
                      with you along the way regularly.
                    </p>
                  </div>
                  <div className="project-image">
                    <img
                      src={work3}
                      alt="Software Outsourcing Company Chandigarh"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card" data-aos="zoom-in-up">
                  <div className="project-text">
                    <h3 className="project-title">
                      Quality Assurance Engineers with experience
                    </h3>
                    <p className="project-description">
                      Our quality assurance engineers thoroughly test your ERP
                      system to make sure it is bug-free and works according to
                      expectations. They make sure your system is stable,
                      secure, and scalable, and offers a seamless user
                      experience.
                    </p>
                  </div>
                  <div className="project-image">
                    <img
                      src={work3}
                      alt="Software Outsourcing Company Chandigarh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold" data-aos="fade-left">
              Client-Centric Approach
            </h2>
            <p
              className="pt-3"
              data-aos="fade-right"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We are devoted to the fundamental philosophy of establishing
              <b> long-term</b> relationships with our clients. Our
              client-focused strategy allows us to keep your goals and
              objectives <b>our #1 priority at all times</b>. We speak freely,
              provide you with frequent updates, and keep you involved every
              step of the way in the development process. We are dedicated to
              making your client experience a satisfaction-guaranteed
              experience.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold" data-aos="fade-left">
              Ready to Revamp Your Business?
            </h2>
            <p
              className="pt-3"
              data-aos="fade-right"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Don&#39;t settle for an off-the-shelf ERP solution when you can have
              one customized to fit your unique needs. Call Asvayuk Technologies
              today to schedule a meeting with our ERP experts. Let us help you
              optimize your processes, increase productivity, and fuel growth.
            </p>
          </Container>
        </section>

      </main>
    </>
  );
};

export default ERPDevelopments;
