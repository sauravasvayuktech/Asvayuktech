import BannerButton from '../BannerBtn/BannerButton'

import "swiper/css";
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banners_14 from '../../Images/banners-14.webp'
import ServicesCard from '../ServicesPage/ServicesCard'
import c11 from '../../Images/c11.webp';
import c12 from '../../Images/c12.webp';
import c13 from '../../Images/c13.webp';
import c14 from '../../Images/c14.webp';
import c15 from '../../Images/c15.webp';
import c16 from '../../Images/c16.webp';
import C17 from '../../Images/c17.webp';
import CoffeeLogo from '../../Images/49thcoffee_logo.webp'
import caseStu4 from '../../Images/caseStu4.webp'
import moonLight from '../../Images/moonlight_logo.webp';
import caseStu2 from '../../Images/caseStu2.webp';
import caseStu3 from '../../Images/caseStu3.webp';
import kriLogo from '../../Images/kri_logo.webp';
import kreLogo from '../../Images/kre.webp';
import caseStu5 from '../../Images/caseStu5.webp';
import caseStu6 from '../../Images/caseStu6.webp';
import Experience from '../HomePage/Experience'
import KeyPointSection from '../ServicesPage/KeyPointSection'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
import { Autoplay, Navigation } from 'swiper/modules'
import Meta_Component from '../Meta_Component/Meta_Component'
import FAQAccordion from '../../accordian/FAQAccordion';

const faqData = [
    {
      question: "Why Choose Asvayuk Technologies Private Ltd. for Digital Marketing Services in Chandigarh?",
      answer: "We are among the Top 10 Digital Marketing Companies in Chandigarh, offering data-driven strategies with proven results. Our customized approach ensures your business gets the best ROI."
    },
    {
      question: "How Does SEO Help My Business?",
      answer: "SEO enhances your website’s ranking on search engines, making it easier for customers to find you. Our Best SEO company in Chandigarh ensures higher traffic and increased sales."
    },
    {
      question: "What is the Cost of Digital Marketing Services in Chandigarh?",
      answer: "The cost depends on your business goals and the services you choose. Contact us for a free consultation and customized pricing."
    },
    {
      question: "How Long Does It Take to See Results?",
      answer: "SEO results take time (typically 3-6 months), while PPC and social media ads offer instant visibility."
    },
    {
      question: "Can You Handle Social Media Marketing for My Business?",
      answer: "Yes, our social media marketing in Chandigarh services include strategy planning, content creation, and ad management for platforms like Facebook, Instagram, and LinkedIn."
    },
    {
      question: "What Industries Do You Serve?",
      answer: "We cater to e-commerce, healthcare, real estate, education, hospitality, and more."
    }
  ];
  

