
import React from "react"
import { Container,Row,Col,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './SearchItems.css'
const SearchItems=(props)=>{
 
    return(
        <>
          <Container className="search-list">
             <Row>
                {props.data.length==0 && <h4>No Items Found!..</h4>}
                 {props.data.map(item=>
               <Col className="col-md-4 col-sm-4 col-lg-4">
                   <Row>
                       <Link to={`/cars/${item.id}/${item.name}`}><img src={item.image} alt={item.name}/></Link>
                   </Row>
                   <Row>
                       <h3>{item.name}</h3>
                    </Row>
               </Col>
                )}
                </Row>
                
                
          </Container>
        </>
    )
}

export default SearchItems