import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/chatbotDevImage.png";
import BannerButton from "../../Components/BannerBtn/BannerButton";
import { useState } from "react";
import softdev1 from "../../Images/softdev1.svg";
import softdev2 from "../../Images/softdev2.svg";
import softdev3 from "../../Images/softdev3.svg";
import softdev4 from "../../Images/softdev4.svg";
import softdev5 from "../../Images/softdev5.svg";
import softdev6 from "../../Images/softdev6.svg";
import softdev7 from "../../Images/softdev7.svg";
import c11 from "../../Images/c11.webp";
import c12 from "../../Images/c12.webp";
import c13 from "../../Images/c13.webp";
import c14 from "../../Images/c14.webp";
import ServicesCard from "../../Components/ServicesPage/ServicesCard";
// import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

const services = [
  {
    id: "1",
    title: "Custom Chatbot Development",
    image: softdev1,
    alt: "Custom chatbot development services in Saudi Arabia",
    content: (
      <>
        Design and develop AI-powered chatbots tailored specifically to your
        business needs, improving customer engagement and automating support
        workflows.
      </>
    ),
  },
  {
    id: "2",
    title: "Omnichannel Chatbot Integration",
    image: softdev2,
    alt: "Omnichannel chatbot integration in Saudi Arabia",
    content: (
      <>
        Integrate chatbots seamlessly across platforms including websites,
        WhatsApp, Facebook Messenger, and mobile apps for consistent, unified
        customer communication.
      </>
    ),
  },
  {
    id: "3",
    title: "Natural Language Processing (NLP) Implementation",
    image: softdev3,
    alt: "NLP-based chatbot services in Saudi Arabia",
    content: (
      <>
        Leverage advanced NLP technology to enable your chatbots to understand
        user intent and respond naturally in Arabic and English languages.
      </>
    ),
  },
  {
    id: "4",
    title: "AI Chatbot Training & Optimization",
    image: softdev4,
    alt: "AI chatbot training and optimization services",
    content: (
      <>
        Continuously train and optimize your chatbot using AI and machine
        learning techniques to improve accuracy and customer satisfaction.
      </>
    ),
  },
  {
    id: "5",
    title: "Chatbot Analytics & Insights",
    image: softdev5,
    alt: "Chatbot analytics and reporting services",
    content: (
      <>
        Track chatbot performance with detailed analytics and user insights to
        refine interaction strategies and enhance ROI.
      </>
    ),
  },
  {
    id: "6",
    title: "Chatbot Maintenance & Support",
    image: softdev6,
    alt: "Chatbot maintenance and technical support",
    content: (
      <>
        Provide ongoing support and maintenance to ensure your chatbot operates
        smoothly and adapts to evolving customer requirements.
      </>
    ),
  },
  {
    id: "7",
    title: "Voice-Enabled Chatbot Solutions",
    image: softdev7,
    alt: "Voice-enabled chatbot integration services",
    content: (
      <>
        Implement voice recognition chatbots to enable hands-free customer
        interaction and improve accessibility.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Custom Chatbot Development Saudi Arabia",
    title: "Tailored Chatbot Development",
    desc: "Create personalized AI chatbots customized for your business processes to boost engagement and automate customer support.",
  },
  {
    img: c12,
    alt: "Omnichannel Chatbot Integration Saudi Arabia",
    title: "Omnichannel Integration",
    desc: "Deploy chatbots across multiple channels like web, mobile apps, and social media for consistent customer experience.",
  },
  {
    img: c13,
    alt: "NLP and AI Chatbot Services",
    title: "Advanced NLP Chatbots",
    desc: "Utilize natural language processing and AI to enable your chatbots to understand and respond intelligently in Arabic and English.",
  },
  {
    img: c11,
    alt: "Chatbot Training and Optimization",
    title: "AI Chatbot Training",
    desc: "Regularly train your chatbots with real data and machine learning to improve accuracy and customer satisfaction over time.",
  },
  {
    img: c12,
    alt: "Chatbot Analytics & Reporting",
    title: "Chatbot Performance Analytics",
    desc: "Analyze chatbot interactions and user behavior to optimize chatbot workflows and business impact.",
  },
  {
    img: c13,
    alt: "Voice-Enabled Chatbot Solutions",
    title: "Voice-Activated Chatbots",
    desc: "Enhance customer interaction with voice-enabled chatbot technology for hands-free communication.",
  },
];

const ChatbotIntegration = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Chatbot Integration Services in Saudi Arabia | ASVAYUK Technologies"
        description="Enhance customer engagement with AI-powered chatbot integration services by ASVAYUK Technologies in Saudi Arabia. We integrate chatbots with websites, mobile apps, CRMs, and social media platforms."
        canonical="https://asvayuktech.com/chatbot-integration-services-in-saudi-arabia"
      />

      <main>
        {/* Banner Section */}
        <section className="banner-en py-5">
          <Container>
            <Row className="align-items-center">
              <div className="col-lg-6">
                <div className="banner_textInfo-en">
                  <h1 style={{ fontSize: "40px", lineHeight: "1.1" }}>
                    <a
                      href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chatbot Integration Services in Saudi Arabia | ASVAYUK
                      Technologies
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> offers advanced
                    Chatbot Integration solutions designed to enhance customer
                    engagement, automate support, and drive business growth
                    across Saudi Arabia’s diverse industries.
                  </p>

                  <BannerButton
                    btnTitle="Free Consultation"
                    url="/contact-us"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg">
                  <img
                    src={banners_39}
                    alt="Chatbot Integration Services in Saudi Arabia"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Container className="py-5">
          <Row className="align-items-center mb-4 text-center">
            <Col lg={10} className="mx-auto">
              <h1 className="fw-bold">
                Why Choose Our Chatbot Integration Services in Saudi Arabia?
              </h1>
              <p>
                At ASVAYUK Technologies, we deliver intelligent chatbot
                integrations that streamline customer interactions, boost
                operational efficiency, and deliver 24/7 support with
                personalized conversational AI tailored for Saudi businesses.
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
                      alt="Custom Chatbot Development"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">Custom Chatbot Development</h6>
                    <p className="mb-0 text-muted">
                      We design and develop AI-powered chatbots tailored to your
                      business needs, enhancing customer engagement and
                      automating routine queries.
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
                      alt="Omnichannel Chatbot Integration"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Omnichannel Chatbot Integration
                    </h6>
                    <p className="mb-0 text-muted">
                      Seamlessly integrate chatbots across multiple platforms
                      like websites, WhatsApp, Facebook Messenger, and mobile
                      apps for consistent customer experience.
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
                      alt="Natural Language Processing (NLP)"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Advanced NLP & AI Capabilities
                    </h6>
                    <p className="mb-0 text-muted">
                      Our chatbots leverage NLP and AI technologies to
                      understand, interpret, and respond accurately to customer
                      queries in multiple languages including Arabic and
                      English.
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
                      alt="Expert Chatbot Support & Maintenance"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Expert Support & Continuous Improvement
                    </h6>
                    <p className="mb-0 text-muted">
                      Our team provides ongoing chatbot monitoring,
                      optimization, and support to ensure your AI assistant
                      adapts to evolving customer needs.
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

        {/* Intro Text Section */}
        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Chatbot Integration Services for Businesses in Saudi Arabia
          </h1>
          <p className="app__subhead mb-5 fs-5">
            ASVAYUK Technologies empowers Saudi enterprises with intelligent
            chatbot solutions that enhance customer service, automate lead
            generation, and provide instant 24/7 assistance. Elevate your brand
            with conversational AI tailored for your industry.
          </p>

          <div className="tabSoftDev">
            <Tab.Container
              activeKey={activeKey}
              onSelect={(k) => setActiveKey(k)}
            >
              <Row className="align-items-center">
                <Col md={6}>
                  <Nav className="flex-column scroll_list ps-3">
                    {services.map((service, index) => (
                      <Nav.Item key={service.id} className="navItemsSoftDev">
                        <Nav.Link
                          eventKey={service.id}
                          className={`tab-link navLinkSoftDev ${
                            activeKey === service.id ? "current" : ""
                          }`}
                        >
                          <span>
                            <span className="scroll_list_num">{`${String(
                              index + 1
                            ).padStart(2, "0")}.`}</span>{" "}
                            {service.title}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>

                <Col md={6}>
                  <Tab.Content className="p-4">
                    {services.map((service) => (
                      <Tab.Pane key={service.id} eventKey={service.id}>
                        <div className="tab-accordion-header tab-accordion-headerDev mb-3">
                          <Image src={service.image} alt={service.alt} fluid />
                          <h4 className="serv_card_head mt-3 fw-semibold">
                            {service.title}
                          </h4>
                        </div>
                        <div className="tab-accordion-body">
                          <p className="card_para">{service.content}</p>
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>

        {/* Services Section */}
        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">Our Chatbot Integration Solutions</h2>
              <p>
                At ASVAYUK Technologies, we develop intelligent chatbots and
                integrate them into your digital ecosystem — enabling real-time
                customer support, automated sales, and interactive user
                experiences for businesses across Saudi Arabia.
              </p>
            </div>

            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {serviceData.map((servicedata, i) => (
                <Col lg={4} className="pb-4 mb-3" key={i}>
                  <ServicesCard
                    ServiceCardImg={servicedata.img}
                    altText={servicedata.alt}
                    cardHeading={servicedata.title}
                    cardParaGraph={servicedata.desc}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <div
          className="accelerate-bx bg_new_bx padding_coman"
          style={{
            background: `radial-gradient(
      circle,
      rgba(36, 159, 129, 1) -300%,
      rgba(0, 0, 0, 1) 100%
    )`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="new_font_content new_font_white new_font_center">
                  <h1 className="fw-bold text-white text-center pb-5">
                    <span className="grdnt_clr">Enhance </span>Your Customer
                    Experience Seamlessly
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Boost Engagement with AI-Powered Chatbot Solutions
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Automate Customer Support to Save Time & Resources
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Deliver Personalized Interactions 24/7 with Smart Bots
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white py-5">
          <Container>
            <div className="pb-4">
              <h1 className="fw-bold">
                WHY CHATBOT INTEGRATION SERVICES ARE CRUCIAL{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  FOR BUSINESSES IN SAUDI ARABIA
                </span>
              </h1>
              <p className="powered_php pt-3">
                Businesses in Saudi Arabia are leveraging chatbot integration to
                enhance customer interactions, streamline support, and scale
                operations efficiently. Smart chatbots reduce response times,
                automate FAQs, and offer seamless multichannel communication.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="Custom Chatbot Development Saudi Arabia">
                      Develop AI-driven chatbots tailored to your industry and
                      customer needs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Omni-channel Chatbot Integration Saudi Arabia"
                    >
                      Integrate chatbots across websites, social media, and
                      messaging apps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Natural Language Processing Chatbots Saudi Arabia"
                    >
                      Implement NLP-powered bots that understand and respond
                      naturally
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a
                      href="#"
                      title="Chatbot Analytics & Optimization Saudi Arabia"
                    >
                      Track chatbot performance and continuously improve user
                      engagement
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title="Integration with CRM & Backend Systems Saudi Arabia"
                    >
                      Connect chatbots with CRM and other business systems for
                      smarter workflows
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="low-code-sec-tool">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-6 col-sm-12 mb-3 p-3">
                <div className="tool-heading">
                  <h3 className="fw-bold">Our Chatbot Integration Process</h3>
                  <p>
                    At ASVAYUK Technologies, we deliver end-to-end{" "}
                    <strong>chatbot integration services</strong> designed to
                    enhance customer engagement for businesses in Saudi Arabia.
                    Whether it&#39;s deploying AI chatbots on websites, social
                    platforms, or messaging apps, we ensure seamless, smart, and
                    secure interactions.
                  </p>
                  <p>
                    Our expert team follows a comprehensive process—from
                    understanding your customer journey to chatbot design,
                    integration, and optimization—guaranteeing a powerful tool
                    that boosts satisfaction and efficiency.
                  </p>

                  <div className=" mt-3">
                    <BannerButton btnTitle='Request Chatbot Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery & Requirement Analysis:</strong>{" "}
                    Understanding your business goals, audience, and use cases
                    for chatbot integration.
                  </li>
                  <li>
                    <strong>Custom Chatbot Design & Development:</strong>{" "}
                    Creating AI chatbots with NLP capabilities tailored to your
                    brand voice.
                  </li>
                  <li>
                    <strong>Multi-Channel Integration:</strong> Deploying
                    chatbots on your website, Facebook Messenger, WhatsApp, and
                    other platforms.
                  </li>
                  <li>
                    <strong>Testing & Optimization:</strong> Rigorous
                    performance testing and continuous refinement based on user
                    feedback and analytics.
                  </li>
                  <li>
                    <strong>Deployment & Ongoing Support:</strong> Launching the
                    chatbot with monitoring, maintenance, and updates to
                    maximize ROI.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Enterprise-Grade Chatbot Solutions Built for Engagement & Growth
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We collaborate with businesses to create{" "}
              <b>intelligent, conversational chatbots</b> that automate customer
              service, boost engagement, and provide actionable insights. From
              lead generation to support automation, our solutions empower Saudi
              companies to stay ahead in a digital-first world.
            </p>
          </Container>
        </section>

        <section className="pb-5 pt-2">
          <Container>
            <h2 className="fw-bold">
              Ready to Elevate Customer Experience with Chatbot Integration?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Let ASVAYUK Technologies help you leverage the power of chatbots
              to deliver personalized, scalable, and always-on customer support.
              Contact us today to start your chatbot journey and transform your
              customer engagement strategy.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ChatbotIntegration;
