import React from 'react'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Magento_service_card from './Magento_service_card'
import service1 from '../../Images/services1.webp'
import service2 from '../../Images/services2.webp'
import service3 from '../../Images/services3.webp'
import service4 from '../../Images/services4.webp'
import service5 from '../../Images/services5.webp'
import service6 from '../../Images/services6.webp'
import BannerButton from '../BannerBtn/BannerButton'
import banners_41_1 from '../../Images/banners-41-1.webp'
import Group105518 from '../../Images/Group-105518.webp'
import Group_839 from '../../Images/Group-839.webp'
import work2 from "../../Images/larawk3.jpg";
import container from '../../Images/container.webp'
import planning from '../../Images/planning.webp'
import pen from '../../Images/pen.webp'
import development from '../../Images/development.webp'
import test from '../../Images/test.webp'
import Experience from '../HomePage/Experience'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
import CoffeeLogo from '../../Images/49thcoffee_logo.webp'
import caseStu4 from '../../Images/caseStu4.webp'
import moonLight from '../../Images/moonlight_logo.webp';
import caseStu2 from '../../Images/caseStu2.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import kriLogo from '../../Images/kri_logo.webp';
import kreLogo from '../../Images/kre.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import Meta_Component from '../Meta_Component/Meta_Component'
import FAQAccordion from "../../accordian/FAQAccordion"
import KeyPointSection from './KeyPointSection'


const faqData = [
    {
      question: "Why should I invest in UI/UX design services?",
      answer:
        "Investing in UI/UX design improves user engagement, increases conversions, enhances brand reputation, and provides a seamless experience, driving business growth.",
    },
    {
      question: "What makes Asvayuk Technologies Private Ltd. the best UI/UX designers in Chandigarh?",
      answer:
        "We offer innovative, research-driven, and affordable UI/UX design solutions tailored to your business needs. Our team ensures high-quality and conversion-focused designs.",
    },
    {
      question: "Do you offer mobile app UI/UX development in Chandigarh?",
      answer:
        "Yes, we specialize in mobile app UI/UX development in Chandigarh, creating user-friendly and high-performing app interfaces for various industries.",
    },
    {
      question: "What is the cost of UI/UX design services?",
      answer:
        "The cost depends on project complexity, requirements, and customization needs. We provide affordable UI/UX design services in Chandigarh with flexible pricing.",
    },
    {
      question: "How can I get started with your UI/UX design services?",
      answer:
        "You can contact Asvayuk Technologies Private Ltd. today for a free consultation and discuss your UI/UX design needs with our experts.",
    },
  ];
  


