import BannerButton from "../BannerBtn/BannerButton";
// ;
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banners_14 from "../../Images/banners-14.webp";
import "swiper/css";
import Meta_Component from "../Meta_Component/Meta_Component";
import FAQAccordion from "../../accordian/FAQAccordion";
import Magento_service_card from "./Magento_service_card";
import service1 from "../../Images/services1.webp";
import service2 from "../../Images/services2.webp";
import service3 from "../../Images/services3.webp";
import service4 from "../../Images/services4.webp";
import service5 from "../../Images/services5.webp";
import service6 from "../../Images/services6.webp";
import localBz from "../../Images/localBz2.jpg";

const faqData = [
  {
    question:
      "Why choose Asvayuk Technologies for social media marketing services?",
    answer:
      "As an award-winning social media marketing agency in Chandigarh, we offer customized solutions, an expert team, and a proven track record of delivering results. Our combination of social media and SEO expertise ensures that your online presence grows and generates leads effectively.",
  },
  {
    question:
      "What platforms do you manage for social media marketing in Chandigarh?",
    answer:
      "We manage all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, and YouTube. Depending on your business needs, we recommend the best platforms for your target audience.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "The cost of social media marketing depends on your goals, the platforms you want to target, and the scale of your campaigns. At Asvayuk Technologies, we offer flexible pricing to ensure that your marketing efforts fit within your budget.",
  },
  {
    question: "Can you help my business if I’m just starting?",
    answer:
      "Absolutely! As a leading social media marketing agency in Chandigarh, we work with businesses at all stages. Whether you’re a startup or an established brand, we help you grow your online presence from the ground up.",
  },
  {
    question: "How do you measure success in social media marketing?",
    answer:
      "We use key performance indicators (KPIs) such as engagement rates, reach, leads generated, and sales growth to measure the success of your campaigns. Regular reports are shared to track performance.",
  },
  {
    question:
      "How long does it take to see results from social media marketing?",
    answer:
      "Results depend on various factors, including your business type, competition, and campaign strategies. However, most of our clients begin to see significant improvements within 1-3 months.",
  },
];

