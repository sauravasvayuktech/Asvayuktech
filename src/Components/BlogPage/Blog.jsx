// import "./Blog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
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
import { Link } from "react-router-dom";
import Meta_Component from "../Meta_Component/Meta_Component";
import crm from "../../Images/seo_banner.webp";
import BlockChain from "../ServicesPage/BlockChain";
import MetaverseImage from "../../Images/MetaverseDev.png";
import SoftwareDevImage from "../../Images/softwareDeve.png";
import SmartContractImage from "../../Images/TopSmartContactDevelopment.png";
import TokenDevImage from "../../Images/Token_Dev.png";
import NFTDevImage from "../../Images/NFTDev.png";
import DAppImage from "../../Images/DAPPdev.png";
import MLMImage from "../../Images/mlmBinary.png";
import HybridMLMImage from "../../Images/HybridMLM.png";
import MLMPlanImage from "../../Images/mlmPlanSoftware.png";
import Web3DevImage from "../../Images/web3Dev.png";
import MLMAppImage from "../../Images/MultiLevelMarketing.png";
import NetworkMarketingImage from "../../Images/networkMarketing.png";
import CryptoAppImage from "../../Images/CryptocurrencyAppDev.png";
import UIUXDesignImage from "../../Images/UIUX_DesignSolutions.png";
import ShopifyDevImage from "../../Images/shopifyDeve.webp";
import SEOImage from "../../Images/seoWeb.png";
import CRMImage from "../../Images/crmSoftware.png";
import BlockchainSecurityImage from "../../Images/secureBlockchain.png";
import ecommerceDeveImg from "../../Images/ecommerceDeve.webp";
import webDevServices from "../../Images/webDevServices.png";
import ContactForm from "../ContactPage/ContactForm";
import blockchain2026 from "../../Images/cryptoEx2026.webp";
import customsoftware from "../../Images/custom-software.webp";
import aiautomation from "../../Images/Strategic-AI-Automation-Enterprise-Growth-Asvayuk.webp";

