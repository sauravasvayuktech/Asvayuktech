import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import right_logo from '../../Images/right-logo-2.webp'
import about_bg from '../../Images/abtbg.webp'
import circle_1 from '../../Images/circle_1.png'
import circle_2 from '../../Images/circle_2.png'
import core_image from '../../Images/circle_3.png'
import Group_415 from '../../Images/Group-415 (1).webp'
import raacomfavicon from '../../Images/circle_5.png'
import iso_img from '../../Images/iso-img.webp'
import shopify_img from '../../Images/shopify-img.webp'
import hubspot_img from '../../Images/hubspot-img.webp'
import good_firms_logo from '../../Images/good-firms-logo.webp'
import clutch_img from '../../Images/clutch-img.webp'
import meydan from '../../Images/meydan.webp'
import it_firms from '../../Images/it-firms.webp'
import msme_img from '../../Images/msme-img.webp'
import silicoon_india from '../../Images/silicoon-india.webp'
import magento_img from '../../Images/magento-img.webp'
import startup_india from '../../Images/startup-india.webp'
import iso_20 from '../../Images/iso-img.webp'
import container from '../../Images/container.webp'
import planning from '../../Images/planning.webp'
import pen from '../../Images/pen.webp'
import development from '../../Images/development.webp'
import test from '../../Images/test.webp'
import launch from '../../Images/launch.webp'
import Meta_Component from '../Meta_Component/Meta_Component';
const About = () => {
  return (
    <>
      <Meta_Component
        title="About Asvayuk Technologies: Our Story & Expertise in Web Development"
        description="Discover Asvayuk Technologies, a leader in web development & digital marketing in Chandigarh since 2013. Learn about our mission, expertise, & team"
        canonical="https://asvayuktech.com/about-us"
      />

      <main>

        <div className="about_section">
          <Container>
            <Row>
              <div className="left-box col-lg-6 pt-4">
                <nav
                  style={{ bsBreadcrumbDivider: '">"' }}
                  aria-label="breadcrumb"
                  className="border-0"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className='fw-semibold'>
                      <MdKeyboardArrowRight />
                      About Us
                    </li>
                  </ol>
                </nav>
                <h1 className="left-para pt-1">
                <Link to="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">
                  Asvayuk Technologies: Pioneering IT Solutions for Your Business Growth
                  </Link>
                </h1>
              </div>
              <div className="right-box col-lg-6 mt-4  d-lg-block">
                <img src={right_logo} alt="Best IT Solutions Company in Chandigarh" className="img-fluid" />
              </div>
            </Row>
            <Row className="py-5 my-0">
              <Col lg={4} pb={2} pb-lg={0} pb-md={0}>
                <div className="about_img">
                  <img src={about_bg} className="img-fluid h-md-75 w-100" alt="web designing company in chandigarh it park" />
                </div>

              </Col>
              <Col lg={8} className="partner-para-right">
                <div className="px-3 py-3 py-md-0">
                  <h2>
                    <span>Your ultimate partner</span> for
                    <br />
                    all IT needs!
                  </h2>
                  <p className="para-below mt-4">
                    Asvayuk Technologies is your trusted global partner for advanced technology solutions.
                    More than just an IT company, we're your digital growth engine. We empower
                    businesses with a powerful mix of cutting-edge expertise, advanced skills, and
                    state-of-the-art infrastructure. Whether you need custom software solutions to
                    optimize operations, digital marketing strategies to attract and convert customers,
                    or robust SaaS, ERP, and e-commerce platforms to enhance efficiency and sales,
                    we're here to help you achieve your objectives.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className='Our-Mission'>
          <Container>
            <Row className="row pb-5 pt-1">
              <Col lg={6} className='our-mission'>

                <div className="core-values d-flex align-items-center gap-3">
                  <h1>Our Mission</h1>
                  <img src={circle_1} alt='it services in chandigarh'/>
                </div>
                <p className="pe-3">
                  To achieve global recognition as a leading provider of top-tier solutions for businesses by harnessing the power of technology and human expertise. At Asvayuk Technologies, we specialize in blockchain development and crypto development in Chandigarh, empowering businesses to confidently navigate the complexities of the digital age, driving their growth and success in a dynamic, interconnected world.
                </p>
              </Col>
              <Col lg={6} className='our-vision'>
                <div className="core-values d-flex align-items-center gap-3">
                  <h1>Our Vision</h1>
                  <img src={circle_2} alt='best it services in chandigarh and mohali'/>
                </div>
                <p>
                  Crafting solutions for 21st-century businesses, Asvayuk Technologies strives to be the go-to company offering ultimate digital services through a dedicated team of skilled professionals. Specializing in software development and Shopify development in Chandigarh, our core values drive us to harness the full potential of modern solutions.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="whole-section-core  pb-5">
          <Container>
            <div className="core-values d-flex justify-content-center align-items-center pb-4">
              <h1>Core values</h1>
              <img src={core_image} className="" alt='top it company in mohali'/>
            </div>
            <Row className=" align-items-center">
              <Col lg={4} md={6} sm={12} className='d-flex flex-column gap-md-5'>
                <div className="core-left-first core_left_content">
                  <h5>Creating value for customers</h5>
                  <p>
                    Fostering strong relationships through excellence and positively
                    impacting our customers' businesses.
                  </p>
                </div>
                <div className="core-left-second core_left_content">
                  <h5>Promoting a culture of mutual respect</h5>
                  <p>
                    At Asvayuk Technologies, we are committed to establishing an environment that fosters warmth and a sense of belonging, creating a win-win situation, and encouraging a proactive attitude within the team.
                  </p>
                </div>
                <div className="core-left-third core_left_content">
                  <h5>Accountability</h5>
                  <p>
                    Taking ownership of our actions and decisions, recognizing that each
                    choice we make positively affects our clients and partners.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='d-flex justify-content-center d-none d-lg-block d-md-block'>
                <div className="core-main-image">
                  <img
                    src={Group_415}
                    alt="it software companies in chandigarh"
                    className="core-main img-fluid"
                  />
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='d-flex flex-column gap-md-5'>
                <div className="core-left-first core_left_content">
                  <h5>Integrity</h5>
                  <p>
                    At Asvayuk Technologies, we are a trusted blockchain solution provider committed to integrity and accountability, ensuring ethical practices and exceeding your expectations.
                  </p>
                </div>
                <div className="core-left-second core_left_content">
                  <h5>Reliability</h5>
                  <p>

                    Demonstrating reliability through timely deliveries, accurate
                    advice, and consistent support, our commitment to this principle
                    strengthens confidence in our solutions and services.
                  </p>
                </div>
                <div className="core-left-third core_left_content">
                  <h5>Dynamism</h5>
                  <p>

                    Embracing technological advancements and advocating for continuous
                    improvement.
                  </p>
                </div>
              </Col>
            </Row>

          </Container>
        </section>

        <section className="Connecting_Ideas container-fluid">
          <div className="row">
            <div className="col-12 connecting bg-black text-center p-3">
              <h2>Connecting Ideas for Progress and Innovation</h2>
            </div>
          </div>
        </section>

        <section className="significance-section">
          <Container>
            <div className="signi-head d-flex text-center flex-column pt-5">
              <h1 className="fw-semibold pt-3">Significance Of Our Identity</h1>
              <p className="signi-para mt-4">
                At Asvayuk Technologies, a leading Website Design Company in Panchkula specializing in Crypto and Blockchain Development in Chandigarh, we are committed to continually innovating to address contemporary data challenges. With our new brand identity, we empower our clients to succeed in a dynamic world. Our brand is built on a foundation of fluidity, resourcefulness, optimism, and unwavering consistency.
              </p>
            </div>
            <Row className="py-4 align-items-center">
              <Col lg={5} md={12} sm={12} className="card-one ">
                <p>
                  The hexagon symbolizes our commitment to core values, customers,
                  employees, partners, mentors, and the community. Integrating these
                  values enables us to cultivate long-term relationships with customers,
                  building mutual goodwill through our quality service and
                  performance-oriented approach.
                </p>
              </Col>
              <Col lg={2} md={12} className="col-lg-2">
                <div className="arrow-image text-center">
                  <img
                    src={raacomfavicon}
                    className="img-fluid"
                    alt='it solutions chandigarh'
                  />
                </div>
              </Col>
              <Col lg={5} md={12} sm={12} className="card-one">
                <p>
                  Blue, symbolizing technology, underscores our brand's association with
                  the technical niche. It represents our unwavering commitment to
                  security and trust as core values, highlighting the limitless
                  possibilities technology offers when applied wisely and its potential
                  for future advancements.
                </p>
              </Col>
            </Row>
            <div className="card-one mx-lg-auto card-one-para">
              <p>
                The letter A, shaped as an upward arrow, embodies our dedication to customer growth through the synergy of technology and our team's domain expertise across various industries. This approach enables us to deliver world-class end-to-end solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <Container>
              <Col xs={12} className="d-flex justify-content-center mt-5">
                <div className="certfication-headline">
                  <h1 className="fw-semibold">Our Certifications &amp; Recognitions</h1>
                </div>
              </Col>
              <Row className="py-5 signi-img">
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={iso_img} className="img-fluid" alt='it park chandigarh companies list'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={shopify_img} className="img-fluid" alt='it companies in chandigarh for freshers'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={hubspot_img} className="img-fluid" alt='top it companies in mohali'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img className="goodfirm" src={good_firms_logo} alt='best it companies in chandigarh'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={clutch_img} className="img-fluid" alt='web designing company in chandigarh it park'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img className="dubai" src={meydan} alt='it services in chandigarh'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={it_firms} className="img-fluid" alt='best it services in chandigarh and mohali'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={msme_img} className="img-fluid" alt='top it company in mohali'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={silicoon_india} className="img-fluid" alt='it software companies in chandigarh'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={magento_img} className="img-fluid" alt='it solutions chandigarh'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img className="startup-india" src={startup_india} alt='it park chandigarh companies list'/>
                  </div>
                </Col>
                <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <img src={iso_20} className="img-fluid" alt='it companies in chandigarh for freshers'/>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>

        <section className="bg-section">
          <Container>
            <Row className="d-flex flex-column text-center">
              <div className="main-bg w-100">
                <div className="inside-main py-5">
                  <h1 className="">What We Do Here?</h1>
                  <div className="work-para mt-5 ">
                    <p className='text-center'>
                      At Asvayuk Technologies, we take pride in our collaborative approach, working hand-in-hand with your team to dive deep into your unique goals and challenges. By fostering this partnership, we craft tailored solutions that harness the power of advanced technology. Our commitment ensures that your journey to success is not just guided but fueled with precision and passion. Together, we will turn your vision into reality!
                    </p>
                  </div>

                  <Row className="curly-img mt-5 d-flex ">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={container} alt='top it companies in mohali'/>
                        <h6 className="mt-3">Info Gathering</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={planning} alt='best it companies in chandigarh'/>
                        <h6 className="mt-3">Planning</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={pen} alt='web designing company in chandigarh it park'/>
                        <h6 className="mt-3">Design</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={development} alt='it services in chandigarh'/>
                        <h6 className="mt-3">Development</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={test} alt='best it services in chandigarh and mohali'/>
                        <h6 className="mt-3">Test</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <img src={launch} alt='top it company in mohali'/>
                        <h6 className="mt-3">Launch</h6>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

            </Row>
          </Container>
        </section>

      </main>
    </>
  );
};

export default About;
