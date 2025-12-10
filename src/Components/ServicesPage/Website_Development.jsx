import React from "react";
// ;
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerButton from "../BannerBtn/BannerButton";
import web_banner from "../../Images/banners-7-1.webp";
import Group_558 from "../../Images/Group-558.webp";
import Group_168 from "../../Images/Group-168.webp";
import ServicesCard from "./ServicesCard";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import c15 from "../../Images/c15.webp";
import c16 from "../../Images/c16.webp";
import Experience from "../HomePage/Experience";
import html from "../../Images/html.webp";
import react from "../../Images/react.webp";
import objective from "../../Images/objective.webp";
import kotlin from "../../Images/kotlin.webp";
import swift from "../../Images/js2.webp";
import container from "../../Images/container.webp";
import planning from "../../Images/planning.webp";
import pen from "../../Images/pen.webp";
import development from "../../Images/development.webp";
import test from "../../Images/test.webp";
import launch from "../../Images/launch.webp";
import CoffeeLogo from "../../Images/49thcoffee_logo.webp";
import caseStu4 from "../../Images/caseStu4.webp";
import moonLight from "../../Images/moonlight_logo.webp";
import caseStu2 from "../../Images/caseStu2.webp";
import caseStu3 from "../../Images/caseStu3.webp";
import kriLogo from "../../Images/kri_logo.webp";
import kreLogo from "../../Images/kre.webp";
import caseStu5 from "../../Images/caseStu5.webp";
import caseStu6 from "../../Images/caseStu6.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import Meta_Component from "../Meta_Component/Meta_Component";
import FAQAccordion from "../../accordian/FAQAccordion.jsx";

const faqData = [
  {
    question: "Why should I choose your website designing company in Chandigarh?",
    answer:
      "We combine creativity, strategy, and local expertise. Our team delivers responsive, fast, and SEO-ready websites tailored for your audience.",
  },
  {
    question: "Do you offer E-commerce website development in Chandigarh?",
    answer:
      "Yes, we specialize in E-commerce website development Chandigarh, including custom solutions and Shopify store development.",
  },
  {
    question: "Can you design a static website for my small business?",
    answer:
      " Absolutely. Our Static website design Chandigarh services are perfect for startups and small businesses looking for a professional web presence.",
  },
  {
    question: "Do you provide services in Mohali and Zirakpur as well?",
    answer:
      " Yes, we are a top-rated website development company in Mohali and a preferred web development company in Zirakpur, trusted by many local businesses.",
  },
  {
    question: "What makes your team different from other web designing companies in Chandigarh?",
    answer:
      "Our team includes certified web designers in Chandigarh with real-world experience. We focus on performance, UX, and business conversion.",
  },
  {
    question: "Are your websites mobile-friendly and SEO-optimized?",
    answer:
      "Yes, every project is built to be responsive and optimized for search engines, helping you get better visibility and results.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course! Whether it's a fresh redesign or a performance upgrade, our website designing agency in Chandigarh is ready to transform your online presence.",
  },
];

