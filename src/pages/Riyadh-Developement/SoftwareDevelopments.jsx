import { Col, Container, Nav, Row, Tab, Image } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/banners-39.webp";
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
import ServicesCard from "../../Components/ServicesPage/ServicesCard";

const services = [
  {
    id: "1",
    title: "Software Consulting Services",
    image: softdev1,
    alt: "Software consulting services in Saudi Arabia",
    content: (
      <>
        Our professional IT and software consulting services in Saudi Arabia
        help you start your journey of strategic decision-making. Our consulting
        services assist in navigating the complex process of evaluating your
        current systems, offering customized technological recommendations
        aligned with your business needs.
      </>
    ),
  },
  {
    id: "2",
    title: "Custom Software Development Services",
    image: softdev2,
    content: (
      <>
        Through meticulous planning and dedicated efforts, we tailor software
        solutions precisely to align with your unique needs. As a leader in
        custom software development Saudi Arabia, our commitment ensures maximum
        effectiveness and seamless technology integration with your customized
        solution.
      </>
    ),
  },
  {
    id: "3",
    title: "Enterprise Software Development Services",
    image: softdev3,
    content: (
      <>
        As a leading software development company in Saudi Arabia, we create and
        deploy integrated software solutions with a strong focus on scalability.
        We create robust bespoke enterprise software solutions that streamline
        operations and improve communication.
      </>
    ),
  },
  {
    id: "4",
    title: "Software Product Development Services",
    image: softdev4,
    content: (
      <>
        Entrust us with the entire lifecycle—design, planning, development,
        testing, and deployment. As a leader in software product development ,
        we ensure your software products are market-ready and exceed industry
        standards.
      </>
    ),
  },
  {
    id: "5",
    title: "Software Integration Services",
    image: softdev5,
    content: (
      <>
        Improve your company’s efficiency with our software integration
        services. We enhance interoperability by integrating diverse software
        components and optimizing your business process foundation.
      </>
    ),
  },
  {
    id: "6",
    title: "Custom CRM Development Services",
    image: softdev6,
    content: (
      <>
        Transform customer engagement with our custom CRM development services .
        We enhance sales automation, contact tracking, and data management to
        strengthen client relationships.
      </>
    ),
  },
  {
    id: "7",
    title: "API Development Services",
    image: softdev7,
    content: (
      <>
        Enable seamless connections between software applications with our API
        development services. We ensure smooth system communication and
        efficient data sharing.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Custom E-commerce Solutions",
    title: "Custom E-commerce Solutions",
    desc: "We build tailored e-commerce websites that align with your business goals, offering intuitive interfaces, smooth navigation, and optimized checkout experiences for increased conversions.",
  },
  {
    img: c12,
    alt: "Multi-Platform Shopping Integration",
    title: "Multi-Platform Shopping Integration",
    desc: "We help your store reach a wider audience by integrating with major marketplaces like Amazon and Noon, and offer seamless omnichannel experiences across desktop and mobile platforms.",
  },
  {
    img: c13,
    alt: "Performance-Optimized Platforms",
    title: "Performance-Optimized Platforms",
    desc: "Our Riyadh-based e-commerce developers ensure your store is blazing fast, SEO-optimized, and secure, with analytics integration to track and enhance performance continuously.",
  },
  {
    img: c11,
    alt: "Custom E-commerce Solutions",
    title: "Custom E-commerce Solutions",
    desc: "We build tailored e-commerce websites that align with your business goals, offering intuitive interfaces, smooth navigation, and optimized checkout experiences for increased conversions.",
  },
  {
    img: c12,
    alt: "Multi-Platform Shopping Integration",
    title: "Multi-Platform Shopping Integration",
    desc: "We help your store reach a wider audience by integrating with major marketplaces like Amazon and Noon, and offer seamless omnichannel experiences across desktop and mobile platforms.",
  },
  {
    img: c13,
    alt: "Performance-Optimized Platforms",
    title: "Performance-Optimized Platforms",
    desc: "Our Riyadh-based e-commerce developers ensure your store is blazing fast, SEO-optimized, and secure, with analytics integration to track and enhance performance continuously.",
  },
];

const techTabs = [
  {
    key: "fpl",
    title: "Frontend Programming Language",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/frontend-programming-language-icon.svg",
    items: [
      {
        name: "CSS",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/css-tech-icon.svg",
      },
      {
        name: "HTML",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/html-tech-icon.svg",
      },
      {
        name: "Javascript",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/javascript-tech-icon.svg",
      },
      {
        name: "Angular",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/angular-tech-icon.svg",
      },
      {
        name: "React",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/react-tech-icon.svg",
      },
      {
        name: "Vue.js",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/vue-js-tech-icon.svg",
      },
      {
        name: "ember",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ember-tech-icon.svg",
      },
      {
        name: "Meteor",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/meteor-tech-icon.svg",
      },
    ],
  },
  {
    key: "bpl",
    title: "Backend Programming Language",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/backend-programming-language-icon.svg",
    items: [
      {
        name: "Python",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/python-tech-icon.svg",
      },
      {
        name: "Node.js",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/nodejs-tech-icon.svg",
      },
      {
        name: ".NET",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/dot-net-tech-icon.svg",
      },
      {
        name: "GO",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/go-tech-icon.svg",
      },
      {
        name: "Java",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/java-tech-icon.svg",
      },
      {
        name: "PHP",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/php-tech-icon.svg",
      },
    ],
  },
  {
    key: "mb",
    title: "Mobile",
    icon: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-icon.svg",
    items: [
      {
        name: "Android",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/android-tech-icon.svg",
      },
      {
        name: "Cordova",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cordova-tech-icon.svg",
      },
      {
        name: "Flutter",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/flutter-tech-icon.svg",
      },
      {
        name: "PWA",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/pwa-tech-icon.svg",
      },
      {
        name: "iOS",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ios-tech-icon.svg",
      },
      {
        name: "Xamarin",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/xamarin-tech-icon.svg",
      },
      {
        name: "React Native",
        img: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/react-tech-icon.svg",
      },
    ],
  },
  // Add other categories: bd, dds etc. as needed.
];

const SoftwareDevelopments = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Software Development Company in Saudi Arabia | ASVAYUK Technologies"
        description="Top software development company in Saudi Arabia offering custom software, CRM, ERP, cloud solutions, and mobile app development services."
        canonical="https://asvayuktech.com/software-development-company-in-saudi-arabia"
      />

      <main>
        <section className="banner-en">
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
                      Software Development Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>Asvayuk Technologies Private Ltd.</strong> is a
                    leading Software Development Company in Saudi Arabia,
                    dedicated to providing innovative digital solutions for
                    businesses across the Kingdom. With a team of expert
                    software developers, we specialize in building custom
                    software applications, enterprise-grade systems, and
                    scalable digital platforms tailored to your unique business
                    needs.
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
                    alt="Software Development Company in Chandigarh"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Container className="my-5">
          <h2 className="left-para mb-4 fw-bold">
            Comprehensive Suite of Custom Software Development Services
          </h2>
          <p className="app__subhead mb-5 fs-5">
            Our custom software development process revolves around a
            hyper-focused approach that prioritizes tailoring user experiences
            and creating highly efficient solutions. With our comprehensive
            suite of software development services in Saudi Arabia, we guarantee
            a transparent and trusted partnership that delivers impactful and
            innovative software solutions.
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
              <h2 className="fw-bold" data-aos="zoom-in-up">
                Our Core Software Development Services
              </h2>
              <p>
                Our custom software development process revolves around a
                hyper-focused approach that prioritizes tailoring user
                experiences and creating highly efficient solutions. With our
                comprehensive suite of software development services in Saudi
                Arabia, we guarantee a transparent and trusted partnership that
                delivers impactful and innovative software solutions.
              </p>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {serviceData.map((servicedata, i) => (
                <Col lg={4} className="pb-4 mb-3" data-aos="zoom-in" key={i}>
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
                    <span className="grdnt_clr">Accelerate Your </span>Success
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>UP TO 75% Development Cost Savings</h3>
                    </li>
                    <li>
                      <h3>50% FASTER Accelerate Time to Market </h3>
                    </li>
                    <li>
                      <h3>30% Development Time Reduced</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 bg-light">
          <Container className="trustedContent-wrapper">
            <h2 className="text-center fw-bold mb-3">
              Technology Stack That Amplifies <br /> Your Software Solution
            </h2>
            <p className="text-center mb-5">
              Using a state-of-the-art technology stack, we are skilled at
              creating innovative and disruptive software solutions. We develop
              top-notch custom software solutions in Saudi Arabia by skillfully
              integrating cutting-edge technologies. Our hand-picked technology
              stack enables us to develop innovative and dynamic solutions that
              guarantee our clients surpass their business goals.
            </p>
            <div className="tabSoftDev">
              <Tab.Container defaultActiveKey="mb">
                <Row className="align-items-center scroll_list p-0">
                  <Col md={5} className="h-100 ">
                    <Nav className="flex-column h-100 p-4">
                      {techTabs.map((tab) => (
                        <Nav.Item key={tab.key} className="navItemsSoftDev">
                          <Nav.Link
                            eventKey={tab.key}
                            className="navLinkSoftDev d-flex align-items-center gap-2"
                          >
                            <Image src={tab.icon} alt={tab.title} width={30} />
                            <span>{tab.title}</span>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col md={7}>
                    <Tab.Content className="p-4 bg-light">
                      {techTabs.map((tab) => (
                        <Tab.Pane eventKey={tab.key} key={tab.key}>
                          <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
                            <Image
                              src={tab.icon}
                              alt={tab.title}
                              width={40}
                              className="headerDevImage"
                            />
                            {tab.title}
                          </h4>
                          <Row className="g-4 align-items-center">
                            {tab.items.map((item, idx) => (
                              <Col key={idx} xs={4} sm={3} md={3}>
                                <div className="text-center">
                                  <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={50}
                                    className="mb-2"
                                  />
                                  <div>{item.name}</div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Container>
        </div>

        <Container className="py-5">
          <div className="stats_wrap">
            <div className="pad_gap">
              <Row className="states_panel text-center">
                <Col md={4} className="mb-4">
                  <div className="digits">
                    <span className="display-5 fw-bold">8+</span>
                    <div className="stats-head">
                      Years of Industry <br /> Experience
                    </div>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="digits">
                    <span className="display-5 fw-bold">3000+</span>
                    <div className="stats-head">
                      Software Products <br /> Delivered
                    </div>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="digits">
                    <span className="display-5 fw-bold">97%</span>
                    <div className="stats-head">Client Retention Rate</div>
                  </div>
                </Col>
              </Row>

              <div className="text-center mt-4">
                <BannerButton
                                                        btnTitle="Consult Our Software Experts"
                                                        blockChainClass="blue_btn"
                                                    />
                 
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default SoftwareDevelopments;
