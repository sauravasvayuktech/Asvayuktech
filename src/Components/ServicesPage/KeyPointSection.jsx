import {  useLocation } from "react-router-dom";
// ;
import "../../App.css";
import check from "../../Images/check.webp";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function KeyPointSection({
    keyHeading,
    keyPara,
    keyPoint1,
    keyPoint2,
    keyPoint3,
    keyPoint4,
    keyPoint5,

    btnTitle,
    Group105518,
    hideKeyPoints,
    altTags = {} // ✅ Dynamic alt tags
}) {
    const location = useLocation();
    const checkShow = ["/performance"];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className="low-code-sec-tool">
            <div className="container">
                <div className="col-12">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tool-heading">
                                <h2>{keyHeading}</h2>
                                <p className="mt-4">{keyPara}</p>
                            </div>

                            <div className="toll-check-items d-flex gap-3">
                                {!hideKeyPoints && (
                                    <ul className="list-unstyled py-2">
                                        {[keyPoint1, keyPoint2, keyPoint3, keyPoint4, keyPoint5].map((point, index) => (
                                            point && (
                                                <li key={index} className="d-flex gap-1 py-1">
                                                    {!checkShow.includes(location.pathname) && (
                                                        <span>
                                                            <img
                                                                src={check}
                                                                alt={!hideKeyPoints ? altTags[`check${index + 1}`] || "" : ""}
                                                            />
                                                        </span>
                                                    )}
                                                    <span>{point}</span>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="heroBtn">
                                <div
                                    className="d-flex justify-content-between"
                                    onClick={handleShow}  // ✅ modal open
                                    style={{ cursor: "pointer" }} // ✅ optional
                                >
                                    <div className="btnText px-3 py-3 text-light">
                                        <span>{btnTitle}</span>
                                    </div>
                                    <div className="btn_icon px-4 py-2 align-content-center">
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>

                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='overflow-hidden w-100 h-100'>
                                        <iframe width="100%" height="510px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-5' allowfullscreen style={{ background: 'transparent' }}></iframe>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div className="col-lg-6 text-end">
                            <div className="tool-img">
                                <img
                                    src={Group105518}
                                    alt={altTags?.Group105518 || ""}
                                    className="img-fluid mt-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KeyPointSection;
