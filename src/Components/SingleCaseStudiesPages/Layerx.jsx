import React from 'react'
import moonLight from '../../Images/bookmytask_logo.webp';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6';
import cs1 from '../../Images/cs7.png';
import caseStu2 from '../../Images/caseStu2.webp';
import optimization from "../../Images/optimization.png"
import technicalseo from "../../Images/technicalseo.png"
import backlink from "../../Images/backlink.png"
import content from "../../Images/content.png"
import conclusion from "../../Images/conclusion.webp"
import caseStu from '../../Images/caseStu.webp';
import caseStu1 from '../../Images/caseStu1.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import caseStu4 from '../../Images/caseStu4.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import caseStu8 from '../../Images/caseStu8.webp';
import caseStu9 from '../../Images/caseStu9.webp';
import caseStu10 from '../../Images/caseStu.webp';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Meta_Component from '../Meta_Component/Meta_Component';
import layerx from '../../Images/layerX.webp';
import btCash from '../../Images/btCash.webp';
import layerlogo from '../../Images/layerLogo.jpg';
import rel20 from '../../Images/rel20.png';
const Layerx = () => {
    return (
        <>
            <Meta_Component
                title="LayerX Case Study | Asvayuk Technologies"
                description="Discover how Asvayuk Technologies assisted LayerX in developing a platform that improved user engagement and service efficiency."
                canonical="https://asvayuktech.com/case-studies/layerx"
            />
            <main>
                <section>
                    <Container fluid>
                        <div className="row align-items-center" style={{ background: "#e1c42563" }}>
                            <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                                <div className="fullcase_details">
                                    <div className="fullCaseStudy_slider_logo">
                                        <img src={layerlogo} alt="Website development services in chandigarh" style={{ mixBlendMode: "darken", width: '20px !important' }} />
                                    </div>
                                    <div className="fullCaseStudy_textContent py-4">
                                        <h2 className="fw-semibold fs-1" style={{ textTransform: 'uppercase', lineHeight: '3.2rem' }}> Fast, Secure, and Reliable Crypto Platform
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center px-0">
                                <div className="fullCaseStudy_img ">
                                    <img src={layerx} alt="Web developers for website portal development in chandigarh" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section style={{ background: '#ECFFFA' }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="fw-bold mb-3">LayerX</h1>
                                <p>
                                    LayerEx is your all-in-one crypto trading platform, designed for both beginners and professionals.
                                    Buy, sell, and trade your favorite digital assets with ease and confidence.
                                    Experience lightning-fast transactions, advanced security, and seamless trading tools.
                                    Step into the future of digital finance and unlock new earning opportunities today.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                                    <div className="head">
                                        <h4 className="titletext text-white mb-3 border-bottom pb-2">
                                            Problem Statement
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <p className="text-white">
                                            LayerEx is built to make crypto trading effortless and secure.
                                            With a sleek, mobile-optimized interface, users can buy, sell, and trade assets in just a few clicks.
                                            The platform is designed for speed, simplicity, and reliability to enhance every transaction.
                                            From instant trades to advanced security, LayerEx ensures a seamless digital finance experience.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ background: '#ECFFFA' }}>
                    <div className="container py-5">
                        <div className="row">
                            <h2 className="strategy_title fw-bold">
                                Strategy and <span style={{ color: '#249F81' }}>Implementation</span>
                            </h2>
                        </div>
                        <div className="row py-4">
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={optimization} alt="trusted WooCommerce development partner in Chandigarh" width="60px" />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">User-Centric Design</h6>
                                    <p className="cardcontent" style={{ fontSize: '14px' }}>
                                        A clean, mobile-optimized interface ensures effortless navigation and accessibility for both beginners and professionals.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={technicalseo} alt="Chandigarh's Most Trusted Mobile App Development Company" width="60px" />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">Advanced Trading Infrastructure</h6>
                                    <p className="cardcontent" style={{ fontSize: '14px' }}>
                                        Integration of high-speed trading engines, low-latency transactions, and multi-layer security protocols for a smooth and safe experience.                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={backlink} alt="Magento Ecommerce Development in Chandigarh" width="60px" />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">Comprehensive Service Ecosystem</h6>
                                    <p className="cardcontent" style={{ fontSize: '14px' }}>
                                        Offering spot trading, staking, and DeFi solutions on a single platform to simplify digital asset management.                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={content} alt="Magento Development Services Chandigarh" width="60px" />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">Scalable Growth Approach</h6>
                                    <p className="cardcontent" style={{ fontSize: '14px' }}>
                                        Leveraging blockchain innovation, strategic partnerships, and continuous feature upgrades to drive platform adoption and long-term growth.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-7">
                                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                                <p>LayerEx aims to revolutionize the digital finance landscape by making crypto trading simple, secure, and accessible for everyone.</p>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Simplify Crypto Trading</span></div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Ensure Security & Trust</span></div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                        <div className="pr_goals"><span>Deliver Seamless User Experience</span></div>
                                    </div>

                                </div>
                            </div>
                            <Col lg={5} className='Tech_stack overflow-hidden d-none d-lg-block'>
                                <h2 className='fw-bold text-center'>Tech Stack</h2>
                                <div className="wrapper">
                                    <div className="mongo">
                                        <p className="mongo-text">Laravel</p>
                                    </div>
                                    <div className="express">
                                        <p className="express-text">TypeS</p>
                                    </div>
                                    <div className="react">
                                        <p className="react-text">React</p>
                                    </div>
                                    <div className="node">
                                        <p className="node-text">Media</p>
                                    </div>
                                    <div className="circle"></div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container py-5">
                        <h2 className="sectitle mb-3 fw-bold">Results After Implementation</h2>
                        <p>
                            Following the launch of the enhanced LayerEx platform, the secure, mobile-optimized interface and high-speed trading capabilities have significantly improved user experience. The platform has seen higher trading activity, increased user retention, and strengthened market credibility.                        </p>
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <ul>
                                    <li><p><strong>Seamless Trading Experience:</strong> Intuitive interface and fast execution make crypto trading effortless for all users. </p></li>
                                    <li><p><strong>Enhanced Security & Trust:</strong>  Multi-layered protection builds user confidence and safeguards digital assets.</p></li>
                                    <li><p><strong>Optimized for All Devices:</strong> Smooth, responsive performance across desktop, tablet, and mobile devices.</p></li>
                                    <li><p><strong>AI-Driven Insights:</strong> Smart analytics and personalized market suggestions improve decision-making and engagement.</p></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <img src={layerx} alt="Shopify website development Mohali" className="img-fluid h-100 object-fit-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={conclusion} alt="Digital marketing services in Chandigarh" width="100%" />
                            </div>
                            <div className="col-lg-8">
                                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                                <p>
                                    LayerEx successfully bridges the gap between complex crypto trading and user-friendly digital finance.                                </p>
                                <p>
                                    By offering a secure, mobile-optimized, and high-speed trading platform, it simplifies digital asset management for beginners and professionals alike.
                                </p>
                                <p>With AI-driven insights, seamless transactions, and multi-layered security, LayerEx is positioned to drive mass adoption and establish a strong presence in the global crypto market.

                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="caseStuides d-none d-lg-block d-md-block">
                    <Container>
                        <div className="caseStuides_content">
                            <h5>Case Studies</h5>
                            <Row className="align-items-start">
                                <div className="col-8">
                                    <h1 className="fw-semibold"> Practical Solutions That Revolutionized Industries!</h1>
                                </div>
                                <div className="col-lg-4 text-end fw-bold">
                                    <Link to="/case-studies">View All Case Studies <span className='chevronicon'><FaChevronRight /></span></Link>

                                </div>
                            </Row>
                        </div>
                        <div className="container_extraWidth">
                            <Row>
                                <div className="col-lg-12 projectCase">
                                    <Swiper
                                        modules={[Navigation, Scrollbar, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={4.3}
                                        navigation
                                        // pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,

                                        }}
                                        loop={true}
                                        breakpoints={{
                                            1400: {
                                                slidesPerView: 4.5,
                                            },
                                            1440: {
                                                slidesPerView: 4.5,
                                            },
                                        }}
                                        className='mySwiper1'
                                    >
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu1} alt="best social media marketing services in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Bookmytask</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu2} alt="UI UX development company in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">49thcoffee</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu3} alt="Software Outsourcing Company Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">The Modarn Shop</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu4} alt="Website development services in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">49th Parallel</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu5} alt="Woocommerce Website Development Company in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Aus Brite Solar</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu6} alt="Blockchain web development provider in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Krishna Pearls & Jewellers</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu8} alt="Blockchain for businesses in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Book My Task</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu9} alt="Full-stack React Native developers Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Bookmytaskcase</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu10} alt="Laravel Development Partner in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Bookmytask</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/quadlock"><img src={layerx} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/layerx">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/quadlock">LayerX</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/quadlock"><img src={btCash} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/quadlock">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/quadlock">Openseacap</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Layerx