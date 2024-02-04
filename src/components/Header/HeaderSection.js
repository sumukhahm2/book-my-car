import { Fragment,react } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Car from '../../images/car.jpeg'
import Car2 from '../../images/car2.jpeg'
import './Header.css';
const HeaderSection=()=>{

    return(
    <Fragment>
      <Container className='header-section ' > 
       <Row>
         <h1 className='text-secondary'>Looking For Cars?....!</h1>
         <h4 className='text-muted'> Here you can find the best cars you want with all types and best quality of top-end,mid-version,basic cars for reasonable rate Hurry......  </h4>
       </Row>
       <Row>
         <Col>
         <img src={Car} alt='car' className='w-75 '/>
         </Col>
          <Col>
          <img src={Car2} alt='car2' className='w-75'/>
          </Col>
       </Row>
       </Container> 
    </Fragment>
    );
}

export default HeaderSection
