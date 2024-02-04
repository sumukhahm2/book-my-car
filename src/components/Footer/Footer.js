import React,{Fragment} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './Footer.css'


const Footer=()=>{

    return(
        <Fragment>
            <Container fluid className='footer'>
                <Row>
                    <Col>
                         <Row>Language: English</Row>
                         <Row className='m-2'>
                              <Col>About Us</Col>
                              <Col>Terms & Condition</Col>

                         </Row>
                         <Row>
                         <Col>Career</Col>
                         <Col>Advertise</Col>

                         </Row>
                    </Col>
                    <Col>
                      <Row>
                           <p>Connect With Us</p>
                      </Row>
                      <Row>
                          <Col ></Col>
                          <Col></Col>
                          <Col></Col>
                          <Col><i className="fa-brands fa-facebook "></i></Col>
                          <Col><i className="fa-brands fa-youtube"></i></Col>
                          <Col><i className="fa-brands fa-linkedin"></i></Col>
                          <Col><i className="fa-brands fa-twitter"></i></Col>
                          <Col><i className="fa-brands fa-instagram"></i></Col>
                      </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Footer