import { Col, Container, Nav, Row, Tab, Image, Card } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/AI-MachineImage.png";
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
    title: "AI Strategy & Consulting",
    image: softdev1,
    alt: "AI strategy consulting services in Saudi Arabia",
    content: (
      <>
        Our AI experts collaborate with your team to develop comprehensive AI
        strategies, identify opportunities, and drive innovation tailored to
        your business needs.
      </>
    ),
  },
  {
    id: "2",
    title: "Machine Learning Model Development",
    image: softdev2,
    content: (
      <>
        Build and deploy robust machine learning models that automate
        decision-making, improve predictions, and enhance operational efficiency
        across industries.
      </>
    ),
  },
  {
    id: "3",
    title: "Natural Language Processing Solutions",
    image: softdev3,
    content: (
      <>
        Implement NLP technologies such as chatbots, sentiment analysis, and
        automated text processing to transform how you interact with customers
        and analyze data.
      </>
    ),
  },
  {
    id: "4",
    title: "Computer Vision & Image Recognition",
    image: softdev4,
    content: (
      <>
        Develop AI-powered computer vision applications for image and video
        analysis, object detection, facial recognition, and quality inspection.
      </>
    ),
  },
  {
    id: "5",
    title: "AI-powered Automation & RPA",
    image: softdev5,
    content: (
      <>
        Automate repetitive tasks and workflows with AI-driven Robotic Process
        Automation to increase productivity and reduce operational costs.
      </>
    ),
  },
  {
    id: "6",
    title: "AI Integration & API Development",
    image: softdev6,
    content: (
      <>
        Seamlessly integrate AI and machine learning capabilities into your
        existing systems via custom APIs for enhanced functionality and
        real-time insights.
      </>
    ),
  },
  {
    id: "7",
    title: "AI Model Auditing & Optimization",
    image: softdev7,
    content: (
      <>
        Ensure the accuracy, fairness, and performance of your AI models through
        thorough auditing, tuning, and continuous monitoring.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "AI Strategy & Planning",
    title: "AI Strategy & Planning",
    desc: "Craft a tailored AI roadmap that aligns with your organization's objectives to unlock maximum value from artificial intelligence investments.",
  },
  {
    img: c12,
    alt: "Machine Learning Model Development",
    title: "Advanced Machine Learning Models",
    desc: "Design and implement scalable ML models that drive actionable insights and support intelligent automation across business processes.",
  },
  {
    img: c13,
    alt: "NLP & Conversational AI",
    title: "Natural Language Processing & Conversational AI",
    desc: "Leverage NLP to build interactive virtual assistants and enhance customer experience through sophisticated language understanding.",
  },
  {
    img: c11,
    alt: "Computer Vision Applications",
    title: "AI-powered Computer Vision Solutions",
    desc: "Develop visual recognition systems for automated inspection, security, and analytics with cutting-edge AI technologies.",
  },
  {
    img: c12,
    alt: "AI Automation & RPA",
    title: "Intelligent Automation & RPA",
    desc: "Deploy AI-enabled automation solutions that streamline operations and optimize resource utilization effectively.",
  },
  {
    img: c13,
    alt: "AI Model Evaluation & Tuning",
    title: "Comprehensive AI Model Auditing",
    desc: "Maintain model integrity and compliance through continuous evaluation, bias detection, and optimization services.",
  },
];

