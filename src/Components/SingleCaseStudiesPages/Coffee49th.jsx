import moonLight from '../../Images/49thcoffee_logo.webp';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6';
import cs1 from '../../Images/cs5.png';
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

const Coffee49th = () => {
    return (
        <>
            <Meta_Component
                title="49th Coffee Case Study | Asvayuk Technologies"
                description="Read about our partnership with 49th Coffee, where Asvayuk Technologies provided innovative solutions to boost their coffee business."
                canonical="https://asvayuktech.com/case-studies/49thcoffee"
            />

            <main>

                <section>
                    <Container fluid>
                        <div className="row align-items-center" style={{ background: "#E1FBFC" }}>
                            <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                                <div className="fullcase_details">
                                    <div className="fullCaseStudy_slider_logo">
                                        <img src={moonLight} alt="Laravel PHP development services in Chandigarh" style={{ mixBlendMode: "darken", height: 'unset !important' }} />
                                    </div>
                                    <div className="fullCaseStudy_textContent py-4">
                                        <h2 className="fw-semibold fs-1" style={{ textTransform: 'uppercase', lineHeight: '3.2rem' }}>Small-batch roasting and always fresh.</h2>
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
                                    <img src={caseStu4} alt="Laravel website development agency Chandigarh" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section style={{ background: '#ECFFFA' }}>
                    <Container className="py-5" >
                        <Row>
                            <Col lg={6}>
                                <h1 className='fw-bold mb-3 '>
                                    49thcoffee
                                </h1>
                                <p>
                                    The website 49thcoffee is dedicated to showcasing 49th Parallel Coffee Roasters, a brand focused on high-quality, direct trade specialty coffee. The site features a wide range of products including coffee, brewing gear, and merchandise, with a strong emphasis on sustainable sourcing and building relationships with coffee growers. It offers subscriptions, detailed brewing guides, and gift options.
                                </p>
                            </Col>
                            <Col lg="6" md='12' xm='12' className=''>
                                <div className='problemstatement p-4 bg-dark text-white rounded-4'>
                                    <div className="head">
                                        <h4 className='titletext text-white mb-3 border-bottom pb-2'>
                                            Statement
                                        </h4>
                                    </div>
                                    <div className="content">
                                        <p className='text-white'>
                                            49thcoffee's website offers a visually engaging and easy-to-navigate UI, designed to align with the brand’s modern, elegant ethos.
                                        </p>
                                        <p className='text-white'>
                                            Featuring high-quality images and seamless UX, the website ensures a smooth, mobile-friendly shopping experience, enhancing access to products and information.
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
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={optimization} alt="Laravel web application development Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Seamless User Interface
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Develop a streamlined, intuitive user interface with easy-to-navigate categories and filters, ensuring customers can find and purchase their desired products effortlessly.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={backlink} alt="Top 10 Software Development Companies In Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Smooth Checkout Flow
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Optimize the checkout process by minimizing steps and offering multiple payment methods to ensure a quick, seamless, and hassle-free purchase experience.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={technicalseo} alt="CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Cross-Device Compatibility
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Ensure the site performs seamlessly across all devices, especially mobile phones, with responsive design elements that adjust to different screen sizes.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={content} alt="Best Laravel development company under budget in Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Data-Driven Personalization
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Leverage user data and AI-powered tools to offer personalized product recommendations, tailoring the shopping experience to individual preferences and increasing engagement.
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
                                <p>The key goals for this Shopify-based project include crafting a highly functional eCommerce site with a sleek and modern design. The focus is on simplifying the customer journey, from browsing to purchase, ensuring the site is mobile-optimized, and enhancing the shopping experience with personalized product suggestions powered by AI.</p>
                                <Row>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>User Experience Focus</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Cross-Device Optimization</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Personalization and AI</span>
                                        </div>
                                    </div>
                                </Row>
                            </Col>
                            <Col lg={5} className='Tech_stack overflow-hidden d-none d-lg-block'>
                                <h2 className='fw-bold text-center'>Tech Stack</h2>
                                <div className="wrapper">
                                    <div className="mongo">
                                        <p className="mongo-text">React.js</p>
                                    </div>
                                    <div className="express">
                                        <p className="express-text">HTML/CSS</p>
                                    </div>
                                    <div className="react">
                                        <p className="react-text">JavaScript</p>
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
                            After launching the Shopify-powered website, it provides a seamless and efficient shopping experience. The mobile-friendly design, paired with AI-driven recommendations, offers a personalized and engaging customer journey, ultimately boosting conversions. Smooth navigation and a modern, luxurious design further contribute to the website’s success by strengthening brand image and improving customer retention.
                        </p>
                        <Row>
                            <div className='col-lg-8 col-md-8 col-12'>
                                <ul>
                                    <li>
                                        <p><strong>Intuitive Interface:</strong> The clean, user-centric design ensures an easy shopping experience with clear categories and product visuals.</p>
                                    </li>
                                    <li>
                                        <p><strong>Smooth Checkout Flow:</strong> Quick and easy checkout process with minimal steps, enhancing the overall user experience.</p>
                                    </li>
                                    <li>
                                        <p><strong>Responsive Design:</strong> The site performs flawlessly on all devices, ensuring an optimal experience for mobile and tablet users.</p>
                                    </li>
                                    <li>
                                        <p><strong>AI-Powered Recommendations:</strong> Personalized suggestions increase user engagement, boosting both conversion rates and satisfaction.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <img src={cs1} alt="web3 android app development" className='img-fluid h-100 object-fit-cover' />
                            </div>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className='py-5'>
                        <Row>
                            <Col lg={4}>
                                <img src={conclusion} alt="Professional Ecommerce Website Builders in Chandigarh" width={"100%"} />
                            </Col>
                            <Col lg={8}>
                                <h2 className="sectitle fw-bold mb-3">
                                    Conclusion
                                </h2>
                                <p className='text-black'>
                                    In conclusion, combining elegant design, smooth navigation, mobile optimization, and AI-powered personalization ensures that the 49thcoffee website delivers a world-class shopping experience. This holistic approach strengthens customer engagement, builds loyalty, and reflects the luxury image of the brand.
                                </p>
                                <p>These strategies pave the way for greater conversions, improving brand perception while providing a seamless online experience that resonates with customers.</p>
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
                                                    <Link to="#"><img src={caseStu1} alt="Magento Development Services Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu2} alt="Affordable Magento Development Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu3} alt="Commerce website development Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu4} alt="Top 10 Digital Marketing Companies in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu5} alt="Laravel website development agency Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu6} alt="Laravel Development Partner in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu8} alt="Responsive web development chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu9} alt="Magento Web development provider in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Coffee49thcase</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu10} alt="Top Shopify Development Companies in Chandigarh" className="img-fluid" /></Link>
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

export default Coffee49th