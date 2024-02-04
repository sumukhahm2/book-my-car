import React,{ Fragment } from "react"
import CarDetails from "./Cars/CarDetails"
import { useParams } from "react-router-dom"
import Details from "./Cars/Details"
const ShowCarTypes=()=>{
const param=useParams();
    return(
        <Fragment>
            <CarDetails param={param.bodytype} data={Details} type='type' surl='type'/>
        </Fragment>
    )
}

export default ShowCarTypes