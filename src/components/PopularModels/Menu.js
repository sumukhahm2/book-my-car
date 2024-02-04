import React,{Fragment} from 'react'
import {  Row ,Tabs,Tab, Col, Container,Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Menu.css'
import { Trending } from './FeaturedCars'
import { useParams } from 'react-router-dom'
const Menu=()=>{

const param=useParams()
console.log(param)
    return(
        <Fragment>
            <Container className='features-tab ' fluid>
                <h2>Featured Cars</h2>
                <Carousel data-bs-theme='dark'>
      <Carousel.Item interval={5000}>
        <Row>
            <h2 className='text-secondary'>TRENDING</h2>
        {Trending.filter(item=>item.id==='trending').map(item=>
              <Col className=' m-2'>
             <Link><img src={item.image} alt={item.name} className='border rounded '/></Link>
             <h4>{item.name}</h4>
             <h6>{item.price}</h6>
            </Col>
            )}
            </Row>
        
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Row>
        <h2 className='text-secondary'>POPULAR</h2>
      {Trending.filter(item=>item.id==='popular').map(item=>
              <Col className='  m-2'>
             <Link><img src={item.image} alt={item.name} className='border rounded'/></Link>
             <h4>{item.name}</h4>
             <h6>{item.price}</h6>
            </Col>
            )}
            </Row>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <Row>
        <h3 className='text-secondary'>UPCOMING</h3>
      {Trending.filter(item=>item.id==='upcoming').map(item=>
              <Col className='  m-2 '>
             <Link><img src={item.image} alt={item.name} className='border rounded'/></Link>
             <h4>{item.name}</h4>
             <h6>{item.price}</h6>
            </Col>
            )}
            </Row>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

             </Container>
        </Fragment>
    )
}

export default Menu