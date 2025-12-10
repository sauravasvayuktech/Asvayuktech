import { Col, Container, Nav, Row, Tab, Image } from "react-bootstrap";
import Meta_Component from "../../Components/Meta_Component/Meta_Component";
import banners_39 from "../../Images/enterPriseImage.png";
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
// import { Link } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";

const services = [
    {
        id: "1",
        title: "Enterprise Software Consulting",
        image: softdev1,
        alt: "Enterprise software consulting in Saudi Arabia",
        content: (
            <>
                Our expert enterprise software consulting services in Saudi
                Arabia guide your strategic technology decisions. We evaluate
                your existing systems and recommend tailored solutions that
                align with your enterprise goals.
            </>
        ),
    },
    {
        id: "2",
        title: "Tailored Enterprise Software Solutions",
        image: softdev2,
        content: (
            <>
                We design and develop custom enterprise software solutions that
                precisely fit your business requirements. Our dedicated approach
                guarantees seamless integration and maximizes operational
                efficiency.
            </>
        ),
    },
    {
        id: "3",
        title: "Scalable Enterprise Software Development",
        image: softdev3,
        content: (
            <>
                We build scalable and robust enterprise software tailored to
                your organization’s growth. Our solutions optimize workflows and
                foster improved communication across your business.
            </>
        ),
    },
    {
        id: "4",
        title: "Enterprise Software Product Development",
        image: softdev4,
        content: (
            <>
                From concept to deployment, we manage the entire lifecycle of
                enterprise software products, ensuring market-ready solutions
                that meet and exceed industry standards.
            </>
        ),
    },
    {
        id: "5",
        title: "Enterprise Software Integration",
        image: softdev5,
        content: (
            <>
                Enhance your enterprise’s efficiency with our software
                integration services, unifying diverse systems and streamlining
                your business processes for better interoperability.
            </>
        ),
    },
    {
        id: "6",
        title: "Custom CRM Solutions for Enterprises",
        image: softdev6,
        content: (
            <>
                Boost enterprise customer management with our tailored CRM
                solutions, improving sales automation, client tracking, and data
                management.
            </>
        ),
    },
    {
        id: "7",
        title: "API Development for Enterprise Systems",
        image: softdev7,
        content: (
            <>
                Facilitate seamless integration across enterprise applications
                with our API development services, ensuring efficient
                communication and data exchange.
            </>
        ),
    },
];

const serviceData = [
    {
        img: c11,
        alt: "Custom E-commerce Solutions",
        title: "Bespoke E-commerce Development",
        desc: "We craft personalized e-commerce platforms designed to meet your unique business objectives, delivering user-friendly interfaces, seamless navigation, and optimized checkout flows to boost conversions.",
    },
    {
        img: c12,
        alt: "Multi-Platform Shopping Integration",
        title: "Omnichannel Marketplace Integration",
        desc: "Expand your reach by connecting your store with leading marketplaces like Amazon and Noon, providing consistent and smooth shopping experiences across all devices.",
    },
    {
        img: c13,
        alt: "Performance-Optimized Platforms",
        title: "High-Performance E-commerce Solutions",
        desc: "Our Riyadh-based experts ensure your online store is fast, secure, and SEO-friendly, with integrated analytics for continuous performance monitoring and improvements.",
    },
    {
        img: c11,
        alt: "Custom E-commerce Solutions",
        title: "Tailored E-commerce Website Design",
        desc: "We develop customized e-commerce sites aligned with your brand’s vision, focusing on engaging interfaces, easy navigation, and checkout optimization to drive sales growth.",
    },
    {
        img: c12,
        alt: "Multi-Platform Shopping Integration",
        title: "Cross-Channel Shopping Solutions",
        desc: "Enable your customers to shop effortlessly across multiple platforms by integrating your store with top marketplaces and ensuring a unified experience on all devices.",
    },
    {
        img: c13,
        alt: "Performance-Optimized Platforms",
        title: "Optimized and Secure E-commerce Platforms",
        desc: "Our team delivers fast, secure, and SEO-optimized e-commerce platforms, enhanced with real-time analytics to help you track and boost your store’s performance continuously.",
    },
];

