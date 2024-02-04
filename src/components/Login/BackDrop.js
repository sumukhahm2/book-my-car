import React,{ Fragment } from 'react'
import Login from './Login';
import './BackDrop.css'
import ReactDOM from 'react-dom'

const BackDrop=(props)=>{

    return(

        <Fragment>
         <div className='backdrop' onClick={props.onConfirm}>
            
         </div>
        </Fragment>
    );
}

const LoginOverLay=(props)=>{

    return(
      <Fragment>
         {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop'))}
          {ReactDOM.createPortal(<Login onConfirm={props.onConfirm}/>,document.getElementById('overlay'))}
      </Fragment>
    );
  }

export default LoginOverLay