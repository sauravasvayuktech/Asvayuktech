import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WebServices = ({ card_img, card_head, card_para, card_color }) => {
  return (
    <>
      <main>
        <section className='Webservice_cards'>
          <div className="cards" style={{ backgroundColor: card_color }}>
            <Row className='align-items-center'>
              <Col lg={3} className='card1_img'>
                <img src={card_img} width={100} />
              </Col>
              <Col lg={9} className='card-1'>
                <h3>{card_head} </h3>
                <p>{card_para}</p>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </>
  )
}

export default WebServices