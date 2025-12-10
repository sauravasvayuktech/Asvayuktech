// import "./Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Images/logo.webp";

// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { Accordion, Col, Row, Tab } from "react-bootstrap";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCall, IoClose } from "react-icons/io5";
import { useState } from "react";
// import { useLanguage } from "../../LanguageContext";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    // Function to close mega menu on link click
    const handleMegaMenuLinkClick = () => {
        setIsMegaMenuOpen(false);
    };
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleLanguageChange = (lang) => {
    //   const dir = lang === 'ar' ? 'rtl' : 'ltr';
    //   document.documentElement.setAttribute('dir', dir);
    //   localStorage.setItem('direction', dir);
    //   console.log('Set dir to:', dir);
    // };

    // useEffect(() => {
    //   const addGoogleTranslateScript = () => {
    //     if (window.google && window.google.translate) {
    //       window.googleTranslateElementInit();
    //       return;
    //     }

    //     window.googleTranslateElementInit = () => {
    //       new window.google.translate.TranslateElement(
    //         {
    //           pageLanguage: 'en',
    //           includedLanguages: 'en,ar',
    //           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    //         },
    //         'google_translate_element'
    //       );
    //     };

    //     const script = document.createElement('script');
    //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    //     script.async = true;
    //     document.body.appendChild(script);
    //   };

    //   // Defer script loading until browser is idle
    //   if ('requestIdleCallback' in window) {
    //     requestIdleCallback(addGoogleTranslateScript);
    //   } else {
    //     setTimeout(addGoogleTranslateScript, 3000); // Fallback for older browsers
    //   }

    //   // Observe changes to <html lang="...">
    //   const observer = new MutationObserver(() => {
    //     const htmlLang = document.documentElement.lang;
    //     changeLanguage(htmlLang);
    //   });

    //   observer.observe(document.documentElement, {
    //     attributes: true,
    //     attributeFilter: ['lang'],
    //   });

    //   return () => {
    //     observer.disconnect();
    //   };
    // }, []);

    // const { changeLanguage } = useLanguage(); // use inside the component
    // const { direction } = useLanguage();

    // useEffect(() => {
    //   if (direction === "rtl") {
    //     import("../../App.css");
    //   } else {
    //     import("../../AppRTL.css");
    //   }

    //   // Optionally set <html dir="">
    //   document.documentElement.setAttribute("dir", direction);
    // }, [direction]);
    return (
        <>
            <>
                <Navbar expand="lg" className="header">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={Logo} alt="Logo" className="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="menu-list"
                        >
                            <Nav className="align-items-center">
                                <Nav.Link as={Link} to="/about-us">
                                    About Us
                                </Nav.Link>

                                {/* Dropdown Menu with hover functionality */}
                                <Nav.Link
                                    as={Link}
                                    to="#"
                                    className="dropdownMenu"
                                    onMouseEnter={() => setIsMegaMenuOpen(true)} // Open on hover
                                    onMouseLeave={() =>
                                        setIsMegaMenuOpen(false)
                                    } // Close on mouse leave
                                >
                                    Our Services <FaAngleDown />
                                    {isMegaMenuOpen && (
                                        <div className="megaMenu d-flex justify-content-between">
                                            <Tab.Container
                                                id="left-tabs-example"
                                                defaultActiveKey="technology"
                                            >
                                                <div className="side-tab-list">
                                                    <Row>
                                                        <Nav
                                                            variant="pills"
                                                            className="flex-column"
                                                        >
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="technology">
                                                                    <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                                                        <span>
                                                                            Technology
                                                                        </span>
                                                                        <FaAngleRight />
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="marketing">
                                                                    <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                                                        <span>
                                                                            Marketing
                                                                        </span>
                                                                        <FaAngleRight />
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="design">
                                                                    <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                                                        <span>
                                                                            Design
                                                                        </span>
                                                                        <FaAngleRight />
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="products">
                                                                    <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                                                        <span>
                                                                            Products
                                                                        </span>
                                                                        <FaAngleRight />
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                <Nav.Link eventKey="developers">
                                                                    <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                                                        <span>
                                                                            Developers
                                                                        </span>
                                                                        <FaAngleRight />
                                                                    </div>
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        </Nav>
                                                    </Row>
                                                </div>
                                                <div className="submenu-list px-5 py-5 mx-3">
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="technology">
                                                            <Row>
                                                                <h5 className="pb-3 fw-semibold">
                                                                    Technology
                                                                </h5>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/web-portal-development-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Enterprise
                                                                            Portal
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/lowcode-nocode-app"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            lowCode/noCode-app
                                                                        </Link>
                                                                        <Link
                                                                            to="/blockchain-web-development-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Blockchain
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/saas-app-development-company-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Saas
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/laravel-development-company-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Laravel
                                                                            Development
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/mobile-app-development-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Mobile
                                                                            App
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/woocommerce-development-services-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            WooCommerce
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/best-magento-developers-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Magento
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/shopify-development"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Shopify
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/ar-vr-development"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            AR/VR
                                                                            Development
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/website-designing-company-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Website
                                                                            Designing
                                                                        </Link>
                                                                        <Link
                                                                            to="/ecommerce-website-designing-company-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            E-commerce
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/react-native-developers-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            React
                                                                            Native
                                                                            Development
                                                                        </Link>
                                                                        <Link
                                                                            to="/software-development-company-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Software
                                                                            Development
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                {/* More columns... */}
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="marketing">
                                                            <Row>
                                                                <h5 className="pb-3 fw-semibold">
                                                                    Marketing
                                                                </h5>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/digital-marketing-services-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Performance
                                                                            Marketing
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/social-media-marketing-agency-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Social
                                                                            Media
                                                                            Marketing
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/best-seo-services-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Search
                                                                            Engine
                                                                            Optimization
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="design">
                                                            <Row>
                                                                <h5 className="pb-3 fw-semibold">
                                                                    Design
                                                                </h5>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/best-ui-ux-designers-in-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            UI
                                                                            UX
                                                                            Design
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link to="#"></Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link to="#"></Link>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="products">
                                                            <Row>
                                                                <h5 className="pb-3 fw-semibold">
                                                                    Products
                                                                </h5>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/ai-chatbot-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            AI
                                                                            Chat
                                                                            Bot
                                                                        </Link>
                                                                        <Link
                                                                            to="/crypto-wallet-solutions-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Crypto
                                                                            Wallet
                                                                        </Link>
                                                                        <Link
                                                                            to="/24-games-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Game
                                                                            (24
                                                                            Game)
                                                                        </Link>
                                                                        <Link
                                                                            to="/crypto-exchange-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Crypto
                                                                            Exchange
                                                                        </Link>
                                                                        <Link
                                                                            to="/layer1-layer2-blockchain-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Layer
                                                                            1/Layer
                                                                            2
                                                                            BlockChain
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/crm-erp"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            CRM/ERP
                                                                        </Link>
                                                                        <Link
                                                                            to="/trading-bot-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Trading
                                                                            Bot
                                                                        </Link>
                                                                        <Link
                                                                            to="/mlm-software-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            MLM
                                                                            Software
                                                                        </Link>
                                                                        <Link
                                                                            to="/school-management-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            School
                                                                            Management
                                                                        </Link>
                                                                        <Link
                                                                            to="/hospital-management-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Hospital
                                                                            Management
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/dap-dao-chandigarh-panchkula"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            DAP/DAO
                                                                        </Link>
                                                                        <Link
                                                                            to="/job-portal-solutions"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Job
                                                                            Portal
                                                                        </Link>
                                                                        <Link
                                                                            to="/uber-ola-clone-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Uber/Ola
                                                                            Clone
                                                                        </Link>
                                                                        <Link
                                                                            to="/zomato-urbanup-clone-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Zomato/Urbanup
                                                                            Clone
                                                                        </Link>
                                                                        <Link
                                                                            to="/multi-vendor-ecommerce-panchkula-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Multivendor
                                                                            Ecommerce
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="developers">
                                                            <Row>
                                                                <h5 className="pb-3 fw-semibold">
                                                                    Developers
                                                                </h5>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/best-crypto-exchange-developer-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Best
                                                                            Crypto
                                                                            Developers
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/best-blockchain-developer-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Best
                                                                            Blockchain
                                                                            Developers
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                                                        <Link
                                                                            to="/best-mlm-software-developer-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Best
                                                                            MLM
                                                                            Developers
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-4">
                                                                        <Link
                                                                            to="/best-shopify-developer-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Best
                                                                            Shopify
                                                                            Developers
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                                <Col lg={4}>
                                                                    <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-3">
                                                                        <Link
                                                                            to="/best-smart-contract-developer-chandigarh"
                                                                            onClick={
                                                                                handleMegaMenuLinkClick
                                                                            }
                                                                        >
                                                                            Smart
                                                                            Contract
                                                                            Developers
                                                                        </Link>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </div>
                                            </Tab.Container>
                                        </div>
                                    )}
                                </Nav.Link>

                                <Nav.Link as={Link} to="/blog">
                                    Blog
                                </Nav.Link>
                                <Nav.Link as={Link} to="/case-studies">
                                    Case Studies
                                </Nav.Link>
                                <Nav.Link as={Link} to="/contact-us">
                                    Contact Us
                                </Nav.Link>

                                {/* <DropdownButton
                  as={ButtonGroup}
                  variant="secondary"
                  title="Language"
                  className="h-auto nav-link"
                >
                  <Dropdown.Item onClick={() => handleLanguageChange('en')}>
                    English
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange('ar')}>
                    Arabic
                  </Dropdown.Item>
                </DropdownButton> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <section className="mobile-navbar border-bottom py-2">
                    <Container>
                        <div className="d-flex justify-content-between align-items-center">
                            <Navbar.Brand as={Link} to="/">
                                <img src={Logo} alt="Logo" className="logo" />
                            </Navbar.Brand>
                            <div className="d-flex gap-2 align-items-center">
                                <a
                                    href="tel:+91 09876475990"
                                    aria-label="Call Now for Consultation"
                                >
                                    <div className="content">
                                        <div className="pulse">
                                            <IoCall />
                                        </div>
                                    </div>
                                </a>
                                <div
                                    className="toggle-icon"
                                    onClick={toggleMenu}
                                >
                                    <HiOutlineBars3 />
                                </div>
                            </div>
                        </div>
                        {isMobileMenuOpen && (
                            <div className="mobile-menu-list py-3 px-4">
                                <div className="text-end">
                                    <div
                                        className="close-menuList"
                                        onClick={toggleMenu}
                                    >
                                        <IoClose />
                                    </div>
                                </div>
                                <div className="list-menus py-3">
                                    <ul className="list-unstyled d-flex flex-column gap-4">
                                        <li>
                                            <Link to="/" onClick={toggleMenu}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="about-us"
                                                onClick={toggleMenu}
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span>Our Services</span>
                                            </div>
                                            <div
                                                className="angle-downIcon"
                                                onClick={toggleVisibility}
                                            >
                                                <FaAngleDown />
                                            </div>
                                        </li>
                                        {isVisible && (
                                            <Accordion className="sideMobile-tab">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="">
                                                        Technology
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            <ul className="list-unstyled d-flex flex-column">
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/web-portal-development-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Enterprise
                                                                        Portal
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/lowcode-nocode-app"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        lowCode/noCode-app
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/blockchain-web-development-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Blockchain
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/saas-app-development-company-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Saas
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/laravel-development-company-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Laravel
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/mobile-app-development-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Mobile
                                                                        App
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/woocommerce-development-services-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        WooCommerce
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-magento-developers-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Magento
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/shopify-development"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Shopify
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/ar-vr-development"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        AR/VR
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/website-development-company-in-chandigarh-and-mohali"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Website
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/ecommerce-website-designing-company-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        E-commerce
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/react-native-developers-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        React
                                                                        Native
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/software-development-company-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Software
                                                                        Development
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item
                                                    eventKey="1"
                                                    className="mt-2"
                                                >
                                                    <Accordion.Header>
                                                        Marketing
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            <ul className="list-unstyled d-flex flex-column">
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/digital-marketing-services-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Performance
                                                                        Marketing
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/social-media-marketing-agency-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Social
                                                                        Media
                                                                        Marketing
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-seo-services-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Search
                                                                        Engine
                                                                        Optimization
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item
                                                    eventKey="2"
                                                    className="mt-2"
                                                >
                                                    <Accordion.Header>
                                                        Design
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            <ul className="list-unstyled d-flex flex-column">
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-ui-ux-designers-in-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        UI UX
                                                                        Design
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item
                                                    eventKey="3"
                                                    className="mt-2"
                                                >
                                                    <Accordion.Header>
                                                        Products
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            <ul className="list-unstyled d-flex flex-column">
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/ai-chatbot-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        AI Chat
                                                                        Bot
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/crypto-wallet-solutions-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Crypto
                                                                        Wallet
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/24-games-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Game (24
                                                                        Game)
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/crypto-exchange-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Crypto
                                                                        Exchange
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/layer1-layer2-blockchain-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Layer
                                                                        1/Layer
                                                                        2
                                                                        BlockChain
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/crm-erp"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        CRM/ERP
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/trading-bot-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Trading
                                                                        Bot
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/mlm-software-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        MLM
                                                                        Software
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/school-management-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        School
                                                                        Management
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/hospital-management-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Hospital
                                                                        Management
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/dap-dao-chandigarh-panchkula"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        DAP/DAO
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/job-portal-solutions"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Job
                                                                        Portal
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/uber-ola-clone-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Uber/Ola
                                                                        Clone
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/zomato-urbanup-clone-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Zomato/Urbanup
                                                                        Clone
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/multi-vendor-ecommerce-panchkula-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Multivendor
                                                                        Ecommerce
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item
                                                    eventKey="4"
                                                    className="mt-2"
                                                >
                                                    <Accordion.Header>
                                                        Developers
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div>
                                                            <ul className="list-unstyled d-flex flex-column">
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-crypto-exchange-developer-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Best
                                                                        Crypto
                                                                        Developers
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-blockchain-developer-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Best
                                                                        Blockchain
                                                                        Developers
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-mlm-software-developer-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Best MLM
                                                                        Developers
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-shopify-developer-chandigarh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Best
                                                                        Shopify
                                                                        Developers
                                                                    </Link>
                                                                </li>
                                                                <li className="py-2 border-bottom">
                                                                    <Link
                                                                        to="/best-smart-contract-developer-chandigarhh"
                                                                        onClick={
                                                                            toggleMenu
                                                                        }
                                                                    >
                                                                        Smart
                                                                        Contract
                                                                        Developers
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        )}
                                        <li>
                                            <Link
                                                to="/blog"
                                                onClick={toggleMenu}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/case-studies"
                                                onClick={toggleMenu}
                                            >
                                                Case Studies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contact-us"
                                                onClick={toggleMenu}
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Container>
                </section>
                <div
                    id="google_translate_element"
                    className="langtoggler "
                    style={{ zIndex: 9999 }}
                />
            </>
        </>
    );
}
