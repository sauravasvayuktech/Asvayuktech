import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import Ar_Vr from '../../Images/DPADAO.webp'
import Experience from '../HomePage/Experience'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FaArrowRightLong } from 'react-icons/fa6'
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
import Magento_service_card from '../ServicesPage/Magento_service_card'
import service1 from '../../Images/services1.webp'
import service2 from '../../Images/services2.webp'
import service3 from '../../Images/services3.webp'
import service4 from '../../Images/services4.webp'
import service5 from '../../Images/services5.webp'
import service6 from '../../Images/services6.webp'


const DAP_DAO = () => {
    return (
        <>
            <Meta_Component
                title="DAP and DAO Solutions in Chandigarh Panchkula | Asvayuk Technologies"
                description="Asvayuk Technologies offers DAP & DAO solutions in Chandigarh, Panchkula, helping businesses with secure, transparent, and autonomous blockchain applications."
                canonical="https://asvayuktech.com/dap-dao-chandigarh-panchkula"
            />
            <main>
                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center py-0 py-lg-4 py-md-4">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Solutions</Breadcrumb.Item>
                                        <Breadcrumb.Item active>DAP and DAO Solutions</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">DAP and DAO Solutions in Chandigarh Panchkula</Link></h1>
                                    <p className="py-3">
                                        Transform your business in Chandigarh Panchkula with Asvayuk Technologies' DAP and DAO solutions. We specialize in developing decentralized applications and autonomous organizations that increase transparency, secure transactions, and enhance business autonomy.
                                    </p>
                                    <BannerButton btnTitle='Get a Free Consultation' url='/contact-us' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bannerImg d-flex justify-content-center align-items-center">
                                    <img src={Ar_Vr} alt="DAP and DAO Solutions" className='w-100 h-100' />
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className='bg-white py-5'>
                    <Container>
                        <div className='pb-4'>
                            <h1 className='fw-bold'>
                                Customized DAP and DAO Solutions in Chandigarh Panchkula <span className="text-uppercase" style={{ color: '#2cbe9a' }}>By Asvayuk Technologies</span>
                            </h1>
                            <p className="powered_php pt-3">
                                <strong>Asvayuk Technologies</strong> is a leader in creating customized DAP and DAO solutions in Chandigarh Panchkula that empower businesses with secure, decentralized platforms. Our tailored DAP and DAO systems enhance trust, efficiency, and data integrity by utilizing blockchain technology for innovative, autonomous operations.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="DAP Development">Decentralized Application (DAP) Development</a></li>
                                    <li><a href="#" title="DAO System Design">DAO System Design</a></li>
                                    <li><a href="#" title="Blockchain Integration">Blockchain Integration</a></li>
                                    <li><a href="#" title="Smart Contract Development">Smart Contract Development</a></li>
                                    <li><a href="#" title="DAO Governance Systems">DAO Governance Systems</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="Secure DAP Solutions">Secure DAP Solutions</a></li>
                                    <li><a href="#" title="Customized DAO Models">Customized DAO Models</a></li>
                                    <li><a href="#" title="Smart Contract Auditing">Smart Contract Auditing</a></li>
                                    <li><a href="#" title="Blockchain-based DAP Analytics">Blockchain-based Analytics</a></li>
                                    <li><a href="#" title="Scalable DAO Platforms">Scalable DAO Platforms</a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className='magento_service_card'>
                    <Container>
                        <div className="card_heading text-center">
                            <h2>DAP and DAO Solutions We Offer in Chandigarh Panchkula</h2>
                            <p>Asvayuk Technologies delivers DAP and DAO solutions to empower businesses with blockchain-powered decentralization, enhancing operational transparency, security, and autonomy. Discover our DAP and DAO services tailored to your unique needs.</p>
                        </div>
                        <div className='magento_cards'>
                            <Row className='gy-4'>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service1} altText='DApp Development Company in Chandigarh' cardHeading="DAP Development in Chandigarh Panchkula" cardPara="Develop decentralized applications for secure, scalable, and autonomous operations in Chandigarh Panchkula." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service2} altText='Decentralized Governance & DAO Development' cardHeading="DAO for Business Governance in Chandigarh Panchkula" cardPara="Implement DAO systems to enable autonomous decision-making and governance within your organization in Chandigarh Panchkula." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service3} altText='Blockchain-Powered DApp Solutions'  cardHeading="DAP and DAO Integration in Chandigarh Panchkula" cardPara="Integrate DAP and DAO systems seamlessly for enhanced data security and operational synergy in Chandigarh Panchkula." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service4} altText='Web3 & DeFi DApp Development Services'  cardHeading="Mobile DAP Solutions" cardPara="Empower users with mobile-accessible DAPs, facilitating decentralized operations on-the-go." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service5} altText='Top DApp Developers in Panchkula'  cardHeading="Smart Contracts for DAOs" cardPara="Utilize smart contracts within DAO frameworks for automated, enforceable governance." />
                                </Col>
                                <Col lg={4}>
                                    <Magento_service_card cardImg={service6} altText='Smart Contract-Based DApp Development'  cardHeading="Blockchain Analytics for DAP and DAO" cardPara="Leverage blockchain analytics within your DAO or DAP for real-time insights and performance tracking." />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className='bg-white py-5'>
                    <Container>
                        <div className='pb-4'>
                            <h1 className='fw-bold'>
                                Benefits of <span className="text-uppercase" style={{ color: '#2cbe9a' }}>DAP and DAO Solutions</span> in Chandigarh Panchkula
                            </h1>
                            <p className="powered_php pt-3">
                                Asvayuk Technologies' DAP and DAO solutions offer transformative benefits, including operational autonomy, increased transparency, and enhanced data security. Our systems use blockchain technology to provide advanced decentralization, automation, and secure governance.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="DAP Development">DAP Creation in Chandigarh Panchkula</a></li>
                                    <li><a href="#" title="DAO for Autonomous Operations">DAO for Autonomous Governance in Chandigarh Panchkula</a></li>
                                    <li><a href="#" title="Smart Contract Security">Smart Contract Security in Chandigarh Panchkula</a></li>
                                    <li><a href="#" title="Decentralized Workflow Automation">Workflow Automation with DAP</a></li>
                                    <li><a href="#" title="Blockchain Transparency">Blockchain-based Transparency</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="development_links">
                                    <li><a href="#" title="Integrated DAO Systems">Integrated DAO Systems</a></li>
                                    <li><a href="#" title="Blockchain-based Data Security">Blockchain-based Security</a></li>
                                    <li><a href="#" title="Flexible DAO Models">Flexible DAO Models</a></li>
                                    <li><a href="#" title="Smart Contract Analytics">Advanced Smart Contract Analytics</a></li>
                                    <li><a href="#" title="Scalable Decentralized Platforms">Scalable Decentralized Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="supercharge-section">
                    <div className="container">
                        <div className="row">
                            <div className="choice pb-5">
                                <h2 className="fw-semibold">Supercharge Your Business with DAP and DAO Solutions from Asvayuk Technologies</h2>
                                <p className="pt-2">Leverage advanced decentralized application (DAP) and decentralized autonomous organization (DAO) technology to enhance operational transparency, security, and autonomy. Asvayuk Technologies provides scalable DAP and DAO solutions tailored to your business’s unique requirements in Chandigarh Panchkula.</p>
                                <ul>
                                    <li><span className="fw-bold h6">Customized DAP and DAO Solutions:</span> Specialized development for decentralized applications and organizations that optimize processes and enhance operational transparency in Chandigarh Panchkula.</li>
                                    <li><span className="fw-bold h6">Scalable and Adaptable:</span> Our DAP and DAO systems are designed to grow alongside your business, adapting to your evolving needs in a decentralized ecosystem.</li>
                                    <li><span className="fw-bold h6">Data-Driven Insights:</span> Real-time blockchain analytics that enable informed decision-making and optimize performance metrics.</li>
                                    <li><span className="fw-bold h6">Security-Centric Approach:</span> Built-in security features to safeguard your business data and maintain data integrity across the decentralized network.</li>
                                    <li><span className="fw-bold h6">User-Friendly Decentralized Interface:</span> Intuitive, easy-to-navigate systems that streamline workflows within a decentralized structure.</li>
                                    <li><span className="fw-bold h6">Ongoing Support:</span> Comprehensive post-launch support to ensure the seamless operation of your DAP and DAO systems in Chandigarh Panchkula.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Experience
                    expTitle='Why Choose Asvayuk for DAP and DAO Solutions in Chandigarh Panchkula?'
                    point1='Blockchain Expertise'
                    pointPara1='Extensive experience in DAP and DAO development for security, transparency, and autonomy.'
                    point2='Quality and Security'
                    pointPara2='Our solutions ensure secure and reliable operations for your business.'
                    point3='Business-Specific Customization'
                    pointPara3='Tailored solutions to boost efficiency and support sustainable growth.'
                    point4='Clear Communication'
                    pointPara4='Transparent communication keeps you informed every step of the way.'
                    altTags={{
                        group1: "DApp Development Company in Chandigarh",
                        group2: "Blockchain-Powered DApp Solutions",
                        group3: "Decentralized Governance & DAO Development",
                        group4: "Web3 & DeFi DApp Development Services",
                        mockups: "Top DApp Developers in Panchkula",
                        whiteLogo: "Decentralized Governance & DAO Development"
                    }}
                />



                <section className="caseStuides">
                    <Container>
                        <div className="caseStuides_content pb-4">
                            <Row className='align-items-start'>
                                <Col lg={8}>
                                    <h1 className="fw-semibold">Our Case Studies</h1>
                                </Col>
                                <Col lg={4} className="text-end">
                                    <Link to="/case-studies" className=""> View All Case Studies </Link>
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
                                                    <img src={CoffeeLogo} alt="DApp Development Company in Chandigarh" className='slider_bg3_logo' />
                                                </div>
                                                <div className="fullCaseStudy_textContent py-4">
                                                    <h2 className="fw-semibold lh-base">IT TAKES A CREATIVE MIND TO BE IN THE FASHION BUSINESS.</h2>
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
                                                    <p className="fullcase_para pb-4">Moonlight Concept is a high-end Qatari brand specialized in women’s apparel and garments. The name choice wasinfluenced by the concept ...</p>
                                                    <Link to="/case-studies" className="fullCaseStudy_url">Read Full Case Study
                                                        <FaArrowRightLong className='mx-3' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end justifyconent align-items-center">
                                            <div className="fullCaseStudy_img">
                                                <img src={caseStu4} alt="Blockchain-Powered DApp Solutions" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg1 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={moonLight} alt="Top DApp Developers in Panchkula" />
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
                                                <img src={caseStu2} alt="Smart Contract-Based DApp Development" className="w-100" />
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
                                                <img src={caseStu3} alt="Web3 & DeFi DApp Development Services" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg4 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kriLogo} alt="DAO Development Company in Mohali" className='slider_bg3_logo' />
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
                                                <img src={caseStu5} alt="Decentralized Governance & DAO Development" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg5 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kreLogo} alt="Custom Tokenized DAO Solutions" className='slider_bg3_logo' />
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
                                                <img src={caseStu6} alt="Decentralized Governance & DAO Development" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>
                </section>
                <section className="Industries">
                    <div className="container">
                        <div>
                            <h1 className="fw-semibold">Industries We Serve with Asvayuk DAP and DAO Solutions</h1>
                            <p>Asvayuk Technologies offers tailored DAP and DAO solutions across various industries, helping businesses achieve secure, decentralized operations, enhance transparency, and drive growth through blockchain innovation.</p>
                        </div>
                        <div className="row pt-3">
                            {["Finance", "Healthcare", "eCommerce", "Supply Chain", "Real Estate", "Education", "Gaming", "Social Media"].map((industry, index) => (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6 px-2">
                                    <div className="industries_info border border-2 border-dark rounded-3 text-center mb-3">
                                        <h5 className="mb-0">{industry}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default DAP_DAO