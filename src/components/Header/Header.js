import react,{Fragment,useState} from 'react';
import HeaderSection from './HeaderSection';
import { NavDropdown,Nav,Navbar,Container,Form,Row,Col,Button } from 'react-bootstrap';
import './Header.css'
import SearchItems from '../SearchItems/SearchItems';
import Details from '../Cars/Details';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../ReduxStore/LoginSlice';
import { Route,Routes } from 'react-router-dom';
const Header=()=>{
   const [query,setQuery]=useState("");
   const dispatch=useDispatch();
   const search=(data)=>{
      return data.filter(item=> item.name.toLowerCase().includes(query))
   }
    const isLogin=useSelector((state)=>state.auth.isAuthenticated)

    const logoutHandler=()=>{
    dispatch(authAction.logout())
    }
    console.log(isLogin)
    return(
       <Fragment>
       
          <Navbar expand="lg" className="bg-body-tertiary border border-bottom sticky-top ">
      <Container >
        <Navbar.Brand href="#home"><i className="fa-solid fa-car-side" > BookMyCar</i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!isLogin && <Nav.Link href="/login">Login</Nav.Link>}
            {isLogin && <Nav.Link href="/" onClick={logoutHandler}>Logout</Nav.Link>}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form inline className='form'>
        <Row >
          <Col xs="auto" className='col-8'>
            <Form.Control
              onChange={(e)=>setQuery(e.target.value)}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto" className=''>
            <Button type="submit" className='btn-info text-light'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
   
    {!query &&<Routes>
        <Route path='/' element={<HeaderSection/>}/>
      </Routes>}
     {query && <SearchItems data={search(Details)}/>}
     <hr/>
       </Fragment> 

    );
}
export default Header