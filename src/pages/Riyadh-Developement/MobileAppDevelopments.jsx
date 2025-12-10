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
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";
// import ExperienceCard from "../../Components/RiyadhDev/ExperienceCard";
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
    alt: "Saudi Arabian Custom Mobile App Development",
    title: "Saudi Arabian Custom Mobile App Development",
    desc: "Being one of the leading Riyadh mobile app companies, we create custom mobile apps to meet your unique needs. From a commercial solution to a consumer-focused software, we aim to deliver an interesting and intuitive experience.",
  },
  {
    img: c12,
    alt: "Android & iOS App Development",
    title: "Android & iOS App Development",
    desc: "Our expert Saudi Arabia Android & iOS app developers make sure that your app provides glitch-free performance on every device. From ideation to deployment, we walk you through each process, developing high-performance, feature-packed apps for both platforms.",
  },
  {
    img: c13,
    alt: "On-Demand Mobile Apps in Riyadh",
    title: "On-Demand Mobile Apps in Riyadh",
    desc: "We specialize in crafting on-demand mobile apps in Riyadh that provide access to services at once. Whether ride-hailing applications or food delivery apps, we design apps that are user-centric, stable, and scalable enough to cope with high traffic.",
  },
  {
    img: c14,
    alt: "Delivery App Development in Riyadh",
    title: "Delivery App Development in Riyadh",
    desc: "With our knowledge of **delivery app development in Riyadh**, we create apps where you can track orders, offer real-time status, and guarantee an efficient delivery process. Ideal for restaurants, e-commerce, or logistics firms.",
  },
  {
    img: c15,
    alt: "Riyadh Cross-Platform Mobile Apps",
    title: "Riyadh Cross-Platform Mobile Apps",
    desc: "Our Riyadh cross-platform mobile apps allow you to reach more people by developing apps that are exactly compatible with both Android and iOS. This cost-effective choice ensures that you won't have to compromise on quality or features",
  },
  // {
  //   img: c16,
  //   alt: "best web developers of chandigarh and mohali",
  //   title: "Blockchain Integration",
  //   desc: "Secure, decentralized apps using modern blockchain frameworks.",
  // },
];

// const experienceData = [
//   {
//     experienceCardWrapper: "experienceCardWrapper experienceMernStack3",
//     image:
//       "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png",
//     title: "Artificial Intelligence",
//     description:
//       "AI can make your app experience much better by offering personalized content, smart predictions, and automated features. With AI integration, our app developer company ensures your app adapts to your users' changing needs, making it more user-friendly and efficient.",
//     features: [
//       "Predictive Analytics",
//       "Smart Predictions",
//       "Automated Features",
//     ],
//   },
//   // Repeat for other cards
//   {
//     experienceCardWrapper: "experienceCardWrapper experienceMernStack3",
//     image:
//       "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png",
//     title: "Artificial Intelligence",
//     description:
//       "AI can make your app experience much better by offering personalized content, smart predictions, and automated features. With AI integration, our app developer company ensures your app adapts to your users' changing needs, making it more user-friendly and efficient.",
//     features: [
//       "Predictive Analytics",
//       "Smart Predictions",
//       "Automated Features",
//     ],
//   },
//   {
//     experienceCardWrapper: "experienceCardWrapper experienceMernStack3",
//     image:
//       "https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/07/08182801/saudi_solution1.png",
//     title: "Artificial Intelligence",
//     description:
//       "AI can make your app experience much better by offering personalized content, smart predictions, and automated features. With AI integration, our app developer company ensures your app adapts to your users' changing needs, making it more user-friendly and efficient.",
//     features: [
//       "Predictive Analytics",
//       "Smart Predictions",
//       "Automated Features",
//     ],
//   },
// ];

