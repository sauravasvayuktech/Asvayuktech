import { Link } from 'react-router-dom'
import bannerImg from '../../Images/home2.webp'
import ISO from '../../Images/ISO.webp';
import Odoo from '../../Images/Odoo.webp';
import life from '../../Images/life.webp';
import ShopifyImg from '../../Images/ShopifyImg.webp';
import awsPartner from '../../Images/aws-partner.webp';
import googlePartner from '../../Images/google-partner.webp';
import aster from '../../Images/aster.webp';
import coinGecko from '../../Images/coinGecko.webp';
import coinMarketCap from '../../Images/coinMarketCap.webp';
import meydan from '../../Images/meydan.webp';
import rezorpay from '../../Images/rezorpay.webp';
import koinBx from '../../Images/koinBx.webp';
import koi from '../../Images/koi.webp'
import PaisaPay from '../../Images/PaisaPay.webp';
import strapi from '../../Images/strapi.webp';
import Unicommerce from '../../Images/Unicommerce.webp';
import Vinculum from '../../Images/Vinculum.webp';
import sitecore from '../../Images/sitecore.webp';
import caseStu1 from '../../Images/caseStu1.webp';
import caseStu2 from '../../Images/caseStu2.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import caseStu4 from '../../Images/caseStu4.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import caseStu8 from '../../Images/caseStu8.webp';
import caseStu9 from '../../Images/caseStu9.webp';
import Solutions1 from '../../Images/Solutions1.webp';
import Solutions2 from '../../Images/Solutions2.webp';
import Solutions3 from '../../Images/Solutions3.webp';
import Solutions4 from '../../Images/Solutions4.webp';
import Solutions5 from '../../Images/Solutions5.webp';
import Solutions6 from '../../Images/Solutions6.webp';
import moonLight from '../../Images/moonlight_logo.webp';
import CoffeeLogo from '../../Images/49thcoffee_logo.webp';
import kriLogo from '../../Images/kri_logo.webp';
import kreLogo from '../../Images/kre.webp';
import rel1 from '../../Images/rel1.webp';
import rel2 from '../../Images/rel2.webp';
import rel3 from '../../Images/rel3.webp';
import rel5 from '../../Images/rel5.webp';
import rel6 from '../../Images/rel6.webp';
import rel7 from '../../Images/rel7.webp';
import rel9 from '../../Images/rel9.webp';
import rel10 from '../../Images/rel10.webp';
import rel11 from '../../Images/rel11.webp';
import rel12 from '../../Images/rel12.webp';
import rel13 from '../../Images/rel13.webp';
import rel14 from '../../Images/rel14.webp';
import rel15 from '../../Images/rel15.webp';
import rel16 from '../../Images/rel16.webp';
import rel17 from '../../Images/rel17.webp';
import rel18 from '../../Images/rel18.webp';
import rel20 from '../../Images/rel20.png';
import w4 from '../../Images/w4.webp';
import w5 from '../../Images/w5.webp';
import w6 from '../../Images/w1.webp';  
import w9 from '../../Images/w-8.webp';    
import w10 from '../../Images/w-9.webp';    
import w11 from '../../Images/w-10.webp';    
import w12 from '../../Images/w-11.webp';    
import layerx from '../../Images/layerX.webp';
import btCash from '../../Images/btCash.webp';
import layerlogo from '../../Images/layerLogo.jpg';
import l1 from '../../Images/l1.webp';
import 'swiper/css';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6';
import BannerButton from '../BannerBtn/BannerButton';
import Experience from './Experience';
import Meta_Component from '../Meta_Component/Meta_Component';
import { MdNavigateNext } from 'react-icons/md';
import { useLanguage } from '../../LanguageContext';


