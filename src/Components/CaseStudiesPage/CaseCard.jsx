import '../../App.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { Row } from 'react-bootstrap'

function CaseCard({ caseLogo, caseTitle, tools1, tools2, tools3, countryName, url, btnTitle, caseImg, cardChild, cardImgClass }) {
    return (
        <>

            <Row className="singleTopgaping">
                <div className={`${cardChild} col-lg-6 col-12`}>
                    <div className="logo_img_case">
                        <img src={caseLogo} className="h-100 w-100" />
                    </div>
                    <h6 className="mt-3">{caseTitle}</h6>
                    <div className="card_buttons mt-3 d-flex gap-2 flex-wrap">
                        <span>{tools1}</span>
                        <span>{tools2}</span>
                        <span>{tools3}</span>
                    </div>
                    <div className="card_city_name my-5">
                        <h5 className="mb-0">Region</h5>
                        <h4 className="pt-2">{countryName}</h4>
                    </div>
                    <div className="heroBtn">
                        <Link to={url} className="d-flex  justify-content-between">
                            <div className="btnText px-3 py-3 text-light">
                                <span>{btnTitle}</span>
                            </div>
                            <div className="btn_icon px-4 py-2 align-content-center">
                                <FaChevronRight />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`${cardImgClass} mainCasediv col-lg-6 col-12 p-0`}>
                    <div className='cardImgMain pb-0 h-100'>
                        <img src={caseImg} className="h-100 w-100" />
                    </div>
                </div>
            </Row>

        </>
    )
}

export default CaseCard
