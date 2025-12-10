import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../../App.css'
import React, { useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
function BannerButton({ btnTitle, url, blockChainClass, icon }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
        <div className={blockChainClass ? blockChainClass : "heroBtn"}>
          <Link to={url} className="d-flex  justify-content-between" onClick={(e) => {
            e.preventDefault();
            handleShow();
          }}>
            {blockChainClass ? (
               <span className='d-flex align-items-center gap-2'>{icon}{btnTitle}</span>
            ) : (
              <>
              <div className="btnText px-3 py-3 text-light">
              <span>{btnTitle}</span>
            </div>
            <div className="btn_icon px-4 py-2 align-content-center">
              <FaChevronRight />
            </div>
              </>
            )}
            
          </Link>
        </div>
        
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className='overflow-hidden w-100 h-100'>
            <iframe width="100%" height="510px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-5' allowfullscreen style={{background: 'transparent'}}></iframe>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default BannerButton
