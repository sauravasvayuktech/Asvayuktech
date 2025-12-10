import moonLight from '../../Images/caseLogo3.webp';
import { Link } from 'react-router-dom';
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6';
import cs1 from '../../Images/cs3.png';
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

const TheModernShop = () => {
    return (
        <>
            <Meta_Component
                title="The Modern Shop Case Study | Asvayuk Technologies"
                description="Explore how Asvayuk Technologies collaborated with The Modern Shop to enhance their online store with advanced e-commerce solutions."
                canonical="https://asvayuktech.com/case-studies/themodernshop"
            />

            <main>
                <section>
                    <Container fluid>
                        <div className="row align-items-center" style={{ background: "#EEE4DA" }}>
                            <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                                <div className="fullcase_details">
                                    <div className="fullCaseStudy_slider_logo">
                                        <img src={moonLight} alt="Best UI UX designers in Chandigarh" style={{ mixBlendMode: "darken", height: 'unset !important' }} />
                                    </div>
                                    <div className="fullCaseStudy_textContent py-4">
                                        <h2 className="fw-semibold fs-1" style={{ textTransform: 'uppercase', lineHeight: '3.2rem' }}>Modern lighting, furniture & accessories in Ottawa Canada.</h2>
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
                                    <img src={caseStu3} alt="CUSTOM SOFTWARE DEVELOPMENT IN CHANDIGARH" className="w-100" />
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
                                    Quad Lock
                                </h1>
                                <p>
                                    Quad Lock is a luxury Qatari fashion brand specializing in women’s apparel, with an emphasis on individuality and high-quality craftsmanship. It offers a range of collections that blend elegance and innovation, including haute couture, abayas, and seasonal collections like “Spectrum of Hues” and “Morrisian Whispers.” Designs focus on unique materials, intricate details, and rich color palettes, catering to women seeking both modern and timeless styles. The brand embodies refined sophistication, celebrating cultural heritage and artistry.
                                </p>
                            </Col>
                            <Col lg="6" md='12' xm='12' className=''>
                                <div className='problemstatement p-4 bg-dark text-white rounded-4'>
                                    <div className="head">
                                        <h4 className='titletext text-white mb-3 border-bottom pb-2'>
                                            Problem Statement
                                        </h4>
                                    </div>
                                    <div className="content ">
                                        <p className='text-white'>
                                            Quad Lock's website UI (User Interface) is clean and modern, designed to reflect the elegance of the brand.
                                        </p>
                                        <p className='text-white'>
                                            The homepage features a minimalistic layout with high-quality images of their collections, making navigation intuitive and visually engaging. The UX (User Experience) emphasizes ease of access, with clear menu options guiding visitors through collections, lookbooks, and purchasing options. Smooth transitions and a mobile-friendly design ensure an effortless shopping experience, highlighting the brand’s luxurious and culturally rich aesthetic.
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
                            <h2 className='stategy_title fw-bold'>
                                Strategy and <span style={{ color: '#249F81' }}>Implementation</span>
                            </h2>
                        </Row>
                        <Row className='py-4'>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={optimization} alt="SOFTWARE TESTING COMPANY IN CHANDIGARH" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        User-Centric Design
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Use Shopify’s customizable themes to develop a visually aligned, minimalistic layout that showcases collections prominently, ensuring an elegant and intuitive design that aligns with the brand’s luxury aesthetic.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={backlink} alt="Custom UI UX solutions in Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Smooth Navigation
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Implement sticky menus, well-placed filters, and consistent calls-to-action to guide users effortlessly from product discovery to purchase, ensuring a streamlined and accessible shopping experience.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={technicalseo} alt="Mobile app UI UX development Chandigarh" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Mobile Optimization
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Leverage Shopify’s responsive design templates to ensure a flawless shopping experience across all devices, catering to mobile users and offering a seamless on-the-go experience.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4 mb-lg-0 mb-md-4">
                                <div className="strategycard">
                                    <div className="cardimg mb-3">
                                        <img src={content} alt="Best UI UX designers in mohali" width={"60px"} />
                                    </div>
                                    <h6 className="cardtitle mb-2 fw-bold">
                                        Personalization & AI Integration
                                    </h6>
                                    <p className='cardcontent' style={{ fontSize: '14px' }}>
                                        Integrate Shopify’s AI-driven recommendations and smart search functionality to improve product discovery, providing personalized experiences that increase user engagement and conversions.
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
                                <p>The project goals for the Shopify-based website focus on providing a seamless user experience, enhancing brand aesthetics, and increasing conversions. The primary goals include creating a visually appealing layout that reflects the brand’s luxury image, ensuring smooth and easy navigation for users, optimizing the site for mobile responsiveness, and incorporating personalization features through AI to boost customer engagement.</p>
                                <Row>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>User-Centric Design</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Mobile Optimization</span>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-3 mb-lg-0 mb-md-0'>
                                        <div className='pr_goals'>
                                            <span className='mb-0'>Personalization</span>
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
                            Results after Creating This Site
                        </h2>
                        <p>
                            The final results of the Shopify-based project are a visually stunning, user-friendly eCommerce website with a luxury feel. The site features a clean, minimal design, optimized for mobile devices, and includes AI-powered personalized recommendations. Customers experience smooth navigation, with well-integrated brand storytelling that fosters emotional engagement. The combination of these elements ensures a seamless shopping experience, increases conversions, and strengthens customer loyalty, making the website a valuable asset for Quad Lock&#39;s online presence.</p>
                        <Row>
                            <div className='col-lg-8 col-md-8 col-12'>
                                <ul>
                                    <li>
                                        <p><strong>Elegant and Intuitive Design:</strong> A clean, minimal interface that showcases products through high-quality visuals, enhancing the brand’s aesthetic and offering an inviting layout.</p>
                                    </li>
                                    <li>
                                        <p><strong>Smooth Navigation and Accessibility:</strong> Streamlined menus, well-placed filters, and consistent calls-to-action guide users effortlessly from product discovery to purchase.</p>
                                    </li>
                                    <li>
                                        <p><strong>Mobile-Optimized Experience:</strong> Responsive designs ensure a flawless shopping experience on all devices, catering to the needs of on-the-go customers.</p>
                                    </li>
                                    <li>
                                        <p><strong>Enhanced Storytelling:</strong> Integrates brand narratives with product details, enhancing the luxury feel and creating emotional engagement with customers.</p>
                                    </li>
                                    <li>
                                        <p><strong>Personalization and AI Integration:</strong> Personalized recommendations and smart search functionalities improve product discovery, catering to individual user preferences and increasing conversions.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <img src={cs1} alt="Saas App Development provider in panchkula and Mohali" className='img-fluid h-100 object-fit-cover' />
                            </div>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className='py-5'>
                        <Row>
                            <Col lg={4}>
                                <img src={conclusion} alt="award-winning SEO agency in Chandigarh" width={"100%"} />
                            </Col>
                            <Col lg={8}>
                                <h2 className="sectitle fw-bold mb-3">
                                    Conclusion
                                </h2>
                                <p className='text-black'>
                                    In conclusion, the integration of elegant and intuitive design, smooth navigation, mobile optimization, enhanced storytelling, and personalization with AI through Shopify offers a seamless and luxurious shopping experience for users. Each element not only ensures that the aesthetics of the brand are maintained but also enhances user satisfaction, ultimately fostering emotional connections with the customers.</p>
                                <p> With these strategies, Quad Lock can create an engaging online presence that resonates with its target audience, increasing both conversions and customer loyalty while maintaining its status as a high-end luxury brand.
                                </p>
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
                                                    <Link to="#"><img src={caseStu1} alt="Top Social Media Agencies in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu2} alt="Best SEO company in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">Quad Lock</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu3} alt="Shopify website design company in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu4} alt="Best Magento Developers in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu5} alt="Shopify website design company in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu6} alt="Digital marketing experts in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu8} alt="Laravel PHP development services in Chandigarh" className="img-fluid" /></Link>
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
                                                    <Link to="#"><img src={caseStu9} alt="social media company in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="#">Website Development</Link></p>
                                                    <h5><Link to="#">TheModernShopcase</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="#"><img src={caseStu10} alt="social media marketing agency in chandigarh" className="img-fluid" /></Link>
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

export default TheModernShop