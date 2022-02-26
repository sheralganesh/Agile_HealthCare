import React from "react";
import { Button, Container,  Navbar } from "react-bootstrap";
import {  withRouter } from "react-router-dom";

function NavigationBar(props) {
  return (
    <div>
      <div className="container1">
        <Navbar bg="dark" variant="dark">
          <Container className="container1">
            <Navbar.Brand href="/" style={{fontSize:30, marginLeft:'10'}}>Menu page</Navbar.Brand>
          </Container>
          <Button variant="info" onClick={() => {
              localStorage.clear();
              props.history.push("/login");
            }} className="mx-5 btn btn-primary " >  Log Out</Button>{' '}
          
        </Navbar>
      </div>
    </div>
  );
}

export default withRouter(NavigationBar);
