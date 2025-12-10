import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaSearch, FaBullseye, FaMugHot, FaRocket, FaShopify, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";
import reviewGoogle from '../../Images/review_google.webp'
import GoodFirms from '../../Images/GoodFirms.webp'
import Glassdoor from '../../Images/Glassdoor.webp'
import shopifystoreapp from '../../Images/blockImg2.jpg'
import wshopify from '../../Images/blockImg.png'
import work1 from '../../Images/work1.png'
import work2 from '../../Images/blockchainwork1.png'
import work3 from '../../Images/work3.png'
// 
import { BsFiletypePsd } from 'react-icons/bs';
import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { FaComputer } from 'react-icons/fa6';
import { GrSupport } from 'react-icons/gr';
import { IoIosStopwatch } from 'react-icons/io';
import Meta_Component from '../Meta_Component/Meta_Component';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import FAQAccordion from '../../accordian/FAQAccordion';
import BannerButton from '../BannerBtn/BannerButton';
import ContactForm from '../ContactPage/ContactForm';


const faqData = [
    {
        question: "Why should I choose Blockchain Software for my business?",
        answer:
            "Blockchain technology can enhance your business’s security, transparency, and efficiency by decentralizing data management. It provides a secure and tamper-proof system for transactions, ideal for industries like finance, healthcare, and logistics.",
    },
    {
        question: "How can a professional blockchain developer help my business grow?",
        answer:
            "A professional blockchain developer can guide you through integrating blockchain technology into your business model, optimizing the process, and enhancing user experience. Whether creating smart contracts, custom tokens, or secure transaction systems, an expert will ensure scalability and security.",
    },
    {
        question: "What is the cost of blockchain software development and its features?",
        answer:
            "The cost of blockchain software development varies based on features like smart contract integration, consensus mechanism, security protocols, and scalability. Contact us for a personalized quote tailored to your needs.",
    },
    {
        question: "Can your blockchain software be integrated with other tools and platforms?",
        answer:
            "Yes, our blockchain solutions can integrate with other tools and platforms such as payment systems, third-party APIs, and legacy applications to provide a seamless experience and enhanced functionality.",
    },
    {
        question: "Do you provide post-launch support for blockchain software?",
        answer:
            "Yes, we offer full post-launch support to ensure the ongoing performance, security, and updates for your blockchain system. Our team ensures everything runs smoothly even after the launch.",
    },
];