function Home() {
    const { direction } = useLanguage();
    return (
        <>
            <Meta_Component
                title="Best Web Designing & Web Development Company"
                description="Asvayuk Technologies provides expert web development, digital marketing, and blockchain solutions to elevate your business. Contact us today!"
                canonical="https://asvayuktech.com/"
            />
            <main>
                {/* <!--Banner --> */}
                <section className="banner p-0 p-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner_textInfo pe-0 pe-lg-5 pe-md-5">
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Design Development Marketing</Link></h1>
                                    <h2 className="py-3" style={{ fontSize: '16px', color: '#494949', fontWeight: '500', lineHeight: '1.5rem' }}>Asvayuk Technologies seamlessly combines innovative web design, advanced technology solutions, and strategic digital marketing to enhance your business's online presence and drive growth.</h2>
                                    <BannerButton btnTitle='Free Consultation' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg">
                                    <img src={bannerImg} alt="design-development-marketing" width="546px" height="546px" style={{ width: "100%", height: "auto" }}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Our Affiliations --> */}
                <section className="affiliation border-bottom border-top">
                    <div className="container d-none d-lg-block">
                        <div className="row align-items-center">
                            <div className="col-lg-3 border-end py-4">
                                <h2 className="mb-0 fw-semibold">Our Affiliations</h2>
                            </div>
                            <div className="col-lg-9 ">
                                <Swiper
                                 key={direction} 
                                dir={direction}
                                    spaceBetween={50}
                                    slidesPerView={5}
                                    navigation={true}
                                    scrollbar={{ draggable: true }}
                                    autoplay={{
                                        delay: 2400,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    modules={[Navigation, Scrollbar, Autoplay]}
                                    className="AffiliationsSwiper"
                                >
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={Vinculum} alt="Our Affiliations 1" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={ISO} alt="Our Affiliations 2" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={sitecore} alt="Our Affiliations 3" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={Odoo} alt="Our Affiliations 4" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={ShopifyImg} alt="Our Affiliations 5" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={awsPartner} alt="Our Affiliations 6" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={googlePartner} alt="Our Affiliations 7" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={aster} alt="Our Affiliations 8" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={coinGecko} alt="Our Affiliations 9" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={coinMarketCap} alt="Our Affiliations 10" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={meydan} alt="Our Affiliations 11" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={rezorpay} alt="Our Affiliations 12" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={koinBx} alt="Our Affiliations 13" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={koi} alt="Our Affiliations 14" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={PaisaPay} alt="Our Affiliations 15" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={strapi} alt="Our Affiliations 16" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='affiliationImg'>
                                            <img src={Unicommerce} alt="Our Affiliations 17" className="img-fluid" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="affiliationResponsive container d-block d-lg-none">
                        <div className="affiliation_title text-center">
                            <h2 className="mb-0 fw-semibold">Our Affiliations</h2>
                        </div>
                        <Row className="pt-4 gx-2 gy-2">
                            <Col xs={6} sm={6} className>
                                <div className="affiliationImg_mobile">
                                    <img src={ISO} alt="Website development company chandigarh and mohali" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={Odoo} alt="Mobile app development chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={life} alt="web portal development Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={ShopifyImg} alt="WooCommerce Development Services in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={awsPartner} alt="Ecommerce Website designing Company Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={googlePartner} alt="Best Magento Developers in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={aster} alt="blockchain web development chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={coinGecko} alt="Shopify website design company in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={coinMarketCap} alt="React Native developers Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={meydan} alt="Digital marketing services in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={rezorpay} alt="Digital marketing services in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={koinBx} alt="Laravel Development Company Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={koi} alt="social media marketing agency in chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={PaisaPay} alt="best SEO Services in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={strapi} alt="SaaS App Development Company in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={Unicommerce} alt="Software Development Company in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={Vinculum} alt="Best UI UX designers in Chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                            <Col xs={6} sm={6} className="">
                                <div className="affiliationImg_mobile">
                                    <img src={sitecore} alt="Website development company in chandigarh" className="img-fluid " />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- Case Studies --> */}
                <section className="caseStuides d-none d-lg-block d-md-block">
                    <Container>
                        <div className="caseStuides_content">
                            <h5>Case Studies</h5>
                            <Row className="align-items-start">
                                <div className="col-8">
                                    <h2 className="fw-semibold fs-1"> Practical Solutions That Revolutionized Industries!</h2>
                                </div>
                                <div className="col-lg-4 text-end fw-bold">
                                    <Link to="/case-studies" >View All Case Studies <span className='chevronicon'><FaChevronRight /></span> </Link>
                                    {/* <div className="d-flex justify-content-end">
                                        <div className="casestu_button position-relative mt-4 d-flex gap-5">
                                            <div className="swiper-button-prev mt-0"></div>
                                            <div className="swiper-button-next mt-0 "></div>
                                        </div>
                                    </div> */}
                                </div>
                            </Row>
                        </div>
                        <div className="container_extraWidth">
                            <Row>
                                <div className="col-lg-12 projectCase">
                                    <Swiper
                                    key={direction}
                                    dir={direction}
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
                                                    <Link to="/case-studies/spicetribe"><img src={caseStu1} alt="best web development in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/spicetribe">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/spicetribe">Spicetribe</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/moonlightconcept"><img src={caseStu2} alt="website development provider chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/moonlightconcept">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/moonlightconcept">Moonlight Concept</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/themodernshop"><img src={caseStu3} alt="Web developers for website portal development in chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/themodernshop">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/themodernshop">The Modern Shop</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/49thcoffee"><img src={caseStu4} alt="Chandigarh's Most Trusted Mobile App Development Company" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/49thcoffee">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/49thcoffee">49th Parallel</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/krishnapearlsandjewellers"><img src={caseStu6} alt="best WooCommerce Developers in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/krishnapearlsandjewellers">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/krishnapearlsandjewellers">Krishna Pearls & Jewellers</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/bookmytask"><img src={caseStu8} alt="Professional Ecommerce Website Builders in Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/bookmytask">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/bookmytask">Book My Task</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/quadlock"><img src={caseStu9} alt="Affordable Magento Development Chandigarh" className="img-fluid" /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/quadlock">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/quadlock">Quadlockcase</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/layerx"><img src={layerx} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img"  /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/leyerx">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/layerx">LayerX</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="caseStuides_MainContent rounded-4 overflow-hidden bg-light">
                                                <div>
                                                    <Link to="/case-studies/opensea"><img src={btCash} alt="Affordable Magento Development Chandigarh" className="img-fluid layerX-img"  /></Link>
                                                </div>
                                                <div className="caseStuides_para">
                                                    <p className="mb-0 pb-1"><Link to="/case-studies/opensea">Website Development</Link></p>
                                                    <h5><Link to="/case-studies/opensea">Openseacap</Link></h5>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </section>          

                {/* <!-- Empowering  --> */}
                <section className="Empowering py-4 py-lg-0 py-md-0">
                    <div className="container">
                        <div className="Empowering_title text-center pb-2 pb-md-5">
                            <h2 className="fw-semibold">Fueling Your Growth with Customized Solutions
                            </h2>
                        </div>
                        <div className="row pt-0 pt-lg-3 pt-md-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering rounded-4 p-4">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/best-ui-ux-designers-in-chandigarh"><h5>UI/UX Design<MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">We at Asvayuk Technologies design seamless interfaces and captivating user experiences with meticulous attention to detail, enhancing your digital presence and user engagement.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions1} alt="best digital marketing company in chandigarh" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering h-100 rounded-4 p-4">
                                    <div className="row align-items-center">

                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/website-development-company-in-chandigarh-and-mohali"> <h5>Web Development <MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">Our meticulous web development suite, from responsive
                                                    design to secure eCommerce and cutting-edge PWAs, empowers your brand with
                                                    future-proof solutions.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions2} alt="Laravel PHP development services in Chandigarh" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0 pt-lg-3 pt-md-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering rounded-4 p-4">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/mobile-app-development-chandigarh"><h5>Mobile App Development <MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">Leveraging our extensive experience to transform your
                                                    vision into a user-centric mobile application that drives conversions and
                                                    brand loyalty.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions3} alt="Best Laravel development company under budget in Chandigarh" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering rounded-4 p-4">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/best-seo-services-in-chandigarh"><h5>Search Engine Optimization<MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">A strategic blend of SEO techniques to increase
                                                    website traffic, boost conversions, and solidify brand authority.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions4} alt="award-winning SEO agency in Chandigarh" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0 pt-lg-3 pt-md-3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering rounded-4 p-4">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/ecommerce-website-designing-company-chandigarh"><h5>eCommerce Solutions<MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">Empower your brand with an intuitive and secure
                                                    eCommerce platform that amplifies sales, ensuring a seamless shopping
                                                    experience for your customers.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions5} alt="SaaS App Development Company in Chandigarh" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0">
                                <div className="bg_empowering rounded-4 p-4">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="Empowering_content text-white servicetype">
                                                <Link to="/web-portal-development-chandigarh"><h5>Enterprise Portal Development <MdNavigateNext /></h5></Link>
                                                <p className="text-white py-1">Asvayuk Technologies offers feature-rich enterprise portal development solutions that integrate seamlessly with existing applications and data sources to streamline workflows and boost productivity.</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="solution_img">
                                                <img src={Solutions6} alt="ENTERPRISE SOFTWARE SOLUTIONS IN CHANDIGARH" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Experience   --> */}
                <Experience expTitle='Discover Customized Solutions for Dynamic Businesses' ExpPara='From sparking innovative ideas to transforming them into market-ready products, Asvayuk Technologies offers an extensive range of solutions crafted to enhance your business value..' point1='Innovative Minds' pointPara1='Engineers with a visionary approach craft solutions beyond conventional boundaries.' point2='Craft Engaging Experiences' pointPara2='We engineer visually stunning interfaces that elevate user engagement.' point3='Global Trust, Local Impact' pointPara3='Combining local insights with global expertise, we ensure seamless technological excellence.' point4='Client-Centric Approach' pointPara4='Engineers with a visionary approach craft solutions beyond conventional boundaries.' 
                      altTags={{
                        group1: "Best IT Solutions Company in Chandigarh",
                        group2: "Custom Software Development in Panchkula",
                        group3: "Top Website Design Company in Mohali",
                        group4: "Custom Magento Development Chandigarh",
                        mockups: "Best SaaS Development Company in Chandigarh",
                        whiteLogo: "Reliable E-commerce Development Services in Mohali"
                    }}
                />

                {/* <!-- Industries  --> */}
                <section className="Industries">
                    <div className="container">
                        <div>
                            <h2 className="fw-semibold fs-1">Industries We Serve</h2>
                            <p>Staying attuned to diverse industries, Asvayuk Technologies serves a wide range of sectors, providing customized solutions that set new benchmarks and drive innovation.</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">eCommerce</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Blockchain</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">Healthtech </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center">
                                    <h3 className="mb-0">AI Bots</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0 pt-lg-3 pt-md-3">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                                    <h3 className="mb-0">Traveltech</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                                    <h3 className="mb-0">Realtech</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                                    <h3 className="mb-0">tecFintechh</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 px-2 mb-3">
                                <div className="industries_info border border-2 border-dark rounded-3 text-center h-100 align-content-center">
                                    <h3 className="mb-0">Edtech</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- fullCaseStudy --> */}
                <section className="fullCaseStudy">
                    <div className="conianer-fluid">
                        <Swiper
                        key={direction}
                        dir={direction}
                            modules={[Navigation, Scrollbar, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            scrollbar={{ draggable: true }}
                            loop={true}
                        >
                            <SwiperSlide className='slider_bg3 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={CoffeeLogo} alt="Best UI UX designers in Chandigarh" className='slider_bg3_logo' />
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
                                            <img src={caseStu4} alt="Saas App Development provider in panchkula and Mohali" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg1 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={moonLight} alt="UI UX development company in Chandigarh" />
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
                                            <img src={caseStu2} alt="Top Software Development Companies in Chandigarh" className="w-100" />
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
                                                <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                    <FaArrowRightLong className='mx-3' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                        <div className="fullCaseStudy_img">
                                            <img src={caseStu3} alt="Digital marketing experts in Chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg4 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={kriLogo} alt="Shopify website design company in Chandigarh" className='slider_bg3_logo img-fluid' />
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
                                            <img src={caseStu5} alt="Web portal development services in chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slider_bg5 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={kreLogo} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' />
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
                                            <img src={caseStu6} alt="blockchain app development services chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                             <SwiperSlide className='slider_bg6 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={layerlogo} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-4">
                                                <h2 className="fw-semibold lh-base">Welcome To LayerEx – Your Gateway To Seamless Crypto Trading!</h2>
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
                                                <p className="fullcase_para pb-4">Take your first step into the future of finance—sign up today and start trading!</p>
                                                <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                    <FaArrowRightLong className='mx-3' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                        <div className="fullCaseStudy_img">
                                            <img src={layerx} alt="blockchain app development services chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                             <SwiperSlide className='slider_bg7 slider_bg'>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                        <div className="fullcase_details">
                                            <div className="fullCaseStudy_slider_logo">
                                                <img src={rel20} alt="Magento Web development provider in chandigarh" className='slider_bg3_logo' />
                                            </div>
                                            <div className="fullCaseStudy_textContent py-4">
                                                <h2 className="fw-semibold lh-base">MTHT Token Listing</h2>
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
                                                <p className="fullcase_para pb-4">Be part of the next big leap in decentralized finance – MTHT goes live! Unlock premium opportunities with OpenSeaCap.</p>
                                                <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                    <FaArrowRightLong className='mx-3' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                        <div className="fullCaseStudy_img">
                                            <img src={btCash} alt="blockchain app development services chandigarh" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                {/* <!-- Relationships --> */}
                <section className="Our_Relationships">
                    <div className="container">
                        <div className="Relationships_title text-center">
                            <h2 className="fw-semibold">Our Relationships</h2>
                        </div>
                        <div className="row pt-3 gx-2 gy-2 gx-md-0 gy-md-0e">
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel1} alt="Magento Website maker in mohali and chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel2} alt="React Native developers Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel3} alt="Digital marketing experts in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel5} alt="Software Development Company in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel6} alt="SOFTWARE TESTING COMPANY IN CHANDIGARH" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel7} alt="social media marketing in chandigarh" className="img-fluid" />
                                </div>
                            </div>
                           
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel9} alt="Magento Development Services Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel10} alt="best WooCommerce Developers in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel11} alt="Best SEO company in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel12} alt="Digital marketing experts in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel13} alt="Social Media marketing Company in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel14} alt="Saas App Development provider in chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel15} alt="mlm software developer in chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel16} alt="UI UX development agency in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel17} alt="Custom UI UX solutions in Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel18} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={l1} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                            <div className="rel-imgInfo col-lg-2 col-md-4 col-6 p-md-1">
                                <div className='rel-img'>
                                    <img src={rel20} alt="Mobile app UI UX development Chandigarh" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Life At Wave --> */}
                <section className="LifeWaveInfoTech">
                    <div className="container">
                        <div className="row">
                            <div className="LifeWaveInfoTech_title px-0 px-lg-5 px-md-5 mx-0 ">
                                <h2 className="fw-semibold text-white">Life At Asvayuk</h2>
                                <p className="text-light px-3 px-md-0">At Asvayuk Technologies, innovation thrives, ideas flourish, and teamwork propels
                                    us toward excellence. Our dynamic culture fosters growth and continuous learning.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <Swiper
                        key={direction}
                        dir={direction}
                            modules={[Navigation, Scrollbar, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation
                            scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 2400,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                375: {
                                    slidesPerView: 1,
                                },
                                425: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 1.2,
                                },
                                991: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 2.2,
                                },
                                1400: {
                                    slidesPerView: 3,
                                },
                            }}
                            className='lifeAtWaveInfo'
                        >
                            {/* <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w1} alt="Best UI UX designers in mohali" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide> */}
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w5} alt="professional Software Consultants in Chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w4} alt="search engine optimization Services chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w3} alt="Laravel Development Company Chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide> */}
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w6} alt="React Native development agency Chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w7} alt="React Native app development experts Chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide> */}
                            {/* <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w8} alt="blockchain development experts chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide> */}
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w9} alt="blockchain development experts chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w10} alt="blockchain development experts chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w11} alt="blockchain development experts chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="wavelife_img">
                                    <img src={w12} alt="blockchain development experts chandigarh" className='img-fluid w-100' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center pt-3">
                        <div className="bg-white text-dark pt-3 px-3 rounded text-center d-flex align-items-center">
                            <p className="fs-5 fw-semibold text-black">Many more to come... </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
