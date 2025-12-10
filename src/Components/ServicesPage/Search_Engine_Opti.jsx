import BannerButton from "../BannerBtn/BannerButton";
// ;
import { Breadcrumb, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import c18 from "../../Images/c18.webp";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import container from "../../Images/container.webp";
import planning from "../../Images/planning.webp";
import pen from "../../Images/pen.webp";
import development from "../../Images/development.webp";
import test from "../../Images/test.webp";
import launch from "../../Images/launch.webp";
import Google_logo from "../../Images/Google-logo.webp";
import ahrefs from "../../Images/ahrefs.webp";
import c20 from "../../Images/c20.webp";
import adobe from "../../Images/adobe (1).webp";
import Semrush from "../../Images/Semrush.webp";
import Moz_logo from "../../Images/Moz_logo.webp";
import Bing_1 from "../../Images/Bing-1.webp";
import "swiper/css";
import Meta_Component from "../Meta_Component/Meta_Component";
import FAQAccordion from "../../accordian/FAQAccordion";
import Magento_service_card from "../ServicesPage/Magento_service_card";
import service1 from "../../Images/services1.webp";
import service2 from "../../Images/services2.webp";
import service3 from "../../Images/services3.webp";
import service4 from "../../Images/services4.webp";
import service5 from "../../Images/services5.webp";
import service6 from "../../Images/services6.webp";

const faqData = [
  {
    question: "Why choose Asvayuk Technologies Private Ltd. for SEO services?",
    answer:
      "We are among the top SEO companies in Chandigarh, offering result-driven and ethical SEO strategies tailored to your business.",
  },
  {
    question: "How soon can I expect to see SEO results?",
    answer:
      "SEO is a long-term strategy. While some improvements can be seen within 3 months, significant results typically take 6-12 months.",
  },
  {
    question: "Do you offer local SEO services in Chandigarh?",
    answer:
      "Yes, our local SEO services help businesses rank higher in Chandigarh and surrounding areas.",
  },
  {
    question:
      "What makes your SEO company different from others in Chandigarh?",
    answer:
      "We focus on ethical SEO practices, data-driven strategies, and continuous optimization to ensure long-term results.",
  },
  {
    question: "Can SEO help my small business grow?",
    answer:
      "Absolutely! Our SEO services in Chandigarh are designed to boost visibility, attract local customers, and drive sales.",
  },
];

const Search_Engine_Opti = () => {
  return (
    <>
      <Meta_Component
        title="Best SEO Services in Chandigarh | Asvayuk Technologies "
        description="Boost your online presence with the Best SEO Services in Chandigarh. Get higher rankings, more traffic, and better conversions with expert SEO solutions."
        canonical="https://asvayuktech.com/best-seo-services-in-chandigarh"
      />

      <main>
        <section className="performance_card1">
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
                  <Breadcrumb.Item active>SEO</Breadcrumb.Item>
                </Breadcrumb>
                <div className="peformance_section_top-heading mt-3">
                  <h2><Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">Best SEO Services in Chandigarh</Link></h2>
                  <p>
                    Having trouble improving your website’s Google ranking?
                    Asvayuk Technologies Private Ltd. offers the best SEO
                    Services in Chandigarh, ensuring your business reaches its
                    target audience effectively. With our expert search engine
                    optimization services, we enhance your online visibility,
                    drive organic traffic, and improve conversion rates. Whether
                    you're a startup or an established enterprise, our
                    customized SEO solutions are designed to fit your specific
                    needs.
                  </p>
                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </Col>
              <Col lg={6} md={6} className="col-12">
                <div className="peformance_card1_right-sec">
                  <img src={c18} alt="best SEO Services in Chandigarh" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="magento_service_card">
          <Container>
            <div className="card_heading text-center">
              <h2>
                Elevate Your Online Presence with the Best SEO Services in
                Chandigarh
              </h2>
              <p>
                We provide a wide range of search engine optimization services
                in Chandigarh, including
              </p>
            </div>
            <div className="game_cards">
              <Row className="gy-4">
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service1}
                    altText="SEO Company in Chandigarh"
                    cardHeading="Local SEO"
                    cardPara="Targeting Chandigarh and surrounding areas to improve visibility in local searches"
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service2}
                    altText="search engine optimization Services chandigarh"
                    cardHeading="E-commerce SEO"
                    cardPara="Optimizing product pages and categories for better rankings on online stores."
                  />
                </Col>
                <Col lg={4}>
                  <Magento_service_card
                    cardImg={service3}
                    altText="OFF Page SEO agency Chandigarh"
                    cardHeading="Technical SEO"
                    cardPara=" Fixing website speed, mobile responsiveness, and indexing issues."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service4}
                    altText="best seo expert in chandigarh"
                    cardHeading="Content Marketing & Blogging"
                    cardPara="Creating high-quality, keyword-rich content to attract organic traffic."
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service5}
                    altText="Website SEO provider in chandigarh"
                    cardHeading="Link Building & Authority Development"
                    cardPara="Building authoritative backlinks for domain credibility"
                  />
                </Col>
                <Col lg={4} className="d-flex">
                  <Magento_service_card
                    cardImg={service6}
                    altText="high rank seo website creator in chandigarh"
                    cardHeading="Analytics & Performance Tracking"
                    cardPara="Monitoring site performance and user behavior to refine SEO strategies for better results."
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                THE IMPORTANCE OF SEO FOR YOUR BUSINESS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN PANCHKULA AND CHANDIGARH
                </span>
              </h1>
              <p className="powered_php pt-3">
                SEO is about more than just achieving rankings; it’s about
                reaching and engaging the right audience
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="School Management App Development Panchkula"
                    >
                      Improves brand visibility and credibility
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom School Solutions Chandigarh">
                      Increases website traffic and engagement
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Student Management Systems Panchkula">
                      Generates high-quality leads and conversions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Real-Time Student Tracking">
                      Enhances user experience and website performance
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Parent-Teacher Communication System">
                      Boosts Long-Term Growth and Competitive Advantage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-section" aria-label="SMM agency in Chandigarh">
          <Container>
            <div className="main-bg p-3">
              <div className="inside-main mt-1">
                <h1 className="conclusion_title mb2">
                  Begin your journey with top-notch SEO services in Chandigarh.
                </h1>
                <div>
                  <p className="fs-6 pt-3 text-white">
                    If you're looking for a trusted Website SEO provider in
                    Chandigarh, Asvayuk Technologies Private Ltd. is your go-to
                    partner. Contact us today and take your business to the next
                    level with our expert SEO solutions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="search-engine">
          <Container>
            <div className="search-engine-heading">
              <h2>Tools &amp; Technologies</h2>
            </div>

            <div className="search-engine-imgs">
              <Row className="gy-5 mt-3 text-center">
                <Col lg={3} md={6}>
                  <img src={Google_logo} alt="SEO Companies of Chandigarh" />
                </Col>
                <Col lg={3} md={6}>
                  <img src={ahrefs} alt="search engine optimizer" />
                </Col>
                <Col lg={3} md={6}>
                  <img src={c20} alt="best seo expert in chandigarh" />
                </Col>
                <Col lg={3} md={6}>
                  <img src={adobe} alt="Website SEO provider in chandigarh" />
                </Col>
              </Row>
              <div className="text-center  search-engine_last_row ">
                <Row className="gy-5 gx-5 gap-3">
                  <Col lg={3} md={6}>
                    <img src={Semrush} alt="high rank seo website creator in chandigarh" />
                  </Col>
                  <Col lg={3} md={6}>
                    <img src={Moz_logo} alt="Digital marketing services in Chandigarh" />
                  </Col>
                  <Col lg={3} md={6}>
                    <img src={Bing_1} alt="Top seo companies in chandigarh" />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center align-items-center">

              <BannerButton
                btnTitle="Get A Free SEO Audit"
                blockChainClass="d-inline-block search-engine-button mt-5 text-center"
              />
            </div>
          </Container>
        </section>

        <Container className="py-5">
          <Row className="align-items-center mb-4 text-center">
            <Col lg={10} className="mx-auto">
              <h2 className="fw-bold display-4">
                Why Choose Our SEO Services in Chandigarh?
              </h2>
              <p>
                At Asvayuk Technologies Private Ltd., we specialize in SEO
                services in Chandigarh that align with the latest search engine
                algorithms. Our approach focuses on ethical and data-driven SEO
                techniques that yield long-term results. Here’s what sets us
                apart:
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative card"
                style={{ borderRadius: "12px", background: "#f9f9f9" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c11}
                      alt="SEO Company in Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      High-Ranking SEO Website Creation
                    </h6>
                    <p className="mb-0 text-muted">
                      Our services also include designing SEO-optimized websites
                      that load faster, offer seamless navigation, and comply
                      with Google’s ranking factors.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative ms-md-n3 mt-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c12}
                      alt="SEO services in Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Comprehensive On-Page and Off-Page SEO
                    </h6>
                    <p className="mb-0 text-muted">
                      On-Page SEO: Keyword optimization, meta tags, content
                      optimization, and technical SEO improvements.
                      <br />
                      Off-Page SEO: High-quality link building, guest blogging,
                      social bookmarking, and influencer outreach.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="p-4 shadow-lg position-relative mt-md-4 card"
                style={{
                  borderLeft: "5px solid #6c63ff",
                  borderRadius: "12px",
                }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c14}
                      alt="search engine optimization Services chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Each business has its own distinct needs, and so should
                      its approach to SEO
                    </h6>
                    <p className="mb-0 text-muted">
                      Every business is unique, and so should its SEO strategy.
                      Our experts conduct in-depth keyword research, competitor
                      analysis, and website audits to develop a tailored SEO
                      plan that ensures your website ranks higher.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#6c63ff",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>

              <Card
                className="p-4 shadow-lg position-relative mt-4 card"
                style={{ background: "#f9f9f9", borderRadius: "12px" }}
              >
                <Row className="align-items-center">
                  <Col xs={3} sm={2}>
                    <img
                      src={c13}
                      alt="OFF Page SEO agency Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Expert Search Engine Optimizers
                    </h6>
                    <p className="mb-0 text-muted">
                      As a leading SEO Company in Chandigarh, our team comprises
                      experienced search engine optimizers who follow ethical
                      practices to boost rankings without risking penalties.
                    </p>
                  </Col>
                </Row>
                <span
                  className="position-absolute top-0 end-0 p-3"
                  style={{
                    fontSize: "30px",
                    color: "#ff7b00",
                    transform: "scaleX(-1) rotate(180deg)",
                    opacity: "0.7",
                  }}
                >
                  &#10078;
                </span>
              </Card>
            </Col>
          </Row>
        </Container>


        <section className="software-sec">
          <Container>
            <Row>
              <div className="software-sec-heading text-center">
                <h2>How Our SEO Services Improve Your Business?</h2>
              </div>
              <div className="software-sec-card">
                <Row className="gy-4">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="software-sec-card2 rounded-4">
                      <h3 className="text-center fw-bold">Example 1</h3>
                      <div className="languages row pt-4">
                        <p>
                          A local restaurant in Chandigarh wasn’t getting online
                          orders due to poor search rankings. After implementing
                          our SEO strategies, including local SEO and content
                          optimization, the business saw a 60% increase in
                          online reservations within three months.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex">
                    <div className="software-sec-card2 rounded-4">
                      <h3 className="text-center fw-bold">Example 2 </h3>
                      <div className="languages row pt-4">
                        <p>
                          An IT company in Chandigarh struggled with lead
                          generation. Our OFF Page SEO agency in Chandigarh
                          helped them gain 200% more leads by improving their
                          domain authority and ranking for competitive keywords.
                        </p>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </Container>
        </section>

        <FAQAccordion
          title="FAQs on Search Engine Optimization"
          faqs={faqData}
        />
      </main>
    </>
  );
};

export default Search_Engine_Opti;