const MobileAppDevelopments = () => {
  return (
    <>
      <Meta_Component
        title="mobile-app-development-company-riyadh-saudi-arabia"
        description="Asvayuk Technologies, a top Website Development Company in Chandigarh & Mohali, offers custom web development, e-commerce solutions, & responsive designs."
        canonical="https://asvayuktech.com/website-development-company-in-chandigarh-and-mohali"
      />

      <main>
        {/* Banner */}
        <section className="riyadhBanner-wrapper mobileDevbg">
          <Container>
            <div className="riyadhBannerContent-wrapper">
              <div className="riyadhBannerContent">
                <h1
                  className="fw-bold riyadhBannerContent-title"
                  data-aos="zoom-in"
                >
                  Your Reliable
                  <span> Mobile App</span> Development <br /> Partner in Riyadh,
                  Saudi Arabia
                </h1>
                <p className="riyadhBannerContent-desc" data-aos="zoom-in">
                  Asvayuk Technologies is proud to be one of the top mobile app
                  development companies in Riyadh, Saudi Arabia. We are
                  dedicated to designing sleek, scalable, and user-friendly
                  mobile apps for your business requirements. Our experts in
                  Android & iOS app development in Saudi Arabia are dedicated to
                  providing top-notch solutions for organizations from diverse
                  industries.
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

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 p-3" data-aos="zoom-in-left">
                <div className="tool-heading">
                  <h3 className="fw-bold">
                    Why Asvayuk Technologies is the Best Choice for Mobile App
                    Development Chandigarh
                  </h3>
                  <p>
                    At Asvayuk Technologies, we recognize that each company is
                    different and has specific requirements. Our methodology is
                    tailored to make your mobile application solution
                    distinctive in the marketplace. Our services are devised to
                    realize your concepts with precision and specialization
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
                    objectives
                  </li>
                  <li>
                    <strong>Cross-Platform Mobile Apps : </strong> We have
                    expertise in developing custom mobile apps that are
                    scalable, secure, and tailored to fulfill your business
                    objectives
                  </li>
                  <li>
                    <strong>On-Demand Mobile Apps : </strong> We have expertise
                    in developing custom mobile apps that are scalable, secure,
                    and tailored to fulfill your business objectives
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
                Our Development Process
              </h2>
              <p className="mt-3" data-aos="zoom-in-up">
                Whether you require on-demand Riyadh mobile apps, Saudi Arabian
                custom <b>mobile app development</b>, or even delivery app
                development Riyadh, we&#39;ve got you well-covered with amazing
                service, thorough attention to detail, and great quality.
              </p>
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
                <h2 data-aos="zoom-in-up">Our Development Process</h2>
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
                  <h6>Consultation & Requirement Analysis</h6>
                  <p className="mb-0 fw-semibold text-white">
                    We begin by understanding your business and its specific
                    mobile app needs.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Design & Prototyping</h6>
                  <p className="mb-0 fw-semibold text-white">
                    We create intuitive, good-looking interfaces that embody
                    your brand.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Development & Integration</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Our programmers deploy the app, integrating it seamlessly
                    with backend systems and APIs.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Quality Assurance</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Before releasing the software, we thoroughly test it for
                    usability, security, and functioning.
                  </p>
                </Link>
                <Link to="#" data-aos="fade-up" className="riyadhUrl">
                  <h6>Deployment & Support</h6>
                  <p className="mb-0 fw-semibold text-white">
                    Before releasing the software, we thoroughly test it for
                    usability, security, and functioning.
                  </p>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* Experience Cards */}
        {/* <section className="experience-wrapper">
          <Container>
            <div className="trustedContent-wrapper pt-5">
              <h2 className="pb-3" data-aos="zoom-in-up">
                Experience Innovation with the Latest
                <br />
                Technologies Powering Your App Solutions
              </h2>
              <p className="fs-6" data-aos="zoom-in-up">
                You can hire a mobile app development company that uses the
                latest technologies <br />
                to help you embark on your app development journey.
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
              <Link
                to="/contact-us"
                className="riyadhBtn text-white"
                data-aos="zoom-in-up"
              >
                <div className="riyadhBtn-icons">
                  <FaArrowRight />
                </div>
                <div className="riyadhBtn-title">Get In Touch</div>
              </Link>
            </div>
          </Container>
        </section> */}
      </main>
    </>
  );
};

export default MobileAppDevelopments;
