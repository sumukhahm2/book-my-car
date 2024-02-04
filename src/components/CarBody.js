import React from 'react'
import { Container, Row,Col, Button } from 'react-bootstrap'
import './CarBody.css'
import { Link } from 'react-router-dom'

   const body=['Sedan','Coupe','Hatchback','PickUp','OffRoad','Sport','Micro','Van','Convertible','Crossover','SUV','MUV','Muscle','Roadster','Cabriolet']
const CarBody=()=>{
    return(
    <Container className='carbody' fluid>
        <h2 className='mb-3'>Search by Type of Body</h2>
        <Row>
            {body.map(item=>
                <Col className='col-md-3 col-sm-4 col-lg-2 '>
                     <Link className='button-body-type' to={`type/${item}`}>{item}</Link>
                </Col>
                )}
        </Row>
    </Container>
    )
}
export default CarBody