const BlockchainDeveloper = () => {
    return (
        <>

            <Meta_Component
                title="Best Blockchain Developer in Chandigarh | Asvayuk Technologies"
                description="Hire the best blockchain developers in Chandigarh at Asvayuk Technologies for secure decentralized apps and smart contract solutions."
                canonical="https://asvayuktech.com/best-blockchain-developer-chandigarh"
            />

            <main>
                <section className='bannerMlm blockchainbg' aria-label='Best Blockchain Developers in Chandigarh'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xm={7} sm={12} lg={7} md={6}>
                                <div className="bannerAreaTop">
                                    <div className="logoArea pb-4">
                                    </div>
                                    <div className='bannerAreaTop_content'>
                                        <h1 className="h1 mb-5 text-white"><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">The Best <span className='fw-bold' style={{ color: '#ffbf0b' }}>Blockchain Developers</span> in Chandigarh!</Link></h1>
                                        <p className='text-white'>At Asvayuk Technologies, we specialize in delivering innovative blockchain solutions customized to meet your business needs. Our team of expert developers is dedicated to building secure, scalable, and forward-thinking blockchain applications across a wide range of industries.</p>
                                    </div>
                                    <div className="review_section mb-5">
                                        <div className="review_img">
                                            <img src={reviewGoogle} alt="blockchain development experts chandigarh" />
                                        </div>
                                        <div className="review_img mx-2">
                                            <img src={GoodFirms} alt="blockchain web development chandigarh" />
                                        </div>
                                        <div className="review_img">
                                            <img src={Glassdoor} alt="Blockchain web development provider in chandigarh" />
                                        </div>
                                    </div>
                                    <div className="lst_text_banner">
                                        <div className="item1">
                                            <div className="ml-0">
                                                <p className='text-white'>*Blockchain Solutions Development
                                                    <span className="mx-1"></span> | <span className="mx-1"></span>*Robust Security Features
                                                    <span className="mx-1"></span> | <span className="mx-1"></span> *24/7 Customer Support
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xm={5} sm={12} lg={5} md={6} className='bannerAreaTop'>
                                <div className='overflow-hidden w-100 h-100'>
                                    {/* <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" allowfullscreen className='mb-0 rounded-4' style={{ background: 'transparent' }}></iframe> */}
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
                                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                    BLOCKCHAIN SOLUTIONS
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
                                        <p>Blockchain <br /> Projects Delivered</p>
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
                                    <h2>Empower Your Business with Our Blockchain Solutions!</h2>
                                    <p className="my-3">Asvayuk Technologies is a leader in blockchain development, offering custom solutions to transform businesses. From smart contracts to decentralized applications, we bring innovation and security to every project.</p>
                                </div>
                                <div className="my-5">
                                    <BannerButton
                                        btnTitle="Explore Blockchain Solutions!"
                                        blockChainClass="blue_btn"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-65 col-sm-12">
                                <div>
                                    <img src={shopifystoreapp} alt="Blockchain for businesses in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box" id="feature">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">
                                Why Choose Asvayuk Technologies for Blockchain Development in Chandigarh?
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape text-center">
                                            <FaShieldAlt className='secondary-color' alt='Leading Blockchain Development Company in Panchkula' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Expert Blockchain Developers</a>
                                        </h3>
                                        <p>Our skilled developers bring deep expertise in building secure and scalable blockchain solutions tailored to your business needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <IoIosStopwatch alt='Custom Blockchain App Development in Chandigarh' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">Custom Solutions for Your Business</a>
                                        </h3>
                                        <p>We provide bespoke blockchain systems designed to address your unique business challenges, ensuring maximum efficiency and scalability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="single-features-light text-center">
                                    <div className="move">
                                        <div className="shape">
                                            <FaQuestionCircle alt='Leading Blockchain Development Company in Panchkula' />
                                        </div>
                                        <h3 className="font_22 font_weight_extra_bold">
                                            <a href="javascript:;">24/7 Customer Support</a>
                                        </h3>
                                        <p>We provide continuous support, ensuring your blockchain projects are smoothly implemented and any issues are quickly addressed.</p>
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
                                <img src={wshopify} alt="BlockChain Developmemt company in chandigarh" className='img-fluid' />
                            </div>
                            <div className="iwt_text col-lg-6">
                                <div className="section-title">
                                    <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 mt-xl-3 text-white text-start">Why Choose Asvayuk Technologies for Blockchain Development in Chandigarh?</h2>
                                </div>
                                <div className="about-item text-white">
                                    <p className="font_16 text-white">Asvayuk Technologies is recognized as one of the top blockchain development companies in Chandigarh. Our team has been pioneering blockchain solutions since 2013, delivering secure, scalable, and high-performance blockchain applications that give your business a competitive edge.</p>
                                    <p className='text-white'>We specialize in creating advanced blockchain platforms that are fully customizable, secure, and optimized for scalability. Whether you need to develop decentralized applications (DApps), cryptocurrency solutions, or blockchain-based business platforms, we are your go-to partner.</p>
                                    <div className="list_view_text">
                                        <ul>
                                            <li>Custom Blockchain Solutions for Business</li>
                                            <li>High-Level Security and Scalability</li>
                                            <li>Expert Blockchain Developers</li>
                                            <li>24/7 Support and Maintenance</li>
                                            <li>Seamless Blockchain Integration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="services">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Types of Blockchain Developers</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <BsFiletypePsd alt='Leading Blockchain Development Company in Panchkula' />
                                    </div>
                                    <h3 className="color_343a40">Core Blockchain Developers</h3>
                                    <p>Focus on the architecture and design of blockchain systems. Responsible for developing and maintaining the blockchain protocol. Work on consensus algorithms, network architecture, and security features.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdMiscellaneousServices alt='Expert Blockchain Solutions in Mohali' />
                                    </div>
                                    <h3 className="color_343a40">Blockchain Software Developers</h3>
                                    <p>We provide seamless blockchain integration with your existing systems, ensuring enhanced security, scalability, and performance for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <FaShopify alt='Innovative Web3 & Blockchain Development in Mohali' />
                                    </div>
                                    <h3 className="color_343a40">Blockchain Security Engineers</h3>
                                    <p>Focus on securing blockchain platforms and applications. Perform audits, penetration tests, and vulnerability assessments. Expertise in cryptography, secure coding practices, and risk mitigation.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <MdIntegrationInstructions alt='Blockchain-Powered Software Development in Panchkula' />
                                    </div>
                                    <h3 className="color_343a40">Smart Contract Developers</h3>
                                    <p>Specialize in writing, testing, and deploying smart contracts. Ensure contracts are secure, efficient, and error-free. Often work with specific programming languages like Solidity or Vyper.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <FaComputer alt='Enterprise Blockchain Solutions in Chandigarh' />
                                    </div>
                                    <h3 className="color_343a40">Frontend Blockchain Developers</h3>
                                    <p>Focus on user interfaces for blockchain applications. Ensure seamless interaction between users and the blockchain. Skilled in JavaScript, React, or Angular for web development.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box position-relative">
                                    <div className='service-icon'>
                                        <GrSupport alt='Top Blockchain Consulting Services in Mohali' />
                                    </div>
                                    <h3 className="color_343a40">Backend Blockchain Developers</h3>
                                    <p>Manage servers, databases, and APIs connecting to the blockchain. Ensure smooth integration of blockchain systems with existing infrastructure. Often proficient in Node.js, Python, or Go.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0" id="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Work in Blockchain Development</h2>
                        </div>
                        <div className="row d-flex align-items-center flex-wrap">
                            <PortfolioItem
                                workImage={work1}
                                altText='Leading Blockchain Development Company in Panchkula'
                                projectTitle="BlockchainDevPro"
                                projectCategory="Blockchain, Development"
                                projectLink="https://www.exampleblockchain.com/"
                            />
                            <PortfolioItem
                                workImage={work2}
                                altText='Best Blockchain Developers in Chandigarh'
                                projectTitle="Emeta Technologies"
                                projectCategory="Blockchain Development"
                                projectLink="https://emetatechnologies.com/"
                            />
                            <PortfolioItem
                                workImage={work3}
                                altText='Secure & Scalable Blockchain Development in Panchkula'
                                projectTitle="BlockchainDevPro"
                                projectCategory="Blockchain, Development"
                                projectLink="https://www.exampleblockchain.com/"
                            />

                        </div>
                    </div>
                </section>

                <section className="section-box col-12 pl-0 pr-0 bg_f8f8ff" id="our_work">
                    <Container>
                        <div className="section-title">
                            <h2 className="font_36 font_weight_semi_bold text-capitalize mb-0 color_242424">Our Blockchain Development Process</h2>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="work-process-wrap d-flex flex-wrap justify-content-start align-items-start">
                                    <Row>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaSearch className="icon-md text-white" alt='Custom Blockchain App Development in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">1</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Consultation & Requirements Gathering</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        We start by thoroughly understanding your business needs, objectives, and technology requirements to ensure we craft the perfect blockchain solution.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaBullseye className="icon-md text-white" alt='Expert Blockchain Solutions in Mohali' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">2</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Blockchain Architecture Design</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        We design a secure, scalable, and high-performance blockchain architecture, aligning it with your specific business requirements.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaMugHot className="icon-md text-white" alt='Leading Blockchain Development Company in Panchkula' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">3</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Development & Smart Contract Integration</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        Our expert developers build the blockchain solution, integrating secure smart contracts for transparency, efficiency, and security.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={6} sm={12}>
                                            <div className="single-work-process position-relative">
                                                <div className="work-process-icon-wrap bg_blue position-relative d-inline-block">
                                                    <FaRocket className="icon-md text-white" alt='Best Blockchain Developers in Chandigarh' />
                                                    <span className="process-step bg_white color-primary shadow-sm color_blue">4</span>
                                                </div>
                                                <span className="work-process-divider"></span>
                                                <div className="work-process-content mt-4">
                                                    <h3 className="color_343a40 font_weight_semi_bold">Testing, Deployment & Support</h3>
                                                    <p className="mb-0 font_weight_light">
                                                        We rigorously test the blockchain solution for functionality, followed by smooth deployment and continuous support to ensure its optimal performance.
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
                <FAQAccordion title="Frequently Asked Questions (FAQs) About Blockchain Development" faqs={faqData} />
            </main>
        </>
    )
}

export default BlockchainDeveloper