const Performance = () => {
    return (
        <>
            <Meta_Component
                title="Digital marketing services in Chandigarh"
                description="Get result-driven Digital Marketing Services in Chandigarh with SEO, PPC, and SMM. Boost your online presence with Asvayuk Technologies!"
                canonical="https://asvayuktech.com/digital-marketing-services-in-chandigarh"
            />

            <main>
                <section className="performance_card1" aria-label='Social media marketing in Chandigarh'>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className='col-12 pt-2'>
                                <Breadcrumb>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>Technology</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Performance Marketing</Breadcrumb.Item>
                                </Breadcrumb>
                                <div className="peformance_section_top-heading perTitle mt-3">
                                    <h2 className='py-3'>
                                       <Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">
                                         Digital Marketing Services<br/> in Chandigarh
                                       </Link>
                                    </h2>
                                    <p className='mt-0'>
                                        Asvayuk Technologies Private Ltd. offers top-notch digital marketing services in Chandigarh, helping businesses thrive in the digital world.
                                        Whether you are a startup or an established company, our customized strategies will boost your online visibility, increase leads,
                                        and enhance your brand reputation.
                                    </p>
                                    <div className='pt-2'>
                                    <BannerButton btnTitle='Free Consultation' url='/contact-us'/>
                                    </div>
                                    
                                </div>
                            </Col>
                            <Col lg={6} md={6} className='col-12'>
                                <div className="peformance_card1_right-sec">
                                    <img src={banners_14} alt='Digital marketing services in Chandigarh'/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="performance_card2" aria-label='Digital marketing experts in Chandigarh'>
                    <div className="container">
                        <div className="col-12">
                            <div className="peformance_card2_heading text-center">
                                <h2>Our Digital Marketing Services in Chandigarh</h2>
                                <p className="mt-3">We offer a comprehensive range of services to cater to your online marketing needs :</p>
                            </div>
                            <div className="performance_card2_inner-sec mt-5">
                                <div className="row">
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c11} altText='online marketing company in Chandigarh' cardHeading='SEO Services Chandigarh (Search Engine Optimization)' cardParaGraph='Want to rank higher on Google? Our Best SEO company in Chandigarh ensures your website appears on the first page of search results. We optimize your website structure, improve page speed, and implement high-quality backlinks to enhance visibility.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c12} altText='PPC service Chandigarh' cardHeading='PPC Service Chandigarh (Pay-Per-Click Advertising)' cardParaGraph='Our PPC service in Chandigarh helps you attract high-intent customers through targeted ads on Google and social media. We manage campaigns effectively, ensuring a high return on investment (ROI).' />
                                    </div>
                                    <div className="col-lg-4 pb-4">
                                        <ServicesCard ServiceCardImg={c13} altText='Digital Marketing Agency in Chandigarh' cardHeading='SMM Service Chandigarh (Social Media Marketing)' cardParaGraph='Leverage the power of social media with our social media marketing in Chandigarh. We create engaging posts, run ad campaigns, and increase your brand’s followers on platforms like Facebook, Instagram, and LinkedIn.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c14} altText='Best SEO company in Chandigarh' cardHeading='Content Marketing & Blogging' cardParaGraph='Quality content is a separate role in digital marketing. Our team crafts informative blogs, articles, and website content that establish your authority in your industry.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c16} altText='Digital marketing experts in Chandigarh' cardHeading='Online Reputation Management' cardParaGraph='Your brand’s online reputation matters. We monitor and manage customer reviews, ensuring a positive brand image.' />
                                    </div>
                                    <div className="col-lg-4 pb-4 d-flex">
                                        <ServicesCard ServiceCardImg={c15} altText='Digital Marketers in chandigarh' cardHeading='Email Marketing & Automation' cardParaGraph='Reach out to potential clients through personalized email campaigns. We create compelling emails that drive engagement and conversions' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Experience 
                expTitle='Why Choose Our Digital Marketing Services in Chandigarh?' 
                ExpPara='At Asvayuk Technologies Private Ltd., we understand that every business has unique goals. Our team of digital marketing experts in Chandigarh creates data-driven strategies that ensure measurable results. With years of experience, we have helped businesses across different industries achieve success through SEO, PPC, social media marketing, and content marketing.' 
                point1='Leading App Pioneers' pointPara1='Drawing on our years of experience, we specialize in transforming ideas into exceptional, user-centric mobile applications.' 
                point2='Craft Engaging Experiences' pointPara2='Our mobile apps are meticulously designed to be visually stunning and deliver a seamless, intuitive user experience.' 
                point3='Global Trust, Local Impact' pointPara3='Combining local insights with global expertise, we ensure seamless technological excellence.' 
                point4='Your App, Our Expertise' pointPara4='Together, we collaborate to create a digital masterpiece that aligns with your goals and exceeds your expectations.'

                altTags={{
                    group1: "Digital Marketing Agency in Chandigarh",
                    group2: "Digital marketing consultant in Chandigarh",
                    group3: "Social media marketing in Chandigarh",
                    group4: "Digital marketing services in Chandigarh",
                    mockups: "100% guaranteed digital marketing services in Chandigarh.",
                    whiteLogo: "Digital Marketers in chandigarh"
                }}

                 />

                <KeyPointSection
                 keyHeading="Benefits of Our Digital Marketing Services in Chandigarh" 
                 keyPara="If you are looking for the best digital marketing company in Chandigarh, Asvayuk Technologies Private Ltd. is your one-stop solution. Our expert team ensures your business achieves maximum online visibility and growth." 
                 keyPoint1="Customized strategies tailored to your business." 
                 keyPoint2="Increased brand awareness and website traffic." 
                 keyPoint3="Higher engagement and conversions." 
                 keyPoint4="100% Guaranteed Digital Marketing Services in Chandigarh for effective results." 
                 keyPoint5="Expert consultation with a Digital Marketing Consultant in Chandigarh.." 
                 url="/contact-us" btnTitle="Request Consultation" Group105518={C17} 

                 altTags={{
                    check1: "best digital marketing company in chandigarh",
                    check2: "Top 10 Digital Marketing Companies in Chandigarh",
                    check3: "online marketing company in Chandigarh",
                    check4: "SEO services Chandigarh",
                    check5: "PPC service Chandigarh",
                    Group105518: "SMM service Chandigarh"
                }}
                />

                <section className="caseStuides " aria-label='100% guaranteed digital marketing services in Chandigarh.'>
                    <Container>
                        <div className="caseStuides_content pb-4">
                            <Row className='align-items-start'>
                                <Col lg={8}>
                                    <h1 className="fw-semibold">Our Case Studies</h1>
                                </Col>
                                <Col lg={4} className="text-start text-lg-end text-md-end">
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
                                                    <img src={CoffeeLogo} alt="best digital marketing company in chandigarh" className='slider_bg3_logo' />
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
                                                <img src={caseStu4} alt="Top 10 Digital Marketing Companies in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg1 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={moonLight} alt="online marketing company in Chandigarh" />
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
                                                <img src={caseStu2} alt="SEO services Chandigarh" className="w-100" />
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
                                                <img src={caseStu3} alt="PPC service Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg4 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kriLogo} alt="SMM service Chandigarh" className='slider_bg3_logo' />
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
                                                <img src={caseStu5} alt="Digital Marketing Agency in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='slider_bg5 slider_bg'>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                            <div className="fullcase_details">
                                                <div className="fullCaseStudy_slider_logo">
                                                    <img src={kreLogo} alt="Digital marketing consultant in Chandigarh" className='slider_bg3_logo' />
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
                                                <img src={caseStu6} alt="Best SEO company in Chandigarh" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </Container>
                    </section>

                </section>
                <FAQAccordion title='FAQs on Digital Marketing' faqs={faqData}/>
            </main>

        </>
    )
}

export default Performance