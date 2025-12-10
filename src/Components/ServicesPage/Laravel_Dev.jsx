import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButton from "../BannerBtn/BannerButton";
import banners_52_1 from "../../Images/banners-52-1.webp";
import KeyPointSection from "./KeyPointSection";
import Group105518 from "../../Images/Group-105518.webp";
import Experience from "../HomePage/Experience";
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
import ServicesCard from "./ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
import c16 from "../../Images/c16.webp";
import work3 from "../../Images/larawk2.jpg";
import work2 from "../../Images/larawk3.jpg";
import FAQAccordion from "../../accordian/FAQAccordion";

const faqData = [
  {
    question: "Why should I choose Laravel for my website development?",
    answer:
      "Laravel offers security, scalability, and flexibility, making it an ideal choice for web applications, eCommerce platforms, and APIs.",
  },
  {
    question: "How much does Laravel website development cost in Chandigarh?",
    answer:
      "The cost depends on project complexity and features. Contact us for a custom quote.",
  },
  {
    question: "Can I hire a dedicated Laravel developer in Chandigarh?",
    answer:
      "Yes! You can hire a Laravel developer in Chandigarh from our expert team for full-time or project-based work.",
  },
  {
    question: "How long does it take to develop a Laravel web application?",
    answer:
      "Project timelines vary based on requirements. Typically, Laravel web development takes 4-12 weeks depending on features.",
  },
  {
    question:
      "Why choose Asvayuk Technologies Private Ltd. for Laravel development?",
    answer:
      "We offer cost-effective, high-quality Laravel website development services in Chandigarh, ensuring secure, scalable, and feature-rich solutions.",
  },
];

