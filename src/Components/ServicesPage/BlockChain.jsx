import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBullseye, FaRocket, FaEnvelopeOpenText, FaMugHot } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap'
import Meta_Component from '../Meta_Component/Meta_Component.jsx'
import FAQAccordion from '../../accordian/FAQAccordion.jsx'
import reviewGoogle from '../../Images/review_google.webp'
import GoodFirms from '../../Images/GoodFirms.webp'
import Glassdoor from '../../Images/Glassdoor.webp'
import { MdHealthAndSafety } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdRealEstateAgent } from "react-icons/md";
import { FaRecycle } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import work1 from '../../Images/crypotoImg1.png'
import work2 from '../../Images/crypotoImg2.png'
import work3 from '../../Images/crypotoImg3.png'
import blockchainBanner from '../../Images/blockchainBanner.jpg';
import blockchainSmallBanner from '../../Images/blockchainSmallBanner.jpg'
import BlockChainBan4 from '../../Images/BlockChainBan4.png'
import BannerButton from '../BannerBtn/BannerButton.jsx';
import ContactForm from '../ContactPage/ContactForm.jsx';

const BlockChain = () => {

    const faqData = [
        {
            question: "Why choose Asvayuk Technologies Private Ltd. for blockchain web development in Chandigarh?",
            answer: "We are a trusted blockchain development company in Chandigarh with a proven track record of delivering innovative and secure blockchain solutions. Our team of experts ensures high-quality development with a customer-centric approach."
        },
        {
            question: "What industries can benefit from blockchain technology?",
            answer: "Blockchain is useful for finance, healthcare, logistics, real estate, supply chain, and more. Businesses looking for blockchain for businesses in Chandigarh can benefit from enhanced security, efficiency, and transparency."
        },
        {
            question: "What is the cost of blockchain web development?",
            answer: "The cost varies based on project complexity, features, and integrations. As a leading blockchain web development provider in Chandigarh, we offer customized pricing based on your specific requirements."
        },
        {
            question: "Do you provide private blockchain solutions?",
            answer: "Yes, we offer private blockchain solutions in Chandigarh for businesses looking to build secure, permissioned networks for internal operations."
        },
        {
            question: "Can you develop crypto tokens?",
            answer: "Yes, we are a crypto token development company in Chandigarh, providing tokenization services for various business models, including DeFi, gaming, and investment platforms."
        }
    ];

    return (
        <>
            <Meta_Component
                title="Blockchain Web Development Chandigarh | Asvayuk Technologies"
                description="As a trusted Blockchain Web Development Chandigarh company, we offer innovative solutions to build secure and scalable blockchain applications."
                canonical="https://asvayuktech.com/blockchain-web-development-chandigarh"
            />
            <main>
                <section
                    className='bannerMlm blockChainDevMainBanner'
                    aria-label='Blockchain Web Development in Chandigarh'
                >
                    <Container>
                        <Row className='align-items-center'>
                            <Col xm={7} sm={12} lg={7} md={6}>
                                <div className="bannerAreaTop">
                                    <div className="logoArea pb-4">
                                    </div>
                                    <div className='bannerAreaTop_content'>
                                        <h1 className="h1 mb-5 text-white"><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7"><span className='fw-bold' style={{ color: '#ffbf0b' }}>Blockchain </span>Web Development Chandigarh</Link></h1>
                                        <p className='text-white'>
                                            Blockchain technology is revolutionizing the digital world by offering secure, decentralized, and transparent solutions.
                                            At Asvayuk Technologies Private Ltd., we specialize in blockchain web development in Chandigarh, helping businesses build advanced
                                            blockchain-powered platforms that enhance security, efficiency, and user trust. Whether you need private blockchain solutions in Chandigarh,
                                            crypto web development, or Web3 Android app development, our expert team is here to deliver customized solutions tailored to your business needs.
                                        </p>
                                    </div>
                                    <div className="review_section mb-5">
                                        <div className="review_img">
                                            <img src={reviewGoogle} alt="blockchain development company in chandigarh" />
                                        </div>
                                        <div className="review_img mx-2">
                                            <img src={GoodFirms} alt="blockchain app development services chandigarh" />
                                        </div>
                                        <div className="review_img">
                                            <img src={Glassdoor} alt="chandigarh blockchain development agency" />
                                        </div>
                                    </div>
                                    <div className="lst_text_banner">
                                        <div className="item1">
                                            <div className="ml-0">
                                                <p className='text-white'>*Premium Customization <span className="mx-1"></span> | <span className="mx-1"></span>*Industry-Leading Security Standards<span className="mx-1"></span> | <span className="mx-1"></span> *24/7 Expert Technical Support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xm={5} sm={12} lg={5} md={6} className='bannerAreaTop'>
                                <div className='overflow-hidden w-100 h-100'>
                                    {/* {/* <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" allowfullscreen className='mb-0 rounded-4' style={{ background: 'transparent' }}></iframe> */}
                                    <div className='overflow-hidden w-100 h-100 bg-light rounded-4'>
                                        <ContactForm />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <div className="container-fluid" style={{ position: 'relative', backgroundColor: '#2acda814' }}>
                        <div className="animation_section">
                            <svg viewBox="0 0 1320 300">
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle" style={{ fontSize: '85px' }}>
                                    BLOCKCHAIN DEVELOPMENT
                                </text>
                            </svg>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="project-count-sec top_style" style={{ paddingBottom: '120px', paddingTop: '50px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex mobile_device" style={{ justifyContent: 'center' }}>
                                    <div className="pro-box text-center">
                                        <span className="pro-head">300+</span>
                                        <p>Blockchain Development <br /> Projects Delivered</p>
                                    </div>
                                    <div className="pro-box text-center mobile_padding_set" style={{ paddingLeft: '0px' }}>
                                        <span className="pro-head">12+</span>
                                        <p>Years of <br /> Excellence</p>
                                    </div>
                                    <div className="pro-box text-center team_Experts" style={{ border: 'unset !important', padding: '0px 0px 0px 10px' }}>
                                        <span className="pro-head">80+</span>
                                        <p>Team of <br />Specialists</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box" id="feature">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-65 col-sm-12 ">
                                <div className="mt-5">
                                    <h2>Empowering Businesses <br />with Blockchain Development<br /> in Chandigarh</h2>
                                    <p className="my-3">If you are looking for top-tier blockchain web development in Chandigarh, Asvayuk Technologies Private Ltd. is your go-to partner. Contact us today to explore how blockchain can transform your business operations!</p>
                                </div>
                                <div className="my-5">

                                    <BannerButton
                                        btnTitle="Explore Blockchain Development Solutions!"
                                        blockChainClass="blue_btn"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-65 col-sm-12">
                                <div>
                                    <img src={blockchainSmallBanner} alt="blockchain web development chandigarh" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box" id="feature">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Why Choose Our Blockchain Development Services?</h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape text-center">
                                            <FaEnvelopeOpenText className='secondary-color' alt='Best Blockchain Web Development Company in Chandigarh' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a>Expert Blockchain Developers</a>
                                        </h3>
                                        <p>Our blockchain development experts in Chandigarh have extensive experience in creating scalable and high-performance blockchain applications, ensuring seamless integration with existing systems.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaBullseye alt='Top Blockchain Technology Solutions in Chandigarh' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a>Customized Blockchain Solutions</a>
                                        </h3>
                                        <p>We understand that every business has unique requirements. Our blockchain app development services in Chandigarh are designed to provide tailor-made solutions for industries such as finance, healthcare, logistics, and more.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaRocket alt='Secure & Decentralized Blockchain Apps in Chandigarh' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a>Comprehensive Web3 Development</a>
                                        </h3>
                                        <p>Our team specializes in Web3 Android app development, ensuring businesses can leverage decentralized applications (DApps) and smart contracts for enhanced digital operations</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="image-with-text">
                    <div className="container">
                        <div className="row d-flex align-items-center flex-wrap">
                            <div className='col-lg-6'>
                                <img src={BlockChainBan4} alt="blockchain development company in chandigarh" className='img-fluid' />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">Why choose Asvayuk Technologies for Blockchain Development?</h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className='text-white'>At Asvayuk Technologies in Chandigarh, we offer secure, transparent, and efficient blockchain development solutions. Our expert team specializes in smart contracts, dApps, DeFi, NFT platforms, and private blockchain networks, ensuring seamless development, integration, and decentralization for future-ready applications.</p>
                                    <p className="font_16 text-white">At Asvayuk Technologies, our expert team builds secure, scalable, and innovative blockchain solutions, offering development, integration, smart contracts, tokenization, and support for seamless implementation.</p>
                                    <div className="list_view_text">
                                        <ul>
                                            <li>Custom Blockchain Development</li>
                                            <li>Secure & Scalable Smart Contracts</li>
                                            <li>Decentralized Application (dApp) Development</li>
                                            <li>Enterprise-Grade Blockchain Solutions</li>
                                            <li>24/7 Technical Support & Maintenance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 mt-3" id="services">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Blockchain Solutions for Various Industries</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <RiMoneyRupeeCircleFill alt='Custom Blockchain Solutions for Businesses in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Finance & Banking</h3>
                                    <p>Secure and fast transactions, fraud prevention, and automated compliance through smart contracts.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdHealthAndSafety alt='Expert Web3 Development Services in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Healthcare</h3>
                                    <p>Improved patient data security, seamless record management, and interoperability between providers.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <FaRecycle alt='Blockchain-Powered Platform Development in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Supply Chain Management</h3>
                                    <p>Real-time tracking, transparency, and efficient management of logistics and transactions.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdRealEstateAgent alt='Leading Blockchain App Developers in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Real Estate</h3>
                                    <p>Secure property transactions, reduced fraud through smart contracts, and transparent ownership records for buyers and sellers.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <IoSchool alt='Advanced Smart Contract & Blockchain Integration in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Education</h3>
                                    <p>Tamper-proof academic credentials, secure digital certificates, and streamlined verification for employers and institutions.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdLocalGroceryStore alt='Best Blockchain Web Development Company in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">E-commerce</h3>
                                    <p>Decentralized marketplaces, secure payment gateways, and fraud prevention through transparent transaction tracking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424 pt-3">Our Work in Blockchain Development</h2>
                        </div>
                        <div className="row d-flex align-items-center flex-wrap">
                            <PortfolioItem
                                workImage={work1}
                                altText='Best Blockchain Web Development Company in Chandigarh'
                                projectTitle="Blockchain"
                                projectCategory="Blockchain Development"
                                projectLink="#"
                            />
                            <PortfolioItem
                                workImage={work2}
                                altText='Custom Blockchain Solutions for Businesses in Chandigarh'
                                projectTitle="Blockchain"
                                projectCategory="Blockchain Development"
                                projectLink="#"
                            />
                            <PortfolioItem
                                workImage={work3}
                                altText='Crypto Web Development Company in Chandigarh'
                                projectTitle="Blockchain"
                                projectCategory="Blockchain Development"
                                projectLink="#"
                            />

                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 bg_f8f8ff" id="our_work">
                    <Container>
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Approach to Blockchain Web Development</h2>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                                    <Row>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaSearch className="icon-md text-white" alt='Enterprise Blockchain Development Company in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">1</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Requirement Analysis</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Understanding your business needs and goals
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaBullseye className="icon-md text-white" alt='Decentralized Application (DApp) Development in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">2</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Blockchain Architecture Design</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Choosing the right blockchain protocol and framework.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaMugHot className="icon-md text-white" alt='Leading NFT Marketplace Development in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">3</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Smart Contract Development</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Developing automated agreements that execute predefined conditions without manual intervention.                                                        </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaRocket className="icon-md text-white" alt='Ethereum & Binance Smart Chain Development in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">4</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Deployment & Maintenance</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Launching the solution and providing ongoing support
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
                <FAQAccordion title="FAQs on Blockchain Development" faqs={faqData} className="custom-bg" />
            </main>
        </>
    )
}
export default BlockChain