function Blog() {
  const blogs = [
    {
      img: seo,
      date: "2024-11-06",
      title:
        "Boost Your Business with SEO: Key Tactics to Drive Organic Traffic",
      para: "Your guide to SEO success—explore top tips for ranking higher, increasing traffic, and optimizing your digital strategy.",
      url: "/blog/Boost-Your-Business-with-SEO-Key-Tactics-to-Drive-Organic-Traffic",
    },
    {
      img: c3,
      date: "2024-11-07",
      title: "Revolutionize Your Business with Asvayuks Shopify Development",
      para: "Custom Shopify solutions to grow your e-commerce business with expert setup, app development, and ongoing support.",
      url: "/blog/Revolutionize-Your-Business-with-Asvayuks-Shopify-Development",
    },
    {
      img: c4,
      date: "2024-05-17",
      title: "Enhance Efficiency with Custom Enterprise Portals",
      para: "Transform your business with Asvayuk Tech’s enterprise portals.",
      url: "/blog/Enhance-Efficiency-with-Custom-Enterprise-Portals",
    },
    {
      img: mlm,
      date: "2024-11-11",
      title: "MLM Software Developer in Chandigarh, Panchkula, Mohali",
      para: "Asvayuk Technologies develops advanced MLM software for streamlined operations.",
      url: "/blog/MLM-Software-Developer-in-Chandigarh-Panchkula-Mohali",
    },
    {
      img: smart,
      date: "2024-11-12",
      title: "Smart Contract Developer in Chandigarh, Panchkula, Mohali",
      para: "Smart contracts open new possibilities by automating agreements securely.",
      url: "/blog/Smart-Contract-Developer-in-Chandigarh-Panchkula-Mohali",
    },
    {
      img: crypto,
      date: "2024-11-11",
      title: "Crypto Software Developer in Chandigarh",
      para: "Mastering blockchain-based crypto software development.",
      url: "/blog/Crypto-Software-Development-by-Asvayuk-Technologies",
    },
    {
      img: cryptoEx,
      date: "2024-11-12",
      title: "Crypto Exchange Developer in Chandigarh, Zirakpur, Mohali",
      para: "Demand for secure and easy-to-use crypto exchanges is growing.",
      url: "/blog/Crypto-Exchange-Development-in-Chandigarh-Zirakpur-Mohali",
    },
    {
      img: BlockChainI,
      date: "2024-11-12",
      title: "Blockchain Developer in Zirakpur, Chandigarh, Panchkula, Mohali",
      para: "Blockchain is revolutionizing industries worldwide.",
      url: "/blog/Blockchain-Developer-in-Zirakpur-Chandigarh-Panchkula-Mohali",
    },
    {
      img: MetaverseImage,
      date: "2024-12-12",
      title: "Metaverse Developer in Chandigarh",
      para: "Explore the emerging field of metaverse development.",
      url: "/blog/metaverse-developer-in-chandigarh",
    },
    {
      img: SoftwareDevImage,
      date: "2024-12-12",
      title: "Software Developer in Chandigarh",
      para: "How software developers are shaping the tech industry.",
      url: "/blog/software-developer-chandigarh",
    },
    {
      img: SmartContractImage,
      date: "2024-12-12",
      title: "Smart Contract Developer in Mohali",
      para: "Smart contracts are revolutionizing industries.",
      url: "/blog/smart-contract-developer-mohali",
    },
    {
      img: TokenDevImage,
      date: "2024-12-12",
      title: "Token Developer in Chandigarh",
      para: "Secure token development for blockchain ecosystems.",
      url: "/blog/token-developer-chandigarh",
    },
    {
      img: NFTDevImage,
      date: "2024-12-12",
      title: "NFT Development in Chandigarh",
      para: "NFTs are changing digital asset ownership.",
      url: "/blog/nft-development-chandigarh",
    },
    {
      img: DAppImage,
      date: "2024-12-12",
      title: "DApp Development in Chandigarh",
      para: "Decentralized applications reshaping the digital landscape.",
      url: "/blog/dapp-development-chandigarh",
    },
    {
      img: MLMImage,
      date: "2024-12-12",
      title: "Binary MLM Software in Chandigarh",
      para: "Binary MLM software solutions for network marketing.",
      url: "/blog/binary-mlm-software-chandigarh",
    },
    {
      img: HybridMLMImage,
      date: "2024-12-12",
      title: "Hybrid MLM Software Developer in Chandigarh",
      para: "Hybrid MLM software combines multiple models.",
      url: "/blog/hybrid-mlm-software-developer-chandigarh",
    },
    {
      img: MLMPlanImage,
      date: "2024-12-12",
      title: "MLM Plan Generator in Chandigarh",
      para: "Generate customized MLM plans efficiently.",
      url: "/blog/mlm-plan-generator-chandigarh",
    },
    {
      img: Web3DevImage,
      date: "2024-12-12",
      title: "Web3 Development: The Future of the Internet",
      para: "Web3 is revolutionizing the internet.",
      url: "/blog/web3-development-future-internet",
    },
    {
      img: NetworkMarketingImage,
      date: "2024-12-12",
      title: "Network Marketing Software Development",
      para: "Streamline your network marketing business.",
      url: "/blog/network-marketing-software",
    },
    {
      img: CryptoAppImage,
      date: "2024-12-12",
      title: "Cryptocurrency App Development",
      para: "Develop secure and scalable crypto apps.",
      url: "/blog/cryptocurrency-app-development",
    },
    {
      img: UIUXDesignImage,
      date: "2024-12-12",
      title: "UI/UX Design Services in Chandigarh",
      para: "Professional UI/UX design services.",
      url: "/blog/ui-ux-design-services-chandigarh",
    },
    {
      img: ShopifyDevImage,
      date: "2025-12-12",
      title: "Shopify vs. Magento vs. WooCommerce: Best Choice for 2025?",
      para: "Compare Shopify, Magento, and WooCommerce.",
      url: "/blog/shopify-vs-magento-vs-woocommerce-comparison-2025",
    },
    {
      img: ecommerceDeveImg,
      date: "2025-12-12",
      title: "Why Your Retail Business Needs a Custom eCommerce App",
      para: "Custom eCommerce apps boost retail sales.",
      url: "/blog/ecommerce-web-development-chandigarh",
    },
    {
      img: webDevServices,
      date: "2024-12-12",
      title: "Custom Web Design in Chandigarh",
      para: "Tailored web design solutions for digital success.",
      url: "/blog/custom-web-design-chandigarh",
    },
    {
      img: SEOImage,
      date: "2024-12-12",
      title: "SEO Web Design Services in Chandigarh",
      para: "Where creativity meets optimization.",
      url: "/blog/seo-web-design-services-chandigarh",
    },
    {
      img: CRMImage,
      date: "2024-12-12",
      title: "Chandigarh CRM Software Solutions",
      para: "Empowering business growth with CRM software.",
      url: "/blog/chandigarh-crm-software-solutions",
    },
    {
      img: BlockchainSecurityImage,
      date: "2024-12-12",
      title: "Secure Blockchain Software Development",
      para: "Revolutionizing digital security with blockchain.",
      url: "/blog/secure-blockchain-software-development",
    },
     {
      img: blockchain2026,
      date: "2026-01-05",
      title: "How to Build a Secure Crypto Exchange Platform in 2026: The Ultimate Guide",
      para: "Building secure and compliant trading ecosystems in Chandigarh-Mohali.",
      url: "/blog/how-to-build-secure-crypto-exchange-platform-2026",
    },
      {
      img: customsoftware,
      date: "2026-01-06",
      title: "Custom Software vs Ready-Made: Enterprise Guide 2026",
      para: "Why modern enterprises are choosing custom-built solutions over generic subscriptions in 2026.",
      url: "/blog/custom-software-vs-ready-made-enterprises",
    },
    {
      img: aiautomation,
      date: "2026-01-29",
      title: " AI and Automation: The Future of Strategic BusinessOperations",
      para: "Transforming business operations through intelligent technology.",
      url: "/blog/ai-automation-integration-enterprise-guide",
    },
  ];
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

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
            className="blogSwiper"
          >
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
                  {sortedBlogs.map((blog, index) => (
                    <Col
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      className="pb-4"
                      key={index}
                    >
                      <Link to={blog.url}>
                        <CardBlog
                          singleBlogImg={blog.img}
                          time={new Date(blog.date).toDateString()}
                          blogTitle={blog.title}
                          blogPara={blog.para}
                          CommentNum="0"
                          viwer="200"
                          urlSingleBlog={blog.url}
                        />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div className="form-container">
                  {/* <iframe
                                        width="100%"
                                        height="480px"
                                        src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe> */}
                  <ContactForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Blog;
