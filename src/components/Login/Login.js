import React,{Fragment,useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import { Form,Button, Container ,Row} from "react-bootstrap";
import './Login.css'
import GoogleIcon from '../../images/icons8-google-logo-48.png'
import { useDispatch,useSelector } from 'react-redux';
import { authAction } from '../ReduxStore/LoginSlice';
import { useNavigate } from 'react-router-dom';

const Login=(props)=>{
   const [inLogin,setInLogin]=useState(true);
   const emailRef=useRef();
   const passwordRef=useRef()
   const confirmPasswordRef=useRef()
   const dispatch=useDispatch()
  const error=useSelector((state)=>state.auth.authError)
  const navigate=useNavigate()

   const switchModeHandler=()=>{
     setInLogin((prev)=>{
        return !prev
     })
   }

   const  authenticationHandler=async(event)=>{
    event.preventDefault()
     if(!inLogin && passwordRef.current.value!==confirmPasswordRef.current.value)
     {
        dispatch(authAction.setError('Password MissMatch!'))
        
     }
     let response
     let data
    if(!inLogin)
    {
      response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2yXnlLdNwXNth8Hw8FmGETUDiu_6eXgk',
      {
        method:'POST',
        body:JSON.stringify({
            email:emailRef.current.value,
            password:passwordRef.current.value,
            returnSecureToken:true
        }),
         headers:{
            'Content-Type': 'application/json'
         }
      }
      )
    }
    else{
        response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2yXnlLdNwXNth8Hw8FmGETUDiu_6eXgk',
        {
          method:'POST',
          body:JSON.stringify({
              email:emailRef.current.value,
              password:passwordRef.current.value,
              returnSecureToken:true
          }),
           headers:{
            'Content-Type': 'application/json'
         }
        }
        )
    }
    data=await response.json()
    if(data && data.error && data.error.message)
    {
       console.log(data.error.message)
       dispatch(authAction.setError(data.error.message))
    }
    else if(data.idToken){
      
    dispatch(authAction.setToken({token:data.idToken,email:data.email}))
    dispatch(authAction.login())
    navigate('/')
    }
   }
       return(
        <Fragment >
            
            <Row className='login-form'>
            <button type="button" className="btn-close" aria-label="Close" onClick={props.onConfirm} ></button>
            <Form className='w-75 mt-3' onSubmit={authenticationHandler}>
            <Form.Text className='text-center text-primary'><h3>{inLogin?'Login Form':'SignUp Form'} </h3></Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className=''>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>
      {!inLogin && <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label className=''>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={confirmPasswordRef}/>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      {error && <p className='text-danger'>{error}</p>}
      <Button variant="primary" type="submit" className='login-submit' >
        {inLogin?'Login':'SignUp'}
      </Button>
      <Button  onClick={switchModeHandler} className='switch-link'>{inLogin?'SignUp':'LogIn'}</Button>
      <Button className='google-signin'><img src={GoogleIcon} alt='google-icon' className='google'/> Login with Google</Button>
    </Form>
            </Row>
        </Fragment>
    );
}
export default Login