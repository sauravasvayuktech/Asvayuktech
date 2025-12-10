import "../../App.css";
import { Link } from "react-router-dom";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import BannerButton from "../BannerBtn/BannerButton";
import mobileBanner from "../../Images/mobileBanner.webp";
import ServicesCard from "./ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
import c16 from "../../Images/c16.webp";
import Group105518 from "../../Images/mad.webp";
import KeyPointSection from "./KeyPointSection";
import Experience from "../HomePage/Experience";
import html from "../../Images/fltr.webp";
import react from "../../Images/react.webp";
import objective from "../../Images/android.webp";
import kotlin from "../../Images/java.webp";
import swift from "../../Images/swift.webp";
import container from "../../Images/container.webp";
import planning from "../../Images/planning.webp";
import pen from "../../Images/pen.webp";
import development from "../../Images/development.webp";
import test from "../../Images/test.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import CoffeeLogo from "../../Images/49thcoffee_logo.webp";
import caseStu4 from "../../Images/caseStu4.webp";
import moonLight from "../../Images/moonlight_logo.webp";
import caseStu2 from "../../Images/caseStu2.webp";
import caseStu3 from "../../Images/caseStu3.webp";
import kriLogo from "../../Images/kri_logo.webp";
import kreLogo from "../../Images/kre.webp";
import caseStu5 from "../../Images/caseStu5.webp";
import caseStu6 from "../../Images/caseStu6.webp";
import Meta_Component from "../Meta_Component/Meta_Component";
import FAQAccordion from "../../accordian/FAQAccordion.jsx";

const faqData = [
  {
    question: "Why choose us for app development service Chandigarh?",
    answer:
      "We offer industry-specific app solutions backed by deep expertise and proven processes.",
  },
  {
    question: " What types of mobile apps do we develop?",
    answer:
      "We specialize in Android apps, healthcare platforms, e-commerce apps, and custom mobile application development services.",
  },
  {
    question: " How long does it take to develop a mobile app?",
    answer:
      "Our average development cycle ranges from 4 to 12 weeks, depending on the project scope.",
  },
  {
    question: "Do we offer post-launch maintenance?",
    answer:
      "Yes, all our clients receive full support and updates after app deployment.",
  },
  {
    question: "What makes us a top mobile app development company?",
    answer:
      " Our experience, use of the latest tools, and user-first design approach make us one of the top app making companies in the region.",
  },
  {
    question: "Do we work with native or hybrid platforms?",
    answer:
      " We develop both native and hybrid apps using Kotlin, Flutter, and React Native based on project requirements.",
  },
  {
    question: "What industries do we serve?",
    answer:
      "Our expertise spans industries including healthcare, education, logistics, fitness, and e-commerce.",
  },
];

