// import { useState, useEffect } from 'react';
// import { Row } from 'react-bootstrap';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
// import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
// import { MdMail } from 'react-icons/md';
// import '../../App.css'

// const AutoPopupModal = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const idleCallback = requestIdleCallback(() => {
//             setTimeout(() => setIsVisible(true), 3000);
//         });

//         return () => cancelIdleCallback(idleCallback);
//     }, []);

//     const handleClose = () => {
//         setIsVisible(false);

//         // Reopen the modal after 3 seconds (adjust timing as needed)
//         // const reopenTimeout = setTimeout(() => {
//         //     setIsVisible(true);
//         // }, 5000);

//         return () => clearTimeout(); // Clean up the timeout if the modal is closed again
//     };

//     return (
//         <>
//             {isVisible && (
//                 <div className="modal-overlay1">
//                     <div className="modal-popup1">
//                         <button className="close-button bg-transparent border-0 text-end w-100 fs-3" style={{ mixBlendMode: 'difference', color: '#fff' }} onClick={handleClose}>
//                             &times;
//                         </button>
//                         <div className="form">
//                             <Row>
//                                 <div className="contact-info d-none d-lg-block col-lg-6 px-5">
//                                     <h3 className="title">Let's get in touch</h3>
//                                     <p className="text">
//                                         Ready to grow? Reach out to Asvayuk Technologies for software and digital marketing!
//                                     </p>
//                                     <div className="info">
//                                         <div className="information">
//                                             <FaLocationDot />
//                                             <a href="https://maps.google.com/?q=SCO-44, Sector 5-MDC,Panchkula,Haryana" target="_blank">
//                                                 <p>SCO-44, Sector 5-MDC, Panchkula, Haryana</p>
//                                             </a>
//                                         </div>
//                                         <div className="information">
//                                             <MdMail />
//                                             <a href="mailto:info@asvayuktech.com">
//                                                 <p>info@asvayuktech.com</p>
//                                             </a>
//                                         </div>
//                                         <div className="information">
//                                             <FaPhone />
//                                             <a href="tel:+91 09876475990">
//                                                 <p>+91 09876475990</p>
//                                             </a>
//                                         </div>
//                                     </div>
//                                     <div className="social-media">
//                                         <p>Connect with us :</p>
//                                         <div className="social-icons">
//                                             <a href="https://www.facebook.com/asvayuktechnologies/" target="_blank">
//                                                 <FaFacebookF />
//                                             </a>
//                                             <a href="https://x.com/asvayuktech" target="_blank" rel="noopener noreferrer">
//                                                 <FaXTwitter />
//                                             </a>
//                                             <a href="https://www.instagram.com/asvayuktechnologies/" target="_blank" rel="noopener noreferrer">
//                                                 <FaInstagram />
//                                             </a>
//                                             <a href="https://www.linkedin.com/company/asvayuk-technologies-pvt-ltd/posts/?feedView=all" target="_blank">
//                                                 <FaLinkedinIn />
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='contact-form col-lg-6 '>
//                                     <iframe id='iframeForm' width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-3' style={{ background: 'transparent' }} loading="lazy" allowfullscreen></iframe>
//                                 </div>
//                             </Row>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </>
//     );
// };

// export default AutoPopupModal;


import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Form, Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import '../../App.css'

const AutoPopupModal = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let idleId;

        if ('requestIdleCallback' in window) {
            idleId = window.requestIdleCallback(() => {
                setTimeout(() => setIsVisible(true), 3000);
            });
        } else {
            // iOS Safari fallback
            idleId = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
        }

        return () => {
            if ('cancelIdleCallback' in window) {
                window.cancelIdleCallback(idleId);
            } else {
                clearTimeout(idleId);
            }
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);

        // Reopen the modal after 3 seconds (adjust timing as needed)
        // const reopenTimeout = setTimeout(() => {
        //     setIsVisible(true);
        // }, 5000);

        return () => clearTimeout(); // Clean up the timeout if the modal is closed again
    };



    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_87vr8sz",
            "template_k6nh2kz",
            form,
            "a5Sb8Lr7sTox9Curn"
        )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch((err) => {
                alert("Failed to send message");
                console.log(err);
            });
    };

    return (
        <>
            {isVisible && (
                <div className="modal-overlay1">
                    <div className="modal-popup1">
                        <button className="close-button bg-transparent border-0 text-end w-100 fs-3" style={{ mixBlendMode: 'difference', color: '#fff' }} onClick={handleClose}>
                            &times;
                        </button>
                        <div className="form">
                            <Row>
                                <div className="contact-info d-none d-lg-block col-lg-6 px-5">
                                    <h3 className="title">Let's get in touch</h3>
                                    <p className="text">
                                        Ready to grow? Reach out to Asvayuk Technologies for software and digital marketing!
                                    </p>
                                    <div className="info">
                                        <div className="information">
                                            <FaLocationDot />
                                            <a href="https://maps.google.com/?q=SCO-44, Sector 5-MDC,Panchkula,Haryana" target="_blank">
                                                <p>SCO-44, Sector 5-MDC, Panchkula, Haryana</p>
                                            </a>
                                        </div>
                                        <div className="information">
                                            <MdMail />
                                            <a href="mailto:info@asvayuktech.com">
                                                <p>info@asvayuktech.com</p>
                                            </a>
                                        </div>
                                        <div className="information">
                                            <FaPhone />
                                            <a href="tel:+91 09876475990">
                                                <p>+91 09876475990</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="social-media">
                                        <p>Connect with us :</p>
                                        <div className="social-icons">
                                            <a href="https://www.facebook.com/asvayuktechnologies/" target="_blank">
                                                <FaFacebookF />
                                            </a>
                                            <a href="https://x.com/asvayuktech" target="_blank" rel="noopener noreferrer">
                                                <FaXTwitter />
                                            </a>
                                            <a href="https://www.instagram.com/asvayuktechnologies/" target="_blank" rel="noopener noreferrer">
                                                <FaInstagram />
                                            </a>
                                            <a href="https://www.linkedin.com/company/asvayuk-technologies-pvt-ltd/posts/?feedView=all" target="_blank">
                                                <FaLinkedinIn />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='contact-form col-lg-6 '>
                                    {/* <iframe id='iframeForm' width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-3' style={{ background: 'transparent' }} loading="lazy" allowfullscreen></iframe> */}
                                    <Form onSubmit={sendEmail}>
                                        <div className="row pt-0 pb-0 ">
                                            <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                                                <input name="name" onChange={handleChange} type="text" className="form-control" id="inputName"
                                                    placeholder="Enter your full name" />
                                            </div>
                                            <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                                                <input name="email" onChange={handleChange} type="email" className="form-control" id="inputEmail"
                                                    placeholder="Enter your email" />
                                            </div>
                                        </div>
                                        <div className="row pt-0">
                                            <div className="form-group col-12 pt-4 pt-lg-0 pt-md-0">
                                                <input name="phone" onChange={handleChange} type="text" className="form-control" id="inputName"
                                                    placeholder="Moible Number" />
                                            </div>

                                        </div>
                                        <div className="form-row message-group w-100 pb-0 pb-lg-4 pb-md-4">
                                            <div className="form-group col-lg-12 py-3 py-lg-0 py-md-0">
                                                <textarea name="message" onChange={handleChange} className="form-control" id="inputMessage" rows="5"
                                                    placeholder="Enter your message"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12 ">
                                                <button type="submit" className="submit_btn">Send Message</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default AutoPopupModal;
