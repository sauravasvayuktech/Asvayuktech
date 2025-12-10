// Imports
import { Col, Container, Row } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// import { TbShoppingCartSearch } from "react-icons/tb";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
// import Group_558 from "../../Images/Group-558.webp";
// import Group_168 from "../../Images/Group-168.webp";
import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
import { MdRocketLaunch } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import BannerButton from "../../Components/BannerBtn/BannerButton";

const miniCards = [
  {
    label: "AI-Powered App Solutions",
    icon: <GiArtificialIntelligence />,
  },
  {
    label: "Agile Development for Quick Launch",
    icon: <MdRocketLaunch />,
  },
  {
    label: "Top-Rated App Developers Worldwide",
    icon: <FaStar />,
  },
];

const trustedStats = [
  { number: "1", label: "Increase consumer engagement and retention." },
  { number: "2", label: "Simplify business processes and operations." },
  { number: "3", label: "Provide convenient on-demand or delivery choices." },
  {
    number: "4",
    label: "Engage a global clientele by employing cross-platform solutions.",
  },
];

const services = [
  {
    img: c11,
    alt: "Mastering Full-Stack JavaScript",
    title: "Mastering Full-Stack JavaScript",
    desc: "Our Saudi Arabia full-stack JavaScript developers possess vast experience. Having a deep understanding of front-end and back-end technologies, we offer seamless integration and optimal performance for your web applications.",
  },
  {
    img: c12,
    alt: "Development of Custom Web Apps",
    title: "Development of Custom Web Apps",
    desc: "In Riyadh, we at ASVAYUK offer custom web application development. Our MERN stack developers will work alongside you to bring your ideas to life, whether you need a simple website or an advanced application with state-of-the-art features. Our mission is to develop reliable back-end systems and intuitive interfaces that serve your business's ambitions.",
  },
  {
    img: c13,
    alt: "Proven Track Record",
    title: "Proven Track Record",
    desc: "Our Saudi Arabian MERN stack agency has a successful record of delivering on-time and on-budget high-quality projects. We take pride in our flexibility in meeting evolving requirements and offering regular maintenance to keep your application current and secure.",
  },
];

const experienceData = [
  {
    experienceCardWrapper: "experienceCardWrapper experienceMernStack1",
    title: "Planning and Consultation",
    description:
      "We begin with an in-depth consultation to grasp your business goals, personal needs, and target audience. We will prepare a detailed project schedule that considers budget, timeline, and scope as a whole.",
    features: [],
  },
  {
    experienceCardWrapper: "experienceCardWrapper experienceMernStack2",
    title: "Design and Development",
    description:
      "Your web application will be designed and developed by our MERN stack developers in accordance with best practices. Our top goal is to deliver a flawless user experience so that your software remains aesthetically easy to use.",
    features: [],
  },
  {
    experienceCardWrapper: "experienceCardWrapper experienceMernStack3",
    title: "Testing and Quality Assurance",
    description:
      "To make sure your program is error-free and functions properly across all hardware and web browsers, we thoroughly test it. Our quality assurance team would thoroughly test your application to ensure it meets the highest requirements.",
    features: [],
  },
];

const MernStackDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="mern-stack-development-company-riyadh-saudi-arabia"
        description="elcome to ASVAYUK Technologies, your go-to haven for the finest MERN stack development in Riyadh. Our full-stack MERN developers specialize in providing unparalleled bespoke web applications precisely suited to your specific requirements."
        canonical="https://asvayuktech.com/mern-stack-development-company-riyadh-saudi-arabia"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper merndevebg">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  Riyadh
                  <span> MERN Stack</span> <br /> Development Services
                </h1>
                <h5>Your Avenue to State-of-the-Art Web Solutions</h5>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Welcome to ASVAYUK Technologies, your go-to haven for the
                  finest MERN stack development in Riyadh. Our full-stack MERN
                  developers specialize in providing unparalleled bespoke web
                  applications precisely suited to your specific requirements.
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
                Why Do You Need Mobile Apps
                <br />
                for Your Business?
              </h2>
              <p>
                A mobile app is now essential for any business that wishes to
                remain in operation due to the rise in the use of smartphones
                and other mobile devices. A quality mobile application will be
                capable of:
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

        {/* Why Asvayuk Technologies */}
        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Why Asvayuk Technologies is the Best Choice for MERN Stack
                    Development Riyadh
                  </h3>
                  <p>
                    At Asvayuk Technologies, we recognize that each company is
                    different and has specific requirements. Our methodology is
                    tailored to make your mobile application solution
                    distinctive in the marketplace. Our services are devised to
                    realize your concepts with precision and specialization.
                  </p>
                  <div>
                    <p>
                      <strong>Professional Mobile App Developers:</strong> Our
                      Saudi Arabia-based Android & iOS app developers have years
                      of experience and are both native and cross-platform
                      mobile app development experts.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-12 text-start p-3"
                data-aos="zoom-in-right"
              >
                <ol>
                  <li>
                    <strong>Custom Mobile App Development : </strong> We have
                    expertise in developing custom mobile apps that are
                    scalable, secure, and tailored to fulfill your business
                    objectives.
                  </li>
                  <li>
                    <strong>Cross-Platform Mobile Apps : </strong> We have
                    expertise in developing custom mobile apps that are
                    scalable, secure, and tailored to fulfill your business
                    objectives.
                  </li>
                  <li>
                    <strong>On-Demand Mobile Apps : </strong> We have expertise
                    in developing custom mobile apps that are scalable, secure,
                    and tailored to fulfill your business objectives.
                  </li>
                  <div className=" mt-3">
                     <BannerButton btnTitle='Free Consultation' />
                  </div>
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
                Why Use Asvayuk for MERN Stack Development?
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

        {/* Experience Cards */}
        <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Our Development Process for the MERN Stack
              </h2>
              <p className="fs-6" data-aos="zoom-in-up">
                At ASVAYUK Technologies, we aim to provide you with the best
                service possible. Our Riyadh team is highly qualified in
                MongoDB, Express, React, and Node.js and will strive to give you
                phenomenal results that exceed your expectations.
              </p>
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
      </main>
    </>
  );
};

export default MernStackDevelopments;
