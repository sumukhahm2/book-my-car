import React,{ Fragment } from "react"
import CarDetails from './CarDetails'
import { useParams } from "react-router-dom"
import Details from "./Details"
const ShowCars=()=>{
const param=useParams();
    return(
        <Fragment>
            <CarDetails param={param.modelid} data={Details} type='id' surl='cars'/>
        </Fragment>
    )
}

export default ShowCars