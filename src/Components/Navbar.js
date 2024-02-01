import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdMovieFilter } from "react-icons/md";
import Home from "./Home";
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
            <div style={{display:'flex'}}>
            <MdMovieFilter size={35} />
             <LinkContainer to="/"> 
                <Nav.Link ><h3 style={{marginLeft:'10px'}}>MoviesShow</h3></Nav.Link>
              </LinkContainer>
            </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/movies">
                <Nav.Link className="navhead">Movies</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
