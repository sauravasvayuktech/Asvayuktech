import { Col, Container, Nav, Row, Tab, Image } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/blockchainImage.png";
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
    title: "Blockchain Consulting & Strategy",
    image: softdev1,
    alt: "Blockchain strategy consulting services in Saudi Arabia",
    content: (
      <>
        Our experts help you explore blockchain opportunities, design
        decentralized solutions, and define strategies aligned with your fintech
        business goals for competitive advantage.
      </>
    ),
  },
  {
    id: "2",
    title: "Smart Contract Development",
    image: softdev2,
    content: (
      <>
        Build secure, transparent, and automated smart contracts on Ethereum,
        Binance Smart Chain, or other leading platforms to streamline financial
        transactions and agreements.
      </>
    ),
  },
  {
    id: "3",
    title: "Decentralized Finance (DeFi) Solutions",
    image: softdev3,
    content: (
      <>
        Create innovative DeFi products like lending platforms, decentralized
        exchanges, and yield farming applications that empower users globally.
      </>
    ),
  },
  {
    id: "4",
    title: "Cryptocurrency Wallet Development",
    image: softdev4,
    content: (
      <>
        Develop secure multi-currency wallets with advanced features like
        multi-signature support, biometric authentication, and seamless user
        experience.
      </>
    ),
  },
  {
    id: "5",
    title: "Tokenization & ICO/IDO Launch",
    image: softdev5,
    content: (
      <>
        Tokenize assets and launch your ICO/IDO with our end-to-end token
        development and marketing services, ensuring regulatory compliance and
        investor trust.
      </>
    ),
  },
  {
    id: "6",
    title: "Blockchain Integration & API Development",
    image: softdev6,
    content: (
      <>
        Integrate blockchain technology into your existing fintech platforms and
        build robust APIs for seamless data sharing and process automation.
      </>
    ),
  },
  {
    id: "7",
    title: "Security Audits & Compliance",
    image: softdev7,
    content: (
      <>
        Protect your blockchain applications with comprehensive security audits,
        vulnerability assessments, and ensure compliance with financial
        regulations.
      </>
    ),
  },
];

const serviceData = [
  {
    img: c11,
    alt: "Blockchain Strategy & Planning",
    title: "Blockchain Strategy & Planning",
    desc: "Develop a strategic roadmap for blockchain adoption that aligns with your fintech vision and business objectives.",
  },
  {
    img: c12,
    alt: "Smart Contract Development",
    title: "Robust Smart Contract Development",
    desc: "Design and deploy reliable smart contracts that automate financial processes securely and transparently.",
  },
  {
    img: c13,
    alt: "DeFi Application Development",
    title: "Decentralized Finance (DeFi) Platforms",
    desc: "Build scalable and user-friendly DeFi applications that provide innovative financial services without intermediaries.",
  },
  {
    img: c11,
    alt: "Cryptocurrency Wallet Solutions",
    title: "Secure Cryptocurrency Wallets",
    desc: "Create easy-to-use wallets supporting multiple cryptocurrencies with top-notch security features.",
  },
  {
    img: c12,
    alt: "Tokenization & ICO Launch",
    title: "Tokenization & ICO/IDO Services",
    desc: "Launch compliant and successful token offerings with end-to-end support, from development to marketing.",
  },
  {
    img: c13,
    alt: "Blockchain Security Audits",
    title: "Comprehensive Security & Compliance",
    desc: "Ensure your blockchain applications are secure and meet all regulatory standards with our audit services.",
  },
];

const trustedStats = [
  {
    number: "1",
    label: "Enhance transparency and trust through immutable ledgers.",
  },
  {
    number: "2",
    label: "Automate complex financial agreements with smart contracts.",
  },
  {
    number: "3",
    label: "Expand access to financial services globally via DeFi.",
  },
  {
    number: "4",
    label:
      "Secure user assets with advanced wallet and tokenization technologies.",
  },
];

