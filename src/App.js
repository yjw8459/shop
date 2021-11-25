/* eslint-disable */
import React, { useContext, useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart.js';

let 재고context = React.createContext();  //같은 값을 공유할 범위 생성
export let 재고context2 = React.createContext();  //다른 컴포넌트로 

function App() {
  let [shoes, shoes변경] = useState(data);
  let [재고, 재고변경] = useState([10,11,12]);

  
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
          <재고context.Provider value={재고}>
          <div className="row">
            {
              shoes.map((shoe, i) => {
                return <Items shoe={shoe} i={i} /> 
              }) 
            }
          </div>
          </재고context.Provider>
      </div>
      </Route>
      <Route path="/detail/:id">
          <Detail 재고={재고} />
      </Route>
</Switch>

      <Route path="/cart">
        <Cart></Cart>
      </Route>

    </div>


  );
}

function Items(props){

  let 재고 = useContext(재고context);

    return (     
        <div className="col-md-4">
          {props.key}
          <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" alt="test"></img>
          <h4>{props.shoe.title}</h4>
          <p>{props.shoe.content} & {props.shoe.price}</p>
          <Test></Test>
        </div>
       )
    
}

function Test(){
  let 재고 = useContext(재고context);
  return ( <p>{재고}</p> )
}



export default App;
