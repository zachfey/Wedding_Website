import React, { useState } from 'react';
import './App.scss';
import { Route, BrowserRouter as Router,  Redirect } from 'react-router-dom';
import { Button, Image, Navbar, Nav } from 'react-bootstrap';
import MainPage from './components/mainPage/mainPage';
import Location from './components/location/location';
import Accommodations from './components/accommodations/accommodations';
import Registry from './components/registry/registry';
import DressCode from './components/dressCode/dressCode';
import RSVP from './components/rsvp/rsvp';
import Gallery from './components/gallery/gallery';
import banner from "./images/Banner_Photos/invitationDesign.png";

function App() {
  const [showRSVPModal, setShow] = useState(false);
  const resetShowRSVPModal = () => {
    setShow(false);
  }
  const setShowRSVPModal = () => { 
    setShow(true) 
  }
  return (
    <div className="App">
      <div className="content">
        <div id='image-container'>
          <Image src={banner} fluid id="banner-image"/>
          <div id='names'>Katie & Zach</div>
        </div>
        <Router>
        <Navbar collapseOnSelect id="app-navbar" expand="md" bg="light" sticky="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center wedding-nav link nav-link" fill>
              
                <Nav.Link eventKey="1" onClick={setShowRSVPModal}>RSVP</Nav.Link>
              
              
                <Nav.Link eventKey="2" to="/home" href="/home">Home</Nav.Link>
              
              
                <Nav.Link eventKey="3" to="/location" href="/location">Location</Nav.Link>
              
              
                <Nav.Link eventKey="4" to="/accommodations" href="/accommodations">Accommodations</Nav.Link>
              
              
                <Nav.Link eventKey="5" to="/attire" href="/attire">Dress Code</Nav.Link>
              
              
                <Nav.Link eventKey="6" to="/registry" href="/registry">Registry</Nav.Link>
              
              
                <Nav.Link eventKey="7" to="/gallery" href="/gallery">Gallery </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <RSVP showRSVPLookupModal={showRSVPModal} resetShowRSVPModal={resetShowRSVPModal} />
          <div>
            <Route
                    exact
                    strict
                    path="/"
                    render={() => <Redirect to="/home" href="/home" />}
                  />
            
            <Route path="/home" component={MainPage} />
            <Route path="/location" component={Location} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/registry" component={Registry} />
            <Route path="/attire" component={DressCode} />
          </div>
        </Router>
      </div>
      <div className="rsvp-button-container">
          <Button id="rsvp-button" variant="primary" size="lg" onClick={setShowRSVPModal}>RSVP</Button>
      </div>
    </div>

  );
}
export default App;