const Laravel_Dev = () => {
  return (
    <>
      <Meta_Component
        title="Laravel Development Company in Chandigarh"
        description="Top Laravel Development Company in Chandigarh – Asvayuk Technologies offers expert web solutions for your business needs"
        canonical="https://asvayuktech.com/laravel-development-company-in-chandigarh"
      />
      <main>
        <section className="banner-en py-3">
          <Container>
            <Row className="align-items-center">
              <div className="col-lg-6">
                <div className="banner_textInfo-en">
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>
                      Technology
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      Laravel Development
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <h1 className="pt-2"><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Laravel Development Company in Chandigarh</Link></h1>
                  <p className="py-3">
                    Asvayuk Technologies Private Ltd. is a top-rated Laravel
                    Development Company in Chandigarh, specializing in building
                    high-performance, scalable, and secure web applications.
                    With years of expertise in Laravel web development in
                    Chandigarh, we deliver custom solutions tailored to your
                    business needs. Whether you need a Laravel eCommerce
                    website, API integration, or enterprise web applications,
                    our expert Laravel developers in Chandigarh ensure seamless,
                    feature-rich, and optimized solutions.
                  </p>

                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg d-flex justify-content-center align-items-center">
                  <img src={banners_52_1} alt="Laravel Development Company Chandigarh" className="w-75 py-5" />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="Empowering pt-5 py-4">
          <div className="container">
            <div className="Empowering_title text-center pb-2 pb-md-5">
              <h1 className="fw-semibold">
                Our Laravel Development Services<br/> in Chandigarh
              </h1>
              <p>
                At Asvayuk Technologies Private Ltd., we offer a wide range of
                Laravel website development services in Chandigarh
                <br /> to cater different business requirements.
              </p>
            </div>
            <div className="row pt-2">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 pb-3 pb-lg-0 pt-md-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c11}
                  altText="Laravel website development Mohali"
                  cardHeading="Custom Laravel Web Development"
                  cardParaGraph={
                    <>
                      Tailored solutions to match your unique business goals.
                      <br />
                      High-speed and optimized web applications.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 d-flex">
                <ServicesCard
                  ServiceCardImg={c12}
                  altText="Laravel Development Partner in Chandigarh"
                  cardHeading="Laravel eCommerce Development Services Chandigarh"
                  cardParaGraph={
                    <>
                      Feature-rich, scalable, and secure eCommerce
                      websites.Integration with payment gateways, inventory, and
                      order management.
                    </>
                  }
                />
              </div>
            </div>
            <div className="row pt-0 pt-lg-3 pt-md-3">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c13}
                  altText="Laravel PHP development services in Chandigarh"
                  cardHeading="Laravel API Development in Chandigarh"
                  cardParaGraph={
                    <>
                      Custom API development for seamless integrations. Secure
                      and scalable API solutions for mobile and web
                      applications.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c14}
                  altText="Laravel eCommerce development services Chandigarh"
                  cardHeading="Laravel Web Application Development Chandigarh"
                  cardParaGraph={
                    <>
                      Enhance app performance with consistent user experiences
                      across platforms using React Native, supported by Asvayuk
                      Technologies
                    </>
                  }
                />
              </div>
            </div>
            <div className="row pt-0 pt-lg-3 pt-md-3 pb-5">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c15}
                  altText="Best Laravel development company under budget in Chandigarh"
                  cardHeading="Laravel Development Outsourcing in Chandigarh"
                  cardParaGraph={
                    <>
                      Leveraging Flutter, Google’s UI toolkit, Asvayuk
                      Technologies creates visually stunning, natively compiled
                      applications for mobile and web platforms.
                    </>
                  }
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                <ServicesCard
                  ServiceCardImg={c16}
                  altText="Hire Laravel developer in Chandigarh"
                  cardHeading="Laravel Website Maintenance and Support"
                  cardParaGraph={
                    <>
                      Integrating web technologies efficiency with native app
                      performance Asvayuk Technologies offers robust hybrid app
                      development solutions.
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-section">
            <Container>
                <div className="main-bg">
                <div className="tool-heading pt-5 pb-3">
                    <h2 className="conclusion_title mb-2 text-center">
                    Get Started with The Best Laravel Development Company in Chandigarh
                    </h2>
                    <div>
                    <p className="text-white lh-base fs-6 pt-3 text-center">
                        Looking for a Laravel development partner in
                        Chandigarh to build your next web application?<br/> Asvayuk
                        Technologies Private Ltd. is here to provide expert
                        solutions.
                    </p>
                    </div>
                </div>
                </div>
            </Container>
        </section>

        <KeyPointSection
          keyHeading={
            <>
              Leading Laravel Development Company
              <br /> in Chandigarh
            </>
          }
          keyPara="Get in touch with us to learn about our cutting-edge development solutions that leverage Laravel's capabilities to create safe, scalable, and smooth online solutions. Select Laravel for unrivaled proficiency."
          keyPoint1="Innovative Architecture"
          keyPoint2="High Performance with Flexibility"
          keyPoint3="Scalability at its Core"
          keyPoint4="Optimized Performance"
          keyPoint5="Security Assurance"
          url="/contact-us"
          btnTitle="Request Consultation"
          Group105518={Group105518}

          altTags={{
              check1: "Best Laravel development company under budget in Chandigarh",
              check2: "Hire Laravel developer in Chandigarh",
              check3: "Laravel website development Mohali",
              check4: "Laravel Development Partner in Chandigarh",
              check5: "Laravel PHP development services in Chandigarh",
              Group105518: "Laravel Development Company Chandigarh"
          }}
        />

        <section className="laravel-projects-section py-5">
          <div className="container">
            <div className="text-center Experienceg_title">
              <h2>Real-Life Examples of Our Laravel Projects</h2>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Laravel-Based eCommerce Website
                    </h3>
                    <p className="project-description">
                      We developed a Laravel-powered multi-vendor eCommerce
                      platform for a retail client, integrating features like
                      real-time inventory updates, secure payment gateways, and
                      customer tracking.
                    </p>
                  </div>
                  <div className="project-image">
                    <img src={work2} alt="Laravel Web Development in Chandigarh" />
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <div className="project-card">
                  <div className="project-text">
                    <h3 className="project-title">
                      Laravel API Integration for a Mobile App
                    </h3>
                    <p className="project-description">
                      We built a custom Laravel API for a fintech startup,
                      ensuring smooth synchronization between their mobile
                      application and web backend.
                    </p>
                  </div>
                  <div className="project-image">
                    <img src={work3} alt="Laravel website development Mohali" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience
          expTitle="Why Choose Laravel for Web Development?"
          point1="Fast Development"
          pointPara1="Laravel simplifies complex tasks, reducing development time."
          point2="High Security"
          pointPara2="Built-in security features protect websites from threats."
          point3="Scalability"
          pointPara3="Suitable for startups to large enterprises."
          point4="Eloquent ORM"
          pointPara4="Simplifies database management."

          altTags={{
              group1: "Laravel PHP development services in Chandigarh",
              group2: "Laravel website development agency Chandigarh",
              group3: "laravel website development services Chandigarh",
              group4: "Laravel website development agency Chandigarh",
              mockups: "Laravel eCommerce development services Chandigarh",
              whiteLogo: "Laravel API development in Chandigarh"
          }}
        />

        <section className="bg-section">
          <Container className="process_container">
            <Row className="d-flex flex-column text-center">
              <div className="main-bg w-100">
                <div className="inside-main py-5">
                  <h1>Laravel Development Process We Follow</h1>
                  <p className="py-1 text-white fs-5 pb-4">
                    To ensure high-quality Laravel solutions, we follow a
                    structured development process:
                  </p>
                  <Row className="curly-img curley-img mt-2">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={container} alt="Laravel developers in Chandigarh," />
                        <h6 className="mt-3">Requirement Analysis</h6>
                        <p className="text-light ">
                          Understanding client needs and project scope.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={planning} alt="Laravel Development Partner in Chandigarh" />
                        <h6 className="mt-3">Planning & Strategy</h6>
                        <p className="text-light">
                          Choosing the right development approach.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={pen} alt="laravel website development services Chandigarh" />
                        <h6 className="mt-3">Design & Development</h6>
                        <p className="text-light">
                          Creating user-friendly and high-performance solutions
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={development} alt="Laravel PHP development services in Chandigarh" />
                        <h6 className="mt-3">Testing & Deployment</h6>
                        <p className="text-light">
                          Ensuring bug-free and optimized website launch.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={test} alt="Laravel website development agency Chandigarh" />
                        <h6 className="mt-3">Maintenance & Support</h6>
                        <p className="text-light">
                          Providing ongoing technical support and updates
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
                  <Link to="#" className="">
                    View All Case Studies <span className='chevronicon'><FaChevronRight /></span>
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
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={CoffeeLogo}
                            alt="Laravel web application development Chandigarh"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-4">
                          <h2 className="fw-semibold lh-base">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-4">
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
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu4} alt="Laravel eCommerce development services Chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg1 slider_bg">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img src={moonLight} alt="Laravel API development in Chandigarh" />
                        </div>
                        <div className="fullCaseStudy_textContent py-4">
                          <h2 className="fw-semibold lh-base">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-4">
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
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu2} alt="Best Laravel development company under budget in Chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg2 slider_bg">
                  <div className="row align-items-center">
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
                        <div className="fullCaseStudy_textContent py-4">
                          <h2 className="fw-semibold lh-base">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-4">
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu3} alt="Hire Laravel developer in Chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg4 slider_bg">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={kriLogo}
                            alt="Laravel development outsourcing in Chandigarh"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-4">
                          <h2 className="fw-semibold lh-base">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-4">
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu5} alt="Laravel Web Development in Chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg5 slider_bg">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={kreLogo}
                            alt="laravel website development services Chandigarh"
                            className="slider_bg3_logo"
                          />
                        </div>
                        <div className="fullCaseStudy_textContent py-4">
                          <h2 className="fw-semibold lh-base">
                            IT TAKES A CREATIVE MIND TO BE IN THE FASHION
                            BUSINESS.
                          </h2>
                          <div className="subfullCaseStudy d-flex gap-3 py-4">
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu6} alt="Laravel PHP development services in Chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </section>
        </section>

        <section className="Industries py-4 mt-3">
          <div className="container">
            <div>
              <h1 className="fw-semibold">Industries We Serve</h1>
              <p>
                Staying attuned to diverse industries, we serve a wide range of
                sectors, providing customized solutions that set new benchmarks
                and drive innovation..
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">eCommerce</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">Blockchain</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">Healthtech </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">AI Bots</h3>
                </div>
              </div>
            </div>
            <div className="row pt-0 pt-lg-3 pt-md-3">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">Traveltech</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">Realtech</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">tecFintechh</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                  <h3 className="mb-0">Edtech</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQAccordion title="FAQs on Laravel Development" faqs={faqData} />
      </main>
    </>
  );
};

export default Laravel_Dev;