function MobileAppDevelopment() {
  return (
    <>
      <Meta_Component
        title="Mobile App Development Chandigarh | Asvayuk Technologies"
        description="Mobile App Development Chandigarh by Asvayuk Technologies – delivering custom Android & iOS apps with expert solutions for businesses"
        canonical="https://asvayuktech.com/mobile-app-development-chandigarh"
      />
      <main>
        <section className="performance_card1 pb-5">
          <div className="container">
            <div className="col-12">
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-12 pt-3">
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>
                      Technology
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      Mobile App Development
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <div className="peformance_section_top-heading mt-3">
                    <h2>
                      <Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">
                        App Development Service Chandigarh{" "}
                      </Link>
                    </h2>
                    <p>
                      At Asvayuk Technologies Private Ltd., we offer
                      cutting-edge app development service Chandigarh tailored
                      to meet the evolving demands of modern businesses. Our
                      team builds scalable, secure, and intuitive apps that
                      drive results across platforms.
                    </p>
                    <BannerButton
                      btnTitle="Free Consultation"
                      url="/contact-us"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="peformance_card1_right-sec">
                    <img
                      src={mobileBanner}
                      alt="app development service Chandigarh"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section pt-2 pb-2">
          <Container>
            <div className="main-bg">
              <div className="tool-heading pt-5 pb-2">
                <h2 className="conclusion_title mb-2">
                  Why Our App Development Service Chandigarh Stands Out
                </h2>
                <div>
                  <p className="text-white lh-md fs-6 pt-3 text-center pb-2">
                    We are a trusted mobile app development company with a
                    strong presence in Chandigarh. Our approach combines
                    creativity, technology, and strategy to deliver apps that
                    engage users and accelerate growth.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>Our Core App Development Services</h2>
                <p className="mt-3">
                  At Asvayuk Technologies, we provide end-to-end mobile app
                  development services Chandigarh that cater to all types of
                  businesses. Here’s a brief overview of our expertise:
                </p>
              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      altText="Custom Mobile App Development Services"
                      cardHeading="Custom Mobile App Development Services"
                      cardParaGraph={
                        <>
                          We offer custom mobile app development services in
                          Chandigarh, crafting tailored solutions that align
                          with your brand and business goals—delivered by expert
                          mobile app developers for top performance.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      altText="Best Mobile App Development Company In Chandigarh"
                      cardHeading="iOS App Development"
                      cardParaGraph={
                        <>
                          {" "}
                          Our healthcare app development services are secure,
                          scalable, and HIPAA-compliant. As a leading mobile
                          application company, we build apps for hospitals and
                          wellness platforms that meet medical standards and
                          performance.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c13}
                      altText="mobile App Developers in Chandigarh"
                      cardHeading="E-commerce App Development Services"
                      cardParaGraph={
                        <>
                          We provide powerful e-commerce app development
                          services that drive conversions, increase loyalty, and
                          enhance shopping experiences—making us one of the top
                          app making companies for retail and online businesses.
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      altText="mobile app development companies in Chandigarh"
                      cardHeading="Cloud App Development Services"
                      cardParaGraph="Our cloud app development services deliver scalable and secure mobile solutions with real-time data access. Trusted among top mobile software companies, we enable seamless integration across platforms and devices."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c15}
                      altText="Chandigarh's Leading Mobile App Development Company"
                      cardHeading="Custom Android App Development Services"
                      cardParaGraph="As a skilled android app development company, we deliver custom android app development services using Java and Kotlin for high-performance, reliable Android apps that meet your business goals effectively."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c16}
                      altText="Chandigarh's Most Trusted Mobile App Development Company"
                      cardHeading="Mobile Application Development Service"
                      cardParaGraph=" We provide end-to-end mobile application development services—from design to deployment. As a mobile app development company in Chandigarh, we ensure smooth delivery with post-launch support and optimization."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <KeyPointSection
          keyHeading={
            <> Why Asvayuk Technologies is Among the Top App Making Companies</>
          }
          keyPara={
            <>
              As a seasoned kotlin app development company, we’ve earned a spot
              among top mobile software companies in Chandigarh. Our apps are
              known for their intuitive design and flawless performance.
            </>
          }
          hideKeyPoints={true}
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}
          altTags={{
            Group105518: "Mobile app development chandigarh",
          }}
        />

        <Experience
          expTitle={
            <>
              Best <span style={{ color: "#249f81" }}>App Development </span>{" "}
              Company For Diverse Industries
            </>
          }
          ExpPara={
            <>
              We serve clients across industries with our expert team of{" "}
              <b> mobile app developers </b>, delivering custom solutions for
              retail, healthcare, logistics, and more.
            </>
          }
          point1="Mobile Application Company
"
          pointPara1={
            <>
              We build intuitive mobile applications with modern design, secure
              architecture, and seamless functionality across platforms.
            </>
          }
          point2="Android App Development Service"
          pointPara2={
            <>
              We develop secure, high-performance Android apps using Kotlin,
              Java, and the latest frameworks for scalability.
            </>
          }
          point3="Best App Development Services
"
          pointPara3={
            <>
              We’re recognized for delivering reliable, innovative, and timely
              mobile app development services tailored to business needs.
            </>
          }
          point4="Top Mobile Software Companies"
          pointPara4={
            <>
              Ranked among top mobile software companies in Chandigarh, known
              for performance, design, and business-driven development.
            </>
          }
          altTags={{
            group1: "mobile app development company",
            group2: "android app development company",
            group3: "mobile app development companies in Chandigarh",
            group4: "best app development company",
            mockups: "e commerce app development services",
            whiteLogo: "android application development services",
          }}
        />

        <section className="saas-technology">
          <div className="container">
            <div className="px-5 mx-5">
              <div className="saas-technology-heading text-center">
                <h2>
                  Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App
                </h2>
              </div>
              <div className="row pt-5 text-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <img
                      src={html}
                      alt="Mobile app development service chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Flutter</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <img
                      src={react}
                      alt="Software Development Company in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>React Native</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <img
                      src={objective}
                      alt="Chandigarh's Most Trusted Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Android</h5>
                  </div>
                </div>
              </div>
              <div className="row pt-5 text-center justify-content-center">
                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <img
                      src={kotlin}
                      alt="Chandigarh's Leading Mobile App Development Company"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Java</h5>
                  </div>
                </div>

                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="saas-tools-img d-flex justify-content-center">
                    <img
                      src={swift}
                      alt="mobile app development companies in Chandigarh"
                    />
                  </div>
                  <div className="saas-tools-img-name d-flex justify-content-center">
                    <h5>Swift</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section">
          <Container className="process_container">
            <Row className="d-flex flex-column text-center">
              <div className="main-bg w-100">
                <div className="inside-main py-5">
                  <h1>Our Development Process</h1>
                  <div className="work-para mt-2">
                    <p>
                      At Asvayuk Technologies, we follow a structured and
                      transparent development process to ensure the delivery of
                      high-quality apps.
                    </p>
                  </div>

                  <Row className="curly-img curley-img mt-5">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img
                          src={container}
                          alt="best app development services"
                        />
                        <h6 className="mt-4">Requirement Analysis</h6>
                        <p className="text-light">
                          We take time to understand
                          <br />
                          your specific requirements, business objectives, and
                          target audience. This helps us design the perfect app
                          strategy.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img
                          src={planning}
                          alt="custom android app development services"
                        />
                        <h6 className="mt-4">Design & Prototyping</h6>
                        <p className="text-light">
                          Our designers craft intuitive and engaging designs. We
                          create wireframes and prototypes to give you an idea
                          of how the final app will function.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={pen} alt="mobile app development service" />
                        <h6 className="mt-4">Development</h6>
                        <p className="text-light">
                          Using cutting-edge technologies, our development team
                          brings your app to life, ensuring it is optimized for
                          speed, security, and scalability.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img
                          src={development}
                          alt="android app development service"
                        />
                        <h6 className="mt-4">Quality Assurance & Testing</h6>
                        <p className="text-light">
                          Our rigorous testing procedures help ensure that your
                          app is bug-free and functions as expected on all
                          devices and platforms.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img
                          src={test}
                          alt="mobile application development service"
                        />
                        <h6 className="mt-4">Launch & Post-Launch Support</h6>
                        <p className="text-light">
                          Our team of mobile testing experts performs testing
                          and debugging to ensure a reliable and optimal
                          functioning app.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="caseStuides ">
          <Container>
            <div className="caseStuides_content pb-4">
              <Row className="align-items-start">
                <Col lg={8}>
                  <h1 className="fw-semibold">Our Case Studies</h1>
                </Col>
                <Col lg={4} className="text-end">
                  <Link to="/case-studies" className="">
                    View All Case Studies{" "}
                    <span className="chevronicon">
                      <FaChevronRight />
                    </span>
                  </Link>
                  <div className="d-flex justify-content-end">
                    <div className="casestu_button position-relative mt-4 d-flex gap-5">
                      <div className="swiper-button-prev mt-0" />
                      <div className="swiper-button-next mt-0" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          <section className="fullCaseStudy">
            <Container>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                <SwiperSlide className="slider_bg3 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={CoffeeLogo}
                            alt="Chandigarh's Most Trusted Mobile App Development Company"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-3">
                          <h2 className="fw-semibold">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-3">
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>UI/UX</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>E-commerce</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>Shopify</span>
                            </div>
                          </div>
                          <p className="fullcase_para pb-4">
                            Moonlight Concept is a high-end Qatari brand
                            specialized in women’s apparel and garments. The
                            name choice was influenced by the concept ...
                          </p>
                          <Link
                            to="/case-studies"
                            className="fullCaseStudy_url"
                          >
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img
                          src={caseStu4}
                          alt="app development industry in Chandigarh"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg1 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={moonLight}
                            alt="Android Application Developer in Chandigarh"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-3">
                          <h2 className="fw-semibold">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-3">
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>UI/UX</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>E-commerce</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>Shopify</span>
                            </div>
                          </div>
                          <p className="fullcase_para pb-4">
                            Moonlight Concept is a high-end Qatari brand
                            specialized in women’s apparel and garments. The
                            name choice was influenced by the concept ...
                          </p>
                          <Link
                            to="/case-studies"
                            className="fullCaseStudy_url"
                          >
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img
                          src={caseStu2}
                          alt="Software Development Company in Chandigarh"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg2 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            width="226"
                            height="29"
                            viewBox="0 0 226 29"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#5789B5"
                              d="M76.8698.307818h-6.3411L64.8341 17.4841 59.1394.307818h-6.3718V21.8551h4.4018V6.21793l5.4484 15.63717h4.4018l5.4791-15.72951V21.8551h4.3711V.307818ZM86.5006 22.1629c4.7404 0 7.8494-2.955 7.8494-8.0033 0-5.01739-3.109-8.00323-7.8494-8.00323s-7.8493 2.98584-7.8493 8.00323c0 5.0483 3.1089 8.0033 7.8493 8.0033Zm0-3.3244c-2.2778 0-3.4475-1.9085-3.4475-4.6789 0-2.7395 1.1697-4.61723 3.4475-4.61723 2.2471 0 3.4476 1.87773 3.4476 4.61723 0 2.7704-1.2005 4.6789-3.4476 4.6789ZM106.323 0v8.24953c-.708-1.23127-2.309-2.09316-4.31-2.09316-3.8165 0-6.8947 3.10897-6.8947 8.15723 0 4.6172 2.5857 7.8493 6.7107 7.8493 2.678 0 4.063-1.4159 4.494-2.1855v1.8777h4.309V0h-4.309Zm-3.386 18.9616c-2.155 0-3.3861-1.6314-3.3861-4.5557 0-2.9243 1.2001-4.77118 3.4171-4.77118 2.093 0 3.355 1.60068 3.355 4.58648 0 3.1398-1.416 4.7404-3.386 4.7404ZM123.119 16.6838c-.308 1.4159-1.324 2.2163-3.079 2.2163-2.031 0-3.447-1.1698-3.663-3.7246h10.836v-.6772c0-5.51-2.894-8.34193-7.542-8.34193-5.048 0-7.665 3.60147-7.665 7.97253 0 4.4018 2.586 8.034 7.942 8.034 4.617 0 6.834-2.401 7.357-5.4791h-4.186Zm-3.386-7.3569c1.723 0 2.831 1.0158 3.047 3.2321h-6.28c.401-2.2163 1.509-3.2321 3.233-3.2321ZM138.211 6.46419c-2.832 0-4.278 1.84691-4.956 3.69381V6.46419h-4.463V21.8551h4.463v-5.356c0-5.3561 2.371-6.3103 5.418-6.3103h1.601V6.46419h-2.063ZM150.961 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V6.46419h-4.371V21.8551h4.371v-4.5865c0-5.6946 1.754-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.432v-9.4808c0-4.34024-1.97-6.21793-5.171-6.21793Z"
                            ></path>
                            <path
                              fill="#14134A"
                              d="M18.2536.307818H0V4.34024h6.77201V21.8551h4.70959V4.34024h6.772V.307818ZM29.1682 6.15637c-3.5399 0-4.9559 2.64724-5.4792 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.7546-7.51075 3.817-7.51075 1.7853 0 2.401 1.16975 2.401 3.66305v8.4342h4.4326v-9.4808c0-4.34024-1.9701-6.21793-5.1714-6.21793ZM46.8192 16.6838c-.3078 1.4159-1.3236 2.2163-3.0782 2.2163-2.0316 0-3.4476-1.1698-3.663-3.7246h10.8352v-.6772c0-5.51-2.8935-8.34193-7.5416-8.34193-5.0482 0-7.6647 3.60147-7.6647 7.97253 0 4.4018 2.5857 8.034 7.9418 8.034 4.6172 0 6.8335-2.401 7.3568-5.4791h-4.1863Zm-3.386-7.3569c1.7238 0 2.8319 1.0158 3.0474 3.2321h-6.2795c.4002-2.2163 1.5083-3.2321 3.2321-3.2321ZM162.763 14.9908h-4.618c.277 4.2479 3.294 7.1721 8.373 7.1721 4.402 0 7.695-1.97 7.695-5.9717 0-3.94-2.924-5.356-7.572-6.34101-3.478-.76955-4.556-1.66222-4.556-3.26287 0-1.66222 1.847-2.5549 3.694-2.5549 3.048 0 4.648 1.3544 4.864 4.09399h4.586C174.829 2.06238 170.704 0 165.964 0c-4.094 0-8.557 2.06238-8.557 6.49497 0 4.12473 2.77 5.87933 7.449 6.83353 3.109.708 4.586 1.2005 4.586 2.8935 0 1.4468-1.108 2.0932-2.709 2.0932-2.277 0-3.786-1.1389-3.97-3.3244ZM185.939 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.755-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.433v-9.4808c0-4.34024-1.97-6.21793-5.172-6.21793ZM200.327 22.1629c4.741 0 7.85-2.955 7.85-8.0033 0-5.01739-3.109-8.00323-7.85-8.00323-4.74 0-7.849 2.98584-7.849 8.00323 0 5.0483 3.109 8.0033 7.849 8.0033Zm0-3.3244c-2.278 0-3.447-1.9085-3.447-4.6789 0-2.7395 1.169-4.61723 3.447-4.61723 2.247 0 3.448 1.87773 3.448 4.61723 0 2.7704-1.201 4.6789-3.448 4.6789ZM218.335 6.15637c-1.97 0-3.571.86189-4.31 2.09316V6.46419h-4.371V28.6271h4.371v-8.6497c.462.7696 1.847 2.1855 4.525 2.1855 4.094 0 6.711-3.2321 6.711-7.8493 0-5.04826-3.078-8.15723-6.926-8.15723Zm-.893 12.80523c-2.001 0-3.417-1.6006-3.417-4.7404 0-2.9858 1.293-4.58648 3.386-4.58648 2.217 0 3.417 1.84688 3.417 4.77118s-1.231 4.5557-3.386 4.5557Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="fullCaseStudy_textContent py-3">
                          <h2 className="fw-semibold">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-3">
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>UI/UX</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>E-commerce</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>Shopify</span>
                            </div>
                          </div>
                          <p className="fullcase_para pb-4">
                            Moonlight Concept is a high-end Qatari brand
                            specialized in women’s apparel and garments. The
                            name choice was influenced by the concept ...
                          </p>
                          <Link
                            to="/case-studies"
                            className="fullCaseStudy_url"
                          >
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img
                          src={caseStu3}
                          alt="skilled iOS app developers in Chandigarh"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg4 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={kriLogo}
                            alt="Mobile app development service chandigarh"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-3">
                          <h2 className="fw-semibold">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-3">
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>UI/UX</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>E-commerce</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>Shopify</span>
                            </div>
                          </div>
                          <p className="fullcase_para pb-4">
                            Moonlight Concept is a high-end Qatari brand
                            specialized in women’s apparel and garments. The
                            name choice was influenced by the concept ...
                          </p>
                          <Link
                            to="/case-studies"
                            className="fullCaseStudy_url"
                          >
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img
                          src={caseStu5}
                          alt="Best Mobile App Development Company In Chandigarh"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg5 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={kreLogo}
                            alt="Chandigarh's Most Trusted Mobile App Development Company"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-3">
                          <h2 className="fw-semibold">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-3">
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>UI/UX</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>E-commerce</span>
                            </div>
                            <div className="bg-dark text-white py-1 px-2 rounded-2">
                              <span>Shopify</span>
                            </div>
                          </div>
                          <p className="fullcase_para pb-4">
                            Moonlight Concept is a high-end Qatari brand
                            specialized in women’s apparel and garments. The
                            name choice was influenced by the concept ...
                          </p>
                          <Link
                            to="/case-studies"
                            className="fullCaseStudy_url"
                          >
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img
                          src={caseStu6}
                          alt="Chandigarh's Leading Mobile App Development Company"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </section>
        </section>

        <FAQAccordion title="FAQs on Mobile App Development" faqs={faqData} />
      </main>
    </>
  );
}

export default MobileAppDevelopment;
