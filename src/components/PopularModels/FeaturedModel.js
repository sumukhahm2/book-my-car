import { Fragment } from "react"


import { Trending } from "./FeaturedCars"
import { useParams } from "react-router-dom"
import CarDetails from "../Cars/CarDetails"
const FeaturedModels=()=>{

  const param=useParams();
      return(
        <Fragment>
           <CarDetails param={param.featureid} data={Trending}/>
        </Fragment>
      )
}

export default FeaturedModels

