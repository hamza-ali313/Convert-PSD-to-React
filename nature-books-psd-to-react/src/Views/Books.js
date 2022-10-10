import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import book1 from "../images/1book.png"
import book2 from "../images/2nd-book.png"
import book3 from "../images/3book.png"

const Books = () => {
  return (
    <div className='books-sec'>
       <Container>
        <Row>
            <Col lg={3} md={12} sm={12}>
                <div className='img-sec'>
                    <img src={book1}/>
                </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
            <div className='img-sec main-book'>
            <div class="input-flds-right-btn">
            <button class="flds-btn">CLICK MORE</button>
            <div class="arrows-main">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </div>
          </div>
                    <img src={book2}/>
                </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
            <div className='img-sec'>
                    <img src={book3}/>
                </div>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Books