const SoftwareDevelopments = () => {
    const [activeKey, setActiveKey] = useState("1");

    return (
        <>
            <Meta_Component
                title="Enterprise Software Solutions in Saudi Arabia | ASVAYUK Technologies"
                description="ASVAYUK Technologies provides scalable enterprise software solutions in Saudi Arabia, including ERP, CRM, SCM, HRM, and cloud-based business platforms."
                canonical="https://asvayuktech.com/enterprise-solution-company-in-saudi-arabia"
            />

            <main>
                <section className="banner-en">
                    <Container>
                        <Row className="align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_textInfo-en">
                                    <h1
                                        style={{
                                            fontSize: "40px",
                                            lineHeight: "1.1",
                                        }}
                                    >
                                        <a
                                            href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Enterprise Solutions Company in
                                            Saudi Arabia
                                        </a>
                                    </h1>
                                    <p className="py-3">
                                        <strong>ASVAYUK Technologies</strong> is
                                        a trusted enterprise solutions provider
                                        in Saudi Arabia, empowering
                                        organizations with scalable, secure, and
                                        cutting-edge software systems. From ERP
                                        and CRM to supply chain, HR, and finance
                                        platforms—our enterprise-grade solutions
                                        are engineered to optimize operations,
                                        boost productivity, and accelerate
                                        digital transformation in large-scale
                                        businesses and government entities
                                        across the Kingdom.
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
                        End-to-End Enterprise Software Solutions in Saudi Arabia
                    </h2>
                    <p className="app__subhead mb-5 fs-5">
                        We deliver tailored enterprise software solutions
                        through a focused and efficient development process. Our
                        comprehensive approach ensures a trusted partnership,
                        providing innovative, user-centric applications that
                        drive real business results across Saudi Arabia.
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
                                            <Nav.Item
                                                key={service.id}
                                                className="navItemsSoftDev"
                                            >
                                                <Nav.Link
                                                    eventKey={service.id}
                                                    className={`tab-link navLinkSoftDev ${
                                                        activeKey === service.id
                                                            ? "current"
                                                            : ""
                                                    }`}
                                                >
                                                    <span>
                                                        <span className="scroll_list_num">{`${String(
                                                            index + 1
                                                        ).padStart(
                                                            2,
                                                            "0"
                                                        )}.`}</span>{" "}
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
                                            <Tab.Pane
                                                key={service.id}
                                                eventKey={service.id}
                                            >
                                                <div className="tab-accordion-header tab-accordion-headerDev mb-3">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.alt}
                                                        fluid
                                                    />
                                                    <h4 className="serv_card_head mt-3 fw-semibold">
                                                        {service.title}
                                                    </h4>
                                                </div>
                                                <div className="tab-accordion-body">
                                                    <p className="card_para">
                                                        {service.content}
                                                    </p>
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
                                Our Core Software Development Services
                            </h2>
                            <p>
                                Our custom software development process revolves
                                around a hyper-focused approach that prioritizes
                                tailoring user experiences and creating highly
                                efficient solutions. With our comprehensive
                                suite of software development services in Saudi
                                Arabia, we guarantee a transparent and trusted
                                partnership that delivers impactful and
                                innovative software solutions.
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
                                        <span className="grdnt_clr">
                                            Boost Your{" "}
                                        </span>
                                        Business Growth
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="accelerate_otr pb-5">
                                    <ul className="accelerate-lst list-unstyled">
                                        <li>
                                            <h3>
                                                Save Up to 75% on Development
                                                Costs
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                Accelerate Your Time to Market
                                                by 50%
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                Reduce Development Time by 30%
                                            </h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="low-code-sec-tool">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-sm-12 mb-3 p-3">
                                <div className="tool-heading">
                                    <h3 className="fw-bold">
                                        Our Enterprise Software Development
                                        Process
                                    </h3>
                                    <p>
                                        At ASVAYUK Technologies, we specialize
                                        in delivering custom
                                        <strong>
                                            {" "}
                                            enterprise software solutions
                                        </strong>{" "}
                                        designed to transform your business
                                        operations in Riyadh and across Saudi
                                        Arabia. Our process ensures your
                                        software is aligned with your strategic
                                        goals, highly efficient, and scalable to
                                        support your future growth.
                                    </p>
                                    <p>
                                        We build intelligent and robust
                                        enterprise systems that streamline
                                        workflows, improve collaboration, and
                                        empower your team with cutting-edge
                                        technology tailored specifically to your
                                        organization’s unique requirements.
                                    </p>

                                    <div className="mt-3">
                                        <BannerButton btnTitle="Free Consultation" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 text-start mb-3 p-3">
                                <ol>
                                    <li>
                                        <strong>
                                            Discovery and Requirement Analysis:
                                        </strong>{" "}
                                        We start by understanding your business
                                        objectives, challenges, and workflows
                                        through detailed consultations to build
                                        a tailored project roadmap.
                                    </li>
                                    <li>
                                        <strong>Design and Development:</strong>{" "}
                                        Our team crafts user-friendly and
                                        scalable enterprise applications that
                                        optimize your internal processes and
                                        enhance productivity.
                                    </li>
                                    <li>
                                        <strong>
                                            Testing and Quality Assurance:
                                        </strong>{" "}
                                        We rigorously test the software to
                                        ensure performance, security, and
                                        reliability meet your standards.
                                    </li>
                                    <li>
                                        <strong>
                                            Deployment and Training:
                                        </strong>{" "}
                                        We implement the solution seamlessly and
                                        provide comprehensive training so your
                                        team can maximize its potential.
                                    </li>
                                    <li>
                                        <strong>
                                            Ongoing Support and Maintenance:
                                        </strong>{" "}
                                        Continuous support guarantees your
                                        software evolves with your business and
                                        stays updated with the latest
                                        technologies.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-5">
                    <Container>
                        <h2 className="fw-bold">
                            Enterprise Solutions with a Client-First Mindset
                        </h2>
                        <p
                            className="pt-3"
                            style={{ fontSize: "20px", lineHeight: "1.8rem" }}
                        >
                            We believe in building <b>long-term partnerships</b>{" "}
                            by delivering enterprise solutions that truly align
                            with your business vision. Our client-centric
                            approach ensures your goals remain{" "}
                            <b>our highest priority</b> throughout every phase.
                            We maintain transparent communication, provide
                            regular progress updates, and involve you closely to
                            guarantee your satisfaction with every milestone.
                        </p>
                    </Container>
                </section>

                <section className="py-5">
                    <Container>
                        <h2 className="fw-bold">
                            Ready to Elevate Your Enterprise?
                        </h2>
                        <p
                            className="pt-3"
                            style={{ fontSize: "20px", lineHeight: "1.8rem" }}
                        >
                            Don’t compromise with generic software. Partner with
                            Asvayuk Technologies for custom enterprise solutions
                            tailored to your organization’s unique challenges.
                            Contact our experts today to transform your
                            processes, boost efficiency, and drive scalable
                            growth.
                        </p>
                    </Container>
                </section>
            </main>
        </>
    );
};

export default SoftwareDevelopments;
