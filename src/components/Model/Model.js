import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import ModelDetails from "../../images/ModelDetails";
import './Model.css'
const Model=()=>{
   

    return(
       <section className="section1">
          <h2>Choose Your Model Here</h2>
          <Container className="models" >
            <Row>
              {ModelDetails.map(model=>
                <Col className="col-lg-2 col-md-2 col-sm-2 border shadow-sm ">
                   <Link to={`/cars/${model.modeltitle}`}><img src={model.image} alt={model.modeltitle}/></Link> 
                </Col>
                )}
                </Row>
                <hr/>
           </Container>
       </section>
    );
}

export default Model