const MachineLearningSolutions = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="AI & Machine Learning Solutions in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies delivers innovative AI and Machine Learning solutions in Saudi Arabia, including model development, NLP, computer vision, and automation."
        canonical="https://asvayuktech.com/ai-machine-learning-solutions-in-saudi-arabia"
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
                      AI & Machine Learning Solutions Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> empowers businesses
                    with cutting-edge AI and machine learning innovations. From
                    custom model development to intelligent automation, we help
                    you transform data into actionable insights.
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
                    alt="AI and Machine Learning Solutions Company in Saudi Arabia"
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
                Why Choose Our AI & Machine Learning Services in Chandigarh?
              </h1>
              <p>
                At Asvayuk Technologies Private Ltd., we deliver cutting-edge AI
                and Machine Learning solutions designed to empower your business
                with intelligent automation and data-driven decision making.
                Here’s why we stand out:
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
                      alt="AI and Machine Learning Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Custom AI Models Tailored to Your Business Needs
                    </h6>
                    <p className="mb-0 text-muted">
                      We develop AI and ML models specific to your industry
                      challenges, enabling smarter automation, enhanced customer
                      insights, and optimized workflows.
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
                      alt="Machine Learning Solutions Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      End-to-End AI Integration and Deployment
                    </h6>
                    <p className="mb-0 text-muted">
                      From data preprocessing and model training to deployment
                      and monitoring, we provide comprehensive ML lifecycle
                      management to maximize ROI.
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
                      alt="AI Consultancy Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Personalized AI Strategies for Business Growth
                    </h6>
                    <p className="mb-0 text-muted">
                      We analyze your business data and processes to recommend
                      AI-driven strategies that improve efficiency, reduce
                      costs, and unlock new revenue streams.
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
                      alt="AI Experts Chandigarh"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col xs={9} sm={10}>
                    <h6 className="fw-bold mb-2">
                      Experienced AI and Machine Learning Specialists
                    </h6>
                    <p className="mb-0 text-muted">
                      Our skilled data scientists and ML engineers use the
                      latest tools and frameworks to deliver reliable, scalable,
                      and ethical AI solutions.
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
            AI & Machine Learning Solutions Tailored for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            We provide state-of-the-art AI and machine learning services to
            organizations across Saudi Arabia, enabling smarter operations,
            improved decision-making, and enhanced customer engagement.
            Collaborate with ASVAYUK Technologies to lead your digital
            transformation journey.
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

        {/* Services */}
        <section className="performance_card">
          <Container>
            <div className="trustedContent-wrapper pb-2 text-center">
              <h2 className="fw-bold">
                Our Core AI & Machine Learning Development Services
              </h2>
              <p>
                At ASVAYUK Technologies, we harness the power of AI and Machine
                Learning to build intelligent, data-driven software solutions.
                Our tailored approach focuses on creating adaptive systems that
                enhance decision-making, automate complex processes, and deliver
                predictive insights. Serving clients across Saudi Arabia, we
                ensure transparent collaboration and deliver cutting-edge AI
                solutions that drive real business value.
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
                    <span className="grdnt_clr">Empower Your </span>Business
                    with AI
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>Reduce Operational Costs by up to 75%</h3>
                    </li>
                    <li>
                      <h3>Accelerate AI-Driven Solutions to Market by 50%</h3>
                    </li>
                    <li>
                      <h3>
                        Cut Development Cycles by 30% with Smart Automation
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
                THE IMPORTANCE OF AI & MACHINE LEARNING FOR YOUR BUSINESS{" "}
                <span className="text-uppercase" style={{ color: "#2cbe9a" }}>
                  IN PANCHKULA AND CHANDIGARH
                </span>
              </h1>
              <p className="powered_php pt-3">
                AI and Machine Learning are revolutionizing how businesses
                engage customers, optimize operations, and drive innovation in
                today’s digital world.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="AI Solutions Panchkula">
                      Drives smarter decision-making through data insights
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Custom ML Models Chandigarh">
                      Automates routine tasks, boosting productivity
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Predictive Analytics Panchkula">
                      Enhances customer personalization and engagement
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="development_links">
                  <li>
                    <a href="#" title="AI-Powered Solutions Panchkula">
                      Improves operational efficiency and reduces costs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Machine Learning Services Chandigarh">
                      Provides competitive advantage through innovation and
                      agility
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
                  <h3 className="fw-bold">
                    Our AI & Machine Learning Development Process
                  </h3>
                  <p>
                    At ASVAYUK Technologies, we deliver tailored
                    <strong> AI and ML solutions</strong> that transform your
                    business operations across Riyadh and Saudi Arabia. Our
                    proven process ensures AI models align with your strategic
                    objectives, scale with your data, and continuously improve
                    with your business growth.
                  </p>
                  <p>
                    We develop intelligent systems that automate
                    decision-making, uncover hidden insights, and enable
                    predictive analytics, empowering your teams with actionable
                    intelligence and advanced technology customized for your
                    unique needs.
                  </p>

                  <div className=" mt-3">
                     <BannerButton btnTitle='Free AI Consultation' />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                <ol>
                  <li>
                    <strong>Discovery and Data Assessment:</strong> We begin by
                    understanding your business goals and analyzing your data
                    sources to create a clear AI roadmap.
                  </li>
                  <li>
                    <strong>Model Design and Development:</strong> Our experts
                    design custom ML models and AI algorithms tailored to your
                    unique challenges and data environment.
                  </li>
                  <li>
                    <strong>Testing and Validation:</strong> Rigorous evaluation
                    ensures your AI models deliver accuracy, robustness, and
                    reliable performance.
                  </li>
                  <li>
                    <strong>Deployment and Integration:</strong> We seamlessly
                    deploy AI systems within your existing infrastructure and
                    provide training for your teams.
                  </li>
                  <li>
                    <strong>Continuous Monitoring and Improvement:</strong>{" "}
                    Ongoing support ensures your AI evolves with new data,
                    improving over time to meet changing business needs.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              AI-Driven Enterprise Solutions with a Client-Centric Approach
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              We build <b>long-term AI partnerships</b> by delivering solutions
              that deeply align with your business vision. Our client-first
              mindset ensures transparent communication, regular updates, and
              active collaboration, so your satisfaction is guaranteed at every
              step of the AI journey.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Ready to Transform Your Business with AI?
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Don’t settle for off-the-shelf software. Partner with ASVAYUK
              Technologies for bespoke AI and machine learning solutions
              designed to unlock new opportunities, optimize operations, and
              propel scalable growth. Contact us today to start your AI
              transformation journey.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default MachineLearningSolutions;
