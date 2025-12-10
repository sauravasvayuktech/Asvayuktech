// import "./Blog.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'; import "swiper/css";
import "swiper/css/pagination";
import c3 from "../../Images/shopi.webp";
import c4 from "../../Images/portal_banner.webp";
import seo from "../../Images/seo_banner.webp";
import mlm from "../../Images/mlm.webp";
import smart from "../../Images/smart.webp";
import crypto from "../../Images/crypto.webp";
import cryptoEx from "../../Images/cryptoEx.webp";
import BlockChainI from "../../Images/BlockchainI.webp";
import { Col, Container, Row } from "react-bootstrap";
import CardBlog from "./CardBlog";
import { Link } from 'react-router-dom';
import Meta_Component from "../Meta_Component/Meta_Component";
import crm from "../../Images/seo_banner.webp";
import BlockChain from "../ServicesPage/BlockChain";
import MetaverseImage from '../../Images/MetaverseDev.png';
import SoftwareDevImage from '../../Images/softwareDeve.png';
import SmartContractImage from '../../Images/TopSmartContactDevelopment.png';
import TokenDevImage from '../../Images/Token_Dev.png';
import NFTDevImage from '../../Images/NFTDev.png';
import DAppImage from '../../Images/DAPPdev.png';
import MLMImage from '../../Images/mlmBinary.png';
import HybridMLMImage from '../../Images/HybridMLM.png';
import MLMPlanImage from '../../Images/mlmPlanSoftware.png';
import Web3DevImage from '../../Images/web3Dev.png';
import MLMAppImage from '../../Images/MultiLevelMarketing.png';
import NetworkMarketingImage from '../../Images/networkMarketing.png';
import CryptoAppImage from '../../Images/CryptocurrencyAppDev.png';
import UIUXDesignImage from '../../Images/UIUX_DesignSolutions.png';
import ShopifyDevImage from '../../Images/shopifyDeve.png';
import SEOImage from '../../Images/seoWeb.png';
import CRMImage from '../../Images/crmSoftware.png';
import BlockchainSecurityImage from '../../Images/secureBlockchain.png';
import ecommerceDeveImg from "../../Images/ecommerceDeve.webp";
import webDevServices from "../../Images/webDevServices.png";