const Social_Media_Marketing = () => {
  return (
    <>
      <Meta_Component
        title="Social Media Marketing Agency in Chandigarh"
        description="Looking for a reliable social media marketing agency in Chandigarh? Boost your brand’s online presence with expert strategies. Contact us today!"
        canonical="https://asvayuktech.com/social-media-marketing-agency-in-chandigarh"
      />

      <main>
        <section className="performance_card1" aria-label="Top Social Media Agencies in Chandigarh">
          <Container>
            <Row>
              <Col lg={6} md={6} className="col-12">
                <Breadcrumb>
                  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "#" }}>
                    Technology
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    Social Media Marketing
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div className="peformance_section_top-heading perTitle mt-3">
                  <h2><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Social Media Marketing Agency in Chandigarh</Link></h2>
                  <p>
                    In today’s digital world, having a strong online presence is
                    crucial for business growth, and social media marketing
                    plays a key role in achieving that. If you're looking for an
                    award-winning social media marketing agency in Chandigarh,
                    Asvayuk Technologies Private Ltd. is your go-to partner. We
                    specialize in elevating your brand through targeted
                    strategies and innovative social media marketing solutions
                    tailored to your unique business needs.
                  </p>
                  <p>
                    Whether you need a social media marketing project in
                    Chandigarh, or are looking for the best social media
                    marketing services in Chandigarh, our expert team has got
                    you covered. We help businesses connect with their audience,
                    enhance brand awareness, and drive sales through customized
                    social media marketing in Chandigarh strategies.
                  </p>
                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} className="col-12">
                <div className="peformance_card1_right-sec">
                  <img src={banners_14} alt="social media marketing agency in chandigarh"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="magento_service_card" aria-label="Social Media marketing Company in Chandigarh">
          <Container>
            <div className="card_heading text-center">
              <h2 className="px-3 mx-5">
                Our Social Media Marketing Services in Chandigarh
              </h2>
              <p className="p-1">
                At Asvayuk Technologies, we offer comprehensive social media
                marketing services to help you thrive in the digital landscape.
                <br />
                Our range of services includes :
              </p>
            </div>
            <div className="magento_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    cardHeading="Social Media Strategy Development"
                    cardPara="We begin with understanding your business and goals, followed by creating a custom social media strategy that drives results."
                    altText="award-winning SEO agency in Chandigarh"
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    cardHeading="Content Creation and Management"
                    cardPara="Our content creation team designs engaging posts, infographics, and videos to captivate your target audience."
                    altText="social media company in chandigarh"
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    cardHeading="Social Media Ads Management"
                    cardPara="We run highly targeted ad campaigns on Facebook, Instagram, LinkedIn, and Google to enhance visibility and sales"
                    altText="social media marketing in chandigarh"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    cardHeading="Community Engagement"
                    cardPara="We focus on building strong relationships with your audience through consistent and meaningful engagement."
                    altText="smo company in chandigarh"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    cardHeading="Analytics and Reporting"
                    cardPara="We provide you with detailed reports to measure the performance of your campaigns and continuously optimize strategies for better results."
                    altText="Social media marketing provider in chandigarh"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    cardHeading="100% Plagiarism-Free Content"
                    cardPara={
                      <>
                        We ensure original and
                        <br /> high-quality content tailored to your brand,
                        maintaining authenticity and
                        <br /> credibility
                      </>
                    }
                    altText="best social media marketing services in Chandigarh"
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-section" aria-label="SMM agency in Chandigarh">
          <Container>
            <div className="main-bg p-3">
              <div className="inside-main mt-1">
                <h1 className="conclusion_title mb2">
                  Boost Your Brand with the Best Social Media Marketing Agency
                  in Chandigarh
                </h1>
                <div>
                  <p className="fs-6 pt-3 text-white">
                    If you're looking for a social media marketing agency in
                    Chandigarh that combines creativity, expertise, and results,
                    Asvayuk Technologies Private Ltd. is the perfect choice. We
                    offer the best social media marketing services in
                    Chandigarh, providing tailored strategies that help your
                    brand shine online. Get in touch with us today and start
                    your journey to online success!
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="supercharge-section mb-0" aria-label="best social media marketing services in Chandigarh">
          <div className="container">
            <div className="row">
              <div className="choice pb-5">
                <h2 className="fw-semibold">
                  Benefits of Hiring a Social Media Marketing Provider in
                  Chandigarh
                </h2>
                <p className="pt-2">
                  In today’s competitive market, choosing a local social media
                  company in Chandigarh can give you a significant advantage.
                  Here's why partnering with a Social media marketing provider
                  in Chandigarh is a smart move:
                </p>
                <ul>
                  <li>
                    <span className="fw-bold h6">Local Expertise : </span>We
                    have an in-depth understanding of the Chandigarh market,
                    which allows us to create strategies that resonate with
                    local audiences and improve your brand’s visibility.
                  </li>
                  <li>
                    <span className="fw-bold h6">Cost-Effective : </span>By
                    working with us, you get top-notch social media marketing in
                    Chandigarh services at competitive prices, ensuring you get
                    the best ROI on your marketing efforts.
                  </li>
                  <li>
                    <span className="fw-bold h6">Quick Response Time : </span>
                    Being based in Chandigarh means faster communication and
                    quicker turnaround times for all your social media marketing
                    needs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-study-section"
          style={{ backgroundColor: "#E3FBF5" }} 
          aria-label="Digital Marketing Companies in Chandigarh"
        >
          <Container>
            <h1 className="fw-semibold mb-5 ps-5">
              Case Study : How We Helped a Local Business Grow
            </h1>
            <Row className="align-items-center case-study">
              <Col lg={6}>
                <div className="case-study-text">
                  <p className="case-study-content">
                    One of our clients, a local retail store in Chandigarh,
                    approached us to improve their online visibility. By
                    implementing a strategic social media campaign, we increased
                    their follower base by 40% in just two months. Through
                    targeted ads and creative content, we also boosted their
                    sales by 25% within the first quarter. This is just one
                    example of how our social media marketing services in
                    Chandigarh can help you achieve similar success.
                  </p>
                </div>
              </Col>

              <Col lg={6} className="d-flex justify-content-center">
                <img
                  src={localBz}
                  alt="Top Social Media Agencies in Chandigarh"
                  className="case-study-img"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section style={{ background: "#ecfffa" }} aria-label="SMM experts at Chandigarh">
          <FAQAccordion title="FAQs on Social Media Marketing" faqs={faqData} />
        </section>
      </main>
    </>
  );
};

export default Social_Media_Marketing;
