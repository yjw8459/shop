/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';


function App() {
  let [shoes, shoes변경] = useState(data);
  

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{ /* URL 변경 시 페이지 이동을 할 수 있게 해주는 Route  */ }
<Switch>
      <Route exact path="/">
        <div style={{height:'300px', backgroundColor:'grey'}} className="background">
          <h1>20% Season Off</h1>
          <p>
            YJW Shoe ShoeShop
              age : 27

          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
        <div className="container">
        <div className="row">
          {
            shoes.map((shoe, i) => {
              return <Items shoe={shoe} i={i} /> 
            }) 
          }
        </div>
      </div>
      </Route>
      <Route path="/detail/:id">
          <Detail/>
      </Route>
</Switch>



    </div>


  );
}

function Items(props){
    return (     
        <div className="col-md-4">
          {props.key}
          <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" alt="test"></img>
          <h4>{props.shoe.title}</h4>
          <p>{props.shoe.content} & {props.shoe.price}</p>
        </div>
       )
    
}

export default App;