function Blog() {
    return (
        <>
            <Meta_Component
                title=" Blogs | Insights on Web Development & Digital Marketing"
                description="Explore the Asvayuk Technologies blog for expert insights on web development, digital marketing, tech trends, and industry news"
                canonical="https://asvayuktech.com/blog"
            />

            <main>

                <section className="blog-banner">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                        className="blogSwiper">
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={seo} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c3} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blogBannerImg">
                                <img src={c4} className="img-fluid" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="blog_banner_content p-5">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic">
                                            <CardBlog singleBlogImg={seo} time=' 6 Nov 2024' blogTitle='Boost Your Business with SEO: Key Tactics to Drive Organic Traffic' blogPara='Your guide to SEO success—explore top tips for ranking higher, increasing traffic, and optimizing your digital strategy.' CommentNum='0' viwer='285' urlSingleBlog='/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development">
                                            <CardBlog singleBlogImg={c3} time=' 7 Nov 2024' blogTitle='Revolutionize Your Business with Asvayuks Shopify Development' blogPara='Custom Shopify solutions to grow your e-commerce business with expert setup, app development, and ongoing support.' CommentNum='0' viwer='285' urlSingleBlog='/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals">
                                            <CardBlog singleBlogImg={c4} time=' 17 May, 2024' blogTitle='Enhance Efficiency with Custom Enterprise Portals' blogPara='Transform your business with Asvayuk Tech’s enterprise portals. Simplify processes, improve collaboration, and drive growth with a centralized solution tailored to your needs' CommentNum='0' viwer='285' urlSingleBlog='/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={mlm} time=' 11 Nov 2024' blogTitle='MLM Software Developer in Chandigarh, Panchkula, Mohali' blogPara="Asvayuk Technologies takes pride in developing highly advanced MLM software development for your business to operate streamlined operations. " CommentNum='0' viwer='285' urlSingleBlog='/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={smart} time=' 12 Nov 2024' blogTitle='Smart Contract Developer in Chandigarh, Panchkula, Mohali' blogPara="With technology revolutionizing industries today by taking agreements with smart contracts open up space for new possibilities." CommentNum='0' viwer='285' urlSingleBlog='/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Crypto-Software-Development-by-Asvayuk-Technologies">
                                            <CardBlog singleBlogImg={crypto} time='11 Nov 2024' blogTitle='Crypto Software Developer in Chandigarh' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/Crypto-Software-Development-by-Asvayuk-Technologies' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Crypto-Exchange-Development-in-Chandigarh-Zirakpur-Mohali">
                                            <CardBlog singleBlogImg={cryptoEx} time=' 12 Nov 2024' blogTitle='Crypto Exchange Developer in Chandigarh, Zirakpur, Mohali' blogPara="As the cryptocurrency market expands, the demand for safe and efficient - and most importantly, easy-to-use - crypto exchanges grows." CommentNum='0' viwer='285' urlSingleBlog='/blog/Crypto-Exchange-Development-in-Chandigarh-Zirakpur-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali">
                                            <CardBlog singleBlogImg={BlockChainI} time=' 12 Nov 2024' blogTitle='Blockchain Developer in Zirakpur, Chandigarh, Panchkula, Mohali' blogPara="Blockchain technology has indeed been revolutionizing the way various industries function worldwide. As the world accelerates and changes." CommentNum='0' viwer='285' urlSingleBlog='/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali' />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/metaverse-developer-in-chandigarh">
                                            <CardBlog
                                                singleBlogImg={MetaverseImage}
                                                time="12 Dec 2024"
                                                blogTitle="Metaverse Developer in Chandigarh"
                                                blogPara="Explore the emerging field of metaverse development and its impact on the digital world."
                                                CommentNum="0"
                                                viwer="150"
                                                urlSingleBlog="/blog/metaverse-developer-in-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/software-developer-chandigarh">
                                            <CardBlog
                                                singleBlogImg={SoftwareDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Software Developer in Chandigarh"
                                                blogPara="Learn about the role of software developers and how they are shaping the tech industry."
                                                CommentNum="2"
                                                viwer="200"
                                                urlSingleBlog="/blog/software-developer-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/smart-contract-developer-mohali">
                                            <CardBlog
                                                singleBlogImg={SmartContractImage}
                                                time="12 Dec 2024"
                                                blogTitle="Smart Contract Developer in Mohali"
                                                blogPara="Smart contracts are revolutionizing industries by automating processes securely."
                                                CommentNum="3"
                                                viwer="120"
                                                urlSingleBlog="/blog/smart-contract-developer-mohali"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/token-developer-chandigarh">
                                            <CardBlog
                                                singleBlogImg={TokenDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Token Developer in Chandigarh"
                                                blogPara="Explore how token developers are transforming the blockchain ecosystem with secure token designs."
                                                CommentNum="0"
                                                viwer="175"
                                                urlSingleBlog="/blog/token-developer-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/nft-development-chandigarh">
                                            <CardBlog
                                                singleBlogImg={NFTDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="NFT Development in Chandigarh"
                                                blogPara="NFTs are changing the way digital assets are traded and owned. Learn about the process here."
                                                CommentNum="1"
                                                viwer="230"
                                                urlSingleBlog="/blog/nft-development-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/dapp-development-chandigarh">
                                            <CardBlog
                                                singleBlogImg={DAppImage}
                                                time="12 Dec 2024"
                                                blogTitle="DApp Development in Chandigarh"
                                                blogPara="Discover the world of decentralized applications and how they’re reshaping the digital landscape."
                                                CommentNum="0"
                                                viwer="190"
                                                urlSingleBlog="/blog/dapp-development-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/binary-mlm-software-chandigarh">
                                            <CardBlog
                                                singleBlogImg={MLMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Binary MLM Software in Chandigarh"
                                                blogPara="Explore binary MLM software solutions and how they help in network marketing."
                                                CommentNum="0"
                                                viwer="220"
                                                urlSingleBlog="/blog/binary-mlm-software-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/hybrid-mlm-software-developer-chandigarh">
                                            <CardBlog
                                                singleBlogImg={HybridMLMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Hybrid MLM Software Developer in Chandigarh"
                                                blogPara="Hybrid MLM software combines the benefits of various MLM models to maximize user engagement."
                                                CommentNum="0"
                                                viwer="210"
                                                urlSingleBlog="/blog/hybrid-mlm-software-developer-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/mlm-plan-generator-chandigarh">
                                            <CardBlog
                                                singleBlogImg={MLMPlanImage}
                                                time="12 Dec 2024"
                                                blogTitle="MLM Plan Generator in Chandigarh"
                                                blogPara="Generate customized MLM plans with our efficient MLM plan generator software."
                                                CommentNum="1"
                                                viwer="160"
                                                urlSingleBlog="/blog/mlm-plan-generator-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/web3-development-future-internet">
                                            <CardBlog
                                                singleBlogImg={Web3DevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Web3 Development: The Future of the Internet"
                                                blogPara="Web3 is revolutionizing the internet with decentralized technologies. Find out more about its potential."
                                                CommentNum="2"
                                                viwer="300"
                                                urlSingleBlog="/blog/web3-development-future-internet"
                                            />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/network-marketing-software">
                                            <CardBlog
                                                singleBlogImg={NetworkMarketingImage}
                                                time="12 Dec 2024"
                                                blogTitle="Network Marketing Software Development: Powering Your Business Expansion"
                                                blogPara="Streamline your network marketing business with top-notch software solutions."
                                                CommentNum="0"
                                                viwer="210"
                                                urlSingleBlog="/blog/network-marketing-software"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/cryptocurrency-app-development">
                                            <CardBlog
                                                singleBlogImg={CryptoAppImage}
                                                time="12 Dec 2024"
                                                blogTitle="Cryptocurrency App Development: Revolutionizing the Digital Economy"
                                                blogPara="Develop secure and scalable cryptocurrency apps for a seamless user experience."
                                                CommentNum="1"
                                                viwer="250"
                                                urlSingleBlog="/blog/cryptocurrency-app-development"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/ui-ux-design-services-chandigarh">
                                            <CardBlog
                                                singleBlogImg={UIUXDesignImage}
                                                time="12 Dec 2024"
                                                blogTitle="UI/UX Design Services in Chandigarh"
                                                blogPara="Create intuitive and visually appealing designs with professional UI/UX design services."
                                                CommentNum="0"
                                                viwer="220"
                                                urlSingleBlog="/blog/ui-ux-design-services-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/shopify-development-services-chandigarh">
                                            <CardBlog
                                                singleBlogImg={ShopifyDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Shopify Development Services in Chandigarh"
                                                blogPara="Get top-notch Shopify development services to build your online store efficiently."
                                                CommentNum="2"
                                                viwer="260"
                                                urlSingleBlog="/blog/shopify-development-services-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/seo-web-design-services-chandigarh">
                                            <CardBlog
                                                singleBlogImg={SEOImage}
                                                time="12 Dec 2024"
                                                blogTitle="SEO Web Design Services in Chandigarh: Where Creativity Meets Optimization"
                                                blogPara="Improve your website's ranking and design with our expert SEO and web design services."
                                                CommentNum="1"
                                                viwer="240"
                                                urlSingleBlog="/blog/seo-web-design-services-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/chandigarh-crm-software-solutions">
                                            <CardBlog
                                                singleBlogImg={CRMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Chandigarh CRM Software Solutions: Empowering Business Growth"
                                                blogPara="Enhance customer relationships with CRM software designed to manage and automate interactions."
                                                CommentNum="0"
                                                viwer="280"
                                                urlSingleBlog="/blog/chandigarh-crm-software-solutions"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/secure-blockchain-software-development">
                                            <CardBlog
                                                singleBlogImg={BlockchainSecurityImage}
                                                time="12 Dec 2024"
                                                blogTitle="Secure Blockchain Software Development: Revolutionizing Digital Security"
                                                blogPara="Develop secure blockchain software with the latest technologies and best practices."
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/secure-blockchain-software-development"
                                            />
                                        </Link>
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/ecommerce-web-development-chandigarh">
                                            <CardBlog
                                                singleBlogImg={ecommerceDeveImg}
                                                time="12 Dec 2024"
                                                blogTitle="E-commerce Web Development in Chandigarh with Asvayuk Technologies: Your Partner for Success"
                                                blogPara="Chandigarh is home to a rapidly growing business landscape, with many companies seeking to tap into the advantages of e-commerce. "
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/ecommerce-web-development-chandigarh"
                                            />
                                        </Link>
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        <Link to="/blog/custom-web-design-chandigarh">
                                            <CardBlog
                                                singleBlogImg={webDevServices}
                                                time="12 Dec 2024"
                                                blogTitle="Custom Web Design in Chandigarh: Tailored Solutions for Your Digital Success"
                                                blogPara="With Asvayuk Technologies, you get a custom web design service in Chandigarh that represents what you envision, engages with your audience, and brings concrete results."
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/custom-web-design-chandigarh"
                                            />
                                        </Link>
                                    </Col>

                                </Row>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="form-container">
                                    <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" frameBorder="0" allowfullscreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >

            </main >

        </>
    )
}

export default Blog
