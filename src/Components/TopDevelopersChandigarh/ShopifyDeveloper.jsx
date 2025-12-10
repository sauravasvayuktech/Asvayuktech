import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaSearch, FaBullseye, FaMugHot, FaRocket, FaShopify, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";
// import shopifyImg from '../../Images/shopifyImg1.webp'
import reviewGoogle from '../../Images/review_google.webp'
import GoodFirms from '../../Images/GoodFirms.webp'
import Glassdoor from '../../Images/Glassdoor.webp'
import shopifystoreapp from '../../Images/shopifyImgbg2.png'
import wshopify from '../../Images/shopifyImgbg.png'
import work1 from '../../Images/shopifyworkImg1.png'
import work2 from '../../Images/shopifyworkImg2.png'
import work3 from '../../Images/work3.png'
import banShopSml from '../../Images/banSY.png'

import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { GrOptimize } from "react-icons/gr";
import { IoIosStopwatch } from 'react-icons/io';
import { FaStore } from "react-icons/fa6";
import Meta_Component from '../Meta_Component/Meta_Component';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import FAQAccordion from '../../accordian/FAQAccordion'
import BannerButton from '../BannerBtn/BannerButton';
import ContactForm from '../ContactPage/ContactForm';

const faqData = [
    {
        question: "Why should I choose Asvayuk Technologies for Shopify web development services in Chandigarh?",
        answer: "At Asvayuk Technologies, we combine creative design with technical expertise to build high-quality Shopify stores. Our team ensures a seamless user experience, mobile responsiveness, SEO-optimized solutions, and the latest Shopify technology integration."
    },
    {
        question: "How much does Shopify website development cost in Chandigarh?",
        answer: "The cost varies based on design complexity, features & integrations, and project scope. We offer affordable and customized Shopify development solutions, ensuring you get the best value for your investment."
    },
    {
        question: "How long does it take to develop a Shopify website?",
        answer: "The development time depends on the complexity and features required. A basic Shopify store can take 2-4 weeks, while a more complex store with custom features may take longer. We work closely with our clients to deliver the project on time without compromising on quality."
    },
    {
        question: "Do you offer Shopify website maintenance services?",
        answer: "Yes, Asvayuk Technologies provides comprehensive Shopify website maintenance services in Chandigarh. We offer ongoing support, updates, and troubleshooting to ensure your Shopify store remains up-to-date and performs optimally."
    },
    {
        question: "Can you integrate third-party apps into my Shopify store?",
        answer: "Yes, our Shopify development experts in Chandigarh are skilled at integrating third-party apps and tools into your Shopify store. Whether you need payment gateways, inventory management, or marketing tools, we can integrate apps to enhance your store’s functionality."
    },
    {
        question: "Do you offer Shopify website development services in Mohali?",
        answer: "Yes, we offer Shopify website development services in Mohali as well. As a leading Shopify web development company in Chandigarh, we extend our services to businesses in Mohali and surrounding areas, providing top-quality Shopify website design and development solutions."
    }
];


