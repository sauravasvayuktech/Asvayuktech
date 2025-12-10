import moonLight from '../../Images/SpiceTribe_logo.webp';
import { Link } from 'react-router-dom';
import {  FaChevronRight } from 'react-icons/fa6';
import cs1 from '../../Images/cs7.png';
import caseStu2 from '../../Images/caseStu2.webp';
import optimization from "../../Images/optimization.png"
import technicalseo from "../../Images/technicalseo.png"
import backlink from "../../Images/backlink.png"
import content from "../../Images/content.png"
import conclusion from "../../Images/conclusion.webp"
// import caseStu from '../../Images/caseStu.webp';
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

const Spicetribe = () => {
    return (
        <>
            <Meta_Component
                title="Spice Tribe Case Study | Asvayuk Technologies"
                description="Learn how Asvayuk Technologies worked with Spice Tribe to create a unique digital solution that elevated their brand."
                canonical="https://asvayuktech.com/case-studies/spicetribe"
            />

            <main>
                <section>
                    <Container fluid>
                        <div className="row align-items-center" style={{ background: "#fff0dc" }}>
                            <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                                <div className="fullcase_details">
                                    <div className="fullCaseStudy_slider_logo">
                                        <img src={moonLight} alt="website development in panchkula and mohali" style={{ mixBlendMode: "darken", height: 'unset !important' }} />
                                    </div>
                                    <div className="fullCaseStudy_textContent py-4">
                                        <h2 className="fw-semibold fs-1" style={{ textTransform: 'uppercase', lineHeight: '3.2rem' }}> Add Flavors to Your Recipes with the Favorite Spice-Brand of top Chefs.</h2>
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
                                <div className="fullCaseStudy_img w-75">
                                    <img src={caseStu1} alt="WooCommerce Development Services in Chandigarh" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section style={{ background: '#ECFFFA' }}>
                    <Container className="py-5">
                        <Row>
                            <Col lg={6}>
                                <h1 className='fw-bold mb-3'>Spicetribe</h1>
                                <p>
                                    Spicetribe is a gourmet spice brand renowned for its high-quality, single-origin spices sourced directly from farms worldwide. Committed to sustainability and fair-trade practices, Spicetribe offers unique blends that bring vibrant flavors to any kitchen, transforming everyday cooking into culinary adventures. With spices like Smoked Pimenton and Chili Blend, the brand caters to chefs, food enthusiasts, and home cooks alike, providing products that make every dish extraordinary.
                                </p>
                            </Col>
                            <Col lg="6" md='12' xm='12'>
                                <div className='problemstatement p-4 bg-dark text-white rounded-4'>
                                    <div className="head">
                                        <h4 className='titletext text-white mb-3 border-bottom pb-2'>
                                            Problem Statement
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <p className='text-white'>
                                            The Spicetribe website needs to reflect the brand&#39;s passion for flavor and quality through an inviting, engaging design. It should provide an easy-to-navigate and mobile-optimized experience that allows users to explore the story behind each spice, while enabling effortless purchases and a deeper connection to the origins of each product.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section style={{ background: '#ECFFFA' }}>
                    <Container className='py-5'>
                        <Row>
                            <h2 className='strategy_title fw-bold'>
                                Strategy and <span style={{ color: '#249F81' }}>Implementation</span>
                            </h2>
                        </Row>
                        <Row className='py-4'>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={optimization} alt="Best Magento Developers in Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Visual Storytelling
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Develop a visually compelling interface with rich imagery that tells the story of each spice, enhancing the user experience with interactive visuals and immersive storytelling.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={technicalseo} alt="Magento Website Development Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Streamlined Checkout
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Simplify the checkout process with minimal steps and multiple payment options, ensuring a seamless and convenient shopping experience for users.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={backlink} alt="Ecommerce Developers in Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Responsive Design
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Ensure the site adapts across all devices, providing a smooth, mobile-friendly experience that brings Spicetribe&#39;s offerings to users wherever they are.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={content} alt="blockchain web development chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Personalized Recommendations
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Use data-driven insights and AI tools to offer personalized spice recommendations, enhancing user engagement and elevating the shopping experience.
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="py-5">
                        <Row>
                            <Col lg={7}>
                                <h2 className='sectitle mb-3 fw-bold'>
                                    Project Goals
                                </h2>
                                <p>The Spicetribe website aims to provide an inviting, visually rich, and functionally efficient platform that showcases the brand&#39;s unique spices and blends. With a focus on engaging storytelling, mobile optimization, and personalized suggestions, Spicetribe seeks to build a digital experience that resonates with customers and brings flavor exploration to life.</p>
                                <Row>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Immersive Storytelling</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Mobile Accessibility</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Data Personalization</span>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                            <Col lg={5} className='Tech_stack overflow-hidden d-none d-lg-block'>
                                <h2 className='fw-bold text-center'>Tech Stack</h2>
                                <div className="wrapper">
                                    <div className="mongo">
                                        <p className="mongo-text">JS</p>
                                    </div>
                                    <div className="express">
                                        <p className="express-text">CSS</p>
                                    </div>
                                    <div className="react">
                                        <p className="react-text">Html</p>
                                    </div>
                                    <div className="node">
                                        <p className="node-text">Shopify</p>
                                    </div>
                                    <div className="circle"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="py-5">
                        <h2 className='sectitle mb-3 fw-bold'>
                            Results After Implementation
                        </h2>
                        <p>
                            Following the launch of the redesigned Spicetribe website, the visually immersive, mobile-optimized interface and personalized recommendations have significantly enhanced the user experience. The brand has seen increased engagement, improved conversion rates, and a strengthened market presence.
                        </p>
                        <Row>
                            <div className='col-lg-8 col-md-8 col-12'>
                                <ul>
                                    <li><p><strong>Enhanced User Experience:</strong> Clear, vibrant visuals and easy navigation make it simple for customers to explore and select spices.</p></li>
                                    <li><p><strong>Effortless Checkout:</strong> Streamlined checkout process for quick and secure purchases.</p></li>
                                    <li><p><strong>Responsive Across Devices:</strong> Optimal performance across all devices, including mobile.</p></li>
                                    <li><p><strong>Personalized Suggestions:</strong> AI-powered recommendations boost customer engagement and satisfaction.</p></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <img src={cs1} alt="Blockchain web development provider in chandigarh" className='img-fluid h-100 object-fit-cover' />
                            </div>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className='py-5'>
                        <Row>
                            <Col lg={4}>
                                <img src={conclusion} alt="Shopify website design company in Chandigarh" width={"100%"} />
                            </Col>
                            <Col lg={8}>
                                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                                <p className='text-black'>
                                    By integrating visually rich design, smooth navigation, mobile accessibility, and AI-powered personalization, Spicetribe’s website offers a high-quality online shopping experience. This strategic approach has strengthened customer engagement, loyalty, and aligns seamlessly with Spicetribe's mission to bring global flavors into every kitchen.
                                </p>
                                <p>These enhancements drive conversions, elevate brand appeal, and provide an exceptional online shopping experience that supports Spicetribe’s mission.</p>
                            </Col>
                        </Row>
                    </Container>
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
                                                    <Link to="#"><img src={caseStu1} alt="Shopify website development Mohali" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Spicetribe</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu2} alt="Top Shopify Development Companies in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu3} alt="Social media marketing in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu4} alt="Laravel website development Mohali" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu5} alt="Laravel PHP development services in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu6} alt="Best Laravel development company under budget in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu8} alt="Website SEO provider in chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu9} alt="CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Spicetribecase</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu10} alt="professional Software Consultants in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Spicetribe</Link></h5>
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

export default Spicetribe