const UI_UX_Design = () => {
    return (
        <>
            <Meta_Component
                title="Best UI/UX designers in Chandigarh | Asvayuk Technologies"
                description="Looking for the Best UI/UX designers in Chandigarh? Asvayuk Technologies offers top-notch UI/UX solutions for websites & mobile apps."
                canonical="https://asvayuktech.com/best-ui-ux-designers-in-chandigarh"
            />

            <main>

                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                        <Breadcrumb.Item active>UI/UX Design</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Best UI/UX Designers in Chandigarh</Link></h1>
                                    <p className="py-3">In today’s digital era, an intuitive and visually appealing user interface (UI) combined with a seamless user experience (UX) is essential for any business. At Asvayuk Technologies Private Ltd., we take pride in being one of the best UI/UX designers in Chandigarh, delivering innovative and user-friendly digital solutions tailored to your business needs.</p>

                                    <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6 pb-4">
                                <div className="bannerImg d-flex justify-content-center align-items-center">
                                    <img src={banners_41_1} alt="Best UI/UX designers in Chandigarh" className='w-75 py-5' />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="bg-section">
                    <div className=''>
                        <Container>
                            <div className="main-bg p-3">
                            <div className="tool-heading py-5">
                                <h2 className="conclusion_title mb-2">
                                Elevate Your Brand with Expert UI/UX Design Solutions in Chandigarh
                                </h2>
                                <div>
                                <p className="text-white lh-lg fs-6 pt-3">
                                A well-crafted UI/UX design is the key to a successful digital presence. As one of the best UI/UX designers in Chandigarh, Asvayuk Technologies Private Ltd. is committed to delivering top-notch UI/UX solutions for businesses looking to enhance their online platforms. Contact us today and take your digital experience to the next level!
                                </p>
                                </div>
                            </div>
                            </div>
                        </Container>
                        </div>
                </section>

                <section className='magento_service_card'>
                    <Container>
                        <div className="card_heading text-center">
                            <h2 className='px-5 mx-5'>Our UI/UX Design Services in Chandigarh</h2>
                            <p className='mt-3 pb-3'>At Asvayuk Technologies Private Ltd., we offer a wide range of UI/UX design services to cater to different industries and business needs.</p>
                        </div>
                        <div>
                            <Row className='gy-4'>
                                <Col lg={4} className='d-flex'>
                                    <Magento_service_card cardImg={service1} altText='Top UI UX development companies in Chandigarh' cardHeading="Mobile App UI/UX Design Chandigarh" cardPara="Our team specializes in mobile app UI/UX development in Chandigarh, ensuring that your app delivers an engaging and effortless user experience. From wireframing to interactive prototypes, we design mobile apps that captivate and convert." />
                                </Col>
                                <Col lg={4} className='d-flex' >
                                    <Magento_service_card cardImg={service2} altText='Affordable UI UX design company in Chandigarh' cardHeading=" Website UI/UX Design Company in Chandigarh" cardPara="We create responsive, visually stunning, and user-friendly website designs. Our website UI/UX design company in Chandigarh ensures that your website is optimized for both desktop and mobile users." />
                                </Col>
                                <Col lg={4} className='d-flex' >
                                    <Magento_service_card cardImg={service3} altText='Best UI UX designers in Chandigarh' cardHeading="UI/UX Consulting Services Chandigarh" cardPara="Looking for expert advice on improving your digital product’s design? Our UI/UX consulting services in Chandigarh help businesses enhance their UI/UX strategies through research-driven insights and data analysis." />
                                </Col>
                                <Col lg={4} className='d-flex' >
                                    <Magento_service_card cardImg={service4} altText='Custom UI UX solutions in Chandigarh' cardHeading="Custom UI/UX Solutions in Chandigarh" cardPara="Our custom UI/UX solutions in Chandigarh are tailored to meet specific client requirements, ensuring a personalized user experience." />
                                </Col>
                                <Col lg={4} className='d-flex' >
                                    <Magento_service_card cardImg={service5} altText='User experience design company Chandigarh' cardHeading="UI/UX Development Agency in Chandigarh" cardPara="As a full-service UI /X development agency in Chandigarh, we offer end-to-end solutions, including UX research, UI design, prototyping, and testing to deliver the best results." />
                                </Col>
                                <Col lg={4} className='d-flex' >
                                    <Magento_service_card cardImg={service6} altText='Mobile app UI UX development Chandigarh' cardHeading="E-Commerce UI/UX Design in Chandigarh" cardPara="We design conversion-focused e-commerce UI/UX for seamless navigation, engaging product displays, and a smooth checkout experience." />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                                                                                                                
                <section className="ui-ux-projects-section py-4 bg-section">
                    <div className="container py-4" >
                        <div className="text-center Experienceg_title">
                        <h2 className='text-white'>Transform Your Digital Experience with the Best UI/UX Designers in Chandigarh</h2>
                        </div>

                        <div className="row mt-5 pt- pb-3">
                        <div className="col-md-12">
                            <div className="project-card">
                            <div className="project-text">
                                <h3 className="project-title">
                                UI/UX Design Boosts E-Commerce Success
                            </h3>
                                <p className="project-description">
                                We developed a Laravel-powered multi-vendor eCommerce
                                platform for a retail client, integrating features like
                                real-time inventory updates, secure payment gateways, and
                                customer tracking.
                                </p>
                            </div>
                            <div className="project-image">
                                <img src={work2} alt="Top UI/UX development companies in Chandigarh" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>



                 <KeyPointSection 
                
                    keyHeading="Why UI/UX Design Matters?" 
                    keyPara={<>A well-structured UI/UX design plays a crucial role in the success of any digital platform. Here’s why investing in UI/UX design services in Chandigarh can transform your business.<br/><br/>As a leading UI/UX development company in Chandigarh, we craft engaging designs that improve customer interactions, boost conversions, and enhance brand credibility. Whether you need UI/UX services for a website, mobile app, or custom software, our expert designers ensure a flawless digital journey for your users.</>}
                    keyPoint1="Enhanced User Engagement"
                    keyPoint2="Higher Conversion Rates"
                    keyPoint3="Brand Credibility" 
                    keyPoint4="Lower Bounce Rates"
                    url="/contact-us"
                    btnTitle="Request Consultation"
                    Group105518={Group105518} 

                    altTags={{
                        check1: "UI UX development company in Chandigarh",
                        check2: "Custom UI UX solutions in Chandigarh",
                        check3: "User experience design company Chandigarh",
                        check4: "Mobile app UI UX development Chandigarh",
                        check5: "Best UI UX designers in mohali",
                        Group105518: "Affordable UI UX design company in Chandigarh"
                    }}

                />    

                <Experience 

                    expTitle='Why Choose Asvayuk Technologies Private Ltd. for UI/UX Design?'
                    ExpPara="If you're searching for top UI/UX development companies in Chandigarh, here’s why we stand out:'"
                    point1='Experienced Designers' 
                    pointPara1='Our team comprises highly skilled designers with years of experience in UI/UX design.' 
                    point2='Affordable UI/UX Design Company in Chandigarh' 
                    pointPara2='We offer cost-effective UI/UX solutions without compromising on quality.' 
                    point3='Innovative Approach' 
                    pointPara3='We integrate the latest design trends and technologies to create future-ready solutions.' 
                    point4='Client-Centric Solutions' 
                    pointPara4='Our UI/UX designs are tailored to meet the unique needs of our clients.' 

                    altTags={{
                        group1: "Top UI UX development companies in Chandigarh",
                        group2: "Affordable UI UX design company in Chandigarh",
                        group3: "Mobile app UI UX design Chandigarh",
                        group4: "UI UX consulting services Chandigarh",
                        mockups: "Website UI UX design company in Chandigarh",
                        whiteLogo: "Best UI UX designers in Chandigarh"
                    }}
                />

                   <section className="bg-section">
                    <Container className='process_container'>
                        <Row className="d-flex flex-column text-center">
                            <div className="main-bg w-100">
                                <div className="inside-main py-5">
                                    <h1>How We Ensure Exceptional UI/UX Design</h1>
                                    <div>
                                        <p className='text-white fs-5 pt-2 pb-4'>Our approach to UI/UX design follows a strategic and user-centered methodology:</p>
                                    </div>
                                    <Row className="curly-img curley-img mt-2">
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={container} alt="Affordable UI/UX design company in Chandigarh" />
                                                <h6 className="mt-3">User Research & Analysis</h6>
                                                <p className="text-light">Understanding your target audience, their needs, and pain points to create a user-focused design.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={planning} alt="Mobile app UI/UX design Chandigarh" />
                                                <h6 className="mt-3">Information Architecture & Wireframing </h6>
                                                <p className="text-light">Structuring content and designing wireframes to ensure seamless navigation and user flow.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={pen} alt="UI/UX consulting services Chandigarh" />
                                                <h6 className="mt-3">Prototyping & Interaction Design</h6>
                                                <p className="text-light">Developing interactive prototypes to visualize functionality before final implementation.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={development} alt="Website UI/UX design company in Chandigarh" />
                                                <h6 className="mt-3">User Testing & Feedback</h6>
                                                <p className="text-light">Gathering real user insights to refine and optimize the design for the best experience.</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={2}>
                                            <div className="work-images">
                                                <img src={test} alt="UI/UX development agency in Chandigarh" />
                                                <h6 className="mt-3">Visual Design & Development</h6>
                                                <p className="text-light">Crafting an aesthetically pleasing, high-performing, and responsive UI for a polished final product.</p>
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
                            <p>Staying attuned to diverse industries, we serve a wide range of sectors, providing customized
                                solutions that set new benchmarks and drive innovation..</p>
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
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={CoffeeLogo} alt="UI/UX development company in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu4} alt="Custom UI/UX solutions in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg1 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={moonLight} alt="User experience design company Chandigarh" />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu2} alt="Mobile app UI/UX development Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg2 slider_bg'>
                                    <div className="row align-items-center">
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
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu3} alt="Best UI/UX designers in mohali" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg4 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kriLogo} alt="Top UI/UX development companies in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu5} alt="Affordable UI/UX design company in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg5 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kreLogo} alt="Mobile app UI/UX design Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE
                                                        FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand
                                                        specialized in women’s apparel and garments. The name choice was
                                                        influenced by the concept ...</p>
                                                    <Link to="#" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu6} alt="Website UI/UX design company in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>
                </section>

                

                <FAQAccordion title="FAQs on UI/UX Design" faqs={faqData} />

            </main>
        </>
    )
}

export default UI_UX_Design