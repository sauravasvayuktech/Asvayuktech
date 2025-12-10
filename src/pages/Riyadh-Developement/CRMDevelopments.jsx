// Imports
import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import { Link } from "react-router-dom";
import { FaArrowRight} from "react-icons/fa";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";
import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
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

const trustedStats = [
  {
    number: "1",
    label:
      "Enhance customer relationships through centralized data and smart insights.",
  },
  {
    number: "2",
    label:
      "Boost sales productivity with automated lead and pipeline management.",
  },
  {
    number: "3",
    label:
      "Make data-driven decisions with real-time CRM analytics and reporting.",
  },
  {
    number: "4",
    label:
      "Improve team collaboration and efficiency with seamless CRM workflows.",
  },
];

const experienceData = [
  {
    experienceCardWrapper: 'experienceCardWrapper',
    title: "Local Expertise",
    description:
      "Our Riyadh delivery mobile app developers have deep insight into the Riyadh market. We are experts in managing the Riyadh business challenges and opportunities that are different from elsewhere, thereby enabling us to design solutions uniquely adapted.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceCardWrapper1',
    title: "Personalized Solutions",
    description:
      "We believe that each business is one-of-a-kind, and that is the reason we provide fully bespoke delivery application solutions. Whether you require a straightforward application for a small enterprise or a sophisticated system for a corporate firm.",
    features: [],
  },
  {
    experienceCardWrapper: 'experienceCardWrapper experienceCardWrapper2',
    title: "Advanced Technology",
    description:
      "Our deployment solutions are constructed using the latest technology and industry standards, utilizing the newest features like secure payment processors, real-time monitoring, and AI analytics to not only launch your application but also remain one step ahead.",
    features: [],
  },
];

const services = [
  {
    img: c11,
    alt: "Experience and Expertise",
    title: "Experience and Expertise",
    desc: "Our Riyadh CRM experts with years of industry experience possess a deep knowledge of the challenges and opportunities that Saudi Arabian companies are confronting. We are experts in creating customized CRM solutions that are specifically designed to fit your own business needs, and you can be confident that you have the tools you require to achieve success.",
  },
  {
    img: c12,
    alt: "Customized Solutions",
    title: "Customized Solutions",
    desc: "We understand that all businesses are different and hence provide customized CRM development services. We listen to you regarding your needs and objectives to develop a CRM solution that will be designed based on your business operations. You might have a lightweight CRM solution or a heavyweight multi-departmental application, and we can provide it.",
  },
  {
    img: c13,
    alt: "Proven Track Record",
    title: "Proven Track Record",
    desc: "We have the achievement story of implementing best-in-class CRM development projects in Riyadh and throughout Saudi Arabia. Our portfolio showcases a vast array of CRM solutions, every one of which is tailored to the specific needs of our customers. We aim for timely and cost-effective project delivery for optimum satisfaction.",
  },
];

const CRMDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="crm-development-riyadh-saudi-arabia"
        description="Transform Your Business with Asvayuk Technologies: Riyadh CRM Development"
        canonical="https://asvayuktech.com/crm-development-riyadh-saudi-arabia"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  Transform Your Business with <br /> Asvayuk Technologies:{" "}
                  <span>Riyadh CRM</span>
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  With Riyadh&#39;s highly competitive business environment, success
                  lies in having a strong and effective Customer Relationship
                  Management (CRM) system. As Riyadh&#39;s premier{" "}
                  <strong>
                    <span style={{ color: "var(--main)" }}>
                      CRM development company
                    </span>
                  </strong>
                  , Asvayuk Technologies is a professional in the design of
                  custom CRM solutions that are carefully crafted to meet Saudi
                  Arabian businesses&#39;s distinctive business requirements. Our
                  experts are committed to assisting you to simplify operations,
                  increase customer engagement, and grow your business.
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
                      className={`riyadhMiniTitle-wrapper ${
                        index === 1 ? "afterBorder" : ""
                      }`}
                      data-aos="fade-up"
                    >
                      <div className="titleMini-icon">{card.icon}</div>
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

        {/* Trusted Section */}
        <section className="trusted-wrapper">
          <Container>
            <div className="trustedContent-wrapper">
              <h2 className="mb-4" data-aos="zoom-in-up">
                Why Your Business in Riyadh Needs CRM Development
              </h2>
              <p>
                In today’s competitive business landscape, a robust CRM system
                is vital for building lasting customer relationships and driving
                growth. A custom-developed CRM helps you centralize data,
                enhance sales efficiency, and deliver personalized customer
                experiences—making it a game-changer for businesses in the
                Riyadh market.
              </p>

              <Row className="trustedContent-Row">
                {trustedStats.map((item, idx) => (
                  <Col className="mb-3" lg={3} key={idx}>
                    <div className="trustedDiv-wrapper" data-aos="zoom-in-down">
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

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">Complete Services</h3>
                  <p>
                    At ASVAYUK Technologies, we offer the full range of{" "}
                    <strong>delivery application development services</strong>{" "}
                    for businesses in Riyadh and across Saudi Arabia. Whether
                    you are launching a food delivery platform, grocery delivery
                    app, or last-mile logistics solution, our team handles
                    everything from planning to post-launch support.
                  </p>
                  <div className=" mt-3">
                     <BannerButton btnTitle='Free Consultation' />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start p-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Saudi Arabia Custom CRM Solutions:</strong> Tailored
                    CRM systems designed specifically to align with your
                    delivery business workflows and customer service goals.
                  </li>
                  <li>
                    <strong>Riyadh Business CRM Software:</strong> Scalable and
                    secure CRM software built to enhance customer engagement,
                    streamline orders, and improve delivery efficiency.
                  </li>
                  <li>
                    <strong>Salesforce Alternative in Riyadh:</strong> Powerful,
                    cost-effective CRM solutions with similar capabilities to
                    Salesforce, customized for your local operations.
                  </li>
                  <li>
                    <strong>Top CRM Development Company Riyadh:</strong> Get
                    expertly built CRM systems that are intuitive, secure, and
                    optimized for delivery-focused businesses in Saudi Arabia.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="performance_card pb-5">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold" data-aos="zoom-in-up">
                Why Asvayuk Technologies for Your CRM Development Requirements?
              </h2>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {services.map((service, i) => (
                <Col lg={4} className="pb-4" data-aos="zoom-in" key={i}>
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

        {/* WooCommerce Highlight */}
        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2 data-aos="zoom-in-up">
                  Our Process: From Vision to Reality
                </h2>
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
                  <h6>Discovery and Planning</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Our process starts with a comprehensive discovery process,
                    wherein we learn your business goals, processes, and
                    specific requirements.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Design and Development</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Our seasoned CRM developers step in next. We design and
                    deploy a personalized CRM system for your business
                    procedures.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Quality Assurance</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Once development is complete, we thoroughly test to make
                    sure your CRM system is free of bugs and running smoothly.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Support and Maintenance</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Regular upgradations and optimizations keep your system in
                    synchronization with the latest technology and trends.
                  </p>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* Experience Cards */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Why Choose ASVAYUK Technologies?
              </h2>
              <Row className="experienceWrapper-Row">
                {experienceData.map((data, index) => (
                  <ExperienceCard
                    key={index}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    features={data.features}
                    experienceCardWrapper={data.experienceCardWrapper}
                  />
                ))}
              </Row>
              <BannerButton
                  btnTitle="Get In Touch"
                  blockChainClass="riyadhBtn text-white"
                  icon={<div className="riyadhBtn-icons">
                    <FaArrowRight />
                  </div>}
                />
            </div>
          </Container>
        </section>

        <section className="laravel-projects-section py-5">
          <div className="container">
            <div className="text-center Experienceg_title">
              <h2 className="pb-3 fw-bold" data-aos="zoom-in-up">
                Our Team: The Driving <br />
                Force Behind Your Success
              </h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">Expert CRM Developers</h3>
                    <p className="project-description">
                      Our group of experienced and skilled CRM developers has
                      ample experience and knowledge to share with every
                      project. With our wide-ranging experience in CRM best
                      practices and technologies, our developers ensure that
                      your CRM system is designed to meet your specific business
                      needs.
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
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Dedicated Project Managers
                    </h3>
                    <p className="project-description">
                      Our project managers are the pillars of our company. They
                      keep your project on schedule, on budget, and all
                      deadlines. They stay in contact regularly and keep you
                      posted regularly about progress, keeping you informed
                      every step of the way.
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
      </main>
    </>
  );
};

export default CRMDevelopments;
