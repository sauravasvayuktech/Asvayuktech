import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import Group_591 from '../../Images/Group-591.webp'
import Group_652 from '../../Images/Group-652.webp'
import Group_859 from '../../Images/Group-859.webp'
import Group_105519 from '../../Images/Group-105519.webp'
import Group_649 from '../../Images/Group-649.webp'
import Group_650 from '../../Images/Group-650 (1).webp'
import ServicesCard from './ServicesCard'
import c11 from '../../Images/c11.webp';
import c12 from '../../Images/c12.webp';
import c13 from '../../Images/c13.webp';
import c14 from '../../Images/c14.webp';
import c15 from '../../Images/c15.webp';
import c16 from '../../Images/c16.webp';
import CoffeeLogo from '../../Images/49thcoffee_logo.webp'
import caseStu4 from '../../Images/caseStu4.webp'
import moonLight from '../../Images/moonlight_logo.webp';
import caseStu2 from '../../Images/caseStu2.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import kriLogo from '../../Images/kri_logo.webp';
import kreLogo from '../../Images/kre.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import Experience from '../HomePage/Experience'
import container from '../../Images/container.webp'
import planning from '../../Images/planning.webp'
import pen from '../../Images/pen.webp'
import development from '../../Images/development.webp'
import test from '../../Images/test.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
import Meta_Component from '../Meta_Component/Meta_Component'
import FAQAccordion from "../../accordian/FAQAccordion.jsx";
import KeyPointSection from './KeyPointSection';
import Group105518 from '../../Images/mad.webp'

const faqData = [
    {
        question: "Why should I choose Asvayuk Technologies Private Ltd. for eCommerce website development?",
        answer: "We offer customized, SEO-friendly, and mobile-responsive eCommerce development services in Chandigarh, ensuring a high-performing online store tailored to your business needs."
    },
    {
        question: "What is the estimated time required to develop an eCommerce website?",
        answer: "The timeline varies based on the project's complexity. On average, it takes 4-6 weeks for a fully functional eCommerce website."
    },
    {
        question: "Do you provide Shopify website development in Chandigarh?",
        answer: "Yes, we specialize in Shopify Website Development in Chandigarh to create professional, scalable online stores."
    },
    {
        question: "Can I integrate multiple payment gateways into my eCommerce website?",
        answer: "Absolutely! We integrate secure and trusted payment gateways like PayPal, Stripe, Razorpay, and more."
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Yes, all our eCommerce websites are designed to be fully responsive and work seamlessly on all devices."
    },
    {
        question: "What is the price of developing an eCommerce website?",
        answer: "The cost varies based on your requirements and features. Contact us for a customized quote."
    }
];



