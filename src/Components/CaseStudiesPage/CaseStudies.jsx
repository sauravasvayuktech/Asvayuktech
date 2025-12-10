// import './CaseStudies.css'
import { Breadcrumb, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerButton from '../BannerBtn/BannerButton'
import CaseCard from './CaseCard'
import caseStuBanner from '../../Images/caseStuBanner.webp'
import caseStu from '../../Images/caseStu.webp'
import caseStu1 from '../../Images/caseStu1.webp'
import caseStu2 from '../../Images/caseStu2.webp'
import caseStu3 from '../../Images/caseStu3.webp'
import caseStu4 from '../../Images/caseStu4.webp'
import caseStu5 from '../../Images/caseStu5.webp'
import caseStu6 from '../../Images/caseStu6.webp'
import caseStu8 from '../../Images/caseStu8.webp'
import caseLogo1 from '../../Images/caseLogo1.webp'
import caseLogo2 from '../../Images/moonlight_logo.webp'
import caseLogo3 from '../../Images/caseLogo3.webp'
import caseLogo4 from '../../Images/49thcoffee_logo.webp'
import caseLogo5 from '../../Images/kri_logo.webp'
import caseLogo6 from '../../Images/SpiceTribe_logo.webp'
import caseLogo7 from '../../Images/bookmytask_logo.webp'
import caseLogo8 from '../../Images/kre.webp'
import Meta_Component from '../Meta_Component/Meta_Component'
import layerx from '../../Images/layerX.webp';
import btCash from '../../Images/btCash.webp';
import layerlogo from '../../Images/layerLogo.jpg';
import rel20 from '../../Images/rel20.png';

function CaseStudies() {
    return (

        <>
            <Meta_Component
                title="Asvayuk Technologies Case Studies | Success Stories & Client Results"
                description="Discover Asvayuk Technologies case studies on successful web development and digital marketing projects driving results for clients."
                canonical="https://asvayuktech.com/case-studies"
            />
            <main>

                <section className="caseStudies_main">
                    <Container className="pb-0 pb-lg-5 pb-md-5">
                        <div className="Casemain_content">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-12 ">
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Case Studies</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <h1 className="caseStuides_heading pt-3">Technological Innovations: Practical Solutions,
                                        Advancing Digital Evolution</h1>
                                    <div className='my-3 my-lg-5 my-md-5'>
                                        <BannerButton btnTitle='Free Consultation' url='/contact-us' />
                                    </div>
                                </div>
                                <div className="caseBanner col-lg-6 col-12">
                                    <img src={caseStuBanner} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="singleCaseplan py-5">
                    <Container>

                        <CaseCard caseLogo={caseLogo1} caseTitle='EVERY DAY, EVERY ADVENTURE.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='Australia' url='/case-studies/quadlock' btnTitle='View Case Study' caseImg={caseStu} cardChild='card_child_1' cardImgClass='card_img' />

                        <CaseCard caseLogo={caseLogo2} caseTitle='IT TAKES A CREATIVE MIND TO BE IN THE FASHION BUSINESS.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='Qatar' url='/case-studies/moonlightconcept' btnTitle='View Case Study' caseImg={caseStu2} cardChild='card_child_1 card_child_2' cardImgClass='card_img card_img2' />

                        <CaseCard caseLogo={caseLogo3} caseTitle='Modern lighting, furniture & accessories in Ottawa Canada.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='Canada' url='/case-studies/themodernshop' btnTitle='View Case Study' caseImg={caseStu3} cardChild='card_child_1 card_child_3' cardImgClass='card_img card_img3' />

                        <CaseCard caseLogo={caseLogo4} caseTitle='Small-batch roasting and always fresh.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='Canada' url='/case-studies/49thcoffee' btnTitle='View Case Study' caseImg={caseStu4} cardChild='card_child_1 card_child_4' cardImgClass='card_img card_img4' />

                        <CaseCard caseLogo={caseLogo5} caseTitle='Explore our exquisite collection of pearls jewellery and find your perfect piece today!' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='India' url='/case-studies/krishnapearlsandjewellers' btnTitle='View Case Study' caseImg={caseStu5} cardChild='card_child_1 card_child_5' cardImgClass='card_img card_img5' />

                        <CaseCard caseLogo={caseLogo6} caseTitle='Add Flavors to Your Recipes with the Favorite Spice-Brand of top Chefs.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='California' url='/case-studies/spicetribe' btnTitle='View Case Study' caseImg={caseStu1} cardChild='card_child_1 card_child_6' cardImgClass='card_img card_img6' />

                        <CaseCard caseLogo={caseLogo7} caseTitle='Connecting you with skilled professionals for every task, big or small.' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='California' url='/case-studies/bookmytask' btnTitle='View Case Study' caseImg={caseStu8} cardChild='card_child_1 card_child_7' cardImgClass='card_img card_img7' />

                        <CaseCard caseLogo={caseLogo8} caseTitle='Explore our exquisite collection of pearls jewellery and find your perfect piece today!' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='California' url='/case-studies/kreshya' btnTitle='View Case Study' caseImg={caseStu6} cardChild='card_child_1 card_child_8' cardImgClass='card_img card_img8' />

                        <CaseCard caseLogo={layerlogo} caseTitle='Welcome To LayerEx – Your Gateway To Seamless Crypto Trading!' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='California' url='/case-studies/layerx' btnTitle='View Case Study' caseImg={layerx} cardChild='card_child_1 card_child_9' cardImgClass='card_img card_img9' />    

                        <CaseCard caseLogo={rel20} caseTitle='MTHT Token Listing' tools1='shopify Development' tools2='User journey' tools3='UX Writing' countryName='California' url='/case-studies/kreshya' btnTitle='View Case Study' caseImg={btCash} cardChild='card_child_1 card_child_10' cardImgClass='card_img card_img10' />
                    </Container>
                </section>
            </main>
        </>
    )
}

export default CaseStudies