const Website_Development = () => {  

  return (
    <>
      <Meta_Component
        title="Website Designing Company in Chandigarh"
        description="Looking for a professional website designing company in Chandigarh? We create SEO-friendly, responsive websites that grow your business."
        canonical="https://asvayuktech.com/website-designing-company-in-chandigarh-and-mohali"
      />

      <main>
        <section className="banner-en p-5">
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
                      Website Development
                    </Breadcrumb.Item>
                  </Breadcrumb>
                  <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Website Designing Company in Chandigarh
</Link></h1>
                  <p className="py-3">
                  Looking for a trusted and creative website designing company in Chandigarh? Asvayuk Technologies Private Ltd. is here to bring your digital vision to life with precision and style.
                  </p>

                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg">
                  <img src={web_banner} alt="Website Development Company in Chandigarh and Mohali" width="100%" height="100%" />  
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="woocomerce">
          <Container>
            <Row>
              <div className="woocomerce-heading position-relative">
                <h2>
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Best Website Designing Services 

                  </span>
                  <br />
                  in Chandigarh
                </h2>
                <div className="woocomerce-imgs d-flex justify-content-center d-none d-md-block">
                  <img
                    src={Group_558}
                    className="position-absolute woocomerce-imgs-left"
                    alt="Website development services in chandigarh"
                  />
                  <img
                    src={Group_168}
                    className="position-absolute woocomerce-imgs-right"
                    alt="website designers chandigarh, mohali"
                  />
                </div>
              </div>
              <div className="woocomerce-buttons d-flex flex-column flex-md-row justify-content-center gap-3 text-center">
                <Link to="#">
                  <span>
                    Responsiveness <br />
                    Web Designs
                  </span>
                </Link>
                <Link to="#">
                  <span>
                    Mobile Friendly &amp;
                    <br />
                    Optimized
                  </span>
                </Link>
              </div>
            </Row>
          </Container>
        </section>

          <section className="performance_card2">
            <div className="container">
              <div className="col-12">
                <div className="peformance_card2_heading text-center">
                  <h2>
                    What We Offer in Website Design & Development
                  </h2>
                  <p className="mt-3">
                  At <b>Asvayuk Technologies</b>, we offer a comprehensive range of website development services in Chandigarh and Mohali,ensuring customized solutions for diverse business needs.
                  </p>
                </div>
                <div className="performance_card2_inner-sec mt-5">
                  <div className="row">
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c11}
                        altText="Website development services in chandigarh"
                        cardHeading="Custom Website Design"
                        cardParaGraph=" We create tailored websites based on your brand identity, industry standards, and business goals, delivering high-performance solutions that reflect your vision and engage your target audience effectively."
                      />
                    </div>
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c12}
                        altText="website designers chandigarh, mohali"
                        cardHeading="E-commerce Website Development Chandigarh"
                        cardParaGraph="We develop scalable and secure online stores for Chandigarh businesses, offering powerful features, intuitive layouts, and seamless user experiences that boost conversions and grow online revenue rapidly."
                      />
                    </div>
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c13}
                        altText="website development company mohali"
                        cardHeading="Static Website Design Chandigarh"
                        cardParaGraph="We craft fast, efficient, and lightweight static websites for Chandigarh businesses with limited content, ensuring a professional look, smooth navigation, and responsive design across all devices."
                      />
                    </div>
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c14}
                        altText="web development agency chandigarh"
                        cardHeading="Shopify Website Development Chandigarh"
                        cardParaGraph="We build Shopify-powered websites for Chandigarh businesses, offering customized designs, secure payment setups, SEO-ready features, and responsive layouts to boost visibility and online store success.  "
                      />
                    </div>
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c15}
                        altText="website development provider chandigarh"
                        cardHeading="Mobile Responsive Design"
                        cardParaGraph="We design websites that flawlessly adapt across all screen sizes, ensuring consistent user experience, fast load times, and smooth interactions on mobile, tablet, laptop, and desktop devices."
                      />
                    </div>
                    <div className="col-lg-4 pb-4">
                      <ServicesCard
                        ServiceCardImg={c16}
                        altText="best web developers of chandigarh and mohali"
                        cardHeading="SEO-Optimized Web Design"
                        cardParaGraph="We develop websites that follow Google’s SEO guidelines, incorporating keyword-rich content, fast loading speed, and user-friendly layouts to help your website rank better on search engines."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        <Experience
          expTitle="Web Development Company in Chandigarh & Beyond"
          ExpPara={<>At Asvayuk Technologies Private Ltd., we also offer end-to-end web development in Chandigarh, Mohali, Panchkula, Zirakpur, and nearby regions—handled efficiently by our expert team of professional website developers Chandigarh, ensuring high-quality, scalable digital solutions.</>}
          point1="Website Development Company in Mohali"
          pointPara1="Delivering quality development for growing businesses in Mohali."
          point2="Website Development Services in Panchkula"
          pointPara2="From design to deployment, we support all stages of development."
          point3="Web Development Company Zirakpur"
          pointPara3="Helping local businesses go online with effective web solutions."
          point4="Website Developer in Chandigarh"
          pointPara4=" Experienced developers to handle both static and dynamic needs."
          altTags={{
              group1: "Website Designing in Chandigarh",
              group2: "Website development company in chandigarh",
              group3: "web development agency chandigarh",
              group4: "website development provider chandigarh",
              mockups: "best web developers of chandigarh and mohali",
              whiteLogo: "Website development company chandigarh and mohali"
          }}
        />

          <section className="saas-technology">
                    <div className="container">
                        <div className="px-5 mx-5">
                            <div className="saas-technology-heading text-center">
                                <h2>Our Arsenal of Powerful Tech Stack To Fuel Your Mobile App</h2>
                            </div>
                            <div className="row pt-5 text-center">
                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={html} alt="Website development company chandigarh and mohali"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>HTML/CSS</h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={react} alt="Website development services in chandigarh"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>React </h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={objective} alt="website designers chandigarh, mohali"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Objective-C</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-5 text-center justify-content-center">
                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={kotlin} alt="website development company mohali"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Kotlin</h5>
                                    </div>
                                </div>

                                <div className="saas_content col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="saas-tools-img d-flex justify-content-center">
                                        <img src={swift} alt="web development agency chandigarh"/>
                                    </div>
                                    <div className="saas-tools-img-name d-flex justify-content-center">
                                        <h5>Java Script</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
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
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img
                            src={CoffeeLogo}
                            alt="website development company mohali"
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
                        <img src={caseStu4} alt="best web development in chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_bg1 slider_bg">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                      <div className="fullcase_details">
                        <div className="fullCaseStudy_slider_logo">
                          <img src={moonLight} alt="web development agency chandigarh" />
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
                        <img src={caseStu2} alt="website development provider chandigarh" className="w-100" />
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu3} alt="Website provider in mohali chandigarh" className="w-100" />
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
                            alt="best web developers of chandigarh and mohali"
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu5} alt="website designing service mohali" className="w-100" />
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
                            alt="Website Designing in Chandigarh"
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
                          <Link to="#" className="fullCaseStudy_url">
                            Read Full Case Study
                            <FaArrowRightLong className="mx-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                      <div className="fullCaseStudy_img">
                        <img src={caseStu6} alt="Website development company in chandigarh" className="w-100" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </section>
        </section>

        <section className="performance_card2">
          <div className="container">
            <div className="col-12">
              <div className="peformance_card2_heading text-center">
                <h2>
                  The Best
                  <span style={{ color: "#249f81" }}>
                    {" "}
                    Web Developers in Chandigarh and Mohali
                  </span>
                </h2>
              <h2>Pioneers of the Digital Future</h2>

              </div>
              <div className="performance_card2_inner-sec mt-5">
                <div className="row">
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c11}
                      cardHeading="Top Web Development Wizards of Chandigarh and Mohali , Unleashing Digital Brilliance!"
                      cardParaGraph="Our team of skilled website designers in Chandigarh and Mohali works with the latest technologies, including HTML, CSS, JavaScript, PHP, Python, and frameworks like React, Angular, and Laravel, ensuring high-performance websites tailored to your business goals."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c12}
                      cardHeading="Why Invest in Professional Website Development"
                      cardParaGraph="A professionally designed website boosts credibility, improves user engagement, and enhances search engine rankings. By partnering with a website development company in Chandigarh and mohali, like Asvayuk Technologies, you gain a competitive edge in the digital landscape."
                    />
                  </div>
                  <div className="col-lg-4 pb-4 d-flex">
                    <ServicesCard
                      ServiceCardImg={c14}
                      cardHeading="Contact Us for Website Development Services in Chandigarh and Mohali"
                      cardParaGraph={
                        <>
                        If you're looking for a <b><i><u><Link to={"https://maps.app.goo.gl/cpxwrvwmx5cdUScg7"}>website development provider in Chandigarh and Mohali</Link></u></i></b> , Asvayuk Technologies Private Ltd. is here to help. Contact us today for a free consultation and take your business online with a powerful website!
                        </>
                      }
                    />
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
                  <h1>Our Method of Specialization</h1>
                  <div className="work-para mt-2">
                    <p>
                      Our team of expert website developers plan, design,
                      develop, test, optimize, and launch website that redefine
                      user experiences.
                    </p>
                  </div>

                  <Row className="curly-img curley-img mt-5">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={container} alt="Website development company in chandigarh" />
                        <h6 className="mt-3">Product Design</h6>
                        <p className="text-light ">
                          We specialize in crafting innovative and user-centric
                          design strategies to deliver a captivating app
                          experience.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={planning} alt="Website Designing in Chandigarh" />
                        <h6 className="mt-3">Website Consulting</h6>
                        <p className="text-light">
                          Tailored guidance and strategic insights to shape your
                          app concept into a successful product.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={pen} alt="Website development services in chandigarh" />
                        <h6 className="mt-3">UI/UX Compatibility</h6>
                        <p className="text-light">
                          Seamlessly integrate compelling design with intuitive
                          user experiences for enhanced engagement..
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={development} alt="best web development in chandigarh" />
                        <h6 className="mt-3">Development</h6>
                        <p className="text-light">
                          Leveraging cutting-edge technologies to build robust,
                          scalable, and high-performance mobile applications.
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={test} alt="website development provider chandigarh" />
                        <h6 className="mt-3">QA & Testing</h6>
                        <p className="text-light">
                          Our team of mobile testing experts conducts rigorous
                          testing and debugging to ensure a reliable and
                          optimal-functioning app.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="Industries">
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
        <FAQAccordion title="FAQs on Website Development" faqs={faqData} />
      </main>
    </>
  );
};

export default Website_Development;