const BlockchainFintechServices = () => {
  const [activeKey, setActiveKey] = useState("1");

  return (
    <>
      <Meta_Component
        title="Blockchain & Fintech Development Services in Saudi Arabia | ASVAYUK Technologies"
        description="ASVAYUK Technologies offers expert Blockchain and Fintech development services in Saudi Arabia, delivering smart contracts, DeFi solutions, cryptocurrency wallets, and secure tokenization."
        canonical="https://asvayuktech.com/blockchain-fintech-development-services-in-saudi-arabia"
      />

      <main>
        {/* Banner Section */}
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
                      Blockchain & Fintech Development Company in Saudi Arabia
                    </a>
                  </h1>
                  <p className="py-3">
                    <strong>ASVAYUK Technologies</strong> empowers fintech
                    businesses with blockchain innovation. From smart contract
                    development to DeFi platforms, we help you build secure,
                    transparent, and efficient financial solutions.
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
                    alt="Blockchain and Fintech Development Company in Saudi Arabia"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* Trusted Section */}
        <section className="trusted-wrapper">
          <Container>
            <div className="trustedContent-wrapper">
              <h2 className="mb-4">
                Why Choose Blockchain & Fintech
                <br />
                Solutions for Your Business?
              </h2>
              <p>
                Blockchain technology combined with fintech innovations
                revolutionizes the way financial services operate by providing
                trustless, automated, and secure systems. With ASVAYUK
                Technologies, you can:
              </p>

              <Row className="trustedContent-Row">
                {trustedStats.map((item, idx) => (
                  <Col className="mb-3" lg={3} key={idx}>
                    <div className="trustedDiv-wrapper">
                      <div className="trustedDiv-first">
                        <span>{item.number}</span>
                      </div>
                      <div className="trustedDiv-second">
                        <h5>{item.label}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

        {/* Intro Text Section */}
        <Container className="my-5">
          <h1 className="mb-4 fw-bold">
            Blockchain & Fintech Solutions Built for Saudi Businesses
          </h1>
          <p className="app__subhead mb-5 fs-5">
            We deliver cutting-edge blockchain and fintech development services
            that help companies across Saudi Arabia digitize financial
            operations, increase transparency, and create new revenue streams.
            Partner with ASVAYUK Technologies to unlock the future of finance.
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
              <h2 className="fw-bold">Blockchain & Fintech Solutions</h2>
              <p>
                At ASVAYUK Technologies, we specialize in pioneering blockchain
                and fintech innovations that revolutionize financial services in
                Saudi Arabia. Our solutions enable secure, transparent, and
                efficient transactions that empower businesses and customers
                alike to thrive in the digital economy.
              </p>
            </div>
            <Row className="performance_card2_inner-sec mt-5 justify-content-center">
              {serviceData.map((service, i) => (
                <Col lg={4} className="pb-4 mb-3" key={i}>
                  <ServicesCard
                    ServiceCardImg={service.img}
                    altText={service.alt}
                    cardHeading={service.title}
                    cardParaGraph={service.desc}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          className="accelerate-bx bg_new_bx padding_coman"
          style={{
            background: `radial-gradient(
                circle,
                rgba(32, 150, 120, 1) -300%,
                rgba(0, 0, 0, 1) 100%
                )`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="new_font_content new_font_white new_font_center">
                  <h1 className="fw-bold text-white text-center pb-5">
                    <span className="grdnt_clr">Accelerate Your</span>{" "}
                    Blockchain & Fintech Innovation
                  </h1>
                </div>
              </div>
              <div className="col-md-12">
                <div className="accelerate_otr pb-5">
                  <ul className="accelerate-lst list-unstyled">
                    <li>
                      <h3>
                        Enhance Security with Decentralized Blockchain
                        Technology
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Streamline Payments and Transactions with Smart
                        Contracts
                      </h3>
                    </li>
                    <li>
                      <h3>
                        Drive Financial Inclusion Through Innovative Fintech
                        Solutions
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <Container>
            <h2 className="fw-bold">
              Customized Fintech & Blockchain Solutions That Transform
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              ASVAYUK Technologies partners with you to create{" "}
              <strong>tailored fintech and blockchain applications</strong>
              designed to align perfectly with your financial services goals. We
              prioritize transparent collaboration and continuous support to
              ensure your business thrives in the evolving digital landscape.
            </p>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <h2 className="fw-bold">
              Begin Your Blockchain & Fintech Journey Today
            </h2>
            <p
              className="pt-3"
              style={{ fontSize: "20px", lineHeight: "1.8rem" }}
            >
              Don’t let traditional systems limit your growth. Partner with
              ASVAYUK Technologies to harness cutting-edge blockchain and
              fintech solutions that enhance security, boost efficiency, and
              fuel innovation. Contact us now to turn your financial vision into
              a future-ready reality.
            </p>
          </Container>
        </section>
      </main>
    </>
  );
};

export default BlockchainFintechServices;
