import React from "react"
import { Container, Row,Col,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Description from "./CarDescription";
import './CarDetails.css'
import CarBodyType from "./CarBodyType";

const CarDetails=(param)=>{
   //console.log(param.data.filter(item=>(param.type==='id'?item.id:item.type)===param.param))
  const details=(param.type==='id'?Description.filter(item=>item.name===param.param)[0].description:CarBodyType.filter(item=>item.name===param.param)[0].description)
  const heading=(param.type==='id'?Description.filter(item=>item.name===param.param)[0].heading:param.param)
  //console.log(Description.filter(item=>item.name===param.param)[0].description)
    return(
        <>
          <Container className="car-details">
            <h1>{heading}</h1>
            <p className="description">{details}</p>
            {param.data.filter(data=>(param.type==='id'?data.id:data.type)===param.param).length===0 && <h2>No Items Found</h2>}
             {param.data.filter(data=>(param.type==='id'?data.id:data.type)===param.param).map(item=>
                <Row key={item.id} className=' shadow-sm m-0 p-0 mb-2 border'>
                    <Col className="col-lg-6 ">
                       <Link to={`${param.surl}/${param.param}/${item.name}`}><img src={item.image} alt={item.name}/></Link>
                    </Col>
                    <Col>
                        <Row>
                            <h3>{item.name}</h3>
                        </Row>
                        <Row>
                             <h5>{item.price}</h5>
                        </Row>
                        <Row>
                            <p className="text-secondary">Avg. Ex-Showroom price</p>
                        </Row>
                        <Row className="more-offer-button">
                        <Button className="w-50 m-auto mb-2">Get More Offers</Button>
                        </Row>
                        
                    </Col>
                </Row>
                )}
          </Container>
        </>
    )
}

export default CarDetails