const ECommerce = () => {

    return (
        <>
            <Meta_Component
                title="eCommerce Website Designing Company Chandigarh"
                description="As a leading eCommerce Website Design Company in Chandigarh, we create sales-driven, user-friendly websites tailored to your business needs."
                canonical="https://asvayuktech.com/ecommerce-website-designing-company-chandigarh"
            />
            <main>
                <section className="banner-en py-3">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en pb-2">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>E-commerce Development</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">eCommerce Website Designing Company Chandigarh</Link></h1>
                                    <p className="py-3">
                                        In today’s digital world, establishing a strong online presence is crucial for the success of your business.
                                        At Asvayuk Technologies Private Ltd., a leading <b>eCommerce Website Designing Company Chandigarh</b>,
                                        we are committed to delivering top-notch eCommerce website solutions that drive sales, enhance customer engagement,
                                        and provide seamless shopping experiences.</p>
                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={Group_591} alt="Ecommerce Website designing Company Chandigarh" width="100%" height="100%" />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="saas-sec e-commerce-sec py-5">
                    <Container>
                        <Row className='d-flex justify-content-between pt-5  text-center'>
                            <Col lg={2} md={4} sm={6} className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="blockchain-col-img d-flex text-center">
                                    <img src={Group_652} className="img-fluid" alt='Ecommerce Website Development Company in Chandigarh' />
                                </div>
                                <div className="blockchain-col-text mt-3">
                                    <p className="text-center">Easy To Use

                                    </p>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="blockchain-col-img d-flex text-center">
                                    <img src={Group_859} className="img-fluid" alt='Professional Ecommerce Website Builders in Chandigarh' />
                                </div>
                                <div className="blockchain-col-text mt-3">
                                    <p className="text-center">Fully Customized

                                    </p>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="blockchain-col-img d-flex text-center">
                                    <img src={Group_105519} className="img-fluid" alt='website designing services in Chandigarh' />
                                </div>
                                <div className="blockchain-col-text mt-3">
                                    <p className="text-center">Feature Rich</p>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="blockchain-col-img d-flex text-center">
                                    <img src={Group_649} className="img-fluid" alt='e commerce website provider chandigarh' />
                                </div>
                                <div className="blockchain-col-text mt-3">
                                    <p className="text-center">Highly Secured</p>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} className="col-6 d-flex flex-column justify-content-center align-items-center">
                                <div className="blockchain-col-img d-flex text-center">
                                    <img src={Group_650} className="img-fluid" alt='e-commerce development business in Chandigarh' />
                                </div>
                                <div className="blockchain-col-text mt-3">
                                    <p className="text-center">Extremely Affordable</p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>

                <section className="performance_card2">
                    <div className="container">
                        <div className="col-12">
                            <div className="peformance_card2_heading text-center">
                                <h1 className='fw-semibold pb-2'>Our eCommerce <br />
                                    Development Services
                                </h1>
                                <p className="mt-3">Crafting Digital Success for Your Business</p>
                            </div>
                            <div className="performance_card2_inner-sec mt-5">
                                <div className="row">
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c11} altText="website designing services in Chandigarh" cardHeading='Custom eCommerce Design & Development' cardParaGraph='Tailored eCommerce solutions that reflect your brand’s identity, designed to enhance user experience and maximize conversions.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c12} altText="Professional Ecommerce Website Builders in Chandigarh" cardHeading='Shopify and Magento Store Setup' cardParaGraph='Seamless Shopify and Magento store setup, crafted for efficient operations and a smooth shopping experience.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c13} altText="e-commerce development business in Chandigarh" cardHeading='WooCommerce & OpenCart Solutions' cardParaGraph='Scalable WooCommerce and OpenCart solutions, designed to give you complete control over your online store.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c14} altText="Ecommerce Developers in Chandigarh" cardHeading='Multi-Vendor Marketplace Development' cardParaGraph='Build a robust multi-vendor marketplace, enabling you to manage multiple sellers while optimizing business growth.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c15} altText="ecommerce development services in Chandigarh" cardHeading='Mobile App Integration for eCommerce' cardParaGraph='Boost customer engagement by seamlessly integrating your eCommerce platform with user-friendly mobile apps.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c16} altText="Shopify Website Development in Chandigarh" cardHeading='Speed Optimization & Performance Enhancement' cardParaGraph='Enhance your store’s speed with cutting-edge optimization strategies, ensuring fast load times and a smooth browsing experience.' />
                                    </div>
                                    <div className="ecommerce_cards d-lg-flex justify-content-center gap-4 d-block">
                                        <div className="col-lg-4 pb-4 d-flex">
                                            <ServicesCard ServiceCardImg={c13} altText="Magento Ecommerce Development in Chandigarh" cardHeading='Secure Hosting & Domain Services' cardParaGraph='Reliable, secure hosting and domain services that guarantee your website’s uptime and protect customer data.' />
                                        </div>
                                        <div className="col-lg-4 pb-4 d-flex">
                                            <ServicesCard ServiceCardImg={c12} altText="Ecommerce Website Makers in Chandigarh" cardHeading='Sitecore Commerce Development' cardParaGraph='Engage shoppers with omnichannel buying experiences across touchpoints and moments using Sitecore commerce solutions.' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="readTransform bgdark">
                    <Container>
                        <Row>
                            <div className="readTransform_content text-center">
                                <h1 className="pb-4 mb-0 fw-semibold">
                                    Want Clean, Attractive, and Seamless eCommerce Solutions?
                                </h1>
                                <div >

                                    <BannerButton
                                        btnTitle="Let's Discuss"
                                        blockChainClass="btnHome bg-white d-inline-block text-dark px-4 py-3 fs-5 rounded-1 fw-medium"
                                    />
                                </div>

                            </div>
                        </Row>
                    </Container>
                </section>

                <Experience expTitle={<>Why Choose Us as Your eCommerce Website Provider in Chandigarh?</>}
                    ExpPara='From sparking innovative ideas to transforming them into market-ready products, our extensive range of solutions is crafted to enhance your business value.'
                    point1='Custom eCommerce Solutions'
                    pointPara1='We offer personalized website development that suits your business model and target audience.'
                    point2='SEO-Optimized Websites' pointPara2='Our websites are built with SEO best practices, ensuring higher search rankings and better visibility.'
                    point3='Mobile-Friendly Designs' pointPara3='We create responsive designs to enhance user experience on all devices'
                    point4='24/7 Support & Maintenance' pointPara4='Reliable support and updates to keep your website running smoothly.'
                    altTags={{
                        group1: "Professional Ecommerce Website Builders in Chandigarh",
                        group2: "website designing services in Chandigarh",
                        group3: "e-commerce development business in Chandigarh",
                        group4: "ecommerce development services in Chandigarh",
                        mockups: "Professional Ecommerce Website Builders in Chandigarh",
                        whiteLogo: "Ecommerce Website designing Company Chandigarh"
                    }}
                />

                <KeyPointSection keyHeading={<>Benefits of eCommerce Development for Your Business</>}
                    keyPara={<>The e-commerce industry is growing rapidly, and businesses need a professional e-commerce development business in Chandigarh to thrive.
                        As a leading eCommerce Website Designing Company Chandigarh, here are some benefits of having an online store :</>}
                    keyPoint1='Global Reach'
                    keyPoint2='24/7 Availability'
                    keyPoint3='Cost-Effective'
                    keyPoint4='Better Customer Insights'
                    keyPoint5='Higher Conversion Rates'
                    url="/contact-us" btnTitle="Request Consultation"
                    Group105518={Group105518}
                    altTags={{
                        check1: "e commerce website provider chandigarh",
                        check2: "E-commerce in Chandigarh",
                        check3: "Ecommerce Website Makers in Chandigarh",
                        check4: "Shopify Website Development in Chandigarh",
                        check5: "Magento Ecommerce Development in Chandigarh",
                        Group105518: "Ecommerce Website designing Company Chandigarh"
                    }}
                />

                <section className="performance_card2">
                    <div className="container">
                        <div className="col-12">
                            <div className="Experienceg_title text-center">
                                <div>
                                    <h2 className="fw-bold mb-4">Transform Your Business with a Leading eCommerce Website Designing Company in Chandigarh</h2>
                                </div>
                            </div>
                            <div className="performance_card2_inner-sec mt-5">
                                <div className="row">
                                    <div className="ecommerce_cards d-lg-flex justify-content-center gap-4 d-block">
                                        <div className="col-lg-4 pb-4 d-flex">
                                            <ServicesCard ServiceCardImg={c14} altText='Ecommerce Website Development Company in Chandigarh' cardHeading='Best eCommerce Website Designing Company in Chandigarh' cardParaGraph={<>Asvayuk Technologies Private Ltd. is a top-rated eCommerce Website Designing Company in Chandigarh, providing cutting-edge solutions to help businesses build a strong online presence. Whether a startup or an established brand, our expert team ensures a seamless shopping experience for your customers.</>} />
                                        </div>
                                        <div className="col-lg-4 pb-4 d-flex">
                                            <ServicesCard ServiceCardImg={c15} altText='Ecommerce Website designing Company Chandigarh' cardHeading='Expert eCommerce Website Designing & Development in Chandigarh' cardParaGraph={<>We design and develop feature-rich, secure, and user-friendly eCommerce websites tailored to your business needs. As a trusted eCommerce Website Designing Company in Chandigarh, we specialize in Shopify, Magento, WooCommerce, and custom-built platforms for maximum scalability and performance.</>} />
                                        </div>
                                        <div className="col-lg-4 pb-4 d-flex">
                                            <ServicesCard ServiceCardImg={c16} altText='Professional Ecommerce Website Builders in Chandigarh' cardHeading='Leading eCommerce Website Development Company in Chandigarh' cardParaGraph={<>Looking for a reliable eCommerce Website Development Company in Chandigarh? Asvayuk Technologies Private Ltd. specializes in creating high-performance, secure, and scalable online stores. Let’s build your dream eCommerce website with seamless functionality, mobile responsiveness, and advanced features to elevate your business to new heights.</>} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="caseStuides ">
                    <Container>
                        <div className="caseStuides_content pb-4">
                            <Row className='align-items-start'>
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
                                <SwiperSlide className='slider_bg3 slider_bg'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={CoffeeLogo} alt="Ecommerce Website Development Company in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-3">
                                                    <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu4} alt="Professional Ecommerce Website Builders in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg1 slider_bg'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={moonLight} alt="website designing services in Chandigarh" />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-3">
                                                    <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu2} alt="e commerce website provider chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg2 slider_bg'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" width="226" height="29" viewBox="0 0 226 29" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="#5789B5" d="M76.8698.307818h-6.3411L64.8341 17.4841 59.1394.307818h-6.3718V21.8551h4.4018V6.21793l5.4484 15.63717h4.4018l5.4791-15.72951V21.8551h4.3711V.307818ZM86.5006 22.1629c4.7404 0 7.8494-2.955 7.8494-8.0033 0-5.01739-3.109-8.00323-7.8494-8.00323s-7.8493 2.98584-7.8493 8.00323c0 5.0483 3.1089 8.0033 7.8493 8.0033Zm0-3.3244c-2.2778 0-3.4475-1.9085-3.4475-4.6789 0-2.7395 1.1697-4.61723 3.4475-4.61723 2.2471 0 3.4476 1.87773 3.4476 4.61723 0 2.7704-1.2005 4.6789-3.4476 4.6789ZM106.323 0v8.24953c-.708-1.23127-2.309-2.09316-4.31-2.09316-3.8165 0-6.8947 3.10897-6.8947 8.15723 0 4.6172 2.5857 7.8493 6.7107 7.8493 2.678 0 4.063-1.4159 4.494-2.1855v1.8777h4.309V0h-4.309Zm-3.386 18.9616c-2.155 0-3.3861-1.6314-3.3861-4.5557 0-2.9243 1.2001-4.77118 3.4171-4.77118 2.093 0 3.355 1.60068 3.355 4.58648 0 3.1398-1.416 4.7404-3.386 4.7404ZM123.119 16.6838c-.308 1.4159-1.324 2.2163-3.079 2.2163-2.031 0-3.447-1.1698-3.663-3.7246h10.836v-.6772c0-5.51-2.894-8.34193-7.542-8.34193-5.048 0-7.665 3.60147-7.665 7.97253 0 4.4018 2.586 8.034 7.942 8.034 4.617 0 6.834-2.401 7.357-5.4791h-4.186Zm-3.386-7.3569c1.723 0 2.831 1.0158 3.047 3.2321h-6.28c.401-2.2163 1.509-3.2321 3.233-3.2321ZM138.211 6.46419c-2.832 0-4.278 1.84691-4.956 3.69381V6.46419h-4.463V21.8551h4.463v-5.356c0-5.3561 2.371-6.3103 5.418-6.3103h1.601V6.46419h-2.063ZM150.961 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V6.46419h-4.371V21.8551h4.371v-4.5865c0-5.6946 1.754-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.432v-9.4808c0-4.34024-1.97-6.21793-5.171-6.21793Z">
                                                        </path>
                                                        <path fill="#14134A" d="M18.2536.307818H0V4.34024h6.77201V21.8551h4.70959V4.34024h6.772V.307818ZM29.1682 6.15637c-3.5399 0-4.9559 2.64724-5.4792 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.7546-7.51075 3.817-7.51075 1.7853 0 2.401 1.16975 2.401 3.66305v8.4342h4.4326v-9.4808c0-4.34024-1.9701-6.21793-5.1714-6.21793ZM46.8192 16.6838c-.3078 1.4159-1.3236 2.2163-3.0782 2.2163-2.0316 0-3.4476-1.1698-3.663-3.7246h10.8352v-.6772c0-5.51-2.8935-8.34193-7.5416-8.34193-5.0482 0-7.6647 3.60147-7.6647 7.97253 0 4.4018 2.5857 8.034 7.9418 8.034 4.6172 0 6.8335-2.401 7.3568-5.4791h-4.1863Zm-3.386-7.3569c1.7238 0 2.8319 1.0158 3.0474 3.2321h-6.2795c.4002-2.2163 1.5083-3.2321 3.2321-3.2321ZM162.763 14.9908h-4.618c.277 4.2479 3.294 7.1721 8.373 7.1721 4.402 0 7.695-1.97 7.695-5.9717 0-3.94-2.924-5.356-7.572-6.34101-3.478-.76955-4.556-1.66222-4.556-3.26287 0-1.66222 1.847-2.5549 3.694-2.5549 3.048 0 4.648 1.3544 4.864 4.09399h4.586C174.829 2.06238 170.704 0 165.964 0c-4.094 0-8.557 2.06238-8.557 6.49497 0 4.12473 2.77 5.87933 7.449 6.83353 3.109.708 4.586 1.2005 4.586 2.8935 0 1.4468-1.108 2.0932-2.709 2.0932-2.277 0-3.786-1.1389-3.97-3.3244ZM185.939 6.15637c-3.54 0-4.956 2.64724-5.479 4.09403V0h-4.371v21.8551h4.371v-4.5865c0-5.6946 1.755-7.51075 3.817-7.51075 1.785 0 2.401 1.16975 2.401 3.66305v8.4342h4.433v-9.4808c0-4.34024-1.97-6.21793-5.172-6.21793ZM200.327 22.1629c4.741 0 7.85-2.955 7.85-8.0033 0-5.01739-3.109-8.00323-7.85-8.00323-4.74 0-7.849 2.98584-7.849 8.00323 0 5.0483 3.109 8.0033 7.849 8.0033Zm0-3.3244c-2.278 0-3.447-1.9085-3.447-4.6789 0-2.7395 1.169-4.61723 3.447-4.61723 2.247 0 3.448 1.87773 3.448 4.61723 0 2.7704-1.201 4.6789-3.448 4.6789ZM218.335 6.15637c-1.97 0-3.571.86189-4.31 2.09316V6.46419h-4.371V28.6271h4.371v-8.6497c.462.7696 1.847 2.1855 4.525 2.1855 4.094 0 6.711-3.2321 6.711-7.8493 0-5.04826-3.078-8.15723-6.926-8.15723Zm-.893 12.80523c-2.001 0-3.417-1.6006-3.417-4.7404 0-2.9858 1.293-4.58648 3.386-4.58648 2.217 0 3.417 1.84688 3.417 4.77118s-1.231 4.5557-3.386 4.5557Z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="fullCaseStudy_textContent py-3">
                                                    <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu3} alt="e-commerce development business in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg4 slider_bg'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kriLogo} alt="Ecommerce Developers in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-3">
                                                    <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu5} alt="ecommerce development services in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg5 slider_bg'>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kreLogo} alt="E-commerce in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-3">
                                                    <h2 className="fw-semibold">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu6} alt="Shopify Website Development in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>
                </section>


                <section className="bg-section">
                    <Container className='process_container'>
                        <Row className="d-flex flex-column text-center">
                            <div className="main-bg w-100">
                                <div className="inside-main py-5">
                                    <h1>Our E-Commerce Website Development Process</h1>
                                    <Row className="curly-img curley-img mt-5">
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={container} alt="Magento Ecommerce Development in Chandigarh" />
                                                <h6 className="mt-3">Consultation & Planning</h6>
                                                <p className="text-light">Understanding your business goals and requirements.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={planning} alt="Ecommerce Website Makers in Chandigarh" />
                                                <h6 className="mt-3">Design & Development</h6>
                                                <p className="text-light">Creating an engaging and functional eCommerce website.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={pen} alt="Ecommerce Website Development Company in Chandigarh" />
                                                <h6 className="mt-3">Integration & Testing</h6>
                                                <p className="text-light">Implementing payment gateways, security features, and testing the website.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={development} alt="Professional Ecommerce Website Builders in Chandigarh" />
                                                <h6 className="mt-3">Launch & Marketing</h6>
                                                <p className="text-light">Making your site live with SEO and digital marketing strategies</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={test} alt="e-commerce development business in Chandigarh" />
                                                <h6 className="mt-3">Support & Maintenance</h6>
                                                <p className="text-light">Regular updates and performance monitoring.</p>
                                            </div>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <FAQAccordion title="FAQs on eCommerce Development" faqs={faqData} />
            </main>
        </>
    )
}

export default ECommerce