const ShopifyDeveloper = () => {
    return (
        <>
            <Meta_Component
                title="Shopify Website Design Company in Chandigarh"
                description="As a leading Shopify Website Design Company Chandigarh, Asvayuk Technologies offers expert Shopify development services for your online store."
                canonical="https://asvayuktech.com/best-shopify-developer-chandigarh"
            />
            <main>
                <section className='bannerMlm shopifyImageBg' aria-label='Shopify development services in Chandigarh'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xm={7} sm={12} lg={7} md={6}>
                                <div className="bannerAreaTop">
                                    <div className="logoArea pb-4">
                                    </div>
                                    <div className='bannerAreaTop_content'>
                                        <h1 className="h1 mb-5 text-white"><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7"><span style={{ color: '#ffbf0b' }}>Shopify</span> Website Design Company in <span style={{ color: '#ffbf0b' }}>Chandigarh!</span></Link></h1>
                                        <p className='text-white'>
                                            At Asvayuk Technologies Private Ltd., we are a leading Shopify website design company in Chandigarh,
                                            specializing in crafting visually appealing, user-friendly, and high-performance Shopify websites.
                                            As a top Shopify development company in Chandigarh,
                                            we help businesses build their online presence with expert Shopify web development services.
                                            Our team of skilled Shopify web developers in Chandigarh is dedicated to delivering outstanding results,
                                            ensuring that your e-commerce store is not only attractive but also fully functional, fast, and scalable.
                                        </p>
                                    </div>
                                    <div className="review_section mb-5">
                                        <div className="review_img">
                                            <img src={reviewGoogle} alt="Shopify Website Development Chandigarh" />
                                        </div>
                                        <div className="review_img mx-2">
                                            <img src={GoodFirms} alt="Shopify Web Development in Chandigarh" />
                                        </div>
                                        <div className="review_img">
                                            <img src={Glassdoor} alt="Shopify Development Company Chandigarh" />
                                        </div>
                                    </div>
                                    <div className="lst_text_banner">
                                        <div className="item1">
                                            <div className="ml-0">
                                                <p className='text-white'>*Top-notch Shopify Proficiency <span className="mx-1"></span> | <span className="mx-1"></span>*100% Confidentiality <span className="mx-1"></span> | <span className="mx-1"></span> *24*7 Customer Support</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col xm={5} sm={12} lg={5} md={6} className='bannerAreaTop'>
                                <div className='overflow-hidden w-100 h-100 bg-light rounded-4'>
                                    {/* <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" allowfullscreen className='mb-0  rounded-4' style={{ background: 'transparent' }}></iframe> */}
                                    <ContactForm/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section aria-label='Shopify development agency in chandigarh'>
                    <div className="container-fluid" style={{ position: 'relative', backgroundColor: '#2acda814' }}>
                        <div className="">
                            <div className="animation_section">

                                <svg viewBox="0 0 1320 300">
                                    <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                        SHOPIFY EXPERTS
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-label='Shopify website provider chandigarh'>
                    <div className="project-count-sec top_style" style={{ paddingBottom: '120px', paddingTop: '50px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex mobile_device" style={{ justifyContent: 'center' }}>
                                    <div className="pro-box text-center">
                                        <span className="pro-head">500+</span>
                                        <p>Shopify <br /> Projects Completed</p>
                                    </div>
                                    <div className="pro-box text-center mobile_padding_set" style={{ paddingLeft: '0px' }}>
                                        <span className="pro-head">12+</span>
                                        <p>Years of <br /> Experience</p>
                                    </div>
                                    <div className="pro-box text-center team_Experts" style={{ border: 'unset !important', padding: '0px 0px 0px 10px' }}>
                                        <span className="pro-head">100+</span>
                                        <p>Team of <br />Experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box " id="feature" aria-label='Shopify development store near chandigarh'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="mt-5">
                                    <h2>Shopify Website Development in Chandigarh</h2>
                                    <p className="my-3">When it comes to Shopify website development in Chandigarh, Asvayuk Technologies stands out as a trusted provider. We offer comprehensive Shopify development services in Chandigarh, from initial design to ongoing store maintenance. Whether you need a custom Shopify store, theme modifications, or app integrations, our Shopify development agency in Chandigarh has the expertise to deliver it all. We understand that every business is unique, and that’s why we provide tailored Shopify development solutions that align with your business goals.</p>
                                </div>
                                <div className="my-5">
                                    <BannerButton
                                        btnTitle="Hire Shopify Developers!"
                                        blockChainClass="blue_btn"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div>
                                    <img src={shopifystoreapp} alt="Shopify website design company in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section-box " id="feature" aria-label='Shopify web developers in Chandigarh'>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">What Features Do We Offer?</h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaShieldAlt className='secondary-color' alt='Best Shopify Website Design Company in Chandigarh' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Quality Service</a>
                                        </h3>
                                        <p>We offer the most amazing and quality service for Shopify app development. Our motive is to provide such services that bring a smile on our client’s face.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <IoIosStopwatch alt='Top Shopify Development Agency in Panchkula' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">On-Time Delivery</a>
                                        </h3>
                                        <p>We complete the project at the given time and therefore, offer on-time delivery so that you can begin with your online business ASAP.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaQuestionCircle alt='Expert Shopify Website Designers in Mohali' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Support </a>
                                        </h3>
                                        <p>We take care of our clients even after the development. We provide great and easy support and assistance services post development. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="image-with-text" aria-label='Shopify website development Mohali'>
                    <div className="container">
                        <div className="row d-flex align-items-center flex-wrap">
                            <div className='col-lg-6'>
                                <img alt="Shopify website development Mohali" className="img-fluid" src={wshopify} />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">Why Choose Asvayuk Technologies for Shopify Web Development in Chandigarh? </h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className='text-white'>Our Shopify website design services in Chandigarh are crafted to enhance the shopping experience, boost conversions, and help your online store grow. With a strong focus on mobile responsiveness, SEO optimization, and user experience, we ensure that your store stands out in the competitive e-commerce landscape.
                                    </p>
                                    <p className="font_16 text-white">As a leading Shopify website design company in Chandigarh, Asvayuk Technologies offers the perfect blend of creativity and technical expertise to build exceptional Shopify stores. Here’s why businesses prefer our Shopify development services in Chandigarh.</p>
                                    <div className="list_view_text">
                                        <ul>
                                            <li>Expert Shopify Developers</li>
                                            <li>Tailored Solutions</li>
                                            <li>SEO-Optimized Stores</li>
                                            <li>Mobile-Friendly Design</li>
                                            <li>Affordable and Reliable</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="services" aria-label='Shopify web development experts Chandigarh'>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Shopify Website Development Services in Chandigarh</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 my-0">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">
                                    <div className='service-icon'>
                                        <FaStore alt='Professional Shopify Web Developers in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Shopify Store Design & Development
                                    </h3>
                                    <p className="">Irrespective of the size and category, our Shopify specialists build a highly responsive, user and SEO-friendly store. Hire dedicated Shopify developers now!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">.
                                    <div className='service-icon'>
                                        <MdMiscellaneousServices alt='Custom Shopify Store Development in Panchkula' />
                                    </div>
                                    <h3 className="color_343a40">Shopify Theme Customization
                                    </h3>
                                    <p className="">Hire Shopify developers to develop responsive, interactive, and user-friendly themes explicit to your retail industry and business needs.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">
                                    <div className='service-icon'>
                                        <FaShopify alt='Leading Shopify E-commerce Developers in Mohali' />
                                    </div>
                                    <h3 className="color_343a40">Shopify App Development
                                    </h3>
                                    <p className="">We have the best Shopify Apps development team, mastered in all the latest tools and technologies. They ensure high-class Shopify App development.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">
                                    <div className='service-icon'>
                                        <MdIntegrationInstructions alt='Affordable Shopify Website Services in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Shopify Store Setup</h3>
                                    <p className="">Hire Shopify Expert to seamlessly integrate multiple payment gateways, CMS, or other third-party APIs relevant to your business model and requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">
                                    <div className='service-icon'>
                                        <FaComputer alt='Responsive Shopify Website Design in Panchkula' />
                                    </div>
                                    <h3 className="color_343a40">Shopify Store Maintenance
                                    </h3>
                                    <p className="">Anytime you believe the need for your store migration to Shopify, count on us. Our Shopify experts will see that your Shopify migration will be smooth and seamless.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative h-75 d-flex flex-column pb-2">
                                    <div className='service-icon'>
                                        <GrOptimize alt='Trusted Shopify Website Development in Mohali' />
                                    </div>
                                    <h3 className="color_343a40">Shopify SEO Services
                                    </h3>
                                    <p className="">Do not worry about Shopify-related queries. We have the most skilled and experienced Shopify development team to guide you throughout your project development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="portfolio" aria-label='Shopify development services in Chandigarh'>
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Work</h2>
                        </div>
                        <div className="row d-flex align-items-center flex-wrap">
                            <PortfolioItem
                                workImage={work1}
                                altText='Shopify E-commerce Experts in Chandigarh'
                                projectTitle="Pumpd Store"
                                projectCategory="Shopify Development"
                                projectLink="https://pumpdstore.com/"
                            />
                            <PortfolioItem
                                workImage={work2}
                                altText='Best Shopify Store Setup Services in Panchkula'
                                projectTitle="Furvital"
                                projectCategory="Shopify Development"
                                projectLink="https://furvital.com/"
                            />
                            <PortfolioItem
                                workImage={work3}
                                altText='Custom Shopify Theme Development in Mohali'
                                projectTitle="ShopifyWebsite"
                                projectCategory="Shopify Development"
                                projectLink="https://asilocloud.com"
                            />

                        </div>
                    </div>
                </section>

                <section className="section-box333 col-12 pl-0 pr-0" id="image-with-text" aria-label='Shopify development agency in chandigarh'>
                    <div className="container">
                        <div className="row d-flex align-items-center flex-wrap">
                            <div className='col-lg-6'>
                                <img alt="Top Shopify Development Companies in Chandigarh" className="img-fluid" src={banShopSml} />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">
                                        "Leading Shopify Website Design & Development Company in Chandigarh – Asvayuk Technologies&#34;</h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className='text-white'>
                                        As one of the top Shopify website design companies in Chandigarh, Asvayuk Technologies Private Ltd. offers unparalleled expertise in Shopify development. Whether you’re looking to build a new e-commerce store, revamp your existing one, or need expert assistance in Shopify development, we are here to help. Our team of Shopify web developers in Chandigarh is committed to delivering high-quality, user-friendly, and SEO-optimized Shopify stores that help your business thrive in the competitive online marketplace.
                                    </p>
                                    <p className="font_16 text-white">Contact us today to get started with your Shopify development project and elevate your online store with professional Shopify web development services in Chandigarh!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 bg_f8f8ff mt-3" id="our_work" aria-label='Shopify development store near chandigarh'>
                    <Container>
                        <div className="section-title mt-2">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                How Do We Work?
                            </h2>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                                    <Row>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaSearch className="icon-md text-white" alt='Top-Rated Shopify Designers in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">1</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Discovery</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        This is basically the first step where the client shares their ideas with us and we discover what all we have to do to develop a website, app, or store.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaBullseye className="icon-md text-white" alt='Scalable Shopify E-commerce Solutions in Panchkula' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">2</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Planning</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        After listening to the idea of the client, we begin the planning process to provide the best services and to make sure everything goes as planned.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaMugHot className="icon-md text-white" alt='SEO-Friendly Shopify Stores in Mohali' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">3</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Design & Development</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Now comes the design and development part. We make sure to use the latest technology and customized designs to develop a website that is a ‘dream come true.’
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaRocket className="icon-md text-white" alt='Top Shopify Development Agency in Panchkula' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">4</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Final UAT + Launch</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Now comes the last but one of the most important steps, which is testing and then launching the website. UAT is the last phase of the software testing process; once UAT is done, the website or store is ready to launch.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <FAQAccordion title="Frequently Asked Questions (FAQs) About Shopify Development" faqs={faqData} />
            </main>
        </>
    );
};

export default ShopifyDeveloper;